const dotenv = require("dotenv").config({ path: "./.env" });
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// Connect to MongoDB

const source = process.env.MONGO_URI;
mongoose.set("strictQuery", false);

const startServer = async () => {
	try {
		await mongoose.connect(source);
		server.listen(PORT, () => {
			console.log("Connected to database");
			console.log(`Server running on port ${PORT} ...`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
