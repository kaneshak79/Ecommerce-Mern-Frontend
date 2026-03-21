// // // // // // // import React from "react";
// // // // // // // import { useCart } from "../context/CartContext";
// // // // // // // import { useWishlist } from "../context/WishlistContext";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const ProductCard = ({ product }) => {
// // // // // // //   const { addToCart } = useCart();
// // // // // // //   const { addToWishlist } = useWishlist();
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const handleAddToCart = () => {
// // // // // // //     addToCart(product);
// // // // // // //     navigate("/cart"); // go to cart page
// // // // // // //   };

// // // // // // //   const handleAddToWishlist = () => {
// // // // // // //     addToWishlist(product);
// // // // // // //     navigate("/wishlist"); // go to wishlist page
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="border p-4 rounded shadow">
// // // // // // //       <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2"/>
// // // // // // //       <h3 className="font-semibold">{product.title}</h3>
// // // // // // //       <p className="text-gray-600">{product.description}</p>
// // // // // // //       <p className="font-bold">${product.price}</p>
// // // // // // //       <div className="flex space-x-2 mt-2">
// // // // // // //         <button
// // // // // // //           onClick={handleAddToCart}
// // // // // // //           className="px-2 py-1 bg-green-500 text-white rounded"
// // // // // // //         >
// // // // // // //           Add to Cart
// // // // // // //         </button>
// // // // // // //         <button
// // // // // // //           onClick={handleAddToWishlist}
// // // // // // //           className="px-2 py-1 bg-yellow-500 text-white rounded"
// // // // // // //         >
// // // // // // //           Wishlist
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProductCard;



// // // // // // // // import React from "react";
// // // // // // // // import { useCart } from "../context/CartContext";
// // // // // // // // import { useWishlist } from "../context/WishlistContext";

// // // // // // // // const ProductCard = ({ product }) => {
    

// // // // // // // //   return (
// // // // // // // //     <div className="border p-4 rounded">
// // // // // // // //       <img src={product.image} alt={product.title} className="h-40 w-full object-cover" />
     
// // // // // // // //       <h3 className="font-bold">{product.title}</h3>
// // // // // // // //       <p>{product.description}</p>
// // // // // // // //       <p className="font-semibold">${product.price}</p>

// // // // // // // //       <div className="mt-2 flex space-x-2">
// // // // // // // //         <button
// // // // // // // //           onClick={() => addToCart(product)}
// // // // // // // //           className="bg-green-500 text-white px-3 py-1 rounded"
// // // // // // // //         >
// // // // // // // //           Add to Cart
// // // // // // // //         </button>

// // // // // // // //         <button
// // // // // // // //           onClick={() => addToWishlist(product)}
// // // // // // // //           className="bg-pink-500 text-white px-3 py-1 rounded"
// // // // // // // //         >
// // // // // // // //           Wishlist
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProductCard;


// // // // // // // // import React from "react";
// // // // // // // // import { useCart } from "../context/CartContext";
// // // // // // // // import { useWishlist } from "../context/WishlistContext";

// // // // // // // // const ProductCard = ({ product }) => {
// // // // // // // //   const { addToCart } = useCart(); // call the hook
// // // // // // // //   const { addToWishlist } = useWishlist(); // call the hook

// // // // // // // //   // Handle image URL
// // // // // // // //   const imageUrl =
// // // // // // // //     product.image && product.image.startsWith("http")
// // // // // // // //       ? product.image
// // // // // // // //       : product.image
// // // // // // // //       ? `http://localhost:5000/${product.image}` // your backend URL
// // // // // // // //       : "https://via.placeholder.com/300x200?text=No+Image";

// // // // // // // //   return (
// // // // // // // //     <div className="border p-4 rounded shadow hover:shadow-lg transition">
// // // // // // // //       <img
// // // // // // // //         src={imageUrl}
// // // // // // // //         alt={product.title || "Product Image"}
// // // // // // // //         className="h-40 w-full object-cover mb-2"
// // // // // // // //       />

// // // // // // // //       <h3 className="font-bold">{product.title || "Untitled"}</h3>
// // // // // // // //       <p className="text-gray-600">{product.description || "No description"}</p>
// // // // // // // //       <p className="font-semibold mt-1">${product.price || "0"}</p>

// // // // // // // //       <div className="mt-3 flex space-x-2">
// // // // // // // //         <button
// // // // // // // //           onClick={() => addToCart(product)}
// // // // // // // //           className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// // // // // // // //         >
// // // // // // // //           Add to Cart
// // // // // // // //         </button>

// // // // // // // //         <button
// // // // // // // //           onClick={() => addToWishlist(product)}
// // // // // // // //           className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
// // // // // // // //         >
// // // // // // // //           Wishlist
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProductCard;


// // // // // // // // import React, { useContext } from "react";
// // // // // // // // import { CartContext } from "../context/CartContext";
// // // // // // // // import { WishlistContext } from "../context/WishlistContext";

// // // // // // // // const ProductCard = ({ product }) => {
// // // // // // // //   const { addToCart } = useContext(CartContext);
// // // // // // // //   const { addToWishlist } = useContext(WishlistContext);

// // // // // // // //   // Construct full image URL
// // // // // // // //   const imageUrl = product.image
// // // // // // // //     ? product.image.startsWith("http")
// // // // // // // //       ? product.image
// // // // // // // //       : `http://localhost:5000/${product.image}` // backend URL
// // // // // // // //     : "https://via.placeholder.com/300x200?text=No+Image";

// // // // // // // //   return (
// // // // // // // //     <div className="border p-4 rounded shadow hover:shadow-lg transition">
// // // // // // // //       <img
// // // // // // // //         src={imageUrl}
// // // // // // // //         alt={product.title}
// // // // // // // //         className="h-40 w-full object-cover mb-3 rounded"
// // // // // // // //       />

// // // // // // // //       <h3 className="font-bold">{product.title}</h3>
// // // // // // // //       <p className="text-sm text-gray-600">{product.description}</p>
// // // // // // // //       <p className="font-semibold mt-2">${product.price}</p>

// // // // // // // //       <div className="mt-3 flex space-x-2">
// // // // // // // //         <button
// // // // // // // //           onClick={() => addToCart(product)}
// // // // // // // //           className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// // // // // // // //         >
// // // // // // // //           Add to Cart
// // // // // // // //         </button>

// // // // // // // //         <button
// // // // // // // //           onClick={() => addToWishlist(product)}
// // // // // // // //           className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
// // // // // // // //         >
// // // // // // // //           Wishlist
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProductCard;


// // // // // import React from "react";
// // // // // import { useCart } from "../context/CartContext";
// // // // // import { useWishlist } from "../context/WishlistContext";

// // // // // const ProductCard = ({ product }) => {
// // // // //   const { addToCart } = useCart();
// // // // //   const { addToWishlist } = useWishlist();

// // // // //   return (
// // // // //     <div className="border p-4 rounded">
// // // // //       <img
// // // // //         src={product.image?.startsWith("http") ? product.image : `http://localhost:5000/${product.image}`}
// // // // //         alt={product.title}
// // // // //         className="h-40 w-full object-cover mb-2"
// // // // //       />
// // // // //       <h3 className="font-bold">{product.title}</h3>
// // // // //       <p className="text-sm mb-1">{product.description}</p>
// // // // //       <p className="font-semibold mb-2">${product.price}</p>

// // // // //       <div className="flex space-x-2">
// // // // //         <button
// // // // //           onClick={() => addToCart(product)}
// // // // //           className="bg-green-500 text-white px-3 py-1 rounded"
// // // // //         >
// // // // //           Add to Cart
// // // // //         </button>

// // // // //         <button
// // // // //           onClick={() => addToWishlist(product)}
// // // // //           class
// // // // //                     ="bg-pink-500 text-white px-3 py-1 rounded"
// // // // //         >
// // // // //           Wishlist
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductCard;





// // // // src/components/ProductCard.jsx
// // // import React from "react";
// // // import { useCart } from "../context/CartContext";
// // // import { useWishlist } from "../context/WishlistContext";

// // // const ProductCard = ({ product }) => {
// // //   const { addToCart } = useCart();
// // //   const { addToWishlist } = useWishlist();

// // //   // Use backend URL dynamically
// // //   const backendURL = import.meta.env.VITE_BACKEND_URL || "https://ecommerce-mern-backend-1.onrender.com";

// // //   const imageUrl =
// // //     product.image?.startsWith("http")
// // //       ? product.image
// // //       : `${backendURL}/uploads/${product.image}`;

// // //   return (
// // //     <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
// // //       <img
// // //         src={imageUrl}
// // //         alt={product.title}
// // //         className="h-40 w-full object-cover mb-2 rounded"
// // //       />
// // //       <h3 className="font-bold text-lg">{product.title}</h3>
// // //       <p className="text-sm mb-1">{product.description}</p>
// // //       <p className="font-semibold mb-2">${product.price}</p>

// // //       <div className="flex space-x-2">
// // //         <button
// // //           onClick={() => addToCart(product)}
// // //           className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// // //         >
// // //           Add to Cart
// // //         </button>
// // //         <button
// // //           onClick={() => addToWishlist(product)}
// // //           className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
// // //         >
// // //           Wishlist
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductCard;





// // import React from "react";
// // import { useCart } from "../context/CartContext";
// // import { useWishlist } from "../context/WishlistContext";

// // const ProductCard = ({ product }) => {
// //   const { addToCart } = useCart();
// //   const { addToWishlist } = useWishlist();

// //   const backendURL = import.meta.env.VITE_BACKEND_URL || "https://ecommerce-mern-backend-1.onrender.com";

// //   const imageUrl = product.image
// //     ? product.image.startsWith("http")
// //       ? product.image
// //       : product.image.startsWith("/uploads/")
// //         ? `${backendURL}${product.image}`
// //         : `${backendURL}/uploads/${product.image}`
// //     : "/placeholder.png"; // fallback image

// //   return (
// //     <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
// //       <img
// //         src={imageUrl}
// //         alt={product.title}
// //         className="h-40 w-full object-cover mb-2 rounded"
// //       />
// //       <h3 className="font-bold text-lg">{product.title}</h3>
// //       <p className="text-sm mb-1">{product.description}</p>
// //       <p className="font-semibold mb-2">${product.price}</p>

// //       <div className="flex space-x-2">
// //         <button
// //           onClick={() => addToCart(product)}
// //           className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
// //         >
// //           Add to Cart
// //         </button>
// //         <button
// //           onClick={() => addToWishlist(product)}
// //           className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
// //         >
// //           Wishlist
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCard;




// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();

//   const backendURL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-1.onrender.com";

//   // Use images[0] from your schema
//   const imageUrl =
//     product.images && product.images[0]
//       ? product.images[0].startsWith("http")
//         ? product.images[0]
//         : product.images[0].startsWith("/uploads/")
//         ? `${backendURL}${product.images[0]}`
//         : `${backendURL}/uploads/${product.images[0]}`
//       : "/placeholder.png"; // fallback image

//   return (
//     <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
//       <img
//         src={imageUrl}
//         alt={product.title}
//         className="h-40 w-full object-cover mb-2 rounded"
//       />
//       <h3 className="font-bold text-lg">{product.title}</h3>
//       <p className="text-sm mb-1">{product.description}</p>
//       <p className="font-semibold mb-2">${product.price}</p>

//       <div className="flex space-x-2">
//         <button
//           onClick={() => addToCart(product)}
//           className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//         >
//           Add to Cart
//         </button>
//         <button
//           onClick={() => addToWishlist(product)}
//           className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
//         >
//           Wishlist
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;






import React from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

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

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Item added to cart ✅"); // ⭐ FEEDBACK FIX
  };

  const handleWishlist = () => {
    addToWishlist(product);
    toast.info("Added to wishlist ❤️"); // ⭐ OPTIONAL BONUS
  };

  return (
    // <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
    <div className="border p-4 rounded shadow 
  hover:shadow-xl hover:-translate-y-2 
  transition-all duration-300 ease-in-out">
      <img
        src={imageUrl}
        alt={product.title}
        className="h-40 w-full object-cover mb-2 rounded"
      />
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p className="text-sm mb-1">{product.description}</p>
      <p className="font-semibold mb-2">₹{product.price}</p>

      <div className="flex space-x-2">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Add to Cart
        </button>

        <button
          onClick={handleWishlist}
          className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;