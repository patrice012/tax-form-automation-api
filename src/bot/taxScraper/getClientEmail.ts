import logger from "../../utils/logger";
import { getFormData } from "../w2/formMapping/getData";

export async function getClientEmail(): Promise<{ email: string }> {
  try {
    const formData = await getFormData();
    const email = formData[0]?.targetClient?.email;
    return { email: email ? email?.trim() : "" };
  } catch (error) {
    logger.error(`Fail getting client email`);
    return { email: "" };
  }
}
