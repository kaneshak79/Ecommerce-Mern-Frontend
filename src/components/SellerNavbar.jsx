


// export default SellerNavbar;



import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SellerNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white flex items-center">
      {/* Links */}
      <div className="flex w-full">
        <Link className="px-4 py-3 hover:bg-gray-700 transition" to="/seller/dashboard">Dashboard</Link>
        <Link className="px-4 py-3 hover:bg-gray-700 transition" to="/seller/products">Products</Link>
        <Link className="px-4 py-3 hover:bg-gray-700 transition" to="/seller/orders">Orders</Link>
        <Link className="px-4 py-3 hover:bg-gray-700 transition" to="/seller/store">Store</Link>
        <Link className="px-4 py-3 hover:bg-gray-700 transition" to="/seller/sales">Sales</Link>
        <Link className="px-4 py-3 hover:bg-gray-700 transition" to="/seller/profile">Profile</Link>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="bg-gray-500 hover:bg-gray-700 px-4 py-2 rounded-r transition rounded mr-2"
      >
        Logout
      </button>
    </nav>
  );
};

export default SellerNavbar;
