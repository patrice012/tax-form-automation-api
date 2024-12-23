import { Page } from "playwright";
import logger from "../../utils/logger";

export async function checkboxInput({
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
  try {
    logger.info(`Handling checkbox for: ${label} with desired state: ${value}`);
    logger.info(`Using xpath: ${xpath}`);

    try {
      // Wait for element to be visible and enabled
      logger.info("Waiting for element to be visible and enabled...");
      const labelLocator = page.getByText(label).first();
      await labelLocator.waitFor({
        state: "visible",
        timeout: 30000,
      });
    } catch (error) {
      logger.warn(`Label: ${label} not visible`);
    }

    const desiredState = value.toString().toLowerCase() === "true";

    if (desiredState) {
      // Use page.evaluate to directly check the checkbox
      const result = await page.evaluate(
        ({ xpath }) => {
          const checkbox = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue as HTMLInputElement;

          if (!checkbox) {
            return { success: false, error: "Checkbox not found" };
          }

          try {
            // Focus and click the checkbox
            checkbox.focus();
            checkbox.click();

            // Set the checked property as a backup
            checkbox.checked = true;

            // Dispatch events
            checkbox.dispatchEvent(new Event("click", { bubbles: true }));
            checkbox.dispatchEvent(new Event("change", { bubbles: true }));
            checkbox.dispatchEvent(new Event("input", { bubbles: true }));

            return { success: true, checked: checkbox.checked };
          } catch (e) {
            return {
              success: false,
              error: e instanceof Error ? e.message : "Unknown error",
            };
          }
        },
        { xpath }
      );

      if (!result.success) {
        logger.error(`Failed to check checkbox ${label}: ${result.error}`);
      } else {
        logger.info(`Successfully checked checkbox ${label}`);
      }
    } else {
      logger.info(
        `Desired state for checkbox ${label} is false. Skipping action.`
      );
    }
  } catch (error) {
    logger.error(
      `Failed to handle checkbox ${label} due to unexpected error.`,
      error
    );
  }
}
