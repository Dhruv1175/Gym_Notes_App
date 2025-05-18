import connectDB from "./config/db.js";
import express from "express";
import dotenv from "dotenv";    
import cors from "cors";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/diets", dietRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
