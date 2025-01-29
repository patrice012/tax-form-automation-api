import { Page } from "playwright";
import logger from "@/utils/logger";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { textForTable } from "../../inputTypeHandlers/textForTable";
import { getInputMapping } from "../utils/getInputMapping";
import { getInputFields } from "./inputFields";

export async function fill1099NECForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    // Close any sidebar popups before proceeding
    await closeSideBarPopup({ page });

    logger.info(`Start filling 1099-NEC form`);

    // Get input mappings
    const formName = "1099NEC";
    const inputMappings = await getInputMapping({
      data: formData,
      formName: formName,
      getInputFields: getInputFields,
    });

    for (const inputMapping of inputMappings) {
      const inputs = inputMapping.inputs;

      for (const input of inputs) {
        const { inputType, label } = input;

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

    logger.info("1099-NEC form filled");
  } catch (error) {
    logger.error(`Failed to fill 1099-NEC form: ${error}`);
  }
}
