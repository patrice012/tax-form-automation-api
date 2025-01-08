import logger from "../../utils/logger";
import { IOTPInput, IAuthResponse } from "./declaration";

export const handleOTPInput = async ({
  page,
  factorCode,
}: IOTPInput): Promise<IAuthResponse> => {
  try {
    const otpInputSelector = '[id="ius-mfa-confirm-code"]';
    const submitButtonSelector = 'button[type="submit"]';

    // Wait for OTP input field
    try {
      await page.locator(otpInputSelector).waitFor({
        state: "visible",
        timeout: 10000,
      });
    } catch (error) {
      logger.warn("Error waiting for OTP input field:", error);
    }

    // Fill OTP and submit
    await page.locator(otpInputSelector).fill(factorCode);
    await page.waitForTimeout(500);
    await page.locator(submitButtonSelector).click();

    return { page, success: true };
  } catch (error) {
    logger.error("Error handling OTP input:", error);
    throw error;
  }
};
