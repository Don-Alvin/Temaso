const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "Please add a name"],
		},

		email: {
			type: String,
			required: [true, "Please enter your email"],
			unique: [true, "An account is already registered with that email"],
			trim: true,
			match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"Please enter a valid email",
			],
		},

		password: {
			type: String,
			required: [true, "Please add a valid password"],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
