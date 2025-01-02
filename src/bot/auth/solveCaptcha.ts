import { Page } from "playwright";
import logger from "../../utils/logger";

export async function solveCaptcha({ page }: { page: Page }) {
  try {
    logger.info("Waiting for 1s");
    await page.waitForTimeout(1000);

    const { captchas, filtered, error } = await page.findRecaptchas();
    const isFound = (Array.isArray(captchas) && !captchas.length) || !captchas;
    if (!isFound) {
      logger.error(`Captcha not found`);
      return { page, success: true };
    }

    // Solve the CAPTCHA
    try {
      const { captchas, solved, error } = await page.solveRecaptchas();

      const isSolved = solved?.at(0)?.isSolved;

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
