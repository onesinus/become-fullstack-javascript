// src/models/UserCourse.js
const mongoose = require('mongoose');

const userCourseSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  enroll_date: {
    type: Date,
    default: Date.now
  }
});

const UserCourse = mongoose.model('UserCourse', userCourseSchema);

module.exports = UserCourse;
