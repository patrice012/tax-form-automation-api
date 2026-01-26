import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function displayFormsSection({ page }: { page: Page }) {
  try {
    // If a button with the text 'Back to Quick entry' is visible, click it to reset the page
    const backToQuickEntryButton = page.locator('button:has-text("Back to Quick entry")');
    if (await backToQuickEntryButton.isVisible()) {
      await backToQuickEntryButton.click();
      logger.info('Clicked Back to Quick entry button');
    }

    const linkText = 'View all input screens';

    // Locate the button containing a span with the specific text
    const button = page.locator(`button:has(span:has-text("${linkText}"))`);

    // Wait for the button to be visible
    logger.info('Waiting for btn to be visible');
    try {
      await button.waitFor({ state: 'visible', timeout: 10000 });
    } catch (error) {
      logger.info(`Error waiting for element: ${error}`);
    }

    try {
      // Attempt to click the button
      await button.click();
      logger.info('Clicked View all input screens button');
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
      }, linkText);

      logger.info('Clicked View all input screens button using evaluate');
    }

  } catch (error) {
    logger.error(`Failed to display all inputs: ${error}`);
  }
}
