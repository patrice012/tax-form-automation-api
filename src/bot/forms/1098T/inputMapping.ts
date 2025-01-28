import logger from "@/utils/logger";
import { getInputFields } from "./inputFields";
import { IInputMapping } from "../declaration";
import { mergeInputFieldsWithClientData } from "@/bot/forms/utils/mergeInputFieldsWithClientData";
import { cleanUpInputMapping } from "@/bot/forms/utils/inputMapping";
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
    //   formName: "1098T",
    //   data: data[0]?.forms || [],
    // });
    // const inputMapping = mergeData([formData], inputFields);
    const clientData = Array.isArray(data) ? data : [data];
    const inputMapping = mergeInputFieldsWithClientData(
      clientData,
      inputFields
    );

    return cleanUpInputMapping(inputMapping);
  } catch (error) {
    logger.error(`Failed to get input mapping ${error}`);
    return {
      inputs: [],
    };
  }
}

// getInputMapping({})
//   .then((d) => console.log(JSON.stringify(d, null, 2)))
//   .catch(console.log);
