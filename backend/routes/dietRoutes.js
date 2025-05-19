import express from "express";
import {
  addDiet,
  getDiet,
  updateDiet,
  deleteDiet,
  getDietTemplates,
  createDietTemplate,
} from "../controllers/dietController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authenticate, addDiet);
router.get("/all", authenticate, getDiet);
router.put("/update/:id", authenticate, updateDiet);
router.delete("/delete/:id", authenticate, deleteDiet);
router.get("/templates", authenticate, getDietTemplates);
router.post("/templates", authenticate, createDietTemplate);

export default router;