import { Page } from "playwright";
import { getInputMapping } from "./formMapping/inputMapping";
import logger from "@/utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillTableLikeInputs } from "./customInputTypeHandlers/fillTableLikeInputs";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/insidePopup";
import { createNewForm } from "./formActions/createNewForm";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { selecteLastForm } from "../utils/selecteLastForm";

export async function fillW2Form({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    await closeSideBarPopup({ page });
    await createNewForm({ page });
    await selecteLastForm({ page });
    logger.info(`Start filling process`);

    const inputMapping = await getInputMapping({ data: formData });
    const inputs = inputMapping.inputs;
    const tableLikeInputs = [];
    const popupLikeInputs = [];

    for (const input of inputs) {
      const inputType = input.inputType;
      const { custom, label } = input;

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
        logger.error(`Error processing: ${label} ${error}`);
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
        logger.error(`Error processing: ${label} ${error}`);
      }
    }

    // handle special cases --  inputs inside popup
    for (let i = 0; i < popupLikeInputs.length; i++) {
      const input = popupLikeInputs[i];
      const { value, label } = input;
      try {
        await fillPopupLikeInputs({
          value: value,
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
