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
    // Attempt to click the form link
    try {
      const locator = page.locator("a", { hasText: linkText });
      try {
        await locator.waitFor({ state: "visible", timeout: 15000 });
      } catch (error) {
        logger.info(`Error waiting for element: ${error}`);
      }

      await locator.click();
      logger.info(`Clicked ${linkText} form link`);
    } catch (linkClickError) {
      // Fallback: Use evaluate to click the form link
      logger.warn(
        `Standard click failed on form link. Attempting fallback: ${linkClickError}`
      );

      await page.evaluate((formLinkText) => {
        const link = Array.from(document.querySelectorAll("a")).find((anchor) =>
          anchor.textContent?.includes(formLinkText)
        );
        if (link) {
          link.click();
        } else {
          throw new Error(`Form link with text "${formLinkText}" not found`);
        }
      }, linkText);

      logger.info(`Clicked ${linkText} form link using evaluate`);
    }

    return { page, success: true };
  } catch (error) {
    logger.error(`Failed to navigate to ${linkText} form: ${error}`);
    return { page, success: false };
  }
}
