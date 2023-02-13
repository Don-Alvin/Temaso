const { Router } = require("express");
const {
	loginUser,
	registerUser,
	verifyUser,
	verifyOTP,
	generateOTP,
} = require("../controllers/userController");
const { localVariable } = require("../middleware/auth");

const UserRouter = Router();

// Register new User
UserRouter.route("/register").post(registerUser);

// Login User
UserRouter.route("/login").post(verifyUser, loginUser);

// Register Mail
// UserRouter.post("/", (req, res) => {
// 	res.status(201).send("register mail route");
// });

// Generate OTP

UserRouter.route("/generateotp").get(verifyUser, localVariable, generateOTP);

// Verify OTP
UserRouter.route("/verifyotp").get(verifyOTP);

module.exports = UserRouter;
