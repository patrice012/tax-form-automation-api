import { Page } from "playwright";
import logger from "../../../utils/logger";

// Helper to close the popup
export async function clickActionButton({
  page,
  popupSelector,
  btnSelector,
}: {
  page: Page;
  popupSelector: string;
  btnSelector: string;
}) {
  const actionButton = page.locator(btnSelector);

  try {
    // Wait for the button to be visible
    await actionButton.waitFor({ state: "visible", timeout: 3000 });

    // Click the action button
    await actionButton.click();
    logger.info("Clicked the action button.");

    // Wait for a short delay to allow popup to respond
    await page.waitForTimeout(500);

    // Check if the popup is still open
    const popup = page.locator(popupSelector);
    let isPopupVisible = false;
    try {
      isPopupVisible = await popup.isVisible();
    } catch (error) {
      logger.info("Fail to check popup visibility");
    }
    logger.info(`Popup visibility: ${isPopupVisible}`);

    if (isPopupVisible) {
      logger.warn("Popup is still open, clicking the action button again.");
      await actionButton.click();
    } else {
      logger.info(
        "Popup closed successfully after clicking the action button."
      );
    }
  } catch (error) {
    logger.error(`Failed to handle action button: ${error}`);
  }
}
