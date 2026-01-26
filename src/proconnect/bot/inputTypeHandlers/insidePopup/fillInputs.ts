import { Page } from 'playwright';
import logger from '@/utils/logger';
import {
  getTotalInputsByRow,
  getTotalRowsWithInputs,
} from '../insideTable/rowInputs';
import { getRandomIndex } from '../utils/getRandomIndex';
import { fillInput } from '../insideTable/fillInput';
import { clearInput } from '../insideTable/clearInput';

function normalizeValue(
  value: (string | number)[][] | (string | number)[] | number | string
): (string | number)[] {
  if (typeof value === 'number' || typeof value === 'string') {
    // If it's a single number or string, wrap it in an array.
    return [value];
  } else if (Array.isArray(value)) {
    return value.flat();
  } else {
    throw new Error('Unexpected type for value');
  }
}

// Helper to fill inputs dynamically
export async function fillInputs({
  page,
  value,
  popupSelector,
}: {
  page: Page;
  value: (string | number)[][] | (string | number)[] | number | string;
  popupSelector: string;
}) {
  // Flatten the input values into a single array
  const flatValues = normalizeValue(value);
  logger.info(`Flattened values: ${flatValues}`);

  // Initial inputs by row and calculations
  const INPUTS_BY_ROW = await getTotalInputsByRow(page, popupSelector);
  // Get initial number of rows
  const initialTotalRows = await getTotalRowsWithInputs(page, popupSelector);
  logger.info(
    `Initial total rows: ${initialTotalRows}, inputs by row: ${INPUTS_BY_ROW}`,
  );

  // Calculate the starting index for the last row's inputs
  const startIndex = (initialTotalRows - 1) * INPUTS_BY_ROW;
  logger.info(`Starting index for last row inputs: ${startIndex}`);

  logger.info(
    `INPUTS_BY_ROW: ${INPUTS_BY_ROW}, values length: ${flatValues.length}, startIndex: ${startIndex}`,
  );

  let index = startIndex;
  while (flatValues.length) {
    const value = flatValues.shift() || '';
    let input = page.locator(popupSelector).locator('input').nth(index);
    const placeholder = await input.getAttribute('placeholder');
    if (placeholder === "Description" && typeof value === 'number') {
      logger.info('Skipping this input as it is a description');
      index++;
      input = page.locator(popupSelector).locator('input').nth(index);
    }

    logger.info(`Filling input ${index} with value: ${value}`);
    try {
      await input.clear();
      logger.info('Clear input value');
    } catch (error) {
      logger.warn('Failed to clear input', error);
    }
    await input.fill(value.toString());
    index++;

    // Click on the body to trigger a new row if needed
    // await page.click('body');
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);

    if (flatValues.length % Number(INPUTS_BY_ROW) === 0) {
      // Add new row before starting process
      let currentRowsCount = await getTotalRowsWithInputs(page, popupSelector);
      while (initialTotalRows === currentRowsCount) {
        // Try to add a new row
        try {
          const savedValue = await page
            .locator(popupSelector)
            ?.locator('input')
            ?.nth(startIndex)
            ?.inputValue();
          // Clear the first input value in the last row
          await clearInput({ page, startIndex });

          // Fill the first input to trigger a new row
          await fillInput({ page, startIndex, value: 10 });

          // Focus on a random input within the same row
          const randomIndex = getRandomIndex({
            max: startIndex + 1 + INPUTS_BY_ROW,
          });

          const randomInput = page
            .locator(popupSelector)
            .locator('input')
            .nth(randomIndex);
          logger.info(
            `Pressing Enter on a random input (index: ${randomIndex})...`,
          );
          try {
            await randomInput?.press('Enter');
            await page.waitForTimeout(1500);
          } catch (error) {
            logger.error(
              `Error pressing ENTER KEY on input: ${randomIndex} ${error}`,
            );
          }

          // Wait for the new row to appear
          await page.waitForTimeout(1000);

          try {
            // Clear the first input value if exists
            clearInput({ page, startIndex });
          } catch (error) {
            logger.warn(`${error}`);
          }

          try {
            if (savedValue) {
              logger.info(
                `Existing value at index: ${startIndex}, set it again, value:${savedValue}`,
              );
              fillInput({ page, startIndex, value: savedValue });
            }
          } catch (error) {
            logger.warn(`${error}`);
          }
        } catch (error) {
          logger.error(`Error interacting with inputs: ${error}`);
        }

        // Update the number of inputs
        currentRowsCount = await getTotalRowsWithInputs(page, popupSelector);
      }

      logger.info(`New row added: ${currentRowsCount}`);
    }
  }

  logger.info('Filled inputs');
}
