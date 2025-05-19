import mongoose from "mongoose";

const bodyMetricsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  weight: Number,
  bodyFat: Number,
  waist: Number,
  chest: Number,
  biceps: Number,
  thigh: Number,
});

const BodyMetrics = mongoose.model("BodyMetrics", bodyMetricsSchema);
export default BodyMetrics;
