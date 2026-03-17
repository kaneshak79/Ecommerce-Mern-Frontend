import React from "react";

const WishlistCard = ({ product, onRemove, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow-md flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-cover" />
      <h3 className="font-bold mt-2">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          Add to Cart
        </button>
        <button
          onClick={() => onRemove(product._id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;