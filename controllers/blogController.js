const sendResponse = require("../helpers/sendResponse.js");
const sendError = require("../helpers/sendError.js");
const Blog = require("../models/blogSchema.js");
const e = require("express");

// GET ALL BLOGS OR GET THE BLOG BY QUERY PARAMETER
const getAllBlogs = async (req, res, next) => {
	if (Object.keys(req.query).length !== 0) {
		let blog = await Blog.find(req.query).select("-_id");
		console.log(blog);
		if (blog < 1) {
			sendError(
				401,
				"Unsuccessful",
				"Blog Not Found with given query",
				req,
				res
			);
		} else {
			sendResponse(200, "Successful", blog, req, res);
		}
	} else {
		try {
			const allBlogs = await Blog.find().select("-_id");
			sendResponse(200, "Successful", allBlogs, req, res);
		} catch (err) {
			sendError(401, "Unsuccessful", err, req, res);
		}
	}
};

const createBlog = async (req, res, next) => {
	const { blogTitle, blogContent } = req.body;

	let blogRelatedData = JSON.parse(req.body.blogRelatedLinks);

	let newBlog;

	blogRelatedData.forEach(() => {
		newBlog = new Blog({
			blogTitle,
			blogContent,
			blogRelatedLinks: blogRelatedData,
			blogImage: req.file.path,
		});
	});

	try {
		newBlog = await newBlog.save();
		sendResponse(200, "Successful", newBlog, req, res);
	} catch (err) {
		sendError(401, "Unsuccessful", err, req, res);
	}
};

const getBlogById = async (req, res) => {
	const { blogId } = req.params;

	try {
		let blog = await Blog.findOne({ blogId }).select("-_id");
		if (blog < 1) {
			sendError(
				401,
				"Unsuccessful",
				"Cannot get blog by given ID",
				req,
				res
			);
		} else {
			sendResponse(200, "Successful", blog, req, res);
		}
	} catch (err) {
		sendError(401, "Cannot get blog by given id", err, req, res);
	}
};

const deleteBlogById = async (req, res) => {
	const { blogId } = req.params;

	try {
		await Blog.findOneAndDelete({ blogId }, (err, blog) => {
			if (err) {
				sendError(401, "Cannot delete blog by given id", err, req, res);
			} else {
				if (!blog) {
					sendError(
						401,
						"Cannot delete blog by given id",
						"Blog not Found",
						req,
						res
					);
				} else {
					sendResponse(200, "Blog deleted", null, req, res);
				}
			}
		});
	} catch (err) {
		sendError(
			401,
			"Cannot delete blog by given id",
			"Blog not Found",
			req,
			res
		);
	}
};

module.exports = {
	getAllBlogs,
	createBlog,
	getBlogById,
	deleteBlogById,
};
