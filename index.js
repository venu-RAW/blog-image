const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const blogRoute = require("./routes/blogRoute.js");

dotenv.config({
	path: `${__dirname}/config.env`,
});

mongoose.connect(
	process.env.DB_URL,
	{
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) {
			console.log(err);
		}
		console.log("successfully connected to db!!!");
	}
);

const app = express();

app.use(express.json());
app.use("/images", express.static("images"));
app.use("/blogs", blogRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on PORT: ${process.env.PORT}`);
});
