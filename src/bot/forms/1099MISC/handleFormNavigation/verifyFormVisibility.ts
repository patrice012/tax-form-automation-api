import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function verifyFormVisibility({
  page,
}: {
  page: Page;
}): Promise<{ isCorrectForm: boolean; isAlternateForm: boolean }> {
  // Selectors for the elements to check
  const correctFormText = 'Back to SS Bene., Misc. Inc.';
  const alternateFormText = 'Form 1099-MISC/NEC';

  const visibilityStatus = {
    isCorrectForm: false,
    isAlternateForm: false,
  };

  try {
    // Pause for a short duration to allow elements to render
    await page.waitForTimeout(2000);

    // Check if the correct form is visible
    try {
      logger.info(
        `Checking visibility for the correct form: "${correctFormText}"`,
      );
      const correctFormLocator = page.locator(
        `button:has-text("${correctFormText}")`,
      );
      const correctFormCount = await correctFormLocator.count();
      logger.info(
        `Found ${correctFormCount} elements matching "${correctFormText}"`,
      );
      visibilityStatus.isCorrectForm =
        correctFormCount > 0 && (await correctFormLocator.first().isVisible());
      logger.info(
        `"${correctFormText}" visibility: ${visibilityStatus.isCorrectForm}`,
      );
    } catch (error) {
      logger.error(
        `Error while checking visibility for "${correctFormText}": ${error}`,
      );
    }

    // Check if the alternate form is visible
    try {
      logger.info(
        `Checking visibility for the alternate form: "${alternateFormText}"`,
      );
      const alternateFormLocator = page.locator(
        `button:has-text("${alternateFormText}")`,
      );
      const alternateFormCount = await alternateFormLocator.count();
      logger.info(
        `Found ${alternateFormCount} elements matching "${alternateFormText}"`,
      );
      visibilityStatus.isAlternateForm =
        alternateFormCount > 0 &&
        (await alternateFormLocator.first().isVisible());
      logger.info(
        `"${alternateFormText}" visibility: ${visibilityStatus.isAlternateForm}`,
      );
    } catch (error) {
      logger.error(
        `Error while checking visibility for "${alternateFormText}": ${error}`,
      );
    }

    logger.info(
      `Final visibility status: ${JSON.stringify(visibilityStatus, null, 2)}`,
    );
    return visibilityStatus;
  } catch (error) {
    logger.error(`Failed to verify form visibility: ${error}`);
    return visibilityStatus;
  }
}
