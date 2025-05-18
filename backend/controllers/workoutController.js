import Workout from "../models/workoutModel.js";

export const addWorkout = async (req, res) => {
  const { date, split, exercises } = req.body;
  try {
    const workout = await Workout.create({ user: req.user.id, date, split, exercises });
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
