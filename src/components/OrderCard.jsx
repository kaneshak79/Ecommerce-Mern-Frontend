

// export default OrderCard;


// src/components/OrderCard.jsx
import React from "react";

const backendURL =
  import.meta.env.VITE_BACKEND_URL ||
  "https://ecommerce-mern-backend-1.onrender.com";

const OrderCard = ({ order }) => {
  // Helper to get full image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder.png"; // fallback placeholder
    if (imagePath.startsWith("http")) return imagePath; // absolute URL
    // concatenate backendURL and image path safely
    return `${backendURL.replace(/\/$/, "")}/${imagePath.replace(/^\/+/, "")}`;
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-4">
      <h3 className="font-semibold text-lg">Order ID: {order._id}</h3>
      <p className="text-gray-500">Status: {order.status}</p>
      <p className="text-gray-700 font-medium">Total: ₹{order.totalAmount}</p>

      {/* Products inside this order */}
      <div className="mt-2 space-y-2">
        {order.products.map((item) => {
          const product = item.product;
          const imageUrl = getImageUrl(product.images?.[0]);

          return (
            <div
              key={item._id}
              className="flex items-center gap-4 border rounded p-2 hover:shadow-md transition-all"
            >
              <img
                src={imageUrl}
                alt={product.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-gray-700">
                  ₹{product.price} x {item.quantity}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderCard;
