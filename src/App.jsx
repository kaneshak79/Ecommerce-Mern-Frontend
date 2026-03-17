// // import React from "react";
// // import { Routes, Route } from "react-router-dom";

// // // Pages
// // import Home from "./pages/buyer/Home";
// // import ProductDetails from "./pages/buyer/ProductDetails";
// // import Cart from "./pages/buyer/Cart";
// // import Wishlist from "./pages/buyer/Wishlist";
// // import MyOrders from "./pages/buyer/MyOrders";
// // import Profile from "./pages/buyer/Profile";
// // import Checkout from "./pages/buyer/Checkout";
// // import Payment from "./pages/buyer/Payment";
// // import OrderConfirmation from "./pages/buyer/OrderConfirmation";
// // import Login from "./pages/auth/Login";
// // // import LoginSeller from "./pages/auth/Loginseller";
// // import Register from "./pages/auth/Register";
// // // import RegisterSeller from "./pages/auth/RegisterSeller";
// // import ForgotPassword from "./pages/auth/ForgotPassword";
// // import ResetPassword from "./pages/auth/ResetPassword";

// // // Seller Pages
// // import Dashboard from "./pages/seller/Dashboard";
// // import AddProduct from "./pages/seller/AddProduct";
// // import SellerProducts from "./pages/seller/SellerProducts";
// // import SellerOrders from "./pages/seller/SellerOrders";
// // import SalesReport from "./pages/seller/SalesReport";
// // import StoreManager from "./pages/seller/StoreManager";
// // import SellerProfile from "./pages/seller/SellerProfile";

// // // // Payment Pages
// // // import Checkout from "./pages/Payment/Checkout";
// // // import PaymentSuccess from "./pages/Payment/PaymentSuccess";

// // // Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // const App = () => {
// //   return (
// //     <div>
// //       <Navbar /> {/* Always visible */}

// //       <Routes>
// //         {/* Auth */}
// //         <Route path="/login" element={<Login />} />
// //         {/* <Route path="/login-seller" element={<LoginSeller />} /> */}
// //         <Route path="/register" element={<Register />} />
// //         {/* <Route path="/register-seller" element={<RegisterSeller />} /> */}
// //         <Route path="/forgot-password" element={<ForgotPassword />} />
// //         {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
// //           <Route path="/reset-password/:token" element={<ResetPassword />} />

// //         {/* Buyer */}
// //         <Route path="/" element={<Home />} />
// //         <Route path="/home" element={<Home />} />
// //         <Route path="/product/:id" element={<ProductDetails />} />
// //         <Route path="/cart" element={<Cart />} />
// //         <Route path="/wishlist" element={<Wishlist />} />
// //         <Route path="/orders" element={<MyOrders />} />
// //         <Route path="/profile" element={<Profile />} />
// //         <Route path="/checkout" element={<Checkout />} />
// //         <Route path="/payment" element={<Payment />}/>
// //         <Route path="/order-confirmation" element={<OrderConfirmation />}/>
        

// //         {/* Seller */}
// //         <Route path="/seller/dashboard" element={<Dashboard />} />
// //         <Route path="/seller/add-product" element={<AddProduct />} />
// //         <Route path="/seller/products" element={<SellerProducts />} />
// //         <Route path="/seller/orders" element={<SellerOrders />} />
// //         <Route path="/seller/sales-report" element={<SalesReport />} />
// //         <Route path="/seller/store-manager" element={<StoreManager />} />
// //         <Route path="/seller/profile" element={<SellerProfile />} />

// //         {/* Payment */}
// //         {/* <Route path="/checkout" element={<Checkout />} />
// //         <Route path="/payment-success" element={<PaymentSuccess />} /> */}
// //       </Routes>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;


// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // // Pages
// // // import Login from "./pages/auth/Login";
// // // import Register from "./pages/auth/Register";
// // // import Home from "./pages/buyer/Home";
// // // import Cart from "./pages/buyer/Cart";
// // // import Wishlist from "./pages/buyer/Wishlist";
// // // import MyOrders from "./pages/buyer/MyOrders";
// // // import Profile from "./pages/buyer/Profile";

// // // // Seller pages
// // // import Dashboard from "./pages/seller/Dashboard";
// // // import AddProduct from "./pages/seller/AddProduct";

// // // function App() {
// // //   const userRole = localStorage.getItem("userRole"); // buyer or seller

// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         {/* Root route `/` redirects based on login */}
// // //         <Route
// // //           path="/"
// // //           element={
// // //             userRole === "buyer" ? (
// // //               <Home />
// // //             ) : userRole === "seller" ? (
// // //               <Dashboard />
// // //             ) : (
// // //               <Navigate to="/login" />
// // //             )
// // //           }
// // //         />

// // //         {/* Auth routes */}
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/register" element={<Register />} />

// // //         {/* Buyer routes */}
// // //         {userRole === "buyer" && (
// // //           <>
// // //             <Route path="/cart" element={<Cart />} />
// // //             <Route path="/wishlist" element={<Wishlist />} />
// // //             <Route path="/my-orders" element={<MyOrders />} />
// // //             <Route path="/profile" element={<Profile />} />
// // //           </>
// // //         )}

// // //         {/* Seller routes */}
// // //         {userRole === "seller" && (
// // //           <>
// // //             <Route path="/seller/dashboard" element={<Dashboard />} />
// // //             <Route path="/seller/add-product" element={<AddProduct />} />
// // //           </>
// // //         )}

// // //         {/* fallback */}
// // //         <Route path="*" element={<div>Page Not Found</div>} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }

// // // export default App;



// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Buyer Pages
// import Home from "./pages/buyer/Home";
// import Cart from "./pages/buyer/Cart";
// import Wishlist from "./pages/buyer/Wishlist";
// import ProductDetails from "./pages/buyer/ProductDetails";
// import Checkout from "./pages/buyer/Checkout";
// import Payment from "./pages/buyer/Payment";
// import OrderConfirmation from "./pages/buyer/OrderConfirmation";

// // Auth Pages
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";

// // Seller Pages
// import Dashboard from "./pages/seller/Dashboard";
// import SellerProducts from "./pages/seller/SellerProducts";
// import AddProduct from "./pages/seller/AddProduct";
// import EditProduct from "./pages/seller/EditProduct";
// import SellerOrders from "./pages/seller/SellerOrders";
// import StoreManager from "./pages/seller/StoreManager";
// import SalesReport from "./pages/seller/SalesReport";
// import SellerProfile from "./pages/seller/SellerProfile";

// // Protected Route
// import SellerRoute from "./pages/seller/SellerRoute";

// function App() {
//   return (
//     <div>
//      <Navbar />
  
//       <Routes>

//         {/* ---------- PUBLIC ROUTES ---------- */}
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/wishlist" element={<Wishlist />} />

//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/order-confirmation" element={<OrderConfirmation />} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* ---------- SELLER ROUTES ---------- */}
//         <Route
//           path="/seller/dashboard"
//           element={
//             <SellerRoute>
//               <Dashboard />
//             </SellerRoute>
//           }
//         />

//         <Route
//           path="/seller/products"
//           element={
//             <SellerRoute>
//               <SellerProducts />
//             </SellerRoute>
//           }
//         />

//         <Route
//           path="/seller/add-product"
//           element={
//             <SellerRoute>
//               <AddProduct />
//             </SellerRoute>
//           }
//         />

//         <Route
//           path="/seller/edit-product/:id"
//           element={
//             <SellerRoute>
//               <EditProduct />
//             </SellerRoute>
//           }
//         />

//         <Route
//           path="/seller/orders"
//           element={
//             <SellerRoute>
//               <SellerOrders />
//             </SellerRoute>
//           }
//         />

//         <Route
//           path="/seller/store"
//           element={
//             <SellerRoute>
//               <StoreManager />
//             </SellerRoute>
//           }
//         />

//         <Route
//           path="/seller/sales"
//           element={
//             <SellerRoute>
//               <SalesReport />
//             </SellerRoute>
//           }
//         />

//         <Route
//           path="/seller/profile"
//           element={
//             <SellerRoute>
//               <SellerProfile />
//             </SellerRoute>
//           }
//         />

//       </Routes>
//       <Footer />
//       </div>
    
//   );
// }

// export default App;


// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import SellerNavbar from "./components/SellerNavbar";
import Footer from "./components/Footer";

// Buyer Pages
import Home from "./pages/buyer/Home";
import Cart from "./pages/buyer/Cart";
import Wishlist from "./pages/buyer/Wishlist";
import ProductDetails from "./pages/buyer/ProductDetails";
import Checkout from "./pages/buyer/Checkout";
import Payment from "./pages/buyer/Payment";
import OrderConfirmation from "./pages/buyer/OrderConfirmation";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Seller Pages
import Dashboard from "./pages/seller/Dashboard";
import SellerProducts from "./pages/seller/SellerProducts";
import AddProduct from "./pages/seller/AddProduct";
import EditProduct from "./pages/seller/EditProduct";
import SellerOrders from "./pages/seller/SellerOrders";
import StoreManager from "./pages/seller/StoreManager";
import SalesReport from "./pages/seller/SalesReport";
import SellerProfile from "./pages/seller/SellerProfile";

import SellerRoute from "./pages/seller/SellerRoute";

function App() {
  const location = useLocation();

  // ✅ check if route is seller
  const isSellerRoute = location.pathname.startsWith("/seller");

  return (
    <div>
      {/* ✅ SWITCH NAVBAR */}
      {isSellerRoute ? <SellerNavbar /> : <Navbar />}

      <Routes>
        {/* ---------- BUYER ROUTES ---------- */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ---------- SELLER ROUTES ---------- */}
        <Route
          path="/seller/dashboard"
          element={
            <SellerRoute>
              <Dashboard />
            </SellerRoute>
          }
        />

        <Route
          path="/seller/products"
          element={
            <SellerRoute>
              <SellerProducts />
            </SellerRoute>
          }
        />

        <Route
          path="/seller/add-product"
          element={
            <SellerRoute>
              <AddProduct />
            </SellerRoute>
          }
        />

        <Route
          path="/seller/edit-product/:id"
          element={
            <SellerRoute>
              <EditProduct />
            </SellerRoute>
          }
        />

        <Route
          path="/seller/orders"
          element={
            <SellerRoute>
              <SellerOrders />
            </SellerRoute>
          }
        />

        <Route
          path="/seller/store"
          element={
            <SellerRoute>
              <StoreManager />
            </SellerRoute>
          }
        />

        <Route
          path="/seller/sales"
          element={
            <SellerRoute>
              <SalesReport />
            </SellerRoute>
          }
        />

        <Route
          path="/seller/profile"
          element={
            <SellerRoute>
              <SellerProfile />
            </SellerRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;