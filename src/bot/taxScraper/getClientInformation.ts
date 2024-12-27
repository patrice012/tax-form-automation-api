import logger from "../../utils/logger";
import { getFormData } from "../w2/formMapping/getData";

export async function getClientInformation(): Promise<{
  email: string;
  taxYear: string;
}> {
  try {
    const formData = await getFormData();
    const email = formData[0]?.targetClient?.email;
    const taxYear = formData[0]?.W2?.taxYear;
    return { email: email ? email?.trim() : "", taxYear: taxYear || "" };
  } catch (error) {
    logger.error(`Fail getting client email`);
    return { email: "", taxYear: "" };
  }
}
