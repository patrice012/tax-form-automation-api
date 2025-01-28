import { Page } from 'playwright';
import { getInputMapping } from './formMapping/inputMapping';
import logger from '@/utils/logger';
import { selectOption } from '../../inputTypeHandlers/select';
import { checkboxInput } from '../../inputTypeHandlers/checkbox';
import { closeSideBarPopup } from '../utils/closeSideBarPopup';
import { textForTable } from '../../inputTypeHandlers/textForTable';

export async function fill1099NECForm({
  page,
  formData,
}: {
  page: Page;
  formData: unknown;
}) {
  try {
    await closeSideBarPopup({ page });

    const inputMapping = await getInputMapping({ data: formData });
    const inputs = inputMapping.inputs;

    for (const input of inputs) {
      const inputType = input.inputType;
      const { label } = input;

      try {
        switch (inputType) {
          case 'checkbox':
            await checkboxInput({ page, input });
            break;
          case 'number':
            await textForTable({ page, input });
            break;
          case 'text':
            await textForTable({ page, input });
            break;
          case 'select':
            await selectOption({ page, input });
            break;
        }
      } catch (error) {
        logger.error(`Error processing: ${label} ${error}`);
      }
    }

    logger.info('Form filled');
  } catch (error) {
    logger.error(`Failed to fill form ${error}`);
  }
}
