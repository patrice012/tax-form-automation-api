import logger from "../../utils/logger";

import { navigateToClientList } from "./navigateToClientList";
import { navigateToClientProfile } from "./navigateToClientProfile";
import { findClientNameByEmail } from "./findClientNameByEmail";
import { handleExistingTaxReturn } from "./handleExistingTaxReturn";
import { handleNewTaxReturn } from "./handleNewTaxReturn";

import { TaxFillerOptions } from "./declaration";
import { getClientInformation } from "./getClientInformation";
import { fillAllForms } from "./fillAllForms";
import { navigateToFormsSection } from "./navigateToFormsSection";

export async function startTaxFormsFiller({ page }: TaxFillerOptions) {
  try {
    logger.info("Starting tax scraping process");

    const navResult = await navigateToClientList(page);
    if (!navResult.success) {
      return { page, success: false };
    }

    const { email, taxYear, formData } = await getClientInformation();

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
    let tableElementsFound = false;
    try {
      try {
        const tableRow = page
          .locator("[data-testid='protax-datatable-row']")
          .first();
        await tableRow.waitFor({ state: "visible", timeout: 5000 });
        logger.info("Table row is visible");

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
          tableElementsFound = true;
        }
      } catch (error) {
        logger.warn("Warn: Table not loaded on time.");
      }

      if (tableElementsFound) {
        await handleExistingTaxReturn(page);
      } else {
        await handleNewTaxReturn(page);
      }
    } catch (error) {
      logger.error("Error handling tax return:", error);
    }

    // navigate to forms section
    await navigateToFormsSection({ page });

    // fill all provided forms
    logger.info("start fill forms");
    await fillAllForms({ page, formData });

    await page.waitForTimeout(5000);

    return { page, success: true };
  } catch (error) {
    logger.error("Tax scraper encountered an error:", error);
    return { page, success: false };
  }
}

export default startTaxFormsFiller;
