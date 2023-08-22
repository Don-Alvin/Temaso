import { db } from "../apis/firebase";
import { toast } from "react-toastify";
import { collection, query } from "firebase/firestore";

export const fetchUser = async () => {
	try {
		const q = query(collection(db, "users"), where("uid", "==", user?.id));
		const doc = await getDocs(q);
		const data = doc.docs[0].data();
	} catch (error) {
		toast.error("An error occured while fetching data");
	}
};
