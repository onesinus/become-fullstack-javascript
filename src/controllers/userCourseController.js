// src/controllers/userCourseController.js
const UserCourse = require('../models/userCourseModel');

// Controller function to enroll a user in a course
const enrollUserInCourse = async (req, res) => {
  try {
    const { course_id, user_id } = req.body;
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
    const userCourses = await UserCourse.find();
    res.json(userCourses);
  } catch (error) {
    console.error('Error fetching user-course enrollments:', error);
    res.status(500).json({ error: 'Failed to fetch user-course enrollments' });
  }
};

// Other CRUD operations for user-course enrollments (update, delete) can be implemented similarly

module.exports = {
  enrollUserInCourse,
  getAllUserCourseEnrollments
  // Add other CRUD controller functions here
};
