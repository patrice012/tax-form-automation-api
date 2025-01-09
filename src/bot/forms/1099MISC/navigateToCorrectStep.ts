import { Page } from "playwright";
import logger from "../../../utils/logger";
import { checkElementVisibility } from "./checkElementVisibility";
import { navigateToStep } from "./navigateToStep";

export async function navigateToCorrectStep({ page }: { page: Page }) {
  try {
    const check = await checkElementVisibility({ page });
    if (check.onEntryPage) {
      logger.info("On Entry page, go to detail page");
      await navigateToStep({ page, stepTitle: "Form 1099-MISC/NEC" });
      logger.info("Go to detail form page");
    }

    if (check.onDetailPage) {
      logger.info("Already on detail page, no navigation needed");
    } else {
      logger.warn("Check current page failed");
    }
  } catch (error) {
    logger.error(`Error: ${error}`);
  }
}
