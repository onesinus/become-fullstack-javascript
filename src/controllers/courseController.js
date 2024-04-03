// src/controllers/courseController.js
const Course = require('../models/courseModel');

// Controller function to create a new course
const createCourse = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newCourse = new Course({ name, price });
    await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', course: newCourse });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Failed to create course' });
  }
};

// Controller function to get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

// Other CRUD operations for courses (update, delete) can be implemented similarly

module.exports = {
  createCourse,
  getAllCourses
  // Add other CRUD controller functions here
};
