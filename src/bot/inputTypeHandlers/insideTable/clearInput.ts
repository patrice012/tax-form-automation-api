import { Page } from 'playwright';
import logger from '@/utils/logger';

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
