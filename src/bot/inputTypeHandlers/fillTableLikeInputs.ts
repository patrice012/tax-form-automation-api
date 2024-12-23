import { Page } from "playwright";
import logger from "../../utils/logger";

export async function fillTableLikeInputs({
  value,
  xpath,
  label,
  page,
  index,
}: {
  value: (string | number)[];
  xpath: string;
  label: string;
  page: Page;
  index: number;
}): Promise<void> {
  try {
    logger.info(
      `Handling table-like inputs for: ${label} with values: ${value}`
    );
    logger.info(`Using xpath: ${xpath}`);

    try {
      // Wait for the label to be visible
      logger.info("Waiting for the label to be visible...");
      const labelLocator = page.getByText(label).first();
      await labelLocator.waitFor({
        state: "visible",
        timeout: 30000,
      });
    } catch (error) {
      logger.warn(`Label: ${label} not visible. Continuing execution.`);
    }

    // Find the table containing the input using page.evaluate
    logger.info("Locating table and counting inputs using page.evaluate...");
    const INITIAL_NUMBER_OF_INPUTS = 7;

    let numberOfInputs = await getInputNumber({ page, xpath });
    logger.info(`Initial number of inputs: ${numberOfInputs}`);

    // Calculate the required number of inputs
    const requiredInputs = INITIAL_NUMBER_OF_INPUTS * value.length;
    logger.info(`Required inputs: ${requiredInputs}`);

    // Add rows if necessary
    const addButtonSelector = "[aria-label='Add']";
    const addButton = page.locator(addButtonSelector);
    while (numberOfInputs < requiredInputs) {
      logger.info("Adding more rows...");
      await addButton.click();
      await page.waitForTimeout(1000);
      const newValues = await getInputNumber({ page, xpath });
      if (newValues === numberOfInputs) {
        break;
      } else if (newValues > numberOfInputs) {
        numberOfInputs = newValues;
      }
      logger.info(`Current number of inputs: ${numberOfInputs}`);
    }

    logger.info(`Filling inputs...${index}`);

    for (let i = 0; i < value.length; i++) {
      const inputIndex = index + i * INITIAL_NUMBER_OF_INPUTS;
      const inputValue = value[i].toString();
      logger.info(`Current index: ${inputIndex}`)

      try {
        // First, find the table using XPath
        const table = page.locator(`xpath=${xpath}/ancestor::table`);
        await table.waitFor({ state: "visible", timeout: 5000 });

        // Get all inputs within the table using a relative XPath
        const inputs = await table.locator("input").all();

        if (inputIndex >= inputs.length) {
          throw new Error(
            `Input index ${inputIndex} is out of bounds. Total inputs: ${inputs.length}`
          );
        }

        // Wait for the specific input to be visible and interactable
        await inputs[inputIndex].waitFor({ state: "visible", timeout: 5000 });

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
              `Value verification failed. Expected: ${inputValue}, Got: ${retryValue}`
            );
          }
        }

        logger.info(
          `Successfully filled input at index ${inputIndex} with value: ${inputValue}`
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
      error
    );
  }
}

async function getInputNumber({ page, xpath }: { page: Page; xpath: string }) {
  const numberOfInputs = await page.evaluate((inputXPath: string) => {
    const inputElement = document.evaluate(
      inputXPath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue as HTMLInputElement;

    if (!inputElement) {
      throw new Error("Input element not found for the provided XPath.");
    }

    const tableElement = inputElement.closest("table");
    if (!tableElement) {
      throw new Error("No table element found containing the input.");
    }

    return tableElement.querySelectorAll("input").length;
  }, xpath);
  const defaultNumberOfInputs = 7;
  return numberOfInputs || defaultNumberOfInputs;
}
