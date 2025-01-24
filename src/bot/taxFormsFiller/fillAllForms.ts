import { Page } from "playwright";
import logger from "../../utils/logger";
import { navigateToForm } from "./navigateToForm";
import { getFormData } from "../forms/utils/getFormData";
import { getFormsName } from "../forms/utils/getFormsName";
import { displayFormsSection } from "./displayFormsSection";
import { fillW2Form } from "../forms/w2/fillForm";
import { fill1099NECForm } from "../forms/1099NEC/fillForm";
import { fill1099INTForm } from "../forms/1099INT/fillForm";
import { fill1099DIVForm } from "../forms/1099DIV/fillForm";
import { fill1099BShortTermForm } from "../forms/1099BShortTerm/fillForm";
import { fill1099BLongTermForm } from "../forms/1099BLongTerm/fillForm";
import { fill1099MISCForm } from "../forms/1099MISC/fillForm";
import { fill1098Form } from "../forms/1098/fillForm";
import { fill1098TForm } from "../forms/1098T/fillForm";
import { fill1098EForm } from "../forms/1098E/fillForm";
import { fill1099RForm } from "../forms/1099R/fillForm";
import { fill1099GForm } from "../forms/1099G/fillForm";
import { fill1099SSAForm } from "../forms/1099SSA/fillForm";
import { IMergeData } from "../forms/declaration";

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

  "1099INT": {
    linkText: "Interest Income (1099-INT, 1099-OID)",
    getFormData: (data) => getFormData({ formName: "1099INT", data }),
    fillForm: fill1099INTForm,
  },
  "1099DIV": {
    linkText: "Dividend Income (1099-DIV)",
    getFormData: (data) => getFormData({ formName: "1099DIV", data }),
    fillForm: fill1099DIVForm,
  },
  "1099Bshort_term": {
    linkText: "Dispositions (Sch D, etc.)",
    getFormData: (data) => getFormData({ formName: "1099Bshort_term", data }),
    fillForm: fill1099BShortTermForm,
  },
  "1099Blong_term": {
    linkText: "Dispositions (Sch D, etc.)",
    getFormData: (data) => getFormData({ formName: "1099Blong_term", data }),
    fillForm: fill1099BLongTermForm,
  },
  "1099MISC": {
    linkText: "SS Benefits, Alimony, Misc. Income",
    getFormData: (data) => getFormData({ formName: "1099MISC", data }),
    fillForm: fill1099MISCForm,
  },
  "1098": {
    linkText: "Itemized Deductions (Sch A)",
    getFormData: (data) => getFormData({ formName: "1098", data }),
    fillForm: fill1098Form,
  },
  "1098T": {
    linkText: "Education Credits (1098-T, 8863)",
    getFormData: (data) => getFormData({ formName: "1098T", data }),
    fillForm: fill1098TForm,
  },
  "1098E": {
    linkText: "Adjustments to Income",
    getFormData: (data) => getFormData({ formName: "1098E", data }),
    fillForm: fill1098EForm,
  },
  "1099R": {
    linkText: "Pensions, IRAs (1099-R)",
    getFormData: (data) => getFormData({ formName: "1099R", data }),
    fillForm: fill1099RForm,
  },
  "1099G": {
    linkText: "Tax Refund, Unempl. Comp. (1099-G)",
    getFormData: (data) => getFormData({ formName: "1099G", data }),
    fillForm: fill1099GForm,
  },
  "1099SSA": {
    linkText: "SS Benefits, Alimony, Misc. Income",
    getFormData: (data) => getFormData({ formName: "1099SSA", data }),
    fillForm: fill1099SSAForm,
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
        await page.waitForTimeout(10000);
        await displayFormsSection({ page });
      } catch (error) {
        logger.error(`Error processing form: ${name} - ${error}`);
      }
    }

    logger.info("Completed processing all forms");
  } catch (error) {
    logger.error(`Error in fillAllForms: ${error}`);
  }
}
