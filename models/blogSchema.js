const mongoose = require("mongoose");
const uniqid = require("uniqid");
const relatedBlogHandler = require("../helpers/relatedBlogHandler.js");

const blogSchema = new mongoose.Schema(
	{
		blogId: {
			type: String,
			default: Date.now() + uniqid(),
			unique: true,
		},
		blogTitle: {
			type: String,
			required: true,
		},
		blogContent: {
			type: String,
			required: true,
		},
		blogRelatedLinks: [
			{
				blogRelatedId: {
					type: String,
					required: true,
					validate: {
						validator: relatedBlogHandler,
						message: "Invalid input ( No related blog found. )",
					},
				},
				blogRelatedTitle: {
					type: String,
					required: true,
				},
			},
		],
		blogImage: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
