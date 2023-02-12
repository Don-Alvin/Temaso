const User = require("../models/userModel");
const bcrypt = require("bcrypt");

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

module.exports = { registerUser };
