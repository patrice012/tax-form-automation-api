import { Page } from "playwright";
import { PlaywrightService } from "../../services/playwrightService";
import logger from "../../utils/logger";
import { fillPassword } from "../auth/fillPassword";

// Main login function using the helpers
export const loadTaxPage = async ({
  cookies,
  hash,
}: {
  cookies?: any;
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
    try {
      await page!.goto(targetUrl, {
        waitUntil: "domcontentloaded",
        timeout: 15000,
      });
    } catch (error) {
      logger.warn(`${error}`);
    }

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
