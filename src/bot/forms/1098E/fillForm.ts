import { Page } from "playwright";
import logger from "@/utils/logger";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/insidePopup";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { mapToArray } from "../utils/mapToArray";
import { textForTable } from "../../inputTypeHandlers/textForTable";
import { navigateToCorrectForm } from "../utils/navigateToCorrectForm";
import { getInputMapping } from "../utils/getInputMapping";
import { getInputFields } from "./inputFields";

export async function fill1098EForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    // Navigate to the correct page
    await closeSideBarPopup({ page });
    await navigateToCorrectForm({ page, sectionTitle: "Education" });

    const formName = "1098E";
    const inputMappings = await getInputMapping({
      data: formData,
      formName: formName,
      getInputFields: getInputFields,
    });

    for (const inputMapping of inputMappings) {
      const inputs = inputMapping.inputs;
      const popupLikeInputs: typeof inputs = [];

      for (const input of inputs) {
        const { label, custom, inputType } = input;

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

      // Handle special cases -- inputs inside popup
      for (const input of popupLikeInputs) {
        const { value, label } = input;
        try {
          // parse value => [[label, val]]]
          const newValue = mapToArray(value);
          await fillPopupLikeInputs({ value: newValue, page, input });
        } catch (error) {
          logger.error(`Error processing: ${label} --> ${error}`);
        }
      }
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
