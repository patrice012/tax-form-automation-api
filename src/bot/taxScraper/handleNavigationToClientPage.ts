import { Page } from "playwright";
import logger from "../../utils/logger";

export const handleNavigationToClientPage = async ({
  page,
}: {
  page: Page;
}) => {
  try {
    // waiting to page to load
    try {
      await page.waitForURL("https://ito.intuit.com/app/protax/tax-hub");
      // await page.waitForTimeout(3000);
    } catch (error) {
      console.warn("waiting for URL");
    }

    try {
      await page.goto("https://ito.intuit.com/app/protax/client-list", {
        waitUntil: "networkidle",
      });
      // await page.waitForTimeout(30000);
    } catch (error) {
      console.log("navigate to https://ito.intuit.com/app/protax/client-list");
    }
  } catch (error) {
    logger.error("Login error:", error);
  }
};
