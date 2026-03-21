// // // // // // // // // // // // // // // src/pages/buyer/OrderConfirmation.jsx
// // // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // // // // // // // // // // // const OrderConfirmation = () => {
// // // // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // //   const { products, total, paymentMethod, address } = location.state || {};

// // // // // // // // // // // // // //   if (!products || !products.length) {
// // // // // // // // // // // // // //     return <div className="p-10 text-center">No order details found.</div>;
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="container mx-auto p-4 text-center">
// // // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4 text-green-600">Order Confirmed!</h1>
// // // // // // // // // // // // // //       <p className="mb-4">Thank you for your purchase. Your order has been placed successfully.</p>

// // // // // // // // // // // // // //       <h2 className="text-2xl font-semibold mb-2">Order Summary</h2>
// // // // // // // // // // // // // //       <div className="mb-4">
// // // // // // // // // // // // // //         {products.map((item) => (
// // // // // // // // // // // // // //           <div key={item._id} className="flex justify-between border p-2 rounded mb-1">
// // // // // // // // // // // // // //             <span>{item.title} x {item.quantity}</span>
// // // // // // // // // // // // // //             <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // // // // // // // //           </div>
// // // // // // // // // // // // // //         ))}
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <p className="font-bold">Total Paid: ${total.toFixed(2)}</p>
// // // // // // // // // // // // // //       <p>Payment Method: {paymentMethod}</p>
// // // // // // // // // // // // // //       <p>Shipping Address: {address}</p>

// // // // // // // // // // // // // //       <button
// // // // // // // // // // // // // //         onClick={() => navigate("/home")}
// // // // // // // // // // // // // //         className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // // // //       >
// // // // // // // // // // // // // //         Back to Home
// // // // // // // // // // // // // //       </button>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default OrderConfirmation;


// // // // // // // // // // // // // // src/pages/buyer/OrderConfirmation.jsx
// // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // // // // // // // // // // const OrderConfirmation = () => {
// // // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // //   const { address, paymentMethod, finalTotal } = location.state || {};

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="container mx-auto p-4 text-center">
// // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4 text-green-600">Order Placed Successfully!</h1>
// // // // // // // // // // // // //       <p className="mb-2">Delivery Address: {address}</p>
// // // // // // // // // // // // //       <p className="mb-2">Payment Method: {paymentMethod}</p>
// // // // // // // // // // // // //       <p className="mb-4 font-semibold">Total Amount: ${finalTotal?.toFixed(2)}</p>
// // // // // // // // // // // // //       <p className="mb-6 text-gray-700">Thank you for shopping with us. Your order will be delivered soon!</p>

// // // // // // // // // // // // //       <button
// // // // // // // // // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // // //         onClick={() => navigate("/home")}
// // // // // // // // // // // // //       >
// // // // // // // // // // // // //         Go to Home
// // // // // // // // // // // // //       </button>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default OrderConfirmation;


// // // // // // // // // // // // import React, { useEffect } from "react";
// // // // // // // // // // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // // // // // // // // // const OrderConfirmation = () => {
// // // // // // // // // // // //   const location = useLocation();
// // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // //   const { address, paymentMethod, finalTotal } = location.state || {};

// // // // // // // // // // // //   // If user opened page directly without state, redirect to home
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (!address || !paymentMethod || !finalTotal) {
// // // // // // // // // // // //       navigate("/home");
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [address, paymentMethod, finalTotal, navigate]);

// // // // // // // // // // // //   if (!address || !paymentMethod || !finalTotal) return null; // render nothing while redirecting

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="container mx-auto p-4 text-center">
// // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4 text-green-600">Order Placed Successfully!</h1>
// // // // // // // // // // // //       <p className="mb-2">Delivery Address: {address}</p>
// // // // // // // // // // // //       <p className="mb-2">Payment Method: {paymentMethod}</p>
// // // // // // // // // // // //       <p className="mb-4 font-semibold">Total Amount: ${finalTotal?.toFixed(2)}</p>
// // // // // // // // // // // //       <p className="mb-6 text-gray-700">Thank you for shopping with us. Your order will be delivered soon!</p>

// // // // // // // // // // // //       <button
// // // // // // // // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // //         onClick={() => navigate("/home")}
// // // // // // // // // // // //       >
// // // // // // // // // // // //         Go to Home
// // // // // // // // // // // //       </button>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default OrderConfirmation;

// // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // // // const OrderConfirmation = () => {
// // // // // // // // // // //   const [order, setOrder] = useState(null);
// // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const lastOrder = localStorage.getItem("lastOrder");

// // // // // // // // // // //     if (!lastOrder) {
// // // // // // // // // // //       navigate("/home"); // redirect if no order data
// // // // // // // // // // //     } else {
// // // // // // // // // // //       setOrder(JSON.parse(lastOrder));
// // // // // // // // // // //       localStorage.removeItem("lastOrder"); // clean up
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [navigate]);

// // // // // // // // // // //   if (!order) return null; // prevent blank page

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-6 text-center">
// // // // // // // // // // //       <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
// // // // // // // // // // //       <p className="mb-2">Delivery Address: {order.address}</p>
// // // // // // // // // // //       <p className="mb-2">Payment Method: {order.paymentMethod}</p>
// // // // // // // // // // //       <p className="mb-4 font-semibold">Total Amount: ${order.finalTotal.toFixed(2)}</p>
// // // // // // // // // // //       <p className="mb-6 text-gray-700">Thank you for shopping with us. Your order will be delivered soon!</p>

// // // // // // // // // // //       <button
// // // // // // // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // //         onClick={() => navigate("/home")}
// // // // // // // // // // //       >
// // // // // // // // // // //         Go to Home
// // // // // // // // // // //       </button>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default OrderConfirmation;



// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // // // // const OrderConfirmation = () => {
// // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // //   const location = useLocation();
// // // // // // // // // //   const [order, setOrder] = useState(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     // 1️⃣ Try getting data from location.state
// // // // // // // // // //     if (location.state) {
// // // // // // // // // //       setOrder(location.state);
// // // // // // // // // //       // Optional: store in localStorage in case of refresh
// // // // // // // // // //       localStorage.setItem("lastOrder", JSON.stringify(location.state));
// // // // // // // // // //     } else {
// // // // // // // // // //       // 2️⃣ Fallback to localStorage
// // // // // // // // // //       const savedOrder = localStorage.getItem("lastOrder");
// // // // // // // // // //       if (savedOrder) {
// // // // // // // // // //         setOrder(JSON.parse(savedOrder));
// // // // // // // // // //         localStorage.removeItem("lastOrder"); // cleanup after showing
// // // // // // // // // //       } else {
// // // // // // // // // //         // 3️⃣ If no data, redirect to home
// // // // // // // // // //         navigate("/home");
// // // // // // // // // //       }
// // // // // // // // // //     }
// // // // // // // // // //   }, [location.state, navigate]);

// // // // // // // // // //   if (!order) return null; // prevents blank page

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="container mx-auto p-6 text-center">
// // // // // // // // // //       <h1 className="text-3xl font-bold text-green-600 mb-4">
// // // // // // // // // //         Order Placed Successfully!
// // // // // // // // // //       </h1>

// // // // // // // // // //       <p className="mb-2">
// // // // // // // // // //         Delivery Address: <span className="font-semibold">{order.address}</span>
// // // // // // // // // //       </p>
// // // // // // // // // //       <p className="mb-2">
// // // // // // // // // //         Payment Method: <span className="font-semibold">{order.paymentMethod}</span>
// // // // // // // // // //       </p>
// // // // // // // // // //       <p className="mb-4 font-semibold">
// // // // // // // // // //         Total Amount: ${order.finalTotal.toFixed(2)}
// // // // // // // // // //       </p>

// // // // // // // // // //       <p className="mb-6 text-gray-700">
// // // // // // // // // //         Thank you for shopping with us. Your order will be delivered soon!
// // // // // // // // // //       </p>

// // // // // // // // // //       <button
// // // // // // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // //         onClick={() => navigate("/home")}
// // // // // // // // // //       >
// // // // // // // // // //         Go to Home
// // // // // // // // // //       </button>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default OrderConfirmation;



// // // // // // // // // // src/pages/buyer/OrderConfirmation.jsx
// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // // // const OrderConfirmation = () => {
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const location = useLocation();
// // // // // // // // //   const [order, setOrder] = useState(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (location.state) {
// // // // // // // // //       setOrder(location.state);
// // // // // // // // //       localStorage.setItem("lastOrder", JSON.stringify(location.state));
// // // // // // // // //     } else {
// // // // // // // // //       const savedOrder = localStorage.getItem("lastOrder");
// // // // // // // // //       if (savedOrder) {
// // // // // // // // //         setOrder(JSON.parse(savedOrder));
// // // // // // // // //         localStorage.removeItem("lastOrder");
// // // // // // // // //       } else {
// // // // // // // // //         navigate("/home");
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   }, [location.state, navigate]);

// // // // // // // // //   if (!order) return null;

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto p-6 text-center">
// // // // // // // // //       <h1 className="text-3xl font-bold text-green-600 mb-4">
// // // // // // // // //         Order Placed Successfully!
// // // // // // // // //       </h1>

// // // // // // // // //       <p className="mb-2">
// // // // // // // // //         Delivery Address: <span className="font-semibold">{order.address}</span>
// // // // // // // // //       </p>
// // // // // // // // //       <p className="mb-2">
// // // // // // // // //         Payment Method: <span className="font-semibold">{order.paymentMethod}</span>
// // // // // // // // //       </p>
// // // // // // // // //       <p className="mb-4 font-semibold">
// // // // // // // // //         Total Amount: ${order.finalTotal.toFixed(2)}
// // // // // // // // //       </p>

// // // // // // // // //       <div className="mb-4">
// // // // // // // // //         <h2 className="text-xl font-semibold mb-2">Products Ordered:</h2>
// // // // // // // // //         {order.products.map((item) => (
// // // // // // // // //           <div key={item.product?._id} className="flex justify-between border-b py-1 px-4">
// // // // // // // // //             <span>{item.product?.title || "Unknown Product"}</span>
// // // // // // // // //             <span>Qty: {item.quantity}</span>
// // // // // // // // //             <span>Price: ${item.price.toFixed(2)}</span>
// // // // // // // // //             <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       <p className="mb-6 text-gray-700">
// // // // // // // // //         Thank you for shopping with us. Your order will be delivered soon!
// // // // // // // // //       </p>

// // // // // // // // //       <button
// // // // // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // //         onClick={() => navigate("/home")}
// // // // // // // // //       >
// // // // // // // // //         Go to Home
// // // // // // // // //       </button>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default OrderConfirmation;



// // // // // // // // // src/pages/buyer/OrderConfirmation.jsx
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // // const OrderConfirmation = () => {
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const location = useLocation();
// // // // // // // //   const [order, setOrder] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     // 1️⃣ Get order data from navigation state
// // // // // // // //     if (location.state) {
// // // // // // // //       setOrder(location.state);
// // // // // // // //       localStorage.setItem("lastOrder", JSON.stringify(location.state));
// // // // // // // //     } else {
// // // // // // // //       // 2️⃣ Fallback to localStorage in case of refresh
// // // // // // // //       const savedOrder = localStorage.getItem("lastOrder");
// // // // // // // //       if (savedOrder) {
// // // // // // // //         setOrder(JSON.parse(savedOrder));
// // // // // // // //         localStorage.removeItem("lastOrder");
// // // // // // // //       } else {
// // // // // // // //         // 3️⃣ Redirect if no order data
// // // // // // // //         navigate("/home");
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   }, [location.state, navigate]);

// // // // // // // //   if (!order) return null;

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto p-6 text-center">
// // // // // // // //       <h1 className="text-3xl font-bold text-green-600 mb-4">
// // // // // // // //         Order Placed Successfully!
// // // // // // // //       </h1>

// // // // // // // //       <p className="mb-2">
// // // // // // // //         Delivery Address: <span className="font-semibold">{order.address}</span>
// // // // // // // //       </p>
// // // // // // // //       <p className="mb-2">
// // // // // // // //         Payment Method: <span className="font-semibold">{order.paymentMethod}</span>
// // // // // // // //       </p>
// // // // // // // //       <p className="mb-4 font-semibold">
// // // // // // // //         Total Amount: ${order.finalTotal.toFixed(2)}
// // // // // // // //       </p>

// // // // // // // //       <div className="mb-4">
// // // // // // // //         <h2 className="text-xl font-semibold mb-2">Products Ordered:</h2>
// // // // // // // //         {order.products.map((item) => (
// // // // // // // //           <div key={item.product?._id} className="flex justify-between border-b py-1 px-4">
// // // // // // // //             <span>{item.product?.title || "Unknown Product"}</span>
// // // // // // // //             <span>Qty: {item.quantity}</span>
// // // // // // // //             <span>Price: ${item.price.toFixed(2)}</span>
// // // // // // // //             <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // //           </div>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       <p className="mb-6 text-gray-700">
// // // // // // // //         Thank you for shopping with us. Your order will be delivered soon!
// // // // // // // //       </p>

// // // // // // // //       <button
// // // // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // //         onClick={() => navigate("/home")}
// // // // // // // //       >
// // // // // // // //         Go to Home
// // // // // // // //       </button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default OrderConfirmation;



// // // // // // // // src/pages/buyer/OrderConfirmation.jsx
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // const OrderConfirmation = () => {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const location = useLocation();
// // // // // // //   const [order, setOrder] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     if (location.state) {
// // // // // // //       setOrder(location.state);
// // // // // // //       localStorage.setItem("lastOrder", JSON.stringify(location.state));
// // // // // // //     } else {
// // // // // // //       const savedOrder = localStorage.getItem("lastOrder");
// // // // // // //       if (savedOrder) {
// // // // // // //         setOrder(JSON.parse(savedOrder));
// // // // // // //         localStorage.removeItem("lastOrder");
// // // // // // //       } else {
// // // // // // //         navigate("/home");
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }, [location.state, navigate]);

// // // // // // //   if (!order) return null;

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto p-6 text-center">
// // // // // // //       <h1 className="text-3xl font-bold text-green-600 mb-4">
// // // // // // //         Order Placed Successfully!
// // // // // // //       </h1>

// // // // // // //       <p className="mb-2">
// // // // // // //         Delivery Address:{" "}
// // // // // // //         <span className="font-semibold">
// // // // // // //           {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zip}, {order.address.country}
// // // // // // //         </span>
// // // // // // //       </p>
// // // // // // //       <p className="mb-2">
// // // // // // //         Payment Method: <span className="font-semibold">{order.paymentMethod}</span>
// // // // // // //       </p>
// // // // // // //       <p className="mb-4 font-semibold">
// // // // // // //         Total Amount: ${order.finalTotal.toFixed(2)}
// // // // // // //       </p>

// // // // // // //       <div className="mb-4">
// // // // // // //         <h2 className="text-xl font-semibold mb-2">Products Ordered:</h2>
// // // // // // //         {order.products.map((item) => (
// // // // // // //           <div key={item.product?._id} className="flex justify-between border-b py-1 px-4">
// // // // // // //             <span>{item.product?.title || "Unknown Product"}</span>
// // // // // // //             <span>Qty: {item.quantity}</span>
// // // // // // //             <span>Price: ${item.price.toFixed(2)}</span>
// // // // // // //             <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       <p className="mb-6 text-gray-700">
// // // // // // //         Thank you for shopping with us. Your order will be delivered soon!
// // // // // // //       </p>

// // // // // // //       <button
// // // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // //         onClick={() => navigate("/home")}
// // // // // // //       >
// // // // // // //         Go to Home
// // // // // // //       </button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default OrderConfirmation;

// // // // // // // src/pages/buyer/OrderConfirmation.jsx
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // const OrderConfirmation = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();
// // // // // //   const [order, setOrder] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     if (location.state) {
// // // // // //       setOrder(location.state);
// // // // // //       localStorage.setItem("lastOrder", JSON.stringify(location.state));
// // // // // //     } else {
// // // // // //       const savedOrder = localStorage.getItem("lastOrder");
// // // // // //       if (savedOrder) {
// // // // // //         setOrder(JSON.parse(savedOrder));
// // // // // //         localStorage.removeItem("lastOrder");
// // // // // //       } else {
// // // // // //         navigate("/home");
// // // // // //       }
// // // // // //     }
// // // // // //   }, [location.state, navigate]);

// // // // // //   if (!order) return null;

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-6 text-center">
// // // // // //       <h1 className="text-3xl font-bold text-green-600 mb-4">
// // // // // //         Order Placed Successfully!
// // // // // //       </h1>

// // // // // //       <p className="mb-2">
// // // // // //         Delivery Address:{" "}
// // // // // //         <span className="font-semibold">
// // // // // //           {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zip}, {order.address.country}
// // // // // //         </span>
// // // // // //       </p>
// // // // // //       <p className="mb-2">
// // // // // //         Payment Method: <span className="font-semibold">{order.paymentMethod}</span>
// // // // // //       </p>
// // // // // //       <p className="mb-4 font-semibold">
// // // // // //         Total Amount: ${order.finalTotal.toFixed(2)}
// // // // // //       </p>

// // // // // //       <div className="mb-4">
// // // // // //         <h2 className="text-xl font-semibold mb-2">Products Ordered:</h2>
// // // // // //         {order.products.map((item) => (
// // // // // //           <div key={item.product?._id} className="flex justify-between border-b py-1 px-4">
// // // // // //             <span>{item.product?.title || "Unknown Product"}</span>
// // // // // //             <span>Qty: {item.quantity}</span>
// // // // // //             <span>Price: ${item.price.toFixed(2)}</span>
// // // // // //             <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <p className="mb-6 text-gray-700">
// // // // // //         Thank you for shopping with us. Your order will be delivered soon!
// // // // // //       </p>

// // // // // //       <button
// // // // // //         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // //         onClick={() => navigate("/home")}
// // // // // //       >
// // // // // //         Go to Home
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default OrderConfirmation;



// // // // // // src/pages/buyer/OrderConfirmation.jsx
// // // // // import React from "react";
// // // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // // const OrderConfirmation = () => {
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();

// // // // //   const order = location.state;

// // // // //   if (!order) {
// // // // //     return (
// // // // //       <div className="text-center mt-10">
// // // // //         <p>No order data</p>
// // // // //         <button onClick={() => navigate("/home")}>Go Home</button>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="container mx-auto p-4 text-center">
// // // // //       <h1 className="text-3xl text-green-600 font-bold mb-4">
// // // // //         Order Placed Successfully!
// // // // //       </h1>

// // // // //       <p>
// // // // //         <strong>Address:</strong>{" "}
// // // // //         {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zip}, {order.address.country}
// // // // //       </p>

// // // // //       <p><strong>Total:</strong> ${order.finalTotal}</p>

// // // // //       <h2 className="mt-4 font-bold">Products:</h2>
// // // // //       {order.products.map((p) => (
// // // // //         <div key={p.product._id}>
// // // // //           {p.product.title} - Qty: {p.quantity}
// // // // //         </div>
// // // // //       ))}

// // // // //       <button
// // // // //         onClick={() => navigate("/home")}
// // // // //         className="mt-4 bg-blue-500 text-white p-2 rounded"
// // // // //       >
// // // // //         Go Home
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default OrderConfirmation;

// // // // //new ui
// // // // import React from "react";
// // // // import { useLocation, useNavigate } from "react-router-dom";

// // // // const OrderConfirmation = () => {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();

// // // //   const order = location.state;

// // // //   if (!order) {
// // // //     return (
// // // //       <div className="flex flex-col items-center justify-center mt-20">
// // // //         <p className="text-gray-600">No order data</p>
// // // //         <button
// // // //           onClick={() => navigate("/home")}
// // // //           className="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
// // // //         >
// // // //           Go Home
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // ✅ CLEAN ADDRESS (REMOVE N/A)
// // // //   const addressParts = [
// // // //     order.address?.street,
// // // //     order.address?.city !== "N/A" && order.address?.city,
// // // //     order.address?.state !== "N/A" && order.address?.state,
// // // //     order.address?.zip !== "000000" && order.address?.zip,
// // // //     order.address?.country,
// // // //   ].filter(Boolean);

// // // //   const cleanAddress = addressParts.join(", ");

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
// // // //       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center">
        
// // // //         {/* ✅ SUCCESS ICON */}
// // // //         <div className="text-green-500 text-5xl mb-3">✔</div>

// // // //         <h1 className="text-2xl font-bold text-green-600 mb-2">
// // // //           Order Placed Successfully!
// // // //         </h1>

// // // //         <p className="text-gray-500 mb-4">
// // // //           Thank you for your purchase 🎉
// // // //         </p>

// // // //         {/* ✅ ADDRESS */}
// // // //         <div className="text-sm text-gray-600 mb-4">
// // // //           <span className="font-semibold">Delivery Address:</span>
// // // //           <p className="mt-1">{cleanAddress}</p>
// // // //         </div>

// // // //         {/* ✅ TOTAL */}
// // // //         <div className="flex justify-between border-t pt-3 mt-3 text-sm">
// // // //           <span className="font-semibold">Total Paid</span>
// // // //           <span className="font-bold text-lg text-pink-600">
// // // //             ₹{order.finalTotal}
// // // //           </span>
// // // //         </div>

// // // //         {/* ✅ PRODUCTS */}
// // // //         <div className="mt-5 text-left">
// // // //           <h2 className="font-semibold mb-2">Items Ordered</h2>

// // // //           {order.products.map((p) => (
// // // //             <div
// // // //               key={p.product._id}
// // // //               className="flex justify-between text-sm border-b py-2"
// // // //             >
// // // //               <span>{p.product.title}</span>
// // // //               <span>Qty: {p.quantity}</span>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* ✅ BUTTON */}
// // // //         <button
// // // //           onClick={() => navigate("/")}
// // // //           className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold"
// // // //         >
// // // //           Continue Shopping
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default OrderConfirmation;


// // // import React, { useEffect } from "react";
// // // import { useLocation, useNavigate } from "react-router-dom";
// // // import { toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";
// // // import Confetti from "react-confetti";

// // // const OrderConfirmation = () => {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();

// // //   const order = location.state;

// // //   // Show toast & confetti on mount
// // //   useEffect(() => {
// // //     if (order) {
// // //       toast.success("🎉 Order placed successfully!");
// // //     }
// // //   }, [order]);

// // //   if (!order) {
// // //     return (
// // //       <div className="flex flex-col items-center justify-center mt-20">
// // //         <p className="text-gray-600">No order data</p>
// // //         <button
// // //           onClick={() => navigate("/home")}
// // //           className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition transform hover:scale-105"
// // //         >
// // //           Go Home
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   // Clean address
// // //   const addressParts = [
// // //     order.address?.street,
// // //     order.address?.city !== "N/A" && order.address?.city,
// // //     order.address?.state !== "N/A" && order.address?.state,
// // //     order.address?.zip !== "000000" && order.address?.zip,
// // //     order.address?.country,
// // //   ].filter(Boolean);
// // //   const cleanAddress = addressParts.join(", ");

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative">
// // //       <Confetti numberOfPieces={200} gravity={0.3} recycle={false} />
// // //       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center">
// // //         <div className="text-green-500 text-5xl mb-3">✔</div>
// // //         <h1 className="text-2xl font-bold text-green-600 mb-2">
// // //           Order Placed Successfully!
// // //         </h1>
// // //         <p className="text-gray-500 mb-4">Thank you for your purchase 🎉</p>

// // //         {/* Address */}
// // //         <div className="text-sm text-gray-600 mb-4">
// // //           <span className="font-semibold">Delivery Address:</span>
// // //           <p className="mt-1">{cleanAddress}</p>
// // //         </div>

// // //         {/* Total Paid */}
// // //         <div className="flex justify-between border-t pt-3 mt-3 text-sm">
// // //           <span className="font-semibold">Total Paid</span>
// // //           <span className="font-bold text-lg text-pink-600">
// // //             ₹{order.finalTotal}
// // //           </span>
// // //         </div>

// // //         {/* Products */}
// // //         <div className="mt-5 text-left">
// // //           <h2 className="font-semibold mb-2">Items Ordered</h2>
// // //           {order.products.map((p) => (
// // //             <div
// // //               key={p.product._id}
// // //               className="flex justify-between text-sm border-b py-2"
// // //             >
// // //               <span>{p.product.title}</span>
// // //               <span>Qty: {p.quantity}</span>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Continue Shopping Button */}
// // //         <button
// // //           onClick={() => navigate("/")}
// // //           className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transform transition hover:scale-105"
// // //         >
// // //           Continue Shopping
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default OrderConfirmation;


// // import React, { useEffect, useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import Confetti from "react-confetti";

// // const OrderConfirmation = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const order = location.state;

// //   // ✅ Responsive confetti
// //   const [windowSize, setWindowSize] = useState({
// //     width: window.innerWidth,
// //     height: window.innerHeight,
// //   });

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   if (!order) {
// //     return (
// //       <div className="flex flex-col items-center justify-center mt-20">
// //         <p className="text-gray-600">No order data</p>
// //         <button
// //           onClick={() => navigate("/home")}
// //           className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
// //         >
// //           Go Home
// //         </button>
// //       </div>
// //     );
// //   }

// //   // ✅ Clean address
// //   const addressParts = [
// //     order.address?.street,
// //     order.address?.city !== "N/A" && order.address?.city,
// //     order.address?.state !== "N/A" && order.address?.state,
// //     order.address?.zip !== "000000" && order.address?.zip,
// //     order.address?.country,
// //   ].filter(Boolean);
// //   const cleanAddress = addressParts.join(", ");

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative">
      
// //       {/* ✅ Confetti */}
// //       <Confetti width={windowSize.width} height={windowSize.height} />

// //       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center z-10 relative">
        
// //         {/* Success Icon */}
// //         <div className="text-green-500 text-5xl mb-3">✔</div>

// //         <h1 className="text-2xl font-bold text-green-600 mb-2">
// //           Order Placed Successfully!
// //         </h1>

// //         <p className="text-gray-500 mb-4">
// //           Thank you for your purchase 🎉
// //         </p>

// //         {/* Address */}
// //         <div className="text-sm text-gray-600 mb-4">
// //           <span className="font-semibold">Delivery Address:</span>
// //           <p className="mt-1">{cleanAddress}</p>
// //         </div>

// //         {/* Total Paid */}
// //         <div className="flex justify-between border-t pt-3 mt-3 text-sm">
// //           <span className="font-semibold">Total Paid</span>
// //           <span className="font-bold text-lg text-pink-600">
// //             ₹{order.finalTotal}
// //           </span>
// //         </div>

// //         {/* Items Ordered */}
// //         <div className="mt-5 text-left">
// //           <h2 className="font-semibold mb-2">Items Ordered</h2>
// //           {order.products.map((p) => (
// //             <div
// //               key={p.product._id}
// //               className="flex justify-between text-sm border-b py-2"
// //             >
// //               <span>{p.product.title}</span>
// //               <span>Qty: {p.quantity}</span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Continue Shopping */}
// //         <button
// //           onClick={() => navigate("/")}
// //           className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105"
// //         >
// //           Continue Shopping
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderConfirmation;



// // src/pages/buyer/OrderConfirmation.jsx
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Confetti from "react-confetti";
// import { toast } from "react-toastify";

// const OrderConfirmation = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [showConfetti, setShowConfetti] = useState(false);

//   const order = location.state;

//   useEffect(() => {
//     if (order) {
//       setShowConfetti(true);
//       toast.success("Order placed successfully!");
//       // Stop confetti after 5 seconds
//       const timer = setTimeout(() => setShowConfetti(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [order]);

//   if (!order) {
//     return (
//       <div className="flex flex-col items-center justify-center mt-20">
//         <p className="text-gray-600">No order data</p>
//         <button
//           onClick={() => navigate("/home")}
//           className="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
//         >
//           Go Home
//         </button>
//       </div>
//     );
//   }

//   // Clean address
//   const addressParts = [
//     order.address?.street,
//     order.address?.city !== "N/A" && order.address?.city,
//     order.address?.state !== "N/A" && order.address?.state,
//     order.address?.zip !== "000000" && order.address?.zip,
//     order.address?.country,
//   ].filter(Boolean);
//   const cleanAddress = addressParts.join(", ");

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative">
//       {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
//       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center z-10">
//         <div className="text-green-500 text-5xl mb-3">✔</div>
//         <h1 className="text-2xl font-bold text-green-600 mb-2">
//           Order Placed Successfully!
//         </h1>
//         <p className="text-gray-500 mb-4">Thank you for your purchase 🎉</p>

//         {/* Address */}
//         <div className="text-sm text-gray-600 mb-4">
//           <span className="font-semibold">Delivery Address:</span>
//           <p className="mt-1">{cleanAddress}</p>
//         </div>

//         {/* Total */}
//         <div className="flex justify-between border-t pt-3 mt-3 text-sm">
//           <span className="font-semibold">Total Paid</span>
//           <span className="font-bold text-lg text-pink-600">₹{order.finalTotal}</span>
//         </div>

//         {/* Products */}
//         <div className="mt-5 text-left">
//           <h2 className="font-semibold mb-2">Items Ordered</h2>
//           {order.products.map((p) => (
//             <div
//               key={p.product._id}
//               className="flex justify-between text-sm border-b py-2"
//             >
//               <span>{p.product.title}</span>
//               <span>Qty: {p.quantity}</span>
//             </div>
//           ))}
//         </div>

//         {/* Continue Button */}
//         <button
//           onClick={() => navigate("/")}
//           className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;



// src/pages/buyer/OrderConfirmation.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { toast } from "react-toastify";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  const order = location.state;

  useEffect(() => {
    if (order) {
      setShowConfetti(true);
      toast.success("Order placed successfully!");

      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [order]);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <p className="text-gray-600">No order data</p>
        <button
          onClick={() => navigate("/home")}
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  // Clean address
  const addressParts = [
    order.address?.street,
    order.address?.city !== "N/A" && order.address?.city,
    order.address?.state !== "N/A" && order.address?.state,
    order.address?.zip !== "000000" && order.address?.zip,
    order.address?.country,
  ].filter(Boolean);
  const cleanAddress = addressParts.join(", ");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* ✅ Confetti in background */}
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: "fixed", zIndex: 0 }}
        />
      )}

      {/* ✅ MAIN CARD (above confetti) */}
      <div
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center 
        relative z-10 
        transform transition-all duration-500 ease-in-out 
        animate-fadeInUp"
      >

        {/* SUCCESS ICON */}
        <div className="text-green-500 text-5xl mb-3 animate-bounce">
          ✔
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-500 mb-4">
          Thank you for your purchase 🎉
        </p>

        {/* ADDRESS */}
        <div className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Delivery Address:</span>
          <p className="mt-1">{cleanAddress}</p>
        </div>

        {/* TOTAL */}
        <div className="flex justify-between border-t pt-3 mt-3 text-sm">
          <span className="font-semibold">Total Paid</span>
          <span className="font-bold text-lg text-pink-600">
            ₹{order.finalTotal}
          </span>
        </div>

        {/* PRODUCTS */}
        <div className="mt-5 text-left">
          <h2 className="font-semibold mb-2">Items Ordered</h2>

          {order.products.map((p) => (
            <div
              key={p.product._id}
              className="flex justify-between text-sm border-b py-2 
              hover:bg-gray-50 hover:translate-x-1 
              transition duration-200 rounded"
            >
              <span>{p.product.title}</span>
              <span>Qty: {p.quantity}</span>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold 
          hover:bg-pink-600 hover:scale-105 active:scale-95 
          transition transform duration-200"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;