
//       {/* TRUST BADGE */}
//       <p className="text-xs text-gray-400 mt-4 text-center">
//         🔒 100% Secure Payments
//       </p>
//     </div>
//   </div>
// </div>
  
//   );
// };

// export default Payment;



// src/pages/buyer/Payment.jsx
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // ================= ADDRESS =================
  const rawAddress = location.state?.address;

  const address =
    typeof rawAddress === "string"
      ? {
          street: rawAddress,
          city: "N/A",
          state: "N/A",
          zip: "000000",
          country: "India",
        }
      : {
          street: rawAddress?.street || rawAddress?.addressLine || "N/A",
          city: rawAddress?.city || "N/A",
          state: rawAddress?.state || "N/A",
          zip: rawAddress?.zip || rawAddress?.pincode || "000000",
          country: rawAddress?.country || "India",
        };

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Only calculate totals if cart has items
  const totalPrice = cart.length
    ? cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  const shipping = 50;
  const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
  const finalTotal = totalPrice - discount + shipping;

  // ================= LOAD RAZORPAY =================
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ================= PLACE ORDER =================
  const handlePlaceOrder = async () => {
    if (!address?.street) {
      toast.warning("Please provide a complete shipping address.");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Cart is empty");
      return;
    }

    try {
      const res = await axios.post(
        "/orders",
        { shippingAddress: address, paymentMethod },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      clearCart();
      toast.success("Order placed successfully 🎉");

      navigate("/order-confirmation", {
        state: {
          orderId: res.data._id,
          products: res.data.products,
          address: res.data.shippingAddress,
          paymentMethod,
          finalTotal: res.data.totalAmount,
        },
      });
    } catch (err) {
      console.error("ORDER ERROR:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Order failed");
    }
  };

  // ================= RAZORPAY =================
  const handleRazorpay = async () => {
    if (!address?.street) {
      toast.warning("Please provide a complete shipping address.");
      return;
    }

    const loaded = await loadRazorpayScript();
    if (!loaded) {
      toast.error("Razorpay SDK failed to load.");
      return;
    }

    try {
      const { data } = await axios.post("/payment/create-order", {
        amount: finalTotal,
      });

      const options = {
        key: "rzp_test_SRSsFRoRS13yKv",
        amount: data.amount,
        currency: "INR",
        name: "Luxora",
        description: "Order Payment",
        order_id: data.id,
        handler: async function (response) {
          try {
            const verifyRes = await axios.post("/payment/verify", response);
            if (verifyRes.data.success) {
              await handlePlaceOrder();
            } else {
              toast.error("Payment verification failed");
            }
          } catch (err) {
            console.error(err);
            toast.error("Verification error");
          }
        },
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
          paylater: false,
        },
        config: {
          display: {
            blocks: {
              upi: { name: "UPI", instruments: [{ method: "upi" }] },
            },
            sequence: ["block.upi", "block.card", "block.netbanking"],
            preferences: { show_default_blocks: true },
          },
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "6383252495",
        },
        theme: { color: "#F472B6" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      toast.error("Payment failed ❌");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Choose Payment Method
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* LEFT SECTION */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-5">Payment Options</h2>

          <div className="space-y-4">
            {[
              { id: "cod", label: "Cash on Delivery", icon: "💵" },
              { id: "razorpay", label: "UPI / Card / Wallet", icon: "💳" },
            ].map((method) => (
              <div
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300
                  ${
                    paymentMethod === method.id
                      ? "border-pink-500 bg-pink-50 shadow-md scale-105"
                      : "hover:bg-gray-50 hover:shadow hover:scale-[1.02]"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{method.icon}</span>
                  <span className="font-medium">{method.label}</span>
                </div>
                <input type="radio" checked={paymentMethod === method.id} readOnly />
              </div>
            ))}
          </div>

          {/* ADDRESS */}
          <div className="mt-8 border-t pt-5">
            <h3 className="font-semibold text-lg mb-2">Delivery Address</h3>
            <p className="text-gray-600 bg-gray-50 p-3 rounded">
              {rawAddress || "No address selected"}
            </p>
          </div>

          {/* BUTTON */}
          {cart.length > 0 && (
            <button
              onClick={paymentMethod === "razorpay" ? handleRazorpay : handlePlaceOrder}
              className="mt-8 w-full bg-pink-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-pink-600 transition transform hover:scale-105 shadow-md"
            >
              {paymentMethod === "razorpay" ? "Proceed to Pay 💳" : "Place Order 🛍️"}
            </button>
          )}
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-6">
          <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

          {cart.length === 0 ? (
            <p className="text-gray-400 text-center py-4">Cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item._id} className="flex justify-between text-sm mb-3">
                  <span className="text-gray-700">{item.title} x {item.quantity}</span>
                  <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <div className="border-t pt-4 mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg font-bold mt-2">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">🔒 100% Secure Payments</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
