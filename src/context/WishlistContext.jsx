// import React, { createContext, useContext, useState } from "react";

// const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState([]);

//   const addToWishlist = (product) => {
//     setWishlist((prev) => {
//       if (!prev.find((p) => p._id === product._id)) {
//         return [...prev, product];
//       }
//       return prev;
      
//     });
//   };

//   const removeFromWishlist = (productId) => {
//     setWishlist((prev) => prev.filter((p) => p._id !== productId));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);




import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // ================= ADD TO WISHLIST =================
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p._id === product._id);

      if (!exists) {
        toast.success("Added to wishlist ❤️"); // ✅ toast added
        return [...prev, product];
      } else {
        toast.info("Already in wishlist ℹ️"); // ✅ optional
        return prev;
      }
    });
  };

  // ================= REMOVE FROM WISHLIST =================
  const removeFromWishlist = (productId) => {
    setWishlist((prev) => {
      const updated = prev.filter((p) => p._id !== productId);

      toast.info("Removed from wishlist 💔"); // ✅ toast added

      return updated;
    });
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);