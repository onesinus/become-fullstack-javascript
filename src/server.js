const express = require('express');

const { connectToDatabase } = require('./db');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');
const userCourseRoutes = require('./routes/userCourseRoutes');
const authRoutes = require('./routes/authRoutes');

// Load controllers
const indexController = require('./controllers/indexController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(express.json());

// MongoDB connection
connectToDatabase()
  .then(() => {
    // Define your routes and other middleware here
    app.get('/', indexController.getIndex);
    app.use(courseRoutes);
    app.use(userRoutes);
    app.use(userCourseRoutes);
    app.use(authRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));