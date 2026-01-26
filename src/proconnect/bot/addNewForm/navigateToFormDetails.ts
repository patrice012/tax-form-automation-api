import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function navigateToFormDetails({
  page,
  uniqueFormId,
  uniqueFormIdHTMLId,
  formData,
}: {
  page: Page;
  uniqueFormId?: string;
  uniqueFormIdHTMLId?: string;
  formData?: Record<string, any>;
}) {
  try {
    // Ensure the page is fully loaded
    await page.waitForLoadState('load');

    // If we’re not on the quick entry page, click back to it
    await maybeClickBackToQuickView(page);

    // Wait for the table (quick entry grid) to appear
    await page.waitForSelector('#QuickEntry-grid', {
      state: 'visible',
      timeout: 5000,
    });

    // Create locators for "payer" inputs and row-action buttons
    // We'll then parse out row indices from each.
    const payerInputLocator = page.locator('[id^="QuickEntry-cell2-input-idx-"]');
    const buttonLocator = page.locator('[id^="QuickEntry-row-action1-idx-"]');

    const payerCount = await payerInputLocator.count();
    const buttonCount = await buttonLocator.count();

    if (payerCount === 0) {
      logger.info('No payer inputs found with ID prefix "QuickEntry-cell2-input-idx-".');
      return;
    }
    if (buttonCount === 0) {
      logger.info('No row-action buttons found with ID prefix "QuickEntry-row-action1-idx-".');
      return;
    }

    // Build a set of row indices from both input and button locators
    const rowIndicesSet = new Set<number>();

    // Extract row indices from payer inputs
    for (let i = 0; i < payerCount; i++) {
      const id = await payerInputLocator.nth(i).getAttribute('id');
      if (!id) continue;
      const match = id.match(/QuickEntry-cell2-input-idx-(\d+)$/);
      if (match) {
        rowIndicesSet.add(parseInt(match[1], 10));
      }
    }

    // Extract row indices from row-action buttons
    for (let i = 0; i < buttonCount; i++) {
      const id = await buttonLocator.nth(i).getAttribute('id');
      if (!id) continue;
      const match = id.match(/QuickEntry-row-action1-idx-(\d+)$/);
      if (match) {
        rowIndicesSet.add(parseInt(match[1], 10));
      }
    }

    // Convert set to an array and sort ascending
    const rowIndices = Array.from(rowIndicesSet).sort((a, b) => a - b);

    let foundAndStayed = false;

    // If we have both uniqueFormId / uniqueFormIdHTMLId and a value in formData,
    // try to find a row whose details page matches.
    if (uniqueFormId && uniqueFormIdHTMLId && formData?.[uniqueFormId]) {
      const expectedValue = formData[uniqueFormId].value;

      for (const idx of rowIndices) {
        // Locators for this row
        const rowButtonLocator = page.locator(`[id="QuickEntry-row-action1-idx-${idx}"]`);
        // Ensure both the row’s input & button actually exist (i.e. count > 0)
        if ((await rowButtonLocator.count()) === 0) {
          // No button -> skip this row
          logger.info(`No row-action button found for row index ${idx}. Skipping.`);
          continue;
        }

        // Click the details button for this row
        await rowButtonLocator.click();

        // Wait for the details page to load or become stable
        await page.waitForLoadState('domcontentloaded');

        // Check the input whose ID = uniqueFormIdHTMLId
        const detailInputLocator = page.locator(`#${uniqueFormIdHTMLId}`);
        const detailInputCount = await detailInputLocator.count();
        logger.info(`Detail input count: ${detailInputCount}`);
        if (detailInputCount > 0) {
          const actualValue = await detailInputLocator.inputValue();
          logger.info(
            `Row ${idx} has uniqueFormId (${uniqueFormId}) with value: "${actualValue}".`
          );
          // strip actualValue and expectedValue of whitespace and non alphanumeric characters
          const strippedActualValue = actualValue.replace(/\W|_/g, '');
          const strippedExpectedValue = expectedValue.replace(/\W|_/g, '');

          logger.info(`Stripped actual value: ${strippedActualValue}`);
          logger.info(`Stripped expected value: ${strippedExpectedValue}`);

          if (strippedActualValue === strippedExpectedValue) {
            logger.info(
              `Row ${idx} matched uniqueFormId (${uniqueFormId}) with value: "${expectedValue}". Staying here.`
            );
            foundAndStayed = true;
            return; // We’ve found our row, so we can stop and remain on this page
          }
        }

        // If no match, click "Back to Quick entry" and keep going
        await maybeClickBackToQuickView(page);
      }
    }

    // Fallback: no matching row found
    // 1) Find the highest-index row
    // 2) Fill "1" in that row’s payer input
    // 3) Click its details button
    if (!foundAndStayed) {
      logger.info('No matching row found. Proceeding with fallback logic...');

      // Determine highest row index
      const highestIndex = rowIndices.length > 0 ? rowIndices[rowIndices.length - 1] : -1;
      if (highestIndex < 0) {
        logger.info('Unable to find a valid row index for the fallback process.');
        return;
      }

      // Fill "0" in that row’s payer input
      const highestPayerInput = page.locator(`[id="QuickEntry-cell2-input-idx-${highestIndex}"]`);
      if ((await highestPayerInput.count()) === 0) {
        logger.info(
          `No payer input found for row index ${highestIndex}. Cannot perform fallback.`
        );
        return;
      }

      await highestPayerInput.fill('0');
      await page.click('body');
      await page.waitForTimeout(500);

      // Click the row-action button for the highest index
      const highestRowButton = page.locator(`[id="QuickEntry-row-action1-idx-${highestIndex}"]`);
      if ((await highestRowButton.count()) === 0) {
        logger.info(
          `No row-action button found for row index ${highestIndex}. Cannot perform fallback.`
        );
        return;
      }

      await highestRowButton.click();
      logger.info(`Fallback: clicked button for row index ${highestIndex}`);
    }
  } catch (error) {
    console.error(`Error in navigateToFormDetails: ${error}`);
  }
}

/**
 * If the "Back to Quick entry" button is visible, click it.
 */
async function maybeClickBackToQuickView(page: Page) {
  const backToQuickView = page.locator('button:has-text("Back to Quick entry")');
  if (await backToQuickView.isVisible()) {
    await backToQuickView.click();
    // Optional: wait for the grid or page to re-stabilize
    await page.waitForLoadState('domcontentloaded');
  }
}
