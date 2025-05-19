import express from "express";
import { addMetrics, getMetrics } from "../controllers/bodyMetricsController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/add", authenticate, addMetrics);
router.get("/all", authenticate, getMetrics);

export default router;
