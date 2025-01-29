import logger from "@/utils/logger";
import { getMergeStepFormInputAndSectionData } from "./mergeStepFormInputAndSectionData";
// import { getFormData } from '../../../utils/getFormData';
// import { getData } from '../../../../dummyData/getData';

export async function getInputMapping({ data }: { data?: any }) {
  try {
    // const data = await getData();
    // const formData = getFormData({
    //   formName: "1099Blong_term",
    //   data: data[0]?.forms || [],
    // });
    const mergeData = await getMergeStepFormInputAndSectionData(data);
    return mergeData;
  } catch (error) {
    logger.error(`Failed to get input mapping ${error}`);
    return [];
  }
}

// getInputMapping({})
//   .then((d) => console.log(JSON.stringify(d, null, 2)))
//   .catch(console.log);
