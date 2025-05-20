import WaterLog from "../models/waterLogModel.js";

export const logWater = async (req, res) => {
  try {
    const waterLog = await WaterLog.create({ ...req.body, user: req.user._id });
    res.status(201).json(waterLog);
  } catch (err) {
    res.status(500).json({ message: "Failed to log water intake" });
  }
};

export const getWaterLogs = async (req, res) => {
  try {
    const logs = await WaterLog.find({ user: req.user._id });
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch water logs" });
  }
};
