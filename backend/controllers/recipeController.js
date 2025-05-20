import Recipe from "../models/recipeModel.js";

export const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create({ ...req.body, user: req.user._id });
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Failed to create recipe" });
  }
};

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ $or: [{ user: null }, { user: req.user._id }] });
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recipes" });
  }
};
