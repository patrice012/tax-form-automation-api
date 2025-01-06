import { Page } from "playwright";
import logger from "../../utils/logger";

export async function navigateToForm({
  page,
  linkText,
}: {
  page: Page;
  linkText: string;
}): Promise<any> {
  try {
    await page.locator("[data-automation-id='SECTION_INPUT_RETURN']").click();
    logger.info("Clicked Input Return button");

    await page.locator("a", { hasText: linkText }).click();
    logger.info(`Clicked ${linkText} form link`);
  } catch (error) {
    logger.error(`Failed to navigate to ${linkText} form:`, error);
    return { page, success: false };
  }
}
