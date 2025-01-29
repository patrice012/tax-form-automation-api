import { Page } from "playwright";
import logger from "@/utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/insidePopup";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { mapToArray } from "../utils/mapToArray";
import { getLatestEmptyRow } from "../utils/getLatestEmptyRow";
import { displayDetailForm } from "../utils/displayDetailForm";
import { getInputMapping } from "../utils/getInputMapping";
import { getInputFields } from "./inputFields";
import { navigateToEntryPage } from "../utils/navigateToEntryPage";

export async function fill1099INTForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    const formName = "1099INT";
    const inputMappings = await getInputMapping({
      data: formData,
      formName: formName,
      getInputFields: getInputFields,
    });

    for (const inputMapping of inputMappings) {
      // Create a new row
      const newRow = await getLatestEmptyRow({ page });
      if (newRow) {
        await displayDetailForm({
          page,
          btnIndex: Number(newRow.rowIndex) - 1,
        });
      }
      await closeSideBarPopup({ page });

      const inputs = inputMapping.inputs;
      const popupLikeInputs = [];

      for (const input of inputs) {
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
      if (inputMappings.length > 1) {
        logger.info("More that two forms, navigate to entry page");
        // Check visibility of the current forms
        const correctFormText = "General Information";
        const alternateFormText = "Back to Quick entry";
        await navigateToEntryPage({ page, correctFormText, alternateFormText });
      }
    }

    logger.info(formName, "form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
