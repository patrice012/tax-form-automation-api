import { Page } from "playwright";
import { getInputMapping, IInputMapping } from "./formMapping/inputMapping";
import logger from "../../utils/logger";
import { fillTextInput } from "../inputTypeHandlers/text";
import { selectOption } from "../inputTypeHandlers/select";
import { checkboxInput } from "../inputTypeHandlers/checkbox";
import { fillTableLikeInputs } from "../inputTypeHandlers/fillTableLikeInputs";

export async function fillForm({ page }: { page: Page }) {
  try {
    const inputMapping = (await getInputMapping()) as IInputMapping;
    const inputs = inputMapping.inputs;
    const tableLikeInput = [];

    for (let input of inputs) {
      const inputType = input.inputType;
      const { xpath, value, label, custom } = input;

      if (custom && custom === "table") {
        tableLikeInput.push(input);
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
    // handle special cases
    for (let i = 0; i < tableLikeInput.length; i++) {
      const { xpath, value, label } = tableLikeInput[i];
      logger.info(`${xpath}, ${value}`);
      await fillTableLikeInputs({
        value: value,
        label,
        xpath,
        page,
        index: i,
      });
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
