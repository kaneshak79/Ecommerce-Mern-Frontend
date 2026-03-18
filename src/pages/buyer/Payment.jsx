// // // // // // // // // src/pages/buyer/Payment.jsx
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // const Payment = () => {
// // // // // // // //   const { cart } = useCart();
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const location = useLocation();

// // // // // // // //   const { address, total } = location.state || {};
// // // // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod"); // default Cash on Delivery

// // // // // // // //   if (!cart.length || !address) {
// // // // // // // //     return <div className="p-10 text-center">No cart or address found. Go back to cart.</div>;
// // // // // // // //   }

// // // // // // // //   const handlePlaceOrder = () => {
// // // // // // // //     navigate("/order-confirmation", {
// // // // // // // //       state: { paymentMethod, address, total, products: cart },
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // //         {/* Cart Summary */}
// // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // //           {cart.map((item) => (
// // // // // // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // // // // // //               <img
// // // // // // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // //                 alt={item.title}
// // // // // // // //                 className="h-24 w-24 object-cover"
// // // // // // // //               />
// // // // // // // //               <div className="flex-1">
// // // // // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // // // // //                 <p>Quantity: {item.quantity}</p>
// // // // // // // //                 <p>Price: ${item.price}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* Payment Options */}
// // // // // // // //         <div className="border p-4 rounded h-fit space-y-4">
// // // // // // // //           <h2 className="text-xl font-bold mb-2">Shipping Address</h2>
// // // // // // // //           <p>{address}</p>

// // // // // // // //           <h2 className="text-xl font-bold mt-4 mb-2">Choose Payment Method</h2>
// // // // // // // //           <select
// // // // // // // //             value={paymentMethod}
// // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // //             className="w-full border p-2"
// // // // // // // //           >
// // // // // // // //             <option value="cod">Cash on Delivery</option>
// // // // // // // //             <option value="upi">UPI</option>
// // // // // // // //             <option value="netbanking">Net Banking</option>
// // // // // // // //             <option value="emi">EMI</option>
// // // // // // // //           </select>

// // // // // // // //           <div className="flex justify-between font-bold text-lg mt-4">
// // // // // // // //             <span>Total:</span>
// // // // // // // //             <span>${total.toFixed(2)}</span>
// // // // // // // //           </div>

// // // // // // // //           <button
// // // // // // // //             onClick={handlePlaceOrder}
// // // // // // // //             className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-4"
// // // // // // // //           >
// // // // // // // //             Place Order
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Payment;




// // // // // // // src/pages/buyer/Payment.jsx
// // // // // // import React, { useState } from "react";
// // // // // // import { useCart } from "../../context/CartContext";
// // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // const Payment = () => {
// // // // // //   const { cart } = useCart();
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();
// // // // // //   const { address } = location.state || {};

// // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // // // //   const shipping = 50;
// // // // // //   const finalTotal = totalPrice - discount + shipping;

// // // // // // //   const handlePlaceOrder = () => {
// // // // // // //     // Here you can call backend to save order
// // // // // // //     navigate("/order-confirmation", { state: { address, paymentMethod, finalTotal } });
// // // // // // //   };



// // // // // // const handlePlaceOrder = async () => {
// // // // // //   try {
// // // // // //     const res = await axios.post("/orders", {
// // // // // //       shippingAddress: address,
// // // // // //     });

// // // // // //     console.log("Order Created:", res.data);

// // // // // //     navigate("/order-confirmation");
// // // // // //   } catch (err) {
// // // // // //     console.error(err.response?.data);
// // // // // //     alert(err.response?.data?.message || "Order failed");
// // // // // //   }
// // // // // // };

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // // //       <p className="mb-4">{address}</p>

// // // // // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // // // // //       <select
// // // // // //         value={paymentMethod}
// // // // // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // //         className="border p-2 rounded mb-4"
// // // // // //       >
// // // // // //         <option value="cod">Cash on Delivery</option>
// // // // // //         <option value="upi">UPI</option>
// // // // // //         <option value="netbanking">Net Banking</option>
// // // // // //         <option value="emi">EMI</option>
// // // // // //       </select>

// // // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // // // //       {cart.map((item) => (
// // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // // //         </div>
// // // // // //       ))}

// // // // // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // // // // //         <span>Total:</span>
// // // // // //         <span>${finalTotal.toFixed(2)}</span>
// // // // // //       </div>

// // // // // //       <button
// // // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // // // //         onClick={handlePlaceOrder}
// // // // // //       >
// // // // // //         Place Order
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Payment;




// // // // // // src/pages/buyer/Payment.jsx
// // // // // import React, { useState } from "react";
// // // // // import { useCart } from "../../context/CartContext";
// // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // import axios from "../../utils/axios";

// // // // // const Payment = () => {
// // // // //   const { cart } = useCart();
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();
// // // // //   const { address } = location.state || {};

// // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // // //   const shipping = 50;
// // // // //   const finalTotal = totalPrice - discount + shipping;

// // // // //   const handlePlaceOrder = async () => {
// // // // //     try {
// // // // //       const res = await axios.post(
// // // // //         "/orders",
// // // // //         { shippingAddress: address },
// // // // //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// // // // //       );

// // // // //       console.log("Order Created:", res.data);

// // // // //       // Pass order data to confirmation page
// // // // //       navigate("/order-confirmation", {
// // // // //         state: {
// // // // //           orderId: res.data._id,
// // // // //           products: res.data.products,
// // // // //           address: res.data.shippingAddress,
// // // // //           paymentMethod,
// // // // //           finalTotal: res.data.totalAmount,
// // // // //         },
// // // // //       });
// // // // //     } catch (err) {
// // // // //       console.error(err.response?.data);
// // // // //       alert(err.response?.data?.message || "Order failed");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mx-auto p-4">
// // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // //       <p className="mb-4">{address}</p>

// // // // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // // // //       <select
// // // // //         value={paymentMethod}
// // // // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // // // //         className="border p-2 rounded mb-4"
// // // // //       >
// // // // //         <option value="cod">Cash on Delivery</option>
// // // // //         <option value="upi">UPI</option>
// // // // //         <option value="netbanking">Net Banking</option>
// // // // //         <option value="emi">EMI</option>
// // // // //       </select>

// // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // // //       {cart.map((item) => (
// // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // // //           <span>{item.title} x {item.quantity}</span>
// // // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // //         </div>
// // // // //       ))}

// // // // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // // // //         <span>Total:</span>
// // // // //         <span>${finalTotal.toFixed(2)}</span>
// // // // //       </div>

// // // // //       <button
// // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // // //         onClick={handlePlaceOrder}
// // // // //       >
// // // // //         Place Order
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Payment;


// // // // // src/pages/buyer/Payment.jsx
// // // // import React, { useState } from "react";
// // // // import { useCart } from "../../context/CartContext";
// // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // import axios from "../../utils/axios";

// // // // const Payment = () => {
// // // //   const { cart, clearCart } = useCart(); // use clearCart from context
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();
// // // //   const { address } = location.state || {};

// // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // //   // Calculate totals
// // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // //   const shipping = 50;
// // // //   const finalTotal = totalPrice - discount + shipping;

// // // //   const handlePlaceOrder = async () => {
// // // //     try {
// // // //       const res = await axios.post(
// // // //         "/orders",
// // // //         { shippingAddress: address },
// // // //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// // // //       );

// // // //       console.log("Order Created:", res.data);

// // // //       // Clear cart
// // // //       clearCart();

// // // //       // Navigate to order confirmation page with order data
// // // //       navigate("/order-confirmation", {
// // // //         state: {
// // // //           orderId: res.data._id,
// // // //           products: res.data.products,
// // // //           address: res.data.shippingAddress,
// // // //           paymentMethod,
// // // //           finalTotal: res.data.totalAmount,
// // // //         },
// // // //       });
// // // //     } catch (err) {
// // // //       console.error(err.response?.data);
// // // //       alert(err.response?.data?.message || "Order failed");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // //       <p className="mb-4">{address}</p>

// // // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // // //       <select
// // // //         value={paymentMethod}
// // // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // // //         className="border p-2 rounded mb-4"
// // // //       >
// // // //         <option value="cod">Cash on Delivery</option>
// // // //         <option value="upi">UPI</option>
// // // //         <option value="netbanking">Net Banking</option>
// // // //         <option value="emi">EMI</option>
// // // //       </select>

// // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // //       {cart.map((item) => (
// // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // //           <span>{item.title} x {item.quantity}</span>
// // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // //         </div>
// // // //       ))}

// // // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // // //         <span>Total:</span>
// // // //         <span>${finalTotal.toFixed(2)}</span>
// // // //       </div>

// // // //       <button
// // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // //         onClick={handlePlaceOrder}
// // // //       >
// // // //         Place Order
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payment;


// // // // src/pages/buyer/Payment.jsx
// // // import React, { useState } from "react";
// // // import { useCart } from "../../context/CartContext";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import axios from "../../utils/axios";

// // // const Payment = () => {
// // //   const { cart, clearCart } = useCart();
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   // Expecting full address object from previous step/page
// // //   const { address } = location.state || {};

// // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // //   // Totals
// // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // //   const shipping = 50;
// // //   const finalTotal = totalPrice - discount + shipping;

// // //   const handlePlaceOrder = async () => {
// // //     if (!address || !address.street) {
// // //       alert("Please provide a complete shipping address.");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await axios.post(
// // //         "/orders",
// // //         {
// // //           shippingAddress: {
// // //             street: address.street,
// // //             city: address.city,
// // //             state: address.state,
// // //             zip: address.zip,
// // //             country: address.country,
// // //           },
// // //         },
// // //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// // //       );

// // //       // Clear frontend cart
// // //       clearCart();

// // //       // Navigate to confirmation page with order details
// // //       navigate("/order-confirmation", {
// // //         state: {
// // //           orderId: res.data._id,
// // //           products: res.data.products,
// // //           address: res.data.shippingAddress,
// // //           paymentMethod,
// // //           finalTotal: res.data.totalAmount,
// // //         },
// // //       });
// // //     } catch (err) {
// // //       console.error(err.response?.data);
// // //       alert(err.response?.data?.message || "Order failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // //       <p className="mb-4">
// // //         {address?.street}, {address?.city}, {address?.state}, {address?.zip}, {address?.country}
// // //       </p>

// // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // //       <select
// // //         value={paymentMethod}
// // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // //         className="border p-2 rounded mb-4"
// // //       >
// // //         <option value="cod">Cash on Delivery</option>
// // //         <option value="upi">UPI</option>
// // //         <option value="netbanking">Net Banking</option>
// // //         <option value="emi">EMI</option>
// // //       </select>

// // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // //       {cart.map((item) => (
// // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // //           <span>{item.title} x {item.quantity}</span>
// // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // //         </div>
// // //       ))}

// // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // //         <span>Total:</span>
// // //         <span>${finalTotal.toFixed(2)}</span>
// // //       </div>

// // //       <button
// // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // //         onClick={handlePlaceOrder}
// // //       >
// // //         Place Order
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default Payment;


// // // src/pages/buyer/Payment.jsx
// // import React, { useState } from "react";
// // import { useCart } from "../../context/CartContext";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import axios from "../../utils/axios";

// // const Payment = () => {
// //   const { cart, clearCart } = useCart();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // Expecting full address object from previous page
// //   const { address } = location.state || {};

// //   const [paymentMethod, setPaymentMethod] = useState("cod");

// //   // Calculate totals
// //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// //   const shipping = 50;
// //   const finalTotal = totalPrice - discount + shipping;

// //   const handlePlaceOrder = async () => {
// //     // Validate address
// //     if (!address || !address.street) {
// //       alert("Please provide a complete shipping address.");
// //       return;
// //     }

// //     try {
// //       const res = await axios.post(
// //         "/orders",
// //         {
// //           shippingAddress: {
// //             street: address.street,
// //             city: address.city,
// //             state: address.state,
// //             zip: address.zip,
// //             country: address.country,
// //           },
// //         },
// //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// //       );

// //       // Clear frontend cart
// //       clearCart();

// //       // Navigate to Order Confirmation page
// //       navigate("/order-confirmation", {
// //         state: {
// //           orderId: res.data._id,
// //           products: res.data.products,
// //           address: res.data.shippingAddress,
// //           paymentMethod,
// //           finalTotal: res.data.totalAmount,
// //         },
// //       });
// //     } catch (err) {
// //       console.error(err.response?.data);
// //       alert(err.response?.data?.message || "Order failed");
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// //       <p className="mb-4">
// //         {address?.street}, {address?.city}, {address?.state}, {address?.zip}, {address?.country}
// //       </p>

// //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// //       <select
// //         value={paymentMethod}
// //         onChange={(e) => setPaymentMethod(e.target.value)}
// //         className="border p-2 rounded mb-4"
// //       >
// //         <option value="cod">Cash on Delivery</option>
// //         <option value="upi">UPI</option>
// //         <option value="netbanking">Net Banking</option>
// //         <option value="emi">EMI</option>
// //       </select>

// //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// //       {cart.map((item) => (
// //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// //           <span>{item.title} x {item.quantity}</span>
// //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// //         </div>
// //       ))}

// //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// //         <span>Total:</span>
// //         <span>${finalTotal.toFixed(2)}</span>
// //       </div>

// //       <button
// //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// //         onClick={handlePlaceOrder}
// //       >
// //         Place Order
// //       </button>
// //     </div>
// //   );
// // };

// // export default Payment;



// // src/pages/buyer/Payment.jsx
// import React, { useState } from "react";
// import { useCart } from "../../context/CartContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "../../utils/axios";

// const Payment = () => {
//   const { cart, clearCart } = useCart();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const address = location.state?.address;

//   const [paymentMethod, setPaymentMethod] = useState("cod");

//   console.log("RECEIVED ADDRESS:", address); // 🔥 DEBUG

//   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const shipping = 50;
//   const finalTotal = totalPrice + shipping;

// //   const handlePlaceOrder = async () => {
// //     if (!address || !address.street) {
// //       alert("Please provide a complete shipping address.");
// //       return;
// //     }

// const handlePlaceOrder = async () => {
//   if (!address || !address.street) {
//     alert("Please provide a complete shipping address.");
//     return;
//   }

//   if (cart.length === 0) {
//     alert("Cart is empty");
//     return;
//   }

//   try {
//     console.log("CART SENDING:", cart); // 🔥 DEBUG

//     const res = await axios.post(
//       "/orders",
//       {
//         shippingAddress: address,
//         products: cart.map((item) => ({
//           product: item._id,
//           quantity: item.quantity,
//           price: item.price
//         }))
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     );

//     clearCart();

//     navigate("/order-confirmation", {
//       state: {
//         orderId: res.data._id,
//         products: res.data.products,
//         address: res.data.shippingAddress,
//         finalTotal: res.data.totalAmount,
//       },
//     });

//   } catch (err) {
//     console.error(err.response?.data);
//     alert(err.response?.data?.message || "Order failed");
//   }
// };

//     try {
//       const res = await axios.post(
//         "/orders",
//         {
//           shippingAddress: address
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       clearCart();

//       navigate("/order-confirmation", {
//         state: {
//           orderId: res.data._id,
//           products: res.data.products,
//           address: res.data.shippingAddress,
//           paymentMethod,
//           finalTotal: res.data.totalAmount,
//         },
//       });
//     } catch (err) {
//       console.error(err.response?.data);
//       alert(err.response?.data?.message || "Order failed");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Payment</h1>

//       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
//       <p className="mb-4">
//         {address?.street}, {address?.city}, {address?.state}, {address?.zip}, {address?.country}
//       </p>

//       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
//       {cart.map((item) => (
//         <div key={item._id} className="flex justify-between border p-2 mb-2">
//           <span>{item.title} x {item.quantity}</span>
//           <span>${item.price * item.quantity}</span>
//         </div>
//       ))}

//       <h3 className="font-bold">Total: ${finalTotal}</h3>

//       <button
//         onClick={handlePlaceOrder}
//         className="mt-4 w-full bg-green-500 text-white p-2 rounded"
//       >
//         Place Order
//       </button>
//     </div>
//   );
// };

// export default Payment;


// src/pages/buyer/Payment.jsx
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";

const Payment = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const address = location.state?.address;

  const [paymentMethod, setPaymentMethod] = useState("cod");

  console.log("RECEIVED ADDRESS:", address);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const finalTotal = totalPrice + shipping;

  // ✅ ONLY ONE FUNCTION (CORRECT)
  const handlePlaceOrder = async () => {
    if (!address || !address.street) {
      alert("Please provide a complete shipping address.");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      console.log("CART SENDING:", cart);

      const res = await axios.post(
        "/orders",
        {
          shippingAddress: address
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("ORDER SUCCESS:", res.data);

      // ✅ clear frontend cart
      clearCart();

      // ✅ go to confirmation page
      navigate("/order-confirmation", {
        state: {
          orderId: res.data._id,
          products: res.data.products,
          address: res.data.shippingAddress,
          paymentMethod,
          finalTotal: res.data.totalAmount,
        },
      });

    } catch (err) {
      console.error("ORDER ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Order failed");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>

      <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
      <p className="mb-4">
        {address?.street}, {address?.city}, {address?.state}, {address?.zip}, {address?.country}
      </p>

      <h2 className="text-xl font-semibold mb-2">Order Summary</h2>

      {cart.map((item) => (
        <div key={item._id} className="flex justify-between border p-2 mb-2">
          <span>{item.title} x {item.quantity}</span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}

      <h3 className="font-bold">Total: ${finalTotal}</h3>

      <button
        onClick={handlePlaceOrder}
        className="mt-4 w-full bg-green-500 text-white p-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default Payment;