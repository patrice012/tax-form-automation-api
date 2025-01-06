import { Page } from "playwright";
import logger from "../../utils/logger";
import { IMergeData } from "../forms/utils/getFormData";
import { navigateToForm } from "./navigateToForm";
import { getFormData } from "../forms/utils/getFormData";
import { getFormsName } from "../forms/utils/getFormsName";
import { fill1099NECForm } from "../forms/1099NEC/fillForm";
import { fillW2Form } from "../forms/w2/fillForm";
import { ViewAllInputs } from "./viewAllInputs";

type FormProcessor = {
  linkText: string;
  getFormData: (data: IMergeData[]) => any;
  fillForm: (params: { page: Page; formData: any }) => Promise<void>;
};

const formProcessors: Record<string, FormProcessor> = {
  W2: {
    linkText: "Wages, Salaries, Tips (W-2)",
    getFormData: (data) => getFormData({ formName: "W2", data }),
    fillForm: fillW2Form,
  },
  "1099NEC": {
    linkText: "SS Benefits, Alimony, Misc. Income",
    getFormData: (data) => getFormData({ formName: "1099NEC", data }),
    fillForm: fill1099NECForm,
  },
};

export async function fillAllForms({
  page,
  formData,
}: {
  page: Page;
  formData: IMergeData[];
}) {
  try {
    logger.info("Getting form names");
    const formNames = getFormsName({ formData });
    logger.info(`Found form names: ${formNames}`);

    for (const name of formNames) {
      logger.info(`Processing form: ${name}`);

      const processor = formProcessors[name];
      if (!processor) {
        logger.warn(`No processor found for form: ${name}. Skipping.`);
        continue;
      }

      try {
        logger.info(`Navigating to form: ${name}`);
        await navigateToForm({ page, linkText: processor.linkText });

        logger.info(`Retrieving data for form: ${name}`);
        const formSpecificData = processor.getFormData(formData);

        logger.info(`Filling form: ${name}`);
        await processor.fillForm({ page, formData: formSpecificData });

        logger.info(`Returning to forms page after processing form: ${name}`);
        await page.waitForTimeout(30000);
        // await ViewAllInputs({ page });
      } catch (error) {
        logger.error(`Error processing form: ${name} - ${error}`);
      }
    }

    logger.info("Completed processing all forms");
    await page.waitForTimeout(30000);
  } catch (error) {
    logger.error(`Error in fillAllForms: ${error}`);
  }
}
