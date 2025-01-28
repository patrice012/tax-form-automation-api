import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function verifyFormVisibility({
  page,
}: {
  page: Page;
}): Promise<{ isCorrectForm: boolean; isAlternateForm: boolean }> {
  // Selectors for the elements to check
  const correctFormText = 'text=Quick Entry:';
  const alternateFormText = 'text=Back to Quick entry';

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

      visibilityStatus.isCorrectForm = await page.isVisible(correctFormText);
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

      visibilityStatus.isAlternateForm =
        await page.isVisible(alternateFormText);

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
