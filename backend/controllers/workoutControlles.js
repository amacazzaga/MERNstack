const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

///get workouts////
const getWorkouts = async (req, res) => {
  try {
    const workout = await Workout.find();
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
///create workout//////
const createWorkout = async (req, res) => {
  const { title,reps,load } = req.body; 
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ mss: "error" });
  }
};
/// get single workout////
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("not valid id");
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(400).json("no such workout");
  }
  res.status(200).json(workout);
};
///delete workout////
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("not valid id");
  }
  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(400).json("not such workout");
  }
  res.status(200).json(workout);
};
const updateWorkout = async (req, res) => {
    const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json("not valid id");
  }
  const workout = await Workout.findOneAndUpdate({ id }, { ...req.body });
  if (!workout) {
    return res.status(400).json("not such workout");
  }
  return res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
