const express = require('express');
const router = express.Router();
const WorkoutController = require('./Models/workouts');

router.post('/workouts', WorkoutController.saveWorkout);
