import { Locator, Page } from "playwright";
import { PlaywrightService } from "../services/playwrightService";
import logger from "../utils/logger";
import { fillPassword } from "./loginAccountScraper";

interface TaxScraperOptions {
  page: Page;
  timeout?: number;
  hash?: string;
}

interface NavigationResult {
  success: boolean;
  error?: Error;
}

async function navigateToClientList(page: Page): Promise<NavigationResult> {
  try {
    const clientListSelector = "[id='/app/protax/client-list']";
    await page.waitForSelector(clientListSelector, { state: "visible" });
    await page.waitForTimeout(500);
    await page.click(clientListSelector);
    await page.waitForLoadState("networkidle");
    logger.info("Navigated to client list page.");

    // Wait for client links to load
    const clientLinksSelector = "[data-automation-id='CLIENT_NAME_LINK']";
    try {
      await page.waitForSelector(clientLinksSelector, { state: "visible" });
      logger.info("Client links loaded.");
    } catch (error) {
      logger.error("Error waiting for client links:", error);
    }
    return { success: true };
  } catch (error) {
    logger.error("Error navigating to client list page:", error);
    return { success: false, error: error as Error };
  }
}

async function findClientNameByEmail({
  page,
  emailToFind,
}: {
  page: Page;
  emailToFind: string;
}): Promise<Locator | null> {
  const rows = await page.locator('[data-testid="protax-datatable-row"]').all();
  for (const row of rows) {
    const emailElement = await row.locator(
      '[data-automation-id="CLIENT_EMAIL_LINK"]'
    );
    if (emailElement) {
      const email = await emailElement.textContent();
      if (email?.trim().includes(emailToFind)) {
        return row.locator('[data-automation-id="CLIENT_NAME_LINK"]');
      }
    }
  }
  return null;
}

async function navigateToClientProfile(
  page: Page,
  nameElement: Locator
): Promise<NavigationResult> {
  try {
    const href = await nameElement.evaluate((element) =>
      element.getAttribute("href")
    );
    if (!href) {
      throw new Error("Client link href not found.");
    }

    const url = `https://ito.intuit.com${href}`;
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 10000 });
      logger.info("Navigated to client profile");
    } catch (error) {
      logger.warn("Failed to navigated to client profile");
    }
    return { success: true };
  } catch (error) {
    logger.error("Failed to navigate to client profile:", error);
    return { success: false, error: error as Error };
  }
}

async function handleExistingTaxReturn(page: Page): Promise<void> {
  const firstRow = page.locator("[data-testid='protax-datatable-row']").first();
  const button = firstRow.locator("button#viewTaxReturn");

  try {
    await button.click();
    logger.info("Clicked the viewTaxReturn button in the first row.");
  } catch (error) {
    logger.warn("Retrying using page.evaluate");
    await page.evaluate(() => {
      const rows = document.querySelectorAll(
        "[data-testid='protax-datatable-row']"
      );
      if (rows.length > 0) {
        const button = rows[0].querySelector(
          "button#viewTaxReturn"
        ) as HTMLElement;
        if (button) {
          button?.click();
          console.log("Clicked the viewTaxReturn button in the first row.");
        } else {
          console.warn(
            "No button with id 'viewTaxReturn' found in the first row."
          );
        }
      } else {
        console.warn("No rows found with data-testid 'protax-datatable-row'.");
      }
    });
  }
}

async function handleNewTaxReturn(page: Page): Promise<void> {
  try {
    // Create tax return
    const createButton = page
      .locator("[class='client-profile-zero-state']")
      .locator("button[type='button']");
    const secondBtn = page.locator("[class='create-tax-return-btn']");

    await page.waitForTimeout(500);

    if (await secondBtn.isVisible()) {
      logger.info("Using secondary create button");
      await secondBtn.click();
    } else if (await createButton.isVisible()) {
      logger.info("Using primary create button");
      await createButton.click();
    }

    // Handle Next button
    const nextButton = page.locator("[data-testid='save-tax-return-button']");
    if ((await nextButton.isVisible()) && !(await nextButton.isDisabled())) {
      logger.info("Next button is visible and not disable");
    } else {
      logger.warn("Next button not found.");
    }
    await nextButton?.click();
  } catch (error) {
    logger.error("Error handling 'Next' button:", error);
    throw error;
  }
}

async function navigateToW2Form(page: Page): Promise<void> {
  try {
    await page.locator("[data-automation-id='SECTION_INPUT_RETURN']").click();
    logger.info("Clicked Input Return button");

    const linkText = "Wages, Salaries, Tips (W-2)";
    await page.locator("a", { hasText: linkText }).click();
    logger.info("Clicked W-2 form link");
  } catch (error) {
    logger.error("Failed to navigate to W-2 form:", error);
    throw error;
  }
}

export async function taxScraper({ page }: TaxScraperOptions) {
  try {
    logger.info("Starting tax scraping process");

    const navResult = await navigateToClientList(page);
    if (!navResult.success) {
      return { page, success: false };
    }

    const email = "cgallegos@gradientcoast.com";
    const nameElement = await findClientNameByEmail({
      page,
      emailToFind: email.trim(),
    });

    if (!nameElement) {
      logger.warn(`No client profile found for email: ${email}`);
      return { page, success: false };
    }

    const profileResult = await navigateToClientProfile(page, nameElement);
    if (!profileResult.success) {
      return { page, success: false };
    }

    // Wait for and check table rows
    try {
      try {
        const tableRow = page
          .locator("[data-testid='protax-datatable-row']")
          .first();
        await tableRow.waitFor({ timeout: 15000 });
        logger.info("Table row is visible");
      } catch (error) {
        logger.warn("Warn: Table not loaded on time.");
      }

      const hasItems = await page.evaluate(
        () =>
          document.querySelectorAll("[data-testid='protax-datatable-row']")
            .length
      );

      if (hasItems > 0) {
        logger.info(`Data found ${hasItems} for email: ${email}`);
        await handleExistingTaxReturn(page);
      } else {
        await handleNewTaxReturn(page);
      }
    } catch (error) {
      logger.error("Error handling tax return:", error);
    }

    await navigateToW2Form(page);
    await page.waitForTimeout(30000);

    return { page, success: true };
  } catch (error) {
    logger.error("Tax scraper encountered an error:", error);
    throw error;
  }
}

// Main login function using the helpers
export const loadTaxPage = async ({
  cookies,
  hash,
}: {
  cookies: any;
  hash?: string;
}): Promise<{
  page: Page;
  playwrightService: PlaywrightService;
}> => {
  const targetUrl = "https://ito.intuit.com/app/protax/client-list";

  const playwrightService = new PlaywrightService();
  try {
    const page = await playwrightService.createPage();
    if (cookies && Array.isArray(cookies)) {
      await page.context().addCookies(cookies);
    }
    await page!.goto(targetUrl, { waitUntil: "networkidle", timeout: 45000 });

    let accountChoiceButtonExists = false;

    try {
      logger.info("Check for account selection");
      const accountChoiceButton = page.locator(
        "[data-testid='AccountChoiceButton_0']"
      );

      if (await accountChoiceButton.isVisible()) {
        accountChoiceButtonExists = true;
        await accountChoiceButton.click();
        logger.info("Account selected.");
      } else {
        logger.warn("Account choice button not visible.");
      }
    } catch (error) {
      logger.error("Failed to select an account:", error);
    }

    logger.info(`Account choice button present: ${accountChoiceButtonExists}`);

    if (hash && accountChoiceButtonExists) {
      logger.info("Hash key found");
      await fillPassword({ page, password: hash });
    }

    playwrightService.setCurrentPage(page);
    return { page, playwrightService };
  } catch (error) {
    logger.error("Scraping error:", error);
    throw error;
  }
};

export default taxScraper;
