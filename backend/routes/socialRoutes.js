import express from "express";
import { authenticate } from "../middleware/authMiddleware.js";
import {
  createPost,
  likePost,
  getFeed,
  deletePost,
} from "../controllers/socialController.js";

const router = express.Router();

router.post("/", authenticate, createPost);
router.get("/feed", authenticate, getFeed);
router.put("/like/:id", authenticate, likePost);
router.delete("/:id", authenticate, deletePost);

export default router;
