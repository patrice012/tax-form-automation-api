import { Page } from "playwright";
import { getInputMapping } from "./inputMapping";
import logger from "@/utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { navigateToCorrectForm } from "./navigateToCorrectForm";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { selecteLastForm } from "../utils/selecteLastForm";
import { createNewForm } from "../utils/createNewForm";

export async function fill1098TForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    await closeSideBarPopup({ page });
    // Navigate to the correct page
    await navigateToCorrectForm({ page });
    const selector =
      '[data-testid="OSIScreen1-5-tabsbar-View-Add-Icon-icon-control"]';
    await createNewForm({ page, selector });
    await selecteLastForm({ page });
    logger.info(`Start filling process`);

    const inputMapping = await getInputMapping({ data: formData });
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

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
