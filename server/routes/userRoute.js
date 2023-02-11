const { Router } = require("express");
const { registerUser } = require("../controllers/userController");

const UserRouter = Router();

// Register new User
UserRouter.post("/", registerUser);

// Register Mail
UserRouter.post("/", (req, res) => {
	res.status(201).send("register mail route");
});

// Authenticate user
UserRouter.post("/", (req, res) => {
	res.status(201).send("authenticate user route");
});

// Login User
UserRouter.post("/", (req, res) => {
	res.status(201).send("login user route");
});

module.exports = UserRouter;
