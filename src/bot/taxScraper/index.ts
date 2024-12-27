import logger from "../../utils/logger";
import { fillForm } from "../form/w2/fillForm";

import { navigateToClientList } from "./navigateToClientList";
import { navigateToClientProfile } from "./navigateToClientProfile";
import { findClientNameByEmail } from "./findClientNameByEmail";
import { handleExistingTaxReturn } from "./handleExistingTaxReturn";
import { handleNewTaxReturn } from "./handleNewTaxReturn";
import { navigateToW2Form } from "./navigateToW2Form";

import { TaxScraperOptions } from "./declaration";
import { getClientInformation } from "./getClientInformation";

export async function taxScraper({ page }: TaxScraperOptions) {
  try {
    logger.info("Starting tax scraping process");

    const navResult = await navigateToClientList(page);
    if (!navResult.success) {
      return { page, success: false };
    }

    const { email, taxYear } = await getClientInformation();
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

      // match provided tax year
      const firstRowTaxYear = await page
        .locator("[data-testid='protax-datatable-row']")
        ?.first()
        ?.locator("[class='return-year']")
        ?.textContent();

      logger.info(
        `firstRowTaxYear: ${firstRowTaxYear} and provided taxYear: ${taxYear} `
      );
      const isSameYear =
        firstRowTaxYear?.toString()?.trim() === taxYear?.toString()?.trim();

      if (hasItems > 0 && isSameYear) {
        logger.info(`Data found ${hasItems} for email: ${email}`);
        await handleExistingTaxReturn(page);
      } else {
        await handleNewTaxReturn(page);
      }
    } catch (error) {
      logger.error("Error handling tax return:", error);
    }

    await navigateToW2Form(page);
    await page.waitForTimeout(5000);
    await fillForm({ page });
    await page.waitForTimeout(30000);

    return { page, success: true };
  } catch (error) {
    logger.error("Tax scraper encountered an error:", error);
    throw error;
  }
}

export default taxScraper;
