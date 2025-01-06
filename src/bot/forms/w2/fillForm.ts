import { Page } from "playwright";
import { getInputMapping } from "./formMapping/inputMapping";
import logger from "../../../utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillTableLikeInputs } from "./customInputTypeHandlers/fillTableLikeInputs";
import { fillPopupLikeInputs } from "./customInputTypeHandlers/fillPopupLikeInputs";

export async function fillW2Form({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    const inputMapping = await getInputMapping({ data: formData });
    const inputs = inputMapping.inputs;
    const tableLikeInputs = [];
    const popupLikeInputs = [];

    for (let input of inputs) {
      const inputType = input.inputType;
      const { xpath, value, label, custom } = input;

      if (custom && custom === "table") {
        tableLikeInputs.push(input);
        continue;
      }

      if (custom && custom === "popup") {
        popupLikeInputs.push(input);
        continue;
      }

      try {
        switch (inputType) {
          case "checkbox":
            await checkboxInput({ value, label, xpath, page });
            break;
          case "number":
            await fillTextInput({ value, label, xpath, page });
            break;
          case "text":
            await fillTextInput({ value, label, xpath, page });
            break;
          case "select":
            await selectOption({ value, label, xpath, page });
            break;
        }
      } catch (error) {
        logger.error(`Error processing: ${label}`);
      }
    }
    // handle special cases -- inputs inside table
    for (let i = 0; i < tableLikeInputs.length; i++) {
      const { xpath, value, label } = tableLikeInputs[i];
      try {
        await fillTableLikeInputs({
          value: value,
          label,
          xpath,
          page,
          index: i,
        });
      } catch (error) {
        logger.error(`Error processing: ${label}`);
      }
    }

    // handle special cases --  inputs inside popup
    for (let i = 0; i < popupLikeInputs.length; i++) {
      const { xpath, value, label } = popupLikeInputs[i];
      try {
        await fillPopupLikeInputs({
          value: value,
          label,
          xpath,
          page,
        });
      } catch (error) {
        logger.error(`Error processing: ${label}`);
      }
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
