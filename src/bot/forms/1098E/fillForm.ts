import { Page } from "playwright";
import { getInputMapping } from "./inputMapping";
import logger from "@/utils/logger";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/insidePopup";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { mapToArray } from "../utils/mapToArray";
import { textForTable } from "../../inputTypeHandlers/textForTable";
import { navigateToCorrectForm } from "../utils/navigateToCorrectForm";

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

    const inputMapping = await getInputMapping({ data: formData });
    const inputs = inputMapping.inputs;
    const popupLikeInputs = [];

    for (const input of inputs) {
      const { label, custom, inputType } = input;

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
            await textForTable({ page, input });
            break;
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

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
