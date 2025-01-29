import logger from "@/utils/logger";
import { getStepFormSections } from "./getStepFormSections";
import {
  getEntryPointInputMapping,
  getGeneralInformationInputMapping,
  get4684InputMapping,
  getLessCommonScenariosInputMapping,
  getSaleOfHomeInputMapping,
  getSaleOfAssetInputMapping,
  getScheduleDInputMapping,
} from "./getStepFormsInputMapping";

function mapAndFilterStepForms({
  stepForms,
  inputMappings,
}: {
  stepForms: Array<any>;
  inputMappings: Array<{ formId: string; inputs: any[] }>;
}) {
  try {
    logger.info("Starting to map input mappings to step forms.");

    // Map input mappings to stepForms based on formId and identifier
    const updatedStepForms = stepForms.map((form) => {
      const matchingInputMapping = inputMappings.find(
        (inputMapping) => inputMapping.formId === form.identifier
      );

      if (matchingInputMapping) {
        logger.info(
          `Mapping inputs to step form with identifier: ${form.identifier}`
        );
        return {
          ...form,
          inputs: matchingInputMapping.inputs,
        };
      }

      logger.warn(
        `No matching input mapping found for step form identifier: ${form.identifier}`
      );
      return { ...form, inputs: [] };
    });

    logger.info("Finished mapping inputs to step forms.");

    // Filter forms where inputs field is not empty
    const filteredStepForms = updatedStepForms.filter(
      (form) => form.inputs && form.inputs.length > 0
    );

    // Sort the filtered forms by the 'step' attribute in ascending order
    const sortedStepForms = filteredStepForms.sort((a, b) => a.step - b.step);

    logger.info(
      `Filtered step forms to include only those with non-empty inputs. Count: ${sortedStepForms.length}`
    );

    return sortedStepForms;
  } catch (error) {
    logger.error(
      `Error occurred while mapping and filtering step forms: ${error}`
    );
    throw error;
  }
}

export async function getMergeStepFormInputAndSectionData(data: any) {
  try {
    const validFormsData = [];
    for (const dataField of data) {
      const inputMappings = await Promise.all([
        getEntryPointInputMapping(dataField),
        getGeneralInformationInputMapping(dataField),
        get4684InputMapping(dataField),
        getLessCommonScenariosInputMapping(dataField),
        getSaleOfHomeInputMapping(dataField),
        getSaleOfAssetInputMapping(dataField),
        getScheduleDInputMapping(dataField),
      ]);

      const stepForms = getStepFormSections();
      const filteredStepForms = mapAndFilterStepForms({
        stepForms,
        inputMappings,
      });

      validFormsData.push(filteredStepForms);
    }
    return validFormsData;
  } catch (error) {
    logger.error(`Error getMergeStepFormInputAndSectionData: ${error}`);
    return [];
  }
}
