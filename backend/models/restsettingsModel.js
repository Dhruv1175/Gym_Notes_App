import mongoose from "mongoose";

const restSettingsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  defaultRestTime: { type: Number, default: 60 }, // in seconds
});

const RestSettings = mongoose.model("RestSettings", restSettingsSchema);
export default RestSettings;
