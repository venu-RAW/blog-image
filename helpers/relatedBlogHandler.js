const mongoose = require("mongoose");

async function relatedBlogHandler() {
	return await mongoose.model("Blog").exists({ blogId: this.blogRelatedId });
}

module.exports = relatedBlogHandler;
