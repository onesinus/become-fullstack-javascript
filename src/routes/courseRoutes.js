// src/routes/courseRoutes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Route to create a new course
router.post('/courses', courseController.createCourse);

// Route to get all courses
router.get('/courses', courseController.getAllCourses);

// Route to update a course by ID
router.put('/courses/:id', courseController.updateCourse);

// Route to delete a course by ID
router.delete('/courses/:id', courseController.deleteCourse);

module.exports = router;
