// // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // // // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // // // // // // // const Wishlist = () => {
// // // // // // // // // // // // //   const { wishlist } = useWishlist();

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
// // // // // // // // // // // // //       {wishlist.length === 0 ? (
// // // // // // // // // // // // //         <p>Your wishlist is empty.</p>
// // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // // // // // // //           {wishlist.map((product) => (
// // // // // // // // // // // // //             <ProductCard key={product._id} product={product} />
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Wishlist;

// // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // import { useWishlist } from "../../context/WishlistContext";

// // // // // // // // // // // // const Wishlist = () => {
// // // // // // // // // // // //   const { wishlistItems, removeFromWishlist } = useWishlist();

// // // // // // // // // // // //   if (wishlistItems.length === 0) return <p className="p-4">Wishlist is empty</p>;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="p-4">
// // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
// // // // // // // // // // // //       <div className="space-y-4">
// // // // // // // // // // // //         {wishlistItems.map(item => (
// // // // // // // // // // // //           <div key={item._id} className="flex justify-between border p-2 rounded">
// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <h2 className="font-semibold">{item.title}</h2>
// // // // // // // // // // // //               <p>{item.description}</p>
// // // // // // // // // // // //               <p>${item.price}</p>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               onClick={() => removeFromWishlist(item._id)}
// // // // // // // // // // // //               className="bg-red-500 text-white px-2 py-1 rounded"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               Remove
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         ))}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Wishlist;



// // // // // // // // // // // // src/pages/buyer/Wishlist.jsx
// // // // // // // // // // // import React from "react";
// // // // // // // // // // // import { useWishlist } from "../../context/WishlistContext";

// // // // // // // // // // // const Wishlist = () => {
// // // // // // // // // // //   const { wishlist, removeFromWishlist } = useWishlist();

// // // // // // // // // // //   if (wishlist.length === 0)
// // // // // // // // // // //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
// // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // //         {wishlist.map((item) => (
// // // // // // // // // // //           <div key={item._id} className="border p-4 rounded">
// // // // // // // // // // //             <img
// // // // // // // // // // //               src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // // // // //               alt={item.title}
// // // // // // // // // // //               className="h-40 w-full object-cover mb-2"
// // // // // // // // // // //             />
// // // // // // // // // // //             <h3 className="font-bold">{item.title}</h3>
// // // // // // // // // // //             <p>${item.price}</p>
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => removeFromWishlist(item._id)}
// // // // // // // // // // //               className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
// // // // // // // // // // //             >
// // // // // // // // // // //               Remove
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Wishlist;






// // // // // // // // // // // // src/pages/buyer/Wishlist.jsx
// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // // // const Wishlist = () => {
// // // // // // // // // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // // // // // // // // //   const { addToCart } = useCart();
// // // // // // // // // // //   const [totalPrice, setTotalPrice] = useState(0);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     let total = wishlist.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// // // // // // // // // // //     setTotalPrice(total);
// // // // // // // // // // //   }, [wishlist]);

// // // // // // // // // // //   const handleMoveToCart = (item) => {
// // // // // // // // // // //     addToCart({ ...item, quantity: 1 });
// // // // // // // // // // //     removeFromWishlist(item._id);
// // // // // // // // // // //     alert("Moved to cart");
// // // // // // // // // // //   };

// // // // // // // // // // //   if (wishlist.length === 0)
// // // // // // // // // // //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
// // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // // // // //           {wishlist.map((item) => (
// // // // // // // // // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // // // // // // // // //               <img
// // // // // // // // // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // // // // //                 alt={item.title}
// // // // // // // // // // //                 className="h-24 w-24 object-cover"
// // // // // // // // // // //               />
// // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // // // // // // // //                 <p>${item.price}</p>
// // // // // // // // // // //                 <div className="flex items-center gap-2 mt-2">
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     onClick={() => removeFromWishlist(item._id)}
// // // // // // // // // // //                     className="bg-red-500 text-white px-3 py-1 rounded"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Remove
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                   <button
// // // // // // // // // // //                     onClick={() => handleMoveToCart(item)}
// // // // // // // // // // //                     className="bg-green-500 text-white px-3 py-1 rounded"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Move to Cart
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Wishlist Summary */}
// // // // // // // // // // //         <div className="border p-4 rounded h-fit">
// // // // // // // // // // //           <h2 className="text-xl font-bold mb-4">Summary</h2>
// // // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // // //             <span>Total Items:</span>
// // // // // // // // // // //             <span>{wishlist.length}</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex justify-between font-bold text-lg">
// // // // // // // // // // //             <span>Total Price:</span>
// // // // // // // // // // //             <span>${totalPrice.toFixed(2)}</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Wishlist;



// // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // // const Wishlist = () => {
// // // // // // // // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // // // // // // // //   const { addToCart } = useCart();
// // // // // // // // // //   const [totalPrice, setTotalPrice] = useState(0);

// // // // // // // // // //  const backendURL = import.meta.env.VITE_BACKEND_URL || "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     let total = wishlist.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// // // // // // // // // //     setTotalPrice(total);
// // // // // // // // // //   }, [wishlist]);

// // // // // // // // // //   const handleMoveToCart = (item) => {
// // // // // // // // // //     addToCart({ ...item, quantity: 1 });
// // // // // // // // // //     removeFromWishlist(item._id);
// // // // // // // // // //     alert("Moved to cart");
// // // // // // // // // //   };

// // // // // // // // // //   if (wishlist.length === 0)
// // // // // // // // // //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="min-h-screen bg-[#f3f3f3] p-6">
// // // // // // // // // //       <div className="max-w-7xl mx-auto flex gap-6">

// // // // // // // // // //         {/* LEFT SIDEBAR */}
// // // // // // // // // //         <div className="w-64 bg-white rounded-lg p-4 h-fit">
// // // // // // // // // //           <ul className="space-y-4 text-gray-600">
// // // // // // // // // //             <li>My Profile</li>
// // // // // // // // // //             <li>My Coupons</li>
// // // // // // // // // //             <li>My Wallet</li>
// // // // // // // // // //             <li>My Orders</li>
// // // // // // // // // //             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">My Wishlist</li>
// // // // // // // // // //             <li>My Saved Payment</li>
// // // // // // // // // //             <li>Log Out</li>
// // // // // // // // // //           </ul>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* RIGHT CONTENT */}
// // // // // // // // // //         <div className="flex-1">
// // // // // // // // // //           <h1 className="text-3xl font-semibold mb-6">
// // // // // // // // // //             My Wishlist <span className="text-pink-600">({wishlist.length})</span>
// // // // // // // // // //           </h1>

// // // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // // // // // // // //             {wishlist.map((item) => (
// // // // // // // // // //               <div key={item._id} className="bg-white rounded-lg p-4 relative shadow-sm">

// // // // // // // // // //                 {/* REMOVE ICON */}
// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={() => removeFromWishlist(item._id)}
// // // // // // // // // //                   className="absolute top-2 right-2 text-gray-500 hover:text-black"
// // // // // // // // // //                 >
// // // // // // // // // //                   ✕
// // // // // // // // // //                 </button>

// // // // // // // // // //                 {/* IMAGE */}
// // // // // // // // // //                 {/* <img
// // // // // // // // // //                   src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // // // //                   alt={item.title}
// // // // // // // // // //                   className="h-40 w-full object-contain mb-4"
// // // // // // // // // //                 /> */}
// // // // // // // // // //                 <img
// // // // // // // // // //   src={
// // // // // // // // // //     item.images && item.images[0]
// // // // // // // // // //       ? item.images[0].startsWith("http")
// // // // // // // // // //         ? item.images[0]
// // // // // // // // // //         : item.images[0].startsWith("/uploads/")
// // // // // // // // // //           ? `${backendURL}${item.images[0]}`
// // // // // // // // // //           : `${backendURL}/uploads/${item.images[0]}`
// // // // // // // // // //       : "/placeholder.png"
// // // // // // // // // //   }
// // // // // // // // // //   alt={item.title}
// // // // // // // // // //   className="h-40 w-full object-contain mb-4"
// // // // // // // // // // />

// // // // // // // // // //                 {/* DETAILS */}
// // // // // // // // // //                 <h3 className="text-sm font-medium mb-2 line-clamp-2">
// // // // // // // // // //                   {item.title}
// // // // // // // // // //                 </h3>

// // // // // // // // // //                 <p className="font-semibold mb-2">₹{item.price}</p>

// // // // // // // // // //                 {/* STATIC STARS UI */}
// // // // // // // // // //                 <div className="text-sm text-gray-500 mb-4">
// // // // // // // // // //                   ★★★★☆ (1200)
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* MOVE TO BAG */}
// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={() => handleMoveToCart(item)}
// // // // // // // // // //                   className="w-full text-pink-600 font-semibold border-t pt-3"
// // // // // // // // // //                 >
// // // // // // // // // //                   MOVE TO BAG
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             ))}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Wishlist;


// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // const Wishlist = () => {
// // // // // // // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // // // // // // //   const { addToCart } = useCart();
// // // // // // // // //   const [totalPrice, setTotalPrice] = useState(0);

// // // // // // // // //   const backendURL =
// // // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com/api";

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     let total = wishlist.reduce(
// // // // // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // // // // //       0
// // // // // // // // //     );
// // // // // // // // //     setTotalPrice(total);
// // // // // // // // //   }, [wishlist]);

// // // // // // // // //   const handleMoveToCart = (item) => {
// // // // // // // // //     addToCart({ ...item, quantity: 1 });
// // // // // // // // //     removeFromWishlist(item._id);
// // // // // // // // //     alert("Moved to cart");
// // // // // // // // //   };

// // // // // // // // //   if (wishlist.length === 0)
// // // // // // // // //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-[#f3f3f3] p-6">
// // // // // // // // //       <div className="max-w-7xl mx-auto flex gap-6">
// // // // // // // // //         {/* LEFT SIDEBAR */}
// // // // // // // // //         <div className="w-64 bg-white rounded-lg p-4 h-fit">
// // // // // // // // //           <ul className="space-y-4 text-gray-600">
// // // // // // // // //             <li>My Profile</li>
// // // // // // // // //             <li>My Coupons</li>
// // // // // // // // //             <li>My Wallet</li>
// // // // // // // // //             <li>My Orders</li>
// // // // // // // // //             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">
// // // // // // // // //               My Wishlist
// // // // // // // // //             </li>
// // // // // // // // //             <li>My Saved Payment</li>
// // // // // // // // //             <li>Log Out</li>
// // // // // // // // //           </ul>
// // // // // // // // //         </div>

// // // // // // // // //         {/* RIGHT CONTENT */}
// // // // // // // // //         <div className="flex-1">
// // // // // // // // //           <h1 className="text-3xl font-semibold mb-6">
// // // // // // // // //             My Wishlist{" "}
// // // // // // // // //             <span className="text-pink-600">({wishlist.length})</span>
// // // // // // // // //           </h1>

// // // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // // // // // // //             {wishlist.map((item) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={item._id}
// // // // // // // // //                 className="bg-white rounded-lg p-4 relative shadow-sm"
// // // // // // // // //               >
// // // // // // // // //                 {/* REMOVE ICON */}
// // // // // // // // //                 <button
// // // // // // // // //                   onClick={() => removeFromWishlist(item._id)}
// // // // // // // // //                   className="absolute top-2 right-2 text-gray-500 hover:text-black"
// // // // // // // // //                 >
// // // // // // // // //                   ✕
// // // // // // // // //                 </button>

// // // // // // // // //                 {/* IMAGE */}
// // // // // // // // //                 <img
// // // // // // // // //                   src={
// // // // // // // // //                     item.images?.[0]?.startsWith("http")
// // // // // // // // //                       ? item.images[0]
// // // // // // // // //                       : `${backendURL}/uploads/${item.images?.[0]}`
// // // // // // // // //                   }
// // // // // // // // //                   alt={item.title}
// // // // // // // // //                   className="h-40 w-full object-contain mb-4"
// // // // // // // // //                 />

// // // // // // // // //                 {/* DETAILS */}
// // // // // // // // //                 <h3 className="text-sm font-medium mb-2 line-clamp-2">
// // // // // // // // //                   {item.title}
// // // // // // // // //                 </h3>
// // // // // // // // //                 <p className="font-semibold mb-2">₹{item.price}</p>

// // // // // // // // //                 <div className="text-sm text-gray-500 mb-4">★★★★☆ (1200)</div>

// // // // // // // // //                 <button
// // // // // // // // //                   onClick={() => handleMoveToCart(item)}
// // // // // // // // //                   className="w-full text-pink-600 font-semibold border-t pt-3"
// // // // // // // // //                 >
// // // // // // // // //                   MOVE TO BAG
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Wishlist;


// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // const Wishlist = () => {
// // // // // // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // // // // // //   const { addToCart } = useCart();
// // // // // // // //   const [totalPrice, setTotalPrice] = useState(0);

// // // // // // // //   const BASE_URL =
// // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // //     "https://ecommerce-mern-backend-2-t4ku.onrender.com";

// // // // // // // //   useEffect(() => {
// // // // // // // //     const total = wishlist.reduce(
// // // // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // // // //       0
// // // // // // // //     );
// // // // // // // //     setTotalPrice(total);
// // // // // // // //   }, [wishlist]);

// // // // // // // //   const handleMoveToCart = (item) => {
// // // // // // // //     addToCart({ ...item, quantity: 1 });
// // // // // // // //     removeFromWishlist(item._id);
// // // // // // // //     alert("Moved to cart");
// // // // // // // //   };

// // // // // // // //   if (wishlist.length === 0)
// // // // // // // //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-[#f3f3f3] p-6">
// // // // // // // //       <div className="max-w-7xl mx-auto flex gap-6">
// // // // // // // //         {/* LEFT SIDEBAR */}
// // // // // // // //         <div className="w-64 bg-white rounded-lg p-4 h-fit">
// // // // // // // //           <ul className="space-y-4 text-gray-600">
// // // // // // // //             <li>My Profile</li>
// // // // // // // //             <li>My Coupons</li>
// // // // // // // //             <li>My Wallet</li>
// // // // // // // //             <li>My Orders</li>
// // // // // // // //             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">
// // // // // // // //               My Wishlist
// // // // // // // //             </li>
// // // // // // // //             <li>My Saved Payment</li>
// // // // // // // //             <li>Log Out</li>
// // // // // // // //           </ul>
// // // // // // // //         </div>

// // // // // // // //         {/* RIGHT CONTENT */}
// // // // // // // //         <div className="flex-1">
// // // // // // // //           <h1 className="text-3xl font-semibold mb-6">
// // // // // // // //             My Wishlist{" "}
// // // // // // // //             <span className="text-pink-600">({wishlist.length})</span>
// // // // // // // //           </h1>

// // // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // // // // // //             {wishlist.map((item) => (
// // // // // // // //               <div
// // // // // // // //                 key={item._id}
// // // // // // // //                 className="bg-white rounded-lg p-4 relative shadow-sm"
// // // // // // // //               >
// // // // // // // //                 <button
// // // // // // // //                   onClick={() => removeFromWishlist(item._id)}
// // // // // // // //                   className="absolute top-2 right-2 text-gray-500 hover:text-black"
// // // // // // // //                 >
// // // // // // // //                   ✕
// // // // // // // //                 </button>

// // // // // // // //                 <img
// // // // // // // //                   src={
// // // // // // // //                     item.images?.[0]?.startsWith("http")
// // // // // // // //                       ? item.images[0]
// // // // // // // //                       : `${BASE_URL}/uploads/${item.images?.[0]}`
// // // // // // // //                   }
// // // // // // // //                   alt={item.title}
// // // // // // // //                   className="h-40 w-full object-contain mb-4"
// // // // // // // //                 />

// // // // // // // //                 <h3 className="text-sm font-medium mb-2 line-clamp-2">
// // // // // // // //                   {item.title}
// // // // // // // //                 </h3>

// // // // // // // //                 <p className="font-semibold mb-2">₹{item.price}</p>

// // // // // // // //                 <div className="text-sm text-gray-500 mb-4">★★★★☆ (1200)</div>

// // // // // // // //                 <button
// // // // // // // //                   onClick={() => handleMoveToCart(item)}
// // // // // // // //                   className="w-full text-pink-600 font-semibold border-t pt-3"
// // // // // // // //                 >
// // // // // // // //                   MOVE TO BAG
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Wishlist;


// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // const Wishlist = () => {
// // // // // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // // // // //   const { addToCart } = useCart();
// // // // // // //   const [totalPrice, setTotalPrice] = useState(0);

// // // // // // //   const BASE_URL =
// // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // //     "https://ecommerce-mern-backend-1.onrender.com"; // old URL style

// // // // // // //   useEffect(() => {
// // // // // // //     const total = wishlist.reduce(
// // // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // // //       0
// // // // // // //     );
// // // // // // //     setTotalPrice(total);
// // // // // // //   }, [wishlist]);

// // // // // // //   const handleMoveToCart = (item) => {
// // // // // // //     addToCart({ ...item, quantity: 1 });
// // // // // // //     removeFromWishlist(item._id);
// // // // // // //     alert("Moved to cart");
// // // // // // //   };

// // // // // // //   if (wishlist.length === 0)
// // // // // // //     return <div className="p-10 text-center mb-40 mt-20">Your wishlist is empty.</div>;

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-[#f3f3f3] p-6">
// // // // // // //       <div className="max-w-7xl mx-auto flex gap-6">

// // // // // // //         {/* LEFT SIDEBAR */}
// // // // // // //         <div className="w-64 bg-white rounded-lg p-4 h-fit">
// // // // // // //           <ul className="space-y-4 text-gray-600">
// // // // // // //             <li>My Profile</li>
// // // // // // //             <li>My Coupons</li>
// // // // // // //             <li>My Wallet</li>
// // // // // // //             <li>My Orders</li>
// // // // // // //             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">
// // // // // // //               My Wishlist
// // // // // // //             </li>
// // // // // // //             <li>My Saved Payment</li>
// // // // // // //             <li>Log Out</li>
// // // // // // //           </ul>
// // // // // // //         </div>

// // // // // // //         {/* RIGHT CONTENT */}
// // // // // // //         <div className="flex-1">
// // // // // // //           <h1 className="text-3xl font-semibold mb-6">
// // // // // // //             My Wishlist <span className="text-pink-600">({wishlist.length})</span>
// // // // // // //           </h1>

// // // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // // // // //             {wishlist.map((item) => {
// // // // // // //               const imageUrl =
// // // // // // //                 item.images && item.images[0]
// // // // // // //                   ? item.images[0].startsWith("http")
// // // // // // //                     ? item.images[0]
// // // // // // //                     : item.images[0].startsWith("/uploads/")
// // // // // // //                       ? `${BASE_URL}${item.images[0]}`
// // // // // // //                       : `${BASE_URL}/uploads/${item.images[0]}`
// // // // // // //                   : "/placeholder.png"; // fallback image

// // // // // // //               return (
// // // // // // //                 <div
// // // // // // //                   key={item._id}
// // // // // // //                   className="bg-white rounded-lg p-4 relative shadow-sm"
// // // // // // //                 >
// // // // // // //                   <button
// // // // // // //                     onClick={() => removeFromWishlist(item._id)}
// // // // // // //                     className="absolute top-2 right-2 text-gray-500 hover:text-black"
// // // // // // //                   >
// // // // // // //                     ✕
// // // // // // //                   </button>

// // // // // // //                   <img
// // // // // // //                     src={imageUrl}
// // // // // // //                     alt={item.title}
// // // // // // //                     className="h-40 w-full object-contain mb-4"
// // // // // // //                   />

// // // // // // //                   <h3 className="text-sm font-medium mb-2 line-clamp-2">
// // // // // // //                     {item.title}
// // // // // // //                   </h3>

// // // // // // //                   <p className="font-semibold mb-2">₹{item.price}</p>

// // // // // // //                   <div className="text-sm text-gray-500 mb-4">★★★★☆ (1200)</div>

// // // // // // //                   <button
// // // // // // //                     onClick={() => handleMoveToCart(item)}
// // // // // // //                     className="w-full text-pink-600 font-semibold border-t pt-3"
// // // // // // //                   >
// // // // // // //                     MOVE TO BAG
// // // // // // //                   </button>
// // // // // // //                 </div>
// // // // // // //               );
// // // // // // //             })}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Wishlist;




// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // import { useCart } from "../../context/CartContext";

// // // // // // const Wishlist = () => {
// // // // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // // // //   const { addToCart } = useCart();
// // // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // // //   const [visibleItems, setVisibleItems] = useState([]);

// // // // // //   const BASE_URL =
// // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // //   useEffect(() => {
// // // // // //     const total = wishlist.reduce(
// // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // //       0
// // // // // //     );
// // // // // //     setTotalPrice(total);
// // // // // //   }, [wishlist]);

// // // // // //   // Scroll reveal animation
// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       const elements = document.querySelectorAll(".reveal");
// // // // // //       const windowHeight = window.innerHeight;

// // // // // //       elements.forEach((el, index) => {
// // // // // //         const top = el.getBoundingClientRect().top;
// // // // // //         if (top < windowHeight - 100) {
// // // // // //           setVisibleItems((prev) =>
// // // // // //             prev.includes(index) ? prev : [...prev, index]
// // // // // //           );
// // // // // //         }
// // // // // //       });
// // // // // //     };

// // // // // //     window.addEventListener("scroll", handleScroll);
// // // // // //     handleScroll();

// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, []);

// // // // // //   const handleMoveToCart = (item) => {
// // // // // //     addToCart({ ...item, quantity: 1 });
// // // // // //     removeFromWishlist(item._id);
// // // // // //     alert("Moved to cart");
// // // // // //   };

// // // // // //   // Empty state
// // // // // //   if (wishlist.length === 0)
// // // // // //     return (
// // // // // //       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
// // // // // //         <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty 💔</h1>
// // // // // //         <p className="text-gray-500">Start adding items you love!</p>
// // // // // //       </div>
// // // // // //     );

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
// // // // // //       <div className="max-w-7xl mx-auto flex gap-6">

// // // // // //         {/* SIDEBAR */}
// // // // // //         <div className="w-64 mb-20 backdrop-blur-lg bg-white/70 border border-gray-200 rounded-2xl p-5 shadow-lg h-fit sticky top-6">
// // // // // //           <ul className="space-y-4 text-gray-700 text-sm">
// // // // // //             {[
// // // // // //               // "My Profile",
// // // // // //               // "My Coupons",
// // // // // //               // "My Wallet",
// // // // // //               // "My Orders",
// // // // // //               "My Wishlist",
// // // // // //               // "Saved Payment",
// // // // // //               // "Log Out",
// // // // // //             ].map((item, i) => (
// // // // // //               <li
// // // // // //                 key={i}
// // // // // //                 className={`cursor-pointer transition duration-300 ${
// // // // // //                   item === "My Wishlist"
// // // // // //                     ? "text-pink-600 font-semibold border-l-4 border-pink-600 pl-3"
// // // // // //                     : "hover:text-pink-500 hover:translate-x-1"
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 {item}
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         </div>

// // // // // //         {/* CONTENT */}
// // // // // //         <div className="flex-1">
// // // // // //           <h1 className="text-4xl font-bold mb-8 tracking-tight">
// // // // // //             My Wishlist{" "}
// // // // // //             <span className="text-pink-600 text-2xl">
// // // // // //               ({wishlist.length})
// // // // // //             </span>
// // // // // //           </h1>

// // // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// // // // // //             {wishlist.map((item, index) => {
// // // // // //               const imageUrl =
// // // // // //                 item.images && item.images[0]
// // // // // //                   ? item.images[0].startsWith("http")
// // // // // //                     ? item.images[0]
// // // // // //                     : item.images[0].startsWith("/uploads/")
// // // // // //                     ? `${BASE_URL}${item.images[0]}`
// // // // // //                     : `${BASE_URL}/uploads/${item.images[0]}`
// // // // // //                   : "/placeholder.png";

// // // // // //               const isVisible = visibleItems.includes(index);

// // // // // //               return (
// // // // // //                 <div
// // // // // //                   key={item._id}
// // // // // //                   className={`reveal transform transition-all duration-700 ${
// // // // // //                     isVisible
// // // // // //                       ? "opacity-100 translate-y-0"
// // // // // //                       : "opacity-0 translate-y-10"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-2xl transition duration-500 group relative">

// // // // // //                     {/* REMOVE BUTTON */}
// // // // // //                     <button
// // // // // //                       onClick={() => removeFromWishlist(item._id)}
// // // // // //                       className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg"
// // // // // //                     >
// // // // // //                       ✕
// // // // // //                     </button>

// // // // // //                     {/* IMAGE */}
// // // // // //                     <div className="h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4">
// // // // // //                       <img
// // // // // //                         src={imageUrl}
// // // // // //                         alt={item.title}
// // // // // //                         className="h-full object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-1"
// // // // // //                       />
// // // // // //                     </div>

// // // // // //                     {/* TITLE */}
// // // // // //                     <h3 className="text-sm font-semibold mb-1 line-clamp-2">
// // // // // //                       {item.title}
// // // // // //                     </h3>

// // // // // //                     {/* PRICE */}
// // // // // //                     <p className="text-lg font-bold text-gray-800 mb-1">
// // // // // //                       ₹{item.price}
// // // // // //                     </p>

// // // // // //                     {/* RATING */}
// // // // // //                     <div className="text-xs text-gray-500 mb-4">
// // // // // //                       ★★★★☆ (1200)
// // // // // //                     </div>

// // // // // //                     {/* BUTTON */}
// // // // // //                     <button
// // // // // //                       onClick={() => handleMoveToCart(item)}
// // // // // //                       className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-lg text-sm font-semibold hover:scale-105 active:scale-95 transition duration-300 shadow-md"
// // // // // //                     >
// // // // // //                       Move to Bag
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               );
// // // // // //             })}
// // // // // //           </div>

// // // // // //           {/* TOTAL */}
// // // // // //           <div className="mt-10 text-right">
// // // // // //             <h2 className="text-xl font-semibold text-gray-700">
// // // // // //               Total: <span className="text-pink-600">₹{totalPrice}</span>
// // // // // //             </h2>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Wishlist;


// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // import { useCart } from "../../context/CartContext";

// // // // // const Wishlist = () => {
// // // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // // //   const { addToCart } = useCart();

// // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // //   const [visibleItems, setVisibleItems] = useState([]);

// // // // //   const BASE_URL =
// // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // //   // ✅ FIXED TOTAL CALCULATION
// // // // //   useEffect(() => {
// // // // //     const total = wishlist.reduce((sum, item) => {
// // // // //       const price = Number(item.price) || 0;
// // // // //       const qty = Number(item.quantity) || 1;
// // // // //       return sum + price * qty;
// // // // //     }, 0);

// // // // //     setTotalPrice(total);
// // // // //   }, [wishlist]);

// // // // //   // Scroll reveal animation
// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       const elements = document.querySelectorAll(".reveal");
// // // // //       const windowHeight = window.innerHeight;

// // // // //       elements.forEach((el, index) => {
// // // // //         const top = el.getBoundingClientRect().top;
// // // // //         if (top < windowHeight - 100) {
// // // // //           setVisibleItems((prev) =>
// // // // //             prev.includes(index) ? prev : [...prev, index]
// // // // //           );
// // // // //         }
// // // // //       });
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     handleScroll();

// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   const handleMoveToCart = (item) => {
// // // // //     addToCart({ ...item, quantity: 1 });
// // // // //     removeFromWishlist(item._id);
// // // // //     alert("Moved to cart");
// // // // //   };

// // // // //   // Empty state
// // // // //   if (wishlist.length === 0) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
// // // // //         <h1 className="text-3xl font-bold mb-4">
// // // // //           Your Wishlist is Empty 💔
// // // // //         </h1>
// // // // //         <p className="text-gray-500">
// // // // //           Start adding items you love!
// // // // //         </p>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
// // // // //       <div className="max-w-7xl mx-auto flex gap-6">

// // // // //         {/* SIDEBAR */}
// // // // //         <div className="w-64 backdrop-blur-lg bg-white/70 border border-gray-200 rounded-2xl p-5 shadow-lg h-fit sticky top-6">
// // // // //           <ul className="space-y-4 text-gray-700 text-sm">
// // // // //             {[
// // // // //               "My Profile",
// // // // //               "My Coupons",
// // // // //               "My Wallet",
// // // // //               "My Orders",
// // // // //               "My Wishlist",
// // // // //               "Saved Payment",
// // // // //               "Log Out",
// // // // //             ].map((item, i) => (
// // // // //               <li
// // // // //                 key={i}
// // // // //                 className={`cursor-pointer transition duration-300 ${
// // // // //                   item === "My Wishlist"
// // // // //                     ? "text-pink-600 font-semibold border-l-4 border-pink-600 pl-3"
// // // // //                     : "hover:text-pink-500 hover:translate-x-1"
// // // // //                 }`}
// // // // //               >
// // // // //                 {item}
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {/* CONTENT */}
// // // // //         <div className="flex-1">

// // // // //           {/* HEADER */}
// // // // //           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

// // // // //             {/* LEFT */}
// // // // //             <h1 className="text-4xl font-bold tracking-tight">
// // // // //               My Wishlist{" "}
// // // // //               <span className="text-pink-600 text-2xl">
// // // // //                 ({wishlist.length})
// // // // //               </span>
// // // // //             </h1>

// // // // //             {/* CENTER SEARCH */}
// // // // //             <div className="flex-1 max-w-md">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Search in wishlist..."
// // // // //                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
// // // // //               />
// // // // //             </div>

// // // // //             {/* RIGHT INFO */}
// // // // //             <div className="bg-white shadow-md rounded-xl px-6 py-3 text-center">
// // // // //               <p className="text-sm text-gray-500">Total Items</p>
// // // // //               <p className="text-xl font-bold text-pink-600">
// // // // //                 {wishlist.length}
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* MAIN LAYOUT */}
// // // // //           <div className="flex flex-col lg:flex-row gap-8">

// // // // //             {/* PRODUCTS */}
// // // // //             <div className="flex-1">
// // // // //               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// // // // //                 {wishlist.map((item, index) => {
// // // // //                   const imageUrl =
// // // // //                     item.images && item.images[0]
// // // // //                       ? item.images[0].startsWith("http")
// // // // //                         ? item.images[0]
// // // // //                         : item.images[0].startsWith("/uploads/")
// // // // //                         ? `${BASE_URL}${item.images[0]}`
// // // // //                         : `${BASE_URL}/uploads/${item.images[0]}`
// // // // //                       : "/placeholder.png";

// // // // //                   const isVisible = visibleItems.includes(index);

// // // // //                   return (
// // // // //                     <div
// // // // //                       key={item._id}
// // // // //                       className={`reveal transform transition-all duration-700 ${
// // // // //                         isVisible
// // // // //                           ? "opacity-100 translate-y-0"
// // // // //                           : "opacity-0 translate-y-10"
// // // // //                       }`}
// // // // //                     >
// // // // //                       <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-2xl transition duration-500 group relative">

// // // // //                         {/* REMOVE */}
// // // // //                         <button
// // // // //                           onClick={() =>
// // // // //                             removeFromWishlist(item._id)
// // // // //                           }
// // // // //                           className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg"
// // // // //                         >
// // // // //                           ✕
// // // // //                         </button>

// // // // //                         {/* IMAGE */}
// // // // //                         <div className="h-48 flex items-center justify-center overflow-hidden rounded-lg mb-4">
// // // // //                           <img
// // // // //                             src={imageUrl}
// // // // //                             alt={item.title}
// // // // //                             className="h-full object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-1"
// // // // //                           />
// // // // //                         </div>

// // // // //                         {/* TITLE */}
// // // // //                         <h3 className="text-sm font-semibold mb-1 line-clamp-2">
// // // // //                           {item.title}
// // // // //                         </h3>

// // // // //                         {/* PRICE */}
// // // // //                         <p className="text-lg font-bold text-gray-800 mb-1">
// // // // //                           ₹{Number(item.price)}
// // // // //                         </p>

// // // // //                         {/* RATING */}
// // // // //                         <div className="text-xs text-gray-500 mb-4">
// // // // //                           ★★★★☆ (1200)
// // // // //                         </div>

// // // // //                         {/* BUTTON */}
// // // // //                         <button
// // // // //                           onClick={() => handleMoveToCart(item)}
// // // // //                           className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-lg text-sm font-semibold hover:scale-105 active:scale-95 transition duration-300 shadow-md"
// // // // //                         >
// // // // //                           Move to Bag
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   );
// // // // //                 })}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* SUMMARY PANEL */}
// // // // //             <div className="w-full lg:w-80">
// // // // //               <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
// // // // //                 <h2 className="text-lg font-semibold mb-4">
// // // // //                   Wishlist Summary
// // // // //                 </h2>

// // // // //                 <div className="flex justify-between mb-2 text-sm text-gray-600">
// // // // //                   <span>Items</span>
// // // // //                   <span>{wishlist.length}</span>
// // // // //                 </div>

// // // // //                 <div className="flex justify-between mb-4 text-sm text-gray-600">
// // // // //                   <span>Total Price</span>
// // // // //                   <span>₹{totalPrice}</span>
// // // // //                 </div>

// // // // //                 <hr className="mb-4" />

// // // // //                 <button className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition">
// // // // //                   Move All to Cart
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>

// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Wishlist;


// // // // import React, { useEffect, useState } from "react";
// // // // import { useWishlist } from "../../context/WishlistContext";
// // // // import { useCart } from "../../context/CartContext";

// // // // const Wishlist = () => {
// // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // //   const { addToCart } = useCart();

// // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // //   const [visibleItems, setVisibleItems] = useState([]);

// // // //   const BASE_URL =
// // // //     import.meta.env.VITE_BACKEND_URL ||
// // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // //   // ✅ SAFE PRICE HANDLER (MAIN FIX)
// // // //   const getValidPrice = (price) => {
// // // //     let p = Number(price) || 0;

// // // //     // If accidentally stored in paise (like 55000 instead of 550)
// // // //     if (p > 9999) {
// // // //       p = p / 10; // adjust if needed (/100 if your backend uses paise)
// // // //     }

// // // //     return p;
// // // //   };

// // // //   // ✅ TOTAL CALCULATION FIXED
// // // //   useEffect(() => {
// // // //     const total = wishlist.reduce((sum, item) => {
// // // //       const price = getValidPrice(item.price);
// // // //       const qty = Number(item.quantity) || 1;
// // // //       return sum + price * qty;
// // // //     }, 0);

// // // //     setTotalPrice(total);
// // // //   }, [wishlist]);

// // // //   // Scroll animation
// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const elements = document.querySelectorAll(".reveal");
// // // //       const windowHeight = window.innerHeight;

// // // //       elements.forEach((el, index) => {
// // // //         const top = el.getBoundingClientRect().top;
// // // //         if (top < windowHeight - 100) {
// // // //           setVisibleItems((prev) =>
// // // //             prev.includes(index) ? prev : [...prev, index]
// // // //           );
// // // //         }
// // // //       });
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     handleScroll();

// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   const handleMoveToCart = (item) => {
// // // //     addToCart({ ...item, quantity: 1 });
// // // //     removeFromWishlist(item._id);
// // // //     alert("Moved to cart");
// // // //   };

// // // //   // Empty state
// // // //   if (wishlist.length === 0) {
// // // //     return (
// // // //       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
// // // //         <h1 className="text-3xl font-bold mb-4">
// // // //           Your Wishlist is Empty 💔
// // // //         </h1>
// // // //         <p className="text-gray-500">
// // // //           Start adding items you love!
// // // //         </p>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
// // // //       <div className="max-w-7xl mx-auto flex gap-6">

// // // //         {/* SIDEBAR */}
// // // //         <div className="w-64 backdrop-blur-lg bg-white/70 border border-gray-200 rounded-2xl p-5 shadow-lg h-fit sticky top-6">
// // // //           <ul className="space-y-4 text-gray-700 text-sm">
// // // //             {[
// // // //               "My Profile",
// // // //               "My Coupons",
// // // //               "My Wallet",
// // // //               "My Orders",
// // // //               "My Wishlist",
// // // //               "Saved Payment",
// // // //               "Log Out",
// // // //             ].map((item, i) => (
// // // //               <li
// // // //                 key={i}
// // // //                 className={`cursor-pointer transition ${
// // // //                   item === "My Wishlist"
// // // //                     ? "text-pink-600 font-semibold border-l-4 border-pink-600 pl-3"
// // // //                     : "hover:text-pink-500 hover:translate-x-1"
// // // //                 }`}
// // // //               >
// // // //                 {item}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {/* CONTENT */}
// // // //         <div className="flex-1">

// // // //           {/* HEADER */}
// // // //           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

// // // //             <h1 className="text-4xl font-bold">
// // // //               My Wishlist{" "}
// // // //               <span className="text-pink-600 text-2xl">
// // // //                 ({wishlist.length})
// // // //               </span>
// // // //             </h1>

// // // //             <div className="flex-1 max-w-md">
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search in wishlist..."
// // // //                 className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-pink-400 outline-none"
// // // //               />
// // // //             </div>

// // // //             <div className="bg-white shadow-md rounded-xl px-6 py-3 text-center">
// // // //               <p className="text-sm text-gray-500">Total Items</p>
// // // //               <p className="text-xl font-bold text-pink-600">
// // // //                 {wishlist.length}
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* MAIN */}
// // // //           <div className="flex flex-col lg:flex-row gap-8">

// // // //             {/* PRODUCTS */}
// // // //             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// // // //               {wishlist.map((item, index) => {
// // // //                 const imageUrl =
// // // //                   item.images && item.images[0]
// // // //                     ? item.images[0].startsWith("http")
// // // //                       ? item.images[0]
// // // //                       : item.images[0].startsWith("/uploads/")
// // // //                       ? `${BASE_URL}${item.images[0]}`
// // // //                       : `${BASE_URL}/uploads/${item.images[0]}`
// // // //                     : "/placeholder.png";

// // // //                 const isVisible = visibleItems.includes(index);
// // // //                 const price = getValidPrice(item.price);

// // // //                 return (
// // // //                   <div
// // // //                     key={item._id}
// // // //                     className={`reveal transition-all duration-700 ${
// // // //                       isVisible
// // // //                         ? "opacity-100 translate-y-0"
// // // //                         : "opacity-0 translate-y-10"
// // // //                     }`}
// // // //                   >
// // // //                     <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition group relative">

// // // //                       <button
// // // //                         onClick={() => removeFromWishlist(item._id)}
// // // //                         className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
// // // //                       >
// // // //                         ✕
// // // //                       </button>

// // // //                       <div className="h-48 flex items-center justify-center mb-4">
// // // //                         <img
// // // //                           src={imageUrl}
// // // //                           alt={item.title}
// // // //                           className="h-full object-contain group-hover:scale-110 transition"
// // // //                         />
// // // //                       </div>

// // // //                       <h3 className="text-sm font-semibold mb-1 line-clamp-2">
// // // //                         {item.title}
// // // //                       </h3>

// // // //                       <p className="text-lg font-bold mb-2">
// // // //                         ₹{price.toLocaleString("en-IN")}
// // // //                       </p>

// // // //                       <button
// // // //                         onClick={() => handleMoveToCart(item)}
// // // //                         className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
// // // //                       >
// // // //                         Move to Bag
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>

// // // //             {/* SUMMARY */}
// // // //             <div className="w-full lg:w-80">
// // // //               <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
// // // //                 <h2 className="text-lg font-semibold mb-4">
// // // //                   Wishlist Summary
// // // //                 </h2>

// // // //                 <div className="flex justify-between mb-2 text-gray-600">
// // // //                   <span>Items</span>
// // // //                   <span>{wishlist.length}</span>
// // // //                 </div>

// // // //                 <div className="flex justify-between mb-4 text-gray-600">
// // // //                   <span>Total</span>
// // // //                   <span className="font-bold text-pink-600">
// // // //                     ₹{totalPrice.toLocaleString("en-IN")}
// // // //                   </span>
// // // //                 </div>

// // // //                 <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
// // // //                   Move All to Cart
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Wishlist;


// // // import React, { useEffect, useState } from "react";
// // // import { useWishlist } from "../../context/WishlistContext";
// // // import { useCart } from "../../context/CartContext";

// // // const Wishlist = () => {
// // //   const { wishlist, removeFromWishlist } = useWishlist();
// // //   const { addToCart } = useCart();

// // //   const [totalPrice, setTotalPrice] = useState(0);
// // //   const [search, setSearch] = useState("");

// // //   const BASE_URL =
// // //     import.meta.env.VITE_BACKEND_URL ||
// // //     "https://ecommerce-mern-backend-1.onrender.com";

// // //   // ✅ FIXED TOTAL (NO EXTRA ZERO ISSUE)
// // //   const getValidPrice = (price) => Number(price) || 0;

// // //   useEffect(() => {
// // //     const total = wishlist.reduce((sum, item) => {
// // //       const price = getValidPrice(item.price);
// // //       const qty = Number(item.quantity) || 1;
// // //       return sum + price * qty;
// // //     }, 0);

// // //     setTotalPrice(total);
// // //   }, [wishlist]);

// // //   const handleMoveToCart = (item) => {
// // //     addToCart({ ...item, quantity: 1 });
// // //     removeFromWishlist(item._id);
// // //     alert("Moved to cart");
// // //   };

// // //   // 🔍 SEARCH FILTER
// // //   const filteredWishlist = wishlist.filter((item) =>
// // //     item.title.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   // EMPTY STATE
// // //   if (wishlist.length === 0) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
// // //         <h1 className="text-3xl font-bold mb-4">
// // //           Your Wishlist is Empty 💔
// // //         </h1>
// // //         <p className="text-gray-500">
// // //           Start adding items you love!
// // //         </p>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
// // //       <div className="max-w-7xl mx-auto">

// // //         {/* HEADER */}
// // //         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

// // //           {/* TITLE */}
// // //           <h1 className="text-4xl font-bold">
// // //             My Wishlist{" "}
// // //             <span className="text-pink-600 text-2xl">
// // //               ({wishlist.length})
// // //             </span>
// // //           </h1>

// // //           {/* SEARCH */}
// // //           <input
// // //             type="text"
// // //             placeholder="Search in wishlist..."
// // //             value={search}
// // //             onChange={(e) => setSearch(e.target.value)}
// // //             className="px-4 py-2 rounded-lg border w-full md:w-80 focus:ring-2 focus:ring-pink-400 outline-none"
// // //           />

// // //           {/* TOTAL CARD */}
// // //           <div className="bg-white shadow-md rounded-xl px-6 py-3">
// // //             <p className="text-xs text-gray-500">Total</p>
// // //             <p className="text-lg font-bold text-pink-600">
// // //               ₹{totalPrice.toLocaleString("en-IN")}
// // //             </p>
// // //           </div>
// // //         </div>

// // //         {/* PRODUCTS */}
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// // //           {filteredWishlist.map((item) => {
// // //             const imageUrl =
// // //               item.images && item.images[0]
// // //                 ? item.images[0].startsWith("http")
// // //                   ? item.images[0]
// // //                   : item.images[0].startsWith("/uploads/")
// // //                   ? `${BASE_URL}${item.images[0]}`
// // //                   : `${BASE_URL}/uploads/${item.images[0]}`
// // //                 : "/placeholder.png";

// // //             const price = getValidPrice(item.price);

// // //             return (
// // //               <div
// // //                 key={item._id}
// // //                 className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300 group relative"
// // //               >

// // //                 {/* REMOVE BUTTON */}
// // //                 <button
// // //                   onClick={() => removeFromWishlist(item._id)}
// // //                   className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg"
// // //                 >
// // //                   ✕
// // //                 </button>

// // //                 {/* IMAGE */}
// // //                 <div className="h-48 flex items-center justify-center mb-4">
// // //                   <img
// // //                     src={imageUrl}
// // //                     alt={item.title}
// // //                     className="h-full object-contain group-hover:scale-110 transition duration-300"
// // //                   />
// // //                 </div>

// // //                 {/* TITLE */}
// // //                 <h3 className="text-sm font-semibold mb-1 line-clamp-2">
// // //                   {item.title}
// // //                 </h3>

// // //                 {/* PRICE */}
// // //                 <p className="text-lg font-bold mb-3">
// // //                   ₹{price.toLocaleString("en-IN")}
// // //                 </p>

// // //                 {/* BUTTON */}
// // //                 <button
// // //                   onClick={() => handleMoveToCart(item)}
// // //                   className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
// // //                 >
// // //                   Move to Bag
// // //                 </button>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>

// // //         {/* IF SEARCH NO RESULTS */}
// // //         {filteredWishlist.length === 0 && (
// // //           <div className="text-center mt-10 text-gray-500">
// // //             No items found 🔍
// // //           </div>
// // //         )}

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Wishlist;




// import React, { useEffect, useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import { useCart } from "../../context/CartContext";

// const Wishlist = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();
//   const { addToCart } = useCart();

//   const [totalPrice, setTotalPrice] = useState(0);
//   const [search, setSearch] = useState("");

//   const BASE_URL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-1.onrender.com";

//   // ✅ FINAL SAFE PRICE FIX
//   const getValidPrice = (price) => {
//     let p = Number(price) || 0;

//     // Fix wrongly stored values like 27000 → 2700
//     if (p > 9999) {
//       p = p / 10;
//     }

//     return p;
//   };

//   // ✅ TOTAL CALCULATION
//   useEffect(() => {
//     const total = wishlist.reduce((sum, item) => {
//       const price = getValidPrice(item.price);
//       const qty = Number(item.quantity) || 1;
//       return sum + price * qty;
//     }, 0);

//     setTotalPrice(total);
//   }, [wishlist]);

//   const handleMoveToCart = (item) => {
//     addToCart({ ...item, quantity: 1 });
//     removeFromWishlist(item._id);
//     alert("Moved to cart");
//   };

//   // 🔍 SEARCH FILTER
//   const filteredWishlist = wishlist.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // EMPTY STATE
//   if (wishlist.length === 0) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
//         <h1 className="text-3xl font-bold mb-4">
//           Your Wishlist is Empty 💔
//         </h1>
//         <p className="text-gray-500">
//           Start adding items you love!
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

//           <h1 className="text-4xl font-bold">
//             My Wishlist{" "}
//             <span className="text-pink-600 text-2xl">
//               ({wishlist.length})
//             </span>
//           </h1>

//           <input
//             type="text"
//             placeholder="Search in wishlist..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="px-4 py-2 rounded-lg border w-full md:w-80 focus:ring-2 focus:ring-pink-400 outline-none"
//           />

//           <div className="bg-white shadow-md rounded-xl px-6 py-3">
//             <p className="text-xs text-gray-500">Total</p>
//             <p className="text-lg font-bold text-pink-600">
//               ₹{totalPrice.toLocaleString("en-IN")}
//             </p>
//           </div>
//         </div>

//         {/* PRODUCTS */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {filteredWishlist.map((item) => {
//             const imageUrl =
//               item.images && item.images[0]
//                 ? item.images[0].startsWith("http")
//                   ? item.images[0]
//                   : item.images[0].startsWith("/uploads/")
//                   ? `${BASE_URL}${item.images[0]}`
//                   : `${BASE_URL}/uploads/${item.images[0]}`
//                 : "/placeholder.png";

//             const price = getValidPrice(item.price);

//             return (
//               <div
//                 key={item._id}
//                 className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300 group relative"
//               >

//                 {/* REMOVE */}
//                 <button
//                   onClick={() => removeFromWishlist(item._id)}
//                   className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg"
//                 >
//                   ✕
//                 </button>

//                 {/* IMAGE */}
//                 <div className="h-48 flex items-center justify-center mb-4">
//                   <img
//                     src={imageUrl}
//                     alt={item.title}
//                     className="h-full object-contain group-hover:scale-110 transition duration-300"
//                   />
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="text-sm font-semibold mb-1 line-clamp-2">
//                   {item.title}
//                 </h3>

//                 {/* PRICE */}
//                 <p className="text-lg font-bold mb-3">
//                   ₹{price.toLocaleString("en-IN")}
//                 </p>

//                 {/* BUTTON */}
//                 <button
//                   onClick={() => handleMoveToCart(item)}
//                   className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
//                 >
//                   Move to Bag
//                 </button>
//               </div>
//             );
//           })}
//         </div>

//         {/* NO SEARCH RESULT */}
//         {filteredWishlist.length === 0 && (
//           <div className="text-center mt-10 text-gray-500">
//             No items found 🔍
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Wishlist;




import React, { useEffect, useState } from "react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const [search, setSearch] = useState("");

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  // ✅ PRICE FIX (kept as-is)
  const getValidPrice = (price) => {
    let p = Number(price) || 0;
    if (p > 9999) {
      p = p / 10;
    }
    return p;
  };

  const handleMoveToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
    removeFromWishlist(item._id);
    alert("Moved to cart");
  };

  // 🔍 SEARCH FILTER
  const filteredWishlist = wishlist.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // EMPTY STATE
  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <h1 className="text-3xl font-bold mb-4">
          Your Wishlist is Empty 💔
        </h1>
        <p className="text-gray-500">
          Start adding items you love!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

          <h1 className="text-4xl font-bold">
            My Wishlist{" "}
            <span className="text-pink-600 text-2xl">
              ({wishlist.length})
            </span>
          </h1>

          <input
            type="text"
            placeholder="Search in wishlist..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border w-full md:w-80 focus:ring-2 focus:ring-pink-400 outline-none"
          />
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredWishlist.map((item) => {
            const imageUrl =
              item.images && item.images[0]
                ? item.images[0].startsWith("http")
                  ? item.images[0]
                  : item.images[0].startsWith("/uploads/")
                  ? `${BASE_URL}${item.images[0]}`
                  : `${BASE_URL}/uploads/${item.images[0]}`
                : "/placeholder.png";

            const price = getValidPrice(item.price);

            return (
              <div
                key={item._id}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300 group relative"
              >

                {/* REMOVE */}
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg"
                >
                  ✕
                </button>

                {/* IMAGE */}
                <div className="h-48 flex items-center justify-center mb-4">
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="h-full object-contain group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-sm font-semibold mb-1 line-clamp-2">
                  {item.title}
                </h3>

                {/* PRICE */}
                <p className="text-lg font-bold mb-3">
                  ₹{price.toLocaleString("en-IN")}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
                >
                  Move to Bag
                </button>
              </div>
            );
          })}
        </div>

        {/* NO SEARCH RESULT */}
        {filteredWishlist.length === 0 && (
          <div className="text-center mt-10 text-gray-500">
            No items found 🔍
          </div>
        )}

      </div>
    </div>
  );
};

export default Wishlist;