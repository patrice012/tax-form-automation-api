import { Page } from "playwright";
import logger from "../../utils/logger";

export async function handleNewTaxReturn(page: Page): Promise<any> {
  try {
    // Create tax return
    const createButton = page
      .locator("[class='client-profile-zero-state']")
      .locator("button[type='button']");
    const secondBtn = page.locator("[class='create-tax-return-btn']");

    await page.waitForTimeout(500);

    if (await secondBtn.isVisible()) {
      logger.info("Using secondary create button");
      await secondBtn.click();
    } else if (await createButton.isVisible()) {
      logger.info("Using primary create button");
      await createButton.click();
    }

    // Handle Next button
    const nextButton = page.locator("[data-testid='save-tax-return-button']");
    if ((await nextButton.isVisible()) && !(await nextButton.isDisabled())) {
      logger.info("Next button is visible and not disable");
    } else {
      logger.warn("Next button not found.");
    }
    await nextButton?.click();
  } catch (error) {
    logger.error("Error handling 'Next' button:", error);
    return { page, success: false };
  }
}
