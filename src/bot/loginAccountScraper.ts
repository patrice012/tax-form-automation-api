import { Page } from "playwright";
import { PlaywrightService } from "../services/playwrightService";
import logger from "../utils/logger";

// Types
export interface IAccount {
  email: string;
  password: string;
}

interface IEmailInput {
  page: Page;
  email: string;
}

interface IPasswordInput {
  page: Page;
  password: string;
}

interface IOTPCheck {
  page: Page;
}

interface IOTPInput {
  page: Page;
  factorCode: string;
}

export const fillEmail = async ({
  page,
  email,
}: IEmailInput): Promise<{ page: Page; success: boolean }> => {
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

export const fillPassword = async ({
  page,
  password,
}: IPasswordInput): Promise<{ page: Page; success: boolean }> => {
  try {
    const passwordInputSelector = 'input[name="Password"]';
    const passwordIdSelector = '[id="iux-password-confirmation-password"]';
    const submitButtonSelector = 'button[type="submit"]';

    // Wait for password input field
    try {
      await page.locator(passwordInputSelector).waitFor();
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

export const checkForOTP = async ({
  page,
}: IOTPCheck): Promise<{ page: Page; success: boolean }> => {
  try {
    const otpOptionSelector = '[data-testid="challengePickerOption_SMS_OTP"]';

    // Wait for OTP field
    try {
      logger.info("Waiting for OTP option to appear...");
      await page.locator(otpOptionSelector).waitFor({ timeout: 5000 });
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

export const handleOTPInput = async ({
  page,
  factorCode,
}: IOTPInput): Promise<{ page: Page; success: boolean }> => {
  try {
    const otpInputSelector = '[id="ius-mfa-confirm-code"]';
    const submitButtonSelector = 'button[type="submit"]';

    // Wait for OTP input field
    try {
      await page.locator(otpInputSelector).waitFor();
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

// Main login function using the helpers
export const loadPage = async (): Promise<any> => {
  const targetUrl =
    "https://accounts.intuit.com/app/sign-in?app_group=ProConnectTaxOnline&asset_alias=Intuit.apd.ito&redirect_uri=https%3A%2F%2Fito.intuit.com%2Fapp%2Fprotax%2Fsign-in&single_sign_on=false&appfabric=true";

  const playwrightService = new PlaywrightService();

  const page = await playwrightService.createPage();
  try {
    await page!.goto(targetUrl, { waitUntil: "networkidle", timeout: 10000 });
    playwrightService.setCurrentPage(page);
    return { page, playwrightService };
  } catch (error) {
    logger.error("Scraping error:", error);
    return { page };
  }
};

export async function loginAccountScraper({ email, password }: IAccount) {
  const { page, playwrightService } = await loadPage();
  try {
    await fillEmail({ page, email });
    await fillPassword({ page, password });
    playwrightService.setCurrentPage(page);

    return { page, playwrightService };
  } catch (error) {
    logger.error("Login error:", error);
    throw error;
  }
}

export const handleNavigation = async ({ page }: { page: Page }) => {
  try {
    // waiting to page to load
    try {
      await page.waitForURL("https://ito.intuit.com/app/protax/tax-hub");
      await page.waitForTimeout(3000);
    } catch (error) {
      console.warn("waiting for URL");
    }

    try {
      await page.goto("https://ito.intuit.com/app/protax/client-list", {
        waitUntil: "networkidle",
      });
      await page.waitForTimeout(30000);
    } catch (error) {
      console.log("navigate to https://ito.intuit.com/app/protax/client-list");
    }
  } catch (error) {
    logger.error("Login error:", error);
  }
};
