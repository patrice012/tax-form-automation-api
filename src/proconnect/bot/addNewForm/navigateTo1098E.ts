import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function navigateTo1098E({ page }: { page: Page }) {
  const stepTitle = 'Education';
  try {
    logger.info(`Go to ${stepTitle} form page`);

    // Ensure the page has fully loaded before proceeding
    await page.waitForLoadState('load');

    // Locate the button containing a span with the specific text
    const regex = new RegExp(`^${stepTitle}$`);
    const button = page.locator('button', { hasText: regex }).nth(0);

    // Wait for the button to be visible
    logger.info(`Waiting for btn:has-text=${stepTitle} to be visible`);
    try {
      await button.waitFor({ state: 'visible', timeout: 15000 });
    } catch (error) {
      logger.info(`Error waiting for element: ${error}`);
    }

    try {
      // Attempt to click the button
      await button.click();
    } catch (clickError) {
      // Fallback: Use evaluate to click the button
      logger.warn(
        `Standard click failed. Attempting to click using evaluate: ${clickError}`,
      );

      await page.evaluate((buttonText) => {
        const button = Array.from(document.querySelectorAll('button')).find(
          (btn) => btn.textContent?.includes(buttonText),
        );
        if (button) {
          button.click();
        } else {
          throw new Error(`Button with text "${buttonText}" not found`);
        }
      }, stepTitle);

      logger.info(`Click button:has-text=${stepTitle} using evaluate`);
    }
  } catch (error) {
    logger.error(`Failed to click the button:has-text=${stepTitle}: ${error}`);
  }
}
