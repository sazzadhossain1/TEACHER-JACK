import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/context/UseContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const getToken = localStorage.getItem("token");

  const { user } = useContext(AuthContext);
  console.log(user);

  if (getToken) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
