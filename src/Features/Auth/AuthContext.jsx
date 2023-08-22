import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../apis/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({})

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
			console.log(user);
		})

		return () => {
			unsubscribe()
		}
	},[])

	return (
		<AuthContext.Provider value={{user}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext
