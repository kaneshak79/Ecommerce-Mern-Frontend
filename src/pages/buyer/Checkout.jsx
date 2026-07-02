
//   );
// };

// export default Checkout;


// src/pages/buyer/Checkout.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart(); // clearCart added
  const [user, setUser] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState("");

  const shippingCharge = 50;

  // Only calculate totals if cart has items
  const totalPrice = cart.length
    ? cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    : 0;

  const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
  const finalTotal = totalPrice - discount + shippingCharge;

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/auth/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleContinue = (selectedAddress) => {
    if (!selectedAddress || selectedAddress === "No address added") {
      toast.warning("Please select or add address");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Cart is empty");
      return;
    }

    navigate("/payment", {
      state: {
        address: selectedAddress,
        cart,
        total: finalTotal,
      },
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen p-6">
      {/* Step Indicator */}
      <div className="flex justify-center gap-10 mb-8 text-sm font-semibold">
        <span className="text-pink-600">✔ Sign Up</span>
        <span className="text-pink-600">✔ Address</span>
        <span className="text-gray-400">Payment</span>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">Choose Address</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT: Address Selection */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Add New Address Card */}
          <div
            onClick={() => setShowForm(true)}
            className="border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-gray-50 transition transform hover:scale-105 hover:shadow-lg duration-300"
          >
            <span className="text-4xl text-pink-600">+</span>
            <p className="text-pink-600 mt-2 font-semibold">Add New Address</p>
          </div>

          {/* New Address Form */}
          {showForm && (
            <div className="bg-white p-5 rounded-2xl shadow-lg col-span-1 sm:col-span-2 transition-all duration-300">
              <h3 className="font-bold mb-3 text-gray-800">New Address</h3>
              <input
                placeholder="Enter full address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow shadow-sm"
              />
              <button
                onClick={() => handleContinue(newAddress)}
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Deliver Here
              </button>
            </div>
          )}

          {/* Profile Address Card */}
          <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-[1.03] duration-300">
            <h3 className="font-bold text-lg text-gray-800">{user.name || "No Name"}</h3>
            <p className="text-gray-600 text-sm mt-1">{user.address || "No address added"}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <button
              onClick={() => handleContinue(user.address)}
              className="mt-3 bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700 hover:scale-105 transition-transform duration-200"
            >
              Deliver here
            </button>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="w-full md:w-80 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Bag ({cart.length} items)</h3>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-4">Cart is empty</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between mb-2 text-sm">
                  <span>{item.title} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <hr className="my-3" />

              <div className="flex justify-between text-sm text-gray-700">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-green-600">
                <span>Discount</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-700">
                <span>Shipping</span>
                <span>₹{shippingCharge.toFixed(2)}</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-bold text-lg text-gray-800">
                <span>Total</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>

              <button
                onClick={() => handleContinue(user.address)}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Continue to Payment
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
