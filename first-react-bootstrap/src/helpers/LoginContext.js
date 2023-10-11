import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null);

const defaultLoginState = false;

export const LoginContextProvider = ({ children }) => {
  const loginState = sessionStorage.getItem('isLogIn') === 'true';
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(loginState || defaultLoginState);

  const setLoginUser = (username) => {
    sessionStorage.setItem("isLogIn", true);
    sessionStorage.setItem("user", username);
    setIsUserLoggedIn(true);
  };

  const logout = () => {
    sessionStorage.removeItem("isLogIn");
    sessionStorage.removeItem("user");
    setIsUserLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isUserLoggedIn, setLoginUser, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);

