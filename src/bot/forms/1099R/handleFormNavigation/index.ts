import logger from "../../../../utils/logger";
import { Page } from "playwright";

export async function displayDetailForm({ page }: { page: Page }) {
  try {
    logger.info(`Clicking the detail form button`);
    const linkText = "Details";
    // Locate the button containing a span with the specific text
    const button = page.locator(
      'button:has(span:has-text("' + linkText + '"))'
    );
    await button.click();
    logger.info("Navigate to detail form");
  } catch (error) {
    logger.error(`Failed to click the button:has-text=Details: ${error}`);
  }
}
