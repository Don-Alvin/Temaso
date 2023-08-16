import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { auth } from "../../apis/firebase";

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null)

	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
	// 		console.log(currentUser);
	// 		setUser(currentUser)
	// 	})
	// 	return unsubscribe()
	// }, [])

	return (
		<AuthContext.Provider value={{user, setUser}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext
