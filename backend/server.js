import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// === Route Imports ===
import authRoutes from "./routes/authRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import dietRoutes from "./routes/dietRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import socialRoutes from "./routes/socialRoutes.js";
import waterRoutes from "./routes/utilityRoutes.js";
import timerRoutes from "./routes/utilityRoutes.js";
import recipeRoutes from "./routes/utilityRoutes.js";
import progressRoutes from "./routes/utilityRoutes.js";
import bodyMetricsRoutes from "./routes/bodyMetricsRoutes.js";
import barcodeRoutes from "./routes/barcodeRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// === Main API Routes ===
app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/diets", dietRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/social", socialRoutes);
app.use("/api/water", waterRoutes);           // 💧 Water Intake Tracker
app.use("/api/timer", timerRoutes);           // ⏱ Rest Timer
app.use("/api/recipes", recipeRoutes);        // 🍲 Recipe Suggestions
app.use("/api/progress", progressRoutes);     // 📈 Progress Graphs
app.use("/api/body", bodyMetricsRoutes);             // 📏 Body Measurement Tracker
app.use("/api/barcode", barcodeRoutes);       // 🧾 Barcode Scanner for Diet

// === Test/Health Route ===
app.get("/", (req, res) => {
  res.send("🚀 Gym Notes API is running!");
});

// === Start Server ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
