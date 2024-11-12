const Blog = require('../models/Blog');

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};

exports.addBlog = async (req, res) => {
  const { title, content, author, tags } = req.body;
  const newBlog = new Blog({ title, content, author, tags });
  await newBlog.save();
  res.json({ message: 'Blog added successfully' });
};
