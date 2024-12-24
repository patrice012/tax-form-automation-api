import { Page, Locator } from "playwright";
import logger from "../../utils/logger";
import { NavigationResult } from "./declaration";

export async function navigateToClientProfile(
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
