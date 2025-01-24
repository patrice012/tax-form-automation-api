import { Page } from "playwright";
import logger from "../../../../utils/logger";
import { waitForElement } from "./utils";

export async function resetInputValues({ page }: { page: Page }) {
  try {
    const mainSelector = ".main-content";
    logger.info(`Start resetting input values`);

    try {
      // Wait for the main container to be visible
      await waitForElement(mainSelector, page);
    } catch (error) {
      logger.warn(`Main container not visible: ${error}`);
      return;
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
        if (
          isDisabled ||
          isReadOnly ||
          type === "checkbox" ||
          type === "radio" ||
          !value
        ) {
          logger.info(
            `Skipping input at index ${i} (disabled: ${isDisabled}, readonly: ${isReadOnly}, type:${type}, value:${value})`
          );
          continue;
        }

        // Attempt to clear input using Playwright API
        await input.clear();
        logger.info(
          `Successfully cleared input at index ${i} using Playwright API`
        );
      } catch (playwrightError) {
        logger.warn(
          `Playwright API failed to clear input at index ${i}: ${playwrightError}`
        );

        // Fallback: Use DOM API to clear input
        await page.evaluate(
          (obj) => {
            const { idx, selector } = obj;
            const container = document.querySelector(selector);
            if (!container) return;

            const inputs = container.querySelectorAll("input");
            const input = inputs[idx];
            if (!input) return;

            const isDisabled = input.disabled;
            const isReadOnly = input.readOnly;
            const isHidden = input.offsetParent === null;
            const inputValue = input.value;

            // Skip disabled, readonly, hidden, or empty inputs
            if (isDisabled || isReadOnly || isHidden || !inputValue) return;

            input.value = ""; // Clear input value
            input.dispatchEvent(new Event("input", { bubbles: true }));
            input.dispatchEvent(new Event("change", { bubbles: true }));
          },
          { idx: i, selector: mainSelector }
        );

        logger.info(`Successfully cleared input at index ${i} using DOM API`);
      }
    }

    logger.info(`Successfully reset input values`);
  } catch (error) {
    logger.warn(`Input value reset error: ${error}`);
  }
}
