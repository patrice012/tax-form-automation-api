import { Page } from "playwright";
import logger from "../../../utils/logger";
import { checkElementVisibility } from "./checkElementVisibility";
import { navigateToStep } from "./formMapping/inputMapping/navigateToStep";
import { navigateToForm } from "../../taxFormsFiller/navigateToForm";

export async function navigateToCorrectStep({ page }: { page: Page }) {
  try {
    let check = await checkElementVisibility({ page });
    let count = 0;
    while (check.onDetailPage) {
      count = count + 1;

      if (count > 2) {
        logger.info("Max click reached, relaoding page");
        await page.reload();
        await navigateToForm({ page, linkText: "Dispositions (Sch D, etc.)" });
        logger.info("Reopen Dispositions (Sch D, etc.) form");
        break;
      }
      logger.info("On detail page, go back to Entry page");
      await navigateToStep({ page, stepTitle: "Back to Quick entry" });
      logger.info("Go back to Entry page: success");
      check = await checkElementVisibility({ page });
    }

    if (check.onEntryPage) {
      logger.info("Already on Entry page, no navigation needed");
    } else {
      logger.warn("Check current page failed");
    }
  } catch (error) {
    logger.error(`Error: ${error}`);
  }
}
