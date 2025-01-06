import { Page } from "playwright";
import logger from "../../utils/logger";

export async function ViewAllInputs({ page }: { page: Page }) {
  try {
    const linkText = "View all input screens";
    // Locate the button containing a span with the specific text
    const button = page.locator(
      'button:has(span:has-text("' + linkText + '"))'
    );
    await button.click();
    logger.info("Clicked View all input screens button");
  } catch (error) {
    logger.error(`Failed to display all inputs: ${error}`);
  }
}
