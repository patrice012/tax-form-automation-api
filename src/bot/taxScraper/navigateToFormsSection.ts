import { Page } from "playwright";
import logger from "../../utils/logger";

export async function navigateToFormsSection({
  page,
}: {
  page: Page;
}): Promise<any> {
  try {
    // Attempt to click the Input Return button
    try {
      const locator = page.locator(
        "[data-automation-id='SECTION_INPUT_RETURN']"
      );
      await locator.waitFor({ state: "visible" });
      await locator.click();
      logger.info("Clicked Input Return button");
    } catch (clickError) {
      // Fallback: Use evaluate to click the Input Return button
      logger.warn(
        `Standard click failed on Input Return button. Attempting fallback: ${clickError}`
      );

      await page.evaluate(() => {
        const button = document.querySelector(
          "[data-automation-id='SECTION_INPUT_RETURN']"
        );
        if (button) {
          (button as HTMLElement).click();
        } else {
          throw new Error("Input Return button not found");
        }
      });

      logger.info("Clicked Input Return button using evaluate");
    }

    return { page, success: true };
  } catch (error) {
    logger.error(`Input Return button not found`);
    return { page, success: false };
  }
}
