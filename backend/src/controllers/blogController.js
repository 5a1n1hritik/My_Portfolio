const Blog = require("../models/Blog");
const { marked } = require("marked");

//All blog routes
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    res.status(500).json({ error: "Server error, please try again later" });
  }
};

// @route   GET /api/blogs/:id
// @desc    Get a single blog by ID
// @access  Private
exports.singleblog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      message: "Blog retrieved successfully",
      blog,
    });
  } catch (error) {
    console.error("Error fetching blog:", error.message);

    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid Blog ID" });
    }

    res.status(500).json({ error: "Server error, please try again later" });
  }
};

//Add blog routes
exports.createBlog = async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;

    if (!title || !content || !author) {
      return res
        .status(400)
        .json({ error: "Title, content, and author are required" });
    }

    const htmlContent = marked(content);

    const newBlog = new Blog({
      title,
      content,
      author,
      tags,
      htmlContent,
    });

    await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog added successfully",
      blog: newBlog,
    });
  } catch (error) {
    console.error("Error adding blog:", error.message);
    res.status(500).json({ error: "Server error, please try again later" });
  }
};

//Update blog routes
exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author, tags } = req.body;

  try {
    if (!title || !content || !author) {
      return res
        .status(400)
        .json({ error: "Title, content, and author are required" });
    }

    // Convert Markdown to HTML
    const htmlContent = marked(content);

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author, tags, htmlContent, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error.message);
    res.status(500).json({ error: "Server error, please try again later" });
  }
};

//Update blog routes
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    res.status(500).json({ error: "Server error, please try again later" });
  }
};
