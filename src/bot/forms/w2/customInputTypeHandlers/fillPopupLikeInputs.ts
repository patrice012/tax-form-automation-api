import { Page } from "playwright";
import logger from "../../../../utils/logger";

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
    const actionButton = page.locator(
      "[data-testid='expDetView-action1-button']"
    );
    await page.waitForTimeout(1500);
    await actionButton.click();
    logger.info("Successfully clicked the action button.");

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

// Helper to count the number of inputs
async function getInputNumber({
  page,
  selector,
}: {
  page: Page;
  selector: string;
}) {
  const inputs = await page.locator(selector).locator("input").all();
  return inputs.length || 2;
}

// Helper to open the popup
async function openPopup({ page, xpath }: { page: Page; xpath: string }) {
  const inputLocator = page.locator(`xpath=${xpath}`).first();
  logger.info(inputLocator ? "popup input found" : "popup input not found");

  try {
    logger.info("Focusing on the input element...");
    await inputLocator.focus();

    // Locate the closest div containing the input
    const closestDiv = inputLocator.locator("xpath=./ancestor::div[1]");
    logger.info("Locating the closest div containing the input...");

    // Find the button within the closest div
    const buttonLocator = closestDiv
      .locator('button[aria-label="expandDetails"]')
      .first();
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

// Helper to fill inputs dynamically
async function fillInputs({
  page,
  value,
  popupSelector,
  numberOfInputs,
  requiredInputs,
}: {
  page: Page;
  value: (string | number)[][];
  popupSelector: string;
  numberOfInputs: number;
  requiredInputs: number;
}) {
  // Flatten the input values into a single array
  const flatValues = value.flat();
  logger.info(`Flattened values: ${flatValues}`);

  let inputIndex = 0;

  // Ensure we process at least the required number of inputs
  while (inputIndex < requiredInputs) {
    // Fill available inputs
    for (
      ;
      inputIndex < numberOfInputs &&
      inputIndex < requiredInputs &&
      inputIndex < flatValues.length;
      inputIndex++
    ) {
      const input = page
        .locator(popupSelector)
        .locator("input")
        .nth(inputIndex);
      logger.info(
        `Filling input ${inputIndex + 1} with value: ${flatValues[inputIndex]}`
      );
      await input.fill(flatValues[inputIndex].toString());
    }

    // If more inputs are needed, press Enter on the last filled input
    if (numberOfInputs < requiredInputs) {
      const lastInput = page
        .locator(popupSelector)
        .locator("input")
        .nth(numberOfInputs - 1);
      logger.info("Pressing Enter to add more input fields...");
      await lastInput.press("Enter");
      await page.waitForTimeout(1500);

      // Update the number of inputs
      numberOfInputs = await getInputNumber({ page, selector: popupSelector });
      logger.info(`Updated number of inputs: ${numberOfInputs}`);
    } else {
      // If no more inputs are needed, exit the loop
      break;
    }
  }
  logger.info("Filled inputs");
}
