import { Page } from "playwright";
import { waitForElement } from "../utils/waitForElement";
import logger from "../../../utils/logger";
import { clearInput } from "./clearInput";
import { fillInput } from "./fillInput";
import { focusInput } from "./focusInput";
import { getRandomIndex } from "../utils/getRandomIndex";
import { getTotalInputsByRow, getTotalRowsWithInputs } from "./rowInputs";

export async function AddNewRow({
  page,
  mainParentSelector,
  value = 10,
}: {
  page: Page;
  mainParentSelector: string;
  value?: number;
}): Promise<{
  rowIndex: number;
  inputsPerRow: number;
  startIndex: number;
} | null> {
  const mainSelector = mainParentSelector;

  try {
    logger.info(`Start creating a new row.`);

    // Wait for the main container to be visible
    const isMainVisible = await waitForElement(mainSelector, page);
    if (!isMainVisible) {
      logger.error(`Main container not found. Aborting operation.`);
      return null;
    }

    // await waitForElement(`${mainSelector} tr`, page);

    const INPUTS_BY_ROW = await getTotalInputsByRow(page, mainSelector);
    // Get initial number of rows
    const initialTotalRows = await getTotalRowsWithInputs(page, mainSelector);
    logger.info(
      `Initial total rows: ${initialTotalRows}, inputs by row: ${INPUTS_BY_ROW}`
    );

    // Calculate the starting index for the last row's inputs
    const startIndex = (initialTotalRows - 1) * INPUTS_BY_ROW;
    logger.info(`Starting index for last row inputs: ${startIndex}`);

    let newRowAdded = false;
    let totalRows = 0;

    while (!newRowAdded) {
      try {
        // Try to add a new row
        const savedValue = await page
          .locator(`td input`)
          ?.nth(startIndex)
          ?.inputValue();
        // Clear the first input value in the last row
        await clearInput({ page, startIndex });

        // Fill the first input to trigger a new row
        await fillInput({ page, startIndex, value });

        // Focus on a random input within the same row
        const randomIndex = getRandomIndex({
          min: startIndex + 1,
          max: startIndex + 1 + INPUTS_BY_ROW,
        });
        await focusInput({ page, startIndex: randomIndex });
        // Wait for the new row to appear
        await page.waitForTimeout(1000);

        try {
          // Clear the first input value if exists
          clearInput({ page, startIndex });
        } catch (error) {}

        try {
          if (savedValue) {
            logger.info(
              `Existing value at index: ${startIndex}, set it again  value:${savedValue}`
            );
            fillInput({ page, startIndex, value: savedValue });
          }
        } catch (error) {}
      } catch (error) {
        logger.error(`Error interacting with inputs: ${error}`);
        return null;
      }

      const currentTotalRows = await getTotalRowsWithInputs(page, mainSelector);
      totalRows = currentTotalRows;
      // Validate if a new row was added successfully
      if (currentTotalRows === initialTotalRows + 1) {
        logger.info(
          `New row added successfully. Total rows: ${currentTotalRows}`
        );
        newRowAdded = true;
      } else {
        logger.warn(
          `Failed to add a new row. Initial rows: ${initialTotalRows}, Current rows: ${currentTotalRows}`
        );
      }
    }

    return {
      rowIndex: totalRows,
      inputsPerRow: INPUTS_BY_ROW,
      startIndex: (totalRows - 1) * INPUTS_BY_ROW,
    };
  } catch (error) {
    logger.error(`An unexpected error occurred: ${error}`);
    return null;
  }
}
