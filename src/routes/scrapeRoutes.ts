import { Router } from "express";
import { scrapeWebsite } from "../controllers/scrapeController";

const router = Router();

router.post("/fill-form", scrapeWebsite);

export default router;
