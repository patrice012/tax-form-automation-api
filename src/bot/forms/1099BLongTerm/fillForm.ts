import { Page } from "playwright";
import { getInputMapping } from "./formMapping/inputMapping";
import logger from "@/utils/logger";
import { fillTextInput } from "../../inputTypeHandlers/text";
import { selectOption } from "../../inputTypeHandlers/select";
import { checkboxInput } from "../../inputTypeHandlers/checkbox";
import { fillPopupLikeInputs } from "../../inputTypeHandlers/insidePopup";
import { fillEntryForm } from "./fillEntryForm";
import { closeSideBarPopup } from "../utils/closeSideBarPopup";
import { mapToArray } from "../utils/mapToArray";
import { navigateToEntryPage } from "../utils/navigateToEntryPage";

export async function fill1099BLongTermForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    await closeSideBarPopup({ page });
    const allInputMappings = await getInputMapping({ data: formData });

    for (const sectionInputMapping of allInputMappings) {
      for (const inputMapping of sectionInputMapping) {
        const {
          inputs,
          formType,
          title,
          initializeStep,
          cleanupStep,
          identifier,
        } = inputMapping;
        logger.info(
          `Processing form: ${formType} -- input section: ${title} -- id: ${identifier}`
        );
        if (identifier === "quick_entry") {
          await fillEntryForm({ page, inputMapping });
          continue;
        }
        if (initializeStep) {
          // Run init script
          try {
            await initializeStep({ page });
          } catch (error) {
            logger.error(`${error}`);
          }
        }
        const popupLikeInputs = [];
        for (const input of inputs) {
          const inputType = input.inputType;
          const { label, custom } = input;
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
        // Run clean up script
        if (cleanupStep) {
          try {
            await cleanupStep({ page });
          } catch (error) {
            logger.error(`${error}`);
          }
        }
      }

      if (allInputMappings.length > 1) {
        logger.info("More that two forms, navigate to entry page");
        // Check visibility of the current forms
        const correctFormText = "Carryovers/Misc Info";
        const alternateFormText = "Back to Quick entry";
        await navigateToEntryPage({
          page,
          correctFormText,
          alternateFormText,
        });
      }
    }

    logger.info("Form filled");
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
