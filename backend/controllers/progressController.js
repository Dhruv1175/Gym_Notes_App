import Progress from "../models/progressModel.js";

export const logProgress = async (req, res) => {
  try {
    const progress = await Progress.create({ ...req.body, user: req.user._id });
    res.status(201).json(progress);
  } catch (err) {
    res.status(500).json({ message: "Failed to log progress" });
  }
};

export const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user._id }).sort({ date: 1 });
    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch progress" });
  }
};
