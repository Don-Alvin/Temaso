const { Router } = require("express");
const {
	loginUser,
	registerUser,
	verifyUser,
	verifyOTP,
	generateOTP,
	resetPassword,
} = require("../controllers/userController");
const { localVariable } = require("../middleware/auth");
const { registerMail } = require("../controllers/mailer");

const UserRouter = Router();

// Register new User
UserRouter.route("/register").post(registerUser);

// Login User
UserRouter.route("/login").post(verifyUser, loginUser);

// Register Mail
// UserRouter.post("/", registerMail);

// Generate OTP
UserRouter.route("/generateotp").get(verifyUser, localVariable, generateOTP);

// Verify OTP
UserRouter.route("/verifyotp").get(verifyOTP);

// Reset password
UserRouter.route("/resetpassword").put(verifyUser, resetPassword);

module.exports = UserRouter;
