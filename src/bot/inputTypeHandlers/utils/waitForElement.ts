import { Page } from "playwright";
import logger from "../../../utils/logger";

export async function waitForElement(
  selector: string,
  page: Page,
  timeout = 30000
): Promise<boolean> {
  try {
    logger.info(`Waiting for element to be visible: ${selector}`);
    const locator = page.locator(selector).first();
    await locator.waitFor({ state: "visible", timeout });
    return true;
  } catch (error) {
    logger.warn(`Element not visible: ${selector}, continuing execution.`);
    return false;
  }
}
