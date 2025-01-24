import { Page } from "playwright";
import logger from "../../../../utils/logger";

export async function createNewForm({ page }: { page: Page }) {
  const selector =
    '[data-testid="OSIScreen1-23-tabsbar-View-Add-Icon-icon-control"]';
  try {
    // Locate the button
    const buttonLocator = page.locator(selector);

    try {
      // Wait for the button to become visible
      logger.info(`Waiting for button to become visible.`);
      await buttonLocator.waitFor({ state: "visible", timeout: 5000 });
    } catch (error) {}

    try {
      // Attempt to click the button normally
      logger.info(`Clicking create new form button`);
      await buttonLocator.click({
        timeout: 5000,
      });
      logger.info(`Successfully clicked create new form button`);
    } catch (clickError) {
      logger.warn(
        `Standard click failed for create new form button. Attempting alternative click: ${clickError}`
      );

      // Fallback to evaluate and click using raw JavaScript
      await page.evaluate((selector) => {
        const button = document.querySelector(selector);
        if (button) {
          button?.dispatchEvent(new Event("click"));
        } else {
          throw new Error(`create new form button not found`);
        }
      }, selector);

      logger.info(
        `Successfully clicked create new form button using fallback method.`
      );
    }
  } catch (error) {
    logger.error(`Failed to create new form: ${error}`);
  }
}
