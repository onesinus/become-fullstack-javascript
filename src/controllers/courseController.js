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

// Controller function to update a course by ID
const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(id, { name, price }, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json({ message: 'Course updated successfully', course: updatedCourse });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Failed to update course' });
  }
};

// Controller function to delete a course by ID
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully', course: deletedCourse });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ error: 'Failed to delete course' });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse
};
