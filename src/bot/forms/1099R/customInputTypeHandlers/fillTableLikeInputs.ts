import { Page } from 'playwright';
import logger from '@/utils/logger';
import { IInput } from '../../declaration';

const INITIAL_NUMBER_OF_INPUTS = 7;

export async function fillTableLikeInputs({
  value,
  page,
  index,
  input,
}: {
  value: (string | number)[];
  page: Page;
  index: number;
  input: IInput;
}): Promise<void> {
  const { label, xpath, id, dataTestId } = input;
  try {
    logger.info(
      `Handling table-like inputs for: ${label} with values: ${value}`,
    );

    try {
      // Wait for the label to be visible
      logger.info('Waiting for the label to be visible...');
      const labelLocator = page.locator(`:has-text(${label})`).first();
      await labelLocator.waitFor({
        state: 'visible',
        timeout: 30000,
      });
    } catch (error) {
      logger.warn(
        `Label: ${label} not visible. Continuing execution. ${error}`,
      );
    }

    // Find the table containing the input using page.evaluate
    logger.info('Locating table and counting inputs using page.evaluate...');

    let numberOfInputs = await getInputNumber({ page, xpath, id, dataTestId });
    logger.info(`Initial number of inputs: ${numberOfInputs}`);

    // Calculate the required number of inputs
    const requiredInputs = INITIAL_NUMBER_OF_INPUTS * value.length;
    logger.info(`Required inputs: ${requiredInputs}`);

    // Add rows if necessary
    const addButtonSelector = "[aria-label='Add']";
    const addButton = page.locator(addButtonSelector);
    while (numberOfInputs < requiredInputs) {
      logger.info('Adding more rows...');
      await addButton.click();
      await page.waitForTimeout(1000);
      const newValues = await getInputNumber({ page, xpath, id, dataTestId });
      if (newValues === numberOfInputs) {
        break;
      } else if (newValues > numberOfInputs) {
        numberOfInputs = newValues;
      }
      logger.info(`Current number of inputs: ${numberOfInputs}`);
    }

    // Skip (15) St (data not provided) field and increment index to match the right input field
    if (index % INITIAL_NUMBER_OF_INPUTS !== 0) {
      logger.info(`Increment index: ${index} --> ${index + 1}`);
      index = index + 1;
    }

    logger.info(`Filling inputs...${index}`);

    for (let i = 0; i < value.length; i++) {
      if (value[i] === null || value[i] === undefined) {
        logger.info(
          `Skip input ${label}: with value: ${value[i]} --> not valid value`
        );
        continue;
      }

      const inputIndex = index + i * INITIAL_NUMBER_OF_INPUTS;
      const inputValue = value[i].toString();
      logger.info(`Current index: ${inputIndex}`);

      try {
        // Determine the best selector to use
        let table;
        if (id) {
          logger.info(`Using ID: ${id}`);
          // Locate the closest table using XPath
          table = page
            .locator(`xpath=//*[@id="${id}"]/ancestor::table`)
            .first();
        } else if (dataTestId && !table) {
          logger.info(`Using data-testid: ${dataTestId}`);
          // Locate the closest table using XPath with data-testid
          table = page
            .locator(`xpath=//*[@data-testid="${dataTestId}"]/ancestor::table`)
            .first();
        } else if (xpath && !table) {
          logger.info(`Using XPath: ${xpath}`);
          // Combine the provided XPath with ancestor::table
          table = page.locator(`xpath=${xpath}/ancestor::table`).first();
        } else {
          throw new Error('No valid selector provided to locate the input.');
        }

        // Wait for the table to be visible or handle it further
        try {
          await table.waitFor({ state: 'visible', timeout: 7000 });
        } catch (error) {
          logger.error(`Error waiting for table element: ${error}`);
        }

        // Get all inputs within the table using a relative XPath
        const inputs = await table.locator('input').all();

        if (inputIndex >= inputs.length) {
          throw new Error(
            `Input index ${inputIndex} is out of bounds. Total inputs: ${inputs.length}`,
          );
        }

        // Wait for the specific input to be visible and interactable
        try {
          await inputs[inputIndex].waitFor({ state: 'visible', timeout: 7000 });
        } catch (error) {
          logger.info(`Error waiting for element: ${error}`);
        }
        // Fill the input
        await inputs[inputIndex].fill(inputValue, { force: true });

        // Optional: Add a small delay to ensure the value "sticks"
        await page.waitForTimeout(100);

        // Verify the value was actually set
        const actualValue = await inputs[inputIndex].inputValue();
        if (actualValue !== inputValue) {
          // If verification fails, try one more time with type() instead of fill()
          await inputs[inputIndex].clear();
          await inputs[inputIndex].type(inputValue, { delay: 50 });

          const retryValue = await inputs[inputIndex].inputValue();
          if (retryValue !== inputValue) {
            throw new Error(
              `Value verification failed. Expected: ${inputValue}, Got: ${retryValue}`,
            );
          }
        }

        logger.info(
          `Successfully filled input at index ${inputIndex} with value: ${inputValue}`,
        );
      } catch (error) {
        logger.error(`Failed to fill input at index ${inputIndex}: ${error}`);
        throw error;
      }
    }

    logger.info(`Successfully handled table-like inputs for ${label}`);
  } catch (error) {
    logger.error(
      `Failed to handle table-like inputs for ${label} due to unexpected error.`,
      error,
    );
  }
}

export async function getInputNumber({
  page,
  id,
  dataTestId,
  xpath,
}: {
  page: Page;
  id?: string;
  dataTestId?: string;
  xpath?: string;
}): Promise<number> {
  const INITIAL_NUMBER_OF_INPUTS = 0;

  try {
    const numberOfInputs = await page.evaluate(
      ({ id, dataTestId, xpath }) => {
        let inputElement: HTMLInputElement | null = null;

        // Determine the best selector to locate the input
        if (id) {
          console.log(`Using ID: ${id}`);
          inputElement = document.querySelector(`#${id}`) as HTMLInputElement;
        } else if (dataTestId && !inputElement) {
          console.log(`Using data-testid: ${dataTestId}`);
          inputElement = document.querySelector(
            `[data-testid="${dataTestId}"]`,
          ) as HTMLInputElement;
        } else if (xpath && !inputElement) {
          console.log(`Using XPath: ${xpath}`);
          inputElement = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null,
          ).singleNodeValue as HTMLInputElement;
        }

        if (!inputElement) {
          throw new Error('Input element not found for the provided selector.');
        }

        // Locate the closest table containing the input
        const tableElement = inputElement.closest('table');
        if (!tableElement) {
          throw new Error('No table element found containing the input.');
        }

        // Return the number of input elements within the table
        return tableElement.querySelectorAll('input').length;
      },
      { id, dataTestId, xpath },
    );

    return numberOfInputs || INITIAL_NUMBER_OF_INPUTS;
  } catch (error) {
    logger.error('Error in getInputNumber:', error);
    return INITIAL_NUMBER_OF_INPUTS;
  }
}
