import { Page } from "playwright";
import logger from "../../utils/logger";

export async function fillTextInput({
  value,
  xpath,
  label,
  page,
}: {
  value: string | number;
  xpath: string;
  label: string;
  page: Page;
}): Promise<void> {
  // Create locator with trimmed xpath to avoid any whitespace issues
  const locator = page.locator(`xpath=${xpath}`).first();
  try {
    logger.info(`Attempting to fill input for ${label} with value: ${value}`);
    logger.info(`Using xpath: ${xpath}`);

    try {
      // Wait for element to be visible
      logger.info("Waiting for input element to be visible...");
      await locator.waitFor({
        state: "visible",
        timeout: 15000,
      });
    } catch (error) {
      logger.warn(`Failed to wait for element`);
    }

    try {
      // Try to focus the element first
      await locator.focus();
      logger.info("Element focused");
    } catch (error) {
      logger.warn("No need to focus element");
    }

    try {
      // Clear existing value
      await locator.clear();
      logger.info("Existing value cleared");
    } catch (error) {
      logger.warn("No need to clear value");
    }
    // Fill value
    await locator.fill(value.toString());
    logger.info("New value typed");

    // Verify the value was set correctly
    const actualValue = await locator.inputValue();
    if (actualValue !== value.toString()) {
      logger.error(
        `Value verification failed. Expected: ${value}, Got: ${actualValue}`
      );
    }

    logger.info(`Successfully filled input with value: ${value} for ${label}`);
  } catch (error) {
    logger.error(`Primary method failed for ${label}:`, error);

    // Fallback method using evaluate
    try {
      logger.info("Attempting fallback method using evaluate...");

      await page.waitForTimeout(1000);

      const result = await page.evaluate(
        ({ xpath, value }) => {
          console.log(`${xpath}---${value}`);
          const element = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue as HTMLInputElement;

          if (!element) {
            return { success: false, error: "Element not found" };
          }

          try {
            // Focus the element
            element.focus();
            // Clear existing value
            element.value = "";
            // Set new value
            element.value = value.toString();
            // Dispatch events
            element.dispatchEvent(new Event("input", { bubbles: true }));
            element.dispatchEvent(new Event("change", { bubbles: true }));
            return {
              success: true,
              value: element.value,
            };
          } catch (e) {
            return {
              success: false,
              error: (e as Error).message,
            };
          }
        },
        { xpath, value }
      );

      if (!result.success) {
        logger.error(`Fallback method failed: ${result.error}`);
      }

      logger.info(
        `Successfully filled input using fallback method: ${value} for ${label}`
      );
    } catch (fallbackError) {
      // Try one last time with a different strategy
      logger.error(
        `All attempts to fill input ${label} failed. Please check element accessibility and page state.`
      );
    }
  }
}
