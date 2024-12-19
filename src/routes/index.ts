import { Request, Response, Router } from "express";
import scrapeRoutes from "./scrapeRoutes";
const router = Router();

// Entry endpoint
router
  .route("/")
  .get((req: Request, res: Response) =>
    res.status(200).send({ message: "server is running..." })
  );

// Modules Routes
router.use("/api/scraper", scrapeRoutes);

export default router;
