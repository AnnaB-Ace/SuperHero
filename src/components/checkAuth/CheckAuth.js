import React from "react";
import { useSelector } from "react-redux";
import Login from "../../pages/login/Login";

const CheckAuth = ({ children }) => {
  const state = useSelector((state) => state.auth.login);
  const { token } = state;

  if (!token) return <Login />;

  return <>{children}</>;
};

export default CheckAuth;
