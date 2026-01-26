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
    await page.locator(selector).waitFor({ state: 'visible', timeout: 17000 });
  } catch (error) {
    logger.error(`Error waiting for popup: ${error}`);
  }
}
