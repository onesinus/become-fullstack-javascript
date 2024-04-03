const express = require('express');

const { connectToDatabase } = require('./db');

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

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));