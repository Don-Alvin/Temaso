import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_APP_DOMAIN_SERVER;

// register user
export async function registerUser(credentials) {
	try {
		const {
			data: { message },
			status,
		} = await axios.post("/register", credentials);

		let { email } = credentials;

		// if (status === 201) {
		// 	await axios.post("api/registerMail", {
		// 		username,
		// 		userEmail: email,
		// 		text: message,
		// 	});
		// }

		return Promise.resolve(message);
	} catch (error) {
		return Promise.reject({ error });
	}
}

export async function loginUser({ email, password }) {
	try {
		if (email) {
			const { data } = await axios.post("/login", { email, password });
			return Promise.resolve({ data });
		}
	} catch (error) {
		return Promise.reject({ error: "Password do not match" });
	}
}

// Generate OTP
export async function generateOTP(email) {
	try {
		const {
			data: { code },
			status,
		} = await axios.get("/api/generateotp", { params: { email } });

		if (status === 201) {
			let {
				data: { email },
			} = await getUser({ email });
			let text = `Your password recovery OTP is ${code}. Verify and recover your password`;
			await axios.post("/registerMail", {
				username,
				userEmail: email,
				text,
				subject: "Password recovery OTP",
			});
		}

		return Promise.resolve();
	} catch (error) {
		return Promise.reject({ error });
	}
}

// Verify OTP
export async function verifyOTP({ email, code }) {
	try {
		const { data, status } = await axios.get("/verifyotp", {
			params: { email, code },
		});
		return { data, status };
	} catch (error) {
		return Promise.reject({ error });
	}
}

// reset password

export async function resetPassword({ email, password }) {
	try {
		const { data, status } = await axios.put("/resetpassword", {
			email,
			password,
		});
		return Promise.resolve({ data, status });
	} catch (error) {
		return Promise.reject({ error });
	}
}
