import { Request, Response } from "express";

import { handleOTPInput } from "../bot/auth/handleOTPInput";
import { authProcess } from "../bot/authProcess";
import { checkForOTP } from "../bot/auth/checkForOTP";
import { handleNavigationToClientPage } from "../bot/taxFormsFiller/handleNavigationToClientPage";
import { startTaxFormsFiller } from "../bot/taxFormsFiller";

import logger from "../utils/logger";
import { watchDBCollection } from "../utils/watchDB";
import { updateTwoFactorStatus } from "../utils/updateTwoFactorStatus";
import { SessionManager } from "../services/browserSessionStorageSystem";

export const authProcessAndTaxFormFillerController = async (
  req: Request,
  res: Response
) => {
  const { email, password, id, uid } = req.body;
  const sessionManager = new SessionManager();
  let _playwrightService = null;

  try {
    logger.info("Step 1: Authentication process");
    const { page, playwrightService } = await authProcess({ email, password });
    _playwrightService = playwrightService;

    logger.info("Step 2: Check for OTP");
    let { success: hasOTP, page: currentPage } = await checkForOTP({ page });
    updateTwoFactorStatus({
      documentId: id,
      newStatus: hasOTP ? "hasOTP" : "success",
    });

    logger.info(`Step 3: ${hasOTP ? "Handle OTP" : "OTP not required"}`);
    if (hasOTP) {
      const data = (await watchDBCollection({
        collectionName: "twofactors",
        documentId: id,
      })) as { factorCode: string; email: string };

      if (data.factorCode) {
        const returnValue = await handleOTPInput({
          page: currentPage,
          factorCode: data.factorCode,
        });
        currentPage = returnValue.page;
      }
    }

    logger.info("Step 4: Fill forms");
    const isFillSuccessful = await completeFormsFillingProcess({
      page: currentPage,
    });

    logger.info("Step 5: Update document status");
    updateTwoFactorStatus({
      documentId: id,
      newStatus: isFillSuccessful ? "success" : "error",
    });

    // Save session in db
    const sessionId = await sessionManager.saveSession({
      page,
      uid,
      documentId: id,
      key: password,
    });
    logger.info("Session saved:", sessionId);

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
async function completeFormsFillingProcess({ page }: { page: any }) {
  await handleNavigationToClientPage({ page });
  const { success } = await startTaxFormsFiller({ page });
  return success;
}
