import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";
import { toast } from "react-toastify";

// get projects by uid
export const getProjects = async () => {
	try {
		const q = query(collection(db, "projects"));
		const response = await getDocs(q);
		const projects = response.docs.map((document) => document.data());
		return projects;
	} catch (error) {
		toast.error("Error fetching projects");
	}
};
