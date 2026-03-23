// // // // // src/components/SellerNavbar.jsx
// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // const SellerNavbar = () => {
// // // //   return (
// // // //     <div className="bg-gray-800 text-white p-4 flex gap-4">
// // // //       <Link to="/seller/dashboard">Dashboard</Link>
// // // //       <Link to="/seller/products">Products</Link>
// // // //       <Link to="/seller/orders">Orders</Link>
// // // //       <Link to="/seller/store">Store</Link>
// // // //       <Link to="/seller/sales">Sales</Link>
// // // //       <Link to="/seller/profile">Profile</Link>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SellerNavbar;


// // // import React from "react";
// // // import { Link, useNavigate } from "react-router-dom";

// // // const SellerNavbar = () => {
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token"); // remove auth token
// // //     localStorage.removeItem("user");  // remove user info
// // //     navigate("/login");                // redirect to login page
// // //   };

// // //   return (
// // //     <div className="bg-gray-800 text-white p-4 flex gap-4 items-center">
// // //       <Link to="/seller/dashboard">Dashboard</Link>
// // //       <Link to="/seller/products">Products</Link>
// // //       <Link to="/seller/orders">Orders</Link>
// // //       <Link to="/seller/store">Store</Link>
// // //       <Link to="/seller/sales">Sales</Link>
// // //       <Link to="/seller/profile">Profile</Link>
      
// // //       {/* Logout Button */}
// // //       <button
// // //         onClick={handleLogout}
// // //         className="ml-auto bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
// // //       >
// // //         Logout
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default SellerNavbar;


// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const SellerNavbar = () => {
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("user");
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="bg-gray-900 text-white shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-16">
// //           {/* Left Links */}
// //           <div className="flex space-x-6">
// //             <Link className="hover:text-gray-300 transition" to="/seller/dashboard">Dashboard</Link>
// //             <Link className="hover:text-gray-300 transition" to="/seller/products">Products</Link>
// //             <Link className="hover:text-gray-300 transition" to="/seller/orders">Orders</Link>
// //             <Link className="hover:text-gray-300 transition" to="/seller/store">Store</Link>
// //             <Link className="hover:text-gray-300 transition" to="/seller/sales">Sales</Link>
// //             <Link className="hover:text-gray-300 transition" to="/seller/profile">Profile</Link>
// //           </div>

// //           {/* Logout Button */}
// //           <div>
// //             <button
// //               onClick={handleLogout}
// //               className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default SellerNavbar;


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const SellerNavbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo / Brand */}
//           <div className="text-xl font-bold text-gray-800">Seller Portal</div>

//           {/* Navigation Links */}
//           <div className="flex space-x-6">
//             <Link className="text-gray-700 hover:text-gray-900 font-medium transition" to="/seller/dashboard">Dashboard</Link>
//             <Link className="text-gray-700 hover:text-gray-900 font-medium transition" to="/seller/products">Products</Link>
//             <Link className="text-gray-700 hover:text-gray-900 font-medium transition" to="/seller/orders">Orders</Link>
//             <Link className="text-gray-700 hover:text-gray-900 font-medium transition" to="/seller/store">Store</Link>
//             <Link className="text-gray-700 hover:text-gray-900 font-medium transition" to="/seller/sales">Sales</Link>
//             <Link className="text-gray-700 hover:text-gray-900 font-medium transition" to="/seller/profile">Profile</Link>
//           </div>

//           {/* Logout Button */}
//           <div>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

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