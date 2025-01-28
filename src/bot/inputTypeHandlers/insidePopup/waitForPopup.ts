import { Page } from 'playwright';
import logger from '@/utils/logger';

// Helper to wait for popup visibility
export async function waitForPopup({
  page,
  selector,
}: {
  page: Page;
  selector: string;
}) {
  try {
    logger.info('Waiting for popup to appear...');
    await page.locator(selector).waitFor({ state: 'visible', timeout: 17000 });
    logger.info('Popup is visible.');
  } catch (error) {
    logger.error(`Error waiting for popup: ${error}`);
  }
}
