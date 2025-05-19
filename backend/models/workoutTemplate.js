import mongoose from "mongoose";

const workoutTemplateSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true }, // e.g., "Push Day", "Legs + Core"
  category: { type: String }, // Optional tag: push/pull/legs etc.
  description: { type: String }, // Optional: quick description
  exercises: [
    {
      name: String,
      sets: Number,
      reps: Number,
      rest: Number,
    },
  ],
}, { timestamps: true });

const WorkoutTemplate = mongoose.model("WorkoutTemplate", workoutTemplateSchema);
export default WorkoutTemplate;
