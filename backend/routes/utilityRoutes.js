import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import { logProgress, getProgress } from "../controllers/progressController.js";
import { logWater, getWaterLogs } from "../controllers/waterController.js";
import { setRestTime, getRestTime } from "../controllers/restController.js";
import { createRecipe, getRecipes } from "../controllers/recipeController.js";

const router = express.Router();

router.post("/progress", authenticate, logProgress);
router.get("/progress", authenticate, getProgress);

router.post("/water", authenticate, logWater);
router.get("/water", authenticate, getWaterLogs);

router.post("/rest", authenticate, setRestTime);
router.get("/rest", authenticate, getRestTime);

router.post("/recipes", authenticate, createRecipe);
router.get("/recipes", authenticate, getRecipes);

export default router;
