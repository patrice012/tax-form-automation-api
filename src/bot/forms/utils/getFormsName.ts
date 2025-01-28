import logger from '@/utils/logger';
import { IMergeData } from '../declaration';

export function getFormsName({ formData }: { formData: IMergeData[] }) {
  const names = formData.map((form) => form.form_name);
  console.log("data hello", formData)
  console.log("names hello", names)
  logger.info(`Form names ==> ${names}`);
  return names;
}
