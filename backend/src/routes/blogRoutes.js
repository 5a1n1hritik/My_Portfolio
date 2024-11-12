// blogRoutes.js
const express = require('express');
const router = express.Router();

// Controllers (e.g., functions for creating and fetching blogs)
const { getBlogs, createBlog, getBlogById } = require('../controllers/blogController');

// Define routes
router.get('/getblog', getBlogs);
router.post('/newblog', createBlog);
router.get('/:id/getblog', getBlogById);

// Export the router
module.exports = router;
