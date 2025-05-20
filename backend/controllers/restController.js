import RestSettings from "../models/restsettingsModel.js";

export const setRestTime = async (req, res) => {
  try {
    const setting = await RestSettings.findOneAndUpdate(
      { user: req.user._id },
      { defaultRestTime: req.body.defaultRestTime },
      { upsert: true, new: true }
    );
    res.status(200).json(setting);
  } catch (err) {
    res.status(500).json({ message: "Failed to set rest time" });
  }
};

export const getRestTime = async (req, res) => {
  try {
    const setting = await RestSettings.findOne({ user: req.user._id });
    res.status(200).json(setting);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch rest time" });
  }
};
