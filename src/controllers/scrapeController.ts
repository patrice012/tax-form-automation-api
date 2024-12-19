import { Request, Response } from "express";
import logger from "../utils/logger";
import {
  checkForOTP,
  handleOTPInput,
  loginAccountScraper,
  handleNavigation,
} from "../bot/loginAccountScraper";
import { setupJobWatch } from "../utils/watchDB";
import { updateTwoFactorStatus } from "../utils/updateTwoFactorStatus";

export const scrapeWebsite = async (req: Request, res: Response) => {
  const { email, password, id } = req.body;
  let _playwrightService = null;
  try {
    const { page, playwrightService } = await loginAccountScraper({
      email,
      password,
    });
    _playwrightService = playwrightService;
    const check = await checkForOTP({ page });
    const hasOTP = check.success;
    const currentPage = check.page;

    updateTwoFactorStatus({
      documentId: id,
      newStatus: hasOTP ? "hasOTP" : "success",
    });

    if (!hasOTP) {
      await handleNavigation({ page: currentPage });
      return res.status(200).json({
        message: "Scraping success",
      });
    }

    const data = (await setupJobWatch({
      collectionName: "twofactors",
      jobId: id,
    })) as {
      factorCode: string;
      email: string;
    };

    if (data.factorCode) {
      await handleOTPInput({ page: currentPage, factorCode: data.factorCode });
    }

    await handleNavigation({ page });

    updateTwoFactorStatus({
      documentId: id,
      newStatus: "success",
    });

    res.status(200).json({
      message: "Scraping success",
    });
  } catch (error) {
    logger.error("Scraping error:", error);
    res.status(500).json({
      message: "Scraping failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  } finally {
    _playwrightService?.cleanup();
  }
};
