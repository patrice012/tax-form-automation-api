import { Page } from 'playwright';
import logger from '@/utils/logger';
import { fillTextInput } from '../../inputTypeHandlers/text';
import { selectOption } from '../../inputTypeHandlers/select';
import { checkboxInput } from '../../inputTypeHandlers/checkbox';
import { displayDetailForm } from './formActions/displayDetailForm';
import { getLatestEmptyRow } from './formActions/getLatestEmptyRow';

export async function fillEntryForm({
  page,
  inputMapping,
}: {
  page: Page;
  inputMapping: any;
}) {
  try {
    const { inputs, formType, title, initializeStep, cleanupStep } =
      inputMapping;

    logger.info(`Processing form: ${formType} -- input section: ${title}`);

    // Run initialization script
    if (initializeStep) {
      try {
        logger.info('Running initialization step...');
        await initializeStep({ page });
        logger.info('Initialization step completed.');
      } catch (error) {
        logger.error(`Initialization step failed: ${error}`);
      }
    }

    // Create a new row
    const newRow = await getLatestEmptyRow({ page });
    logger.info(`New row created: ${JSON.stringify(newRow)}`);

    if (!newRow) {
      logger.error('Failed to create a new row. Exiting form processing.');
      return;
    }

    // Initialize form processor array
    const formProcessor: any[] = [];

    // Process each input
    for (const input of inputs) {
      const { label, inputType, ref } = input;
      logger.info(
        `Processing input: Label="${label}", Type="${inputType}", Ref="${ref}"`,
      );

      let fieldIndex = 0;
      let formFiller;

      // Map specific references to field indices
      switch (ref) {
        case 'account_number':
          fieldIndex = 0;
          break;
        case 'description_of_property':
          fieldIndex = 1;
          break;
        case 'basis_is_reported_to_irs':
          fieldIndex = 7;
          break;
        default:
          logger.warn(`Unrecognized ref "${ref}". Default fieldIndex=0`);
          break;
      }

      // Determine the appropriate form filler function based on input type
      switch (inputType) {
        case 'checkbox':
          formFiller = checkboxInput;
          break;
        case 'number':
        case 'text':
          formFiller = fillTextInput;
          break;
        case 'select':
          formFiller = selectOption;
          break;
        default:
          logger.error(
            `Unsupported input type "${inputType}" for input: ${JSON.stringify(
              input,
            )}`,
          );
          formFiller = null;
      }

      // Skip if no valid formFiller is found
      if (!formFiller) {
        logger.warn(
          `No formFiller function available for input: ${JSON.stringify(
            input,
          )}. Skipping.`,
        );
        continue;
      }

      const formData = {
        input,
        ...newRow,
        fieldIndex,
        formFiller,
      };

      formProcessor.push(formData);
    }

    // Fill each field using the assigned form filler
    for (const formField of formProcessor) {
      const { input, formFiller, fieldIndex, startIndex } = formField;
      const validIndex = Number(startIndex) + Number(fieldIndex);
      try {
        logger.info(
          `Filling input: Label="${input.label}", Type="${input.inputType}", Index="${validIndex}"`,
        );

        await formFiller({
          page,
          input: {
            ...input,
            id: null,
            dataTestId: null,
            xpath: null,
            inputIndex: validIndex,
          },
          mainParentSelector: '.main-content table',
        });

        logger.info(
          `Successfully filled input: Label="${input.label}", Type="${input.inputType}"`,
        );
      } catch (error) {
        logger.error(
          `Failed to fill input: Label="${input.label}", Type="${input.inputType}", Error="${error}"`,
        );
      }
    }

    // Run cleanup script
    if (cleanupStep) {
      try {
        logger.info('Running cleanup step...');
        await cleanupStep({ page });
        logger.info('Cleanup step completed.');
      } catch (error) {
        logger.error(`Cleanup step failed: ${error}`);
      }

      try {
        await displayDetailForm({
          page,
          btnIndex: Number(newRow.rowIndex) - 1,
        });
      } catch (error) {
        logger.info(`Fail to display detail form ${error}`);
      }
    }

    logger.info('Form filled successfully.');
  } catch (error) {
    logger.error(`Failed to fill form: ${error}`);
  }
}
