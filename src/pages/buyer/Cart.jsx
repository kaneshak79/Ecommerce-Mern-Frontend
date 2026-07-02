
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;


import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const shippingCharge = 50;
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const discountValue = total > 1000 ? total * 0.1 : 0;

    setTotalPrice(total);
    setDiscount(discountValue);
    setFinalTotal(total - discountValue + shippingCharge);
  }, [cart]);

  const handleQuantityChange = (productId, qty) => {
    updateQuantity(productId, Number(qty));
  };

  if (cart.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-medium text-gray-500">
        🛒 Your cart is empty
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-8">
        Your Bag <span className="text-gray-500 text-lg">({cart.length})</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* LEFT - ITEMS */}
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => {
            const imageUrl =
              item.images && item.images[0]
                ? item.images[0].startsWith("http")
                  ? item.images[0]
                  : item.images[0].startsWith("/uploads/")
                  ? `${BASE_URL}${item.images[0]}`
                  : `${BASE_URL}/uploads/${item.images[0]}`
                : item.image || "/placeholder.png";

            return (
              <div
                key={item._id}
                onClick={() => navigate(`/product/${item._id}`)}
                className="group bg-white rounded-2xl p-5 flex gap-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {/* IMAGE */}
                <img
                  src={imageUrl}
                  alt={item.title}
                  className="w-46 h-46 object-cover rounded-xl group-hover:scale-105 transition duration-300"
                />

                {/* DETAILS */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 group-hover:text-pink-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 mt-1">₹{item.price}</p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center justify-between mt-4">
                    
                    {/* QTY */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Qty</span>
                      <select
                        value={item.quantity}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          handleQuantityChange(item._id, e.target.value)
                        }
                        className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
                      >
                        {[...Array(10).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromCart(item._id);
                      }}
                      className="text-sm text-red-500 hover:text-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT - PRICE PANEL */}
        <div className="sticky top-6 h-fit space-y-4">
          
          <div className="bg-white rounded-2xl p-5 shadow-md">
            <h2 className="font-semibold text-lg mb-4">Price Details</h2>

            <div className="flex justify-between text-sm mb-2">
              <span>Bag Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between text-sm text-green-600 mb-2">
              <span>Discount</span>
              <span>-₹{discount}</span>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <span>Shipping</span>
              <span>₹{shippingCharge}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>

          {/* CHECKOUT */}
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

