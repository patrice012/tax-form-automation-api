import { Page } from 'playwright';
import logger from '@/utils/logger';

// Helper to open the popup
export async function openPopup({
  page,
  id,
  dataTestId,
  xpath,
}: {
  page: Page;
  id?: string;
  dataTestId?: string;
  xpath?: string;
}): Promise<{ isOpen: boolean }> {
  try {
    let inputLocator;

    // Determine the best selector to use
    if (id) {
      logger.info(`Using ID: ${id}`);
      inputLocator = page.locator(`#${id}`).first();
    } else if (dataTestId && !inputLocator) {
      logger.info(`Using data-testid: ${dataTestId}`);
      inputLocator = page.locator(`[data-testid="${dataTestId}"]`).first();
    } else if (xpath && !inputLocator) {
      logger.info(`Using XPath: ${xpath}`);
      inputLocator = page.locator(`xpath=${xpath}`).first();
    } else {
      throw new Error('No valid selector provided to locate the popup input.');
    }

    logger.info(inputLocator ? 'Popup input found.' : 'Popup input not found.');
    logger.info('Focusing on the input element...');
    await inputLocator.focus();

    // Locate the closest div containing the input
    const closestDiv = inputLocator.locator('xpath=./ancestor::div[1]');
    logger.info('Locating the closest div containing the input...');

    // Find the button within the closest div
    const btnSelector = 'button[type="button"]'; // Or 'button[aria-label="expandDetails"]' if needed
    const buttonLocator = closestDiv.locator(btnSelector);

    if (!buttonLocator) {
      logger.error('Open popup Button not found');
      return { isOpen: false };
    }

    try {
      logger.info(
        'Waiting for the expand button within the closest div to appear...',
      );
      await buttonLocator.waitFor({ state: 'visible', timeout: 7000 });
    } catch (error) {
      logger.warn(
        'Fail to waiting for the expan button to become visible after 10s',
        error,
      );
    }

    logger.info('Clicking the expand button...');
    await buttonLocator.click({
      timeout: 7000,
    });

    return { isOpen: true };
  } catch (error) {
    logger.error('Error during popup opening:', error);
    return { isOpen: false };
  }
}
