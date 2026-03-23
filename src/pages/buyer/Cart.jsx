// // // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // // // // // // // // // const Cart = () => {
// // // // // // // // // // // // // // //   const { cart } = useCart();

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">My Cart</h1>
// // // // // // // // // // // // // // //       {cart.length === 0 ? (
// // // // // // // // // // // // // // //         <p>Your cart is empty.</p>
// // // // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // // // // // // // // //           {cart.map((product) => (
// // // // // // // // // // // // // // //             <ProductCard key={product._id} product={product} />
// // // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Cart;

// // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // // // // // // const Cart = () => {
// // // // // // // // // // // // // //   const { cartItems, removeFromCart } = useCart();

// // // // // // // // // // // // // //   if (cartItems.length === 0) return <p className="p-4">Cart is empty</p>;

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="p-4">
// // // // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">My Cart</h1>
// // // // // // // // // // // // // //       <div className="space-y-4">
// // // // // // // // // // // // // //         {cartItems.map(item => (
// // // // // // // // // // // // // //           <div key={item._id} className="flex justify-between border p-2 rounded">
// // // // // // // // // // // // // //             <div>
// // // // // // // // // // // // // //               <h2 className="font-semibold">{item.title}</h2>
// // // // // // // // // // // // // //               <p>{item.description}</p>
// // // // // // // // // // // // // //               <p>${item.price}</p>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // //               onClick={() => removeFromCart(item._id)}
// // // // // // // // // // // // // //               className="bg-red-500 text-white px-2 py-1 rounded"
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               Remove
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Cart;


// // // // // // // // // // // // // // src/pages/buyer/Cart.jsx
// // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // // // // // const Cart = () => {
// // // // // // // // // // // // //   const { cart, removeFromCart } = useCart();

// // // // // // // // // // // // //   if (cart.length === 0)
// // // // // // // // // // // // //     return <div className="p-10 text-center">Your cart is empty.</div>;

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // // // // // // // //         {cart.map((item) => (
// // // // // // // // // // // // //           <div key={item._id} className="border p-4 rounded">
// // // // // // // // // // // // //             <img
// // // // // // // // // // // // //               src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // // // // // // //               alt={item.title}
// // // // // // // // // // // // //               className="h-40 w-full object-cover mb-2"
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //             <h3 className="font-bold">{item.title}</h3>
// // // // // // // // // // // // //             <p>${item.price}</p>
// // // // // // // // // // // // //             <button
// // // // // // // // // // // // //               onClick={() => removeFromCart(item._id)}
// // // // // // // // // // // // //               className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               Remove
// // // // // // // // // // // // //             </button>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         ))}
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Cart;



// // // // // // // // // // // // // src/pages/buyer/Cart.jsx
// // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // // // // const Cart = () => {
// // // // // // // // // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // // // // // // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // // // // // // // // //   const [shippingCharge, setShippingCharge] = useState(50); // fixed shipping
// // // // // // // // // // // //   const [discount, setDiscount] = useState(0); // placeholder

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // // // // // // //     setTotalPrice(total);
// // // // // // // // // // // //     // You can also calculate discount dynamically if you want
// // // // // // // // // // // //     setDiscount(total > 1000 ? total * 0.1 : 0); // example 10% discount if >1000
// // // // // // // // // // // //   }, [cart]);

// // // // // // // // // // // //   const handleQuantityChange = (productId, qty) => {
// // // // // // // // // // // //     updateQuantity(productId, parseInt(qty));
// // // // // // // // // // // //   };

// // // // // // // // // // // //   if (cart.length === 0)
// // // // // // // // // // // //     return <div className="p-10 text-center">Your cart is empty.</div>;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // // // // //         {/* Cart Items */}
// // // // // // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // // // // // //           {cart.map((item) => (
// // // // // // // // // // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // // // // // // // // // //               <img
// // // // // // // // // // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // // // // // //                 alt={item.title}
// // // // // // // // // // // //                 className="h-24 w-24 object-cover"
// // // // // // // // // // // //               />
// // // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // // // // // // // // //                 <p>${item.price}</p>
// // // // // // // // // // // //                 <div className="flex items-center gap-2 mt-2">
// // // // // // // // // // // //                   <label>Quantity:</label>
// // // // // // // // // // // //                   <select
// // // // // // // // // // // //                     value={item.quantity}
// // // // // // // // // // // //                     onChange={(e) => handleQuantityChange(item._id, e.target.value)}
// // // // // // // // // // // //                     className="border p-1"
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     {[...Array(10).keys()].map((i) => (
// // // // // // // // // // // //                       <option key={i + 1} value={i + 1}>
// // // // // // // // // // // //                         {i + 1}
// // // // // // // // // // // //                       </option>
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                   </select>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <button
// // // // // // // // // // // //                   onClick={() => removeFromCart(item._id)}
// // // // // // // // // // // //                   className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   Remove
// // // // // // // // // // // //                 </button>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         {/* Price Details */}
// // // // // // // // // // // //         <div className="border p-4 rounded h-fit">
// // // // // // // // // // // //           <h2 className="text-xl font-bold mb-4">Price Details</h2>
// // // // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // // // //             <span>MRP:</span>
// // // // // // // // // // // //             <span>${totalPrice.toFixed(2)}</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // // // //             <span>Discount:</span>
// // // // // // // // // // // //             <span>-${discount.toFixed(2)}</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // // // //             <span>Shipping Charge:</span>
// // // // // // // // // // // //             <span>${shippingCharge.toFixed(2)}</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <hr className="my-2" />
// // // // // // // // // // // //           <div className="flex justify-between font-bold text-lg">
// // // // // // // // // // // //             <span>Total:</span>
// // // // // // // // // // // //             <span>${(totalPrice - discount + shippingCharge).toFixed(2)}</span>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //           <button
// // // // // // // // // // // //             className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
// // // // // // // // // // // //             onClick={() => alert("Proceeding to payment...")}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             Proceed to Pay
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Cart;






// // // // // // // // // // // // src/pages/buyer/Cart.jsx
// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // // // const Cart = () => {
// // // // // // // // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // //   const shippingCharge = 50; // fixed shipping charge
// // // // // // // // // // //   const [discount, setDiscount] = useState(0); // discount
// // // // // // // // // // //   const [totalPrice, setTotalPrice] = useState(0); // sum of products
// // // // // // // // // // //   const [finalTotal, setFinalTotal] = useState(0); // total after discount & shipping

// // // // // // // // // // //   // Calculate totals whenever cart changes
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // // // // // //     const discountValue = total > 1000 ? total * 0.1 : 0; // example: 10% discount if > 1000
// // // // // // // // // // //     setTotalPrice(total);
// // // // // // // // // // //     setDiscount(discountValue);
// // // // // // // // // // //     setFinalTotal(total - discountValue + shippingCharge);
// // // // // // // // // // //   }, [cart]);

// // // // // // // // // // //   // Handle quantity change
// // // // // // // // // // //   const handleQuantityChange = (productId, qty) => {
// // // // // // // // // // //     updateQuantity(productId, parseInt(qty));
// // // // // // // // // // //   };

// // // // // // // // // // //   if (cart.length === 0)
// // // // // // // // // // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

// // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // // // //         {/* Cart Items */}
// // // // // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // // // // //           {cart.map((item) => (
// // // // // // // // // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // // // // // // // // //               <img
// // // // // // // // // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // // // // //                 alt={item.title}
// // // // // // // // // // //                 className="h-24 w-24 object-cover"
// // // // // // // // // // //               />
// // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // // // // // // // //                 <p>${item.price}</p>
// // // // // // // // // // //                 <div className="flex items-center gap-2 mt-2">
// // // // // // // // // // //                   <label>Quantity:</label>
// // // // // // // // // // //                   <select
// // // // // // // // // // //                     value={item.quantity}
// // // // // // // // // // //                     onChange={(e) => handleQuantityChange(item._id, e.target.value)}
// // // // // // // // // // //                     className="border p-1"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     {[...Array(10).keys()].map((i) => (
// // // // // // // // // // //                       <option key={i + 1} value={i + 1}>
// // // // // // // // // // //                         {i + 1}
// // // // // // // // // // //                       </option>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </select>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <button
// // // // // // // // // // //                   onClick={() => removeFromCart(item._id)}
// // // // // // // // // // //                   className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// // // // // // // // // // //                 >
// // // // // // // // // // //                   Remove
// // // // // // // // // // //                 </button>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Price Details */}
// // // // // // // // // // //         <div className="border p-4 rounded h-fit">
// // // // // // // // // // //           <h2 className="text-xl font-bold mb-4">Price Details</h2>
// // // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // // //             <span>MRP:</span>
// // // // // // // // // // //             <span>${totalPrice.toFixed(2)}</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // // //             <span>Discount:</span>
// // // // // // // // // // //             <span>-${discount.toFixed(2)}</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // // //             <span>Shipping Charge:</span>
// // // // // // // // // // //             <span>${shippingCharge.toFixed(2)}</span>
// // // // // // // // // // //           </div>
// // // // // // // // // // //           <hr className="my-2" />
// // // // // // // // // // //           <div className="flex justify-between font-bold text-lg">
// // // // // // // // // // //             <span>Total:</span>
// // // // // // // // // // //             <span>${finalTotal.toFixed(2)}</span>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <button
// // // // // // // // // // //             className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
// // // // // // // // // // //             onClick={() => navigate("/checkout")} // go to checkout page
// // // // // // // // // // //           >
// // // // // // // // // // //             Proceed to Pay
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Cart;





// // // // // // // // // // // src/pages/buyer/Cart.jsx
// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // // const Cart = () => {
// // // // // // // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // //   const shippingCharge = 50; // fixed shipping
// // // // // // // // // //   const [discount, setDiscount] = useState(0);
// // // // // // // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // // // // // // //   const [finalTotal, setFinalTotal] = useState(0);
 
// // // // // // // // // //   // Calculate totals whenever cart changes
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const total = cart.reduce(
// // // // // // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // // // // // //       0
// // // // // // // // // //     );
// // // // // // // // // //     const discountValue = total > 1000 ? total * 0.1 : 0; // 10% discount if >1000
// // // // // // // // // //     setTotalPrice(total);
// // // // // // // // // //     setDiscount(discountValue);
// // // // // // // // // //     setFinalTotal(total - discountValue + shippingCharge);
// // // // // // // // // //   }, [cart]);

// // // // // // // // // //   // Handle quantity change from dropdown
// // // // // // // // // //   const handleQuantityChange = (productId, qty) => {
// // // // // // // // // //     updateQuantity(productId, parseInt(qty));
// // // // // // // // // //   };

// // // // // // // // // //   if (cart.length === 0)
// // // // // // // // // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

// // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // // //         {/* Cart Items */}
// // // // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // // // //           {cart.map((item) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={item._id}
// // // // // // // // // //               className="flex border p-4 rounded items-center gap-4"
// // // // // // // // // //             >
// // // // // // // // // //               <img
// // // // // // // // // //                 src={
// // // // // // // // // //                   item.image?.startsWith("http")
// // // // // // // // // //                     ? item.image
// // // // // // // // // //                     : `http://localhost:5000/${item.image}`
// // // // // // // // // //                 }
// // // // // // // // // //                 alt={item.title}
// // // // // // // // // //                 className="h-24 w-24 object-cover"
// // // // // // // // // //               />
// // // // // // // // // //               <div className="flex-1">
// // // // // // // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // // // // // // //                 <p>${item.price}</p>

// // // // // // // // // //                 <div className="flex items-center gap-2 mt-2">
// // // // // // // // // //                   <label>Quantity:</label>
// // // // // // // // // //                   <select
// // // // // // // // // //                     value={item.quantity}
// // // // // // // // // //                     onChange={(e) =>
// // // // // // // // // //                       handleQuantityChange(item._id, e.target.value)
// // // // // // // // // //                     }
// // // // // // // // // //                     className="border p-1"
// // // // // // // // // //                   >
// // // // // // // // // //                     {[...Array(10).keys()].map((i) => (
// // // // // // // // // //                       <option key={i + 1} value={i + 1}>
// // // // // // // // // //                         {i + 1}
// // // // // // // // // //                       </option>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </select>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <button
// // // // // // // // // //                   onClick={() => removeFromCart(item._id)}
// // // // // // // // // //                   className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// // // // // // // // // //                 >
// // // // // // // // // //                   Remove
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Price Details */}
// // // // // // // // // //         <div className="border p-4 rounded h-fit">
// // // // // // // // // //           <h2 className="text-xl font-bold mb-4">Price Details</h2>

// // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // //             <span>MRP:</span>
// // // // // // // // // //             <span>${totalPrice.toFixed(2)}</span>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // //             <span>Discount:</span>
// // // // // // // // // //             <span>-${discount.toFixed(2)}</span>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="flex justify-between mb-2">
// // // // // // // // // //             <span>Shipping Charge:</span>
// // // // // // // // // //             <span>${shippingCharge.toFixed(2)}</span>
// // // // // // // // // //           </div>

// // // // // // // // // //           <hr className="my-2" />

// // // // // // // // // //           <div className="flex justify-between font-bold text-lg">
// // // // // // // // // //             <span>Total:</span>
// // // // // // // // // //             <span>${finalTotal.toFixed(2)}</span>
// // // // // // // // // //           </div>

// // // // // // // // // //           <button
// // // // // // // // // //             className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
// // // // // // // // // //             onClick={() =>
// // // // // // // // // //               navigate("/checkout", { state: { finalTotal } })
// // // // // // // // // //             }
// // // // // // // // // //           >
// // // // // // // // // //             Proceed to Pay
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };
// // // // // // // // // //  export default Cart;


// // // // // // // // // //new UI

// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // const Cart = () => {
// // // // // // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const shippingCharge = 50;
// // // // // // // // //   const [discount, setDiscount] = useState(0);
// // // // // // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // // // // // //   const [finalTotal, setFinalTotal] = useState(0);
  
// // // // // // // // //  const backendURL=import.meta.env.VITE_BACKEND_URL;

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const total = cart.reduce(
// // // // // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // // // // //       0
// // // // // // // // //     );
// // // // // // // // //     const discountValue = total > 1000 ? total * 0.1 : 0;
// // // // // // // // //     setTotalPrice(total);
// // // // // // // // //     setDiscount(discountValue);
// // // // // // // // //     setFinalTotal(total - discountValue + shippingCharge);
// // // // // // // // //   }, [cart]);

// // // // // // // // //   const handleQuantityChange = (productId, qty) => {
// // // // // // // // //     updateQuantity(productId, parseInt(qty));
// // // // // // // // //   };

// // // // // // // // //   if (cart.length === 0)
// // // // // // // // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-gray-100 p-6">

// // // // // // // // //       <h1 className="text-2xl font-semibold mb-6">Bag ({cart.length} item)</h1>

// // // // // // // // //       <div className="grid md:grid-cols-3 gap-6">

// // // // // // // // //         {/* LEFT - ITEMS */}
// // // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // // //           {cart.map((item) => (
// // // // // // // // //             <div
// // // // // // // // //               key={item._id}
// // // // // // // // //               className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
// // // // // // // // //             >
// // // // // // // // //               {/* <img
// // // // // // // // //                 src={
// // // // // // // // //                   item.image?.startsWith("http")
// // // // // // // // //                     ? item.image
// // // // // // // // //                     : `http://localhost:5000/${item.image}`
// // // // // // // // //                 }
// // // // // // // // //                 alt={item.title}
// // // // // // // // //                 className="w-24 h-24 object-cover rounded"
// // // // // // // // //               /> */}
              

// // // // // // // // // <img
// // // // // // // // //   src={
// // // // // // // // //     item.images && item.images[0]
// // // // // // // // //       ? item.images[0].startsWith("http")
// // // // // // // // //         ? item.images[0]
// // // // // // // // //         : item.images[0].startsWith("/uploads/")
// // // // // // // // //           ? `${backendURL}${item.images[0]}`
// // // // // // // // //           : `${backendURL}/uploads/${item.images[0]}`
// // // // // // // // //       : "/placeholder.png"
// // // // // // // // //   }
// // // // // // // // //   alt={item.title}
// // // // // // // // //   className="w-50 h-70 object-cover rounded"
// // // // // // // // // />

// // // // // // // // //               <div className="flex-1">
// // // // // // // // //                 <h3 className="font-medium text-gray-800">{item.title}</h3>
// // // // // // // // //                 <p className="text-gray-600 mt-1">₹{item.price}</p>

// // // // // // // // //                 <div className="flex items-center gap-3 mt-3 text-sm">
// // // // // // // // //                   <span>Qty:</span>
// // // // // // // // //                   <select
// // // // // // // // //                     value={item.quantity}
// // // // // // // // //                     onChange={(e) =>
// // // // // // // // //                       handleQuantityChange(item._id, e.target.value)
// // // // // // // // //                     }
// // // // // // // // //                     className="border rounded px-2 py-1"
// // // // // // // // //                   >
// // // // // // // // //                     {[...Array(10).keys()].map((i) => (
// // // // // // // // //                       <option key={i + 1} value={i + 1}>
// // // // // // // // //                         {i + 1}
// // // // // // // // //                       </option>
// // // // // // // // //                     ))}
// // // // // // // // //                   </select>
// // // // // // // // //                 </div>

// // // // // // // // //                 <button
// // // // // // // // //                   onClick={() => removeFromCart(item._id)}
// // // // // // // // //                   className="text-red-500 text-sm mt-3"
// // // // // // // // //                 >
// // // // // // // // //                   Remove
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* RIGHT - PRICE PANEL */}
// // // // // // // // //         <div className="space-y-4">

// // // // // // // // //           {/* Rewards */}
// // // // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
// // // // // // // // //             <span>Reward Points</span>
// // // // // // // // //             <button className="text-pink-600">Apply</button>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Coupon */}
// // // // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
// // // // // // // // //             <span>Coupons</span>
// // // // // // // // //             <button className="text-pink-600">Apply</button>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Price Details */}
// // // // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // // // // // // //             <h2 className="font-semibold mb-3">Price Details</h2>

// // // // // // // // //             <div className="flex justify-between text-sm mb-2">
// // // // // // // // //               <span>Bag MRP</span>
// // // // // // // // //               <span>₹{totalPrice.toFixed(2)}</span>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="flex justify-between text-sm mb-2 text-green-600">
// // // // // // // // //               <span>Discount</span>
// // // // // // // // //               <span>-₹{discount.toFixed(2)}</span>
// // // // // // // // //             </div>

// // // // // // // // //             <div className="flex justify-between text-sm mb-2">
// // // // // // // // //               <span>Shipping</span>
// // // // // // // // //               <span>₹{shippingCharge.toFixed(2)}</span>
// // // // // // // // //             </div>

// // // // // // // // //             <hr className="my-3" />

// // // // // // // // //             <div className="flex justify-between font-semibold text-lg">
// // // // // // // // //               <span>You Pay</span>
// // // // // // // // //               <span>₹{finalTotal.toFixed(2)}</span>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Bottom Bar */}
// // // // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
// // // // // // // // //             <div>
// // // // // // // // //               <p className="font-semibold">₹{finalTotal.toFixed(2)}</p>
// // // // // // // // //               <p className="text-xs text-gray-500">Grand Total</p>
// // // // // // // // //             </div>

// // // // // // // // //             <button
// // // // // // // // //               onClick={() =>
// // // // // // // // //                 // navigate("/checkout", { state: { finalTotal } })
// // // // // // // // //                 navigate("/checkout")
// // // // // // // // //               }
// // // // // // // // //               className="bg-pink-600 text-white px-6 py-2 rounded-lg"
// // // // // // // // //             >
// // // // // // // // //               Proceed
// // // // // // // // //             </button>
// // // // // // // // //           </div>

// // // // // // // // //         </div>

// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Cart;


// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // const Cart = () => {
// // // // // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const shippingCharge = 50;
// // // // // // // //   const [discount, setDiscount] = useState(0);
// // // // // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // // // // //   const [finalTotal, setFinalTotal] = useState(0);

// // // // // // // //   const backendURL =
// // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com/api";

// // // // // // // //   useEffect(() => {
// // // // // // // //     const total = cart.reduce(
// // // // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // // // //       0
// // // // // // // //     );
// // // // // // // //     const discountValue = total > 1000 ? total * 0.1 : 0;
// // // // // // // //     setTotalPrice(total);
// // // // // // // //     setDiscount(discountValue);
// // // // // // // //     setFinalTotal(total - discountValue + shippingCharge);
// // // // // // // //   }, [cart]);

// // // // // // // //   const handleQuantityChange = (productId, qty) => {
// // // // // // // //     updateQuantity(productId, parseInt(qty));
// // // // // // // //   };

// // // // // // // //   if (cart.length === 0)
// // // // // // // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // // // // //       <h1 className="text-2xl font-semibold mb-6">Bag ({cart.length} item)</h1>
// // // // // // // //       <div className="grid md:grid-cols-3 gap-6">
// // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // //           {cart.map((item) => (
// // // // // // // //             <div
// // // // // // // //               key={item._id}
// // // // // // // //               className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
// // // // // // // //             >
// // // // // // // //               <img
// // // // // // // //                 src={
// // // // // // // //                   item.images?.[0]?.startsWith("http")
// // // // // // // //                     ? item.images[0]
// // // // // // // //                     : `${backendURL}/uploads/${item.images?.[0]}`
// // // // // // // //                 }
// // // // // // // //                 alt={item.title}
// // // // // // // //                 className="w-32 h-32 object-cover rounded"
// // // // // // // //               />
// // // // // // // //               <div className="flex-1">
// // // // // // // //                 <h3 className="font-medium text-gray-800">{item.title}</h3>
// // // // // // // //                 <p className="text-gray-600 mt-1">₹{item.price}</p>
// // // // // // // //                 <div className="flex items-center gap-3 mt-3 text-sm">
// // // // // // // //                   <span>Qty:</span>
// // // // // // // //                   <select
// // // // // // // //                     value={item.quantity}
// // // // // // // //                     onChange={(e) =>
// // // // // // // //                       handleQuantityChange(item._id, e.target.value)
// // // // // // // //                     }
// // // // // // // //                     className="border rounded px-2 py-1"
// // // // // // // //                   >
// // // // // // // //                     {[...Array(10).keys()].map((i) => (
// // // // // // // //                       <option key={i + 1} value={i + 1}>
// // // // // // // //                         {i + 1}
// // // // // // // //                       </option>
// // // // // // // //                     ))}
// // // // // // // //                   </select>
// // // // // // // //                 </div>
// // // // // // // //                 <button
// // // // // // // //                   onClick={() => removeFromCart(item._id)}
// // // // // // // //                   className="text-red-500 text-sm mt-3"
// // // // // // // //                 >
// // // // // // // //                   Remove
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* PRICE PANEL */}
// // // // // // // //         <div className="space-y-4">
// // // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
// // // // // // // //             <span>Reward Points</span>
// // // // // // // //             <button className="text-pink-600">Apply</button>
// // // // // // // //           </div>
// // // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
// // // // // // // //             <span>Coupons</span>
// // // // // // // //             <button className="text-pink-600">Apply</button>
// // // // // // // //           </div>
// // // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // // // // // //             <h2 className="font-semibold mb-3">Price Details</h2>
// // // // // // // //             <div className="flex justify-between text-sm mb-2">
// // // // // // // //               <span>Bag MRP</span>
// // // // // // // //               <span>₹{totalPrice.toFixed(2)}</span>
// // // // // // // //             </div>
// // // // // // // //             <div className="flex justify-between text-sm mb-2 text-green-600">
// // // // // // // //               <span>Discount</span>
// // // // // // // //               <span>-₹{discount.toFixed(2)}</span>
// // // // // // // //             </div>
// // // // // // // //             <div className="flex justify-between text-sm mb-2">
// // // // // // // //               <span>Shipping</span>
// // // // // // // //               <span>₹{shippingCharge.toFixed(2)}</span>
// // // // // // // //             </div>
// // // // // // // //             <hr className="my-3" />
// // // // // // // //             <div className="flex justify-between font-semibold text-lg">
// // // // // // // //               <span>You Pay</span>
// // // // // // // //               <span>₹{finalTotal.toFixed(2)}</span>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
// // // // // // // //             <div>
// // // // // // // //               <p className="font-semibold">₹{finalTotal.toFixed(2)}</p>
// // // // // // // //               <p className="text-xs text-gray-500">Grand Total</p>
// // // // // // // //             </div>
// // // // // // // //             <button
// // // // // // // //               onClick={() => navigate("/checkout")}
// // // // // // // //               className="bg-pink-600 text-white px-6 py-2 rounded-lg"
// // // // // // // //             >
// // // // // // // //               Proceed
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Cart;


// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const Cart = () => {
// // // // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const shippingCharge = 50;
// // // // // // //   const [discount, setDiscount] = useState(0);
// // // // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // // // //   const [finalTotal, setFinalTotal] = useState(0);

// // // // // // //   const BASE_URL =
// // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // //     "https://ecommerce-mern-backend-2-t4ku.onrender.com";

// // // // // // //   useEffect(() => {
// // // // // // //     const total = cart.reduce(
// // // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // // //       0
// // // // // // //     );
// // // // // // //     const discountValue = total > 1000 ? total * 0.1 : 0;
// // // // // // //     setTotalPrice(total);
// // // // // // //     setDiscount(discountValue);
// // // // // // //     setFinalTotal(total - discountValue + shippingCharge);
// // // // // // //   }, [cart]);

// // // // // // //   const handleQuantityChange = (productId, qty) => {
// // // // // // //     updateQuantity(productId, parseInt(qty));
// // // // // // //   };

// // // // // // //   if (cart.length === 0)
// // // // // // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // // // //       <h1 className="text-2xl font-semibold mb-6">Bag ({cart.length} item)</h1>
// // // // // // //       <div className="grid md:grid-cols-3 gap-6">
// // // // // // //         {/* LEFT - ITEMS */}
// // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // //           {cart.map((item) => (
// // // // // // //             <div
// // // // // // //               key={item._id}
// // // // // // //               className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
// // // // // // //             >
// // // // // // //               <img
// // // // // // //                 src={
// // // // // // //                   item.images?.[0]?.startsWith("http")
// // // // // // //                     ? item.images[0]
// // // // // // //                     : `${BASE_URL}/uploads/${item.images?.[0]}`
// // // // // // //                 }
// // // // // // //                 alt={item.title}
// // // // // // //                 className="w-32 h-32 object-cover rounded" // slightly bigger
// // // // // // //               />
// // // // // // //               <div className="flex-1">
// // // // // // //                 <h3 className="font-medium text-gray-800">{item.title}</h3>
// // // // // // //                 <p className="text-gray-600 mt-1">₹{item.price}</p>
// // // // // // //                 <div className="flex items-center gap-3 mt-3 text-sm">
// // // // // // //                   <span>Qty:</span>
// // // // // // //                   <select
// // // // // // //                     value={item.quantity}
// // // // // // //                     onChange={(e) =>
// // // // // // //                       handleQuantityChange(item._id, e.target.value)
// // // // // // //                     }
// // // // // // //                     className="border rounded px-2 py-1"
// // // // // // //                   >
// // // // // // //                     {[...Array(10).keys()].map((i) => (
// // // // // // //                       <option key={i + 1} value={i + 1}>
// // // // // // //                         {i + 1}
// // // // // // //                       </option>
// // // // // // //                     ))}
// // // // // // //                   </select>
// // // // // // //                 </div>
// // // // // // //                 <button
// // // // // // //                   onClick={() => removeFromCart(item._id)}
// // // // // // //                   className="text-red-500 text-sm mt-3"
// // // // // // //                 >
// // // // // // //                   Remove
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* RIGHT - PRICE PANEL */}
// // // // // // //         <div className="space-y-4">
// // // // // // //           {/* Price Details */}
// // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // // // // // //             <h2 className="font-semibold mb-3">Price Details</h2>
// // // // // // //             <div className="flex justify-between text-sm mb-2">
// // // // // // //               <span>Bag MRP</span>
// // // // // // //               <span>₹{totalPrice.toFixed(2)}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between text-sm mb-2 text-green-600">
// // // // // // //               <span>Discount</span>
// // // // // // //               <span>-₹{discount.toFixed(2)}</span>
// // // // // // //             </div>
// // // // // // //             <div className="flex justify-between text-sm mb-2">
// // // // // // //               <span>Shipping</span>
// // // // // // //               <span>₹{shippingCharge.toFixed(2)}</span>
// // // // // // //             </div>
// // // // // // //             <hr className="my-3" />
// // // // // // //             <div className="flex justify-between font-semibold text-lg">
// // // // // // //               <span>You Pay</span>
// // // // // // //               <span>₹{finalTotal.toFixed(2)}</span>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
// // // // // // //             <div>
// // // // // // //               <p className="font-semibold">₹{finalTotal.toFixed(2)}</p>
// // // // // // //               <p className="text-xs text-gray-500">Grand Total</p>
// // // // // // //             </div>
// // // // // // //             <button
// // // // // // //               onClick={() => navigate("/checkout")}
// // // // // // //               className="bg-pink-600 text-white px-6 py-2 rounded-lg"
// // // // // // //             >
// // // // // // //               Proceed
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Cart;




// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useCart } from "../../context/CartContext";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // const Cart = () => {
// // // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // // //   const navigate = useNavigate();

// // // // // //   const shippingCharge = 50;
// // // // // //   const [discount, setDiscount] = useState(0);
// // // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // // //   const [finalTotal, setFinalTotal] = useState(0);

// // // // // //   const BASE_URL =
// // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // //     "https://ecommerce-mern-backend-1.onrender.com"; // use old URL like product page

// // // // // //   useEffect(() => {
// // // // // //     const total = cart.reduce(
// // // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // // //       0
// // // // // //     );
// // // // // //     const discountValue = total > 1000 ? total * 0.1 : 0;
// // // // // //     setTotalPrice(total);
// // // // // //     setDiscount(discountValue);
// // // // // //     setFinalTotal(total - discountValue + shippingCharge);
// // // // // //   }, [cart]);

// // // // // //   const handleQuantityChange = (productId, qty) => {
// // // // // //     updateQuantity(productId, parseInt(qty));
// // // // // //   };

// // // // // //   if (cart.length === 0)
// // // // // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // // //       <h1 className="text-2xl font-semibold mb-6">Bag ({cart.length} item)</h1>
// // // // // //       <div className="grid md:grid-cols-3 gap-6">
// // // // // //         {/* LEFT - ITEMS */}
// // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // //           {cart.map((item) => {
// // // // // //             const imageUrl =
// // // // // //               item.images && item.images[0]
// // // // // //                 ? item.images[0].startsWith("http")
// // // // // //                   ? item.images[0]
// // // // // //                   : item.images[0].startsWith("/uploads/")
// // // // // //                   ? `${BASE_URL}${item.images[0]}`
// // // // // //                   : `${BASE_URL}/uploads/${item.images[0]}`
// // // // // //                 : "/placeholder.png"; // fallback

// // // // // //             return (
// // // // // //               <div
// // // // // //                 key={item._id}
// // // // // //                 // className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
// // // // // //                  className="bg-white rounded-xl p-4 flex gap-4 shadow-sm 
// // // // // //   hover:shadow-xl hover:-translate-y-1 
// // // // // //   transition-all duration-300 ease-in-out"
// // // // // //               >
// // // // // //                 <img
// // // // // //                   src={imageUrl}
// // // // // //                   alt={item.title}
// // // // // //                   // className="w-70 h-90 object-cover rounded"
// // // // // //                    className="w-70 h-90 object-cover rounded 
// // // // // //   transition-transform duration-300 hover:scale-105"
// // // // // //                 />
// // // // // //                 <div className="flex-1">
// // // // // //                   <h3 className="font-medium text-gray-800">{item.title}</h3>
// // // // // //                   <p className="text-gray-600 mt-1">₹{item.price}</p>
// // // // // //                   <div className="flex items-center gap-3 mt-3 text-sm">
// // // // // //                     <span>Qty:</span>
// // // // // //                     <select
// // // // // //                       value={item.quantity}
// // // // // //                       onChange={(e) =>
// // // // // //                         handleQuantityChange(item._id, e.target.value)
// // // // // //                       }
// // // // // //                       // className="border rounded px-2 py-1"
// // // // // //                       className="border rounded px-2 py-1 
// // // // // // focus:outline-none focus:ring-2 focus:ring-pink-400 
// // // // // // transition"
// // // // // //                     >
// // // // // //                       {[...Array(10).keys()].map((i) => (
// // // // // //                         <option key={i + 1} value={i + 1}>
// // // // // //                           {i + 1}
// // // // // //                         </option>
// // // // // //                       ))}
// // // // // //                     </select>
// // // // // //                   </div>
// // // // // //                   <button
// // // // // //                     onClick={() => removeFromCart(item._id)}
// // // // // //                     // className="text-red-500 text-sm mt-3"
// // // // // //                     className="text-red-500 text-sm mt-3 
// // // // // //   hover:text-red-700 hover:underline 
// // // // // //   transition duration-200"
                    
// // // // // //                   >
// // // // // //                     Remove
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             );
// // // // // //           })}
// // // // // //         </div>

// // // // // //         {/* RIGHT - PRICE PANEL */}
// // // // // //         <div className="space-y-4">
// // // // // //           {/* <div className="bg-white p-4 rounded-xl shadow-sm"> */}
// // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm 
// // // // // // hover:shadow-md transition duration-300">
// // // // // //             <h2 className="font-semibold mb-3">Price Details</h2>
// // // // // //             <div className="flex justify-between text-sm mb-2">
// // // // // //               <span>Bag MRP</span>
// // // // // //               <span>₹{totalPrice.toFixed(2)}</span>
// // // // // //             </div>
// // // // // //             <div className="flex justify-between text-sm mb-2 text-green-600">
// // // // // //               <span>Discount</span>
// // // // // //               <span>-₹{discount.toFixed(2)}</span>
// // // // // //             </div>
// // // // // //             <div className="flex justify-between text-sm mb-2">
// // // // // //               <span>Shipping</span>
// // // // // //               <span>₹{shippingCharge.toFixed(2)}</span>
// // // // // //             </div>
// // // // // //             <hr className="my-3" />
// // // // // //             <div className="flex justify-between font-semibold text-lg">
// // // // // //               <span>You Pay</span>
// // // // // //               <span>₹{finalTotal.toFixed(2)}</span>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
// // // // // //             <div>
// // // // // //               <p className="font-semibold">₹{finalTotal.toFixed(2)}</p>
// // // // // //               <p className="text-xs text-gray-500">Grand Total</p>
// // // // // //             </div>
// // // // // //             <button
// // // // // //               onClick={() => navigate("/checkout")}
// // // // // //               // className="bg-pink-600 text-white px-6 py-2 rounded-lg"
// // // // // //                 className="bg-pink-600 text-white px-6 py-2 rounded-lg 
// // // // // //   hover:bg-pink-700 hover:scale-105 
// // // // // //   active:scale-95 
// // // // // //   transition transform duration-200"
// // // // // //             >
// // // // // //               Proceed
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Cart;

// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useCart } from "../../context/CartContext";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const Cart = () => {
// // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // //   const navigate = useNavigate();

// // // // //   const shippingCharge = 50;
// // // // //   const [discount, setDiscount] = useState(0);
// // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // //   const [finalTotal, setFinalTotal] = useState(0);

// // // // //   const isCartEmpty = cart.length === 0;

// // // // //   useEffect(() => {
// // // // //     const total = cart.reduce(
// // // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // // //       0
// // // // //     );

// // // // //     const discountValue = total > 1000 ? total * 0.1 : 0;

// // // // //     setTotalPrice(total);
// // // // //     setDiscount(discountValue);

// // // // //     // ✅ FIX
// // // // //     setFinalTotal(isCartEmpty ? 0 : total - discountValue + shippingCharge);
// // // // //   }, [cart]);

// // // // //   if (isCartEmpty)
// // // // //     return (
// // // // //       <div className="p-10 text-center text-lg mb-40 mt-20">
// // // // //         Your cart is empty 🛒
// // // // //       </div>
// // // // //     );

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-100 p-6">
// // // // //       <h1 className="text-2xl font-semibold mb-6">
// // // // //         Bag ({cart.length} item)
// // // // //       </h1>

// // // // //       <div className="grid md:grid-cols-3 gap-6">
// // // // //         {/* LEFT */}
// // // // //         <div className="md:col-span-2 space-y-4">
// // // // //           {cart.map((item) => (
// // // // //             <div
// // // // //               key={item._id}
// // // // //               className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
// // // // //             >
// // // // //               <img
// // // // //                 src={item.image}
// // // // //                 alt={item.title}
// // // // //                 className="w-32 h-32 object-cover rounded"
// // // // //               />

// // // // //               <div className="flex-1">
// // // // //                 <h3 className="font-medium">{item.title}</h3>
// // // // //                 <p>₹{item.price}</p>

// // // // //                 <select
// // // // //                   value={item.quantity}
// // // // //                   onChange={(e) =>
// // // // //                     updateQuantity(item._id, e.target.value)
// // // // //                   }
// // // // //                   className="border mt-2 px-2 py-1"
// // // // //                 >
// // // // //                   {[...Array(10).keys()].map((i) => (
// // // // //                     <option key={i + 1}>{i + 1}</option>
// // // // //                   ))}
// // // // //                 </select>

// // // // //                 <button
// // // // //                   onClick={() => removeFromCart(item._id)}
// // // // //                   className="text-red-500 block mt-2"
// // // // //                 >
// // // // //                   Remove
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* RIGHT */}
// // // // //         <div className="bg-white p-4 rounded">
// // // // //           <h2 className="font-semibold mb-3">Price Details</h2>

// // // // //           <p>Subtotal: ₹{totalPrice.toFixed(2)}</p>
// // // // //           <p>Discount: ₹{discount.toFixed(2)}</p>
// // // // //           <p>Shipping: ₹{shippingCharge}</p>

// // // // //           <hr className="my-2" />

// // // // //           <p className="font-bold">
// // // // //             Total: ₹{finalTotal.toFixed(2)}
// // // // //           </p>

// // // // //           <button
// // // // //             onClick={() => navigate("/checkout")}
// // // // //             className="bg-pink-600 text-white px-4 py-2 mt-4 rounded w-full"
// // // // //           >
// // // // //             Proceed
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Cart;



// // // // import React, { useEffect, useState } from "react";
// // // // import { useCart } from "../../context/CartContext";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Cart = () => {
// // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // //   const navigate = useNavigate();

// // // //   const shippingCharge = 50;
// // // //   const [discount, setDiscount] = useState(0);
// // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // //   const [finalTotal, setFinalTotal] = useState(0);

// // // //   const isCartEmpty = cart.length === 0;

// // // //   useEffect(() => {
// // // //     const total = cart.reduce(
// // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // //       0
// // // //     );

// // // //     const discountValue = total > 1000 ? total * 0.1 : 0;

// // // //     setTotalPrice(total);
// // // //     setDiscount(discountValue);
// // // //     setFinalTotal(isCartEmpty ? 0 : total - discountValue + shippingCharge);
// // // //   }, [cart]);

// // // //   if (isCartEmpty)
// // // //     return (
// // // //       <div className="flex flex-col items-center justify-center h-[70vh] text-gray-500">
// // // //         <div className="text-6xl animate-bounce">🛒</div>
// // // //         <p className="mt-4 text-xl font-semibold">Your cart is empty</p>
// // // //         <button
// // // //           onClick={() => navigate("/")}
// // // //           className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300 shadow-lg hover:scale-105"
// // // //         >
// // // //           Shop Now
// // // //         </button>
// // // //       </div>
// // // //     );

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
// // // //       <h1 className="text-3xl font-bold mb-8 tracking-wide">
// // // //         🛍️ Bag ({cart.length})
// // // //       </h1>

// // // //       <div className="grid md:grid-cols-3 gap-8">
     
// // // // {/* LEFT */}
// // // // {/* <div className="md:col-span-2 space-y-8">
// // // //   {cart.map((item) => (
// // // //     <div
// // // //       key={item._id}
// // // //       className="group bg-white/90 backdrop-blur-md rounded-3xl p-8 flex gap-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
// // // //       style={{ minWidth: '100%' }} // ensures full width usage
// // // //     >
      
// // // //       <div className="overflow-hidden rounded-3xl flex-shrink-0">
// // // //         <img
// // // //           src={item.image}
// // // //           alt={item.title}
// // // //           className="w-[220px] h-[220px] object-cover transform group-hover:scale-110 transition duration-500"
// // // //         />
// // // //       </div>

      
// // // //       <div className="flex flex-col justify-between flex-1">
// // // //         <div>
// // // //           <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition">
// // // //             {item.title}
// // // //           </h3>

// // // //           <p className="text-xl font-semibold text-gray-700 mt-2">
// // // //             ₹{item.price}
// // // //           </p>
// // // //         </div>

       
// // // //         <div className="flex items-center justify-between mt-8">
// // // //           <div className="flex items-center gap-4">
// // // //             <span className="text-gray-500 font-medium">Qty:</span>
// // // //             <select
// // // //               value={item.quantity}
// // // //               onChange={(e) =>
// // // //                 updateQuantity(item._id, e.target.value)
// // // //               }
// // // //               className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none transition shadow-sm"
// // // //             >
// // // //               {[...Array(10).keys()].map((i) => (
// // // //                 <option key={i + 1}>{i + 1}</option>
// // // //               ))}
// // // //             </select>
// // // //           </div>

// // // //           <button
// // // //             onClick={() => removeFromCart(item._id)}
// // // //             className="text-red-500 hover:text-red-700 font-semibold transition hover:scale-105"
// // // //           >
// // // //             🗑 Remove
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   ))}
// // // // </div> 
// // // // {/* LEFT */}
// // // // <div className="md:col-span-2 space-y-8">
// // // //   {cart.map((item) => (
// // // //     <div
// // // //       key={item._id}
// // // //       className="group bg-white/90 backdrop-blur-md rounded-3xl p-8 flex gap-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
// // // //       style={{ minWidth: '100%' }}
// // // //     >
// // // //       {/* IMAGE */}
// // // //       <div className="overflow-hidden rounded-3xl flex-shrink-0">
// // // //         <img
// // // //           src={item.image}
// // // //           alt={item.title}
// // // //           className="w-[220px] h-[220px] object-cover transform group-hover:scale-110 transition duration-500"
// // // //         />
// // // //       </div>

// // // //       {/* DETAILS */}
// // // //       <div className="flex flex-col justify-between flex-1">
// // // //         <div>
// // // //           <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition">
// // // //             {item.title}
// // // //           </h3>

// // // //           <p className="text-xl font-semibold text-gray-700 mt-2">
// // // //             ₹{item.price}
// // // //           </p>
// // // //         </div>

// // // //         {/* ACTIONS */}
// // // //         <div className="flex items-center justify-between mt-8">
// // // //           <div className="flex items-center gap-4">
// // // //             <span className="text-gray-500 font-medium">Qty:</span>
// // // //             <select
// // // //               value={item.quantity}
// // // //               onChange={(e) =>
// // // //                 updateQuantity(item._id, Number(e.target.value)) // ✅ Convert to number
// // // //               }
// // // //               className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none transition shadow-sm bg-white hover:border-pink-400"
// // // //             >
// // // //               {[...Array(10).keys()].map((i) => (
// // // //                 <option key={i + 1} value={i + 1}>
// // // //                   {i + 1}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //           </div>

// // // //           <button
// // // //             onClick={() => removeFromCart(item._id)}
// // // //             className="text-red-500 hover:text-red-700 font-semibold transition hover:scale-110"
// // // //           >
// // // //             🗑 Remove
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   ))}
// // // // </div>

// // // //         {/* RIGHT */}
// // // //         <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg sticky top-10 h-fit">
// // // //           <h2 className="font-bold text-xl mb-4 border-b pb-2">
// // // //             💳 Price Details
// // // //           </h2>

// // // //           <div className="space-y-2 text-gray-700">
// // // //             <div className="flex justify-between">
// // // //               <span>Subtotal</span>
// // // //               <span>₹{totalPrice.toFixed(2)}</span>
// // // //             </div>

// // // //             <div className="flex justify-between text-green-600">
// // // //               <span>Discount</span>
// // // //               <span>- ₹{discount.toFixed(2)}</span>
// // // //             </div>

// // // //             <div className="flex justify-between">
// // // //               <span>Shipping</span>
// // // //               <span>₹{shippingCharge}</span>
// // // //             </div>
// // // //           </div>

// // // //           <hr className="my-4" />

// // // //           <div className="flex justify-between text-lg font-bold">
// // // //             <span>Total</span>
// // // //             <span className="text-pink-600">
// // // //               ₹{finalTotal.toFixed(2)}
// // // //             </span>
// // // //           </div>

// // // //           <button
// // // //             onClick={() => navigate("/checkout")}
// // // //             className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
// // // //           >
// // // //             🚀 Proceed to Checkout
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Cart;




// // // import React, { useEffect, useState } from "react";
// // // import { useCart } from "../../context/CartContext";
// // // import { useNavigate } from "react-router-dom";

// // // const Cart = () => {
// // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // //   const navigate = useNavigate();

// // //   const shippingCharge = 50;
// // //   const [discount, setDiscount] = useState(0);
// // //   const [totalPrice, setTotalPrice] = useState(0);
// // //   const [finalTotal, setFinalTotal] = useState(0);

// // //   const isCartEmpty = cart.length === 0;

// // //   useEffect(() => {
// // //     const total = cart.reduce(
// // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // //       0
// // //     );

// // //     const discountValue = total > 1000 ? total * 0.1 : 0;

// // //     setTotalPrice(total);
// // //     setDiscount(discountValue);
// // //     setFinalTotal(isCartEmpty ? 0 : total - discountValue + shippingCharge);
// // //   }, [cart]);

// // //   if (isCartEmpty)
// // //     return (
// // //       <div className="flex flex-col items-center justify-center h-[70vh] text-gray-500">
// // //         <div className="text-6xl animate-bounce">🛒</div>
// // //         <p className="mt-4 text-xl font-semibold">Your cart is empty</p>
// // //         <button
// // //           onClick={() => navigate("/")}
// // //           className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300 shadow-lg hover:scale-105"
// // //         >
// // //           Shop Now
// // //         </button>
// // //       </div>
// // //     );

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
// // //       <h1 className="text-3xl font-bold mb-8 tracking-wide">
// // //         🛍️ Bag ({cart.length})
// // //       </h1>

// // //       <div className="grid md:grid-cols-3 gap-8">
     
// // // {/* LEFT */}
// // // <div className="md:col-span-2 space-y-8">
// // //   {cart.map((item) => (
// // //     <div
// // //       key={item._id}
// // //       className="group bg-white/90 backdrop-blur-md rounded-3xl p-8 flex gap-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
// // //       style={{ minWidth: '100%' }} // ensures full width usage
// // //     >
// // //       {/* IMAGE */}
// // //       <div className="overflow-hidden rounded-3xl flex-shrink-0">
// // //         <img
// // //           src={item.image}
// // //           alt={item.title}
// // //           className="w-[220px] h-[220px] object-cover transform group-hover:scale-110 transition duration-500"
// // //         />
// // //       </div>

// // //       {/* DETAILS */}
// // //       <div className="flex flex-col justify-between flex-1">
// // //         <div>
// // //           <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition">
// // //             {item.title}
// // //           </h3>

// // //           <p className="text-xl font-semibold text-gray-700 mt-2">
// // //             ₹{item.price}
// // //           </p>
// // //         </div>

// // //         {/* ACTIONS */}
// // //         <div className="flex items-center justify-between mt-8">
// // //           <div className="flex items-center gap-4">
// // //             <span className="text-gray-500 font-medium">Qty:</span>
// // //             <select
// // //               value={item.quantity}
// // //               onChange={(e) =>
// // //                 updateQuantity(item._id, e.target.value)
// // //               }
// // //               className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none transition shadow-sm"
// // //             >
// // //               {[...Array(10).keys()].map((i) => (
// // //                 <option key={i + 1}>{i + 1}</option>
// // //               ))}
// // //             </select>
// // //           </div>

// // //           <button
// // //             onClick={() => removeFromCart(item._id)}
// // //             className="text-red-500 hover:text-red-700 font-semibold transition hover:scale-105"
// // //           >
// // //             🗑 Remove
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   ))}
// // // </div>

// // //         {/* RIGHT */}
// // //         <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg sticky top-10 h-fit">
// // //           <h2 className="font-bold text-xl mb-4 border-b pb-2">
// // //             💳 Price Details
// // //           </h2>

// // //           <div className="space-y-2 text-gray-700">
// // //             <div className="flex justify-between">
// // //               <span>Subtotal</span>
// // //               <span>₹{totalPrice.toFixed(2)}</span>
// // //             </div>

// // //             <div className="flex justify-between text-green-600">
// // //               <span>Discount</span>
// // //               <span>- ₹{discount.toFixed(2)}</span>
// // //             </div>

// // //             <div className="flex justify-between">
// // //               <span>Shipping</span>
// // //               <span>₹{shippingCharge}</span>
// // //             </div>
// // //           </div>

// // //           <hr className="my-4" />

// // //           <div className="flex justify-between text-lg font-bold">
// // //             <span>Total</span>
// // //             <span className="text-pink-600">
// // //               ₹{finalTotal.toFixed(2)}
// // //             </span>
// // //           </div>

// // //           <button
// // //             onClick={() => navigate("/checkout")}
// // //             className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
// // //           >
// // //             🚀 Proceed to Checkout
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Cart;


// // import React, { useEffect, useState } from "react";
// // import { useCart } from "../../context/CartContext";
// // import { useNavigate } from "react-router-dom";

// // const Cart = () => {
// //   const { cart, removeFromCart, updateQuantity } = useCart();
// //   const navigate = useNavigate();

// //   const shippingCharge = 50;
// //   const [discount, setDiscount] = useState(0);
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const [finalTotal, setFinalTotal] = useState(0);

// //   const isCartEmpty = cart.length === 0;

// //   // Calculate totals whenever cart changes
// //   useEffect(() => {
// //     const total = cart.reduce(
// //       (sum, item) => sum + item.price * (item.quantity || 1),
// //       0
// //     );
// //     const discountValue = total > 1000 ? total * 0.1 : 0;

// //     setTotalPrice(total);
// //     setDiscount(discountValue);
// //     setFinalTotal(isCartEmpty ? 0 : total - discountValue + shippingCharge);
// //   }, [cart, isCartEmpty]);

// //   if (isCartEmpty)
// //     return (
// //       <div className="flex flex-col items-center justify-center h-[70vh] text-gray-500">
// //         <div className="text-6xl animate-bounce">🛒</div>
// //         <p className="mt-4 text-xl font-semibold">Your cart is empty</p>
// //         <button
// //           onClick={() => navigate("/")}
// //           className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300 shadow-lg hover:scale-105"
// //         >
// //           Shop Now
// //         </button>
// //       </div>
// //     );

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
// //       <h1 className="text-3xl font-bold mb-8 tracking-wide">
// //         🛍️ Bag ({cart.length})
// //       </h1>

// //       <div className="grid md:grid-cols-3 gap-8">
// //         {/* LEFT SIDE */}
// //         <div className="md:col-span-2 space-y-8">
// //           {cart.map((item) => (
// //             <div
// //               key={item._id}
// //               className="group bg-white/90 backdrop-blur-md rounded-3xl p-8 flex gap-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
// //             >
// //               {/* IMAGE */}
// //               <div className="overflow-hidden rounded-3xl flex-shrink-0">
// //                 <img
// //                   src={item.image}
// //                   alt={item.title}
// //                   className="w-[220px] h-[220px] object-cover transform group-hover:scale-110 transition duration-500"
// //                 />
// //               </div>

// //               {/* DETAILS */}
// //               <div className="flex flex-col justify-between flex-1">
// //                 <div>
// //                   <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition">
// //                     {item.title}
// //                   </h3>
// //                   <p className="text-xl font-semibold text-gray-700 mt-2">
// //                     ₹{item.price}
// //                   </p>
// //                 </div>

// //                 {/* ACTIONS */}
// //                 <div className="flex items-center justify-between mt-8">
// //                   {/* Quantity Selector */}
// //                   <div className="flex items-center gap-4">
// //                     <span className="text-gray-500 font-medium">Qty:</span>
// //                     <select
// //                       value={item.quantity}
// //                       onChange={(e) =>
// //                         updateQuantity(item._id, Number(e.target.value))
// //                       }
// //                       className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none transition shadow-sm bg-white hover:border-pink-400"
// //                     >
// //                       {[...Array(10).keys()].map((i) => (
// //                         <option key={i + 1} value={i + 1}>
// //                           {i + 1}
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   {/* Remove Button */}
// //                   <button
// //                     onClick={() => removeFromCart(item._id)}
// //                     className="text-red-500 hover:text-red-700 font-semibold transition hover:scale-110"
// //                   >
// //                     🗑 Remove
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* RIGHT SIDE */}
// //         <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg sticky top-10 h-fit transition-all duration-500 hover:shadow-2xl">
// //           <h2 className="font-bold text-xl mb-4 border-b pb-2">
// //             💳 Price Details
// //           </h2>

// //           <div className="space-y-2 text-gray-700">
// //             <div className="flex justify-between">
// //               <span>Subtotal</span>
// //               <span>₹{totalPrice.toFixed(2)}</span>
// //             </div>

// //             <div className="flex justify-between text-green-600">
// //               <span>Discount</span>
// //               <span>- ₹{discount.toFixed(2)}</span>
// //             </div>

// //             <div className="flex justify-between">
// //               <span>Shipping</span>
// //               <span>₹{shippingCharge}</span>
// //             </div>
// //           </div>

// //           <hr className="my-4" />

// //           <div className="flex justify-between text-lg font-bold">
// //             <span>Total</span>
// //             <span className="text-pink-600">
// //               ₹{finalTotal.toFixed(2)}
// //             </span>
// //           </div>

// //           <button
// //             onClick={() => navigate("/checkout")}
// //             className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
// //           >
// //             🚀 Proceed to Checkout
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;

// import React, { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const shippingCharge = 50;
//   const [discount, setDiscount] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [finalTotal, setFinalTotal] = useState(0);

//   const isCartEmpty = cart.length === 0;

//   // Calculate totals dynamically
//   useEffect(() => {
//     const total = cart.reduce(
//       (sum, item) => sum + item.price * (item.quantity || 1),
//       0
//     );
//     const discountValue = total > 1000 ? total * 0.1 : 0;

//     setTotalPrice(total);
//     setDiscount(discountValue);
//     setFinalTotal(isCartEmpty ? 0 : total - discountValue + shippingCharge);
//   }, [cart, isCartEmpty]);

//   if (isCartEmpty)
//     return (
//       <div className="flex flex-col items-center justify-center h-[70vh] text-gray-500">
//         <div className="text-6xl animate-bounce">🛒</div>
//         <p className="mt-4 text-xl font-semibold">Your cart is empty</p>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300 shadow-lg hover:scale-105"
//         >
//           Shop Now
//         </button>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
//       <h1 className="text-3xl font-bold mb-8 tracking-wide">
//         🛍️ Bag ({cart.length})
//       </h1>

//       <div className="grid md:grid-cols-3 gap-8">
//         {/* LEFT */}
//         <div className="md:col-span-2 space-y-8">
//           {cart.map((item) => (
//             <div
//               key={item._id}
//               className="group bg-white/90 backdrop-blur-md rounded-3xl p-8 flex gap-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
//             >
//               <div className="overflow-hidden rounded-3xl flex-shrink-0">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-[220px] h-[220px] object-cover transform group-hover:scale-110 transition duration-500"
//                 />
//               </div>

//               <div className="flex flex-col justify-between flex-1">
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition">
//                     {item.title}
//                   </h3>
//                   <p className="text-xl font-semibold text-gray-700 mt-2">
//                     ₹{item.price}
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-between mt-8">
//                   <div className="flex items-center gap-4">
//                     <span className="text-gray-500 font-medium">Qty:</span>
//                     <select
//                       value={item.quantity}
//                       onChange={(e) =>
//                         updateQuantity(item._id, Number(e.target.value))
//                       }
//                       className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none transition shadow-sm bg-white hover:border-pink-400"
//                     >
//                       {[...Array(10).keys()].map((i) => (
//                         <option key={i + 1} value={i + 1}>
//                           {i + 1}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="text-red-500 hover:text-red-700 font-semibold transition hover:scale-110"
//                   >
//                     🗑 Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT */}
//         <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-lg sticky top-10 h-fit transition-all duration-500 hover:shadow-2xl">
//           <h2 className="font-bold text-xl mb-4 border-b pb-2">
//             💳 Price Details
//           </h2>

//           <div className="space-y-2 text-gray-700">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{totalPrice.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between text-green-600">
//               <span>Discount</span>
//               <span>- ₹{discount.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span>₹{shippingCharge}</span>
//             </div>
//           </div>

//           <hr className="my-4" />

//           <div className="flex justify-between text-lg font-bold">
//             <span>Total</span>
//             <span className="text-pink-600">
//               ₹{finalTotal.toFixed(2)}
//             </span>
//           </div>

//           <button
//             onClick={() => navigate("/checkout")}
//             className="w-full mt-6 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
//           >
//             🚀 Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import React, { useEffect, useState } from "react";
// import { useCart } from "../../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const shippingCharge = 50;
//   const [discount, setDiscount] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [finalTotal, setFinalTotal] = useState(0);

//   const BASE_URL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-1.onrender.com"; // use old URL like product page

//   useEffect(() => {
//     const total = cart.reduce(
//       (sum, item) => sum + item.price * (item.quantity || 1),
//       0
//     );
//     const discountValue = total > 1000 ? total * 0.1 : 0;
//     setTotalPrice(total);
//     setDiscount(discountValue);
//     setFinalTotal(total - discountValue + shippingCharge);
//   }, [cart]);

//   const handleQuantityChange = (productId, qty) => {
//     updateQuantity(productId, parseInt(qty));
//   };

//   if (cart.length === 0)
//     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-semibold mb-6">Bag ({cart.length} item)</h1>
//       <div className="grid md:grid-cols-3 gap-6">
//         {/* LEFT - ITEMS */}
//         <div className="md:col-span-2 space-y-4">
//           {cart.map((item) => {
//             const imageUrl =
//               item.images && item.images[0]
//                 ? item.images[0].startsWith("http")
//                   ? item.images[0]
//                   : item.images[0].startsWith("/uploads/")
//                   ? `${BASE_URL}${item.images[0]}`
//                   : `${BASE_URL}/uploads/${item.images[0]}`
//                 : "/placeholder.png"; // fallback

//             return (
//               <div
//                 key={item._id}
//                 // className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
//                  className="bg-white rounded-xl p-4 flex gap-4 shadow-sm 
//   hover:shadow-xl hover:-translate-y-1 
//   transition-all duration-300 ease-in-out"
//               >
//                 <img
//                   src={imageUrl}
//                   alt={item.title}
//                   // className="w-70 h-90 object-cover rounded"
//                    className="w-70 h-90 object-cover rounded 
//   transition-transform duration-300 hover:scale-105"
//                 />
//                 <div className="flex-1">
//                   <h3 className="font-medium text-gray-800">{item.title}</h3>
//                   <p className="text-gray-600 mt-1">₹{item.price}</p>
//                   <div className="flex items-center gap-3 mt-3 text-sm">
//                     <span>Qty:</span>
//                     <select
//                       value={item.quantity}
//                       onChange={(e) =>
//                         handleQuantityChange(item._id, e.target.value)
//                       }
//                       // className="border rounded px-2 py-1"
//                       className="border rounded px-2 py-1 
// focus:outline-none focus:ring-2 focus:ring-pink-400 
// transition"
//                     >
//                       {[...Array(10).keys()].map((i) => (
//                         <option key={i + 1} value={i + 1}>
//                           {i + 1}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     // className="text-red-500 text-sm mt-3"
//                     className="text-red-500 text-sm mt-3 
//   hover:text-red-700 hover:underline 
//   transition duration-200"
                    
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* RIGHT - PRICE PANEL */}
//         <div className="space-y-4">
//           {/* <div className="bg-white p-4 rounded-xl shadow-sm"> */}
//           <div className="bg-white p-4 rounded-xl shadow-sm 
// hover:shadow-md transition duration-300">
//             <h2 className="font-semibold mb-3">Price Details</h2>
//             <div className="flex justify-between text-sm mb-2">
//               <span>Bag MRP</span>
//               <span>₹{totalPrice.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between text-sm mb-2 text-green-600">
//               <span>Discount</span>
//               <span>-₹{discount.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between text-sm mb-2">
//               <span>Shipping</span>
//               <span>₹{shippingCharge.toFixed(2)}</span>
//             </div>
//             <hr className="my-3" />
//             <div className="flex justify-between font-semibold text-lg">
//               <span>You Pay</span>
//               <span>₹{finalTotal.toFixed(2)}</span>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
//             <div>
//               <p className="font-semibold">₹{finalTotal.toFixed(2)}</p>
//               <p className="text-xs text-gray-500">Grand Total</p>
//             </div>
//             <button
//               onClick={() => navigate("/checkout")}
//               // className="bg-pink-600 text-white px-6 py-2 rounded-lg"
//                 className="bg-pink-600 text-white px-6 py-2 rounded-lg 
//   hover:bg-pink-700 hover:scale-105 
//   active:scale-95 
//   transition transform duration-200"
//             >
//               Proceed
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const shippingCharge = 50;
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const discountValue = total > 1000 ? total * 0.1 : 0;
    setTotalPrice(total);
    setDiscount(discountValue);
    setFinalTotal(total -discountValue + shippingCharge);
  }, [cart]);

  const handleQuantityChange = (productId, qty) => {
    updateQuantity(productId, parseInt(qty));
  };

  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-gray-400">
        <div className="text-6xl animate-bounce">🛒</div>
        <p className="mt-4 text-xl font-semibold">Your cart is empty</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
      <h1 className="text-3xl font-bold mb-8 tracking-wide text-gray-800">
        🛍️ Bag ({cart.length})
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* LEFT - ITEMS */}
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => {
            const imageUrl =
              item.images && item.images[0]
                ? item.images[0].startsWith("http")
                  ? item.images[0]
                  : item.images[0].startsWith("/uploads/")
                  ? `${BASE_URL}${item.images[0]}`
                  : `${BASE_URL}/uploads/${item.images[0]}`
                : "/placeholder.png";

            return (
              <div
                key={item._id}
                className="bg-white rounded-3xl p-6 flex gap-6 shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-[1.03] group"
              >
                <img
                  src={imageUrl}
                  alt={item.title}
                  className="w-40 h-40 object-cover rounded-2xl transform transition duration-500 group-hover:scale-110"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 mt-2 font-medium">₹{item.price}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 font-medium">Qty:</span>
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item._id, e.target.value)
                        }
                        className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow shadow-sm"
                      >
                        {[...Array(10).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 font-semibold hover:text-red-700 hover:underline transition duration-200"
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT - PRICE PANEL */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <h2 className="font-bold text-xl mb-4 border-b pb-2 text-gray-800">
              Price Details
            </h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Bag MRP</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600 mb-2">
              <span>Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Shipping</span>
              <span>₹{shippingCharge.toFixed(2)}</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-semibold text-lg text-gray-800">
              <span>You Pay</span>
              <span>₹{finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center hover:shadow-xl transition duration-300">
            <div>
              <p className="font-semibold text-gray-800">₹{finalTotal.toFixed(2)}</p>
              <p className="text-xs text-gray-500">Grand Total</p>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;