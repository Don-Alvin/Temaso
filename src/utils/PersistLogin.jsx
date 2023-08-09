import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setAuth} = useAuth();

  useEffect(() => {
    const verifyTokens = () => {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        setAuth({
          user, 
          refreshToken,
        });
      }

      setIsLoading(false);
    };

    verifyTokens();
  }, [setAuth]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
