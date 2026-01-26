import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function closeSideBarPopup({ page }: { page: Page }) {
  try {
    const button = page.locator('xpath=//*[@id="close"]').first();
    if (await button.count() > 0) {
      logger.info('View return popup button found. Clicking it.');
      await button.click();
      logger.info('View return popup button clicked.');
    } else {
      logger.info('View return popup button not found.');
    }
  } catch (error) {
    logger.error(`Error closing view return popup: ${error}`);
  }

  const locator = '[class*="Request-bar-FTU-flyout-header"]';
  try {
    logger.info(`Try closing sidebar popup`);

    // Locate the button containing a span with the specific text
    const button = page.locator(locator)?.locator('button')?.first();

    if (!button) {
      console.log('Popup not present');
      return;
    }

    try {
      // Wait for the button to be visible
      logger.info(`Waiting for sidebar popup to become visible`);
      await button.waitFor({ state: 'visible', timeout: 3000 });
    } catch (error) {
      logger.error(`Sidebar popup Error: ${error}`);
    }

    let isVisible = false;

    try {
      isVisible = await button.isVisible({
        timeout: 2000,
      });
    } catch (error) {
      logger.warn(`Closing button not visible: ${error}`);
    }

    if (!isVisible) {
      logger.info('Closing button not visible');
      return;
    }

    try {
      // Attempt to click the button
      logger.info(`Attempting to click closing button`);
      await button.click();
      logger.info(`Clicked sidebar closing button`);
    } catch (clickError) {
      // Fallback: Use evaluate to click the button
      logger.warn(
        `Standard click failed. Attempting to click using evaluate: ${clickError}`,
      );

      await page.evaluate((locator) => {
        const button = document.querySelector(locator)?.querySelector('button');

        if (button) {
          button.click();
        } else {
          throw new Error(`closing Button not found`);
        }
      }, locator);

      logger.info(`Clicked sidebar closing button using evaluate`);
    }
  } catch (error) {
    logger.error(`Failed to click the button: ${error}`);
  }
}
