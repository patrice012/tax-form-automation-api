import { IMergeData } from "./getFormData";

export function getFormsName({ formData }: { formData: IMergeData[] }) {
  const names = formData.map((form) => form.form_name);
  return names;
}
