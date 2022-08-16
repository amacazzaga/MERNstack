const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutControlles");
//this handles routes and then export to server//
const router = express.Router();
//////import schemas//////

router.get("/", getWorkouts);
router.post("/", createWorkout);
router.get("/:id", getSingleWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);
//para cada entidad, tener las rutas///

module.exports = router;
