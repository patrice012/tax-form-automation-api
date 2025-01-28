import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function navigateToStep({
  page,
  stepTitle,
}: {
  page: Page;
  stepTitle: string;
}) {
  try {
    // Locate the button containing a span with the specific text
    const button = page.locator(`button:has(span:has-text("${stepTitle}"))`);

    // Wait for the button to be visible
    logger.info(`Waiting for btn:has-text=${stepTitle} to be visible`);

    try {
      await button.waitFor({ state: 'visible', timeout: 7000 });
    } catch (error) {
      logger.info(`Error waiting for button to become visible: ${error}`);
    }

    try {
      // Attempt to click the button
      logger.info(`Attempting to click button:has-text=${stepTitle}`);
      await button.click({
        timeout: 7000,
      });
      logger.info(`Clicked button:has-text=${stepTitle}`);
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
