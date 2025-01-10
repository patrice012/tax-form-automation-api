import { Page } from "playwright";
import logger from "../../../../utils/logger";
import { verifyFormVisibility } from "./verifyFormVisibility";
import { navigateToStep } from "./navigateToStep";

export async function navigateToCorrectForm({ page }: { page: Page }) {
  try {
    // Check visibility of the current forms
    const visibilityStatus = await verifyFormVisibility({ page });

    if (visibilityStatus.isAlternateForm) {
      logger.info(
        "User is on the alternate form page, navigating to the correct form."
      );
      await navigateToStep({ page, stepTitle: "General Information" });
      logger.info("Navigation to the correct form page completed.");
    } else if (visibilityStatus.isCorrectForm) {
      logger.info(
        "User is already on the correct form page. No navigation needed."
      );
    } else {
      logger.warn(
        "Unable to determine the current form state. Navigation skipped."
      );
    }
  } catch (error) {
    logger.error(`Failed to navigate to the correct form: ${error}`);
  }
}
