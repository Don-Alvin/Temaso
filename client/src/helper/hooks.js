import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_DOMAIN_SERVER;

// register user
export async function registerUser(credentials) {
	try {
		const {
			data: { msg },
			status,
		} = await axios.post("/register");

		let { email } = credentials;

		if (status === 201) {
			await axios.post("api");
		}
	} catch (error) {
		return Promise.reject({ error });
	}
}
