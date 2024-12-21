import { Router } from "express";
import {
  scrapeWebsite,
  startTaxScraper,
} from "../controllers/scrapeController";

const router = Router();

router.post("/fill-form", scrapeWebsite);
router.post("/login", startTaxScraper);

export default router;
