

// //   const clearCart = () => {
// //     setCart([]);
// //     toast.success("Cart cleared", { position: "top-right" });
// //   };

// //   return (
// //     <CartContext.Provider
// //       value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, fetchCart }}
// //     >
// //       <Toaster /> {/* This shows the toast notifications */}
// //       {children}
// //     </CartContext.Provider>

// export const useCart = () => useContext(CartContext);


import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../utils/axios";
import toast, { Toaster } from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  // ✅ Fetch cart
  const fetchCart = async () => {
    try {
      const res = await axios.get("/cart", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const formattedCart = res.data.products.map((item) => ({
        ...item.product,
        quantity: item.quantity,
        image:
          item.product.images && item.product.images[0]
            ? item.product.images[0].startsWith("http")
              ? item.product.images[0]
              : item.product.images[0].startsWith("/uploads/")
              ? `${BASE_URL}${item.product.images[0]}`
              : `${BASE_URL}/uploads/${item.product.images[0]}`
            : "/placeholder.png",
      }));

      setCart(formattedCart);
    } catch (err) {
      console.error("Fetch cart error:", err);
      setCart([]);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ ADD TO CART (no duplicate, 1 toast)
  const addToCart = async (product) => {
    try {
      await axios.post(
        "/cart",
        { productId: product._id, quantity: 1 },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      toast.success("Item added to cart", { position: "top-right" });

      await fetchCart(); // ✅ sync once
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error("Failed to add item", { position: "top-right" });
    }
  };

  // ✅ REMOVE FROM CART
  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`/cart/${productId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setCart((prev) => prev.filter((p) => p._id !== productId)); // instant UI
      toast.success("Item removed", { position: "top-right" });

    } catch (err) {
      console.error("Remove cart error:", err);
      toast.error("Failed to remove item", { position: "top-right" });
    }
  };


  //
const updateQuantity = async (productId, qty) => {
  // ✅ instant UI update (dropdown should change immediately)
  setCart((prev) =>
    prev.map((item) =>
      item._id === productId ? { ...item, quantity: qty } : item
    )
  );

  try {
    await axios.put(
      "/cart", // ✅ IMPORTANT: no /:id
      {
        productId: productId, // ✅ MUST SEND THIS
        quantity: qty,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    toast.success("Quantity updated", { position: "top-right" });

  } catch (err) {
    console.error("Update error:", err.response?.data || err.message);

    toast.error("Failed to update quantity", { position: "top-right" });

    // ❗ revert back if API fails
    await fetchCart();
  }
};

  // // ✅ UPDATE QUANTITY (instant + no flicker)
  // const updateQuantity = async (productId, qty) => {
  //   // 🔥 instant UI update
  //   setCart((prev) =>
  //     prev.map((item) =>
  //       item._id === productId ? { ...item, quantity: qty } : item
  //     )
  //   );

  //   try {
  //     await axios.put(
  //       `/cart/${productId}`,
  //       { quantity: qty },
  //       { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  //     );

  //     toast.success("Quantity updated", { position: "top-right" });

  //   } catch (err) {
  //     console.error("Update quantity error:", err);
  //     toast.error("Failed to update quantity", { position: "top-right" });
  //   }
  // };

  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared", { position: "top-right" });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, fetchCart }}
    >
      {/* ✅ ONLY ONE TOASTER */}
      <Toaster position="top-right" />
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
