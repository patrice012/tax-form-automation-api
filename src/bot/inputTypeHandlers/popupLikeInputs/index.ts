import { Page } from "playwright";
import logger from "../../../utils/logger";
import { fillInputs } from "./fillInputs";
import { getInputNumber } from "./helper";
import { openPopup } from "./openPopup";
import { clickActionButton } from "./saveFormAndClosePopup";

export async function fillPopupLikeInputs({
  value,
  xpath,
  label,
  page,
}: {
  value: (string | number)[][];
  xpath: string;
  label: string;
  page: Page;
}): Promise<void> {
  try {
    logger.info(`Attempting to fill input for ${label} with value: ${value}`);
    logger.info(`Using xpath: ${xpath}`);

    // Open the popup
    const popup = await openPopup({ page, xpath });

    if (!popup.isOpen) {
      logger.error("Failed to open popup");
      return;
    }

    // Wait for the popup modal
    const popupSelector = "[data-testid='stacked-modal']";
    await waitForPopup({ page, selector: popupSelector });

    // Initial inputs and calculations
    const INITIAL_NUMBER_OF_INPUTS = 2;
    let numberOfInputs = await getInputNumber({
      page,
      selector: popupSelector,
    });
    logger.info(`Initial number of inputs: ${numberOfInputs}`);

    const requiredInputs = INITIAL_NUMBER_OF_INPUTS * value.length;
    logger.info(`Required inputs: ${requiredInputs}`);

    // Fill inputs
    await fillInputs({
      page,
      value,
      popupSelector,
      numberOfInputs,
      requiredInputs,
    });

    // Click the action button
    const btnSelector = "[data-testid='expDetView-action1-button']";
    await clickActionButton({ page, popupSelector, btnSelector });

    logger.info(`Successfully filled input with value: ${value} for ${label}`);
  } catch (error) {
    logger.error(`Primary method failed for ${label}:`, error);
  }
}

// Helper to wait for popup visibility
async function waitForPopup({
  page,
  selector,
}: {
  page: Page;
  selector: string;
}) {
  try {
    logger.info("Waiting for popup to appear...");
    await page.locator(selector).waitFor({ state: "visible", timeout: 15000 });
    logger.info("Popup is visible.");
  } catch (error) {
    logger.error(`Error waiting for popup: ${error}`);
  }
}
