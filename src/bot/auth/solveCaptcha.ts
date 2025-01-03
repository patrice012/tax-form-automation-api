import { Page } from "playwright";
import logger from "../../utils/logger";

export async function solveCaptcha({ page }: { page: Page }) {
  try {
    // Solve the CAPTCHA
    try {
      const { captchas, solved, error } = await page.solveRecaptchas();

      const isSolved = solved?.at(0)?.isSolved;

      if (isSolved) {
        logger.info("Captcha is solved");
        logger.info("Click continue btn");
        await page.locator(`button[type="submit"]`).click();
      } else {
        logger.info("Captcha not solved");
      }

      return { page, success: isSolved };
    } catch (error) {
      logger.error(`error solving captcha: ${error}`);
      return { page, success: false };
    }
  } catch (error) {
    logger.error(`Error solving captcha: ${error}`);
    return { page, success: false };
  }
}
