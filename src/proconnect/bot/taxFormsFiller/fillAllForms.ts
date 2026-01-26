import { Page } from 'playwright';
import logger from '@/utils/logger';
import { navigateToForm } from './navigateToForm';
import { displayFormsSection } from './displayFormsSection';
import { fillForm } from '../utils/fillForm';
import { Attribute, Form, FormData } from '@/utils/types';

// Custom navigate to correct form functions
import { navigateToFormDetails } from '../addNewForm/navigateToFormDetails';
import { navigateToCorrectForm1099MISCNEC } from '../addNewForm/navigateTo1099MISCNEC';

import { fillCommonTable } from '../utils/fillCommonTable';
import { navigateToCorrectForm1099SSA } from '../addNewForm/navigateTo1099SSA';
import { navigateTo1098 } from '../addNewForm/navigateTo1098';
import { navigateTo1098E } from '../addNewForm/navigateTo1098E';
import { navigateToSubPage } from '../addNewForm/navigateToSubPage';
import { fillK1PartnershipTable } from '../utils/fillK1PartnershipTable';
import { resetK1PartnershipPage } from '../resetPage/resetK1PartnershipPage';

type NavigateToCorrectFormFn = (params: { page: Page, uniqueFormId?: string, uniqueFormIdHTMLId?: string, formData?: any }) => Promise<void>;
type FillCustomTableFn = (params: { page: Page; tableLikeInputs: Attribute[]; }) => Promise<void>;
type ResetPageFn = (params: { page: Page }) => Promise<void>;

type FormConfig = {
  linkText: string;
  useTableInput: boolean;
  createNewFormSelector?: string;
  navigateToCorrectForm?: NavigateToCorrectFormFn;
  fillCustomTable?: FillCustomTableFn;
  uniqueFormId?: string;
  uniqueFormIdHTMLId?: string;
  tabHTMLId?: string;
  resetPage?: ResetPageFn;
};

const formToConfig: Record<string, FormConfig> = {
  'W2': { // Navigates by hitting plus DONE //tabs
    linkText: 'Wages, Salaries, Tips (W-2)',
    useTableInput: false,
    createNewFormSelector: '[data-testid="OSIScreen1-23-tabsbar-View-Add-Icon-icon-control"]',
    fillCustomTable: fillCommonTable,
    uniqueFormId: 'employer_fed_id_number',
    uniqueFormIdHTMLId: 'OSIEdit44-39-taxid',
    tabHTMLId: 'OSIScreen1-23-tabsbar-TabGroup-Tab-tooltip-label-'
  },
  'scheduleC-source': {
    linkText: 'Business Income (Sch C)',
    useTableInput: false,
    createNewFormSelector: '[data-testid="OSIScreen1-5-tabsbar-View-Add-Icon-icon-control"]',
    uniqueFormId: 'ein',
    uniqueFormIdHTMLId: 'OSIEdit6-34-taxid',
    tabHTMLId: 'OSIScreen1-5-tabsbar-TabGroup-Tab-tooltip-label-'
  },
  'scheduleE-source': {
    linkText: 'Rental and Royalty Income (Sch E)',
    useTableInput: false,
    createNewFormSelector: '[data-testid="OSIScreen1-5-tabsbar-View-Add-Icon-icon-control"]',
    tabHTMLId: 'OSIScreen1-5-tabsbar-TabGroup-Tab-tooltip-label-'
  },
  'scheduleF-source': {
    linkText: 'Farm Income (Sch F, 4835)',
    useTableInput: false,
    createNewFormSelector: '[data-testid="OSIScreen1-5-tabsbar-View-Add-Icon-icon-control"]',
    uniqueFormId: 'employer_id_number',
    uniqueFormIdHTMLId: 'OSIEdit109-20-taxid',
    tabHTMLId: 'OSIScreen1-5-tabsbar-TabGroup-Tab-tooltip-label-'
  },
  '1099NEC': { // Needs to navigate to sub-page correctly, then enter data normally like a W-2 DONE //tabs - need to click Form 1099-MISC/NEC
    linkText: 'SS Benefits, Alimony, Misc. Income',
    navigateToCorrectForm: navigateToCorrectForm1099MISCNEC,
    createNewFormSelector: '[data-testid="OSIScreen1-5-tabsbar-View-Add-Icon-icon-control"]',
    useTableInput: false,
    fillCustomTable: fillCommonTable,
    uniqueFormId: 'payers_tin',
    uniqueFormIdHTMLId: 'OSIEdit10-139-taxid',
    tabHTMLId: 'OSIScreen1-5-tabsbar-TabGroup-Tab-tooltip-label-'
  },
  '1099INT': { // Navigates by hitting details DONE //table
    linkText: 'Interest Income (1099-INT, 1099-OID)',
    useTableInput: false,
    navigateToCorrectForm: navigateToFormDetails,
    uniqueFormId: 'account_number',
    uniqueFormIdHTMLId: 'OSIEdit69-575'
  },
  '1099DIV': { // Navigates by hitting details DONE //table
    linkText: 'Dividend Income (1099-DIV)',
    useTableInput: false,
    navigateToCorrectForm: navigateToFormDetails,
    uniqueFormId: 'account_number',
    uniqueFormIdHTMLId: 'OSIEdit64-617'
  },
  '1099B': { // Navigates by hitting details (custom flow)
    linkText: 'Dispositions (Sch D, etc.)',
    useTableInput: false,
    navigateToCorrectForm: navigateToFormDetails,
  },
  '1099MISC': { // Navigates by using table input which works well DONE //tabs - need to click Form 1099-MISC/NEC
    linkText: 'SS Benefits, Alimony, Misc. Income',
    useTableInput: false,
    navigateToCorrectForm: navigateToCorrectForm1099MISCNEC,
    createNewFormSelector: '[data-testid="OSIScreen1-5-tabsbar-View-Add-Icon-icon-control"]',
    fillCustomTable: fillCommonTable,
    uniqueFormId: 'payers_tin',
    uniqueFormIdHTMLId: 'OSIEdit10-139-taxid',
    tabHTMLId: 'OSIScreen1-5-tabsbar-TabGroup-Tab-tooltip-label-'
  },
  '1098': { // Navigates by using table input which works well ALMOST DONE - need to possibly make that separate form input change
    linkText: 'Itemized Deductions (Sch A)',
    useTableInput: false,
    navigateToCorrectForm: navigateTo1098
  },
  '1098T': { // Navigates by hitting plus DONE
    linkText: 'Education Credits (1098-T, 8863)',
    useTableInput: false,
    createNewFormSelector: '[data-testid="OSIScreen1-5-tabsbar-View-Add-Icon-icon-control"]'
  },
  '1098E': { // Navigates by using table input which works well DONE
    linkText: 'Adjustments to Income',
    useTableInput: true,
    navigateToCorrectForm: navigateTo1098E
  },
  '1099R': { // Navigates by hitting details DONE //table
    linkText: 'Pensions, IRAs (1099-R)',
    useTableInput: false,
    navigateToCorrectForm: navigateToFormDetails,
    fillCustomTable: fillCommonTable,
    uniqueFormId: 'account_number',
    uniqueFormIdHTMLId: 'OSIEdit15-475'
  },
  '1099G': { // Navigates by hitting plus DONE //tabs
    linkText: 'Tax Refund, Unempl. Comp. (1099-G)',
    useTableInput: false,
    createNewFormSelector: '[data-testid="OSIScreen1-10-tabsbar-View-Add-Icon-icon-control"]',
    uniqueFormId: 'payers_tin',
    uniqueFormIdHTMLId: 'OSIEdit14-389-taxid',
    tabHTMLId: 'OSIScreen1-10-tabsbar-TabGroup-Tab-tooltip-label-'
  },
  '1099SSA': { // Navigates by using table input which works well DONE
    linkText: 'SS Benefits, Alimony, Misc. Income',
    useTableInput: false,
    navigateToCorrectForm: navigateToCorrectForm1099SSA,
  },
  'K1_1065-page1': {
    linkText: 'Passthrough K-1\'s',
    useTableInput: false,
    createNewFormSelector: '[data-testid="OSIScreen1-5-tabsbar-View-Add-Icon-icon-control"]',
    uniqueFormId: 'partnerships_EIN_0',
    uniqueFormIdHTMLId: 'OSIEdit234-24-taxid',
    tabHTMLId: 'OSIScreen1-5-tabsbar-TabGroup-Tab-tooltip-label-',
    fillCustomTable: fillK1PartnershipTable,
    resetPage: resetK1PartnershipPage
  },
};

export async function fillAllForms({
  page,
  forms,
  updateExportProgress
}: {
  page: Page;
  forms: Form[];
  updateExportProgress: (key: string, completed: number, total: number) => void
}) {
  try {
    let failedFields: Record<string, string[]> = {};

    for (const form of forms) {
      const config = formToConfig[form.form_name];
      if (!config) {
        logger.warn(`No configuration found for form: ${form.form_name}`);
        continue;
      }

      // Check if the form.form_data has any keys
      const hasData = Object.keys(form.form_data).length > 0;
      if (!hasData) {
        continue;
      }
      //initialize export progress with the form name and total number of forms
      updateExportProgress(form.form_name, 0, forms.length);
    }

    for (const form of forms) {
      logger.info(`Processing form: ${form.form_name}`);

      const config = formToConfig[form.form_name];
      if (!config) {
        logger.warn(`No configuration found for form: ${form.form_name}`);
        continue;
      }
      
      const { linkText, useTableInput, createNewFormSelector, navigateToCorrectForm, fillCustomTable, resetPage } = config;

      try {
        logger.info(`Navigating to form: ${form.form_name}`);
        await navigateToForm({ page, linkText });
        await page.waitForTimeout(1000);

        logger.info(`Filling form: ${form.form_name}`);

        await fillForm({
          page,
          formData: form.form_data,
          formName: form.form_name,
          useTableInput,
          createNewFormSelector,
          navigateToCorrectForm,
          fillCustomTable,
          uniqueFormId: config.uniqueFormId,
          uniqueFormIdHTMLId: config.uniqueFormIdHTMLId,
          tabHTMLId: config.tabHTMLId,
          failedFields: failedFields,
          updateExportProgress
        });

        logger.info(`Returning to forms page after processing form: ${form.form_name}`);

        if (resetPage) {
          await resetPage({ page });
        }

        await page.waitForTimeout(1000);
        await displayFormsSection({ page });
        await page.waitForTimeout(1000);
      } catch (error) {
        logger.error(`Error processing form: ${form.form_name} - ${error}`);
      }
    }
    logger.info('Completed processing all forms');

    return failedFields;
  } catch (error) {
    logger.error(`Error in fillAllForms: ${error}`);
  }
}
