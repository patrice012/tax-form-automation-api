import { Page } from 'playwright';
import logger from '@/utils/logger';
import { withTimeout } from '../utils/timeout';

export async function navigateToFormOrNewForm({
  page,
  selector, // The selector for the "Create new form" button
  uniqueFormIdValue,
  uniqueFormIdHTMLId,
  tabHTMLId,
}: {
  page: Page;
  selector: string;
  uniqueFormIdValue?: string;
  uniqueFormIdHTMLId?: string;
  tabHTMLId?: string;
}) {
  try {
    // STEP 1: Starting
    logger.info(`Navigating to form or creating new form...`);


    // STEP 2: If either uniqueFormIdValue or uniqueFormIdHTMLId is missing, 
    //         or if tabHTMLId is missing, just create a new form.
    if (!uniqueFormIdValue || !uniqueFormIdHTMLId || !tabHTMLId) {
      logger.info(
        `uniqueFormIdValue, uniqueFormIdHTMLId, or tabHTMLId is undefined. Creating new form directly...`,
      );
      await createNewForm({ page, selector });
      return;
    }

    // STEP 3: Locate existing tabs.
    //         We'll search for elements whose `id` starts with the provided `tabHTMLId`.
    //         e.g. `[id^="OSIScreen1-10-tabsbar-TabGroup-Tab-tooltip-label-"]`
    logger.info(`Searching for existing form tabs with ID prefix: ${tabHTMLId}`);
    await page.waitForSelector(`[id^="${tabHTMLId}"]`, { timeout: 7000 });
    const tabLocator = page.locator(`[id^="${tabHTMLId}"]`);
    const tabCount = await tabLocator.count();
    logger.info(`Found ${tabCount} existing form tabs.`);

    let matchedTabIndex = -1;

    // STEP 4: If tabs exist, loop through them and check for a match
    if (tabCount > 0) {
      for (let i = 0; i < tabCount; i++) {
        await withTimeout(
          (async () => {
            logger.info(`Clicking tab index ${i}.`);
            await tabLocator.nth(i).click();
    
            // The form input in that tab
            const inputLocator = page.locator(`#${uniqueFormIdHTMLId}`);
            if (await inputLocator.count() > 0) {
              const currentValue = await inputLocator.inputValue();
              logger.info(`Tab ${i} has input value: ${currentValue}`);
    
              // Strip currentValue and uniqueFormIdValue of whitespace and non-alphanumeric characters
              const strippedCurrentValue = currentValue.replace(/\W|_/g, '');
              const strippedUniqueFormIdValue = uniqueFormIdValue.replace(/\W|_/g, '');
              logger.info(`Stripped current value: ${strippedCurrentValue}`);
              logger.info(`Stripped uniqueFormIdValue: ${strippedUniqueFormIdValue}`);
    
              if (strippedCurrentValue === strippedUniqueFormIdValue) {
                logger.info(
                  `Tab ${i} matches the uniqueFormIdValue: ${uniqueFormIdValue}. Staying here!`
                );
                matchedTabIndex = i;
              }
            }
          })(),
          3000,
          `Operation timed out for tab index ${i}`
        );
    
        if (matchedTabIndex !== -1) {
          break;
        }
      }
    }

    // STEP 5: If no existing tab matched, create a new form
    if (matchedTabIndex === -1) {
      logger.info(
        `No existing tab found with uniqueFormIdValue (${uniqueFormIdValue}). Creating a new form tab...`,
      );
      await createNewForm({ page, selector });
    }
  } catch (error) {
    logger.error(`Failed to create or navigate to form: ${error}`);
  }
}

async function createNewForm({
  page,
  selector,
}: {
  page: Page;
  selector: string;
}) {
  try {
    const buttonLocator = page.locator(selector);

    logger.info(`Waiting for button to become visible for adding form.`);
    await buttonLocator.waitFor({ state: 'visible', timeout: 7000 });

    try {
      logger.info(`Clicking create new form button`);
      await buttonLocator.click({ timeout: 7000 });
      logger.info(`Successfully clicked create new form button`);
    } catch (clickError) {
      logger.warn(`Standard click failed. Attempting fallback: ${clickError}`);
      await page.evaluate((sel) => {
        const btn = document.querySelector(sel);
        if (!btn) throw new Error(`create new form button not found`);
        btn.dispatchEvent(new Event('click'));
      }, selector);
      logger.info(`Fallback click succeeded.`);
    }
  } catch (error) {
    logger.error(`Failed to create new form: ${error}`);
  }
}
