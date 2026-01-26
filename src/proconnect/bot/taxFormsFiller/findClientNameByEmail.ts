import { Page, Locator } from 'playwright';
import logger from '@/utils/logger';

export async function findClientNameByEmail({
  page,
  nameToFind,
  emailToFind,
}: {
  page: Page;
  nameToFind: string;
  emailToFind: string;
}): Promise<Locator | null> {
  try {
    logger.info(`Searching for rows with email: "${emailToFind}" using filter input.`);

    // Locate and use the filter input to narrow down rows
    const filterInput = page.locator('[data-automation-id="protax-datatable-search-input"]');
    await filterInput.waitFor({ state: 'visible', timeout: 5000 });
    await filterInput.fill(''); // Clear any pre-existing text
    await filterInput.fill(emailToFind);

    // Allow time for the table to update after filtering.
    await page.waitForTimeout(1000);

    // Retrieve all rows after filtering
    const rows = await page.locator('[data-testid="protax-datatable-row"]').all();
    logger.info(`Found ${rows.length} row(s) after filtering by email.`);

    if (rows.length === 0) {
      logger.warn(`No rows found with email "${emailToFind}".`);
      return null;
    }

    // If only one row exists, return that row's CLIENT_NAME_LINK locator.
    if (rows.length === 1) {
      const finalLocator = rows[0].locator('[data-automation-id="CLIENT_NAME_LINK"]');
      logger.info(`Only one row found. Returning locator with name: "${await finalLocator.textContent()}"`);
      return finalLocator;
    }

    // If multiple rows are present, try to find one with an exact name match.
    let chosenRowIndex: number | null = null;
    for (let i = 0; i < rows.length; i++) {
      const nameEl = rows[i].locator('[data-automation-id="CLIENT_NAME_LINK"]');
      const rowName = (await nameEl.textContent())?.trim() || '';
      logger.info(`Row ${i}: Name = "${rowName}"`);
      if (rowName === nameToFind) {
        chosenRowIndex = i;
        break;
      }
    }

    // Default to the first row if no exact name match is found.
    const chosenRow = chosenRowIndex !== null ? rows[chosenRowIndex] : rows[0];
    const finalLocator = chosenRow.locator('[data-automation-id="CLIENT_NAME_LINK"]');
    logger.info(
      `Returning locator from row ${chosenRowIndex !== null ? chosenRowIndex : 0} with name: "${await finalLocator.textContent()}"`
    );
    return finalLocator;
  } catch (error) {
    logger.error(`Error in findClientNameByEmail: ${error}`);
    return null;
  }
}
