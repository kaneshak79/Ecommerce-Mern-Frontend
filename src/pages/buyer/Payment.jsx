// // // // // // // // // // // // // // // src/pages/buyer/Payment.jsx
// // // // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // // // // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // // // // // // const Payment = () => {
// // // // // // // // // // // // // //   const { cart } = useCart();
// // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // //   const location = useLocation();

// // // // // // // // // // // // // //   const { address, total } = location.state || {};
// // // // // // // // // // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod"); // default Cash on Delivery

// // // // // // // // // // // // // //   if (!cart.length || !address) {
// // // // // // // // // // // // // //     return <div className="p-10 text-center">No cart or address found. Go back to cart.</div>;
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   const handlePlaceOrder = () => {
// // // // // // // // // // // // // //     navigate("/order-confirmation", {
// // // // // // // // // // // // // //       state: { paymentMethod, address, total, products: cart },
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // // // // // // //         {/* Cart Summary */}
// // // // // // // // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // // // // // // // //           {cart.map((item) => (
// // // // // // // // // // // // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // // // // // // // // // // // //               <img
// // // // // // // // // // // // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // // // // // // // //                 alt={item.title}
// // // // // // // // // // // // // //                 className="h-24 w-24 object-cover"
// // // // // // // // // // // // // //               />
// // // // // // // // // // // // // //               <div className="flex-1">
// // // // // // // // // // // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // // // // // // // // // // //                 <p>Quantity: {item.quantity}</p>
// // // // // // // // // // // // // //                 <p>Price: ${item.price}</p>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {/* Payment Options */}
// // // // // // // // // // // // // //         <div className="border p-4 rounded h-fit space-y-4">
// // // // // // // // // // // // // //           <h2 className="text-xl font-bold mb-2">Shipping Address</h2>
// // // // // // // // // // // // // //           <p>{address}</p>

// // // // // // // // // // // // // //           <h2 className="text-xl font-bold mt-4 mb-2">Choose Payment Method</h2>
// // // // // // // // // // // // // //           <select
// // // // // // // // // // // // // //             value={paymentMethod}
// // // // // // // // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // // // // // // //             className="w-full border p-2"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <option value="cod">Cash on Delivery</option>
// // // // // // // // // // // // // //             <option value="upi">UPI</option>
// // // // // // // // // // // // // //             <option value="netbanking">Net Banking</option>
// // // // // // // // // // // // // //             <option value="emi">EMI</option>
// // // // // // // // // // // // // //           </select>

// // // // // // // // // // // // // //           <div className="flex justify-between font-bold text-lg mt-4">
// // // // // // // // // // // // // //             <span>Total:</span>
// // // // // // // // // // // // // //             <span>${total.toFixed(2)}</span>
// // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // //           <button
// // // // // // // // // // // // // //             onClick={handlePlaceOrder}
// // // // // // // // // // // // // //             className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-4"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Place Order
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Payment;




// // // // // // // // // // // // // src/pages/buyer/Payment.jsx
// // // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // // // // // // const Payment = () => {
// // // // // // // // // // // //   const { cart } = useCart();
// // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // //   const { address } = location.state || {};

// // // // // // // // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // // // // // // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // // // // // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // // // // // // // // // //   const shipping = 50;
// // // // // // // // // // // //   const finalTotal = totalPrice - discount + shipping;

// // // // // // // // // // // // //   const handlePlaceOrder = () => {
// // // // // // // // // // // // //     // Here you can call backend to save order
// // // // // // // // // // // // //     navigate("/order-confirmation", { state: { address, paymentMethod, finalTotal } });
// // // // // // // // // // // // //   };



// // // // // // // // // // // // const handlePlaceOrder = async () => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const res = await axios.post("/orders", {
// // // // // // // // // // // //       shippingAddress: address,
// // // // // // // // // // // //     });

// // // // // // // // // // // //     console.log("Order Created:", res.data);

// // // // // // // // // // // //     navigate("/order-confirmation");
// // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // //     console.error(err.response?.data);
// // // // // // // // // // // //     alert(err.response?.data?.message || "Order failed");
// // // // // // // // // // // //   }
// // // // // // // // // // // // };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // // // // // // // // //       <p className="mb-4">{address}</p>

// // // // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // // // // // // // // // // //       <select
// // // // // // // // // // // //         value={paymentMethod}
// // // // // // // // // // // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // // // // //         className="border p-2 rounded mb-4"
// // // // // // // // // // // //       >
// // // // // // // // // // // //         <option value="cod">Cash on Delivery</option>
// // // // // // // // // // // //         <option value="upi">UPI</option>
// // // // // // // // // // // //         <option value="netbanking">Net Banking</option>
// // // // // // // // // // // //         <option value="emi">EMI</option>
// // // // // // // // // // // //       </select>

// // // // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // // // // // // // // // //       {cart.map((item) => (
// // // // // // // // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // // // // // // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // // // // // // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       ))}

// // // // // // // // // // // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // // // // // // // // // // //         <span>Total:</span>
// // // // // // // // // // // //         <span>${finalTotal.toFixed(2)}</span>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <button
// // // // // // // // // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // // // // // // // // // //         onClick={handlePlaceOrder}
// // // // // // // // // // // //       >
// // // // // // // // // // // //         Place Order
// // // // // // // // // // // //       </button>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Payment;




// // // // // // // // // // // // src/pages/buyer/Payment.jsx
// // // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // // // // // // // import axios from "../../utils/axios";

// // // // // // // // // // // const Payment = () => {
// // // // // // // // // // //   const { cart } = useCart();
// // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // //   const { address } = location.state || {};

// // // // // // // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // // // // // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // // // // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // // // // // // // // //   const shipping = 50;
// // // // // // // // // // //   const finalTotal = totalPrice - discount + shipping;

// // // // // // // // // // //   const handlePlaceOrder = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axios.post(
// // // // // // // // // // //         "/orders",
// // // // // // // // // // //         { shippingAddress: address },
// // // // // // // // // // //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// // // // // // // // // // //       );

// // // // // // // // // // //       console.log("Order Created:", res.data);

// // // // // // // // // // //       // Pass order data to confirmation page
// // // // // // // // // // //       navigate("/order-confirmation", {
// // // // // // // // // // //         state: {
// // // // // // // // // // //           orderId: res.data._id,
// // // // // // // // // // //           products: res.data.products,
// // // // // // // // // // //           address: res.data.shippingAddress,
// // // // // // // // // // //           paymentMethod,
// // // // // // // // // // //           finalTotal: res.data.totalAmount,
// // // // // // // // // // //         },
// // // // // // // // // // //       });
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err.response?.data);
// // // // // // // // // // //       alert(err.response?.data?.message || "Order failed");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // // // // // // // //       <p className="mb-4">{address}</p>

// // // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // // // // // // // // // //       <select
// // // // // // // // // // //         value={paymentMethod}
// // // // // // // // // // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // // // //         className="border p-2 rounded mb-4"
// // // // // // // // // // //       >
// // // // // // // // // // //         <option value="cod">Cash on Delivery</option>
// // // // // // // // // // //         <option value="upi">UPI</option>
// // // // // // // // // // //         <option value="netbanking">Net Banking</option>
// // // // // // // // // // //         <option value="emi">EMI</option>
// // // // // // // // // // //       </select>

// // // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // // // // // // // // //       {cart.map((item) => (
// // // // // // // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // // // // // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // // // // // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       ))}

// // // // // // // // // // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // // // // // // // // // //         <span>Total:</span>
// // // // // // // // // // //         <span>${finalTotal.toFixed(2)}</span>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <button
// // // // // // // // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // // // // // // // // //         onClick={handlePlaceOrder}
// // // // // // // // // // //       >
// // // // // // // // // // //         Place Order
// // // // // // // // // // //       </button>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Payment;


// // // // // // // // // // // src/pages/buyer/Payment.jsx
// // // // // // // // // // import React, { useState } from "react";
// // // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // // // // // // import axios from "../../utils/axios";

// // // // // // // // // // const Payment = () => {
// // // // // // // // // //   const { cart, clearCart } = useCart(); // use clearCart from context
// // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // //   const location = useLocation();
// // // // // // // // // //   const { address } = location.state || {};

// // // // // // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // // // // // // //   // Calculate totals
// // // // // // // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // // // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // // // // // // // //   const shipping = 50;
// // // // // // // // // //   const finalTotal = totalPrice - discount + shipping;

// // // // // // // // // //   const handlePlaceOrder = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.post(
// // // // // // // // // //         "/orders",
// // // // // // // // // //         { shippingAddress: address },
// // // // // // // // // //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// // // // // // // // // //       );

// // // // // // // // // //       console.log("Order Created:", res.data);

// // // // // // // // // //       // Clear cart
// // // // // // // // // //       clearCart();

// // // // // // // // // //       // Navigate to order confirmation page with order data
// // // // // // // // // //       navigate("/order-confirmation", {
// // // // // // // // // //         state: {
// // // // // // // // // //           orderId: res.data._id,
// // // // // // // // // //           products: res.data.products,
// // // // // // // // // //           address: res.data.shippingAddress,
// // // // // // // // // //           paymentMethod,
// // // // // // // // // //           finalTotal: res.data.totalAmount,
// // // // // // // // // //         },
// // // // // // // // // //       });
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err.response?.data);
// // // // // // // // // //       alert(err.response?.data?.message || "Order failed");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // // // // // // //       <p className="mb-4">{address}</p>

// // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // // // // // // // // //       <select
// // // // // // // // // //         value={paymentMethod}
// // // // // // // // // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // // //         className="border p-2 rounded mb-4"
// // // // // // // // // //       >
// // // // // // // // // //         <option value="cod">Cash on Delivery</option>
// // // // // // // // // //         <option value="upi">UPI</option>
// // // // // // // // // //         <option value="netbanking">Net Banking</option>
// // // // // // // // // //         <option value="emi">EMI</option>
// // // // // // // // // //       </select>

// // // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // // // // // // // //       {cart.map((item) => (
// // // // // // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // // // // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // // // // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // // // //         </div>
// // // // // // // // // //       ))}

// // // // // // // // // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // // // // // // // // //         <span>Total:</span>
// // // // // // // // // //         <span>${finalTotal.toFixed(2)}</span>
// // // // // // // // // //       </div>

// // // // // // // // // //       <button
// // // // // // // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // // // // // // // //         onClick={handlePlaceOrder}
// // // // // // // // // //       >
// // // // // // // // // //         Place Order
// // // // // // // // // //       </button>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Payment;


// // // // // // // // // // src/pages/buyer/Payment.jsx
// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // // // // // import axios from "../../utils/axios";

// // // // // // // // // const Payment = () => {
// // // // // // // // //   const { cart, clearCart } = useCart();
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const location = useLocation();

// // // // // // // // //   // Expecting full address object from previous step/page
// // // // // // // // //   const { address } = location.state || {};

// // // // // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // // // // // //   // Totals
// // // // // // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // // // // // // //   const shipping = 50;
// // // // // // // // //   const finalTotal = totalPrice - discount + shipping;

// // // // // // // // //   const handlePlaceOrder = async () => {
// // // // // // // // //     if (!address || !address.street) {
// // // // // // // // //       alert("Please provide a complete shipping address.");
// // // // // // // // //       return;
// // // // // // // // //     }

// // // // // // // // //     try {
// // // // // // // // //       const res = await axios.post(
// // // // // // // // //         "/orders",
// // // // // // // // //         {
// // // // // // // // //           shippingAddress: {
// // // // // // // // //             street: address.street,
// // // // // // // // //             city: address.city,
// // // // // // // // //             state: address.state,
// // // // // // // // //             zip: address.zip,
// // // // // // // // //             country: address.country,
// // // // // // // // //           },
// // // // // // // // //         },
// // // // // // // // //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// // // // // // // // //       );

// // // // // // // // //       // Clear frontend cart
// // // // // // // // //       clearCart();

// // // // // // // // //       // Navigate to confirmation page with order details
// // // // // // // // //       navigate("/order-confirmation", {
// // // // // // // // //         state: {
// // // // // // // // //           orderId: res.data._id,
// // // // // // // // //           products: res.data.products,
// // // // // // // // //           address: res.data.shippingAddress,
// // // // // // // // //           paymentMethod,
// // // // // // // // //           finalTotal: res.data.totalAmount,
// // // // // // // // //         },
// // // // // // // // //       });
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error(err.response?.data);
// // // // // // // // //       alert(err.response?.data?.message || "Order failed");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // // // // // //       <p className="mb-4">
// // // // // // // // //         {address?.street}, {address?.city}, {address?.state}, {address?.zip}, {address?.country}
// // // // // // // // //       </p>

// // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // // // // // // // //       <select
// // // // // // // // //         value={paymentMethod}
// // // // // // // // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // //         className="border p-2 rounded mb-4"
// // // // // // // // //       >
// // // // // // // // //         <option value="cod">Cash on Delivery</option>
// // // // // // // // //         <option value="upi">UPI</option>
// // // // // // // // //         <option value="netbanking">Net Banking</option>
// // // // // // // // //         <option value="emi">EMI</option>
// // // // // // // // //       </select>

// // // // // // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // // // // // // //       {cart.map((item) => (
// // // // // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // // // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // // // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // // //         </div>
// // // // // // // // //       ))}

// // // // // // // // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // // // // // // // //         <span>Total:</span>
// // // // // // // // //         <span>${finalTotal.toFixed(2)}</span>
// // // // // // // // //       </div>

// // // // // // // // //       <button
// // // // // // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // // // // // // //         onClick={handlePlaceOrder}
// // // // // // // // //       >
// // // // // // // // //         Place Order
// // // // // // // // //       </button>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Payment;


// // // // // // // // // src/pages/buyer/Payment.jsx
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // // // // import axios from "../../utils/axios";

// // // // // // // // const Payment = () => {
// // // // // // // //   const { cart, clearCart } = useCart();
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const location = useLocation();

// // // // // // // //   // Expecting full address object from previous page
// // // // // // // //   const { address } = location.state || {};

// // // // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // // // // //   // Calculate totals
// // // // // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // // // // // //   const shipping = 50;
// // // // // // // //   const finalTotal = totalPrice - discount + shipping;

// // // // // // // //   const handlePlaceOrder = async () => {
// // // // // // // //     // Validate address
// // // // // // // //     if (!address || !address.street) {
// // // // // // // //       alert("Please provide a complete shipping address.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       const res = await axios.post(
// // // // // // // //         "/orders",
// // // // // // // //         {
// // // // // // // //           shippingAddress: {
// // // // // // // //             street: address.street,
// // // // // // // //             city: address.city,
// // // // // // // //             state: address.state,
// // // // // // // //             zip: address.zip,
// // // // // // // //             country: address.country,
// // // // // // // //           },
// // // // // // // //         },
// // // // // // // //         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
// // // // // // // //       );

// // // // // // // //       // Clear frontend cart
// // // // // // // //       clearCart();

// // // // // // // //       // Navigate to Order Confirmation page
// // // // // // // //       navigate("/order-confirmation", {
// // // // // // // //         state: {
// // // // // // // //           orderId: res.data._id,
// // // // // // // //           products: res.data.products,
// // // // // // // //           address: res.data.shippingAddress,
// // // // // // // //           paymentMethod,
// // // // // // // //           finalTotal: res.data.totalAmount,
// // // // // // // //         },
// // // // // // // //       });
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err.response?.data);
// // // // // // // //       alert(err.response?.data?.message || "Order failed");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // // // // //       <p className="mb-4">
// // // // // // // //         {address?.street}, {address?.city}, {address?.state}, {address?.zip}, {address?.country}
// // // // // // // //       </p>

// // // // // // // //       <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
// // // // // // // //       <select
// // // // // // // //         value={paymentMethod}
// // // // // // // //         onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // //         className="border p-2 rounded mb-4"
// // // // // // // //       >
// // // // // // // //         <option value="cod">Cash on Delivery</option>
// // // // // // // //         <option value="upi">UPI</option>
// // // // // // // //         <option value="netbanking">Net Banking</option>
// // // // // // // //         <option value="emi">EMI</option>
// // // // // // // //       </select>

// // // // // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // // // // // //       {cart.map((item) => (
// // // // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // //         </div>
// // // // // // // //       ))}

// // // // // // // //       <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
// // // // // // // //         <span>Total:</span>
// // // // // // // //         <span>${finalTotal.toFixed(2)}</span>
// // // // // // // //       </div>

// // // // // // // //       <button
// // // // // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
// // // // // // // //         onClick={handlePlaceOrder}
// // // // // // // //       >
// // // // // // // //         Place Order
// // // // // // // //       </button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Payment;



// // // // // // // // src/pages/buyer/Payment.jsx
// // // // // // // import React, { useState } from "react";
// // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // // // import axios from "../../utils/axios";

// // // // // // // const Payment = () => {
// // // // // // //   const { cart, clearCart } = useCart();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const location = useLocation();

// // // // // // //   const address = location.state?.address;

// // // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // // // //   console.log("RECEIVED ADDRESS:", address); // 🔥 DEBUG

// // // // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // //   const shipping = 50;
// // // // // // //   const finalTotal = totalPrice + shipping;

// // // // // // // //   const handlePlaceOrder = async () => {
// // // // // // // //     if (!address || !address.street) {
// // // // // // // //       alert("Please provide a complete shipping address.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // const handlePlaceOrder = async () => {
// // // // // // //   if (!address || !address.street) {
// // // // // // //     alert("Please provide a complete shipping address.");
// // // // // // //     return;
// // // // // // //   }

// // // // // // //   if (cart.length === 0) {
// // // // // // //     alert("Cart is empty");
// // // // // // //     return;
// // // // // // //   }

// // // // // // //   try {
// // // // // // //     console.log("CART SENDING:", cart); // 🔥 DEBUG

// // // // // // //     const res = await axios.post(
// // // // // // //       "/orders",
// // // // // // //       {
// // // // // // //         shippingAddress: address,
// // // // // // //         products: cart.map((item) => ({
// // // // // // //           product: item._id,
// // // // // // //           quantity: item.quantity,
// // // // // // //           price: item.price
// // // // // // //         }))
// // // // // // //       },
// // // // // // //       {
// // // // // // //         headers: {
// // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // //         },
// // // // // // //       }
// // // // // // //     );

// // // // // // //     clearCart();

// // // // // // //     navigate("/order-confirmation", {
// // // // // // //       state: {
// // // // // // //         orderId: res.data._id,
// // // // // // //         products: res.data.products,
// // // // // // //         address: res.data.shippingAddress,
// // // // // // //         finalTotal: res.data.totalAmount,
// // // // // // //       },
// // // // // // //     });

// // // // // // //   } catch (err) {
// // // // // // //     console.error(err.response?.data);
// // // // // // //     alert(err.response?.data?.message || "Order failed");
// // // // // // //   }
// // // // // // // };

// // // // // // //     try {
// // // // // // //       const res = await axios.post(
// // // // // // //         "/orders",
// // // // // // //         {
// // // // // // //           shippingAddress: address
// // // // // // //         },
// // // // // // //         {
// // // // // // //           headers: {
// // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );

// // // // // // //       clearCart();

// // // // // // //       navigate("/order-confirmation", {
// // // // // // //         state: {
// // // // // // //           orderId: res.data._id,
// // // // // // //           products: res.data.products,
// // // // // // //           address: res.data.shippingAddress,
// // // // // // //           paymentMethod,
// // // // // // //           finalTotal: res.data.totalAmount,
// // // // // // //         },
// // // // // // //       });
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err.response?.data);
// // // // // // //       alert(err.response?.data?.message || "Order failed");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto p-4">
// // // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // // // //       <p className="mb-4">
// // // // // // //         {address?.street}, {address?.city}, {address?.state}, {address?.zip}, {address?.country}
// // // // // // //       </p>

// // // // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
// // // // // // //       {cart.map((item) => (
// // // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2">
// // // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // // //           <span>${item.price * item.quantity}</span>
// // // // // // //         </div>
// // // // // // //       ))}

// // // // // // //       <h3 className="font-bold">Total: ${finalTotal}</h3>

// // // // // // //       <button
// // // // // // //         onClick={handlePlaceOrder}
// // // // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded"
// // // // // // //       >
// // // // // // //         Place Order
// // // // // // //       </button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Payment;


// // // // // // // src/pages/buyer/Payment.jsx
// // // // // // import React, { useState } from "react";
// // // // // // import { useCart } from "../../context/CartContext";
// // // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // // import axios from "../../utils/axios";

// // // // // // const Payment = () => {
// // // // // //   const { cart, clearCart } = useCart();
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const address = location.state?.address;

// // // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // // //   console.log("RECEIVED ADDRESS:", address);

// // // // // //   const totalPrice = cart.reduce(
// // // // // //     (sum, item) => sum + item.price * item.quantity,
// // // // // //     0
// // // // // //   );
// // // // // //   const shipping = 50;
// // // // // //   const finalTotal = totalPrice + shipping;

// // // // // //   // ✅ ONLY ONE FUNCTION (CORRECT)
// // // // // //   const handlePlaceOrder = async () => {
// // // // // //     if (!address || !address.street) {
// // // // // //       alert("Please provide a complete shipping address.");
// // // // // //       return;
// // // // // //     }

// // // // // //     if (cart.length === 0) {
// // // // // //       alert("Cart is empty");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       console.log("CART SENDING:", cart);

// // // // // //       const res = await axios.post(
// // // // // //         "/orders",
// // // // // //         {
// // // // // //           shippingAddress: address
// // // // // //         },
// // // // // //         {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //           },
// // // // // //         }
// // // // // //       );

// // // // // //       console.log("ORDER SUCCESS:", res.data);

// // // // // //       // ✅ clear frontend cart
// // // // // //       clearCart();

// // // // // //       // ✅ go to confirmation page
// // // // // //       navigate("/order-confirmation", {
// // // // // //         state: {
// // // // // //           orderId: res.data._id,
// // // // // //           products: res.data.products,
// // // // // //           address: res.data.shippingAddress,
// // // // // //           paymentMethod,
// // // // // //           finalTotal: res.data.totalAmount,
// // // // // //         },
// // // // // //       });

// // // // // //     } catch (err) {
// // // // // //       console.error("ORDER ERROR:", err.response?.data || err.message);
// // // // // //       alert(err.response?.data?.message || "Order failed");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-2xl font-bold mb-4">Payment</h1>

// // // // // //       <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
// // // // // //       <p className="mb-4">
// // // // // //         {address?.street}, {address?.city}, {address?.state}, {address?.zip}, {address?.country}
// // // // // //       </p>

// // // // // //       <h2 className="text-xl font-semibold mb-2">Order Summary</h2>

// // // // // //       {cart.map((item) => (
// // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2">
// // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // //           <span>${item.price * item.quantity}</span>
// // // // // //         </div>
// // // // // //       ))}

// // // // // //       <h3 className="font-bold">Total: ${finalTotal}</h3>

// // // // // //       <button
// // // // // //         onClick={handlePlaceOrder}
// // // // // //         className="mt-4 w-full bg-green-500 text-white p-2 rounded"
// // // // // //       >
// // // // // //         Place Order
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Payment;

// // // // // //new ui

// // // // // import React, { useState } from "react";
// // // // // import { useCart } from "../../context/CartContext";
// // // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // // import axios from "../../utils/axios";

// // // // // const Payment = () => {
// // // // //   const { cart, clearCart } = useCart();
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   const address = location.state?.address;
// // // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // // //   const totalPrice = cart.reduce(
// // // // //     (sum, item) => sum + item.price * item.quantity,
// // // // //     0
// // // // //   );
// // // // //   const shipping = 50;
// // // // //   const finalTotal = totalPrice + shipping;

// // // // //   const handlePlaceOrder = async () => {
// // // // //     if (!address || !address.street) {
// // // // //       alert("Please provide a complete shipping address.");
// // // // //       return;
// // // // //     }

// // // // //     if (cart.length === 0) {
// // // // //       alert("Cart is empty");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const res = await axios.post(
// // // // //         "/orders",
// // // // //         {
// // // // //           shippingAddress: address,
// // // // //         },
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       clearCart();

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
// // // // //       alert(err.response?.data?.message || "Order failed");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-gray-50 min-h-screen p-6">
// // // // //       {/* Header */}
// // // // //       <h1 className="text-2xl font-semibold mb-6">Choose payment method</h1>

// // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //         {/* LEFT SIDE */}
// // // // //         <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
// // // // //           <h2 className="text-lg font-semibold mb-4">
// // // // //             Payment Method Options
// // // // //           </h2>

// // // // //           {/* Payment Options */}
// // // // //           <div className="space-y-3">
// // // // //             {[
// // // // //               { id: "upi", label: "UPI" },
// // // // //               { id: "card", label: "Credit / Debit Card" },
// // // // //               { id: "cod", label: "Cash on Delivery" },
// // // // //               { id: "netbanking", label: "Net Banking" },
// // // // //               { id: "gift", label: "Gift Card" },
// // // // //               { id: "emi", label: "EMI" },
// // // // //             ].map((method) => (
// // // // //               <div
// // // // //                 key={method.id}
// // // // //                 onClick={() => setPaymentMethod(method.id)}
// // // // //                 className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center transition 
// // // // //                 ${
// // // // //                   paymentMethod === method.id
// // // // //                     ? "border-pink-500 bg-pink-50"
// // // // //                     : "hover:bg-gray-100"
// // // // //                 }`}
// // // // //               >
// // // // //                 <span className="font-medium">{method.label}</span>

// // // // //                 {paymentMethod === method.id && (
// // // // //                   <span className="text-pink-500 font-bold">✓</span>
// // // // //                 )}
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Address */}
// // // // //           <div className="mt-6 border-t pt-4">
// // // // //             <h3 className="font-semibold mb-2">Delivery Address</h3>
// // // // //             <p className="text-sm text-gray-600">
// // // // //               {address?.street}, {address?.city}, {address?.state},{" "}
// // // // //               {address?.zip}, {address?.country}
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Place Order */}
// // // // //           <button
// // // // //             onClick={handlePlaceOrder}
// // // // //             className="mt-6 w-full bg-gray-300 text-white py-3 rounded-lg font-semibold hover:bg-gray-400"
// // // // //           >
// // // // //             Place Order
// // // // //           </button>
// // // // //         </div>

// // // // //         {/* RIGHT SIDE */}
// // // // //         <div className="bg-white rounded-xl shadow p-4 h-fit">
// // // // //           <h2 className="font-semibold mb-4">Order Summary</h2>

// // // // //           {/* Items */}
// // // // //           <div className="space-y-2 mb-4">
// // // // //             {cart.map((item) => (
// // // // //               <div
// // // // //                 key={item._id}
// // // // //                 className="flex justify-between text-sm"
// // // // //               >
// // // // //                 <span>
// // // // //                   {item.title} x {item.quantity}
// // // // //                 </span>
// // // // //                 <span>₹{item.price * item.quantity}</span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div className="border-t pt-3 space-y-2 text-sm">
// // // // //             <div className="flex justify-between">
// // // // //               <span>Subtotal</span>
// // // // //               <span>₹{totalPrice}</span>
// // // // //             </div>

// // // // //             <div className="flex justify-between">
// // // // //               <span>Shipping</span>
// // // // //               <span>₹{shipping}</span>
// // // // //             </div>

// // // // //             <div className="flex justify-between font-semibold text-base">
// // // // //               <span>Total</span>
// // // // //               <span>₹{finalTotal}</span>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Offer Box */}
// // // // //           <div className="mt-4 bg-green-50 text-green-600 text-sm p-2 rounded">
// // // // //             You are saving ₹2
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Payment;


// // // // import React, { useState } from "react";
// // // // import { useCart } from "../../context/CartContext";
// // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // import axios from "../../utils/axios";

// // // // const Payment = () => {
// // // //   const { cart, clearCart } = useCart();
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const address = location.state?.address;

// // // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // // //   console.log("ADDRESS FULL:", address);

// // // //   const totalPrice = cart.reduce(
// // // //     (sum, item) => sum + item.price * item.quantity,
// // // //     0
// // // //   );

// // // //   const shipping = 50;
// // // //   const finalTotal = totalPrice + shipping;

// // // //   // ✅ COMMON ORDER FUNCTION
// // // //   const handlePlaceOrder = async () => {
// // // //     // ✅ FIXED VALIDATION (change fields based on your address schema)
// // // //     if (
// // // //       !address ||
// // // //       !address.addressLine ||
// // // //       !address.city ||
// // // //       !address.pincode
// // // //     ) {
// // // //       alert("Please provide a complete shipping address.");
// // // //       return;
// // // //     }

// // // //     if (cart.length === 0) {
// // // //       alert("Cart is empty");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const res = await axios.post(
// // // //         "/orders",
// // // //         {
// // // //           shippingAddress: address,
// // // //         },
// // // //         {
// // // //           headers: {
// // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //           },
// // // //         }
// // // //       );

// // // //       clearCart();

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
// // // //       console.error(err);
// // // //       alert(err.response?.data?.message || "Order failed");
// // // //     }
// // // //   };

// // // //   // ✅ RAZORPAY HANDLER
// // // //   const handleRazorpay = async () => {
// // // //     try {
// // // //       const { data } = await axios.post("/payment/create-order", {
// // // //         amount: finalTotal,
// // // //       });

// // // //       const options = {
// // // //         key: "YOUR_RAZORPAY_KEY", // replace
// // // //         amount: data.amount,
// // // //         currency: "INR",
// // // //         name: "My Store",
// // // //         order_id: data.id,
// // // //         handler: async function () {
// // // //           await handlePlaceOrder();
// // // //         },
// // // //       };

// // // //       const rzp = new window.Razorpay(options);
// // // //       rzp.open();
// // // //     } catch (err) {
// // // //       alert("Payment failed");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="bg-gray-50 min-h-screen p-6">
// // // //       <h1 className="text-2xl font-semibold mb-6">
// // // //         Choose payment method
// // // //       </h1>

// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //         {/* LEFT SIDE */}
// // // //         <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
// // // //           <h2 className="text-lg font-semibold mb-4">
// // // //             Payment Method Options
// // // //           </h2>

// // // //           {/* PAYMENT OPTIONS */}
// // // //           <div className="space-y-3">
// // // //             {[
// // // //               { id: "upi", label: "UPI" },
// // // //               { id: "card", label: "Credit / Debit Card" },
// // // //               { id: "cod", label: "Cash on Delivery" },
// // // //               { id: "razorpay", label: "Pay Online (Razorpay)" },
// // // //             ].map((method) => (
// // // //               <div
// // // //                 key={method.id}
// // // //                 onClick={() => setPaymentMethod(method.id)}
// // // //                 className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center
// // // //                 ${
// // // //                   paymentMethod === method.id
// // // //                     ? "border-pink-500 bg-pink-50"
// // // //                     : "hover:bg-gray-100"
// // // //                 }`}
// // // //               >
// // // //                 <span>{method.label}</span>
// // // //                 {paymentMethod === method.id && (
// // // //                   <span className="text-pink-500">✓</span>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* ✅ DYNAMIC INPUT FIELDS */}
// // // //           <div className="mt-4">
// // // //             {paymentMethod === "upi" && (
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Enter UPI ID"
// // // //                 className="w-full border p-2 rounded"
// // // //               />
// // // //             )}

// // // //             {paymentMethod === "card" && (
// // // //               <div className="space-y-2">
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Card Number"
// // // //                   className="w-full border p-2 rounded"
// // // //                 />
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="Expiry"
// // // //                   className="w-full border p-2 rounded"
// // // //                 />
// // // //                 <input
// // // //                   type="text"
// // // //                   placeholder="CVV"
// // // //                   className="w-full border p-2 rounded"
// // // //                 />
// // // //               </div>
// // // //             )}

// // // //             {paymentMethod === "cod" && (
// // // //               <p className="text-sm text-gray-500">
// // // //                 Pay cash at your doorstep.
// // // //               </p>
// // // //             )}

// // // //             {paymentMethod === "razorpay" && (
// // // //               <p className="text-sm text-gray-500">
// // // //                 Secure online payment.
// // // //               </p>
// // // //             )}
// // // //           </div>

// // // //           {/* ✅ ADDRESS FIXED */}
// // // //           <div className="mt-6 border-t pt-4">
// // // //             <h3 className="font-semibold mb-2">Delivery Address</h3>

// // // //             <p className="text-sm text-gray-600">
// // // //               {address
// // // //                 ? `${address.addressLine || ""}, ${address.city || ""}, ${
// // // //                     address.state || ""
// // // //                   }, ${address.pincode || ""}`
// // // //                 : "No address selected"}
// // // //             </p>
// // // //           </div>

// // // //           {/* BUTTON */}
// // // //           <button
// // // //             onClick={
// // // //               paymentMethod === "razorpay"
// // // //                 ? handleRazorpay
// // // //                 : handlePlaceOrder
// // // //             }
// // // //             className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600"
// // // //           >
// // // //             Place Order
// // // //           </button>
// // // //         </div>

// // // //         {/* RIGHT SIDE */}
// // // //         <div className="bg-white rounded-xl shadow p-4 h-fit">
// // // //           <h2 className="font-semibold mb-4">Order Summary</h2>

// // // //           {cart.map((item) => (
// // // //             <div
// // // //               key={item._id}
// // // //               className="flex justify-between text-sm mb-2"
// // // //             >
// // // //               <span>
// // // //                 {item.title} x {item.quantity}
// // // //               </span>
// // // //               <span>₹{item.price * item.quantity}</span>
// // // //             </div>
// // // //           ))}

// // // //           <div className="border-t pt-3 mt-3 space-y-2 text-sm">
// // // //             <div className="flex justify-between">
// // // //               <span>Subtotal</span>
// // // //               <span>₹{totalPrice}</span>
// // // //             </div>

// // // //             <div className="flex justify-between">
// // // //               <span>Shipping</span>
// // // //               <span>₹{shipping}</span>
// // // //             </div>

// // // //             <div className="flex justify-between font-semibold text-base">
// // // //               <span>Total</span>
// // // //               <span>₹{finalTotal}</span>
// // // //             </div>
// // // //           </div>

// // // //           <div className="mt-4 bg-green-50 text-green-600 text-sm p-2 rounded">
// // // //             You are saving ₹2
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Payment;


// // // import React, { useState } from "react";
// // // import { useCart } from "../../context/CartContext";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import axios from "../../utils/axios";

// // // const Payment = () => {
// // //   const { cart, clearCart } = useCart();
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   // ✅ GET ADDRESS (STRING OR OBJECT)
// // //   const rawAddress = location.state?.address;

// // //   // ✅ NORMALIZE ADDRESS (IMPORTANT FIX)
// // //   const address =
// // //     typeof rawAddress === "string"
// // //       ? {
// // //           addressLine: rawAddress,
// // //         }
// // //       : rawAddress || {};

// // //   const [paymentMethod, setPaymentMethod] = useState("cod");

// // //   console.log("FINAL ADDRESS:", address);

// // //   const totalPrice = cart.reduce(
// // //     (sum, item) => sum + item.price * item.quantity,
// // //     0
// // //   );

// // //   const shipping = 50;
// // //   const finalTotal = totalPrice + shipping;

// // //   // ✅ PLACE ORDER
// // //   const handlePlaceOrder = async () => {
// // //     if (!address || !address.addressLine) {
// // //       alert("Please provide a complete shipping address.");
// // //       return;
// // //     }

// // //     if (cart.length === 0) {
// // //       alert("Cart is empty");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await axios.post(
// // //         "/orders",
// // //         {
// // //           shippingAddress: address,
// // //         },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //           },
// // //         }
// // //       );

// // //       clearCart();

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
// // //       console.error(err);
// // //       alert(err.response?.data?.message || "Order failed");
// // //     }
// // //   };

// // //   // ✅ RAZORPAY
// // //   const handleRazorpay = async () => {
// // //     if (!address || !address.addressLine) {
// // //       alert("Please provide a complete shipping address.");
// // //       return;
// // //     }

// // //     try {
// // //       const { data } = await axios.post("/payment/create-order", {
// // //         amount: finalTotal,
// // //       });

// // //       const options = {
// // //         key: "YOUR_RAZORPAY_KEY", // replace
// // //         amount: data.amount,
// // //         currency: "INR",
// // //         name: "My Store",
// // //         order_id: data.id,
// // //         handler: async function () {
// // //           await handlePlaceOrder();
// // //         },
// // //       };

// // //       const rzp = new window.Razorpay(options);
// // //       rzp.open();
// // //     } catch (err) {
// // //       alert("Payment failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-gray-50 min-h-screen p-6">
// // //       <h1 className="text-2xl font-semibold mb-6">
// // //         Choose payment method
// // //       </h1>

// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //         {/* LEFT */}
// // //         <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
// // //           <h2 className="text-lg font-semibold mb-4">
// // //             Payment Method Options
// // //           </h2>

// // //           {/* OPTIONS */}
// // //           <div className="space-y-3">
// // //             {[
// // //               { id: "upi", label: "UPI" },
// // //               { id: "card", label: "Credit / Debit Card" },
// // //               { id: "cod", label: "Cash on Delivery" },
// // //               { id: "razorpay", label: "Pay Online (Razorpay)" },
// // //             ].map((method) => (
// // //               <div
// // //                 key={method.id}
// // //                 onClick={() => setPaymentMethod(method.id)}
// // //                 className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center
// // //                 ${
// // //                   paymentMethod === method.id
// // //                     ? "border-pink-500 bg-pink-50"
// // //                     : "hover:bg-gray-100"
// // //                 }`}
// // //               >
// // //                 <span>{method.label}</span>

// // //                 {/* ✅ RADIO STYLE */}
// // //                 <input
// // //                   type="radio"
// // //                   checked={paymentMethod === method.id}
// // //                   readOnly
// // //                 />
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* DYNAMIC INPUT */}
// // //           <div className="mt-4">
// // //             {paymentMethod === "upi" && (
// // //               <input
// // //                 type="text"
// // //                 placeholder="Enter UPI ID"
// // //                 className="w-full border p-2 rounded"
// // //               />
// // //             )}

// // //             {paymentMethod === "card" && (
// // //               <div className="space-y-2">
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Card Number"
// // //                   className="w-full border p-2 rounded"
// // //                 />
// // //                 <input
// // //                   type="text"
// // //                   placeholder="Expiry"
// // //                   className="w-full border p-2 rounded"
// // //                 />
// // //                 <input
// // //                   type="text"
// // //                   placeholder="CVV"
// // //                   className="w-full border p-2 rounded"
// // //                 />
// // //               </div>
// // //             )}

// // //             {paymentMethod === "cod" && (
// // //               <p className="text-sm text-gray-500">
// // //                 Pay cash at delivery.
// // //               </p>
// // //             )}

// // //             {paymentMethod === "razorpay" && (
// // //               <p className="text-sm text-gray-500">
// // //                 Secure online payment.
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* ✅ ADDRESS FIXED */}
// // //           <div className="mt-6 border-t pt-4">
// // //             <h3 className="font-semibold mb-2">Delivery Address</h3>

// // //             <p className="text-sm text-gray-600">
// // //               {address?.addressLine || "No address selected"}
// // //             </p>
// // //           </div>

// // //           {/* BUTTON */}
// // //           <button
// // //             onClick={
// // //               paymentMethod === "razorpay"
// // //                 ? handleRazorpay
// // //                 : handlePlaceOrder
// // //             }
// // //             className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600"
// // //           >
// // //             Place Order
// // //           </button>
// // //         </div>

// // //         {/* RIGHT */}
// // //         <div className="bg-white rounded-xl shadow p-4 h-fit">
// // //           <h2 className="font-semibold mb-4">Order Summary</h2>

// // //           {cart.map((item) => (
// // //             <div
// // //               key={item._id}
// // //               className="flex justify-between text-sm mb-2"
// // //             >
// // //               <span>
// // //                 {item.title} x {item.quantity}
// // //               </span>
// // //               <span>₹{item.price * item.quantity}</span>
// // //             </div>
// // //           ))}

// // //           <div className="border-t pt-3 mt-3 space-y-2 text-sm">
// // //             <div className="flex justify-between">
// // //               <span>Subtotal</span>
// // //               <span>₹{totalPrice}</span>
// // //             </div>

// // //             <div className="flex justify-between">
// // //               <span>Shipping</span>
// // //               <span>₹{shipping}</span>
// // //             </div>

// // //             <div className="flex justify-between font-semibold text-base">
// // //               <span>Total</span>
// // //               <span>₹{finalTotal}</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Payment;


// // import React, { useState } from "react";
// // import { useCart } from "../../context/CartContext";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import axios from "../../utils/axios";

// // const Payment = () => {
// //   const { cart, clearCart } = useCart();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   // ✅ RAW ADDRESS FROM CHECKOUT
// //   const rawAddress = location.state?.address;

// //   // ✅ 🔥 NORMALIZE TO MATCH BACKEND SCHEMA
// //   const address =
// //     typeof rawAddress === "string"
// //       ? {
// //           street: rawAddress,
// //           city: "N/A",
// //           state: "N/A",
// //           zip: "000000",
// //           country: "India",
// //         }
// //       : {
// //           street: rawAddress?.street || rawAddress?.addressLine || "N/A",
// //           city: rawAddress?.city || "N/A",
// //           state: rawAddress?.state || "N/A",
// //           zip: rawAddress?.zip || rawAddress?.pincode || "000000",
// //           country: rawAddress?.country || "India",
// //         };

// //   const [paymentMethod, setPaymentMethod] = useState("cod");

// //   console.log("FINAL ADDRESS:", address);

// //   const totalPrice = cart.reduce(
// //     (sum, item) => sum + item.price * item.quantity,
// //     0
// //   );

// //   const shipping = 50;
// //   const finalTotal = totalPrice + shipping;

// //   // ✅ PLACE ORDER (COD)
// //   const handlePlaceOrder = async () => {
// //     if (!address || !address.street) {
// //       alert("Please provide a complete shipping address.");
// //       return;
// //     }

// //     if (cart.length === 0) {
// //       alert("Cart is empty");
// //       return;
// //     }

// //     try {
// //       const res = await axios.post(
// //         "/orders",
// //         {
// //           shippingAddress: address,
// //         },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         }
// //       );

// //       clearCart();

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
// //       console.error("ORDER ERROR:", err.response?.data || err.message);
// //       alert(err.response?.data?.message || "Order failed");
// //     }
// //   };

// //   // ✅ RAZORPAY FLOW
// //   const handleRazorpay = async () => {
// //     if (!address || !address.street) {
// //       alert("Please provide a complete shipping address.");
// //       return;
// //     }

// //     try {
// //       const { data } = await axios.post("/payment/create-order", {
// //         amount: finalTotal,
// //       });

// //       const options = {
// //         key: "YOUR_RAZORPAY_KEY", // 🔥 replace this
// //         amount: data.amount,
// //         currency: "INR",
// //         name: "My Store",
// //         order_id: data.id,
// //         handler: async function () {
// //           await handlePlaceOrder(); // ✅ place order after payment
// //         },
// //       };

// //       const rzp = new window.Razorpay(options);
// //       rzp.open();
// //     } catch (err) {
// //       console.error(err);
// //       alert("Payment failed");
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-50 min-h-screen p-6">
// //       <h1 className="text-2xl font-semibold mb-6">
// //         Choose payment method
// //       </h1>

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {/* LEFT */}
// //         <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
// //           <h2 className="text-lg font-semibold mb-4">
// //             Payment Method Options
// //           </h2>

// //           {/* PAYMENT OPTIONS */}
// //           <div className="space-y-3">
// //             {[
// //               { id: "upi", label: "UPI" },
// //               { id: "card", label: "Credit / Debit Card" },
// //               { id: "cod", label: "Cash on Delivery" },
// //               { id: "razorpay", label: "Pay Online (Razorpay)" },
// //             ].map((method) => (
// //               <div
// //                 key={method.id}
// //                 onClick={() => setPaymentMethod(method.id)}
// //                 className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center
// //                 ${
// //                   paymentMethod === method.id
// //                     ? "border-pink-500 bg-pink-50"
// //                     : "hover:bg-gray-100"
// //                 }`}
// //               >
// //                 <span>{method.label}</span>

// //                 <input
// //                   type="radio"
// //                   checked={paymentMethod === method.id}
// //                   readOnly
// //                 />
// //               </div>
// //             ))}
// //           </div>

// //           {/* PAYMENT INPUTS */}
// //           <div className="mt-4">
// //             {paymentMethod === "upi" && (
// //               <input
// //                 type="text"
// //                 placeholder="Enter UPI ID"
// //                 className="w-full border p-2 rounded"
// //               />
// //             )}

// //             {paymentMethod === "card" && (
// //               <div className="space-y-2">
// //                 <input
// //                   type="text"
// //                   placeholder="Card Number"
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Expiry"
// //                   className="w-full border p-2 rounded"
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="CVV"
// //                   className="w-full border p-2 rounded"
// //                 />
// //               </div>
// //             )}

// //             {paymentMethod === "cod" && (
// //               <p className="text-sm text-gray-500">
// //                 Pay cash at delivery.
// //               </p>
// //             )}

// //             {paymentMethod === "razorpay" && (
// //               <p className="text-sm text-gray-500">
// //                 Secure online payment.
// //               </p>
// //             )}
// //           </div>

// //           {/* ✅ ADDRESS DISPLAY */}
// //           <div className="mt-6 border-t pt-4">
// //             <h3 className="font-semibold mb-2">Delivery Address</h3>

// //             <p className="text-sm text-gray-600">
// //               {address.street}, {address.city}, {address.state},{" "}
// //               {address.zip}, {address.country}
// //             </p>
// //           </div>

// //           {/* BUTTON */}
// //           <button
// //             onClick={
// //               paymentMethod === "razorpay"
// //                 ? handleRazorpay
// //                 : handlePlaceOrder
// //             }
// //             className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600"
// //           >
// //             Place Order
// //           </button>
// //         </div>

// //         {/* RIGHT */}
// //         <div className="bg-white rounded-xl shadow p-4 h-fit">
// //           <h2 className="font-semibold mb-4">Order Summary</h2>

// //           {cart.map((item) => (
// //             <div
// //               key={item._id}
// //               className="flex justify-between text-sm mb-2"
// //             >
// //               <span>
// //                 {item.title} x {item.quantity}
// //               </span>
// //               <span>₹{item.price * item.quantity}</span>
// //             </div>
// //           ))}

// //           <div className="border-t pt-3 mt-3 space-y-2 text-sm">
// //             <div className="flex justify-between">
// //               <span>Subtotal</span>
// //               <span>₹{totalPrice}</span>
// //             </div>

// //             <div className="flex justify-between">
// //               <span>Shipping</span>
// //               <span>₹{shipping}</span>
// //             </div>

// //             <div className="flex justify-between font-semibold text-base">
// //               <span>Total</span>
// //               <span>₹{finalTotal}</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Payment;


// import React, { useState } from "react";
// import { useCart } from "../../context/CartContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "../../utils/axios";

// const Payment = () => {
//   const { cart, clearCart } = useCart();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // ✅ RAW ADDRESS FROM CHECKOUT (STRING)
//   const rawAddress = location.state?.address;

//   // ✅ CONVERT TO BACKEND FORMAT
//   const address =
//     typeof rawAddress === "string"
//       ? {
//           street: rawAddress,
//           city: "N/A",
//           state: "N/A",
//           zip: "000000",
//           country: "India",
//         }
//       : {
//           street: rawAddress?.street || rawAddress?.addressLine || "N/A",
//           city: rawAddress?.city || "N/A",
//           state: rawAddress?.state || "N/A",
//           zip: rawAddress?.zip || rawAddress?.pincode || "000000",
//           country: rawAddress?.country || "India",
//         };

//   const [paymentMethod, setPaymentMethod] = useState("cod");

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   const shipping = 50;
//   const finalTotal = totalPrice + shipping;

//   // ✅ PLACE ORDER (COD)
//   const handlePlaceOrder = async () => {
//     if (!address || !address.street) {
//       alert("Please provide a complete shipping address.");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("Cart is empty");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "/orders",
//         {
//           shippingAddress: address,
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
//       console.error("ORDER ERROR:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "Order failed");
//     }
//   };

//   // ✅ RAZORPAY
//   const handleRazorpay = async () => {
//     if (!address || !address.street) {
//       alert("Please provide a complete shipping address.");
//       return;
//     }

//     try {
//       const { data } = await axios.post("/payment/create-order", {
//         amount: finalTotal,
//       });

//       const options = {
//         key: "YOUR_RAZORPAY_KEY", // 🔥 replace this
//         amount: data.amount,
//         currency: "INR",
//         name: "My Store",
//         order_id: data.id,
//         handler: async function () {
//           await handlePlaceOrder();
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed");
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen p-6">
//       <h1 className="text-2xl font-semibold mb-6">
//         Choose payment method
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* LEFT */}
//         <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
//           <h2 className="text-lg font-semibold mb-4">
//             Payment Method Options
//           </h2>

//           {/* PAYMENT OPTIONS */}
//           <div className="space-y-3">
//             {[
//               { id: "upi", label: "UPI" },
//               { id: "card", label: "Credit / Debit Card" },
//               { id: "cod", label: "Cash on Delivery" },
//               { id: "razorpay", label: "Pay Online (Razorpay)" },
//             ].map((method) => (
//               <div
//                 key={method.id}
//                 onClick={() => setPaymentMethod(method.id)}
//                 className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center
//                 ${
//                   paymentMethod === method.id
//                     ? "border-pink-500 bg-pink-50"
//                     : "hover:bg-gray-100"
//                 }`}
//               >
//                 <span>{method.label}</span>

//                 <input
//                   type="radio"
//                   checked={paymentMethod === method.id}
//                   readOnly
//                 />
//               </div>
//             ))}
//           </div>

//           {/* PAYMENT INPUTS */}
//           <div className="mt-4">
//             {paymentMethod === "upi" && (
//               <input
//                 type="text"
//                 placeholder="Enter UPI ID"
//                 className="w-full border p-2 rounded"
//               />
//             )}

//             {paymentMethod === "card" && (
//               <div className="space-y-2">
//                 <input
//                   type="text"
//                   placeholder="Card Number"
//                   className="w-full border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Expiry"
//                   className="w-full border p-2 rounded"
//                 />
//                 <input
//                   type="text"
//                   placeholder="CVV"
//                   className="w-full border p-2 rounded"
//                 />
//               </div>
//             )}

//             {paymentMethod === "cod" && (
//               <p className="text-sm text-gray-500">
//                 Pay cash at delivery.
//               </p>
//             )}

//             {paymentMethod === "razorpay" && (
//               <p className="text-sm text-gray-500">
//                 Secure online payment.
//               </p>
//             )}
//           </div>

//           {/* ✅ CLEAN ADDRESS DISPLAY */}
//           <div className="mt-6 border-t pt-4">
//             <h3 className="font-semibold mb-2">Delivery Address</h3>

//             <p className="text-sm text-gray-600">
//               {rawAddress || "No address selected"}
//             </p>
//           </div>

//           {/* BUTTON */}
//           <button
//             onClick={
//               paymentMethod === "razorpay"
//                 ? handleRazorpay
//                 : handlePlaceOrder
//             }
//             className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600"
//           >
//             Place Order
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="bg-white rounded-xl shadow p-4 h-fit">
//           <h2 className="font-semibold mb-4">Order Summary</h2>

//           {cart.map((item) => (
//             <div
//               key={item._id}
//               className="flex justify-between text-sm mb-2">
//               <span>
//                 {item.title} x {item.quantity}
//               </span>
//               <span>₹{item.price * item.quantity}</span>
//             </div>
//           ))}

//           <div className="border-t pt-3 mt-3 space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{totalPrice}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span>₹{shipping}</span>
//             </div>

//             <div className="flex justify-between font-semibold text-base">
//               <span>Total</span>
//               <span>₹{finalTotal}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;



import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ RAW ADDRESS FROM CHECKOUT
  const rawAddress = location.state?.address;

  // ✅ CONVERT TO BACKEND FORMAT
  const address =
    typeof rawAddress === "string"
      ? {
          street: rawAddress,
          city: "N/A",
          state: "N/A",
          zip: "000000",
          country: "India",
        }
      : {
          street: rawAddress?.street || rawAddress?.addressLine || "N/A",
          city: rawAddress?.city || "N/A",
          state: rawAddress?.state || "N/A",
          zip: rawAddress?.zip || rawAddress?.pincode || "000000",
          country: rawAddress?.country || "India",
        };

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 50;
  const finalTotal = totalPrice + shipping;

  // ✅ PLACE ORDER (COD or after payment)
  const handlePlaceOrder = async () => {
    if (!address || !address.street) {
      toast.warning("Please provide a complete shipping address.");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Cart is empty");
      return;
    }

    try {
      const res = await axios.post(
        "/orders",
        { shippingAddress: address },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      clearCart();

      toast.success("Order placed successfully!");

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
      toast.error(err.response?.data?.message || "Order failed");
    }
  };

  // ✅ RAZORPAY PAYMENT
  const handleRazorpay = async () => {
    if (!address || !address.street) {
      toast.warning("Please provide a complete shipping address.");
      return;
    }

    try {
      const { data } = await axios.post("/payment/create-order", {
        amount: finalTotal,
      });

      const options = {
        key: "rzp_test_SRSsFRoRS13yKv", // ✅ replace with your Razorpay test key
        amount: data.amount,
        currency: "INR",
        name: "Luxora",
        order_id: data.id,

        handler: async function (response) {
          try {
            // ✅ VERIFY PAYMENT BEFORE PLACING ORDER
            const verifyRes = await axios.post("/payment/verify", response);

            if (verifyRes.data.success) {
              await handlePlaceOrder();
            }
          } catch (err) {
            console.error(err);
            toast.error("Payment verification failed");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      toast.error("Payment failed");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-6">Choose payment method</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Payment Method Options</h2>

          {/* PAYMENT OPTIONS */}
          <div className="space-y-3">
            {[
              { id: "upi", label: "UPI" },
              { id: "card", label: "Credit / Debit Card" },
              { id: "cod", label: "Cash on Delivery" },
              { id: "razorpay", label: "Pay Online (Razorpay)" },
            ].map((method) => (
              <div
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center
                ${
                  paymentMethod === method.id
                    ? "border-pink-500 bg-pink-50 transform scale-105 transition"
                    : "hover:bg-gray-100 transform transition hover:scale-105"
                }`}
              >
                <span>{method.label}</span>

                <input
                  type="radio"
                  checked={paymentMethod === method.id}
                  readOnly
                />
              </div>
            ))}
          </div>

          {/* PAYMENT INPUTS */}
          <div className="mt-4">
            {paymentMethod === "upi" && (
              <input
                type="text"
                placeholder="Enter UPI ID"
                className="w-full border p-2 rounded"
              />
            )}

            {paymentMethod === "card" && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Expiry"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full border p-2 rounded"
                />
              </div>
            )}

            {paymentMethod === "cod" && (
              <p className="text-sm text-gray-500">Pay cash at delivery.</p>
            )}

            {paymentMethod === "razorpay" && (
              <p className="text-sm text-gray-500">Secure online payment.</p>
            )}
          </div>

          {/* CLEAN ADDRESS DISPLAY */}
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold mb-2">Delivery Address</h3>

            <p className="text-sm text-gray-600">
              {rawAddress || "No address selected"}
            </p>
          </div>

          {/* PLACE ORDER BUTTON */}
          <button
            onClick={
              paymentMethod === "razorpay"
                ? handleRazorpay
                : handlePlaceOrder
            }
            className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transform transition hover:scale-105"
          >
            Place Order
          </button>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow p-4 h-fit">
          <h2 className="font-semibold mb-4">Order Summary</h2>

          {cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between text-sm mb-2"
            >
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="border-t pt-3 mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>

            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;