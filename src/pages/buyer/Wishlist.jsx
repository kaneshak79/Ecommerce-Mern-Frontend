// // // import React from "react";
// // // import { useWishlist } from "../../context/WishlistContext";
// // // import ProductCard from "../../components/ProductCard";

// // // const Wishlist = () => {
// // //   const { wishlist } = useWishlist();

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
// // //       {wishlist.length === 0 ? (
// // //         <p>Your wishlist is empty.</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //           {wishlist.map((product) => (
// // //             <ProductCard key={product._id} product={product} />
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Wishlist;

// // import React from "react";
// // import { useWishlist } from "../../context/WishlistContext";

// // const Wishlist = () => {
// //   const { wishlistItems, removeFromWishlist } = useWishlist();

// //   if (wishlistItems.length === 0) return <p className="p-4">Wishlist is empty</p>;

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
// //       <div className="space-y-4">
// //         {wishlistItems.map(item => (
// //           <div key={item._id} className="flex justify-between border p-2 rounded">
// //             <div>
// //               <h2 className="font-semibold">{item.title}</h2>
// //               <p>{item.description}</p>
// //               <p>${item.price}</p>
// //             </div>
// //             <button
// //               onClick={() => removeFromWishlist(item._id)}
// //               className="bg-red-500 text-white px-2 py-1 rounded"
// //             >
// //               Remove
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Wishlist;



// // src/pages/buyer/Wishlist.jsx
// import React from "react";
// import { useWishlist } from "../../context/WishlistContext";

// const Wishlist = () => {
//   const { wishlist, removeFromWishlist } = useWishlist();

//   if (wishlist.length === 0)
//     return <div className="p-10 text-center">Your wishlist is empty.</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {wishlist.map((item) => (
//           <div key={item._id} className="border p-4 rounded">
//             <img
//               src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
//               alt={item.title}
//               className="h-40 w-full object-cover mb-2"
//             />
//             <h3 className="font-bold">{item.title}</h3>
//             <p>${item.price}</p>
//             <button
//               onClick={() => removeFromWishlist(item._id)}
//               className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;






// src/pages/buyer/Wishlist.jsx
import React, { useState, useEffect } from "react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = wishlist.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {wishlist.map((item) => (
            <div key={item._id} className="flex border p-4 rounded items-center gap-4">
              <img
                src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
                alt={item.title}
                className="h-24 w-24 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold">{item.title}</h3>
                <p>${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wishlist Summary */}
        <div className="border p-4 rounded h-fit">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total Items:</span>
            <span>{wishlist.length}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;