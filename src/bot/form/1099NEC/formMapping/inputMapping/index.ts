import logger from "../../../../../utils/logger";
import { getFormData } from "../getData";
import { getInputFields } from "../w2input";
import { IInputMapping } from "./declaration";
import { mergeData } from "./mergeData";
import { cleanUpInputMapping } from "./utils";

export async function getInputMapping(): Promise<IInputMapping> {
  try {
    const formData = await getFormData();
    const inputFields = getInputFields();
    const IInputMapping = mergeData(formData, inputFields);
    return cleanUpInputMapping(IInputMapping);
  } catch (error) {
    logger.error(`Failed to get input mapping ${error}`);
    return {
      targetClient: {
        email: "",
      },
      inputs: [],
    };
  }
}

// getInputMapping()
//   .then((d) => console.log(JSON.stringify(d, null, 2)))
//   .catch(console.log);
