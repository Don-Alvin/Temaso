const { Router } = require("express");
const {
	loginUser,
	registerUser,
	verifyUser,
} = require("../controllers/userController");

const UserRouter = Router();

// Register new User
UserRouter.route("/register").post(registerUser);

// Login User
UserRouter.route("/login").post(verifyUser, loginUser);

// Register Mail
// UserRouter.post("/", (req, res) => {
// 	res.status(201).send("register mail route");
// });

// Authenticate user
// UserRouter.post("/", (req, res) => {
// 	res.status(201).send("authenticate user route");
// });

module.exports = UserRouter;
