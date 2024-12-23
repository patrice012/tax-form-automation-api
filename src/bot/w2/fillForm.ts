import { Page } from "playwright";
import {
  getInputMapping,
  IInputMapping,
} from "./formMapping/inputMapping";
import logger from "../../utils/logger";
import { fillTextInput } from "../inputTypeHandlers/text";
import { selectOption } from "../inputTypeHandlers/select";

export async function fillForm({ page }: { page: Page }) {
  try {
    const inputMapping = (await getInputMapping()) as IInputMapping;
    const inputs = inputMapping.inputs;

    for (let input of inputs) {
      const inputType = input.inputType;
      const { xpath, value, label } = input;
      if (inputType === "number" || inputType === "text") {
        await fillTextInput({ value, label, xpath, page });
      } else if (inputType === "select") {
        await selectOption({ value, label, xpath, page });
      }
    }
    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
