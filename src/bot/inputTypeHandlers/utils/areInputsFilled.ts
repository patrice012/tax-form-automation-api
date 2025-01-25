import { Page } from "playwright";
import { waitForElement } from "./waitForElement";
import logger from "../../../utils/logger";

/**
 * Checks if any input field within the specified container is already filled.
 * Returns `true` if at least one input is filled; otherwise, returns `false`.
 */
export async function areInputsFilled({
  page,
  mainSelector,
}: {
  page: Page;
  mainSelector: string;
}): Promise<boolean> {
  try {
    logger.info(
      `Starting check for filled inputs in selector: ${mainSelector}`
    );

    try {
      // Wait for the main container to be visible
      await waitForElement(mainSelector, page);
    } catch (error) {
      logger.warn(`Main container not visible: ${error}`);
      return false;
    }

    // Get all input elements within the container
    const inputs = page.locator(mainSelector).locator("input");
    const inputCount = await inputs.count();

    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);

      try {
        // Check if the input is disabled, readonly, or hidden
        const isDisabled = await input.isDisabled();
        const isReadOnly = await input.evaluate((el) =>
          el.hasAttribute("readonly")
        );
        const type = await input.evaluate((el) => el.getAttribute("type"));
        const value = await input.inputValue();

        // Skip inputs that cannot be filled
        if (
          isDisabled ||
          isReadOnly ||
          type === "checkbox" ||
          type === "radio"
        ) {
          logger.info(
            `Skipping input at index ${i} (disabled: ${isDisabled}, readonly: ${isReadOnly}, type: ${type})`
          );
          continue;
        }

        // Check if the input is filled
        if (value && value.trim().length > 0) {
          logger.info(
            `Found filled input at index ${i} (type: ${type}, value: "${value}")`
          );
          return true;
        }

        logger.info(`Input at index ${i} is empty.`);
      } catch (error) {
        logger.warn(`Error checking input at index ${i}: ${error}`);
      }
    }

    logger.info(`All inputs are empty.`);
    return false;
  } catch (error) {
    logger.error(`Error while checking for filled inputs: ${error}`);
    return false;
  }
}
