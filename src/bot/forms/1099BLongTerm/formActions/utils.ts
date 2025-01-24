import { Page } from "playwright";
import logger from "../../../../utils/logger";

export async function fillInput({
  page,
  startIndex,
  value,
}: {
  page: Page;
  startIndex: number;
  value: number;
}): Promise<void> {
  const inputIndex = startIndex;

  // Locate the input and interact with it
  const inputSelector = `td input`;
  logger.info(`Filling input at index ${inputIndex}`);

  try {
    const inputLocator = page.locator(inputSelector).nth(inputIndex);
    await inputLocator.focus();
    await inputLocator.fill(value.toString());
  } catch (error) {
    logger.error(`Failed to fill input at index ${inputIndex}: ${error}`);
  }
}

export async function clearInput({
  page,
  startIndex,
}: {
  page: Page;
  startIndex: number;
}): Promise<void> {
  const inputIndex = startIndex;

  // Locate the input and interact with it
  const inputSelector = `td input`;
  logger.info(`Clear input at index ${inputIndex}`);

  try {
    const inputLocator = page.locator(inputSelector).nth(inputIndex);
    await inputLocator.clear();
  } catch (error) {
    logger.error(`Failed to clear input at index ${inputIndex}: ${error}`);
  }
}

export async function focusInput({
  page,
  startIndex,
}: {
  page: Page;
  startIndex: number;
}): Promise<void> {
  const inputIndex = startIndex;

  // Locate the input and interact with it
  const inputSelector = `td input`;
  logger.info(`Focusing on input at index ${inputIndex}`);

  try {
    const inputLocator = page.locator(inputSelector).nth(inputIndex);
    await inputLocator.focus();
  } catch (error) {
    logger.error(`Failed to focus input at index ${inputIndex}: ${error}`);
  }
}

export async function waitForElement(
  selector: string,
  page: Page,
  timeout = 30000
): Promise<boolean> {
  try {
    logger.info(`Waiting for element to be visible: ${selector}`);
    const locator = page.locator(selector).first();
    await locator.waitFor({ state: "visible", timeout });
    return true;
  } catch (error) {
    logger.warn(`Element not visible: ${selector}, continuing execution.`);
    return false;
  }
}
