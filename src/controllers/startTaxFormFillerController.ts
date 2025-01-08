import { Request, Response } from "express";

import { startTaxFormsFiller } from "../bot/taxFormsFiller";
import { loadTaxPage } from "../bot/taxFormsFiller/loadTaxPage";

import logger from "../utils/logger";
import { decodePassword } from "../utils/hashPwd";

import { SessionManager } from "../services/browserSessionStorageSystem";

export const startTaxFormFillerController = async (
  req: Request,
  res: Response
) => {
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

    const { page: currentPage } = await startTaxFormsFiller({ page });

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
