import { Page } from "playwright";
import { IInput } from "../../forms/declaration";
import logger from "../../../utils/logger";

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
        .locator("input")
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

    try {
      const value = locator?.inputValue({ timeout: 7000 });
      return Boolean(value);
    } catch (error) {
      logger.error(`Fail to test inputValue: ${error}`);
      return false;
    }
  } catch (error) {
    logger.error(`Error checking input value: ${error}`);
    return false;
  }
}
