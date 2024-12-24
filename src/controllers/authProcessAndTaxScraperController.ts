import { Request, Response } from "express";

import { handleOTPInput } from "../bot/auth/handleOTPInput";
import { authProcess } from "../bot/authProcess";
import { checkForOTP } from "../bot/auth/checkForOTP";
import { handleNavigationToClientPage } from "../bot/taxScraper/handleNavigationToClientPage";

import { taxScraper } from "../bot/taxScraper";

import logger from "../utils/logger";
import { setupJobWatch } from "../utils/watchDB";
import { updateTwoFactorStatus } from "../utils/updateTwoFactorStatus";

import { SessionManager } from "../services/browserSessionStorageSystem";

export const authProcessAndTaxScraperController = async (
  req: Request,
  res: Response
) => {
  const { email, password, id, uid } = req.body;
  let _playwrightService = null;
  const sessionManager = new SessionManager();

  try {
    const { page, playwrightService } = await authProcess({
      email,
      password,
    });
    _playwrightService = playwrightService;
    const check = await checkForOTP({ page });
    const hasOTP = check.success;
    let currentPage = check.page;

    updateTwoFactorStatus({
      documentId: id,
      newStatus: hasOTP ? "hasOTP" : "success",
    });

    if (!hasOTP) {
      await handleNavigationToClientPage({ page: currentPage });
      // Save the session
      const sessionId = await sessionManager.saveSession({
        page: currentPage,
        uid: uid,
        documentId: id,
        key: password,
      });
      logger.info("Session saved:", sessionId);
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
      const returnValue = await handleOTPInput({
        page: currentPage,
        factorCode: data.factorCode,
      });
      currentPage = returnValue.page;
    }

    // Save the session
    const sessionId = await sessionManager.saveSession({
      page: currentPage,
      uid: uid,
      documentId: id,
      key: password,
    });
    logger.info("Session saved:", sessionId);
    await handleNavigationToClientPage({ page });

    await taxScraper({ page });

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
