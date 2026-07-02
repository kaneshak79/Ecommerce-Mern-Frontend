
//           })}
//         </div>

//         {filteredWishlist.length === 0 && (
//           <div className="text-center mt-10 text-gray-500">No items found 🔍</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


import React, { useState } from "react";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ import

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // ✅ initialize

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  const getValidPrice = (price) => {
    let p = Number(price) || 0;
    if (p > 9999) p = p / 10;
    return p;
  };

  const handleMoveToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
    removeFromWishlist(item._id);
  };

  const filteredWishlist = wishlist.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
        <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty 💔</h1>
        <p className="text-gray-500">Start adding items you love!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-4xl font-bold">
            My Wishlist{" "}
            <span className="text-pink-600 text-2xl">({wishlist.length})</span>
          </h1>

          <input
            type="text"
            placeholder="Search in wishlist..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg border w-full md:w-80 focus:ring-2 focus:ring-pink-400 outline-none"
          />
        </div>

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
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300 group relative cursor-pointer"
              >
                {/* REMOVE BUTTON */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent navigating when removing
                    removeFromWishlist(item._id);
                  }}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg"
                >
                  ✕
                </button>

                {/* IMAGE */}
                <div
                  className="h-48 flex items-center justify-center mb-4"
                  onClick={() => navigate(`/product/${item._id}`)} // ✅ navigate
                >
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="h-full object-contain group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="text-sm font-semibold mb-1 line-clamp-2"
                  onClick={() => navigate(`/product/${item._id}`)} // ✅ navigate
                >
                  {item.title}
                </h3>

                <p className="text-lg font-bold mb-3">
                  ₹{price.toLocaleString("en-IN")}
                </p>

                {/* MOVE TO CART */}
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

        {filteredWishlist.length === 0 && (
          <div className="text-center mt-10 text-gray-500">No items found 🔍</div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
