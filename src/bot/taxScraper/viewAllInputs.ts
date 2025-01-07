import { Page } from "playwright";
import logger from "../../utils/logger";

export async function ViewAllInputs({ page }: { page: Page }) {
  try {
    const linkText = "View all input screens";

    // Locate the button containing a span with the specific text
    const button = page.locator(`button:has(span:has-text("${linkText}"))`);

    // Wait for the button to be visible
    logger.info("Waiting for btn to be visible");
    await button.waitFor({ state: "visible" });

    try {
      // Attempt to click the button
      await button.click();
      logger.info("Clicked View all input screens button");
    } catch (clickError) {
      // Fallback: Use evaluate to click the button
      logger.warn(
        `Standard click failed. Attempting to click using evaluate: ${clickError}`
      );

      await page.evaluate((buttonText) => {
        const button = Array.from(document.querySelectorAll("button")).find(
          (btn) => btn.textContent?.includes(buttonText)
        );
        if (button) {
          button.click();
        } else {
          throw new Error(`Button with text "${buttonText}" not found`);
        }
      }, linkText);

      logger.info("Clicked View all input screens button using evaluate");
    }
  } catch (error) {
    logger.error(`Failed to display all inputs: ${error}`);
  }
}
