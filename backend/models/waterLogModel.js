import mongoose from "mongoose";

const waterLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  amount: Number, // in ml
});

const WaterLog = mongoose.model("WaterLog", waterLogSchema);
export default WaterLog;
