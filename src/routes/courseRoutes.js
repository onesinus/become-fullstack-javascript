// src/routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route to create a new course
router.post('/courses', courseController.createCourse);

// Route to get all courses
router.get('/courses', courseController.getAllCourses);

// Other CRUD routes for courses (update, delete) can be implemented similarly

module.exports = router;
