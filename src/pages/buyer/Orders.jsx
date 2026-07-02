

//               <div className="flex justify-between items-center border-t pt-3 mt-3">
//                 <p className="font-semibold text-gray-700">Total</p>
//                 <p className="font-bold text-pink-600">{order.totalAmount.toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;





// src/pages/buyer/Orders.jsx
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const backendURL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder.png";
    if (imagePath.startsWith("http")) return imagePath;
    const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
    return `${backendURL}/${cleanPath}`;
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/orders/myorders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const normalized = res.data.map((order) => ({
        ...order,
        products: order.products.map((p) => ({
          ...p,
          status: p.status || "pending",
        })),
      }));

      setOrders(normalized);
    } catch (err) {
      console.error("Fetch orders error:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 2000);
    return () => clearInterval(interval);
  }, []);

  const getLatestStatus = (productId, defaultStatus) => {
    const updates = JSON.parse(localStorage.getItem("orderStatusUpdates") || "{}");
    return updates[productId] || defaultStatus;
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg animate-pulse">No orders yet</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-gray-700">Order ID: {order._id}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              {order.products.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => navigate(`/product/${item.product?._id}`)}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={getImageUrl(item.product?.images?.[0])}
                      alt={item.product?.title || "Product removed"}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {item.product?.title || "Product removed"}
                      </p>
                      <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      <p
                        className={`text-sm font-medium ${
                          getLatestStatus(item._id || item.productId, item.status) === "delivered"
                            ? "text-green-600"
                            : getLatestStatus(item._id || item.productId, item.status) === "shipped"
                            ? "text-blue-600"
                            : "text-yellow-600"
                        }`}
                      >
                        Status: {getLatestStatus(item._id || item.productId, item.status)}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-700">
                    ₹{(item.product?.price * item.quantity || 0).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="flex justify-between items-center border-t pt-3 mt-3">
                <p className="font-semibold text-gray-700">Total</p>
                <p className="font-bold text-pink-600">{order.totalAmount.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
