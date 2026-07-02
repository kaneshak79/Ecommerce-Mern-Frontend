
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
import Profile from "./pages/buyer/Profile";
import Orders from "./pages/buyer/Orders"; // ✅ added
import SearchResults from "./pages/buyer/SearchResults";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

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

// ✅ Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  // Show SellerNavbar for seller routes
  const isSellerRoute = location.pathname.startsWith("/seller");

  return (
    <div>
      <ToastContainer position="top-right" autoClose={2000} />
        {/* <ToastContainer
        position="top-right"
        autoClose={2000}       // toast disappears after 2s
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnHover
        draggable
        theme="colored"        // colorful toast for success/error
      /> */}
      {isSellerRoute ? <SellerNavbar /> : <Navbar />}

      <Routes>
        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />

        {/* ---------- PROTECTED BUYER ROUTES ---------- */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-confirmation"
          element={
            <ProtectedRoute>
              <OrderConfirmation />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

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
