import logger from "../../utils/logger";
import { IOTPCheck, IAuthResponse } from "./declaration";

export const checkForOTP = async ({
  page,
}: IOTPCheck): Promise<IAuthResponse> => {
  try {
    const otpOptionSelector = '[data-testid="challengePickerOption_SMS_OTP"]';

    // Wait for OTP field
    try {
      logger.info("Waiting for OTP option to appear...");
      await page
        .locator(otpOptionSelector)
        .waitFor({ state: "visible", timeout: 5000 });
    } catch (error) {
      logger.warn("Error waiting for OTP option:", error);
      return { page, success: false };
    }

    // Click the OTP option
    const otpOption = page.locator(otpOptionSelector);
    if (otpOption) {
      logger.info("OTP option found. Clicking...");
      await otpOption.click();
      return { page, success: true };
    }

    logger.warn("OTP option not found");
    return { page, success: false };
  } catch (error) {
    logger.error("Error checking for OTP:", error);
    return { page, success: false };
  }
};
