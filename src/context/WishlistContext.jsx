import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (!prev.find((p) => p._id === product._id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((p) => p._id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);



// import React, { createContext, useContext, useState } from "react";

// const WishlistContext = createContext();

// export const useWishlist = () => useContext(WishlistContext);

// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   const addToWishlist = (product) => {
//     const exists = wishlistItems.find(item => item._id === product._id);
//     if (!exists) {
//       setWishlistItems([...wishlistItems, product]);
//     }
//   };

//   const removeFromWishlist = (productId) => {
//     setWishlistItems(wishlistItems.filter(item => item._id !== productId));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };



