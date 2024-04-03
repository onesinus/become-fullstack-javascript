// src/routes/userCourseRoutes.js
const express = require('express');
const router = express.Router();
const userCourseController = require('../controllers/userCourseController');

// Route to enroll a user in a course
router.post('/user-courses', userCourseController.enrollUserInCourse);

// Route to get all user-course enrollments
router.get('/user-courses/:user_id', userCourseController.getAllUserCourseEnrollments);

// Other CRUD routes for user-course enrollments (update, delete) can be implemented similarly

module.exports = router;
