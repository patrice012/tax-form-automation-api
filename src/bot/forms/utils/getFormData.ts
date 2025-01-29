import logger from "@/utils/logger";
import { IMergeData } from "../declaration";

export function getFormData({
  formName,
  data,
}: {
  formName: string;
  data: any[];
}): IMergeData[] {
  const formData = data.filter(
    (item) =>
      (item as { form_name: string; form_data: unknown }).form_name === formName
  );

  logger.info(`Form ${formName} ==> ${formData.length} data`);

  return formData as IMergeData[];
}
