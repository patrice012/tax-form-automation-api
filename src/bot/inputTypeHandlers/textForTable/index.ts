import { Page } from "playwright";
import logger from "../../../utils/logger";
import { IInput } from "../../forms/declaration";
import { fillInputs } from "../insidePopup/fillInputs";
import { openPopup } from "../insidePopup/openPopup";
import { clickActionButton } from "../insidePopup/saveFormAndClosePopup";
import { checkInputValue } from "./checkInputValue";
import { fillTextInput } from "../text";
import { waitForPopup } from "../insidePopup/waitForPopup";
import { mapToArray } from "../../forms/utils/mapToArray";

const INITIAL_NUMBER_OF_INPUTS = 2;

export async function textForTable({
  page,
  input,
}: {
  page: Page;
  input: IInput;
}): Promise<void> {
  const { xpath, label, value, id, dataTestId, inputIndex } = input;
  try {
    logger.info(`Attempting to fill input for ${label} with value: ${value}`);

    logger.info(`Check if input for ${label} is already filled`);
    const isInputFilled = await checkInputValue({ page, input });
    logger.info(`Input for ${label} has value: ${isInputFilled}`);
    
    if (!isInputFilled) {
      logger.info(`Input for ${label} has no value, start filling normaly`);
      await fillTextInput({ page, input });
      return;
    }

    logger.info(`Input for ${label} has value, start filling with popup`);

    // Open the popup
    const popup = await openPopup({ page, xpath, id, dataTestId });

    if (!popup.isOpen) {
      logger.error("Failed to open popup, exist process");
      logger.info(
        `Start filling input for ${label} normaly, existing value will be overwritten`
      );
      await fillTextInput({ page, input });
      return;
    }
    logger.info("Popup is open, start processing");

    // Wait for the popup modal
    const popupSelector = "[data-testid='stacked-modal']";
    await waitForPopup({ page, selector: popupSelector });

    // Transform value into an array of value
    const valueToArray = mapToArray(value);
    logger.info(
      `Initial value: ${value} --> valueToArray: ${JSON.stringify(
        valueToArray
      )}`
    );

    try {
      // Fill inputs
      await fillInputs({
        page,
        value: valueToArray,
        popupSelector,
      });

      // Click the action button
      const btnSelector = "[data-testid='expDetView-action1-button']";
      await clickActionButton({ page, popupSelector, btnSelector });

      logger.info(
        `Successfully filled input with value: ${value} for ${label}`
      );
    } catch (error) {
      logger.info(
        `Fail to fill Input for ${label} using popup, start filling normaly`
      );
      await fillTextInput({ page, input });
    }
  } catch (error) {
    logger.error(`Primary method failed for ${label}:`, error);
  }
}
