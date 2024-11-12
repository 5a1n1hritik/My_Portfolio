// authRoutes.js
const express = require('express');
const router = express.Router();

// Controllers (e.g., functions for login, register)
const { registerUser, loginUser } = require('../controllers/authController');

// Define routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Export the router
module.exports = router;
