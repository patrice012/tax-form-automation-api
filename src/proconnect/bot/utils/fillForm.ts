import { Page } from 'playwright';
import logger from '@/utils/logger';
import { fillTextInput } from '../inputTypeHandlers/text';
import { selectOption } from '../inputTypeHandlers/select';
import { checkboxInput } from '../inputTypeHandlers/checkbox';
import { fillPopupLikeInputs } from '../inputTypeHandlers/insidePopup';
import { closeSideBarPopup } from './closeSideBarPopup';
import { withTimeout } from './timeout';
import { textForTable } from '../inputTypeHandlers/textForTable';
import { Attribute, FormData } from '@/utils/types';
import { navigateToFormOrNewForm } from '../addNewForm/createNewForm';
import { navigateToSubPage } from '../addNewForm/navigateToSubPage';
import { selectRadioButton } from '../inputTypeHandlers/radio';

type NavigateToCorrectFormFn = (params: {
  page: Page;
  uniqueFormId?: string;
  uniqueFormIdHTMLId?: string;
  formData?: any;
}) => Promise<void>;
type FillCustomTableFn = (params: {
  page: Page;
  tableLikeInputs: Attribute[];
}) => Promise<void>;

export async function fillForm({
  page,
  formData,
  formName,
  useTableInput,
  createNewFormSelector,
  navigateToCorrectForm,
  fillCustomTable,
  uniqueFormId,
  uniqueFormIdHTMLId,
  tabHTMLId,
  failedFields,
  updateExportProgress,
}: {
  page: Page;
  formData: unknown;
  formName: string;
  useTableInput: boolean;
  createNewFormSelector?: string;
  navigateToCorrectForm?: NavigateToCorrectFormFn;
  fillCustomTable?: FillCustomTableFn;
  uniqueFormId?: string;
  uniqueFormIdHTMLId?: string;
  tabHTMLId?: string;
  failedFields: Record<string, string[]>;
  updateExportProgress: (key: string, completed: number, total: number) => void;
}) {
  try {
    await closeSideBarPopup({ page });
    logger.info('Navigating to form');

    // If a particular form type needs a special navigation step, call it
    if (navigateToCorrectForm) {
      await navigateToCorrectForm({
        page: page,
        uniqueFormId: uniqueFormId,
        uniqueFormIdHTMLId: uniqueFormIdHTMLId,
        formData: formData,
      });
      await page.waitForTimeout(1000);
    }

    // If a particular form type needs a special "create new form" step, call it
    if (createNewFormSelector) {
      await navigateToFormOrNewForm({
        page,
        selector: createNewFormSelector,
        uniqueFormIdValue: formData[uniqueFormId]?.value,
        uniqueFormIdHTMLId,
        tabHTMLId,
      });
      await page.waitForTimeout(1000);
    }

    logger.info(`Start filling process`);

    const tableLikeInputs = [];
    const popupLikeInputs = [];
    let temp_page_href = undefined;

    let formNameFailedFields = [];
    let index = 0;

    // Calculate total fields including special inputs for accurate progress tracking
    const totalFieldCount = Object.keys(formData).length;

    // Initialize progress to 0 at the start
    updateExportProgress(formName, 0, totalFieldCount);

    // Process each input in formData with a 30s timeout per input
    for (const [attrName, attrData] of Object.entries(formData)) {
      console.log('Filling attribute:', attrName);
      await withTimeout(
        (async () => {
          const { custom, label, type, page_href } = attrData;

          // Some values are on separate sub pages, and we need to navigate to them first
          if (page_href && page_href !== temp_page_href) {
            temp_page_href = page_href;
            await navigateToSubPage({
              page,
              stepTitle: page_href,
            });
            await page.waitForTimeout(200);
          }

          if (custom && custom === 'table') {
            logger.info('Skipping for table input');
            tableLikeInputs.push(attrData);
            return;
          }

          if (custom && custom === 'popup') {
            popupLikeInputs.push(attrData);
            return;
          }

          switch (type) {
            case 'bool':
              await checkboxInput({ page, input: attrData });
              break;
            case 'number':
              if (useTableInput) {
                await textForTable({ page, input: attrData });
              } else {
                await fillTextInput({ page, input: attrData });
              }
              break;
            case 'string':
              if (useTableInput) {
                await textForTable({ page, input: attrData });
              } else {
                await fillTextInput({ page, input: attrData });
              }
              break;
            case 'select':
              await selectOption({ page, input: attrData });
              break;
            case 'radio':
              await selectRadioButton({ page, input: attrData });
              break;
            default:
              formNameFailedFields.push(label);
              throw new Error(`Unhandled type: ${type}`);
          }

          index++;
          updateExportProgress(formName, index, totalFieldCount);
        })(),
        30000,
        `Processing input ${attrData.label} timed out`,
      ).catch((error) => {
        formNameFailedFields.push(attrData.label);
        logger.error(`Error processing: ${attrData.label} ${error}`);
      });
    }

    // handle special cases -- inputs inside table
    if (tableLikeInputs.length > 0) {
      try {
        await fillCustomTable({ page, tableLikeInputs });
        // Update progress to include all table fields
        index += tableLikeInputs.length;
        updateExportProgress(formName, index, totalFieldCount);
      } catch (error) {
        logger.error(`Error processing table inputs: ${error}`);
        // If the table fails, count all its fields as done but failed
        for (let i = 0; i < tableLikeInputs.length; i++) {
          formNameFailedFields.push(tableLikeInputs[i].label);
        }
      }
    }

    // handle special cases --  inputs inside popup
    for (let i = 0; i < popupLikeInputs.length; i++) {
      await withTimeout(
        (async () => {
          const input = popupLikeInputs[i];
          const { value, label, page_href } = input;

          // Some values are on separate sub pages, and we need to navigate to them first
          if (page_href && page_href !== temp_page_href) {
            temp_page_href = page_href;
            await navigateToSubPage({
              page,
              stepTitle: page_href,
            });
          }

          await fillPopupLikeInputs({
            value: value,
            page,
            input,
          });

          // Update progress for each popup field
          index++;
          updateExportProgress(formName, index, totalFieldCount);
        })(),
        30000,
        `Processing popup input ${popupLikeInputs[i].label} timed out`,
      ).catch((error) => {
        formNameFailedFields.push(popupLikeInputs[i].label);
        logger.error(
          `Error processing: ${popupLikeInputs[i].label} --> ${error}`,
        );
      });
    }

    if (formNameFailedFields.length > 0) {
      failedFields[formName] = formNameFailedFields;
    }
    logger.info('Form filled');
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
