// src/routes/SellerRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const SellerRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Not seller
  if (user?.role !== "seller") {
    return <Navigate to="/" />;
  }

  return children;
};

export default SellerRoute;