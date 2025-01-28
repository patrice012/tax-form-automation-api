import { Page } from "playwright";
import logger from "../../../utils/logger";
import { getFormsTablistButton } from "./getFormsTablistButton";

export async function selecteLastForm({ page }: { page: Page }) {
  try {
    const tabList = await getFormsTablistButton({ page });
    const currentButton = tabList.currentButton;
    const lastButton = tabList.lastButton;
    logger.info(`Currently on form: ${currentButton.selector}`);

    try {
      logger.info(`Trying to click on the last form`);
      await page.locator(lastButton.selector).click();
      logger.info(`Select last form successfully: ${lastButton.selector}`);
    } catch (error) {
      logger.warn(
        `Standard click failed for select new form button. Attempting alternative click: ${error}`
      );

      // Fallback to evaluate and click using raw JavaScript
      await page.evaluate((selector) => {
        const button = document.querySelector(selector);
        if (button) {
          button?.dispatchEvent(new Event("click"));
        } else {
          throw new Error(`create select form button not found`);
        }
      }, lastButton.selector);

      logger.info(
        `Successfully clicked create new form button using fallback method: ${lastButton.selector}`
      );
    }
  } catch (error) {
    logger.error(`Error getting forms tablist: ${error}`);
  }
}
