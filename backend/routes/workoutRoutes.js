import express from "express";
import {
  addWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
  getWorkoutTemplates,
  createWorkoutTemplate,
} from "../controllers/workoutController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", authenticate, addWorkout);
router.get("/all", authenticate, getWorkouts);
router.put("/update/:id", authenticate, updateWorkout);
router.delete("/delete/:id", authenticate, deleteWorkout);
router.get("/templates", authenticate, getWorkoutTemplates);
router.post("/templates", authenticate, createWorkoutTemplate);

export default router;