import { Page } from 'playwright';
import logger from '@/utils/logger';

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
      logger.error('Failed to open popup');
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
    logger.info('Waiting for popup to appear...');
    await page.locator(selector).waitFor({ state: 'visible', timeout: 15000 });
    logger.info('Popup is visible.');
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
  const inputs = await page.locator(selector).locator('input').all();
  return inputs.length || 2;
}

// Helper to open the popup
async function openPopup({ page, xpath }: { page: Page; xpath: string }) {
  const inputLocator = page.locator(`xpath=${xpath}`).first();
  logger.info(inputLocator ? 'popup input found' : 'popup input not found');

  try {
    logger.info('Focusing on the input element...');
    await inputLocator.focus();

    // Locate the closest div containing the input
    const closestDiv = inputLocator.locator('xpath=./ancestor::div[1]');
    logger.info('Locating the closest div containing the input...');

    // Find the button within the closest div
    const btnSelector = 'button[type="button"]'; //'button[aria-label="expandDetails"]'
    const buttonLocator = closestDiv.locator(btnSelector);
    logger.info(
      'Waiting for expand button within the closest div to appear...',
    );
    // await buttonLocator.waitFor({ state: "visible", timeout: 30000 });

    logger.info('Clicking the expand button...');
    await buttonLocator.click();

    return { isOpen: true };
  } catch (error) {
    logger.error('Error during popup opening:', error);
    return { isOpen: false };
  }
}

// Helper to close the popup
async function clickActionButton({
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
    await actionButton.waitFor({ state: 'visible', timeout: 3000 });

    // Click the action button
    await actionButton.click();
    logger.info('Clicked the action button.');

    // Wait for a short delay to allow popup to respond
    await page.waitForTimeout(500);

    // Check if the popup is still open
    const popup = page.locator(popupSelector);
    let isPopupVisible = false;
    try {
      isPopupVisible = await popup.isVisible();
    } catch (error) {
      logger.info('Fail to check popup visibility');
    }
    logger.info(`Popup visibility: ${isPopupVisible}`);

    if (isPopupVisible) {
      logger.warn('Popup is still open, clicking the action button again.');
      await actionButton.click();
    } else {
      logger.info(
        'Popup closed successfully after clicking the action button.',
      );
    }
  } catch (error) {
    logger.error(`Failed to handle action button: ${error}`);
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

  // Function to generate a random valid index
  function getRandomIndex(max: number): number {
    return Math.floor(Math.random() * max);
  }

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
        .locator('input')
        .nth(inputIndex);
      logger.info(
        `Filling input ${inputIndex + 1} with value: ${flatValues[inputIndex]}`,
      );
      try {
        await input.clear();
        logger.info('Clear input value');
      } catch (error) {
        logger.warn('Failed to clear input');
      }
      await input.fill(flatValues[inputIndex].toString());
    }

    // If more inputs are needed, press Enter on a random input
    if (numberOfInputs < requiredInputs) {
      const randomIndex = getRandomIndex(numberOfInputs);
      const randomInput = page
        .locator(popupSelector)
        .locator('input')
        .nth(randomIndex);
      logger.info(
        `Pressing Enter on a random input (index: ${randomIndex})...`,
      );
      await randomInput.press('Enter');
      await page.waitForTimeout(1500);

      // Update the number of inputs
      numberOfInputs = await getInputNumber({ page, selector: popupSelector });
      logger.info(`Updated number of inputs: ${numberOfInputs}`);
    } else {
      // If no more inputs are needed, exit the loop
      break;
    }
  }
  logger.info('Filled inputs');
}
