import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function navigateToSubPage({
  page,
  stepTitle,
}: {
  page: Page;
  stepTitle: string;
}) {
  try {
    // Ensure the page has fully loaded before proceeding
    await page.waitForLoadState('load');

    // Locate the button containing the specified text
    const regex = new RegExp(`^${stepTitle}$`);
    const buttonLocator = page.locator('button', { hasText: regex });

    try {
      await buttonLocator.waitFor({ state: 'visible', timeout: 3000 });
    } catch (error) {
      logger.info(`Error waiting for button to become visible: ${error}`);
    }

    try {
      await buttonLocator.click({
        timeout: 3000,
      });
    } catch (clickError) {
      logger.warn(
        `Standard click failed for button:has-text("${stepTitle}"). Attempting alternative click: ${clickError}`,
      );

      // Fallback to evaluate and click using raw JavaScript
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

      logger.info(
        `Successfully clicked button:has-text("${stepTitle}") using fallback method.`,
      );
    }
  } catch (error) {
    logger.error(`Failed to navigate to step "${stepTitle}": ${error}`);
  }
}