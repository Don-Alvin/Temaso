import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth, db } from "../apis/firebase";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

export const logInUser = async (email, password) => {
	try {
		signInWithEmailAndPassword(auth, email, password);
		toast.success("Login successful");
	} catch (error) {
		toast.error(error);
	}
};

export const registerUser = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, "users"), {
			uid: user.uid,
			name,
			authProvider: "local",
			email,
		});
		toast.success("User registered successfully");
	} catch (error) {
		toast.error(error.message);
	}
};

export const logout = () => {
	signOut(auth);
};
