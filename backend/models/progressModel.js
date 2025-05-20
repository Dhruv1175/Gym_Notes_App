import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["weight", "body_weight"], required: true },
  value: Number,
  date: { type: Date, default: Date.now },
});

const Progress = mongoose.model("Progress", progressSchema);
export default Progress;
