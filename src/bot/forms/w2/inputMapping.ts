import logger from "@/utils/logger";
import { getInputFields } from "./inputFields";
import { IInputMapping } from "../declaration";
import { mergeInputFieldsWithClientData } from "../utils/mergeInputFieldsWithClientData";
import { cleanUpInputMapping } from "../utils/inputMapping";
// import { getFormData } from '../../../utils/getFormData';
// import { getData } from '../../../../dummyData/getData';

export async function getInputMapping({
  data,
}: {
  data: any;
}): Promise<IInputMapping> {
  try {
    // const data = await getData();
    const inputFields = getInputFields();

    // const formData = getFormData({
    //   formName: "W2",
    //   data: data[0]?.forms || [],
    // });
    const clientData = Array.isArray(data) ? data : [data];
    const inputMapping = mergeInputFieldsWithClientData(
      clientData,
      inputFields
    );
    // const inputMapping = mergeData([formData], inputFields);

    return cleanUpInputMapping(inputMapping);
  } catch (error) {
    logger.error(`Failed to get input mapping ${error}`);
    return {
      inputs: [],
    };
  }
}

// getInputMapping({ data: null })
//   .then((d) => console.log(JSON.stringify(d, null, 2)))
//   .catch(console.log);
