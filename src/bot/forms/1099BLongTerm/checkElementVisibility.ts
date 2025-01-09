import { Page } from "playwright";
import logger from "../../../utils/logger";

export async function checkElementVisibility({
  page,
}: {
  page: Page;
}): Promise<{ onDetailPage: boolean; onEntryPage: boolean }> {
  // Selectors for the elements to check
  const backToQuickEntrySelector = "text=Back to Quick entry";
  const quickEntrySelector = "text=Quick Entry:";

  const check = {
    onDetailPage: false,
    onEntryPage: false,
  };
  try {
    try {
      // Check visibility of each element
      logger.info(`Checking: ${backToQuickEntrySelector} visibility`);
      const backToQuickEntryVisible = await page.isVisible(
        backToQuickEntrySelector
      );
      check["onDetailPage"] = backToQuickEntryVisible;
    } catch (error) {}

    try {
      logger.info(`Checking: ${quickEntrySelector} visibility`);
      // Check visibility of each element
      const quickEntryVisible = await page.isVisible(quickEntrySelector);
      check["onEntryPage"] = quickEntryVisible;
    } catch (error) {}

    logger.info(`Check visibility state: ${JSON.stringify(check, null, 2)}`);

    // Return the visibility status as an object
    return check;
  } catch (error) {
    // Return the visibility status as an object
    logger.error(
      `Fail to check ${backToQuickEntrySelector} and ${quickEntrySelector} visibility: ${error} `
    );
    return check;
  }
}
