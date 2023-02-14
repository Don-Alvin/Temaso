import { toast } from "react-hot-toast";

// Validate login page
export async function loginValidation(values) {
	const errors = emailVerify({}, values);
	passwordVerify(errors, values);
	return errors;
}

// Validate register page
export async function registerValidation(values) {
	const errors = usernameVerify({}, values);
	emailVerify(errors, values);
	passwordVerify(errors, values);
	return errors;
}

// Validate email
function emailVerify(error = {}, values) {
	if (!values.email) {
		error.email = toast.error("Email required");
	} else if (values.email.includes(" ")) {
		error.email = toast.error("Please enter a valid email");
	} else if (
		!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			values.email
		)
	) {
		error.email = toast.error("Invalid email address");
	}

	return error;
}

// Validate Password
function passwordVerify(error = {}, values) {
	if (!values.password) {
		error.password = toast.error("Password required");
	} else if (values.password.includes(" ")) {
		error.password = toast.error("Wrong password");
	}

	return error;
}

// Validate username
function usernameVerify(error = {}, values) {
	if (!values.username) {
		error.username = toast.error("Please enter your username");
	}
	return error;
}

// Validate confirm password
