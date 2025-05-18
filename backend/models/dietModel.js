import mongoose from "mongoose";

const dietSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    meals: [
        {
            name: {
                type: String,
                required: true,
            },
           items: [
          {
             food: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
            quantity: Number,
          }
      ],}
    ],
});

const dietModel = mongoose.model("Diet", dietSchema);
export default dietModel;