import { Page } from "playwright";
import logger from "../../../utils/logger";

export async function fillInput({
  page,
  startIndex,
  value,
}: {
  page: Page;
  startIndex: number;
  value: number | string;
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
