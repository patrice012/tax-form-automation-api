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
  const sessionManager = new SessionManager();
  let _playwrightService = null;

  try {
    // Step 1: Authentication process
    const { page, playwrightService } = await authProcess({ email, password });
    _playwrightService = playwrightService;

    // Step 2: Check for OTP
    let { success: hasOTP, page: currentPage } = await checkForOTP({ page });
    updateTwoFactorStatus({
      documentId: id,
      newStatus: hasOTP ? "hasOTP" : "success",
    });

    if (!hasOTP) {
      await completeScrapingProcess({
        page: currentPage,
        sessionManager,
        uid,
        id,
        password,
      });
      return res.status(200).json({ message: "Scraping success" });
    }

    // Step 3: Handle OTP
    const data = (await setupJobWatch({
      collectionName: "twofactors",
      jobId: id,
    })) as { factorCode: string; email: string };

    if (data.factorCode) {
      const returnValue = await handleOTPInput({
        page: currentPage,
        factorCode: data.factorCode,
      });
      currentPage = returnValue.page;
    }

    await completeScrapingProcess({
      page: currentPage,
      sessionManager,
      uid,
      id,
      password,
    });
    res.status(200).json({ message: "Scraping success" });
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

// Helper function to complete the scraping process
async function completeScrapingProcess({
  page,
  sessionManager,
  uid,
  id,
  password,
}: {
  page: any;
  sessionManager: SessionManager;
  uid: string;
  id: string;
  password: string;
}) {
  await handleNavigationToClientPage({ page });
  await taxScraper({ page });

  const sessionId = await sessionManager.saveSession({
    page,
    uid,
    documentId: id,
    key: password,
  });

  logger.info("Session saved:", sessionId);
  updateTwoFactorStatus({ documentId: id, newStatus: "success" });
}
