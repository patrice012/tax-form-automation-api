import { Page } from 'playwright';
import logger from '@/utils/logger';
import { fillInputs } from './fillInputs';
import { openPopup } from './openPopup';
import { clickActionButton } from './saveFormAndClosePopup';
import { IInput } from '../../forms/declaration';
import { waitForPopup } from './waitForPopup';

// const INITIAL_NUMBER_OF_INPUTS = 2;

export async function fillPopupLikeInputs({
  value,
  page,
  input,
}: {
  value: (string | number)[][];
  page: Page;
  input: IInput;
}): Promise<void> {
  const { xpath, label, id, dataTestId } = input;
  try {
    logger.info(`Attempting to fill input for ${label} with value: ${value}`);

    // Open the popup
    const popup = await openPopup({ page, xpath, id, dataTestId });

    if (!popup.isOpen) {
      logger.error('Failed to open popup');
      return;
    }
    logger.info('Popup is open, start processing');

    // Wait for the popup modal
    const popupSelector = "[data-testid='stacked-modal']";
    await waitForPopup({ page, selector: popupSelector });

    // Fill inputs
    await fillInputs({
      page,
      value,
      popupSelector,
    });

    // Click the action button
    const btnSelector = "[data-testid='expDetView-action1-button']";
    await clickActionButton({ page, popupSelector, btnSelector });

    logger.info(`Successfully filled input with value: ${value} for ${label}`);
  } catch (error) {
    logger.error(`Primary method failed for ${label}:`, error);
  }
}
