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

// Helper Functions
export const fillEmail = async ({
  page,
  email,
}: IEmailInput): Promise<{ page: Page; success: boolean }> => {
  try {
    try {
      await page.locator('input[name="Email"]').waitFor();
    } catch (error) {
      logger.warn("Error waiting for Email field");
    }
    await page
      .locator('[id="iux-identifier-first-unknown-identifier"]')
      .fill(email);
    await page.waitForTimeout(500);
    await page.locator('button[type="submit"]').click();
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
    try {
      await page.locator('input[name="Password"]').waitFor();
    } catch (error) {
      logger.warn("Error waiting for Password field");
    }
    await page
      .locator('[id="iux-password-confirmation-password"]')
      .fill(password);
    await page.waitForTimeout(500);
    await page.locator('button[type="submit"]').click();
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
    const otpSelector = '[data-testid="challengePickerOption_SMS_OTP"]';
    try {
      console.log("waiting for OTP field");
      await page.locator(otpSelector).waitFor({ timeout: 5000 });
    } catch (error) {
      logger.warn("Error waiting for OTP input");
      return { page, success: false };
    }
    let checkOTP = null;
    try {
      console.log("check OTP process");
      checkOTP = await page.locator(otpSelector);
    } catch (error) {
      console.log(error);
    }

    if (checkOTP) {
      await page.waitForTimeout(500);
      console.log("trying click process OTP");
      await checkOTP?.click();
      return { page, success: true };
    }
    return { page, success: false };
  } catch (error) {
    logger.error("Error checking OTP:", error);
    return { page, success: false };
  }
};

export const handleOTPInput = async ({
  page,
  factorCode,
}: IOTPInput): Promise<{ page: Page; success: boolean }> => {
  try {
    const confirmCodeSelector = '[id="ius-mfa-confirm-code"]';
    try {
      await page.locator(confirmCodeSelector).waitFor();
      logger.warn("Error waiting for OTP input field");
    } catch (error) {}

    // Handle OTP fill if needed
    await page.locator(confirmCodeSelector).fill(factorCode);
    await page.waitForTimeout(500);
    await page.locator('button[type="submit"]').click();

    return { page, success: true };
  } catch (error) {
    logger.error("Error handling OTP input:", error);
    throw error;
  }
};

// Main login function using the helpers
export const loadPage = async (): Promise<{
  page: Page;
  playwrightService: PlaywrightService;
}> => {
  const targetUrl =
    "https://accounts.intuit.com/app/sign-in?app_group=ProConnectTaxOnline&asset_alias=Intuit.apd.ito&redirect_uri=https%3A%2F%2Fito.intuit.com%2Fapp%2Fprotax%2Fsign-in&single_sign_on=false&appfabric=true";

  const playwrightService = new PlaywrightService();
  try {
    const page = await playwrightService.createPage();
    await page!.goto(targetUrl, { waitUntil: "networkidle" });
    playwrightService.setCurrentPage(page);
    return { page, playwrightService };
  } catch (error) {
    logger.error("Scraping error:", error);
    throw error;
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
