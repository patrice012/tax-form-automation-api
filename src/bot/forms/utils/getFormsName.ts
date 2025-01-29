import logger from "@/utils/logger";
import { IMergeData } from "../declaration";

export function getFormsName({ formData }: { formData: IMergeData[] }) {
  const names = [...new Set(formData.map((form) => form.form_name))];

  console.log("data hello", formData);
  console.log("unique names hello", names);
  logger.info(`Unique Form names ==> ${names}`);

  return names;
}
