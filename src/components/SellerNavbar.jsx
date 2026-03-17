// src/components/SellerNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const SellerNavbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/seller/dashboard">Dashboard</Link>
      <Link to="/seller/products">Products</Link>
      <Link to="/seller/orders">Orders</Link>
      <Link to="/seller/store">Store</Link>
      <Link to="/seller/sales">Sales</Link>
      <Link to="/seller/profile">Profile</Link>
    </div>
  );
};

export default SellerNavbar;