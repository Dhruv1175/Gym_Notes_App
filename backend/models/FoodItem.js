import mongoose from "mongoose";

const fooditemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    protein: {
        type: Number,
        required: true,
    },
    carbs: {
        type: Number,
        required: true,
    },
    fats: {
        type: Number,
        required: true,
    },
});
const fooditemModel = mongoose.model("FoodItem", fooditemSchema);   
export default fooditemModel;