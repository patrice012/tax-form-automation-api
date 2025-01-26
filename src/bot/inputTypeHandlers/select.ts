import { Page } from "playwright";
import logger from "../../utils/logger";
import { IInput } from "../forms/declaration";

export async function selectOption({
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
    locator = page
      .locator(mainParentSelector)
      .locator("select")
      .nth(inputIndex);
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
      logger.info(
        `Attempting to select option for ${label} with value: ${value}`
      );

      // Get all available options
      const options = await locator.evaluate((select: HTMLSelectElement) => {
        return Array.from(select.options).map((option) => ({
          value: option.value,
          text: option.text,
        }));
      });

      logger.info("Available options:", options);

      // Find the matching option that starts with our value
      const matchingOption = options.find(
        (opt) =>
          opt.value.startsWith(value.toString()) ||
          opt.text.startsWith(value.toString())
      );

      if (!matchingOption) {
        throw new Error(`No option found starting with: ${value}`);
      }

      // Select the matching option using its full value
      await locator.selectOption(matchingOption.value);
      logger.info(`Selected option with value: ${matchingOption.value}`);

      // Verify the selection
      const selectedValue = await locator.evaluate(
        (select: HTMLSelectElement) => select.value
      );

      if (!selectedValue.startsWith(value.toString())) {
        throw new Error(
          `Selection verification failed. Expected: ${value}, Got: ${selectedValue}`
        );
      }

      logger.info(
        `Successfully selected option with value: ${matchingOption.value} for ${label}`
      );
      return;
    }
  } catch (error) {
    logger.error(`Primary selection method failed for ${label}:`, error);
  }

  // Fallback: Use DOM API to interact directly with the element
  try {
    logger.info("Attempting fallback method using evaluate...");

    const result = await page.evaluate(
      ({ id, dataTestId, xpath, value, inputIndex, mainParentSelector }) => {
        let select: HTMLSelectElement | null = null;

        if (id) {
          console.log(`Trying with ID: ${id}`);
          select = document.querySelector(`#${id}`) as HTMLSelectElement;
        }

        if (!select && dataTestId) {
          console.log(`Trying with data-testid: ${dataTestId}`);
          select = document.querySelector(
            `[data-testid='${dataTestId}']`
          ) as HTMLSelectElement;
        }

        if (!select && xpath) {
          console.log(`Trying with XPath: ${xpath}`);
          select = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue as HTMLSelectElement;
        }

        if (!select && inputIndex && mainParentSelector) {
          try {
            select = Array.from(
              document
                ?.querySelector(mainParentSelector)
                ?.querySelectorAll("select") || []
            )?.at(inputIndex) as HTMLSelectElement;
          } catch (error) {
            console.log("Index base query fail", { error });
          }
        }

        if (!select) {
          return { success: false, error: "Select element not found" };
        }

        try {
          // Find option starting with the value
          const options = Array.from(select.options);
          const targetOption = options.find(
            (opt) =>
              opt.value.startsWith(value.toString()) ||
              opt.text.startsWith(value.toString())
          );

          if (!targetOption) {
            return {
              success: false,
              error: `Option starting with '${value}' not found`,
            };
          }

          // Set the selection
          select.value = targetOption.value;

          // Dispatch events
          select.dispatchEvent(new Event("change", { bubbles: true }));
          select.dispatchEvent(new Event("input", { bubbles: true }));

          return {
            success: true,
            selectedValue: targetOption.value,
            selectedText: targetOption.text,
          };
        } catch (e) {
          return {
            success: false,
            error: e instanceof Error ? e.message : "Unknown error",
          };
        }
      },
      { id, dataTestId, xpath, value, inputIndex, mainParentSelector }
    );

    if (!result.success) {
      throw new Error(`Fallback method failed: ${result.error}`);
    }

    logger.info(`Successfully selected option using fallback method:`, result);
  } catch (fallbackError) {
    logger.error(
      `All attempts to select option ${label} failed. Please check element accessibility and page state.`,
      fallbackError
    );
  }
}
