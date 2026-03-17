

// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext"; // now works

// // const Navbar = () => {
// //   const { user, logout } = useAuth(); // no more error

// //   return (
// //     <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
// //       <Link to="/" className="font-bold text-xl">MyEcommerce</Link>

// //       <div className="space-x-4">
// //         {!user && (
// //           <>
// //             <Link to="/login" className="hover:text-gray-200">Login</Link>
// //             <Link to="/register" className="hover:text-gray-200">Register</Link>
// //           </>
// //         )}
// //         {user && (
// //           <>
// //             <Link to="/orders" className="hover:text-gray-200">Orders</Link>
// //             <Link to="/cart" className="hover:text-gray-200">Cart</Link>
// //             <Link to="/wishlist" className="hover:text-gray-200">Wishlist</Link>
// //             <button onClick={logout} className="hover:text-gray-200">Logout</button>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">
        <Link to="/">My E-Commerce</Link>
      </div>

      <div className="space-x-4">
        <Link to="/login" className="hover:text-gray-300">Login </Link>
        
        <Link to="/register" className="hover:text-gray-300">Register</Link>
        {/* <Link to="/register-seller" className="hover:text-gray-300">Register Seller</Link> */}
        <Link to="/cart" className="hover:text-gray-300">Cart</Link>
        <Link to="/wishlist" className="hover:text-gray-300">Wishlist</Link>
        <Link to="/orders" className="hover:text-gray-300">My Orders</Link>
      </div>
    </nav>
  );
};

export default Navbar;


