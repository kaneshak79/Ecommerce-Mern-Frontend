// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "../../utils/axios";

// // // // // // const Orders = () => {
// // // // // //   const [orders, setOrders] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     const fetchOrders = async () => {
// // // // // //       const res = await axios.get("/orders/myorders", {
// // // // // //         headers: {
// // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //         },
// // // // // //       });
// // // // // //       setOrders(res.data);
// // // // // //     };

// // // // // //     fetchOrders();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="p-6">
// // // // // //       <h1 className="text-2xl font-semibold mb-4">My Orders</h1>

// // // // // //       {orders.length === 0 ? (
// // // // // //         <p>No orders yet</p>
// // // // // //       ) : (
// // // // // //         orders.map((order) => (
// // // // // //           <div key={order._id} className="bg-white p-4 mb-3 rounded shadow">
// // // // // //             <p>Order ID: {order._id}</p>
// // // // // //             <p>Total: ₹{order.totalAmount}</p>
// // // // // //             <p>Status: {order.status}</p>
// // // // // //           </div>
// // // // // //         ))
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Orders;


// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "../../utils/axios";

// // // // // const Orders = () => {
// // // // //   const [orders, setOrders] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const fetchOrders = async () => {
// // // // //       try {
// // // // //         const res = await axios.get("/orders/myorders", {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //           },
// // // // //         });
// // // // //         setOrders(res.data);
// // // // //       } catch (err) {
// // // // //         console.error("Fetch orders error:", err);
// // // // //       }
// // // // //     };

// // // // //     fetchOrders();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="p-6 min-h-screen bg-gray-100">
// // // // //       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
// // // // //         🛒 My Orders
// // // // //       </h1>

// // // // //       {orders.length === 0 ? (
// // // // //         <p className="text-center text-gray-500 mt-10 text-lg animate-pulse">
// // // // //           No orders yet
// // // // //         </p>
// // // // //       ) : (
// // // // //         <div className="space-y-6">
// // // // //           {orders.map((order) => (
// // // // //             <div
// // // // //               key={order._id}
// // // // //               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
// // // // //             >
// // // // //               <div className="flex justify-between items-center mb-4">
// // // // //                 <p className="font-semibold text-gray-700">
// // // // //                   Order ID: {order._id}
// // // // //                 </p>
// // // // //                 <p className="text-gray-400 text-sm">
// // // // //                   {new Date(order.createdAt).toLocaleDateString()}
// // // // //                 </p>
// // // // //               </div>

// // // // //               <div className="space-y-2 mb-4">
// // // // //                 {order.products.map((item, idx) => (
// // // // //                   <div
// // // // //                     key={idx}
// // // // //                     className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition"
// // // // //                   >
// // // // //                     <div className="flex items-center gap-4">
// // // // //                       <img
// // // // //                         src={item.product?.images?.[0] || "/placeholder.png"}
// // // // //                         alt={item.product?.title}
// // // // //                         className="w-16 h-16 object-cover rounded-lg"
// // // // //                       />
// // // // //                       <div>
// // // // //                         <p className="font-medium text-gray-800">
// // // // //                           {item.product?.title || "Product removed"}
// // // // //                         </p>
// // // // //                         <p className="text-gray-500 text-sm">
// // // // //                           Qty: {item.quantity}
// // // // //                         </p>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                     <p className="font-semibold text-gray-700">
// // // // //                       ₹{(item.product?.price * item.quantity || 0).toFixed(2)}
// // // // //                     </p>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>

// // // // //               <div className="flex justify-between items-center border-t pt-3 mt-3">
// // // // //                 <p className="font-semibold text-gray-700">Total</p>
// // // // //                 <p className="font-bold text-pink-600">
// // // // //                   ₹{order.totalAmount.toFixed(2)}
// // // // //                 </p>
// // // // //               </div>

// // // // //               <p
// // // // //                 className={`mt-2 text-sm font-medium ${
// // // // //                   order.status === "Delivered"
// // // // //                     ? "text-green-600"
// // // // //                     : "text-yellow-600"
// // // // //                 }`}
// // // // //               >
// // // // //                 Status: {order.status}
// // // // //               </p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Orders;



// // // import React, { useEffect, useState } from "react";
// // // import axios from "../../utils/axios";

// // // const Orders = () => {
// // //   const [orders, setOrders] = useState([]);

// // //   useEffect(() => {
// // //     const fetchOrders = async () => {
// // //       try {
// // //         const res = await axios.get("/orders/myorders", {
// // //           headers: {
// // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //           },
// // //         });
// // //         setOrders(res.data);
// // //       } catch (err) {
// // //         console.error("Fetch orders error:", err);
// // //       }
// // //     };

// // //     fetchOrders();
// // //   }, []);

// // //   return (
// // //     <div className="p-6 min-h-screen bg-gray-100">
// // //       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
// // //         🛒 My Orders
// // //       </h1>

// // //       {orders.length === 0 ? (
// // //         <p className="text-center text-gray-500 mt-10 text-lg animate-pulse">
// // //           No orders yet
// // //         </p>
// // //       ) : (
// // //         <div className="space-y-6">
// // //           {orders.map((order) => (
// // //             <div
// // //               key={order._id}
// // //               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
// // //             >
// // //               <div className="flex justify-between items-center mb-4">
// // //                 <p className="font-semibold text-gray-700">
// // //                   Order ID: {order._id}
// // //                 </p>
// // //                 <p className="text-gray-400 text-sm">
// // //                   {new Date(order.createdAt).toLocaleDateString()}
// // //                 </p>
// // //               </div>

// // //               <div className="space-y-2 mb-4">
// // //                 {order.products.map((item, idx) => (
// // //                   <div
// // //                     key={idx}
// // //                     className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition"
// // //                   >
// // //                     <div className="flex items-center gap-4">
// // //                         <img
// // //   src={
// // //     item.product?.images?.[0]
// // //       ? `http://localhost:5000/${item.product.images[0]}`
// // //       : "/placeholder.png"
// // //   }
// // //   alt={item.product?.title || "Product removed"}
// // //   className="w-16 h-16 object-cover rounded-lg"
// // // />
// // //                       {/* <img
                    
// // //                         // src={item.product?.images?.[0] || "/placeholder.png"}
// // //                         alt={item.product?.title}
// // //                         className="w-16 h-16 object-cover rounded-lg"
// // //                       /> */}
// // //                       <div>
// // //                         <p className="font-medium text-gray-800">
// // //                           {item.product?.title || "Product removed"}
// // //                         </p>
// // //                         <p className="text-gray-500 text-sm">
// // //                           Qty: {item.quantity}
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <p className="font-semibold text-gray-700">
// // //                       ₹{(item.product?.price * item.quantity || 0).toFixed(2)}
// // //                     </p>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <div className="flex justify-between items-center border-t pt-3 mt-3">
// // //                 <p className="font-semibold text-gray-700">Total</p>
// // //                 <p className="font-bold text-pink-600">
// // //                   ₹{order.totalAmount.toFixed(2)}
// // //                 </p>
// // //               </div>

// // //               <p
// // //                 className={`mt-2 text-sm font-medium ${
// // //                   order.status === "Delivered"
// // //                     ? "text-green-600"
// // //                     : "text-yellow-600"
// // //                 }`}
// // //               >
// // //                 Status: {order.status}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Orders;

// // import React, { useEffect, useState } from "react";
// // import axios from "../../utils/axios";

// // const Orders = () => {
// //   const [orders, setOrders] = useState([]);

// //   // Backend URL
// //   const backendURL =
// //     import.meta.env.VITE_BACKEND_URL ||
// //     "https://ecommerce-mern-backend-1.onrender.com";

// //   // Helper to get correct image URL
// //   const getImageUrl = (imagePath) => {
// //     if (!imagePath) return "/placeholder.png"; // fallback

// //     if (imagePath.startsWith("http")) return imagePath;

// //     // Remove leading slash if exists to avoid double slashes
// //     const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

// //     return `${backendURL}/${cleanPath}`;
// //   };

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("/orders/myorders", {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         });
// //         setOrders(res.data);
// //       } catch (err) {
// //         console.error("Fetch orders error:", err);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="p-6 min-h-screen bg-gray-100">
// //       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
// //         🛒 My Orders
// //       </h1>

// //       {orders.length === 0 ? (
// //         <p className="text-center text-gray-500 mt-10 text-lg animate-pulse">
// //           No orders yet
// //         </p>
// //       ) : (
// //         <div className="space-y-6">
// //           {orders.map((order) => (
// //             <div
// //               key={order._id}
// //               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
// //             >
// //               <div className="flex justify-between items-center mb-4">
// //                 <p className="font-semibold text-gray-700">
// //                   Order ID: {order._id}
// //                 </p>
// //                 <p className="text-gray-400 text-sm">
// //                   {new Date(order.createdAt).toLocaleDateString()}
// //                 </p>
// //               </div>

// //               <div className="space-y-2 mb-4">
// //                 {order.products.map((item, idx) => (
// //                   <div
// //                     key={idx}
// //                     className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition"
// //                   >
// //                     <div className="flex items-center gap-4">
// //                       <img
// //                         src={getImageUrl(item.product?.images?.[0])}
// //                         alt={item.product?.title || "Product removed"}
// //                         className="w-16 h-16 object-cover rounded-lg"
// //                       />
// //                       <div>
// //                         <p className="font-medium text-gray-800">
// //                           {item.product?.title || "Product removed"}
// //                         </p>
// //                         <p className="text-gray-500 text-sm">
// //                           Qty: {item.quantity}
// //                         </p>
// //                       </div>
// //                     </div>
// //                     <p className="font-semibold text-gray-700">
// //                       ₹{(item.product?.price * item.quantity || 0).toFixed(2)}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="flex justify-between items-center border-t pt-3 mt-3">
// //                 <p className="font-semibold text-gray-700">Total</p>
// //                 <p className="font-bold text-pink-600">
// //                   ₹{order.totalAmount.toFixed(2)}
// //                 </p>
// //               </div>

// //               <p
// //                 className={`mt-2 text-sm font-medium ${
// //                   order.status === "Delivered"
// //                     ? "text-green-600"
// //                     : "text-yellow-600"
// //                 }`}
// //               >
// //                 Status: {order.status}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Orders;
// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   // Backend URL
//   const backendURL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-1.onrender.com";

//   // Helper to get correct image URL
//   const getImageUrl = (imagePath) => {
//     if (!imagePath) return "/placeholder.png"; // fallback
//     if (imagePath.startsWith("http")) return imagePath;
//     const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
//     return `${backendURL}/${cleanPath}`;
//   };

//   // Fetch buyer orders
//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("/orders/myorders", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setOrders(res.data);
//     } catch (err) {
//       console.error("Fetch orders error:", err);
//     }
//   };

//   // Poll every 5 seconds to automatically get updates from seller
//   useEffect(() => {
//     fetchOrders(); // initial fetch
//     const interval = setInterval(fetchOrders, 5000); // poll every 5s
//     return () => clearInterval(interval); // cleanup on unmount
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         🛒 My Orders
//       </h1>

//       {orders.length === 0 ? (
//         <p className="text-center text-gray-500 mt-10 text-lg animate-pulse">
//           No orders yet
//         </p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <p className="font-semibold text-gray-700">
//                   Order ID: {order._id}
//                 </p>
//                 <p className="text-gray-400 text-sm">
//                   {new Date(order.createdAt).toLocaleDateString()}
//                 </p>
//               </div>

//               {/* Products in the order */}
//               <div className="space-y-2 mb-4">
//                 {order.products.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition"
//                   >
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={getImageUrl(item.product?.images?.[0])}
//                         alt={item.product?.title || "Product removed"}
//                         className="w-16 h-16 object-cover rounded-lg"
//                       />
//                       <div>
//                         <p className="font-medium text-gray-800">
//                           {item.product?.title || "Product removed"}
//                         </p>
//                         <p className="text-gray-500 text-sm">
//                           Qty: {item.quantity}
//                         </p>
//                         <p
//                           className={`text-sm font-medium ${
//                             item.status === "delivered"
//                               ? "text-green-600"
//                               : item.status === "shipped"
//                               ? "text-blue-600"
//                               : "text-yellow-600"
//                           }`}
//                         >
//                           Status: {item.status || "pending"}
//                         </p>
//                       </div>
//                     </div>
//                     <p className="font-semibold text-gray-700">
//                       ₹{(item.product?.price * item.quantity || 0).toFixed(2)}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Order total */}
//               <div className="flex justify-between items-center border-t pt-3 mt-3">
//                 <p className="font-semibold text-gray-700">Total</p>
//                 <p className="font-bold text-pink-600">
//                   ₹{order.totalAmount.toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Backend URL
  const backendURL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";
    

  // Helper to get correct image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder.png"; // fallback
    if (imagePath.startsWith("http")) return imagePath;
    const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
    return `${backendURL}/${cleanPath}`;
  };

  // Fetch buyer orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get("/orders/myorders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error("Fetch orders error:", err);
    }
  };

  // Poll every 3 seconds to automatically get updates from seller
  useEffect(() => {
    fetchOrders(); // initial fetch
    const interval = setInterval(fetchOrders, 3000); // poll every 3s
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🛒 My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg animate-pulse">
          No orders yet
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-gray-700">
                  Order ID: {order._id}
                </p>
                <p className="text-gray-400 text-sm">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Products in the order */}
              <div className="space-y-2 mb-4">
                {order.products.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={getImageUrl(item.product?.images?.[0])}
                        alt={item.product?.title || "Product removed"}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.product?.title || "Product removed"}
                        </p>
                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>
                        <p
                          className={`text-sm font-medium ${
                            item.status === "delivered"
                              ? "text-green-600"
                              : item.status === "shipped"
                              ? "text-blue-600"
                              : "text-yellow-600"
                          }`}
                        >
                          Status: {item.status || "pending"}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-700">
                      ₹{(item.product?.price * item.quantity || 0).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Order total */}
              <div className="flex justify-between items-center border-t pt-3 mt-3">
                <p className="font-semibold text-gray-700">Total</p>
                <p className="font-bold text-pink-600">
                  ₹{order.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;