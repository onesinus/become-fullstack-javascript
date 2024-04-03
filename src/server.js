const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const indexController = require('./controllers/indexController');

// Middleware to handle JSON requests
app.use(express.json());

// Define a route for the root path
app.get('/', indexController.getIndex);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});