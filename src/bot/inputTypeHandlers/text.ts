import { Page } from "playwright";
import logger from "../../utils/logger";
import { IInput } from "../forms/declaration";

export async function fillTextInput({
  page,
  input,
  mainParentSelector,
}: {
  page: Page;
  input: IInput;
  mainParentSelector?: string;
}): Promise<void> {
  const { xpath, value, label, id, dataTestId, inputIndex } = input;

  // Determine the best selector to use
  let locator;
  if (id) {
    logger.info(`Using ID: ${id}`);
    locator = page.locator(`#${id}`).first();
  } else if (dataTestId && !locator) {
    logger.info(`Using data-testid: ${dataTestId}`);
    locator = page.locator(`[data-testid="${dataTestId}"]`).first();
  } else if (xpath && !locator) {
    logger.info(`Using XPath: ${xpath}`);
    locator = page.locator(`xpath=${xpath}`).first();
  } else if (inputIndex && !locator && mainParentSelector) {
    logger.info(`Using inputIndex: ${inputIndex}`);
    locator = page.locator(mainParentSelector).locator("input").nth(inputIndex);
  } else {
    throw new Error("No valid selector provided to locate the input.");
  }

  try {
    // Wait for element to be visible
    await locator.waitFor({ state: "visible", timeout: 7000 });
    logger.info(`Input is visible`);
  } catch {
    logger.warn(`Input is not visible`);
  }

  if (!locator) {
    logger.error(
      `No valid selector found for ${label}. Falling back to DOM API.`
    );
  }

  try {
    if (locator) {
      // Focus the element
      await locator.focus();
      logger.info("Element focused");

      // Clear existing value
      await locator.clear();
      logger.info("Existing value cleared");

      // Fill the new value
      await locator.fill(value.toString());
      logger.info("New value typed");

      // Verify the value was set correctly
      const actualValue = await locator.inputValue();
      if (actualValue !== value.toString()) {
        throw new Error(
          `Value verification failed. Expected: ${value}, Got: ${actualValue}`
        );
      }

      logger.info(
        `Successfully filled input with value: ${value} for ${label}`
      );
      return;
    }
  } catch (error) {
    logger.error(`Standard input interaction failed for ${label}:`, error);
  }

  // Fallback: Use DOM API to interact directly with the element
  try {
    logger.info("Attempting fallback method using evaluate...");

    const result = await page.evaluate(
      ({ id, dataTestId, xpath, value, inputIndex, mainParentSelector }) => {
        let element: HTMLInputElement | null = null;

        if (id) {
          console.log(`Trying with ID: ${id}`);
          element = document.querySelector(`#${id}`) as HTMLInputElement;
        }

        if (!element && dataTestId) {
          console.log(`Trying with data-testid: ${dataTestId}`);
          element = document.querySelector(
            `[data-testid="${dataTestId}"]`
          ) as HTMLInputElement;
        }

        if (!element && xpath) {
          console.log(`Trying with XPath: ${xpath}`);
          element = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue as HTMLInputElement;
        }

        if (!element && inputIndex && mainParentSelector) {
          try {
            element = Array.from(
              document
                ?.querySelector(mainParentSelector)
                ?.querySelectorAll("input") || []
            )?.at(inputIndex) as HTMLInputElement;
          } catch (error) {
            console.log("Index base query fail", { error });
          }
        }

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

          return { success: true, value: element.value };
        } catch (error) {
          return { success: false, error: (error as Error).message };
        }
      },
      { id, dataTestId, xpath, value, inputIndex, mainParentSelector }
    );

    if (!result.success) {
      throw new Error(`Fallback method failed: ${result.error}`);
    }

    logger.info(
      `Successfully filled input using fallback method: ${value} for ${label}`
    );
  } catch (fallbackError) {
    logger.error(
      `All attempts to fill input for ${label} failed. Please check element accessibility and page state.`,
      fallbackError
    );
  }
}
