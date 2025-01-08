import { Router } from "express";
import { authProcessAndTaxFormFillerController } from "../controllers/authProcessAndTaxFormFillerController";
import { startTaxFormFillerController } from "../controllers/startTaxFormFillerController";

const router = Router();

router.post("/fill-form", authProcessAndTaxFormFillerController);
router.post("/login", startTaxFormFillerController);

export default router;
