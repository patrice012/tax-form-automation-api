import { Page } from 'playwright';
import logger from '@/utils/logger';
import { NavigationResult } from './declaration';

export async function navigateToClientList(
  page: Page,
): Promise<NavigationResult> {
  try {
    const clientListSelector = "[id='/app/protax/client-list']";
    const locator = page.locator(clientListSelector);
    // Check element visibility and enabled state
    try {
      const isVisible = await locator.isVisible();
      logger.info(`clientListSelector is visible: ${isVisible}`);
      if (!isVisible) {
        await page.waitForSelector(clientListSelector, { state: 'visible' });
      }
    } catch (error) {
      logger.warn(`clientListSelector is not visible`, error);
    }
    try {
      await page.click(clientListSelector);
      logger.info('Click client list');
    } catch (error) {
      logger.warn('Error click client list', error);
    }
    logger.info('Navigated to client list page.');

    // Wait for client links to load
    const clientLinksSelector = "[data-automation-id='CLIENT_NAME_LINK']";
    try {
      await page.waitForSelector(clientLinksSelector, { state: 'visible' });
      logger.info('Client links loaded.');
    } catch (error) {
      logger.error('Error waiting for client links:', error);
    }
    return { success: true };
  } catch (error) {
    logger.error('Error navigating to client list page:', error);
    return { success: false, error: error as Error };
  }
}
