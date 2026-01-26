import { Page } from 'playwright';
import logger from '@/utils/logger';
import { Attribute } from '@/utils/types';
import { navigateToSubPage } from '../addNewForm/navigateToSubPage';
import { clickActionButton } from '../inputTypeHandlers/insidePopup/saveFormAndClosePopup';
import { openPopup } from '../inputTypeHandlers/insidePopup/openPopup';
import { waitForPopup } from '../inputTypeHandlers/insidePopup/waitForPopup';

export async function fillCommonTable({
  page,
  tableLikeInputs,
}: {
  page: Page;
  tableLikeInputs: Attribute[]; // Each item must have {id, value[], label?} at minimum
}): Promise<void> {
  
  const { page_href } = tableLikeInputs[0];
  // All table values should be on the same screen, but we may need to navigate to the correct sub-page first
  if (page_href) {
    await navigateToSubPage({
      page,
      stepTitle: page_href,
    });
  }

  try {
    // 1) (Optional) 1ait for the first label if you want at least one table to be visible
    const firstLabel = tableLikeInputs[0].label;
    if (firstLabel) {
      try {
        await page.locator(`text="${firstLabel}"`).waitFor({
          state: 'visible',
          timeout: 5000,
        });
        logger.info(`Table label "${firstLabel}" is visible.`);
      } catch {
        logger.info(
          `Could not find/see label "${firstLabel}" - continuing anyway.`
        );
      }
    }

    // 2) Click "Add" up to 10 times ONCE so we have plenty of rows
    logger.info('Clicking "Add" button up to 10 times to ensure enough rows...');
    const addButton = page.locator('[aria-label="Add"]');
    for (let i = 0; i < 10; i++) {
      await addButton.click();
      await page.waitForTimeout(300); // short delay so the table can update
    }

    // 3) Fill each table-like input's values in the table
    for (const input of tableLikeInputs) {
      const { label, id, value, table_fn } = input;

      // If the input has a table_fn and it's "wage_income", process with wageIncomeTable
      if (table_fn === 'wage_income') {
        if (!value || !Array.isArray(value) || value.length === 0) {
          logger.info(
            `Skipping wage_income table input [label="${label}"] - 'value' is empty or not an array.`
          );
          continue;
        }
        await wageIncomeTable({ page, values: value, input });
        continue;
      }

      if (!id) {
        logger.warn(
          `Skipping table input [label="${label}"] - no 'id' present.`
        );
        continue;
      }
      if (!Array.isArray(value) || value.length === 0) {
        logger.info(
          `Skipping table input [label="${label}"] - 'value' is empty or not an array.`
        );
        continue;
      }

      // Fill each row for this particular table-like input
      for (let rowIndex = 0; rowIndex < value.length; rowIndex++) {
        const rowValue = value[rowIndex];
        if (rowValue == null || rowValue === '') {
          logger.info(
            `Skipping row ${rowIndex} for label "${label}" (empty/invalid value).`
          );
          continue;
        }

        const rowId = id.replace(/idx-\d+$/, `idx-${rowIndex}`);
        const locator = page.locator(`#${rowId}`);

        try {
          // Wait for the field to exist/be visible
          await locator.waitFor({ state: 'visible', timeout: 5000 });

          // Fill the value
          await locator.fill(String(rowValue), { force: true });

          // Optional verify
          const actual = await locator.inputValue();
          if (actual !== String(rowValue)) {
            await locator.fill('');
            await locator.type(String(rowValue), { delay: 25 });
          }
          logger.info(
            `Filled [label="${label}", row=${rowIndex}] with value: ${rowValue}`
          );
        } catch (err) {
          logger.error(
            `Error filling table row ${rowIndex} for "${label}": ${err}`
          );
        }
      }
    }

    logger.info('Finished filling all table-like inputs in this batch.');
  } catch (error) {
    logger.error(`Failed to fill table-like inputs due to an error: ${error}`);
  }
}

async function wageIncomeTable({
  page,
  values,
  input,
}: {
  page: Page;
  values: number[] | string[];
  input: any;
}): Promise<void> {
  try {
    const { xpath, id, dataTestId, StateAbbr } = input;

    // open and wait for the popup
    const popup = await openPopup({ page, xpath, id, dataTestId });
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
      const isVisible = await selectLocator.isVisible({ timeout: 1000 });
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
    logger.error(`Error processing box1-10: ${error}`);
  }
}