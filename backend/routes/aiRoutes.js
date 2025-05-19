import express from "express";
import { askAI } from "../controllers/aiController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/ask", authenticate, askAI);

export default router;