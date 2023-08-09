import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ children }) => {
	const { user } = useAuth();

	return user ? children : <Navigate to={"/login"} />;
};

export default RequireAuth;
