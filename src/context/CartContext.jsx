// import React, { createContext, useContext, useState } from "react";

// // 1️⃣ Create context
// const CartContext = createContext();

// // 2️⃣ Create provider
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     // Prevent duplicates
//     setCart((prev) => {
//       if (!prev.find((p) => p._id === product._id)) {
//         return [...prev, product];
//       }
//       return prev;
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prev) => prev.filter((p) => p._id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // 3️⃣ Custom hook
// export const useCart = () => useContext(CartContext);

// // import React, { createContext, useContext, useState } from "react";

// // const CartContext = createContext();

// // export const useCart = () => useContext(CartContext);

// // export const CartProvider = ({ children }) => {
// //   const [cartItems, setCartItems] = useState([]);

// //   const addToCart = (product) => {
// //     // check if product already exists
// //     const exists = cartItems.find(item => item._id === product._id);
// //     if (!exists) {
// //       setCartItems([...cartItems, product]);
// //     }
// //   };

// //   const removeFromCart = (productId) => {
// //     setCartItems(cartItems.filter(item => item._id !== productId));
// //   };

// //   return (
// //     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };





// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create context
const CartContext = createContext();

// 2️⃣ Create provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart (default quantity = 1)
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p._id === product._id);
      if (!existing) {
        return [...prev, { ...product, quantity: 1 }];
      }
      return prev; // do not add duplicates
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p._id !== productId));
  };

  // Update quantity of a product
  const updateQuantity = (productId, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  // Clear cart after order placed
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 3️⃣ Custom hook
export const useCart = () => useContext(CartContext);