import { Page } from "playwright";
import logger from "../../../utils/logger";

export async function checkElementVisibility({
  page,
}: {
  page: Page;
}): Promise<{ onDetailPage: boolean; onEntryPage: boolean }> {
  // Selectors for the elements to check
  const backToSSB = "Back to SS Bene., Misc. Inc.";
  const goToDetailForm = "Form 1099-MISC/NEC";

  const check = {
    onDetailPage: false,
    onEntryPage: false,
  };

  try {
    try {
      await page.waitForTimeout(2000);
      // Check visibility of the first element
      logger.info(`Checking visibility for: "${backToSSB}"`);
      const backToSSBLocator = page.locator(`button:has-text("${backToSSB}")`);
      const backToSSBCount = await backToSSBLocator.count();
      logger.info(`Found ${backToSSBCount} elements matching "${backToSSB}"`);
      check["onDetailPage"] =
        backToSSBCount > 0 && (await backToSSBLocator.first().isVisible());
      logger.info(`"${backToSSB}" visibility: ${check["onDetailPage"]}`);
    } catch (error) {
      logger.error(
        `Error while checking visibility for "${backToSSB}": ${error}`
      );
    }

    try {
      // Check visibility of the second element
      logger.info(`Checking visibility for: "${goToDetailForm}"`);
      const goToDetailFormLocator = page.locator(
        `button:has-text("${goToDetailForm}")`
      );
      const goToDetailFormCount = await goToDetailFormLocator.count();
      logger.info(
        `Found ${goToDetailFormCount} elements matching "${goToDetailForm}"`
      );
      check["onEntryPage"] =
        goToDetailFormCount > 0 &&
        (await goToDetailFormLocator.first().isVisible());
      logger.info(`"${goToDetailForm}" visibility: ${check["onEntryPage"]}`);
    } catch (error) {
      logger.error(
        `Error while checking visibility for "${goToDetailForm}": ${error}`
      );
    }

    logger.info(`Final visibility state: ${JSON.stringify(check, null, 2)}`);
    return check;
  } catch (error) {
    logger.error(`Failed to check visibility due to an error: ${error}`);
    return check;
  }
}
