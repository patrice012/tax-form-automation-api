import { Page } from "playwright";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { textForTable } from "../../inputTypeHandlers/textForTable";
import logger from "@/utils/logger";
import { navigateToCorrectForm } from "../utils/navigateToCorrectForm";
import { getInputMapping } from "../utils/getInputMapping";
import { getInputFields } from "./inputFields";

export async function fill1098Form({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    // Navigate to the correct page
    await closeSideBarPopup({ page });
    await navigateToCorrectForm({ page, sectionTitle: "Interest" });

    const formName = "1098";
    const inputMappings = await getInputMapping({
      data: formData,
      formName: formName,
      getInputFields: getInputFields,
    });

    for (const inputMapping of inputMappings) {
      const inputs = inputMapping.inputs;

      for (const input of inputs) {
        const inputType = input.inputType;
        const { label } = input;

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
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
