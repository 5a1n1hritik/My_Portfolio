const express = require('express');
const router = express.Router();
const { getAllBlogs, createBlog, singleblog, updateBlog, deleteBlog } = require('../controllers/blogController');


router.post('/New-blog', createBlog);
router.get('/all-blogs', getAllBlogs);
router.get('/:id/blogs', singleblog);
router.put('/update/:id', updateBlog);
router.delete('/delete/:id',deleteBlog);


module.exports = router;
