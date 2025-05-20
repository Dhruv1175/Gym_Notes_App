import mongoose from "mongoose";

const dietTemplateSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true }, // e.g., "Bulking Breakfast"
  goal: { type: String }, // e.g., "bulking", "cutting"
  meals: [
    {
      name: String,
      items: [
        {
          food: String,
          quantity: String,
          calories: Number,
          protein: Number,
          carbs: Number,
          fats: Number,
        },
      ],
    },
  ],
}, { timestamps: true });

const DietTemplate = mongoose.model("DietTemplate", dietTemplateSchema);
export default DietTemplate; 
