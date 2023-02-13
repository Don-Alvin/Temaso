const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({ path: "./.env" });
const otpGenerator = require("otp-generator");

// middleware to verify user

async function verifyUser(req, res, next) {
	try {
		const { email } = req.method === "GET" ? req.query : req.body;

		// check the user existence

		let exist = await User.findOne({ email });
		if (!exist) return res.status(404).send({ error: "Email not registred" });
		next();
	} catch (error) {
		return res.status(404).send({ error: "Authentication failed" });
	}
}

// Register user
async function registerUser(req, res) {
	try {
		const { email, username, password } = req.body;

		// Check if user exists
		const existEmail = new Promise((resolve, reject) => {
			User.findOne({ email }, (err, email) => {
				if (err) reject(new Error(err));
				if (email)
					reject({
						error: "An existing account is registered under that email",
					});

				resolve();
			});
		});

		Promise.all([existEmail])
			.then(() => {
				if (password) {
					bcrypt
						.hash(password, 10)
						.then((hashedPassword) => {
							const user = new User({
								email,
								username,
								password: hashedPassword,
							});

							user
								.save()
								.then((result) =>
									res
										.status(201)
										.send({ message: "User registered successfully!" })
								)
								.catch((error) => res.status(500).send({ error }));
						})
						.catch((error) => {
							return res.status(500).send({
								error: "Unable to hash password",
							});
						});
				}
			})
			.catch((error) => {
				return res.status(500).send({ error });
			});
	} catch (error) {
		return res.status(500).send(error);
	}
}

// Send register Mail

// Log in user
async function loginUser(req, res) {
	const { email, password } = req.body;
	try {
		User.findOne({ email })
			.then((user) => {
				bcrypt
					.compare(password, user.password)
					.then((passwordCheck) => {
						if (!passwordCheck)
							return res.status(400).send({ error: "Don't have password" });

						// create jwt token

						const token = jwt.sign(
							{
								userId: user._id,
								email: user.email,
							},
							process.env.JWT_SECRET,
							{ expiresIn: "24h" }
						);

						return res.status(200).send({
							message: "Login successful...!",
							email: user.email,
							token,
						});
					})
					.catch((error) => {
						return res.status(400).send({ error: "Password does not match" });
					});
			})
			.catch((error) => {
				return res.status(404).send({ error: "Email not registered" });
			});
	} catch (error) {
		return res.status(500).send({ error });
	}
}

// Generate OTP
async function generateOTP(req, res) {
	req.app.locals.OTP = otpGenerator.generate(6, {
		lowerCaseAlphabets: false,
		upperCaseAlphabets: false,
		specialChars: false,
	});

	return res.status(201).send({ code: req.app.locals.OTP });
}

// Verify OTP
async function verifyOTP(req, res) {
	const { code } = req.query;
	if (parseInt(req.app.locals.OTP) === parseInt(code)) {
		req.app.locals.OTP = null;
		req.app.locals.resetSession = true;
		return res.status(201).send({ msg: "Verified Successfully" });
	}

	return res.status(400).send({ error: "Invalid OTP" });
}

// Create reset session
async function createResetSession(req, res) {
	if (req.app.locals.resetSession) {
		req.app.locals.resetSession = false;
		return res.status(201).send({ message: "Access granted" });
	}

	return res.status(440).send({ error: "Session expired" });
}

// Reset password
async function resetPassword(req, res) {
	try {
		if (!req.app.locals.resetSession)
			return res.status(440).send({ error: "Session expired" });
		const { email, password } = req.body;
		try {
			User.findOne({ email })
				.then((user) => {
					bcrypt
						.hash(password, 10)
						.then((hashedPassword) => {
							User.updateOne(
								{ email: user.email },
								{ password: hashedPassword },
								function (err, data) {
									if (err) throw err;
									return res.status(201).send({ message: "Record updated" });
								}
							);
						})
						.catch((error) => {
							res.status(500).send({ error: "Unable to hash password" });
						});
				})
				.catch((error) => {
					return res
						.status(404)
						.send({ error: "No account registred under that email" });
				});
		} catch (error) {
			return res.status(500).send({ error });
		}
	} catch (error) {
		return res.status(401).send({ error });
	}
}

module.exports = {
	registerUser,
	loginUser,
	verifyUser,
	generateOTP,
	verifyOTP,
	createResetSession,
	resetPassword,
};
