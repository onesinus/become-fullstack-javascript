const express = require('express');
const router = express.Router();

// Import the index controller
const indexController = require('../controllers/indexController');

// Define route handlers
router.get('/index', indexController.getIndex);

module.exports = router;
