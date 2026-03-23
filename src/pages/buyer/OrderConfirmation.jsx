// // // src/pages/buyer/OrderConfirmation.jsx
// // import React, { useEffect, useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import Confetti from "react-confetti";
// // import { toast } from "react-toastify";

// // const OrderConfirmation = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const [showConfetti, setShowConfetti] = useState(false);

// //   const order = location.state;

// //   useEffect(() => {
// //     if (order) {
// //       setShowConfetti(true);
// //       toast.success("Order placed successfully!");

// //       const timer = setTimeout(() => setShowConfetti(false), 5000);
// //       return () => clearTimeout(timer);
// //     }
// //   }, [order]);

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

// //   // Clean address
// //   const addressParts = [
// //     order.address?.street,
// //     order.address?.city !== "N/A" && order.address?.city,
// //     order.address?.state !== "N/A" && order.address?.state,
// //     order.address?.zip !== "000000" && order.address?.zip,
// //     order.address?.country,
// //   ].filter(Boolean);
// //   const cleanAddress = addressParts.join(", ");

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden">
      
// //       {/* ✅ Confetti in background */}
// //       {showConfetti && (
// //         <Confetti
// //           width={window.innerWidth}
// //           height={window.innerHeight}
// //           style={{ position: "fixed", zIndex: 0 }}
// //         />
// //       )}

// //       {/* ✅ MAIN CARD (above confetti) */}
// //       <div
// //         className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center 
// //         relative z-10 
// //         transform transition-all duration-500 ease-in-out 
// //         animate-fadeInUp"
// //       >

// //         {/* SUCCESS ICON */}
// //         <div className="text-green-500 text-5xl mb-3 animate-bounce">
// //           ✔
// //         </div>

// //         {/* TITLE */}
// //         <h1 className="text-2xl font-bold text-green-600 mb-2">
// //           Order Placed Successfully!
// //         </h1>

// //         <p className="text-gray-500 mb-4">
// //           Thank you for your purchase 🎉
// //         </p>

// //         {/* ADDRESS */}
// //         <div className="text-sm text-gray-600 mb-4">
// //           <span className="font-semibold">Delivery Address:</span>
// //           <p className="mt-1">{cleanAddress}</p>
// //         </div>

// //         {/* TOTAL */}
// //         <div className="flex justify-between border-t pt-3 mt-3 text-sm">
// //           <span className="font-semibold">Total Paid</span>
// //           <span className="font-bold text-lg text-pink-600">
// //             ₹{order.finalTotal}
// //           </span>
// //         </div>

// //         {/* PRODUCTS */}
// //         <div className="mt-5 text-left">
// //           <h2 className="font-semibold mb-2">Items Ordered</h2>

// //           {order.products.map((p) => (
// //             <div
// //               key={p.product._id}
// //               className="flex justify-between text-sm border-b py-2 
// //               hover:bg-gray-50 hover:translate-x-1 
// //               transition duration-200 rounded"
// //             >
// //               <span>{p.product.title}</span>
// //               <span>Qty: {p.quantity}</span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* BUTTON */}
// //         <button
// //           onClick={() => navigate("/")}
// //           className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold 
// //           hover:bg-pink-600 hover:scale-105 active:scale-95 
// //           transition transform duration-200"
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
//           className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
//         >
//           Go Home
//         </button>
//       </div>
//     );
//   }

//   // Clean address
//   const addressParts = [
//     order.address?.street,
//     order.address?.city && order.address.city !== "N/A" && order.address.city,
//     order.address?.state && order.address.state !== "N/A" && order.address.state,
//     order.address?.zip && order.address.zip !== "000000" && order.address.zip,
//     order.address?.country,
//   ].filter(Boolean);
//   const cleanAddress = addressParts.join(", ");

//   // Dynamically calculate subtotal from products
//   const subtotal = order.products?.reduce(
//     (sum, item) => sum + item.product.price * item.quantity,
//     0
//   ) ?? 0;

//   // Use discount/shipping from order or default
//   const discount = order.discount ?? 0;
//   const shipping = order.shipping ?? 50;

//   // Correct final total calculation
//   const finalTotal = subtotal - discount + shipping;

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden">
//       {showConfetti && (
//         <Confetti
//           width={window.innerWidth}
//           height={window.innerHeight}
//           style={{ position: "fixed", zIndex: 0 }}
//         />
//       )}

//       <div
//         className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center 
//         relative z-10 transform transition-all duration-500 ease-in-out animate-fadeInUp"
//       >
//         <div className="text-green-500 text-5xl mb-3 animate-bounce">✔</div>
//         <h1 className="text-2xl font-bold text-green-600 mb-2">
//           Order Placed Successfully!
//         </h1>
//         <p className="text-gray-500 mb-4">Thank you for your purchase 🎉</p>

//         <div className="text-sm text-gray-600 mb-4">
//           <span className="font-semibold">Delivery Address:</span>
//           <p className="mt-1">{cleanAddress}</p>
//         </div>

//         <div className="mt-5 text-left">
//           <h2 className="font-semibold mb-2">Items Ordered</h2>
//           {order.products.map((p) => (
//             <div
//               key={p.product._id}
//               className="flex justify-between text-sm border-b py-2 hover:bg-gray-50 hover:translate-x-1 transition duration-200 rounded"
//             >
//               <span>{p.product.title}</span>
//               <span>Qty: {p.quantity}</span>
//             </div>
//           ))}
//         </div>

//         <div className="border-t pt-3 mt-3 text-sm space-y-2">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between text-green-600">
//             <span>Discount</span>
//             <span>-₹{discount.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span>₹{shipping.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between text-lg font-bold mt-2">
//             <span>Total Paid</span>
//             <span className="text-pink-600">₹{finalTotal.toFixed(2)}</span>
//           </div>
//         </div>

//         <button
//           onClick={() => navigate("/")}
//           className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 hover:scale-105 active:scale-95 transition transform duration-200"
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
    order.address?.city && order.address.city !== "N/A" && order.address.city,
    order.address?.state && order.address.state !== "N/A" && order.address.state,
    order.address?.zip && order.address.zip !== "000000" && order.address.zip,
    order.address?.country,
  ].filter(Boolean);
  const cleanAddress = addressParts.join(", ");

  // -------------------------
  // Dynamic totals calculation
  // -------------------------
  // Subtotal: sum of all product prices * quantity
  const subtotal = order.products?.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  ) ?? 0;

  // Discount: 10% if subtotal > 1000
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0;

  // Shipping: fixed ₹50 (or adjust logic if needed)
  const shipping = 50;

  // Final total
  const finalTotal = subtotal - discount + shipping;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: "fixed", zIndex: 0 }}
        />
      )}

      <div
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center 
        relative z-10 transform transition-all duration-500 ease-in-out animate-fadeInUp"
      >
        <div className="text-green-500 text-5xl mb-3 animate-bounce">✔</div>
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-500 mb-4">Thank you for your purchase 🎉</p>

        <div className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Delivery Address:</span>
          <p className="mt-1">{cleanAddress}</p>
        </div>

        <div className="mt-5 text-left">
          <h2 className="font-semibold mb-2">Items Ordered</h2>
          {order.products.map((p) => (
            <div
              key={p.product._id}
              className="flex justify-between text-sm border-b py-2 hover:bg-gray-50 hover:translate-x-1 transition duration-200 rounded"
            >
              <span>{p.product.title}</span>
              <span>Qty: {p.quantity}</span>
            </div>
          ))}
        </div>

        <div className="border-t pt-3 mt-3 text-sm space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹{shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-2">
            <span>Total Paid</span>
            <span className="text-pink-600">₹{finalTotal.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 hover:scale-105 active:scale-95 transition transform duration-200"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;