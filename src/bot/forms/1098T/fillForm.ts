import { Page } from "playwright";
import { getInputMapping } from "./formMapping/inputMapping";
import logger from "../../../utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { navigateToCorrectForm } from "./handleFormNavigation";

export async function fill1098TForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    // Navigate to the correct page
    await navigateToCorrectForm({ page });

    const inputMapping = await getInputMapping({ data: formData });
    const inputs = inputMapping.inputs;
    const popupLikeInputs = [];
    const tableLikeInputs = [];

    for (let input of inputs) {
      const { xpath, value, label, custom, inputType } = input;

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
            await checkboxInput({ value, label, xpath, page });
            break;
          case "number":
            await fillTextInput({ value, label, xpath, page });
            break;
          case "text":
            await fillTextInput({ value, label, xpath, page });
            break;
          case "select":
            await selectOption({ value, label, xpath, page });
            break;
        }
      } catch (error) {
        logger.error(`Error processing: ${label}`);
      }
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
