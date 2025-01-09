import { Page } from "playwright";
import { getInputMapping } from "./formMapping/inputMapping";
import logger from "../../../utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "./customInputTypeHandlers/fillPopupLikeInputs";

export async function fill1099BShortTermForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    const sectionInputMapping = await getInputMapping({ data: formData });

    for (let inputMapping of sectionInputMapping) {
      const {
        inputs,
        step,
        formType,
        title,
        identifier,
        initializeStep,
        cleanupStep,
      } = inputMapping;
      logger.info(
        `Processing form: ${formType} -- input section: ${title} with id:${identifier} -- step: ${step}`
      );

      // Run init script
      if (initializeStep) {
        try {
          await page.waitForTimeout(1000);
          initializeStep({ page });
          await page.waitForTimeout(1000);
        } catch (error) {
          logger.error(``);
        }
      }

      const popupLikeInputs = [];

      for (let input of inputs) {
        const inputType = input.inputType;
        const { xpath, value, label, custom } = input;

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

      // handle special cases --  inputs inside popup
      for (let i = 0; i < popupLikeInputs.length; i++) {
        const { xpath, value, label } = popupLikeInputs[i];
        try {
          // parse value => [[label, val]]]
          const newValue = transformValue(value);
          await fillPopupLikeInputs({
            value: newValue,
            label,
            xpath,
            page,
          });
        } catch (error) {
          logger.error(`Error processing: ${label}`);
        }
      }

      // Run clean up script
      if (cleanupStep) {
        try {
          await page.waitForTimeout(1000);
          cleanupStep({ page });
          await page.waitForTimeout(1000);
        } catch (error) {
          logger.error(``);
        }
      }
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}

function transformValue(value: unknown[]) {
  return value
    .filter((item) => item)
    .map((item) => {
      // If the item is not an array, transform it into ["", item]
      return Array.isArray(item) ? item : ["", item];
    });
}
