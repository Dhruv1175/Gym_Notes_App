import Diet from "../models/dietModel.js";
import DietTemplate from "../models/dietTemplate.js";

export const addDiet = async (req, res) => {
  const { date, meals, notes } = req.body;
  try {
    const diet = await Diet.create({
      user: req.user._id,
      date: date || new Date(),
      meals,
      notes,
    });
    res.status(201).json({ message: "Diet entry added", diet });
  } catch (err) {
    res.status(500).json({ message: "Error adding diet entry", error: err.message });
  }
};

export const getDiet = async (req, res) => {
  try {
    const diets = await Diet.find({ user: req.user._id }).sort({ date: -1 });
    res.status(200).json(diets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching diet entries", error: err.message });
  }
};

export const updateDiet = async (req, res) => {
  const { id } = req.params;
  const { meals, notes, date } = req.body;
  try {
    const updated = await Diet.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { meals, notes, date },
      { new: true }
    );
    res.status(200).json({ message: "Diet entry updated", diet: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating diet entry", error: err.message });
  }
};

export const deleteDiet = async (req, res) => {
  const { id } = req.params;
  try {
    await Diet.deleteOne({ _id: id, user: req.user._id });
    res.status(200).json({ message: "Diet entry deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting diet entry", error: err.message });
  }
};

export const getDietTemplates = async (req, res) => {
  try {
    const templates = await DietTemplate.find({ user: req.user._id });
    res.status(200).json(templates);
  } catch (err) {
    res.status(500).json({ message: "Error fetching diet templates", error: err.message });
  }
};

export const createDietTemplate = async (req, res) => {
  const { name, meals } = req.body;
  try {
    const template = await DietTemplate.create({
      user: req.user._id,
      name,
      meals,
    });
    res.status(201).json({ message: "Diet template created", template });
  } catch (err) {
    res.status(500).json({ message: "Error creating diet template", error: err.message });
  }
};
