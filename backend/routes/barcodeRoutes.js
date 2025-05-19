import express from "express";
import { scanBarcode } from "../controllers/barcodeController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/scan", authenticate, scanBarcode);

export default router;
