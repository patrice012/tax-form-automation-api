import { Page } from 'playwright';
import logger from '@/utils/logger';

export async function navigateToCorrectForm1099MISCNEC({ page }: { page: Page }) {
    try {
        console.log('Navigating to Form 1099-MISC/NEC...');
        
        // Ensure the page has fully loaded before looking for the button
        await page.waitForLoadState('load'); // Wait for full page load
        
        // Locate the button and wait up to 5 seconds for it to appear
        const backToMISCPage = page.locator('button:has-text("Form 1099-MISC/NEC")');
        if (await backToMISCPage.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false)) {
            console.log("BUTTON IS VISIBLE");
            await backToMISCPage.click();
            logger.info('Clicked Form 1099-MISC/NEC button');
        } else {
            console.log("BUTTON IS NOT VISIBLE");
        }

    } catch (error) {
        logger.error(`Failed to navigate to MISC/NEC page: ${error}`);
    }
}
