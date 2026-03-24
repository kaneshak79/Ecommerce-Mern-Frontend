// // // // // // // // // import React, { createContext, useContext, useState } from "react";

// // // // // // // // // const WishlistContext = createContext();

// // // // // // // // // export const WishlistProvider = ({ children }) => {
// // // // // // // // //   const [wishlist, setWishlist] = useState([]);

// // // // // // // // //   const addToWishlist = (product) => {
// // // // // // // // //     setWishlist((prev) => {
// // // // // // // // //       if (!prev.find((p) => p._id === product._id)) {
// // // // // // // // //         return [...prev, product];
// // // // // // // // //       }
// // // // // // // // //       return prev;
      
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const removeFromWishlist = (productId) => {
// // // // // // // // //     setWishlist((prev) => prev.filter((p) => p._id !== productId));
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
// // // // // // // // //       {children}
// // // // // // // // //     </WishlistContext.Provider>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export const useWishlist = () => useContext(WishlistContext);




// // // // // // // // import React, { createContext, useContext, useState } from "react";
// // // // // // // // import { toast } from "react-toastify";

// // // // // // // // const WishlistContext = createContext();

// // // // // // // // export const WishlistProvider = ({ children }) => {
// // // // // // // //   const [wishlist, setWishlist] = useState([]);

// // // // // // // //   // ================= ADD TO WISHLIST =================
// // // // // // // //   const addToWishlist = (product) => {
// // // // // // // //     setWishlist((prev) => {
// // // // // // // //       const exists = prev.find((p) => p._id === product._id);

// // // // // // // //       if (!exists) {
// // // // // // // //         toast.success("Added to wishlist ❤️"); // ✅ toast added
// // // // // // // //         return [...prev, product];
// // // // // // // //       } else {
// // // // // // // //         toast.info("Already in wishlist ℹ️"); // ✅ optional
// // // // // // // //         return prev;
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   // ================= REMOVE FROM WISHLIST =================
// // // // // // // //   const removeFromWishlist = (productId) => {
// // // // // // // //     setWishlist((prev) => {
// // // // // // // //       const updated = prev.filter((p) => p._id !== productId);

// // // // // // // //       toast.info("Removed from wishlist 💔"); // ✅ toast added

// // // // // // // //       return updated;
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <WishlistContext.Provider
// // // // // // // //       value={{ wishlist, addToWishlist, removeFromWishlist }}
// // // // // // // //     >
// // // // // // // //       {children}
// // // // // // // //     </WishlistContext.Provider>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export const useWishlist = () => useContext(WishlistContext);


// // // // // // // import { createContext, useContext, useEffect, useState } from "react";

// // // // // // // const WishlistContext = createContext();

// // // // // // // export const WishlistProvider = ({ children }) => {

// // // // // // //   // ✅ INIT FROM LOCALSTORAGE (IMPORTANT FIX)
// // // // // // //   const [wishlist, setWishlist] = useState(() => {
// // // // // // //     try {
// // // // // // //       const stored = localStorage.getItem("wishlist");
// // // // // // //       return stored ? JSON.parse(stored) : [];
// // // // // // //     } catch {
// // // // // // //       return [];
// // // // // // //     }
// // // // // // //   });

// // // // // // //   // ✅ SAVE ONLY WHEN CHANGED
// // // // // // //   useEffect(() => {
// // // // // // //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// // // // // // //   }, [wishlist]);

// // // // // // //   const addToWishlist = (product) => {
// // // // // // //     setWishlist((prev) => {
// // // // // // //       const exists = prev.find((item) => item._id === product._id);
// // // // // // //       if (exists) return prev;
// // // // // // //       return [...prev, product];
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const removeFromWishlist = (id) => {
// // // // // // //     setWishlist((prev) => prev.filter((item) => item._id !== id));
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <WishlistContext.Provider
// // // // // // //       value={{ wishlist, addToWishlist, removeFromWishlist }}
// // // // // // //     >
// // // // // // //       {children}
// // // // // // //     </WishlistContext.Provider>
// // // // // // //   );
// // // // // // // };

// // // // // // // export const useWishlist = () => useContext(WishlistContext);



// // // src/context/WishlistContext.jsx
// // import { createContext, useContext, useEffect, useState } from "react";

// // const WishlistContext = createContext();

// // export const WishlistProvider = ({ children }) => {
// //   const [wishlist, setWishlist] = useState(() => {
// //     try {
// //       const stored = localStorage.getItem("wishlist");
// //       return stored ? JSON.parse(stored) : [];
// //     } catch {
// //       return [];
// //     }
// //   });

// //   // Persist to localStorage
// //   useEffect(() => {
// //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// //   }, [wishlist]);

// //   // ADD
// //   const addToWishlist = (product) => {
// //     setWishlist((prev) => {
// //       const exists = prev.find((item) => item._id === product._id);
// //       if (exists) return prev;
// //       return [...prev, product];
// //     });
// //   };

// //   // REMOVE
// //   const removeFromWishlist = (id) => {
// //     setWishlist((prev) => prev.filter((item) => item._id !== id));
// //   };

// //   return (
// //     <WishlistContext.Provider
// //       value={{ wishlist, addToWishlist, removeFromWishlist }}
// //     >
// //       {children}
// //     </WishlistContext.Provider>
// //   );
// // };

// // export const useWishlist = () => useContext(WishlistContext);



// // // import React, { createContext, useContext, useEffect, useState } from "react";

// // // const WishlistContext = createContext();

// // // export const WishlistProvider = ({ children }) => {
// // //   const [wishlist, setWishlist] = useState(() => {
// // //     try {
// // //       const stored = localStorage.getItem("wishlist");
// // //       return stored ? JSON.parse(stored) : [];
// // //     } catch {
// // //       return [];
// // //     }
// // //   });

// // //   useEffect(() => {
// // //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// // //   }, [wishlist]);

// // //   const addToWishlist = (product) => {
// // //     setWishlist((prev) => {
// // //       const exists = prev.find((item) => item._id === product._id);
// // //       if (exists) return prev;
// // //       return [...prev, { ...product, quantity: 1 }];
// // //     });
// // //   };

// // //   const removeFromWishlist = (id) => {
// // //     setWishlist((prev) => prev.filter((item) => item._id !== id));
// // //   };

// // //   return (
// // //     <WishlistContext.Provider
// // //       value={{ wishlist, addToWishlist, removeFromWishlist }}
// // //     >
// // //       {children}
// // //     </WishlistContext.Provider>
// // //   );
// // // };

// // // export const useWishlist = () => useContext(WishlistContext);


// // // import { createContext, useContext, useEffect, useState } from "react";

// // // const WishlistContext = createContext();

// // // export const WishlistProvider = ({ children }) => {
// // //   const [wishlist, setWishlist] = useState(() => {
// // //     try {
// // //       const stored = localStorage.getItem("wishlist");
// // //       return stored ? JSON.parse(stored) : [];
// // //     } catch {
// // //       return [];
// // //     }
// // //   });

// // //   useEffect(() => {
// // //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// // //   }, [wishlist]);

// // //   const addToWishlist = (product) => {
// // //     setWishlist((prev) => {
// // //       const exists = prev.find((item) => item._id === product._id);
// // //       if (exists) return prev;
// // //       return [...prev, product];
// // //     });
// // //   };

// // //   const removeFromWishlist = (id) => {
// // //     setWishlist((prev) => prev.filter((item) => item._id !== id));
// // //   };

// // //   return (
// // //     <WishlistContext.Provider
// // //       value={{ wishlist, addToWishlist, removeFromWishlist }}
// // //     >
// // //       {children}
// // //     </WishlistContext.Provider>
// // //   );
// // // };

// // // export const useWishlist = () => useContext(WishlistContext);

// // // import { createContext, useContext, useState, useEffect } from "react";

// // // const WishlistContext = createContext();

// // // export const WishlistProvider = ({ children }) => {
// // //   const [wishlist, setWishlist] = useState(() => {
// // //     try {
// // //       const stored = localStorage.getItem("wishlist");
// // //       return stored ? JSON.parse(stored) : [];
// // //     } catch {
// // //       return [];
// // //     }
// // //   });

// // //   // Persist wishlist to localStorage
// // //   useEffect(() => {
// // //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// // //   }, [wishlist]);

// // //   // Add to wishlist
// // //   const addToWishlist = (product) => {
// // //     setWishlist((prev) => {
// // //       const exists = prev.find((item) => item._id === product._id);
// // //       if (exists) return prev; // already in wishlist
// // //       return [...prev, { ...product }];
// // //     });
// // //   };

// // //   // Remove from wishlist
// // //   const removeFromWishlist = (id) => {
// // //     setWishlist((prev) => prev.filter((item) => item._id !== id));
// // //   };

// // //   // Move to cart and remove from wishlist
// // //   const moveToCart = (product, addToCartFunc) => {
// // //     addToCartFunc({ ...product, quantity: 1 });
// // //     removeFromWishlist(product._id);
// // //   };

// // //   return (
// // //     <WishlistContext.Provider
// // //       value={{ wishlist, addToWishlist, removeFromWishlist, moveToCart }}
// // //     >
// // //       {children}
// // //     </WishlistContext.Provider>
// // //   );
// // // };

// // // export const useWishlist = () => useContext(WishlistContext);

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