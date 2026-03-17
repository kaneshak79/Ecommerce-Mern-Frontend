// // // // // import React from "react";
// // // // // import { useCart } from "../../context/CartContext";
// // // // // import ProductCard from "../../components/ProductCard";

// // // // // const Cart = () => {
// // // // //   const { cart } = useCart();

// // // // //   return (
// // // // //     <div className="container mx-auto p-4">
// // // // //       <h1 className="text-2xl font-bold mb-4">My Cart</h1>
// // // // //       {cart.length === 0 ? (
// // // // //         <p>Your cart is empty.</p>
// // // // //       ) : (
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // //           {cart.map((product) => (
// // // // //             <ProductCard key={product._id} product={product} />
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Cart;

// // // // import React from "react";
// // // // import { useCart } from "../../context/CartContext";

// // // // const Cart = () => {
// // // //   const { cartItems, removeFromCart } = useCart();

// // // //   if (cartItems.length === 0) return <p className="p-4">Cart is empty</p>;

// // // //   return (
// // // //     <div className="p-4">
// // // //       <h1 className="text-2xl font-bold mb-4">My Cart</h1>
// // // //       <div className="space-y-4">
// // // //         {cartItems.map(item => (
// // // //           <div key={item._id} className="flex justify-between border p-2 rounded">
// // // //             <div>
// // // //               <h2 className="font-semibold">{item.title}</h2>
// // // //               <p>{item.description}</p>
// // // //               <p>${item.price}</p>
// // // //             </div>
// // // //             <button
// // // //               onClick={() => removeFromCart(item._id)}
// // // //               className="bg-red-500 text-white px-2 py-1 rounded"
// // // //             >
// // // //               Remove
// // // //             </button>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Cart;


// // // // src/pages/buyer/Cart.jsx
// // // import React from "react";
// // // import { useCart } from "../../context/CartContext";

// // // const Cart = () => {
// // //   const { cart, removeFromCart } = useCart();

// // //   if (cart.length === 0)
// // //     return <div className="p-10 text-center">Your cart is empty.</div>;

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {cart.map((item) => (
// // //           <div key={item._id} className="border p-4 rounded">
// // //             <img
// // //               src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // //               alt={item.title}
// // //               className="h-40 w-full object-cover mb-2"
// // //             />
// // //             <h3 className="font-bold">{item.title}</h3>
// // //             <p>${item.price}</p>
// // //             <button
// // //               onClick={() => removeFromCart(item._id)}
// // //               className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
// // //             >
// // //               Remove
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Cart;



// // // src/pages/buyer/Cart.jsx
// // import React, { useState, useEffect } from "react";
// // import { useCart } from "../../context/CartContext";

// // const Cart = () => {
// //   const { cart, removeFromCart, updateQuantity } = useCart();
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const [shippingCharge, setShippingCharge] = useState(50); // fixed shipping
// //   const [discount, setDiscount] = useState(0); // placeholder

// //   useEffect(() => {
// //     let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //     setTotalPrice(total);
// //     // You can also calculate discount dynamically if you want
// //     setDiscount(total > 1000 ? total * 0.1 : 0); // example 10% discount if >1000
// //   }, [cart]);

// //   const handleQuantityChange = (productId, qty) => {
// //     updateQuantity(productId, parseInt(qty));
// //   };

// //   if (cart.length === 0)
// //     return <div className="p-10 text-center">Your cart is empty.</div>;

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {/* Cart Items */}
// //         <div className="md:col-span-2 space-y-4">
// //           {cart.map((item) => (
// //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// //               <img
// //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// //                 alt={item.title}
// //                 className="h-24 w-24 object-cover"
// //               />
// //               <div className="flex-1">
// //                 <h3 className="font-bold">{item.title}</h3>
// //                 <p>${item.price}</p>
// //                 <div className="flex items-center gap-2 mt-2">
// //                   <label>Quantity:</label>
// //                   <select
// //                     value={item.quantity}
// //                     onChange={(e) => handleQuantityChange(item._id, e.target.value)}
// //                     className="border p-1"
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
// //                   className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
// //                 >
// //                   Remove
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Price Details */}
// //         <div className="border p-4 rounded h-fit">
// //           <h2 className="text-xl font-bold mb-4">Price Details</h2>
// //           <div className="flex justify-between mb-2">
// //             <span>MRP:</span>
// //             <span>${totalPrice.toFixed(2)}</span>
// //           </div>
// //           <div className="flex justify-between mb-2">
// //             <span>Discount:</span>
// //             <span>-${discount.toFixed(2)}</span>
// //           </div>
// //           <div className="flex justify-between mb-2">
// //             <span>Shipping Charge:</span>
// //             <span>${shippingCharge.toFixed(2)}</span>
// //           </div>
// //           <hr className="my-2" />
// //           <div className="flex justify-between font-bold text-lg">
// //             <span>Total:</span>
// //             <span>${(totalPrice - discount + shippingCharge).toFixed(2)}</span>
// //           </div>
// //           <button
// //             className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
// //             onClick={() => alert("Proceeding to payment...")}
// //           >
// //             Proceed to Pay
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;






// // src/pages/buyer/Cart.jsx
// import React, { useState, useEffect } from "react";
// import { useCart } from "../../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();

//   const shippingCharge = 50; // fixed shipping charge
//   const [discount, setDiscount] = useState(0); // discount
//   const [totalPrice, setTotalPrice] = useState(0); // sum of products
//   const [finalTotal, setFinalTotal] = useState(0); // total after discount & shipping

//   // Calculate totals whenever cart changes
//   useEffect(() => {
//     const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     const discountValue = total > 1000 ? total * 0.1 : 0; // example: 10% discount if > 1000
//     setTotalPrice(total);
//     setDiscount(discountValue);
//     setFinalTotal(total - discountValue + shippingCharge);
//   }, [cart]);

//   // Handle quantity change
//   const handleQuantityChange = (productId, qty) => {
//     updateQuantity(productId, parseInt(qty));
//   };

//   if (cart.length === 0)
//     return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Cart Items */}
//         <div className="md:col-span-2 space-y-4">
//           {cart.map((item) => (
//             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
//               <img
//                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
//                 alt={item.title}
//                 className="h-24 w-24 object-cover"
//               />
//               <div className="flex-1">
//                 <h3 className="font-bold">{item.title}</h3>
//                 <p>${item.price}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <label>Quantity:</label>
//                   <select
//                     value={item.quantity}
//                     onChange={(e) => handleQuantityChange(item._id, e.target.value)}
//                     className="border p-1"
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
//                   className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Price Details */}
//         <div className="border p-4 rounded h-fit">
//           <h2 className="text-xl font-bold mb-4">Price Details</h2>
//           <div className="flex justify-between mb-2">
//             <span>MRP:</span>
//             <span>${totalPrice.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Discount:</span>
//             <span>-${discount.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Shipping Charge:</span>
//             <span>${shippingCharge.toFixed(2)}</span>
//           </div>
//           <hr className="my-2" />
//           <div className="flex justify-between font-bold text-lg">
//             <span>Total:</span>
//             <span>${finalTotal.toFixed(2)}</span>
//           </div>

//           <button
//             className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
//             onClick={() => navigate("/checkout")} // go to checkout page
//           >
//             Proceed to Pay
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;





// src/pages/buyer/Cart.jsx
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const shippingCharge = 50; // fixed shipping
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  // Calculate totals whenever cart changes
  useEffect(() => {
    const total = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    const discountValue = total > 1000 ? total * 0.1 : 0; // 10% discount if >1000
    setTotalPrice(total);
    setDiscount(discountValue);
    setFinalTotal(total - discountValue + shippingCharge);
  }, [cart]);

  // Handle quantity change from dropdown
  const handleQuantityChange = (productId, qty) => {
    updateQuantity(productId, parseInt(qty));
  };

  if (cart.length === 0)
    return <div className="p-10 text-center text-lg">Your cart is empty.</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex border p-4 rounded items-center gap-4"
            >
              <img
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `http://localhost:5000/${item.image}`
                }
                alt={item.title}
                className="h-24 w-24 object-cover"
              />
              <div className="flex-1">
                <h3 className="font-bold">{item.title}</h3>
                <p>${item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <label>Quantity:</label>
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, e.target.value)
                    }
                    className="border p-1"
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
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Price Details */}
        <div className="border p-4 rounded h-fit">
          <h2 className="text-xl font-bold mb-4">Price Details</h2>

          <div className="flex justify-between mb-2">
            <span>MRP:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>-${discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping Charge:</span>
            <span>${shippingCharge.toFixed(2)}</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-blue-500 text-white mt-4 p-2 rounded hover:bg-blue-600"
            onClick={() =>
              navigate("/checkout", { state: { finalTotal } })
            }
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;