import { Router } from "express";
import { authProcessAndTaxScraperController } from "../controllers/authProcessAndTaxScraperController";
import { startTaxScraperController } from "../controllers/startTaxScraperController";

const router = Router();

router.post("/fill-form", authProcessAndTaxScraperController);
router.post("/login", startTaxScraperController);

export default router;
