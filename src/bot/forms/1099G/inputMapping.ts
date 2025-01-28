import logger from "@/utils/logger";
import { getInputFields } from "./inputFields";
import { IInputMapping } from "./declaration";
import { mergeSpecialFields } from "./mergeSpecialFields";
import { mergeInputFieldsWithClientData } from "@/bot/forms/utils/mergeInputFieldsWithClientData";
import { cleanUpInputMapping } from "@/bot/forms/utils/inputMapping";
// import { getFormData } from "../../../utils/getFormData";
// import { getData } from "../../../../dummyData/getData";

export async function getInputMapping({
  data,
}: {
  data: any;
}): Promise<IInputMapping> {
  try {
    // const data = await getData();
    const inputFields = getInputFields();

    // const formData = getFormData({
    //   formName: "1099G",
    //   data: data[0]?.forms || [],
    // });
    // const _inputMapping = mergeData([formData], inputFields);
    const clientData = Array.isArray(data) ? data : [data];
    const _inputMapping = mergeInputFieldsWithClientData(
      clientData,
      inputFields
    );
    const inputMapping = mergeSpecialFields(_inputMapping);

    return cleanUpInputMapping(inputMapping);
  } catch (error) {
    logger.error(`Failed to get input mapping ${error}`);
    return {
      inputs: [],
    };
  }
}

// getInputMapping({ data: {} })
//   .then((d) => console.log(JSON.stringify(d, null, 2)))
//   .catch(console.log);
