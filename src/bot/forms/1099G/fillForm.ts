import { Page } from "playwright";
import logger from "@/utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/insidePopup";
import { fillTableLikeInputs } from "./customInputTypeHandlers/fillTableLikeInputs";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { mapToArray } from "../utils/mapToArray";
import { selecteLastForm } from "../utils/selecteLastForm";
import { createNewForm } from "../utils/createNewForm";
import { getInputMapping } from "../utils/getInputMapping";
import { getInputFields } from "./inputFields";

export async function fill1099GForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    await closeSideBarPopup({ page });

    const formName = "1099G";
    const inputMappings = await getInputMapping({
      data: formData,
      formName: formName,
      getInputFields: getInputFields,
    });

    for (const inputMapping of inputMappings) {
      const selector =
        '[data-testid="OSIScreen1-10-tabsbar-View-Add-Icon-icon-control"]';
      await createNewForm({ page, selector });
      await selecteLastForm({ page });
      logger.info(`Start filling process`);

      const inputs = inputMapping.inputs;
      const popupLikeInputs: typeof inputs = [];
      const tableLikeInputs: typeof inputs = [];

      for (const input of inputs) {
        const { label, custom, inputType } = input;

        if (custom === "table") {
          tableLikeInputs.push(input);
          continue;
        }

        if (custom === "popup") {
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

      // Handle special cases -- table-like inputs
      for (const [index, input] of tableLikeInputs.entries()) {
        const { label, value } = input;
        try {
          await fillTableLikeInputs({
            value,
            index,
            page,
            input,
          });
        } catch (error) {
          logger.error(`Error processing table input: ${label} --> ${error}`);
        }
      }

      // Handle special cases -- popup-like inputs
      for (const input of popupLikeInputs) {
        const { label, value } = input;
        try {
          const newValue = mapToArray(value);
          await fillPopupLikeInputs({
            value: newValue,
            page,
            input,
          });
        } catch (error) {
          logger.error(`Error processing popup input: ${label} --> ${error}`);
        }
      }
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
