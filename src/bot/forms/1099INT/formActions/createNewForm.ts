import { Page } from "playwright";
import logger from "../../../../utils/logger";

const INPUTS_PER_ROW = 7;

async function waitForElement(
  selector: string,
  page: Page,
  timeout = 30000
): Promise<boolean> {
  try {
    logger.info(`Waiting for element to be visible: ${selector}`);
    const locator = page.locator(selector).first();
    await locator.waitFor({ state: "visible", timeout });
    return true;
  } catch (error) {
    logger.warn(`Element not visible: ${selector}, continuing execution.`);
    return false;
  }
}

async function getTotalInputs(
  page: Page,
  mainSelector: string
): Promise<number> {
  const totalInputs = await page.evaluate((selector) => {
    const container = document.querySelector(selector);
    return container ? container.querySelectorAll("td input").length : 0;
  }, mainSelector);
  return totalInputs;
}

async function getTotalRowsWithInputs(
  page: Page,
  mainSelector: string
): Promise<number> {
  const totalRows = await page.evaluate((selector) => {
    const container = document.querySelector(selector);
    if (!container) return 0;

    // Filter rows (`<tr>`) that contain at least one `<input>` inside them
    const rowsWithInputs = Array.from(container.querySelectorAll("tr")).filter(
      (row) => {
        return row.querySelector("input") !== null;
      }
    );

    return rowsWithInputs.length;
  }, mainSelector);
  return totalRows;
}

async function getDetailsButtonCount(page: Page): Promise<number> {
  const buttonsCount = await page
    .locator(`button:has(span:has-text("Details"))`)
    .all();
  return buttonsCount.length;
}

async function fillInput({
  page,
  startIndex,
  value,
}: {
  page: Page;
  startIndex: number;
  value: number;
}): Promise<void> {
  const inputIndex = startIndex;

  // Locate the input and interact with it
  const inputSelector = `td input`;
  logger.info(`Filling input at index ${inputIndex}`);

  try {
    const inputLocator = page.locator(inputSelector).nth(inputIndex);
    await inputLocator.focus();
    await inputLocator.fill(value.toString());
  } catch (error) {
    logger.error(`Failed to fill input at index ${inputIndex}: ${error}`);
  }
}

async function clearInput({
  page,
  startIndex,
}: {
  page: Page;
  startIndex: number;
}): Promise<void> {
  const inputIndex = startIndex;

  // Locate the input and interact with it
  const inputSelector = `td input`;
  logger.info(`Clear input at index ${inputIndex}`);

  try {
    const inputLocator = page.locator(inputSelector).nth(inputIndex);
    await inputLocator.clear();
  } catch (error) {
    logger.error(`Failed to clear input at index ${inputIndex}: ${error}`);
  }
}

async function focusInput({
  page,
  startIndex,
}: {
  page: Page;
  startIndex: number;
}): Promise<void> {
  const inputIndex = startIndex;

  // Locate the input and interact with it
  const inputSelector = `td input`;
  logger.info(`Focusing on input at index ${inputIndex}`);

  try {
    const inputLocator = page.locator(inputSelector).nth(inputIndex);
    await inputLocator.focus();
  } catch (error) {
    logger.error(`Failed to focus input at index ${inputIndex}: ${error}`);
  }
}

export async function createNewForm({ page }: { page: Page }): Promise<void> {
  const mainSelector = ".main-content";
  const value = 10;

  try {
    logger.info(`Start filling inputs in the table`);

    // Wait for the main container to be visible
    const isMainVisible = await waitForElement(mainSelector, page);
    if (!isMainVisible) {
      logger.error(`Main container not found. Aborting operation.`);
      return;
    }

    try {
      await waitForElement('button:has(span:has-text("Details"))', page);
    } catch (error) {}

    // Get total number of inputs, rows, and "Details" buttons
    let totalInputs = await getTotalInputs(page, mainSelector);
    let totalRows = await getTotalRowsWithInputs(page, mainSelector);
    let totalDetailsButtons = await getDetailsButtonCount(page);

    logger.info(
      `Total Inputs: ${totalInputs}, Rows: ${totalRows}, Details Buttons: ${totalDetailsButtons}`
    );

    // Check if total rows match the total number of "Details" buttons
    do {
      // Calculate the starting index for the last row's inputs
      const startIndex = (totalRows - 1) * INPUTS_PER_ROW;
      logger.info(`Starting index for last row inputs: ${startIndex}`);

      try {
        // Clear the first input value if exists
        clearInput({ page, startIndex: startIndex });
      } catch (error) {}

      try {
        // Fill the first input in the last row
        await fillInput({ page, startIndex, value: value });
      } catch (error) {}

      try {
        // Focus on the next input
        await focusInput({ page, startIndex: startIndex + 1 });
      } catch (error) {}

      // Wait for a button to appear
      await page.waitForTimeout(1000);

      totalDetailsButtons = await getDetailsButtonCount(page);

      logger.info(
        `Inputs: ${totalInputs}, Rows: ${totalRows}, Details Buttons: ${totalDetailsButtons}, Refreshing values`
      );
      if (totalDetailsButtons !== totalRows) {
        // Get the latest number of button
        totalInputs = await getTotalInputs(page, mainSelector);
        totalRows = await getTotalRowsWithInputs(page, mainSelector);

        logger.warn(
          `Mismatch in row and "Details" button counts. Rows: ${totalRows}, Buttons: ${totalDetailsButtons}`
        );
      } else {
        break;
      }

      logger.info(
        `Updated Total --> Inputs: ${totalInputs}, Rows: ${totalRows}, Details Buttons: ${totalDetailsButtons}`
      );
    } while (totalDetailsButtons !== totalRows);

    // If the row-to-button count matches, click on the last "Details" button
    if (totalDetailsButtons === totalRows) {
      const lastButtonSelector = `button:has(span:has-text("Details"))`;
      logger.info(
        `Clicking on the last "Details" button: ${lastButtonSelector}`
      );
      try {
        const lastButton = page.locator(lastButtonSelector).last();
        await lastButton.click();
        logger.info(`Successfully clicked on the last "Details" button.`);
      } catch (error) {
        logger.error(`Failed to click on the last "Details" button: ${error}`);
      }
    } else {
    }
  } catch (error) {
    logger.error(`An unexpected error occurred: ${error}`);
  }
}
