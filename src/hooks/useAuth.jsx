import { useContext } from "react";
import AuthContext from "../Features/Auth/AuthContext";

const useAuth = () => {
	return useContext(AuthContext);
};

export default useAuth;
