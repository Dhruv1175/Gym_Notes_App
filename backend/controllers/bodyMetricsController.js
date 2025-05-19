import BodyMetrics from "../models/bodyMetrics.js";

export const addMetrics = async (req, res) => {
  try {
    const data = new BodyMetrics({ user: req.user._id, ...req.body });
    await data.save();
    res.status(201).json({ message: "Metrics added", data });
  } catch (err) {
    res.status(500).json({ message: "Error saving metrics" });
  }
};

export const getMetrics = async (req, res) => {
  try {
    const metrics = await BodyMetrics.find({ user: req.user._id }).sort({ date: -1 });
    res.status(200).json(metrics);
  } catch (err) {
    res.status(500).json({ message: "Error fetching metrics" });
  }
};
