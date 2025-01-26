import { PlaywrightService } from "../../services/playwrightService";
import logger from "../../utils/logger";

// Main login function using the helpers
export const loadAuthPage = async (): Promise<any> => {
  const targetUrl =
    "https://accounts.intuit.com/app/sign-in?app_group=ProConnectTaxOnline&asset_alias=Intuit.apd.ito&redirect_uri=https%3A%2F%2Fito.intuit.com%2Fapp%2Fprotax%2Fsign-in&single_sign_on=false&appfabric=true";

  const playwrightService = new PlaywrightService();

  const page = await playwrightService.createPage();
  try {
    await page!.goto(targetUrl, { waitUntil: "load", timeout: 15000 });
    playwrightService.setCurrentPage(page);
    return { page, playwrightService };
  } catch (error) {
    logger.error("Scraping error:", error);
    return { page, playwrightService };
  }
};
