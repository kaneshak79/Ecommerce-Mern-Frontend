// // import React, { createContext, useContext, useState } from "react";

// // // 1️⃣ Create context
// // const CartContext = createContext();

// // // 2️⃣ Create provider
// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState([]);

// //   const addToCart = (product) => {
// //     // Prevent duplicates
// //     setCart((prev) => {
// //       if (!prev.find((p) => p._id === product._id)) {
// //         return [...prev, product];
// //       }
// //       return prev;
// //     });
// //   };

// //   const removeFromCart = (productId) => {
// //     setCart((prev) => prev.filter((p) => p._id !== productId));
// //   };

// //   return (
// //     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // // 3️⃣ Custom hook
// // export const useCart = () => useContext(CartContext);

// // // import React, { createContext, useContext, useState } from "react";

// // // const CartContext = createContext();

// // // export const useCart = () => useContext(CartContext);

// // // export const CartProvider = ({ children }) => {
// // //   const [cartItems, setCartItems] = useState([]);

// // //   const addToCart = (product) => {
// // //     // check if product already exists
// // //     const exists = cartItems.find(item => item._id === product._id);
// // //     if (!exists) {
// // //       setCartItems([...cartItems, product]);
// // //     }
// // //   };

// // //   const removeFromCart = (productId) => {
// // //     setCartItems(cartItems.filter(item => item._id !== productId));
// // //   };

// // //   return (
// // //     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
// // //       {children}
// // //     </CartContext.Provider>
// // //   );
// // // };





// // src/context/CartContext.jsx
// import React, { createContext, useContext, useState } from "react";

// // 1️⃣ Create context
// const CartContext = createContext();

// // 2️⃣ Create provider
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add product to cart (default quantity = 1)
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find((p) => p._id === product._id);
//       if (!existing) {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//       return prev; // do not add duplicates
//     });
//   };

//   // Remove product from cart
//   const removeFromCart = (productId) => {
//     setCart((prev) => prev.filter((p) => p._id !== productId));
//   };

//   // Update quantity of a product
//   const updateQuantity = (productId, qty) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item._id === productId ? { ...item, quantity: qty } : item
//       )
//     );
//   };

//   // Clear cart after order placed
//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // 3️⃣ Custom hook
// export const useCart = () => useContext(CartContext);





// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../utils/axios";

// 1️⃣ Create context
const CartContext = createContext();

// 2️⃣ Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ 1. LOAD CART FROM BACKEND
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("/cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Convert backend cart → frontend format
        const formattedCart = res.data.products.map((item) => ({
          ...item.product,
          quantity: item.quantity,
        }));

        setCart(formattedCart);
      } catch (err) {
        console.error("Fetch cart error:", err);
      }
    };

    fetchCart();
  }, []);

  // ✅ 2. ADD TO CART (SYNC BACKEND + FRONTEND)
  const addToCart = async (product) => {
    try {
      await axios.post(
        "/cart",
        {
          productId: product._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setCart((prev) => {
        const existing = prev.find((p) => p._id === product._id);
        if (!existing) {
          return [...prev, { ...product, quantity: 1 }];
        }
        return prev;
      });
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  // ✅ 3. REMOVE FROM CART (SYNC BACKEND + FRONTEND)
  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`/cart/${productId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setCart((prev) => prev.filter((p) => p._id !== productId));
    } catch (err) {
      console.error("Remove cart error:", err);
    }
  };

  // ✅ 4. UPDATE QUANTITY (SYNC BACKEND + FRONTEND)
  const updateQuantity = async (productId, qty) => {
    try {
      await axios.put(
        `/cart/${productId}`,
        { quantity: qty },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setCart((prev) =>
        prev.map((item) =>
          item._id === productId ? { ...item, quantity: qty } : item
        )
      );
    } catch (err) {
      console.error("Update quantity error:", err);
    }
  };

  // ✅ 5. CLEAR CART (FRONTEND ONLY, BACKEND WILL DELETE AFTER ORDER)
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3️⃣ Hook
export const useCart = () => useContext(CartContext);