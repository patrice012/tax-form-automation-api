import { Page } from "playwright";
import logger from "../../../../utils/logger";
import { AddNewRow } from "../../../inputTypeHandlers/insideTable/AddNewRow";
import { waitForElement } from "../../../inputTypeHandlers/utils/waitForElement";
import { focusInput } from "../../../inputTypeHandlers/insideTable/focusInput";
import { getRandomIndex } from "../../../inputTypeHandlers/utils/getRandomIndex";
import { fillInput } from "../../../inputTypeHandlers/insideTable/fillInput";
import { clearInput } from "../../../inputTypeHandlers/insideTable/clearInput";

const INPUTS_PER_ROW = 11;

async function getDetailsButtonCount(page: Page): Promise<number> {
  const buttonsCount = await page
    .locator(`button:has(span:has-text("Details"))`)
    .all();
  return buttonsCount.length;
}

export async function getLatestEmptyRow({
  page,
}: {
  page: Page;
}): Promise<any> {
  const mainSelector = ".main-content";
  // const value = 10;

  try {
    try {
      await waitForElement('button:has(span:has-text("Details"))', page);
    } catch (error) {}

    let newRow = await AddNewRow({ page, mainParentSelector: mainSelector });
    logger.info(`New row created: ${JSON.stringify(newRow)}`);

    if (newRow) {
      const { startIndex, rowIndex, inputsPerRow } = newRow;

      logger.info("Start waiting for detail button");
      let totalDetailsButtons = await getDetailsButtonCount(page);

      while (newRow?.rowIndex !== totalDetailsButtons) {
        logger.info(
          `Adding new button for row: ${rowIndex}, current button index: ${totalDetailsButtons}`
        );
        try {
          // Clear the first input value in the last row
          await clearInput({ page, startIndex: newRow.startIndex });

          // Fill the first input to trigger a new row
          await fillInput({ page, startIndex, value: 10 });

          // Focus on a random input within the same row
          const randomIndex = getRandomIndex({
            min: startIndex + 1,
            max: startIndex + 1 + inputsPerRow,
          });
          await focusInput({ page, startIndex: randomIndex });
        } catch (error) {
          logger.error(`Error interacting with inputs: ${error}`);
          return null;
        }

        // Wait for the new button to appear
        await page.waitForTimeout(1000);

        try {
          // Clear the first input value if exists
          clearInput({ page, startIndex });
        } catch (error) {}

        totalDetailsButtons = await getDetailsButtonCount(page);
        logger.info(
          `Refreshing value:: rowIndex:${newRow.rowIndex} buttonIndex: ${totalDetailsButtons}`
        );
      }

      return {
        buttonLocator: `button:has(span:has-text("Details"))`,
        ...newRow,
      };
    } else {
      logger.warn(`Can not add new row. exit process`);
      return;
    }
  } catch (error) {
    logger.error(`An unexpected error occurred: ${error}`);
  }
}
