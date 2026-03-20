// // // // // // import React from "react";
// // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // const Wishlist = () => {
// // // // // //   const { wishlist } = useWishlist();

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
// // // // // //       {wishlist.length === 0 ? (
// // // // // //         <p>Your wishlist is empty.</p>
// // // // // //       ) : (
// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // //           {wishlist.map((product) => (
// // // // // //             <ProductCard key={product._id} product={product} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Wishlist;

// // // // // import React from "react";
// // // // // import { useWishlist } from "../../context/WishlistContext";

// // // // // const Wishlist = () => {
// // // // //   const { wishlistItems, removeFromWishlist } = useWishlist();

// // // // //   if (wishlistItems.length === 0) return <p className="p-4">Wishlist is empty</p>;

// // // // //   return (
// // // // //     <div className="p-4">
// // // // //       <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
// // // // //       <div className="space-y-4">
// // // // //         {wishlistItems.map(item => (
// // // // //           <div key={item._id} className="flex justify-between border p-2 rounded">
// // // // //             <div>
// // // // //               <h2 className="font-semibold">{item.title}</h2>
// // // // //               <p>{item.description}</p>
// // // // //               <p>${item.price}</p>
// // // // //             </div>
// // // // //             <button
// // // // //               onClick={() => removeFromWishlist(item._id)}
// // // // //               className="bg-red-500 text-white px-2 py-1 rounded"
// // // // //             >
// // // // //               Remove
// // // // //             </button>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Wishlist;



// // // // // src/pages/buyer/Wishlist.jsx
// // // // import React from "react";
// // // // import { useWishlist } from "../../context/WishlistContext";

// // // // const Wishlist = () => {
// // // //   const { wishlist, removeFromWishlist } = useWishlist();

// // // //   if (wishlist.length === 0)
// // // //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {wishlist.map((item) => (
// // // //           <div key={item._id} className="border p-4 rounded">
// // // //             <img
// // // //               src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // //               alt={item.title}
// // // //               className="h-40 w-full object-cover mb-2"
// // // //             />
// // // //             <h3 className="font-bold">{item.title}</h3>
// // // //             <p>${item.price}</p>
// // // //             <button
// // // //               onClick={() => removeFromWishlist(item._id)}
// // // //               className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
// // // //             >
// // // //               Remove
// // // //             </button>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Wishlist;






// // // // // src/pages/buyer/Wishlist.jsx
// // // // import React, { useState, useEffect } from "react";
// // // // import { useWishlist } from "../../context/WishlistContext";
// // // // import { useCart } from "../../context/CartContext";

// // // // const Wishlist = () => {
// // // //   const { wishlist, removeFromWishlist } = useWishlist();
// // // //   const { addToCart } = useCart();
// // // //   const [totalPrice, setTotalPrice] = useState(0);

// // // //   useEffect(() => {
// // // //     let total = wishlist.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// // // //     setTotalPrice(total);
// // // //   }, [wishlist]);

// // // //   const handleMoveToCart = (item) => {
// // // //     addToCart({ ...item, quantity: 1 });
// // // //     removeFromWishlist(item._id);
// // // //     alert("Moved to cart");
// // // //   };

// // // //   if (wishlist.length === 0)
// // // //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //         <div className="md:col-span-2 space-y-4">
// // // //           {wishlist.map((item) => (
// // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // //               <img
// // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // //                 alt={item.title}
// // // //                 className="h-24 w-24 object-cover"
// // // //               />
// // // //               <div className="flex-1">
// // // //                 <h3 className="font-bold">{item.title}</h3>
// // // //                 <p>${item.price}</p>
// // // //                 <div className="flex items-center gap-2 mt-2">
// // // //                   <button
// // // //                     onClick={() => removeFromWishlist(item._id)}
// // // //                     className="bg-red-500 text-white px-3 py-1 rounded"
// // // //                   >
// // // //                     Remove
// // // //                   </button>
// // // //                   <button
// // // //                     onClick={() => handleMoveToCart(item)}
// // // //                     className="bg-green-500 text-white px-3 py-1 rounded"
// // // //                   >
// // // //                     Move to Cart
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Wishlist Summary */}
// // // //         <div className="border p-4 rounded h-fit">
// // // //           <h2 className="text-xl font-bold mb-4">Summary</h2>
// // // //           <div className="flex justify-between mb-2">
// // // //             <span>Total Items:</span>
// // // //             <span>{wishlist.length}</span>
// // // //           </div>
// // // //           <div className="flex justify-between font-bold text-lg">
// // // //             <span>Total Price:</span>
// // // //             <span>${totalPrice.toFixed(2)}</span>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Wishlist;



// // // import React, { useState, useEffect } from "react";
// // // import { useWishlist } from "../../context/WishlistContext";
// // // import { useCart } from "../../context/CartContext";

// // // const Wishlist = () => {
// // //   const { wishlist, removeFromWishlist } = useWishlist();
// // //   const { addToCart } = useCart();
// // //   const [totalPrice, setTotalPrice] = useState(0);

// // //  const backendURL = import.meta.env.VITE_BACKEND_URL || "https://ecommerce-mern-backend-1.onrender.com";

// // //   useEffect(() => {
// // //     let total = wishlist.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
// // //     setTotalPrice(total);
// // //   }, [wishlist]);

// // //   const handleMoveToCart = (item) => {
// // //     addToCart({ ...item, quantity: 1 });
// // //     removeFromWishlist(item._id);
// // //     alert("Moved to cart");
// // //   };

// // //   if (wishlist.length === 0)
// // //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// // //   return (
// // //     <div className="min-h-screen bg-[#f3f3f3] p-6">
// // //       <div className="max-w-7xl mx-auto flex gap-6">

// // //         {/* LEFT SIDEBAR */}
// // //         <div className="w-64 bg-white rounded-lg p-4 h-fit">
// // //           <ul className="space-y-4 text-gray-600">
// // //             <li>My Profile</li>
// // //             <li>My Coupons</li>
// // //             <li>My Wallet</li>
// // //             <li>My Orders</li>
// // //             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">My Wishlist</li>
// // //             <li>My Saved Payment</li>
// // //             <li>Log Out</li>
// // //           </ul>
// // //         </div>

// // //         {/* RIGHT CONTENT */}
// // //         <div className="flex-1">
// // //           <h1 className="text-3xl font-semibold mb-6">
// // //             My Wishlist <span className="text-pink-600">({wishlist.length})</span>
// // //           </h1>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //             {wishlist.map((item) => (
// // //               <div key={item._id} className="bg-white rounded-lg p-4 relative shadow-sm">

// // //                 {/* REMOVE ICON */}
// // //                 <button
// // //                   onClick={() => removeFromWishlist(item._id)}
// // //                   className="absolute top-2 right-2 text-gray-500 hover:text-black"
// // //                 >
// // //                   ✕
// // //                 </button>

// // //                 {/* IMAGE */}
// // //                 {/* <img
// // //                   src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // //                   alt={item.title}
// // //                   className="h-40 w-full object-contain mb-4"
// // //                 /> */}
// // //                 <img
// // //   src={
// // //     item.images && item.images[0]
// // //       ? item.images[0].startsWith("http")
// // //         ? item.images[0]
// // //         : item.images[0].startsWith("/uploads/")
// // //           ? `${backendURL}${item.images[0]}`
// // //           : `${backendURL}/uploads/${item.images[0]}`
// // //       : "/placeholder.png"
// // //   }
// // //   alt={item.title}
// // //   className="h-40 w-full object-contain mb-4"
// // // />

// // //                 {/* DETAILS */}
// // //                 <h3 className="text-sm font-medium mb-2 line-clamp-2">
// // //                   {item.title}
// // //                 </h3>

// // //                 <p className="font-semibold mb-2">₹{item.price}</p>

// // //                 {/* STATIC STARS UI */}
// // //                 <div className="text-sm text-gray-500 mb-4">
// // //                   ★★★★☆ (1200)
// // //                 </div>

// // //                 {/* MOVE TO BAG */}
// // //                 <button
// // //                   onClick={() => handleMoveToCart(item)}
// // //                   className="w-full text-pink-600 font-semibold border-t pt-3"
// // //                 >
// // //                   MOVE TO BAG
// // //                 </button>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Wishlist;


// // import React, { useEffect, useState } from "react";
// // import { useWishlist } from "../../context/WishlistContext";
// // import { useCart } from "../../context/CartContext";

// // const Wishlist = () => {
// //   const { wishlist, removeFromWishlist } = useWishlist();
// //   const { addToCart } = useCart();
// //   const [totalPrice, setTotalPrice] = useState(0);

// //   const backendURL =
// //     import.meta.env.VITE_BACKEND_URL ||
// //     "https://ecommerce-mern-backend-1.onrender.com/api";

// //   useEffect(() => {
// //     let total = wishlist.reduce(
// //       (sum, item) => sum + item.price * (item.quantity || 1),
// //       0
// //     );
// //     setTotalPrice(total);
// //   }, [wishlist]);

// //   const handleMoveToCart = (item) => {
// //     addToCart({ ...item, quantity: 1 });
// //     removeFromWishlist(item._id);
// //     alert("Moved to cart");
// //   };

// //   if (wishlist.length === 0)
// //     return <div className="p-10 text-center">Your wishlist is empty.</div>;

// //   return (
// //     <div className="min-h-screen bg-[#f3f3f3] p-6">
// //       <div className="max-w-7xl mx-auto flex gap-6">
// //         {/* LEFT SIDEBAR */}
// //         <div className="w-64 bg-white rounded-lg p-4 h-fit">
// //           <ul className="space-y-4 text-gray-600">
// //             <li>My Profile</li>
// //             <li>My Coupons</li>
// //             <li>My Wallet</li>
// //             <li>My Orders</li>
// //             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">
// //               My Wishlist
// //             </li>
// //             <li>My Saved Payment</li>
// //             <li>Log Out</li>
// //           </ul>
// //         </div>

// //         {/* RIGHT CONTENT */}
// //         <div className="flex-1">
// //           <h1 className="text-3xl font-semibold mb-6">
// //             My Wishlist{" "}
// //             <span className="text-pink-600">({wishlist.length})</span>
// //           </h1>

// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //             {wishlist.map((item) => (
// //               <div
// //                 key={item._id}
// //                 className="bg-white rounded-lg p-4 relative shadow-sm"
// //               >
// //                 {/* REMOVE ICON */}
// //                 <button
// //                   onClick={() => removeFromWishlist(item._id)}
// //                   className="absolute top-2 right-2 text-gray-500 hover:text-black"
// //                 >
// //                   ✕
// //                 </button>

// //                 {/* IMAGE */}
// //                 <img
// //                   src={
// //                     item.images?.[0]?.startsWith("http")
// //                       ? item.images[0]
// //                       : `${backendURL}/uploads/${item.images?.[0]}`
// //                   }
// //                   alt={item.title}
// //                   className="h-40 w-full object-contain mb-4"
// //                 />

// //                 {/* DETAILS */}
// //                 <h3 className="text-sm font-medium mb-2 line-clamp-2">
// //                   {item.title}
// //                 </h3>
// //                 <p className="font-semibold mb-2">₹{item.price}</p>

// //                 <div className="text-sm text-gray-500 mb-4">★★★★☆ (1200)</div>

// //                 <button
// //                   onClick={() => handleMoveToCart(item)}
// //                   className="w-full text-pink-600 font-semibold border-t pt-3"
// //                 >
// //                   MOVE TO BAG
// //                 </button>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Wishlist;


// import React, { useEffect, useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import { useCart } from "../../context/CartContext";

// const Wishlist = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();
//   const { addToCart } = useCart();
//   const [totalPrice, setTotalPrice] = useState(0);

//   const BASE_URL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-2-t4ku.onrender.com";

//   useEffect(() => {
//     const total = wishlist.reduce(
//       (sum, item) => sum + item.price * (item.quantity || 1),
//       0
//     );
//     setTotalPrice(total);
//   }, [wishlist]);

//   const handleMoveToCart = (item) => {
//     addToCart({ ...item, quantity: 1 });
//     removeFromWishlist(item._id);
//     alert("Moved to cart");
//   };

//   if (wishlist.length === 0)
//     return <div className="p-10 text-center">Your wishlist is empty.</div>;

//   return (
//     <div className="min-h-screen bg-[#f3f3f3] p-6">
//       <div className="max-w-7xl mx-auto flex gap-6">
//         {/* LEFT SIDEBAR */}
//         <div className="w-64 bg-white rounded-lg p-4 h-fit">
//           <ul className="space-y-4 text-gray-600">
//             <li>My Profile</li>
//             <li>My Coupons</li>
//             <li>My Wallet</li>
//             <li>My Orders</li>
//             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">
//               My Wishlist
//             </li>
//             <li>My Saved Payment</li>
//             <li>Log Out</li>
//           </ul>
//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-semibold mb-6">
//             My Wishlist{" "}
//             <span className="text-pink-600">({wishlist.length})</span>
//           </h1>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {wishlist.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white rounded-lg p-4 relative shadow-sm"
//               >
//                 <button
//                   onClick={() => removeFromWishlist(item._id)}
//                   className="absolute top-2 right-2 text-gray-500 hover:text-black"
//                 >
//                   ✕
//                 </button>

//                 <img
//                   src={
//                     item.images?.[0]?.startsWith("http")
//                       ? item.images[0]
//                       : `${BASE_URL}/uploads/${item.images?.[0]}`
//                   }
//                   alt={item.title}
//                   className="h-40 w-full object-contain mb-4"
//                 />

//                 <h3 className="text-sm font-medium mb-2 line-clamp-2">
//                   {item.title}
//                 </h3>

//                 <p className="font-semibold mb-2">₹{item.price}</p>

//                 <div className="text-sm text-gray-500 mb-4">★★★★☆ (1200)</div>

//                 <button
//                   onClick={() => handleMoveToCart(item)}
//                   className="w-full text-pink-600 font-semibold border-t pt-3"
//                 >
//                   MOVE TO BAG
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
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
  const [totalPrice, setTotalPrice] = useState(0);

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com"; // old URL style

  useEffect(() => {
    const total = wishlist.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setTotalPrice(total);
  }, [wishlist]);

  const handleMoveToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
    removeFromWishlist(item._id);
    alert("Moved to cart");
  };

  if (wishlist.length === 0)
    return <div className="p-10 text-center">Your wishlist is empty.</div>;

  return (
    <div className="min-h-screen bg-[#f3f3f3] p-6">
      <div className="max-w-7xl mx-auto flex gap-6">

        {/* LEFT SIDEBAR */}
        <div className="w-64 bg-white rounded-lg p-4 h-fit">
          <ul className="space-y-4 text-gray-600">
            <li>My Profile</li>
            <li>My Coupons</li>
            <li>My Wallet</li>
            <li>My Orders</li>
            <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">
              My Wishlist
            </li>
            <li>My Saved Payment</li>
            <li>Log Out</li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-6">
            My Wishlist <span className="text-pink-600">({wishlist.length})</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlist.map((item) => {
              const imageUrl =
                item.images && item.images[0]
                  ? item.images[0].startsWith("http")
                    ? item.images[0]
                    : item.images[0].startsWith("/uploads/")
                      ? `${BASE_URL}${item.images[0]}`
                      : `${BASE_URL}/uploads/${item.images[0]}`
                  : "/placeholder.png"; // fallback image

              return (
                <div
                  key={item._id}
                  className="bg-white rounded-lg p-4 relative shadow-sm"
                >
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                  >
                    ✕
                  </button>

                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="h-40 w-full object-contain mb-4"
                  />

                  <h3 className="text-sm font-medium mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="font-semibold mb-2">₹{item.price}</p>

                  <div className="text-sm text-gray-500 mb-4">★★★★☆ (1200)</div>

                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="w-full text-pink-600 font-semibold border-t pt-3"
                  >
                    MOVE TO BAG
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;