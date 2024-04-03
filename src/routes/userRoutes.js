// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to create a new user
router.post('/register', userController.createUser);

// Route to get all users
router.get('/users', userController.getAllUsers);

// Other CRUD routes for users (update, delete) can be implemented similarly

module.exports = router;
