import { Locator, Page } from "playwright";
import { IInput } from "../../forms/declaration";
import logger from "@/utils/logger";

export async function checkInputValue({
  page,
  input,
  mainParentSelector,
}: {
  page: Page;
  input: IInput;
  mainParentSelector?: string;
}) {
  try {
    const { xpath, label, id, dataTestId, inputIndex } = input;
    logger.info(`Checking input for label: ${label} value`);

    // Determine the best selector to use
    let locator: Locator | null = null;
    if (id) {
      logger.info(`Using ID: ${id}`);
      locator = page.locator(`#${id}`).first();
    } else if (dataTestId && !locator) {
      logger.info(`Using data-testid: ${dataTestId}`);
      locator = page.locator(`[data-testid="${dataTestId}"]`).first();
    } else if (xpath && !locator) {
      logger.info(`Using XPath: ${xpath}`);
      locator = page.locator(`xpath=${xpath}`).first();
    } else if (inputIndex !== undefined && !locator && mainParentSelector) {
      logger.info(`Using inputIndex: ${inputIndex}`);
      locator = page.locator(`${mainParentSelector} input`).nth(inputIndex);
    } else {
      throw new Error("No valid selector provided to locate the input.");
    }

    // Ensure the locator is visible before proceeding
    try {
      await locator.waitFor({ state: "visible", timeout: 5000 });
      logger.info(`Input is visible`);
    } catch {
      logger.warn(`Input is not visible`);
      return false;
    }

    // Ensure the element exists and is an input before checking its value
    const isInput = await locator.evaluate(
      (el) => el.tagName.toLowerCase() === "input"
    );
    if (!isInput) {
      logger.warn(`Located element is not an input field`);
      return false;
    }

    try {
      const value = await locator.inputValue({ timeout: 3000 });
      return Boolean(value?.trim());
    } catch (error) {
      logger.error(`Failed to get input value: ${error}`);
      return false;
    }
  } catch (error) {
    logger.error(`Error checking input value: ${error}`);
    return false;
  }
}
