import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = () => {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      toast.error("You have to login first", {
        id: "aaa",
      });
    }
  });

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
