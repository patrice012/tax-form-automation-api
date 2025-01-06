import logger from "../../utils/logger";
import { IEmailInput } from "./declaration";
import { solveCaptcha } from "./solveCaptcha";

export const fillEmail = async ({ page, email }: IEmailInput) => {
  try {
    const emailInputSelector = 'input[name="Email"]';
    const emailIdSelector = '[id="iux-identifier-first-unknown-identifier"]';
    const submitButtonSelector = 'button[type="submit"]';

    // Wait for email input field
    try {
      await page
        .locator(emailInputSelector)
        .waitForElementState({ state: "visible" });
    } catch (error) {
      logger.warn("Error waiting for the Email input field");
    }

    try {
      const isEmailFieldVisible = await page
        .locator(emailInputSelector)
        .isVisible();
      logger.info(`Email field visibility: ${isEmailFieldVisible}`);
      if (!isEmailFieldVisible) {
        await page.reload();
        logger.info("Reload page");
      }
    } catch (error) {
      logger.warn("Failed to reload a page");
    }

    // Fill the email and submit
    await page.locator(emailIdSelector).fill(email);
    await page.waitForTimeout(500);
    await page.locator(submitButtonSelector).click();

    // Solve captcha if found
    const captchaId = "[id='ius-recaptcha']";
    logger.info("Checking captcha visibility");
    const captchaLocator = page.locator(captchaId);
    try {
      const isCaptchaVisible = await captchaLocator.waitForElementState({
        state: "visible",
        timeout: 3000,
      });
      if (isCaptchaVisible) {
        logger.info("Captcha already visible");
      } else {
        logger.info("Captcha not visible");
        logger.info("Waiting for captcha: 20s");
        captchaLocator?.waitForElementState({
          timeout: 20000,
        });
      }
    } catch (error) {
      logger.error("Captcha not present");
    }

    if (captchaLocator) {
      try {
        logger.info("Start solving captcha");
        await solveCaptcha({ page });
      } catch (error) {
        logger.error(`Failed to solve captcha: ${error}`);
      }
    }

    logger.info("Moving to next after captcha");

    return { page, success: true };
  } catch (error) {
    logger.error("Error filling email:", error);
  }
};
