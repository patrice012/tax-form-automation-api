import logger from "../../../utils/logger";
import { IMergeData } from "../declaration";

export function getFormData({
  formName,
  data,
}: {
  formName: string;
  data: unknown[];
}): IMergeData {
  const formData = data.find(
    (item) =>
      (item as { form_name: string; form_data: unknown }).form_name === formName
  ) as IMergeData;

  logger.info(`Form ${formName} ==> ${JSON.stringify(formData, null, 2)}`);

  return formData;
}
