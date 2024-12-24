import logger from "../../utils/logger";
import { IEmailInput, IAuthResponse } from "./declaration";

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

    return { page, success: true };
  } catch (error) {
    logger.error("Error filling email:", error);
    throw error;
  }
};
