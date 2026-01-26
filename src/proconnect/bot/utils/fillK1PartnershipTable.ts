import { Page } from 'playwright';
import logger from '@/utils/logger';
import { Attribute } from '@/utils/types';
import { navigateToSubPage } from '../addNewForm/navigateToSubPage';
import { openPopup } from '../inputTypeHandlers/insidePopup/openPopup';
import { waitForPopup } from '../inputTypeHandlers/insidePopup/waitForPopup';
import { clickActionButton } from '../inputTypeHandlers/insidePopup/saveFormAndClosePopup';

// Global counters to track the number of rows added for each table.
let box13Counter = 0;
let box15Counter = 0;
let box17Counter = 0;

/**
 * Custom table function for box13.
 * Expects row to be a tuple: [letterCode (string), number (number)]
 */
async function box13({
  page,
  row,
}: {
  page: Page;
  row: [string, number];
}): Promise<void> {
  try {
    const letterCode = row[0];
    const numberVal = row[1];

    // Click the "Add" button to create a new row for box13.
    await page.locator('#OSIInPlaceGrid5-1576').click();

    // Determine the current index for this row.
    const currentIndex = box13Counter;

    // Build the data-testid selector for the dropdown and fill the letter code.
    const selectTestId = `OSIInPlaceGrid5-1581-idx-${currentIndex}`;
    const selectLocator = page.locator(`[data-testid="${selectTestId}"]`);
    await selectLocator.waitFor({ state: 'visible', timeout: 5000 });
    await selectLocator.selectOption(String(letterCode));

    // Build the data-testid selector for the input field and fill the number.
    const inputTestId = `OSIInPlaceGrid5-1584-input-idx-${currentIndex}`;
    const inputLocator = page.locator(`[data-testid="${inputTestId}"]`);
    await inputLocator.waitFor({ state: 'visible', timeout: 5000 });
    await inputLocator.fill(String(numberVal));

    // Increment the global counter for the next row.
    box13Counter++;
  } catch (error) {
    logger.error(`Error processing box13: ${error}`);
  }
}

/**
 * Custom table function for box13_state.
 */
async function box13State({
  page,
  table,
  input
}: {
  page: Page;
  table: [string, number][];
  input: any;
}): Promise<void> {
  try {
    const { StateAbbr } = input;
    // Loop over each row in the provided table.
    for (let i = 0; i < table.length; i++) {
      const [letterCode, numberVal] = table[i];
      // Get the corresponding state value from input.
      const stateVal = StateAbbr[i];

      // Click the "Add" button to create a new row for box13.
      await page.locator('#OSIInPlaceGrid5-1576').click();

      // Determine the current index for this row.
      const currentIndex = box13Counter;

      // Fill the letter code dropdown.
      const selectTestId = `OSIInPlaceGrid5-1581-idx-${currentIndex}`;
      const selectLocator = page.locator(`[data-testid="${selectTestId}"]`);
      await selectLocator.waitFor({ state: 'visible', timeout: 5000 });
      await selectLocator.selectOption(String(letterCode));

      // Fill the number input field.
      const inputTestId = `OSIInPlaceGrid5-1584-input-idx-${currentIndex}`;
      const inputLocator = page.locator(`[data-testid="${inputTestId}"]`);
      await inputLocator.waitFor({ state: 'visible', timeout: 5000 });
      await inputLocator.fill(String(numberVal));

      // Fill the state dropdown.
      const stateSelectTestId = `OSIInPlaceGrid5-1587-idx-${currentIndex}`;
      const stateSelectLocator = page.locator(`[data-testid="${stateSelectTestId}"]`);
      await stateSelectLocator.waitFor({ state: 'visible', timeout: 5000 });
      await stateSelectLocator.selectOption(String(stateVal));

      // Increment the global counter for the next row.
      box13Counter++;
    }
  } catch (error) {
    logger.error(`Error processing box13_state: ${error}`);
  }
}


/**
 * Custom table function for box15.
 * Expects row to be a tuple: [letterCode (string), number (number)]
 */
async function box15({
  page,
  row,
}: {
  page: Page;
  row: [string, number];
}): Promise<void> {
  try {
    const letterCode = row[0];
    const numberVal = row[1];

    // Click the "Add" button to create a new row for box15.
    await page.locator('#OSIInPlaceGrid2-2014').click();

    // Determine the current index for this row.
    const currentIndex = box15Counter;

    // Build the data-testid selector for the dropdown and fill the letter code.
    const selectTestId = `OSIInPlaceGrid2-2019-idx-${currentIndex}`;
    const selectLocator = page.locator(`[data-testid="${selectTestId}"]`);
    await selectLocator.waitFor({ state: 'visible', timeout: 5000 });
    await selectLocator.selectOption(String(letterCode));

    // Build the data-testid selector for the input field and fill the number.
    const inputTestId = `OSIInPlaceGrid2-2022-input-idx-${currentIndex}`;
    const inputLocator = page.locator(`[data-testid="${inputTestId}"]`);
    await inputLocator.waitFor({ state: 'visible', timeout: 5000 });
    await inputLocator.fill(String(numberVal));

    // Increment the global counter for the next row.
    box15Counter++;
  } catch (error) {
    logger.error(`Error processing box15: ${error}`);
  }
}

/**
 * Custom table function for box17.
 * Expects row to be a tuple: [letterCode (string), number (number)]
 */
async function box17({
  page,
  row,
}: {
  page: Page;
  row: [string, number];
}): Promise<void> {
  try {
    const letterCode = row[0];
    const numberVal = row[1];

    // Click the "Add" button to create a new row for box17.
    await page.locator('#OSIInPlaceGrid3-2479').click();

    // Determine the current index for this row.
    const currentIndex = box17Counter;

    // Build the data-testid selector for the dropdown and fill the letter code.
    const selectTestId = `OSIInPlaceGrid3-2484-idx-${currentIndex}`;
    const selectLocator = page.locator(`[data-testid="${selectTestId}"]`);
    await selectLocator.waitFor({ state: 'visible', timeout: 5000 });
    await selectLocator.selectOption(String(letterCode));

    // Build the data-testid selector for the input field and fill the number.
    const inputTestId = `OSIInPlaceGrid3-2487-input-idx-${currentIndex}`;
    const inputLocator = page.locator(`[data-testid="${inputTestId}"]`);
    await inputLocator.waitFor({ state: 'visible', timeout: 5000 });
    await inputLocator.fill(String(numberVal));

    // Increment the global counter for the next row.
    box17Counter++;
  } catch (error) {
    logger.error(`Error processing box17: ${error}`);
  }
}

async function box1to10_state({
  page,
  values,
  input,
}: {
  page: Page;
  values: [number];
  input: any;
}): Promise<void> {
  try {
    const { xpath, id, dataTestId, StateAbbr } = input

    // open and wait for the popup
    const popup = await openPopup({page, xpath, id, dataTestId });
    if (!popup.isOpen) {
      logger.error('Failed to open popup');
      return;
    }
    logger.info('Popup is open, start processing');
    const popupSelector = "[data-testid='stacked-modal']";
    await waitForPopup({ page, selector: popupSelector });

    let i;
    for (i = 0; i < values.length; i++) {
      const value = values[i];
      const stateCode = StateAbbr[i];

      // input value
      const inputTestId = `expDetView-amtColumn-input-idx-${i}`;
      const inputLocator = page.locator(`[data-testid="${inputTestId}"]`);
      await inputLocator.waitFor({ state: 'visible', timeout: 5000 });
      await inputLocator.fill(String(value));

      // input state
      const selectTestId = `expDetView-srcColumnchoice-idx-${i}`;
      const selectLocator = page.locator(`[data-testid="${selectTestId}"]`);
      const isVisible = await selectLocator.isVisible();
      if (isVisible) {
        if (stateCode) {
          await selectLocator.waitFor({ state: 'visible', timeout: 5000 });
          await selectLocator.selectOption(String(stateCode));
        } else {
          logger.error(`Error selecting state: no state code found`)
        }
      }

      await page.keyboard.press('Tab');
    }

    // click next empty row to save the data in proconnect properly
    const inputTestId = `expDetView-amtColumn-input-idx-${i}`;
    await page.locator(`[data-testid="${inputTestId}"]`).click();
    await page.waitForTimeout(500);

    // Click the action button
    const btnSelector = "[data-testid='expDetView-action1-button']";
    await clickActionButton({ page, popupSelector, btnSelector });
  } catch (error) {
    logger.error(`Error processing box1-10 state: ${error}`);
  }
}

/**
 * Fills a set of table-like inputs by delegating each input's value to its
 * corresponding custom table function (specified by the "table_fn" property).
 * The function expects that all table inputs are on the same page, so it first
 * navigates to the sub-page (if provided via the first input's page_href).
 */
export async function fillK1PartnershipTable({
  page,
  tableLikeInputs,
}: {
  page: Page;
  tableLikeInputs: Attribute[]; // Each item should contain at least the "value" and "table_fn" fields.
}): Promise<void> {
  // Loop through each table-like input and delegate to its custom table function.
  for (const input of tableLikeInputs) {
    try {
      const { table_fn, value, label } = input;

      try {
        // Navigate to the correct sub-page if page_href is provided.
        const { page_href } = input;
        if (page_href) {
          await navigateToSubPage({
            page,
            stepTitle: page_href,
          });
        }
      } catch (error) {
        logger.error(`Error during navigation: ${error}`);
      }

      if (!table_fn) {
        logger.warn(`Skipping table input [label="${label}"] - no table_fn provided.`);
        continue;
      }

      // Check that value is an array and contains rows.
      if (!Array.isArray(value) || value.length === 0) {
        logger.info(`Skipping table input [label="${label}"] - value is empty or not an array.`);
        continue;
      }
      // Delegate to the correct custom table function.
      switch (table_fn) {
        case 'box13':
          // For box13, we expect value to be a single row: [letterCode, number].
          await box13({ page, row: value as any });
          break;
        case 'box15':
          // For box15, we expect value to be a single row: [letterCode, number].
          await box15({ page, row: value as any });
          break;
        case 'box17':
          // For box17, we expect value to be a single row: [letterCode, number].
          await box17({ page, row: value as any });
          break;
        case 'box1-10_state':
          await box1to10_state({ page, values: value as [number], input: input });
          break;
        case 'box13_state':
          await box13State({ page, table: value as any, input: input });
          break;
        default:
          logger.warn(`No custom function implemented for table_fn "${table_fn}" for label "${label}".`);
      }
    } catch (error) {
      logger.error(`Error processing table input [label="${input.label}"]: ${error}`);
    }
  }
  logger.info('Finished processing all table-like inputs.');
}
