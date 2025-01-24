import { Page } from "playwright";
import { getInputMapping } from "./formMapping/inputMapping";
import logger from "../../../utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/popupLikeInputs";
import { fillTableLikeInputs } from "./customInputTypeHandlers/fillTableLikeInputs";

export async function fill1099SSAForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    const inputMapping = await getInputMapping({ data: formData });
    const inputs = inputMapping.inputs;
    const popupLikeInputs = [];
    const tableLikeInputs = [];

    for (let input of inputs) {
      const { label, custom, inputType } = input;

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
            await checkboxInput({ page, input });
            break;
          case "number":
            await fillTextInput({ page, input });
            break;
          case "text":
            await fillTextInput({ page, input });
            break;
          case "select":
            await selectOption({ page, input });
            break;
        }
      } catch (error) {
        logger.error(`Error processing: ${label}`);
      }
    }

    // handle special cases -- inputs inside table
    for (let i = 0; i < tableLikeInputs.length; i++) {
      const input = tableLikeInputs[i];
      const { value, label } = input;
      try {
        await fillTableLikeInputs({
          value: value,
          index: i,
          page,
          input,
        });
      } catch (error) {
        logger.error(`Error processing: ${label}`);
      }
    }

    // handle special cases --  inputs inside popup
    for (let i = 0; i < popupLikeInputs.length; i++) {
      const input = popupLikeInputs[i];
      const { value, label } = input;
      try {
        // parse value => [[label, val]]]
        const newValue = transformValue(value);
        await fillPopupLikeInputs({
          value: newValue,
          page,
          input,
        });
      } catch (error) {
        logger.error(`Error processing: ${label} --> ${error}`);
      }
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}

function transformValue(value: unknown[]) {
  return value
    .filter((item) => item)
    .map((item) => {
      // If the item is not an array, transform it into ["", item]
      return Array.isArray(item) ? item : ["", item];
    });
}
