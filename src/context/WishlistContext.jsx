
//   );
// };

// export const useWishlist = () => useContext(WishlistContext);

import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const stored = localStorage.getItem("wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // const addToWishlist = (product) => {
  //   if (!product || !product._id) {
  //     console.error("Invalid product:", product);
  //     return;
  //   }

  //   setWishlist((prev) => {
  //     const exists = prev.find((item) => item._id === product._id);

  //     if (exists) {
  //       toast.info("Already in Wishlist 💖");
  //       return prev;
  //     }

  //     toast.success("Added to Wishlist 💖");
  //     return [...prev, product];
  //   });

  const addToWishlist = (product) => {
  setWishlist((prev) => {
    const exists = prev.find((item) => item._id === product._id);

    if (exists) {
      toast.info("Already in Wishlist 💖", {
        toastId: "exists-" + product._id,
      });
      return prev;
    }

    toast.success("Added to Wishlist 💖", {
      toastId: product._id, // ✅ prevents duplicate
    });

    return [...prev, product];
  });
};

  // };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item._id !== id));
    toast.info("Removed from Wishlist 🗑️");
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
