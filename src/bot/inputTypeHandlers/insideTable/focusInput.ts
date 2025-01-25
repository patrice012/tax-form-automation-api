import { Page } from "playwright";
import logger from "../../../utils/logger";

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
