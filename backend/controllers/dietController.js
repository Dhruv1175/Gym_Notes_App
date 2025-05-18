import Diet from "../models/dietModel.js";

export const addDiet = async (req, res) => {
  const { date, meals } = req.body;
  try {
    const diet = await Diet.create({ user: req.user.id, date, meals });
    res.status(201).json(diet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDiet = async (req, res) => {
  try {
    const diet = await Diet.find({ user: req.user.id }).populate("meals.items.food");
    res.json(diet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
