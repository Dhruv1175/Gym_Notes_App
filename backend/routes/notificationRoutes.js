import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
  getNotifications,
  markNotificationRead,
  deleteNotification,
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", authenticate, getNotifications);
router.put("/:id/read", authenticate, markNotificationRead);
router.delete("/:id", authenticate, deleteNotification);

export default router;
