const router = require("express").Router();
const path = require("path");

const {
	getAllBlogs,
	createBlog,
	getBlogById,
	deleteBlogById,
} = require("../controllers/blogController.js");

const multer = require("multer");

let storage = multer.diskStorage({
	destination: "./images",
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + path.extname(file.originalname));
	},
});

let upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
});

function checkFileType(file, cb) {
	const filetypes = /jpeg|jpg|png|gif/;

	const extname = filetypes.test(
		path.extname(file.originalname).toLowerCase()
	);

	const mimetype = filetypes.test(file.mimetype);

	if (mimetype && extname) {
		return cb(null, true);
	} else {
		cb("Error: Images Only");
	}
}

router.route("/").get(getAllBlogs);
router.route("/").post(upload.single("blogImage"), createBlog);
router.route("/:blogId").get(getBlogById).delete(deleteBlogById);

module.exports = router;
