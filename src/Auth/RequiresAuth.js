import React from "react";
import { UseAuth } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

// It checks if isloggedIn is true or not if yes redirect to the page accordingly otherwise to login page.

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = UseAuth();
  const location = useLocation();
  return (
    <>
      {isLoggedIn ? (
        <>{children}</>
      ) : (
        <Navigate to="/login" state={{ from: location }} />
      )}
    </>
  );
};
