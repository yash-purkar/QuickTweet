import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Check for token in localstorage
  const socialToken = localStorage.getItem("socialToken")
  const [isLoggedIn, setIsLoggedIn] = useState(socialToken ? true : false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</AuthContext.Provider>
  )
}

export const UseAuth = () => useContext(AuthContext);