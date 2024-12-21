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
import { SessionManager } from "../services/browserSessionStorageSystem";
import { loadTaxPage, taxScraper } from "../bot/taxScraper";
import { decodePassword } from "../utils/hashPwd";

export const scrapeWebsite = async (req: Request, res: Response) => {
  const { email, password, id, uid } = req.body;
  let _playwrightService = null;
  const sessionManager = new SessionManager();

  try {
    const { page, playwrightService } = await loginAccountScraper({
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
      await handleNavigation({ page: currentPage });
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

export const startTaxScraper = async (req: Request, res: Response) => {
  const { id, uid } = req.body;
  let _playwrightService = null;
  try {
    const sessionManager = new SessionManager();
    const { cookies, key } = await sessionManager.loadSessionToPage({
      uid,
      documentId: id,
    });

    if (!cookies) {
      logger.info("No saved session found");
    }

    let decodedKey = "";
    if (key) {
      decodedKey = decodePassword(key);
    }

    const { page, playwrightService } = await loadTaxPage({
      cookies,
      hash: decodedKey as string,
    });
    _playwrightService = playwrightService;

    const { page: currentPage } = await taxScraper({ page });

    res.status(200).json({
      message: "Login success",
    });

    // Save the session
    sessionManager.saveSession({
      page: currentPage,
      uid: uid,
      documentId: id,
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
