import logger from "../../utils/logger";
import { IPasswordInput, IAuthResponse } from "./declaration";

export const fillPassword = async ({
  page,
  password,
}: IPasswordInput): Promise<IAuthResponse> => {
  try {
    const passwordInputSelector = 'input[name="Password"]';
    const passwordIdSelector = '[id="iux-password-confirmation-password"]';
    const submitButtonSelector = 'button[type="submit"]';

    // Wait for password input field
    try {
      await page
        .locator(passwordInputSelector)
        .waitForElementState({ state: "visible" });
    } catch (error) {
      logger.warn("Error waiting for the Password input field");
    }

    // Fill the password and submit
    await page.locator(passwordIdSelector).fill(password);
    await page.waitForTimeout(500);
    await page.locator(submitButtonSelector).click();

    return { page, success: true };
  } catch (error) {
    logger.error("Error filling password:", error);
    throw error;
  }
};
