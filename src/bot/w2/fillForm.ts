import { Page } from "playwright";
import { getInputMapping } from "./formMapping/inputMapping";
import logger from "../../utils/logger";
import { fillTextInput } from "../inputTypeHandlers/text";
import { selectOption } from "../inputTypeHandlers/select";
import { checkboxInput } from "../inputTypeHandlers/checkbox";
import { fillTableLikeInputs } from "../inputTypeHandlers/fillTableLikeInputs";
import { fillPopupLikeInputs } from "../inputTypeHandlers/fillPopupLikeInputs";

export async function fillForm({ page }: { page: Page }) {
  try {
    const inputMapping = await getInputMapping();
    const inputs = inputMapping.inputs;
    const tableLikeInput = [];
    const popupLikeInputs = [];

    for (let input of inputs) {
      const inputType = input.inputType;
      const { xpath, value, label, custom } = input;

      if (custom && custom === "table") {
        tableLikeInput.push(input);
        continue;
      }

      if (custom && custom === "popup") {
        popupLikeInputs.push(input);
        continue;
      }

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
    }
    // handle special cases -- inputs inside table
    for (let i = 0; i < tableLikeInput.length; i++) {
      const { xpath, value, label } = tableLikeInput[i];
      await fillTableLikeInputs({
        value: value,
        label,
        xpath,
        page,
        index: i,
      });
    }

    // handle special cases --  inputs inside popup
    for (let i = 0; i < popupLikeInputs.length; i++) {
      const { xpath, value, label } = popupLikeInputs[i];
      await fillPopupLikeInputs({
        value: value,
        label,
        xpath,
        page,
      });
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
