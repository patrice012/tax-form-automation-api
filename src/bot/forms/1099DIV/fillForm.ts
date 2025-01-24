import { Page } from "playwright";
import { getInputMapping } from "./formMapping/inputMapping";
import logger from "../../../utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/popupLikeInputs";
import { resetInputValues } from "./formActions/resetInpustValue";
import { createNewRow } from "./formActions/createNewRow";
import { displayDetailForm } from "./formActions/displayDetailForm";

export async function fill1099DIVForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    // Create a new row
    const newRow = await createNewRow({ page });
    logger.info(`New row created: ${JSON.stringify(newRow)}`);
    await displayDetailForm({
      page,
      btnIndex: Number(newRow.rowIndex) - 1,
    });

    await resetInputValues({ page });

    const inputMapping = await getInputMapping({ data: formData });
    const inputs = inputMapping.inputs;
    const popupLikeInputs = [];

    for (let input of inputs) {
      const inputType = input.inputType;
      const { label, custom } = input;

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
