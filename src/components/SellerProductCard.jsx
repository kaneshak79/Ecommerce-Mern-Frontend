import React from "react";
import { useNavigate } from "react-router-dom";

const SellerProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded hover:shadow-lg flex flex-col">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-48 w-full object-cover mb-2 cursor-pointer"
        onClick={() => navigate(`/seller/product/${product._id}`)}
      />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="text-gray-600 text-sm">{product.description.slice(0, 50)}...</p>
      <p className="font-bold mt-1">₹{product.price}</p>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => navigate(`/seller/edit-product/${product._id}`)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SellerProductCard;