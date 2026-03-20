// // // // // // // // // import React from "react";
// // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // // // const Cart = () => {
// // // // // // // // //   const { cart } = useCart();

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // //       <h1 className="text-2xl font-bold mb-4">My Cart</h1>
// // // // // // // // //       {cart.length === 0 ? (
// // // // // // // // //         <p>Your cart is empty.</p>
// // // // // // // // //       ) : (
// // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // // //           {cart.map((product) => (
// // // // // // // // //             <ProductCard key={product._id} product={product} />
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Cart;

// // // // // // // // import React from "react";
// // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // const Cart = () => {
// // // // // // // //   const { cartItems, removeFromCart } = useCart();

// // // // // // // //   if (cartItems.length === 0) return <p className="p-4">Cart is empty</p>;

// // // // // // // //   return (
// // // // // // // //     <div className="p-4">
// // // // // // // //       <h1 className="text-2xl font-bold mb-4">My Cart</h1>
// // // // // // // //       <div className="space-y-4">
// // // // // // // //         {cartItems.map(item => (
// // // // // // // //           <div key={item._id} className="flex justify-between border p-2 rounded">
// // // // // // // //             <div>
// // // // // // // //               <h2 className="font-semibold">{item.title}</h2>
// // // // // // // //               <p>{item.description}</p>
// // // // // // // //               <p>${item.price}</p>
// // // // // // // //             </div>
// // // // // // // //             <button
// // // // // // // //               onClick={() => removeFromCart(item._id)}
// // // // // // // //               className="bg-red-500 text-white px-2 py-1 rounded"
// // // // // // // //             >
// // // // // // // //               Remove
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Cart;


// // // // // // // // src/pages/buyer/Cart.jsx
// // // // // // // import React from "react";
// // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // const Cart = () => {
// // // // // // //   const { cart, removeFromCart } = useCart();

// // // // // // //   if (cart.length === 0)
// // // // // // //     return <div className="p-10 text-center">Your cart is empty.</div>;

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto p-4">
// // // // // // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // // //         {cart.map((item) => (
// // // // // // //           <div key={item._id} className="border p-4 rounded">
// // // // // // //             <img
// // // // // // //               src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // //               alt={item.title}
// // // // // // //               className="h-40 w-full object-cover mb-2"
// // // // // // //             />
// // // // // // //             <h3 className="font-bold">{item.title}</h3>
// // // // // // //             <p>${item.price}</p>
// // // // // // //             <button
// // // // // // //               onClick={() => removeFromCart(item._id)}
// // // // // // //               className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
// // // // // // //             >
// // // // // // //               Remove
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Cart;



// // // // // // // src/pages/buyer/Cart.jsx
// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import { useCart } from "../../context/CartContext";

// // // // // // const Cart = () => {
// // // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // // // //   const [shippingCharge, setShippingCharge] = useState(50); // fixed shipping
// // // // // //   const [discount, setDiscount] = useState(0); // placeholder

// // // // // //   useEffect(() => {
// // // // // //     let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // //     setTotalPrice(total);
// // // // // //     // You can also calculate discount dynamically if you want
// // // // // //     setDiscount(total > 1000 ? total * 0.1 : 0); // example 10% discount if >1000
// // // // // //   }, [cart]);

// // // // // //   const handleQuantityChange = (productId, qty) => {
// // // // // //     updateQuantity(productId, parseInt(qty));
// // // // // //   };

// // // // // //   if (cart.length === 0)
// // // // // //     return <div className="p-10 text-center">Your cart is empty.</div>;

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // //         {/* Cart Items */}
// // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // //           {cart.map((item) => (
// // // // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // // // //               <img
// // // // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // //                 alt={item.title}
// // // // // //                 className="h-24 w-24 object-cover"
// // // // // //               />
// // // // // //               <div className="flex-1">
// // // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // // //                 <p>${item.price}</p>
// // // // // //                 <div className="flex items-center gap-2 mt-2">
// // // // // //                   <label>Quantity:</label>
// // // // // //                   <select
// // // // // //                     value={item.quantity}
// // // // // //                     onChange={(e) => handleQuantityChange(item._id, e.target.value)}
// // // // // //                     className="border p-1"
// // // // // //                   >
// // // // // //                     {[...Array(10).keys()].map((i) => (
// // // // // //                       <option key={i + 1} value={i + 1}>
// // // // // //                         {i + 1}
// // // // // //                       </option>
// // // // // //                     ))}
// // // // // //                   </select>
// // // // // //                 </div>
// // // // // //                 <button
// // // // // //                   onClick={() => removeFromCart(item._id)}
// // // // // //                   className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
// // // // // //                 >
// // // // // //                   Remove
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Price Details */}
// // // // // //         <div className="border p-4 rounded h-fit">
// // // // // //           <h2 className="text-xl font-bold mb-4">Price Details</h2>
// // // // // //           <div className="flex justify-between mb-2">
// // // // // //             <span>MRP:</span>
// // // // // //             <span>${totalPrice.toFixed(2)}</span>
// // // // // //           </div>
// // // // // //           <div className="flex justify-between mb-2">
// // // // // //             <span>Discount:</span>
// // // // // //             <span>-${discount.toFixed(2)}</span>
// // // // // //           </div>
// // // // // //           <div className="flex justify-between mb-2">
// // // // // //             <span>Shipping Charge:</span>
// // // // // //             <span>${shippingCharge.toFixed(2)}</span>
// // // // // //           </div>
// // // // // //           <hr className="my-2" />
// // // // // //           <div className="flex justify-between font-bold text-lg">
// // // // // //             <span>Total:</span>
// // // // // //             <span>${(totalPrice - discount + shippingCharge).toFixed(2)}</span>
// // // // // //           </div>
// // // // // //           <button
// // // // // //             className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
// // // // // //             onClick={() => alert("Proceeding to payment...")}
// // // // // //           >
// // // // // //             Proceed to Pay
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Cart;






// // // // // // src/pages/buyer/Cart.jsx
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { useCart } from "../../context/CartContext";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const Cart = () => {
// // // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // // //   const navigate = useNavigate();

// // // // //   const shippingCharge = 50; // fixed shipping charge
// // // // //   const [discount, setDiscount] = useState(0); // discount
// // // // //   const [totalPrice, setTotalPrice] = useState(0); // sum of products
// // // // //   const [finalTotal, setFinalTotal] = useState(0); // total after discount & shipping

// // // // //   // Calculate totals whenever cart changes
// // // // //   useEffect(() => {
// // // // //     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // //     const discountValue = total > 1000 ? total * 0.1 : 0; // example: 10% discount if > 1000
// // // // //     setTotalPrice(total);
// // // // //     setDiscount(discountValue);
// // // // //     setFinalTotal(total - discountValue + shippingCharge);
// // // // //   }, [cart]);

// // // // //   // Handle quantity change
// // // // //   const handleQuantityChange = (productId, qty) => {
// // // // //     updateQuantity(productId, parseInt(qty));
// // // // //   };

// // // // //   if (cart.length === 0)
// // // // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // // // //   return (
// // // // //     <div className="container mx-auto p-4">
// // // // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //         {/* Cart Items */}
// // // // //         <div className="md:col-span-2 space-y-4">
// // // // //           {cart.map((item) => (
// // // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // // //               <img
// // // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // //                 alt={item.title}
// // // // //                 className="h-24 w-24 object-cover"
// // // // //               />
// // // // //               <div className="flex-1">
// // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // //                 <p>${item.price}</p>
// // // // //                 <div className="flex items-center gap-2 mt-2">
// // // // //                   <label>Quantity:</label>
// // // // //                   <select
// // // // //                     value={item.quantity}
// // // // //                     onChange={(e) => handleQuantityChange(item._id, e.target.value)}
// // // // //                     className="border p-1"
// // // // //                   >
// // // // //                     {[...Array(10).keys()].map((i) => (
// // // // //                       <option key={i + 1} value={i + 1}>
// // // // //                         {i + 1}
// // // // //                       </option>
// // // // //                     ))}
// // // // //                   </select>
// // // // //                 </div>
// // // // //                 <button
// // // // //                   onClick={() => removeFromCart(item._id)}
// // // // //                   className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// // // // //                 >
// // // // //                   Remove
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Price Details */}
// // // // //         <div className="border p-4 rounded h-fit">
// // // // //           <h2 className="text-xl font-bold mb-4">Price Details</h2>
// // // // //           <div className="flex justify-between mb-2">
// // // // //             <span>MRP:</span>
// // // // //             <span>${totalPrice.toFixed(2)}</span>
// // // // //           </div>
// // // // //           <div className="flex justify-between mb-2">
// // // // //             <span>Discount:</span>
// // // // //             <span>-${discount.toFixed(2)}</span>
// // // // //           </div>
// // // // //           <div className="flex justify-between mb-2">
// // // // //             <span>Shipping Charge:</span>
// // // // //             <span>${shippingCharge.toFixed(2)}</span>
// // // // //           </div>
// // // // //           <hr className="my-2" />
// // // // //           <div className="flex justify-between font-bold text-lg">
// // // // //             <span>Total:</span>
// // // // //             <span>${finalTotal.toFixed(2)}</span>
// // // // //           </div>

// // // // //           <button
// // // // //             className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
// // // // //             onClick={() => navigate("/checkout")} // go to checkout page
// // // // //           >
// // // // //             Proceed to Pay
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Cart;





// // // // // src/pages/buyer/Cart.jsx
// // // // import React, { useEffect, useState } from "react";
// // // // import { useCart } from "../../context/CartContext";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Cart = () => {
// // // //   const { cart, removeFromCart, updateQuantity } = useCart();
// // // //   const navigate = useNavigate();

// // // //   const shippingCharge = 50; // fixed shipping
// // // //   const [discount, setDiscount] = useState(0);
// // // //   const [totalPrice, setTotalPrice] = useState(0);
// // // //   const [finalTotal, setFinalTotal] = useState(0);
 
// // // //   // Calculate totals whenever cart changes
// // // //   useEffect(() => {
// // // //     const total = cart.reduce(
// // // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // // //       0
// // // //     );
// // // //     const discountValue = total > 1000 ? total * 0.1 : 0; // 10% discount if >1000
// // // //     setTotalPrice(total);
// // // //     setDiscount(discountValue);
// // // //     setFinalTotal(total - discountValue + shippingCharge);
// // // //   }, [cart]);

// // // //   // Handle quantity change from dropdown
// // // //   const handleQuantityChange = (productId, qty) => {
// // // //     updateQuantity(productId, parseInt(qty));
// // // //   };

// // // //   if (cart.length === 0)
// // // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //         {/* Cart Items */}
// // // //         <div className="md:col-span-2 space-y-4">
// // // //           {cart.map((item) => (
// // // //             <div
// // // //               key={item._id}
// // // //               className="flex border p-4 rounded items-center gap-4"
// // // //             >
// // // //               <img
// // // //                 src={
// // // //                   item.image?.startsWith("http")
// // // //                     ? item.image
// // // //                     : `http://localhost:5000/${item.image}`
// // // //                 }
// // // //                 alt={item.title}
// // // //                 className="h-24 w-24 object-cover"
// // // //               />
// // // //               <div className="flex-1">
// // // //                 <h3 className="font-bold">{item.title}</h3>
// // // //                 <p>${item.price}</p>

// // // //                 <div className="flex items-center gap-2 mt-2">
// // // //                   <label>Quantity:</label>
// // // //                   <select
// // // //                     value={item.quantity}
// // // //                     onChange={(e) =>
// // // //                       handleQuantityChange(item._id, e.target.value)
// // // //                     }
// // // //                     className="border p-1"
// // // //                   >
// // // //                     {[...Array(10).keys()].map((i) => (
// // // //                       <option key={i + 1} value={i + 1}>
// // // //                         {i + 1}
// // // //                       </option>
// // // //                     ))}
// // // //                   </select>
// // // //                 </div>

// // // //                 <button
// // // //                   onClick={() => removeFromCart(item._id)}
// // // //                   className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
// // // //                 >
// // // //                   Remove
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Price Details */}
// // // //         <div className="border p-4 rounded h-fit">
// // // //           <h2 className="text-xl font-bold mb-4">Price Details</h2>

// // // //           <div className="flex justify-between mb-2">
// // // //             <span>MRP:</span>
// // // //             <span>${totalPrice.toFixed(2)}</span>
// // // //           </div>

// // // //           <div className="flex justify-between mb-2">
// // // //             <span>Discount:</span>
// // // //             <span>-${discount.toFixed(2)}</span>
// // // //           </div>

// // // //           <div className="flex justify-between mb-2">
// // // //             <span>Shipping Charge:</span>
// // // //             <span>${shippingCharge.toFixed(2)}</span>
// // // //           </div>

// // // //           <hr className="my-2" />

// // // //           <div className="flex justify-between font-bold text-lg">
// // // //             <span>Total:</span>
// // // //             <span>${finalTotal.toFixed(2)}</span>
// // // //           </div>

// // // //           <button
// // // //             className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
// // // //             onClick={() =>
// // // //               navigate("/checkout", { state: { finalTotal } })
// // // //             }
// // // //           >
// // // //             Proceed to Pay
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };
// // // //  export default Cart;


// // // //new UI

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
  
// // //  const backendURL=import.meta.env.VITE_BACKEND_URL;

// // //   useEffect(() => {
// // //     const total = cart.reduce(
// // //       (sum, item) => sum + item.price * (item.quantity || 1),
// // //       0
// // //     );
// // //     const discountValue = total > 1000 ? total * 0.1 : 0;
// // //     setTotalPrice(total);
// // //     setDiscount(discountValue);
// // //     setFinalTotal(total - discountValue + shippingCharge);
// // //   }, [cart]);

// // //   const handleQuantityChange = (productId, qty) => {
// // //     updateQuantity(productId, parseInt(qty));
// // //   };

// // //   if (cart.length === 0)
// // //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 p-6">

// // //       <h1 className="text-2xl font-semibold mb-6">Bag ({cart.length} item)</h1>

// // //       <div className="grid md:grid-cols-3 gap-6">

// // //         {/* LEFT - ITEMS */}
// // //         <div className="md:col-span-2 space-y-4">
// // //           {cart.map((item) => (
// // //             <div
// // //               key={item._id}
// // //               className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
// // //             >
// // //               {/* <img
// // //                 src={
// // //                   item.image?.startsWith("http")
// // //                     ? item.image
// // //                     : `http://localhost:5000/${item.image}`
// // //                 }
// // //                 alt={item.title}
// // //                 className="w-24 h-24 object-cover rounded"
// // //               /> */}
              

// // // <img
// // //   src={
// // //     item.images && item.images[0]
// // //       ? item.images[0].startsWith("http")
// // //         ? item.images[0]
// // //         : item.images[0].startsWith("/uploads/")
// // //           ? `${backendURL}${item.images[0]}`
// // //           : `${backendURL}/uploads/${item.images[0]}`
// // //       : "/placeholder.png"
// // //   }
// // //   alt={item.title}
// // //   className="w-50 h-70 object-cover rounded"
// // // />

// // //               <div className="flex-1">
// // //                 <h3 className="font-medium text-gray-800">{item.title}</h3>
// // //                 <p className="text-gray-600 mt-1">₹{item.price}</p>

// // //                 <div className="flex items-center gap-3 mt-3 text-sm">
// // //                   <span>Qty:</span>
// // //                   <select
// // //                     value={item.quantity}
// // //                     onChange={(e) =>
// // //                       handleQuantityChange(item._id, e.target.value)
// // //                     }
// // //                     className="border rounded px-2 py-1"
// // //                   >
// // //                     {[...Array(10).keys()].map((i) => (
// // //                       <option key={i + 1} value={i + 1}>
// // //                         {i + 1}
// // //                       </option>
// // //                     ))}
// // //                   </select>
// // //                 </div>

// // //                 <button
// // //                   onClick={() => removeFromCart(item._id)}
// // //                   className="text-red-500 text-sm mt-3"
// // //                 >
// // //                   Remove
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* RIGHT - PRICE PANEL */}
// // //         <div className="space-y-4">

// // //           {/* Rewards */}
// // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
// // //             <span>Reward Points</span>
// // //             <button className="text-pink-600">Apply</button>
// // //           </div>

// // //           {/* Coupon */}
// // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
// // //             <span>Coupons</span>
// // //             <button className="text-pink-600">Apply</button>
// // //           </div>

// // //           {/* Price Details */}
// // //           <div className="bg-white p-4 rounded-xl shadow-sm">
// // //             <h2 className="font-semibold mb-3">Price Details</h2>

// // //             <div className="flex justify-between text-sm mb-2">
// // //               <span>Bag MRP</span>
// // //               <span>₹{totalPrice.toFixed(2)}</span>
// // //             </div>

// // //             <div className="flex justify-between text-sm mb-2 text-green-600">
// // //               <span>Discount</span>
// // //               <span>-₹{discount.toFixed(2)}</span>
// // //             </div>

// // //             <div className="flex justify-between text-sm mb-2">
// // //               <span>Shipping</span>
// // //               <span>₹{shippingCharge.toFixed(2)}</span>
// // //             </div>

// // //             <hr className="my-3" />

// // //             <div className="flex justify-between font-semibold text-lg">
// // //               <span>You Pay</span>
// // //               <span>₹{finalTotal.toFixed(2)}</span>
// // //             </div>
// // //           </div>

// // //           {/* Bottom Bar */}
// // //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
// // //             <div>
// // //               <p className="font-semibold">₹{finalTotal.toFixed(2)}</p>
// // //               <p className="text-xs text-gray-500">Grand Total</p>
// // //             </div>

// // //             <button
// // //               onClick={() =>
// // //                 // navigate("/checkout", { state: { finalTotal } })
// // //                 navigate("/checkout")
// // //               }
// // //               className="bg-pink-600 text-white px-6 py-2 rounded-lg"
// // //             >
// // //               Proceed
// // //             </button>
// // //           </div>

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

// //   const backendURL =
// //     import.meta.env.VITE_BACKEND_URL ||
// //     "https://ecommerce-mern-backend-1.onrender.com/api";

// //   useEffect(() => {
// //     const total = cart.reduce(
// //       (sum, item) => sum + item.price * (item.quantity || 1),
// //       0
// //     );
// //     const discountValue = total > 1000 ? total * 0.1 : 0;
// //     setTotalPrice(total);
// //     setDiscount(discountValue);
// //     setFinalTotal(total - discountValue + shippingCharge);
// //   }, [cart]);

// //   const handleQuantityChange = (productId, qty) => {
// //     updateQuantity(productId, parseInt(qty));
// //   };

// //   if (cart.length === 0)
// //     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-6">
// //       <h1 className="text-2xl font-semibold mb-6">Bag ({cart.length} item)</h1>
// //       <div className="grid md:grid-cols-3 gap-6">
// //         <div className="md:col-span-2 space-y-4">
// //           {cart.map((item) => (
// //             <div
// //               key={item._id}
// //               className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
// //             >
// //               <img
// //                 src={
// //                   item.images?.[0]?.startsWith("http")
// //                     ? item.images[0]
// //                     : `${backendURL}/uploads/${item.images?.[0]}`
// //                 }
// //                 alt={item.title}
// //                 className="w-32 h-32 object-cover rounded"
// //               />
// //               <div className="flex-1">
// //                 <h3 className="font-medium text-gray-800">{item.title}</h3>
// //                 <p className="text-gray-600 mt-1">₹{item.price}</p>
// //                 <div className="flex items-center gap-3 mt-3 text-sm">
// //                   <span>Qty:</span>
// //                   <select
// //                     value={item.quantity}
// //                     onChange={(e) =>
// //                       handleQuantityChange(item._id, e.target.value)
// //                     }
// //                     className="border rounded px-2 py-1"
// //                   >
// //                     {[...Array(10).keys()].map((i) => (
// //                       <option key={i + 1} value={i + 1}>
// //                         {i + 1}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //                 <button
// //                   onClick={() => removeFromCart(item._id)}
// //                   className="text-red-500 text-sm mt-3"
// //                 >
// //                   Remove
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* PRICE PANEL */}
// //         <div className="space-y-4">
// //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
// //             <span>Reward Points</span>
// //             <button className="text-pink-600">Apply</button>
// //           </div>
// //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between">
// //             <span>Coupons</span>
// //             <button className="text-pink-600">Apply</button>
// //           </div>
// //           <div className="bg-white p-4 rounded-xl shadow-sm">
// //             <h2 className="font-semibold mb-3">Price Details</h2>
// //             <div className="flex justify-between text-sm mb-2">
// //               <span>Bag MRP</span>
// //               <span>₹{totalPrice.toFixed(2)}</span>
// //             </div>
// //             <div className="flex justify-between text-sm mb-2 text-green-600">
// //               <span>Discount</span>
// //               <span>-₹{discount.toFixed(2)}</span>
// //             </div>
// //             <div className="flex justify-between text-sm mb-2">
// //               <span>Shipping</span>
// //               <span>₹{shippingCharge.toFixed(2)}</span>
// //             </div>
// //             <hr className="my-3" />
// //             <div className="flex justify-between font-semibold text-lg">
// //               <span>You Pay</span>
// //               <span>₹{finalTotal.toFixed(2)}</span>
// //             </div>
// //           </div>
// //           <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
// //             <div>
// //               <p className="font-semibold">₹{finalTotal.toFixed(2)}</p>
// //               <p className="text-xs text-gray-500">Grand Total</p>
// //             </div>
// //             <button
// //               onClick={() => navigate("/checkout")}
// //               className="bg-pink-600 text-white px-6 py-2 rounded-lg"
// //             >
// //               Proceed
// //             </button>
// //           </div>
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

//   const BASE_URL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-2-t4ku.onrender.com";

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
//           {cart.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
//             >
//               <img
//                 src={
//                   item.images?.[0]?.startsWith("http")
//                     ? item.images[0]
//                     : `${BASE_URL}/uploads/${item.images?.[0]}`
//                 }
//                 alt={item.title}
//                 className="w-32 h-32 object-cover rounded" // slightly bigger
//               />
//               <div className="flex-1">
//                 <h3 className="font-medium text-gray-800">{item.title}</h3>
//                 <p className="text-gray-600 mt-1">₹{item.price}</p>
//                 <div className="flex items-center gap-3 mt-3 text-sm">
//                   <span>Qty:</span>
//                   <select
//                     value={item.quantity}
//                     onChange={(e) =>
//                       handleQuantityChange(item._id, e.target.value)
//                     }
//                     className="border rounded px-2 py-1"
//                   >
//                     {[...Array(10).keys()].map((i) => (
//                       <option key={i + 1} value={i + 1}>
//                         {i + 1}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="text-red-500 text-sm mt-3"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT - PRICE PANEL */}
//         <div className="space-y-4">
//           {/* Price Details */}
//           <div className="bg-white p-4 rounded-xl shadow-sm">
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
//               className="bg-pink-600 text-white px-6 py-2 rounded-lg"
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
    "https://ecommerce-mern-backend-1.onrender.com"; // use old URL like product page

  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const discountValue = total > 1000 ? total * 0.1 : 0;
    setTotalPrice(total);
    setDiscount(discountValue);
    setFinalTotal(total - discountValue + shippingCharge);
  }, [cart]);

  const handleQuantityChange = (productId, qty) => {
    updateQuantity(productId, parseInt(qty));
  };

  if (cart.length === 0)
    return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold mb-6">Bag ({cart.length} item)</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {/* LEFT - ITEMS */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => {
            const imageUrl =
              item.images && item.images[0]
                ? item.images[0].startsWith("http")
                  ? item.images[0]
                  : item.images[0].startsWith("/uploads/")
                  ? `${BASE_URL}${item.images[0]}`
                  : `${BASE_URL}/uploads/${item.images[0]}`
                : "/placeholder.png"; // fallback

            return (
              <div
                key={item._id}
                className="bg-white rounded-xl p-4 flex gap-4 shadow-sm"
              >
                <img
                  src={imageUrl}
                  alt={item.title}
                  className="w-70 h-90 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mt-1">₹{item.price}</p>
                  <div className="flex items-center gap-3 mt-3 text-sm">
                    <span>Qty:</span>
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item._id, e.target.value)
                      }
                      className="border rounded px-2 py-1"
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
                    className="text-red-500 text-sm mt-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT - PRICE PANEL */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="font-semibold mb-3">Price Details</h2>
            <div className="flex justify-between text-sm mb-2">
              <span>Bag MRP</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2 text-green-600">
              <span>Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Shipping</span>
              <span>₹{shippingCharge.toFixed(2)}</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-semibold text-lg">
              <span>You Pay</span>
              <span>₹{finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
              <p className="font-semibold">₹{finalTotal.toFixed(2)}</p>
              <p className="text-xs text-gray-500">Grand Total</p>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-pink-600 text-white px-6 py-2 rounded-lg"
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