
//       <style>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-5px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn { animation: fadeIn 0.4s ease forwards; }
//       `}</style>
//     </div>
//   );
// };

// export default Navbar;




// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext"; // if you use cart badge

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full sticky top-0 z-50 backdrop-blur bg-white/80 shadow-sm">

      {/* Top strip */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white text-sm px-6 py-2 flex justify-between">
        <p className="font-medium tracking-wide">BOLD BRANDS. BOLDER DISCOUNTS.</p>
        <div className="hidden md:flex space-x-4 opacity-90">
          <span className="hover:underline cursor-pointer">Get App</span>
          <span className="hover:underline cursor-pointer">Store & Events</span>
          <span className="hover:underline cursor-pointer">Gift Card</span>
          <span className="hover:underline cursor-pointer">Help</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-pink-600 tracking-wide hover:scale-105 transition"
        >
          Luxora
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          <span className="hover:text-pink-500 cursor-pointer transition">Categories</span>
          <span className="hover:text-pink-500 cursor-pointer transition">Brands</span>
          <span className="hover:text-pink-500 cursor-pointer transition">Luxe</span>
          <span className="hover:text-pink-500 cursor-pointer transition">Fashion</span>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4 relative">

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-pink-400 transition">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent px-2 py-1 w-56 outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearch}
              className="text-pink-600 hover:scale-110 transition"
            >
              🔍
            </button>
          </div>

          {/* User Greeting */}
          {user ? (
            <span className="text-sm font-medium hidden md:block animate-fadeIn">
              Hi, {user.name || "User"}
            </span>
          ) : (
            <Link
              to="/login"
              className="bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-600 transition"
            >
              Sign in
            </Link>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative text-xl hover:scale-110 transition">
            🛒
            {/* {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 rounded-full">
                {cart.length} */}
              {/* </span> */}
            {/* )} */}
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="text-xl hover:scale-110 transition">
            ❤️
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setOpen(!open)} className="text-xl hover:scale-110 transition">
              👤
            </button>
            {open && (
              <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border p-2 z-50 animate-fadeIn">
                <Link to="/profile" className="block px-4 py-2 rounded hover:bg-gray-100">
                  My Profile
                </Link>
                <Link to="/orders" className="block px-4 py-2 rounded hover:bg-gray-100">
                  Orders
                </Link>
                <Link to="/wishlist" className="block px-4 py-2 rounded hover:bg-gray-100">
                  Wishlist
                </Link>
                <hr className="my-2" />
                {user && (
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 rounded text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Fade in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease forwards; }
      `}</style>
    </div>
  );
};

export default Navbar;
