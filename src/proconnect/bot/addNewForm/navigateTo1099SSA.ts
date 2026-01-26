import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function navigateToCorrectForm1099SSA({ page }: { page: Page }) {
    try {
        console.log('Navigating to SSA Form...');

        // Ensure the page has fully loaded before proceeding
        await page.waitForLoadState('load');

        // Locate the button and wait up to 5 seconds for it to appear
        const backToSSBenefitsButton = page.locator('button:has-text("Back to SS Bene., Misc. Inc.")');
        if (await backToSSBenefitsButton.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false)) {
            console.log("BUTTON IS VISIBLE");
            await backToSSBenefitsButton.click();
            logger.info('Clicked Back to SS Bene., Misc. Inc. button');
        } else {
            console.log("BUTTON IS NOT VISIBLE");
        }

    } catch (error) {
        logger.error(`Failed to navigate to SSA page: ${error}`);
    }
}
