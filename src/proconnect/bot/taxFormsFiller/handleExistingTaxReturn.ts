import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function handleExistingTaxReturn({
  page,
  rowIndex,
}: {
  page: Page;
  rowIndex: number;
}): Promise<void> {
  // Select the row by index instead of always the first row
  const rowLocator = page.locator("[data-testid='protax-datatable-row']").nth(rowIndex);
  const button = rowLocator.locator('button#viewTaxReturn');

  try {
    await button.click();
    logger.info(`Clicked the viewTaxReturn button in row index ${rowIndex}.`);
  } catch (error) {
    logger.warn('Retrying using page.evaluate', error);
    await page.evaluate((index) => {
      const rows = document.querySelectorAll("[data-testid='protax-datatable-row']");
      if (rows.length > index) {
        const button = rows[index].querySelector('button#viewTaxReturn') as HTMLElement;
        if (button) {
          button.click();
          console.log(`Clicked the viewTaxReturn button in row index ${index}.`);
        } else {
          console.warn(`No button with id 'viewTaxReturn' found in row index ${index}.`);
        }
      } else {
        console.warn("Row index out of bounds.");
      }
    }, rowIndex);
  }
}
