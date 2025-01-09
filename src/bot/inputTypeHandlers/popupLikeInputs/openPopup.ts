import { Page } from "playwright";
import logger from "../../../utils/logger";

// Helper to open the popup
export async function openPopup({ page, xpath }: { page: Page; xpath: string }) {
  const inputLocator = page.locator(`xpath=${xpath}`).first();
  logger.info(inputLocator ? "popup input found" : "popup input not found");

  try {
    logger.info("Focusing on the input element...");
    await inputLocator.focus();

    // Locate the closest div containing the input
    const closestDiv = inputLocator.locator("xpath=./ancestor::div[1]");
    logger.info("Locating the closest div containing the input...");

    // Find the button within the closest div
    const btnSelector = 'button[type="button"]'; //'button[aria-label="expandDetails"]'
    const buttonLocator = closestDiv.locator(btnSelector);
    logger.info(
      "Waiting for expand button within the closest div to appear..."
    );
    // await buttonLocator.waitFor({ state: "visible", timeout: 30000 });

    logger.info("Clicking the expand button...");
    await buttonLocator.click();

    return { isOpen: true };
  } catch (error) {
    logger.error("Error during popup opening:", error);
    return { isOpen: false };
  }
}
