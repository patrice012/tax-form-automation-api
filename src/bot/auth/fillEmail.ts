import logger from "../../utils/logger";
import { IEmailInput, IAuthResponse } from "./declaration";
import { solveCaptcha } from "./solveCaptcha";

export const fillEmail = async ({
  page,
  email,
}: IEmailInput): Promise<IAuthResponse> => {
  try {
    const emailInputSelector = 'input[name="Email"]';
    const emailIdSelector = '[id="iux-identifier-first-unknown-identifier"]';
    const submitButtonSelector = 'button[type="submit"]';

    // Wait for email input field
    try {
      await page.locator(emailInputSelector).waitFor();
    } catch (error) {
      logger.warn("Error waiting for the Email input field");
    }

    // Fill the email and submit
    await page.locator(emailIdSelector).fill(email);
    await page.waitForTimeout(500);
    await page.locator(submitButtonSelector).click();

    const captchaId = "[id='ius-recaptcha']";
    try {
      logger.info("Waiting for captcha");
      await page.locator(captchaId).waitFor(20000);
    } catch (error) {
      logger.error("Captcha not present");
    }

    try {
      logger.info("Start solving captcha");
      await solveCaptcha({ page });
    } catch (error) {
      logger.error(`Failed to solve captcha: ${error}`);
    }

    logger.info("Moving to next after captcha");

    return { page, success: true };
  } catch (error) {
    logger.error("Error filling email:", error);
    throw error;
  }
};
