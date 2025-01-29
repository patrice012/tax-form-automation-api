import logger from "@/utils/logger";
import { IInputMapping } from "../declaration";
import { mergeInputFieldsWithClientData } from "./mergeInputFieldsWithClientData";
import { cleanUpInputMapping } from "./inputMapping";

export async function getInputMapping({
  data,
  formName,
  getInputFields,
}: {
  data: any;
  getInputFields: () => any;
  formName: string;
}): Promise<IInputMapping[]> {
  try {
    logger.info(`Getting form: ${formName} input mappings`);
    const inputFields = getInputFields();

    const inputMappings = [];
    for (const formData of data) {
      const clientData = Array.isArray(formData) ? formData : [formData];
      const inputMapping = mergeInputFieldsWithClientData(
        clientData,
        inputFields
      );
      inputMappings.push(cleanUpInputMapping(inputMapping));
    }

    logger.info(
      `Found ${inputMappings.length} input mappings for form: ${formName}`
    );
    return inputMappings;
  } catch (error) {
    logger.error(`Failed to get input mapping ${error}`);
    return [
      {
        inputs: [],
      },
    ];
  }
}
