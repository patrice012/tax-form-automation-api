import logger from '@/utils/logger';
import { PlaywrightService } from '@/services/playwrightService';
import { Page } from 'playwright';

export async function manualLoginProcess(autoNavigateToReturn: boolean = true) {
  // The ProConnect login URL
  const loginUrl =
    'https://accounts.intuit.com/app/sign-in?app_group=ProConnectTaxOnline&asset_alias=Intuit.apd.ito&redirect_uri=https%3A%2F%2Fito.intuit.com%2Fapp%2Fprotax%2Fsign-in&single_sign_on=false&appfabric=true';

  const playwrightService = new PlaywrightService();
  const page = await playwrightService.createPage();

  // Wait a few seconds before navigating to the login page.
  await page.waitForTimeout(3000);

  // Load the login page.
  await page.goto(loginUrl, { waitUntil: 'domcontentloaded' });
  logger.info('Login page loaded. Please complete the login manually (refreshes, delays, etc. are fine).');

  // Refresh the page after 1 second to ensure the login screen shows.
  await page.waitForTimeout(1000);
  await page.reload({ waitUntil: 'domcontentloaded' });
  logger.info('Page refreshed automatically.');

  page.setDefaultTimeout(0); // Wait indefinitely.

  // Wait for the user to log in and navigate appropriately.
  if (autoNavigateToReturn) {
    // Wait until the URL no longer contains the login path.
    await waitForUserLogin(page);
  } else {
    // Wait until the user navigates to the tax return page.
    await waitForTaxReturnNavigation(page);
  }

  logger.info('User login detected. Continuing with the process...');
  playwrightService.setCurrentPage(page);
  return { page, playwrightService };
}

// Wait until the login URL is gone.
async function waitForUserLogin(page: Page) {
  await page.waitForFunction(
    () => !window.location.href.includes('accounts.intuit.com/app/sign-in'),
    { timeout: 0 }
  );
}

// Wait until the URL indicates that the user is on the tax return page.
async function waitForTaxReturnNavigation(page: Page) {
  await page.waitForFunction(
    () => window.location.href.includes('ito.intuit.com/app/protax/tax-return'),
    { timeout: 0 }
  );
}
