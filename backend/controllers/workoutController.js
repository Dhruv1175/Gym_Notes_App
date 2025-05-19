import Workout from "../models/Workout.js";
import WorkoutTemplate from "../models/workoutTemplate.js";

export const addWorkout = async (req, res) => {
  const { date, exercises, notes } = req.body;
  try {
    const workout = await Workout.create({
      user: req.user._id,
      date: date || new Date(),
      exercises,
      notes,
    });
    res.status(201).json({ message: "Workout added", workout });
  } catch (err) {
    res.status(500).json({ message: "Error adding workout", error: err.message });
  }
};

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id }).sort({ date: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching workouts", error: err.message });
  }
};

export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { exercises, notes, date } = req.body;
  try {
    const updated = await Workout.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { exercises, notes, date },
      { new: true }
    );
    res.status(200).json({ message: "Workout updated", workout: updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating workout", error: err.message });
  }
};

export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    await Workout.deleteOne({ _id: id, user: req.user._id });
    res.status(200).json({ message: "Workout deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting workout", error: err.message });
  }
};

export const getWorkoutTemplates = async (req, res) => {
  try {
    const templates = await WorkoutTemplate.find({ user: req.user._id });
    res.status(200).json(templates);
  } catch (err) {
    res.status(500).json({ message: "Error fetching templates", error: err.message });
  }
};

export const createWorkoutTemplate = async (req, res) => {
  const { name, exercises } = req.body;
  try {
    const template = await WorkoutTemplate.create({
      user: req.user._id,
      name,
      exercises,
    });
    res.status(201).json({ message: "Workout template created", template });
  } catch (err) {
    res.status(500).json({ message: "Error creating template", error: err.message });
  }
};
