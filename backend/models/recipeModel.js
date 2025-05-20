import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  title: String,
  ingredients: [String],
  instructions: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  isAIgenerated: { type: Boolean, default: false }
});

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
