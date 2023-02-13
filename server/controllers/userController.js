const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({ path: "./.env" });

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

module.exports = { registerUser, loginUser };
