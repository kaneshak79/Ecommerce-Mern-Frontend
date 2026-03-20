

// // // // // // // import React from "react";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import { useAuth } from "../context/AuthContext"; // now works

// // // // // // // const Navbar = () => {
// // // // // // //   const { user, logout } = useAuth(); // no more error

// // // // // // //   return (
// // // // // // //     <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
// // // // // // //       <Link to="/" className="font-bold text-xl">MyEcommerce</Link>

// // // // // // //       <div className="space-x-4">
// // // // // // //         {!user && (
// // // // // // //           <>
// // // // // // //             <Link to="/login" className="hover:text-gray-200">Login</Link>
// // // // // // //             <Link to="/register" className="hover:text-gray-200">Register</Link>
// // // // // // //           </>
// // // // // // //         )}
// // // // // // //         {user && (
// // // // // // //           <>
// // // // // // //             <Link to="/orders" className="hover:text-gray-200">Orders</Link>
// // // // // // //             <Link to="/cart" className="hover:text-gray-200">Cart</Link>
// // // // // // //             <Link to="/wishlist" className="hover:text-gray-200">Wishlist</Link>
// // // // // // //             <button onClick={logout} className="hover:text-gray-200">Logout</button>
// // // // // // //           </>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;


// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";

// // // // // const Navbar = () => {
// // // // //   return (
// // // // //     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
// // // // //       <div className="font-bold text-xl">
// // // // //         <Link to="/">My E-Commerce</Link>
// // // // //       </div>

// // // // //       <div className="space-x-4">
// // // // //         <Link to="/login" className="hover:text-gray-300">Login </Link>
        
// // // // //         <Link to="/register" className="hover:text-gray-300">Register</Link>
// // // // //         {/* <Link to="/register-seller" className="hover:text-gray-300">Register Seller</Link> */}
// // // // //         <Link to="/cart" className="hover:text-gray-300">Cart</Link>
// // // // //         <Link to="/wishlist" className="hover:text-gray-300">Wishlist</Link>
// // // // //         <Link to="/orders" className="hover:text-gray-300">My Orders</Link>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // //new ui

// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // const Navbar = () => {
// // // //   return (
// // // //     <div className="w-full shadow-md">

// // // //       {/* 🔝 TOP STRIP */}
// // // //       <div className="bg-pink-500 text-white text-sm px-6 py-2 flex justify-between">
// // // //         <p>BOLD BRANDS. BOLDER DISCOUNTS. SHOP NOW!</p>
// // // //         <div className="hidden md:flex space-x-4">
// // // //           <span>Get App</span>
// // // //           <span>Store & Events</span>
// // // //           <span>Gift Card</span>
// // // //           <span>Help</span>
// // // //         </div>
// // // //       </div>

// // // //       {/* 🔥 MAIN NAV */}
// // // //       <nav className="bg-white px-6 py-4 flex items-center justify-between">

// // // //         {/* LOGO */}
// // // //         <Link to="/" className="text-2xl font-bold text-pink-600">
// // // //           Luxora
// // // //         </Link>

// // // //         {/* MENU */}
// // // //         <div className="hidden md:flex space-x-6 font-medium">
// // // //           <span className="hover:text-pink-500 cursor-pointer">Categories</span>
// // // //           <span className="hover:text-pink-500 cursor-pointer">Brands</span>
// // // //           <span className="hover:text-pink-500 cursor-pointer">Luxe</span>
// // // //           <span className="hover:text-pink-500 cursor-pointer">Fashion</span>
// // // //         </div>

// // // //         {/* RIGHT SIDE */}
// // // //         <div className="flex items-center space-x-4">
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search on Luxora"
// // // //             className="hidden md:block border px-3 py-1 rounded-md"
// // // //           />

// // // //           <Link to="/login" className="bg-pink-500 text-white px-4 py-1 rounded">
// // // //             Sign in
// // // //           </Link>

// // // //           <Link to="/cart">🛒</Link>
// // // //           <Link to="/wishlist">❤️</Link>
// // // //         </div>
// // // //       </nav>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Navbar;



// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";

// // // const Navbar = () => {
// // //   const [open, setOpen] = useState(false);

// // //   return (
// // //     <div className="w-full shadow-md">

// // //       {/* 🔝 TOP STRIP */}
// // //       <div className="bg-pink-500 text-white text-sm px-6 py-2 flex justify-between">
// // //         <p>BOLD BRANDS. BOLDER DISCOUNTS. SHOP NOW!</p>
// // //         <div className="hidden md:flex space-x-4">
// // //           <span>Get App</span>
// // //           <span>Store & Events</span>
// // //           <span>Gift Card</span>
// // //           <span>Help</span>
// // //         </div>
// // //       </div>

// // //       {/* 🔥 MAIN NAV */}
// // //       <nav className="bg-white px-6 py-4 flex items-center justify-between">

// // //         {/* LOGO */}
// // //         <Link to="/" className="text-2xl font-bold text-pink-600">
// // //           Luxora
// // //         </Link>

// // //         {/* MENU */}
// // //         <div className="hidden md:flex space-x-6 font-medium">
// // //           <span className="hover:text-pink-500 cursor-pointer">Categories</span>
// // //           <span className="hover:text-pink-500 cursor-pointer">Brands</span>
// // //           <span className="hover:text-pink-500 cursor-pointer">Luxe</span>
// // //           <span className="hover:text-pink-500 cursor-pointer">Fashion</span>
// // //         </div>

// // //         {/* RIGHT SIDE */}
// // //         <div className="flex items-center space-x-4 relative">
// // //           <input
// // //             type="text"
// // //             placeholder="Search on Luxora"
// // //             className="hidden md:block border px-3 py-1 rounded-md"
// // //           />

// // //           <Link to="/login" className="bg-pink-500 text-white px-4 py-1 rounded">
// // //             Sign in
// // //           </Link>

// // //           <Link to="/cart">🛒</Link>
// // //           <Link to="/wishlist">❤️</Link>

// // //           {/* 👤 PROFILE ICON */}
// // //           <div className="relative">
// // //             <button
// // //               onClick={() => setOpen(!open)}
// // //               className="text-xl"
// // //             >
// // //               👤
// // //             </button>

// // //             {/* DROPDOWN */}
// // //             {open && (
// // //               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
// // //                 <Link
// // //                   to="/profile"
// // //                   className="block px-4 py-2 hover:bg-gray-100"
// // //                 >
// // //                   My Profile
// // //                 </Link>
// // //                 <Link
// // //                   to="/orders"
// // //                   className="block px-4 py-2 hover:bg-gray-100"
// // //                 >
// // //                   My Orders
// // //                 </Link>
// // //                 <Link
// // //                   to="/wishlist"
// // //                   className="block px-4 py-2 hover:bg-gray-100"
// // //                 >
// // //                   Wishlist
// // //                 </Link>
// // //                 <Link
// // //                   to="/payment"
// // //                   className="block px-4 py-2 hover:bg-gray-100"
// // //                 >
// // //                   Payment
// // //                 </Link>
// // //                 <Link
// // //                   to="/checkout"
// // //                   className="block px-4 py-2 hover:bg-gray-100"
// // //                 >
// // //                   Checkout
// // //                 </Link>
// // //                 <Link
// // //                   to="/logout"
// // //                   className="block px-4 py-2 text-red-500 hover:bg-gray-100"
// // //                 >
// // //                   Logout
// // //                 </Link>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </div>
// // //   );
// // // };

// // // export default Navbar;




// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //   const [open, setOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   // Trigger search when user presses Enter
// //   const handleSearch = (e) => {
// //     if (e.key === "Enter" && searchTerm.trim() !== "") {
// //       // Navigate to search page with query param
// //       navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
// //       // Optional: clear input
// //       // setSearchTerm("");
// //     }
// //   };

// //   return (
// //     <div className="w-full shadow-md">
// //       {/* 🔝 TOP STRIP */}
// //       <div className="bg-pink-500 text-white text-sm px-6 py-2 flex justify-between">
// //         <p>BOLD BRANDS. BOLDER DISCOUNTS. SHOP NOW!</p>
// //         <div className="hidden md:flex space-x-4">
// //           <span>Get App</span>
// //           <span>Store & Events</span>
// //           <span>Gift Card</span>
// //           <span>Help</span>
// //         </div>
// //       </div>

// //       {/* 🔥 MAIN NAV */}
// //       <nav className="bg-white px-6 py-4 flex items-center justify-between">
// //         {/* LOGO */}
// //         <Link to="/" className="text-2xl font-bold text-pink-600">
// //           Luxora
// //         </Link>

// //         {/* MENU */}
// //         <div className="hidden md:flex space-x-6 font-medium">
// //           <span className="hover:text-pink-500 cursor-pointer">Categories</span>
// //           <span className="hover:text-pink-500 cursor-pointer">Brands</span>
// //           <span className="hover:text-pink-500 cursor-pointer">Luxe</span>
// //           <span className="hover:text-pink-500 cursor-pointer">Fashion</span>
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="flex items-center space-x-4 relative">
// //           {/* ✅ SEARCH INPUT */}
// //           <input
// //             type="text"
// //             placeholder="Search on Luxora"
// //             className="hidden md:block border px-3 py-1 rounded-md"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             onKeyDown={handleSearch} // triggers search on Enter
// //           />

// //           <Link to="/login" className="bg-pink-500 text-white px-4 py-1 rounded">
// //             Sign in
// //           </Link>

// //           <Link to="/cart">🛒</Link>
// //           <Link to="/wishlist">❤️</Link>

// //           {/* 👤 PROFILE ICON */}
// //           <div className="relative">
// //             <button onClick={() => setOpen(!open)} className="text-xl">
// //               👤
// //             </button>

// //             {open && (
// //               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
// //                 <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
// //                   My Profile
// //                 </Link>
// //                 <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
// //                   My Orders
// //                 </Link>
// //                 <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100">
// //                   Wishlist
// //                 </Link>
// //                 <Link to="/payment" className="block px-4 py-2 hover:bg-gray-100">
// //                   Payment
// //                 </Link>
// //                 <Link to="/checkout" className="block px-4 py-2 hover:bg-gray-100">
// //                   Checkout
// //                 </Link>
// //                 <Link to="/logout" className="block px-4 py-2 text-red-500 hover:bg-gray-100">
// //                   Logout
// //                 </Link>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // Trigger search when user presses Enter
//   const handleSearch = (e) => {
//     if (e.key === "Enter" && searchTerm.trim() !== "") {
//       // Encode query to handle spaces and special characters
//       navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
//     }
//   };

//   return (
//     <div className="w-full shadow-md">
//       {/* Top strip */}
//       <div className="bg-pink-500 text-white text-sm px-6 py-2 flex justify-between">
//         <p>BOLD BRANDS. BOLDER DISCOUNTS. SHOP NOW!</p>
//         <div className="hidden md:flex space-x-4">
//           <span>Get App</span>
//           <span>Store & Events</span>
//           <span>Gift Card</span>
//           <span>Help</span>
//         </div>
//       </div>

//       {/* Main nav */}
//       <nav className="bg-white px-6 py-4 flex items-center justify-between">
//         <Link to="/" className="text-2xl font-bold text-pink-600">
//           Luxora
//         </Link>

//         <div className="hidden md:flex space-x-6 font-medium">
//           <span className="hover:text-pink-500 cursor-pointer">Categories</span>
//           <span className="hover:text-pink-500 cursor-pointer">Brands</span>
//           <span className="hover:text-pink-500 cursor-pointer">Luxe</span>
//           <span className="hover:text-pink-500 cursor-pointer">Fashion</span>
//         </div>

//         <div className="flex items-center space-x-4 relative">
//           {/* ✅ SEARCH INPUT */}
//           <input
//             type="text"
//             placeholder="Search on Luxora"
//             className="hidden md:block border px-3 py-1 rounded-md"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             onKeyDown={handleSearch}
//           />

//           <Link to="/login" className="bg-pink-500 text-white px-4 py-1 rounded">
//             Sign in
//           </Link>
//           <Link to="/cart">🛒</Link>
//           <Link to="/wishlist">❤️</Link>

//           <div className="relative">
//             <button onClick={() => setOpen(!open)} className="text-xl">
//               👤
//             </button>
//             {open && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
//                 <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
//                 <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
//                 <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100">Wishlist</Link>
//                 <Link to="/payment" className="block px-4 py-2 hover:bg-gray-100">Payment</Link>
//                 <Link to="/checkout" className="block px-4 py-2 hover:bg-gray-100">Checkout</Link>
//                 <Link to="/logout" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
    <div className="w-full shadow-md">
      {/* Top strip */}
      <div className="bg-pink-500 text-white text-sm px-6 py-2 flex justify-between">
        <p>BOLD BRANDS. BOLDER DISCOUNTS. SHOP NOW!</p>
        <div className="hidden md:flex space-x-4">
          <span>Get App</span>
          <span>Store & Events</span>
          <span>Gift Card</span>
          <span>Help</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Luxora
        </Link>

        <div className="hidden md:flex space-x-6 font-medium">
          <span className="hover:text-pink-500 cursor-pointer">Categories</span>
          <span className="hover:text-pink-500 cursor-pointer">Brands</span>
          <span className="hover:text-pink-500 cursor-pointer">Luxe</span>
          <span className="hover:text-pink-500 cursor-pointer">Fashion</span>
        </div>

        <div className="flex items-center space-x-4 relative">
          {/* Search input + button */}
          <div className="flex border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search on Luxora"
              className="px-3 py-1 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearch}
              className="bg-pink-500 text-white px-3 py-1"
            >
              🔍
            </button>
          </div>

          <Link to="/login" className="bg-pink-500 text-white px-4 py-1 rounded">
            Sign in
          </Link>
          <Link to="/cart">🛒</Link>
          <Link to="/wishlist">❤️</Link>

          <div className="relative">
            <button onClick={() => setOpen(!open)} className="text-xl">
              👤
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                {/* <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link> */}
                <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100">Wishlist</Link>
                <Link to="/payment" className="block px-4 py-2 hover:bg-gray-100">Payment</Link>
                <Link to="/checkout" className="block px-4 py-2 hover:bg-gray-100">Checkout</Link>
                <Link to="/logout" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;