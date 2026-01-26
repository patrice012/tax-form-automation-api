import logger from '@/utils/logger';

import { navigateToClientList } from './navigateToClientList';
import { navigateToClientProfile } from './navigateToClientProfile';
import { findClientNameByEmail } from './findClientNameByEmail';
import { handleExistingTaxReturn } from './handleExistingTaxReturn';
import { handleNewTaxReturn } from './handleNewTaxReturn';

import { TaxFillerOptions } from '@/utils/types';
import { getClientInformation } from './getClientInformation';
import { fillAllForms } from './fillAllForms';
import { navigateToFormsSection } from './navigateToFormsSection';
import { ExportPreparationDto } from '@/proconnect/dto/proconnect.dto';

export async function startTaxFormsFiller(
  proconnectPreparation: ExportPreparationDto,
  accessToken: string,
  { page }: TaxFillerOptions,
  updateExportProgress: (key: string, completed: number, total: number) => void,
) {
  try {
    // If autoNavigateToReturn is false, assume the user navigated manually to the tax return.
    if (proconnectPreparation.autoNavigateToReturn === false) {
      logger.info('Auto navigate disabled. User has manually navigated to the tax return.');

      // Retrieve formData from mock data
      const { formData } = await getClientInformation(accessToken);

      await navigateToFormsSection({ page });
      logger.info('Starting form filling process.');
      await fillAllForms({ page, forms: formData, updateExportProgress });
      await page.waitForTimeout(3000);
      return { page, success: true };
    }

    // Auto-navigate enabled – perform full navigation.
    logger.info('Starting tax scraping process');

    const navResult = await navigateToClientList(page);
    if (!navResult.success) {
      return { success: false, message: 'Failed to navigate to client list' };
    }

    const { email, nameString, taxYear, formData } = await getClientInformation(accessToken);
    console.log(email, nameString, taxYear);

    if (!email) {
      logger.warn(`No client email provided`);
      return {
        page,
        success: false,
        message: 'No client email provided, please ensure the client in trueprep has an email',
      };
    }

    const nameElement = await findClientNameByEmail({
      page,
      nameToFind: nameString,
      emailToFind: email.trim(),
    });

    if (!nameElement) {
      logger.warn(`No client profile found for email: ${email}`);
      return {
        page,
        success: false,
        message:
          'No client profile found, please ensure the client email matches the email in trueprep',
      };
    }

    const profileResult = await navigateToClientProfile(page, nameElement);
    if (!profileResult.success) {
      return { page, success: false, message: 'Failed to navigate to client profile' };
    }

    // Find the tax return row matching the provided tax year.
    let matchingRowIndex: number | null = null;
    try {
      const rows = page.locator("[data-testid='protax-datatable-row']");
      const rowCount = await rows.count();
      logger.info(`Found ${rowCount} rows in the table`);
      for (let i = 0; i < rowCount; i++) {
        const row = rows.nth(i);
        const rowTaxYear = await row.locator('.return-year').textContent();
        logger.info(`Row ${i} taxYear: ${rowTaxYear} vs provided taxYear: ${taxYear}`);
        if (rowTaxYear?.trim() === taxYear?.toString()?.trim()) {
          matchingRowIndex = i;
          break;
        }
      }
    } catch (error) {
      logger.warn(`Error iterating through table rows: ${error}`);
    }

    if (matchingRowIndex !== null) {
      logger.info(`Found matching tax return row at index ${matchingRowIndex} for email: ${email}`);
      await handleExistingTaxReturn({ page, rowIndex: matchingRowIndex });
    } else {
      logger.info(
        `No matching tax return found for tax year ${taxYear}. Handling as new tax return.`,
      );
      await handleNewTaxReturn({ page, taxYear });
    }

    console.log('formData', formData);

    // Navigate to forms section and start filling forms.
    await navigateToFormsSection({ page });
    logger.info('Starting form filling process.');
    const response = await fillAllForms({ page, forms: formData, updateExportProgress });
    await page.waitForTimeout(3000);

    return {
      page,
      success: true,
      message: 'Tax forms filled successfully',
      failedFields: response,
    };
  } catch (error) {
    logger.error('Tax scraper encountered an error:', error);
    return {
      page,
      success: false,
      message: `Tax scraper encountered an error: ${error}`,
      failedFields: {},
    };
  } finally {
    try {
      if (!page.isClosed()) {
        await page.close();
        logger.info('Page closed in finally block');
      }
    } catch (closeErr) {
      logger.warn('Failed to close page in finally block:', closeErr);
    }
  }
}

export default startTaxFormsFiller;
