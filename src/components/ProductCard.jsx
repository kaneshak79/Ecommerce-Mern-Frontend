
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;



import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart, addToFavorites } = useCart(); // use addToFavorites if you want cart context favorites
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const backendURL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  const imageUrl =
    product.images && product.images[0]
      ? product.images[0].startsWith("http")
        ? product.images[0]
        : product.images[0].startsWith("/uploads/")
        ? `${backendURL}${product.images[0]}`
        : `${backendURL}/uploads/${product.images[0]}`
      : "/placeholder.png";

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden 
      hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative overflow-hidden cursor-pointer"
           onClick={() => navigate(`/product/${product._id}`)}>
        <img
          src={imageUrl}
          alt={product.title}
          className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Wishlist floating button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent navigating when clicking wishlist
            addToWishlist(product);
          }}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-pink-100 transition"
        >
          ❤️
        </button>
      </div>

      {/* CONTENT */}
      <div 
      onClick={() => navigate(`/product/${product._id}`)}
      className="p-4 flex flex-col justify-between h-[180px]">
      {/* <div
  onClick={() => navigate(`/product/${product._id}`)}
  className="group bg-white rounded-2xl shadow-md overflow-hidden 
  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
> */}
        <h3
          className="font-semibold text-lg line-clamp-1 cursor-pointer"
          // onClick={() => navigate(`/product/${product._id}`)}
          // onClick={() => navigate(`/product/${product._id}`, { replace: true })}
         
        >
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

        {/* PRICE & ADD TO CART */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">₹{product.price}</span>
{/* 
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-600 text-white px-3 py-1 rounded-lg 
              hover:bg-pink-700 active:scale-95 transition-all duration-200"
          >
            Add
          </button> */}

          <button
  onClick={(e) => {
    e.stopPropagation(); // 🛑 stops navigation
    addToCart(product);
  }}
  className="bg-pink-600 text-white px-3 py-1 rounded-lg 
    hover:bg-pink-700 active:scale-95 transition-all duration-200"
>
  Add
</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

//crt above
