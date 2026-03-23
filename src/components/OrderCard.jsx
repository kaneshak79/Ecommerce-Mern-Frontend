// // // // // // // // // import React from "react";

// // // // // // // // // const OrderCard = ({ order }) => {
// // // // // // // // //   return (
// // // // // // // // //     <div className="border p-4 rounded mb-4">
// // // // // // // // //       <p className="font-semibold">Order ID: {order._id}</p>
// // // // // // // // //       <p>Status: <span className="font-bold">{order.status}</span></p>
// // // // // // // // //       <p>Total: ₹{order.totalAmount}</p>
// // // // // // // // //       <div className="mt-2">
// // // // // // // // //         <h4 className="font-semibold">Products:</h4>
// // // // // // // // //         <ul className="list-disc list-inside">
// // // // // // // // //           {order.products.map((item) => (
// // // // // // // // //             <li key={item.product._id}>
// // // // // // // // //               {item.product.title} x {item.quantity} - ₹{item.price * item.quantity}
// // // // // // // // //             </li>
// // // // // // // // //           ))}
// // // // // // // // //         </ul>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default OrderCard;

// // // // // // // // // src/components/OrderCard.jsx
// // // // // // // // import React from "react";

// // // // // // // // const BASE_URL =
// // // // // // // //   import.meta.env.VITE_BACKEND_URL ||
// // // // // // // //   "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // // const OrderCard = ({ order }) => {
// // // // // // // //   return (
// // // // // // // //     <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-300">
// // // // // // // //       <h2 className="font-semibold mb-2">Order ID: {order._id}</h2>
// // // // // // // //       <p className="text-gray-600 mb-2">Status: {order.status}</p>
// // // // // // // //       <p className="text-gray-600 mb-4 font-medium">
// // // // // // // //         Total Amount: ₹{order.totalAmount.toFixed(2)}
// // // // // // // //       </p>

// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // // //         {order.products.map((item, idx) => {
// // // // // // // //           const imageUrl =
// // // // // // // //             item.product.images && item.product.images[0]
// // // // // // // //               ? item.product.images[0].startsWith("http")
// // // // // // // //                 ? item.product.images[0]
// // // // // // // //                 : item.product.images[0].startsWith("/uploads/")
// // // // // // // //                 ? `${BASE_URL}${item.product.images[0]}`
// // // // // // // //                 : `${BASE_URL}/uploads/${item.product.images[0]}`
// // // // // // // //               : "/placeholder.png";

// // // // // // // //           return (
// // // // // // // //             <div
// // // // // // // //               key={idx}
// // // // // // // //               className="flex gap-3 items-center bg-gray-50 p-2 rounded hover:bg-gray-100 transition"
// // // // // // // //             >
// // // // // // // //               <img
// // // // // // // //                 src={imageUrl}
// // // // // // // //                 alt={item.product.title}
// // // // // // // //                 className="w-20 h-20 object-cover rounded shadow-sm"
// // // // // // // //               />
// // // // // // // //               <div>
// // // // // // // //                 <h3 className="font-medium">{item.product.title}</h3>
// // // // // // // //                 <p className="text-sm text-gray-500">
// // // // // // // //                   Qty: {item.quantity}
// // // // // // // //                 </p>
// // // // // // // //                 <p className="text-sm font-semibold">
// // // // // // // //                   ₹{(item.product.price * item.quantity).toFixed(2)}
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           );
// // // // // // // //         })}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default OrderCard;

// // // // // // // import React from "react";

// // // // // // // const BASE_URL =
// // // // // // //   import.meta.env.VITE_BACKEND_URL ||
// // // // // // //   "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // const OrderCard = ({ order }) => {
// // // // // // //   return (
// // // // // // //     <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all duration-300">
// // // // // // //       <h2 className="font-semibold mb-2">Order ID: {order._id}</h2>
// // // // // // //       <p className="text-gray-600 mb-2">Status: {order.status}</p>
// // // // // // //       <p className="text-gray-600 mb-4 font-medium">
// // // // // // //         Total Amount: ₹{order.totalAmount.toFixed(2)}
// // // // // // //       </p>

// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // // //         {order.products.map((item, idx) => {
// // // // // // //           // ✅ Correct path for image
// // // // // // //           const imageUrl =
// // // // // // //             item.product &&
// // // // // // //             item.product.images &&
// // // // // // //             item.product.images[0]
// // // // // // //               ? item.product.images[0].startsWith("http")
// // // // // // //                 ? item.product.images[0]
// // // // // // //                 : item.product.images[0].startsWith("/uploads/")
// // // // // // //                 ? `${BASE_URL}${item.product.images[0]}`
// // // // // // //                 : `${BASE_URL}/uploads/${item.product.images[0]}`
// // // // // // //               : "/placeholder.png";

// // // // // // //           return (
// // // // // // //             <div
// // // // // // //               key={idx}
// // // // // // //               className="flex gap-3 items-center bg-gray-50 p-2 rounded hover:bg-gray-100 transition"
// // // // // // //             >
// // // // // // //               <img
// // // // // // //                 src={imageUrl}
// // // // // // //                 alt={item.product.title}
// // // // // // //                 className="w-20 h-20 object-cover rounded shadow-sm"
// // // // // // //               />
// // // // // // //               <div>
// // // // // // //                 <h3 className="font-medium">{item.product.title}</h3>
// // // // // // //                 <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
// // // // // // //                 <p className="text-sm font-semibold">
// // // // // // //                   ₹{(item.product.price * item.quantity).toFixed(2)}
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           );
// // // // // // //         })}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default OrderCard;




// // // // // // // src/components/OrderCard.jsx
// // // // // // import React from "react";

// // // // // // const backendURL =
// // // // // //   import.meta.env.VITE_BACKEND_URL ||
// // // // // //   "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // const OrderCard = ({ order }) => {
// // // // // //   return (
// // // // // //     <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
// // // // // //       <h2 className="font-semibold text-lg mb-2">Order ID: {order._id}</h2>
// // // // // //       <p className="text-gray-500 mb-4">Status: {order.status}</p>

// // // // // //       {/* Products */}
// // // // // //       <div className="space-y-4">
// // // // // //         {order.products.map((item, idx) => {
// // // // // //           const product = item.product;

// // // // // //           // Construct image URL
// // // // // //           const imageUrl =
// // // // // //             product?.images && product.images[0]
// // // // // //               ? product.images[0].startsWith("http")
// // // // // //                 ? product.images[0]
// // // // // //                 : product.images[0].startsWith("/uploads/")
// // // // // //                 ? `${backendURL}${product.images[0]}`
// // // // // //                 : `${backendURL}/uploads/${product.images[0]}`
// // // // // //               : "/placeholder.png";

// // // // // //           return (
// // // // // //             <div
// // // // // //               key={idx}
// // // // // //               className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors"
// // // // // //             >
// // // // // //               <img
// // // // // //                 src={imageUrl}
// // // // // //                 alt={product?.title || "Product"}
// // // // // //                 className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
// // // // // //               />
// // // // // //               <div className="flex-1">
// // // // // //                 <h3 className="font-medium text-gray-800">{product?.title}</h3>
// // // // // //                 <p className="text-gray-600">
// // // // // //                   ₹{product?.price} × {item.quantity}
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //               <p className="font-semibold text-gray-700">
// // // // // //                 ₹{(product?.price * item.quantity).toFixed(2)}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           );
// // // // // //         })}
// // // // // //       </div>

// // // // // //       <hr className="my-4" />

// // // // // //       {/* Order Total */}
// // // // // //       <div className="flex justify-between font-bold text-gray-800">
// // // // // //         <span>Total</span>
// // // // // //         <span>₹{order.totalAmount}</span>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default OrderCard;


// // // // // // src/components/OrderCard.jsx
// // // // // import React from "react";

// // // // // const backendURL =
// // // // //   import.meta.env.VITE_BACKEND_URL ||
// // // // //   "https://ecommerce-mern-backend-1.onrender.com";

// // // // // const OrderCard = ({ order }) => {
// // // // //   return (
// // // // //     <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
// // // // //       <h2 className="font-semibold text-lg mb-2">Order ID: {order._id}</h2>
// // // // //       <p className="text-gray-500 mb-4">Status: {order.status}</p>

// // // // //       {/* Products */}
// // // // //       <div className="space-y-4">
// // // // //         {order.products.map((item, idx) => {
// // // // //           const product = item.product || {}; // safe fallback

// // // // //           // ✅ Construct image URL safely
// // // // //           const imageUrl =
// // // // //           product.images && product.images[0]
// // // // //       ? product.images[0].startsWith("http")
// // // // //         ? product.images[0]
// // // // //         : product.images[0].startsWith("/uploads/")
// // // // //         ? `${backendURL}${product.images[0]}`
// // // // //         : `${backendURL}/uploads/${product.images[0]}`
// // // // //       : "/placeholder.png";
// // // // //             // (product?.images?.[0] || product?.image || "/placeholder.png").startsWith("http")
// // // // //             //   ? product?.images?.[0] || product?.image
// // // // //             //   : `${backendURL}${product?.images?.[0] || product?.image || "/placeholder.png"}`;

// // // // //           return (
// // // // //             <div
// // // // //               key={idx}
// // // // //               className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl hover:bg-gray-100 transition-colors"
// // // // //             >
// // // // //               <img
// // // // //                 src={imageUrl}
// // // // //                 alt={product?.title || "Product"}
// // // // //                 className="w-24 h-24 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
// // // // //               />
// // // // //               <div className="flex-1">
// // // // //                 <h3 className="font-medium text-gray-800">{product?.title || "Product"}</h3>
// // // // //                 <p className="text-gray-600">
// // // // //                   ₹{product?.price || 0} × {item.quantity}
// // // // //                 </p>
// // // // //               </div>
// // // // //               <p className="font-semibold text-gray-700">
// // // // //                 ₹{((product?.price || 0) * item.quantity).toFixed(2)}
// // // // //               </p>
// // // // //             </div>
// // // // //           );
// // // // //         })}
// // // // //       </div>

// // // // //       <hr className="my-4" />

// // // // //       <div className="flex justify-between font-bold text-gray-800">
// // // // //         <span>Total</span>
// // // // //         <span>₹{order.totalAmount}</span>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default OrderCard;


// // // import React from "react";

// // // const backendURL =
// // //   import.meta.env.VITE_BACKEND_URL ||
// // //   "https://ecommerce-mern-backend-1.onrender.com";

// // // const OrderCard = ({ order }) => {
// // //   return (
// // //     <div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300">
// // //       <p className="text-sm text-gray-500 mb-2">Order ID: {order._id}</p>
// // //       <p className="font-semibold mb-2">Status: {order.status}</p>

// // //       <div className="space-y-2">
// // //         {order.products.map((item) => {
// // //           const product = item.product;

// // //           const imageUrl = 
// // //           product.images && product.images.length > 0
// // //               ? product.images[0].startsWith("http")
// // //                 ? product.images[0]
// // //                 : `${backendURL}${product.images[0]}`
// // //               : "/placeholder.png";
          
// // //   // item.product.images && item.product.images.length > 0
// // //   //   ? item.product.images[0].startsWith("http")
// // //   //     ? item.product.images[0]
// // //   //     : `${backendURL}${item.product.images[0]}`
// // //   //   : "/placeholder.png";
// // //             // product?.images?.length > 0
// // //             //   ? product.images[0].startsWith("http")
// // //             //     ? product.images[0]
// // //             //     : product.images[0].startsWith("/")
// // //             //     ? `${backendURL}${product.images[0]}`
// // //             //     : `${backendURL}/${product.images[0]}`
// // //             //   : "/placeholder.png";

// // //           return (
// // //             <div
// // //               key={item._id}
// // //               className="flex items-center gap-4 p-2 bg-gray-50 rounded-lg"
// // //             >
// // //               <img
// // //                 src={imageUrl}
// // //                 alt={product.title}
// // //                 className="w-20 h-20 object-cover rounded-lg"
// // //               />
// // //               <div className="flex-1">
// // //                 <h3 className="font-medium">{product.title}</h3>
// // //                 <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
// // //                 <p className="text-gray-600 text-sm">
// // //                   Price: ₹{item.price.toFixed(2)}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           );
// // //         })}
// // //       </div>

// // //       <hr className="my-2" />

// // //       <p className="text-right font-semibold text-lg">
// // //         Total: ₹{order.totalAmount.toFixed(2)}
// // //       </p>
// // //     </div>
// // //   );
// // // };

// // // export default OrderCard;


// // import React from "react";

// // const backendURL =
// //   import.meta.env.VITE_BACKEND_URL?.replace(/\/$/, "") || "https://ecommerce-mern-backend-1.onrender.com";

// // const OrderCard = ({ order }) => {
// //   return (
// //     <div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300">
// //       <p className="text-sm text-gray-500 mb-2">Order ID: {order._id}</p>
// //       <p className="font-semibold mb-2">Status: {order.status}</p>

// //       <div className="space-y-2">
// //         {order.products.map((item) => {
// //           const product = item.product;
// //           const imageUrl =
// //             product.images && product.images.length > 0
// //               ? product.images[0].startsWith("http")
// //                 ? product.images[0]
// //                 : `${backendURL}${product.images[0].startsWith("/") ? "" : "/"}${product.images[0]}`
// //               : "/placeholder.png";

// //           return (
// //             <div key={item._id} className="flex items-center gap-4 p-2 bg-gray-50 rounded-lg">
// //               <img
// //                 src={imageUrl}
// //                 alt={product.title}
// //                 className="w-20 h-20 object-cover rounded-lg"
// //               />
// //               <div className="flex-1">
// //                 <h3 className="font-medium">{product.title}</h3>
// //                 <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
// //                 <p className="text-gray-600 text-sm">Price: ₹{item.price.toFixed(2)}</p>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </div>

// //       <hr className="my-2" />

// //       <p className="text-right font-semibold text-lg">Total: ₹{order.totalAmount.toFixed(2)}</p>
// //     </div>
// //   );
// // };

// // export default OrderCard;


// // src/components/OrderCard.jsx
// import React from "react";

// const backendURL =
//   import.meta.env.VITE_BACKEND_URL ||
//   "https://ecommerce-mern-backend-1.onrender.com";

// const OrderCard = ({ order }) => {
//   return (
//     <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-4">
//       <h3 className="font-semibold text-lg">Order ID: {order._id}</h3>
//       <p className="text-gray-500">Status: {order.status}</p>
//       <p className="text-gray-700 font-medium">Total: ₹{order.totalAmount}</p>

//       {/* Products inside this order */}
//       <div className="mt-2 space-y-2">
//         {order.products.map((item) => {
//           const product = item.product;
//           const imageUrl =
//             product.images && product.images[0]
//               ? product.images[0].startsWith("http")
//                 ? product.images[0]
//                 : `${backendURL}${product.images[0]}`
//               : "/placeholder.png";

//           return (
//             <div
//               key={item._id}
//               className="flex items-center gap-4 border rounded p-2 hover:shadow-md transition-all"
//             >
//               <img
//                 src={imageUrl}
//                 alt={product.title}
//                 className="w-20 h-20 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h4 className="font-medium">{product.title}</h4>
//                 <p className="text-gray-500 text-sm">{product.category}</p>
//                 <p className="text-gray-700">
//                   ₹{product.price} x {item.quantity}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default OrderCard;


// src/components/OrderCard.jsx
import React from "react";

const backendURL =
  import.meta.env.VITE_BACKEND_URL ||
  "https://ecommerce-mern-backend-1.onrender.com";

const OrderCard = ({ order }) => {
  // Helper to get full image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder.png"; // fallback placeholder
    if (imagePath.startsWith("http")) return imagePath; // absolute URL
    // concatenate backendURL and image path safely
    return `${backendURL.replace(/\/$/, "")}/${imagePath.replace(/^\/+/, "")}`;
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-4">
      <h3 className="font-semibold text-lg">Order ID: {order._id}</h3>
      <p className="text-gray-500">Status: {order.status}</p>
      <p className="text-gray-700 font-medium">Total: ₹{order.totalAmount}</p>

      {/* Products inside this order */}
      <div className="mt-2 space-y-2">
        {order.products.map((item) => {
          const product = item.product;
          const imageUrl = getImageUrl(product.images?.[0]);

          return (
            <div
              key={item._id}
              className="flex items-center gap-4 border rounded p-2 hover:shadow-md transition-all"
            >
              <img
                src={imageUrl}
                alt={product.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-gray-700">
                  ₹{product.price} x {item.quantity}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderCard;