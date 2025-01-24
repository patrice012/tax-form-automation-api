import logger from "../../utils/logger";
import { getData } from "../dummyData/getData";
import { IMergeData } from "../forms/declaration";

export async function getClientInformation(): Promise<{
  email: string;
  taxYear: string;
  formData: IMergeData[];
}> {
  try {
    const data = await getData();
    const email = data[0]?.targetClient?.email;
    const taxYear = data[0]?.targetClient?.taxYear;
    const formData = data[0]?.forms;
    return {
      email: email ? email?.trim() : "",
      taxYear: taxYear || "",
      formData: formData || [],
    };
  } catch (error) {
    logger.error(`Fail getting client email`);
    return { email: "", taxYear: "", formData: [] };
  }
}
