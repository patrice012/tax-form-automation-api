import { Page } from "playwright";
import logger from "@/utils/logger";

export async function navigateToCorrectForm({
  page,
  sectionTitle,
}: {
  page: Page;
  sectionTitle: string;
}) {
  try {
    logger.info(`Go to ${sectionTitle} form page`);

    // Locate the button containing a span with the specific text
    const button = page
      .locator(`button:has(span:has-text("${sectionTitle}"))`)
      .nth(0);

    // Wait for the button to be visible
    logger.info(`Waiting for btn:has-text=${sectionTitle} to be visible`);
    try {
      await button.waitFor({ state: "visible", timeout: 15000 });
    } catch (error) {
      logger.info(`Error waiting for element: ${error}`);
    }

    try {
      // Attempt to click the button
      logger.info(`Attempting to click button:has-text=${sectionTitle}`);
      await button.click();
      logger.info(`Clicked button:has-text=${sectionTitle}`);
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
      }, sectionTitle);

      logger.info(`Click button:has-text=${sectionTitle} using evaluate`);
    }
  } catch (error) {
    logger.error(
      `Failed to click the button:has-text=${sectionTitle}: ${error}`
    );
  }
}
