import { Page } from "playwright";
import logger from "../../utils/logger";

export async function selectOption({
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
  const locator = page.locator(`xpath=${xpath.trim()}`).first();

  try {
    logger.info(
      `Attempting to select option for ${label} with value: ${value}`
    );
    logger.info(`Using xpath: ${xpath}`);

    try {
      // Wait for element to be visible
      logger.info("Waiting for select element to be visible...");
      await locator.waitFor({
        state: "visible",
        timeout: 30000,
      });
    } catch (error) {
      logger.warn(`Failed to wait for element`);
    }

    // Try to find and wait for label if it exists
    try {
      const labelLocator = page.getByText(label).first();
      await labelLocator.waitFor({
        state: "visible",
        timeout: 5000,
      });
    } catch (error) {
      logger.warn(`Label: ${label} not visible, continuing anyway`);
    }

    // Check element visibility and enabled state
    const isVisible = await locator.isVisible();
    const isEnabled = await locator.isEnabled();
    logger.info(
      `Select element state - Visible: ${isVisible}, Enabled: ${isEnabled}`
    );

    if (!isVisible || !isEnabled) {
      logger.error(
        `Select element not interactable - Visible: ${isVisible}, Enabled: ${isEnabled}`
      );
    }

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
      logger.error(`No option found starting with: ${value}`);
    }

    // Select the matching option using its full value
    await locator.selectOption(matchingOption?.value as string);
    logger.info(
      `Selected option with value: ${matchingOption?.value as string}`
    );

    // Verify the selection
    const selectedValue = await locator.evaluate(
      (select: HTMLSelectElement) => select.value
    );
    if (!selectedValue.startsWith(value.toString())) {
      logger.error(
        `Selection verification failed. Expected to start with: ${value}, Got: ${selectedValue}`
      );
    }

    logger.info(
      `Successfully selected option with value: ${
        matchingOption?.value as string
      } for ${label}`
    );
  } catch (error) {
    logger.error(`Primary selection method failed for ${label}:`, error);

    // Fallback using evaluate with prefix matching
    try {
      logger.info("Attempting fallback using evaluate...");

      const result = await page.evaluate(
        ({ xpath, value }) => {
          const select = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue as HTMLSelectElement;

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
        { xpath, value }
      );

      if (!result.success) {
        logger.error(`Fallback failed: ${result.error}`);
      }

      logger.info(
        `Successfully selected option using fallback method:`,
        result
      );
    } catch (fallbackError) {
      logger.error(
        `All attempts to select option ${label} failed. Available options may not match ${value}`,
        {
          originalError: error,
          fallbackError,
        }
      );
      logger.error(
        `Failed to select option starting with ${value} for ${label}`
      );
    }
  }
}
