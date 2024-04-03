const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { connectToDatabase } = require('./db');
const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');
const userCourseRoutes = require('./routes/userCourseRoutes');
const authRoutes = require('./routes/authRoutes');
const { verifyToken } = require('./middlewares/authMiddleware');

// Load controllers
const indexController = require('./controllers/indexController');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
connectToDatabase()
  .then(() => {
    app.use(cors({
      origin: 'http://localhost:3000'
    }));
    
    app.use(express.json());

    // Apply verifyToken middleware globally for all routes except root ("/")
    app.use((req, res, next) => {
      if (req.path === '/' || req.path === '/register' || req.path === '/login') {
        return next(); // Skip token verification for root, user registration, and login routes
      }
      verifyToken(req, res, next); // Apply token verification for all other routes
    });

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