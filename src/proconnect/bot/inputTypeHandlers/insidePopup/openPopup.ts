import { Page } from 'playwright';
import logger from '@/utils/logger';
import { withTimeout } from '../../utils/timeout';

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
  // Build an array of selector attempts in the desired order:
  const attempts: { type: 'id' | 'xpath' | 'dataTestId'; value: string }[] = [];
  if (id) {
    attempts.push({ type: 'id', value: id });
  }
  if (dataTestId) {
    attempts.push({ type: 'dataTestId', value: dataTestId });
  }
  if (xpath) {
    attempts.push({ type: 'xpath', value: xpath });
  }
  if (attempts.length === 0) {
    logger.error('No valid selector provided to locate the popup input.');
    return { isOpen: false };
  }

  for (const attempt of attempts) {
    try {
      const result = await withTimeout(
        (async () => {
          let inputLocator;
          // Determine the best selector based on the current attempt
          if (attempt.type === 'id') {
            logger.info(`Using ID: ${attempt.value}`);
            inputLocator = page.locator(`#${attempt.value}`).first();
          } else if (attempt.type === 'xpath') {
            logger.info(`Using XPath: ${attempt.value}`);
            inputLocator = page.locator(`xpath=${attempt.value}`).first();
          } else if (attempt.type === 'dataTestId') {
            logger.info(`Using data-testid: ${attempt.value}`);
            inputLocator = page.locator(`[data-testid="${attempt.value}"]`).first();
          }

          logger.info(inputLocator ? 'Popup input found.' : 'Popup input not found.');
          const closestDiv = inputLocator.locator('xpath=./ancestor::div[1]');
          logger.info('Locating the closest div containing the input...');

          // Find the button within the closest div, if it exists
          const btnSelector = 'button[type="button"]'; // Or 'button[aria-label="expandDetails"]' if needed
          const initialButtonLocator = closestDiv.locator(btnSelector);
          const buttonCount = await initialButtonLocator.count()

          logger.info('Checking if expand button already exists...');
          // click expand button and return if it already exists
          if (buttonCount > 0) {
            logger.info('Expand button found. Clicking expand button...');
            try {
              await initialButtonLocator.click({ timeout: 7000 });
              return { isOpen: true };
            } catch (error) {
              logger.warn('Failed to click expand button', error)
            }
          }
          
          logger.info('Expand button not found (which is fine). Attempting to focus on input element...');
          await inputLocator.click();
          await inputLocator.focus();

          // Find the button within the closest div
          const buttonLocator = closestDiv.locator(btnSelector);

          if (!buttonLocator) {
            throw new Error('Open popup Button not found');
          }

          try {
            logger.info('Waiting for the expand button within the closest div to appear...');
            await buttonLocator.waitFor({ state: 'visible', timeout: 7000 });
          } catch (error) {
            logger.warn('Fail to waiting for the expand button to become visible after 10s', error);
          }

          logger.info('Clicking the expand button...');
          await buttonLocator.click({ timeout: 7000 });
          return { isOpen: true };
        })(),
        7000,
        `openPopup attempt with ${attempt.type} (${attempt.value}) timed out`
      );
      return result;
    } catch (error) {
      logger.error(`Error with ${attempt.type} selector (${attempt.value}): ${error}`);
      // Continue to the next available selector
    }
  }
  return { isOpen: false };
}
