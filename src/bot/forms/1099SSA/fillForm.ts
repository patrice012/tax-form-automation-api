import { Page } from "playwright";
import logger from "@/utils/logger";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/insidePopup";
import { fillTableLikeInputs } from "./customInputTypeHandlers/fillTableLikeInputs";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { mapToArray } from "../utils/mapToArray";
import { textForTable } from "../../inputTypeHandlers/textForTable";
import { getInputMapping } from "../utils/getInputMapping";
import { getInputFields } from "./inputFields";

export async function fill1099SSAForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    await closeSideBarPopup({ page });

    logger.info(`Start filling 1099SSA form`);

    // Get input mappings
    const formName = "1099SSA";
    const inputMappings = await getInputMapping({
      data: formData,
      formName: formName,
      getInputFields: getInputFields,
    });

    for (const inputMapping of inputMappings) {
      const inputs = inputMapping.inputs;
      const popupLikeInputs = [];
      const tableLikeInputs = [];

      for (const input of inputs) {
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
            case "text":
              await textForTable({ page, input });
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
          // parse value => [[label, val]]]
          const newValue = mapToArray(value);
          await fillPopupLikeInputs({
            value: newValue,
            page,
            input,
          });
        } catch (error) {
          logger.error(`Error processing: ${label} --> ${error}`);
        }
      }
    }

    logger.info("1099SSA form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
