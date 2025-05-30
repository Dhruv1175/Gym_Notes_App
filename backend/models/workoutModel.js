import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    split:{
        type: String,
        required: true,
    },
    exercises: [
        {
            name: {
                type: String,
                required: true,
            },
            sets: {
                type: Number,
                required: true,
            },
            reps: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
                required: true,
            },
        },
    ],
    });
const workoutModel = mongoose.model("Workout", workoutSchema);
export default workoutModel;