import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [shippingAddress, setShippingAddress] = useState("");
  const navigate = useNavigate();

  // Fetch cart items
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await axios.get("/cart");
        setCartItems(data.products);
        const totalAmount = data.products.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
        setTotal(totalAmount);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCart();
  }, []);

  // Handle payment via Razorpay
  const handlePayment = async () => {
    try {
      // 1️⃣ Create payment order in backend
      const { data: razorpayOrder } = await axios.post("/payment/create-order", {
        amount: total,
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Razorpay key
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        order_id: razorpayOrder.id,
        name: "E-Commerce Shop",
        description: "Purchase",
        handler: async function (response) {
          // 2️⃣ Verify payment
          await axios.post("/payment/verify", response);

          // 3️⃣ Create order in backend
          await axios.post("/orders", { shippingAddress });

          navigate("/payment/success");
        },
        prefill: {
          email: "", // Optional: fill buyer info
        },
        theme: { color: "#4f46e5" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">Shipping Address:</label>
        <textarea
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          className="w-full border p-2 rounded"
          rows={3}
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Order Summary:</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.product._id} className="flex justify-between mb-1">
              <span>{item.product.title} x {item.quantity}</span>
              <span>₹{item.product.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-bold mt-2">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Pay ₹{total}
      </button>
    </div>
  );
};

export default Checkout;