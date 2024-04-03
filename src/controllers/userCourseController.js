// src/controllers/userCourseController.js
const UserCourse = require('../models/userCourseModel');
const jwt = require('jsonwebtoken');

// Controller function to enroll a user in a course
const enrollUserInCourse = async (req, res) => {
  try {
    const { course_id } = req.body;

    const decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    const user_id = decoded["_id"];

    const newUserCourse = new UserCourse({ course_id, user_id });
    await newUserCourse.save();
    res.status(201).json({ message: 'User enrolled in course successfully', userCourse: newUserCourse });
  } catch (error) {
    console.error('Error enrolling user in course:', error);
    res.status(500).json({ error: 'Failed to enroll user in course' });
  }
};

// Controller function to get all user-course enrollments
const getAllUserCourseEnrollments = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const userCourses = await UserCourse.find({ user_id }).populate('course_id');

    res.status(200).json(userCourses);
  } catch (error) {
    console.error('Error fetching user courses:', error);
    res.status(500).json({ error: 'Failed to fetch user courses' });
  }
};

// Other CRUD operations for user-course enrollments (update, delete) can be implemented similarly

module.exports = {
  enrollUserInCourse,
  getAllUserCourseEnrollments
  // Add other CRUD controller functions here
};
