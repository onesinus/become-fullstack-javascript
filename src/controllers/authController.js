// src/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const generateToken = (user) => {
  return jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.log('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { login };
