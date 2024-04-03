// src/controllers/userController.js
const User = require('../models/userModel');

// Controller function to create a new user
const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Controller function to get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Other CRUD operations for users (update, delete) can be implemented similarly

module.exports = {
  createUser,
  getAllUsers
  // Add other CRUD controller functions here
};
