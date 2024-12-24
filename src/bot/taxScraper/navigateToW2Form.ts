import { Page } from "playwright";
import logger from "../../utils/logger";


export async function navigateToW2Form(page: Page): Promise<any> {
  try {
    await page.locator("[data-automation-id='SECTION_INPUT_RETURN']").click();
    logger.info("Clicked Input Return button");

    const linkText = "Wages, Salaries, Tips (W-2)";
    await page.locator("a", { hasText: linkText }).click();
    logger.info("Clicked W-2 form link");
  } catch (error) {
    logger.error("Failed to navigate to W-2 form:", error);
    return { page, success: false };
  }
}
