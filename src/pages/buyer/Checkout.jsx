// // // src/pages/buyer/Checkout.jsx
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../../context/CartContext";

// // const Checkout = () => {
// //   const { cart } = useCart();
// //   const navigate = useNavigate();

// //   const [address, setAddress] = useState("");

// //   // Calculate totals
// //   const shippingCharge = 50;
// //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// //   const finalTotal = totalPrice - discount + shippingCharge;

// //   const handleProceed = () => {
// //     if (!address) return alert("Please enter your address");
// //     navigate("/payment", { state: { address, total: finalTotal } });
// //   };

// //   if (cart.length === 0)
// //     return <div className="p-10 text-center">Your cart is empty.</div>;

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

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
// //                 <p>Quantity: {item.quantity}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Address + Price Details */}
// //         <div className="border p-4 rounded h-fit space-y-4">
// //           <h2 className="text-xl font-bold mb-2">Shipping Address</h2>
// //           <textarea
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //             placeholder="Enter your address"
// //             className="w-full border p-2"
// //           />

// //           <h2 className="text-xl font-bold mt-4 mb-2">Price Details</h2>
// //           <div className="flex justify-between"><span>MRP:</span><span>${totalPrice.toFixed(2)}</span></div>
// //           <div className="flex justify-between"><span>Discount:</span><span>-${discount.toFixed(2)}</span></div>
// //           <div className="flex justify-between"><span>Shipping:</span><span>${shippingCharge.toFixed(2)}</span></div>
// //           <hr className="my-2"/>
// //           <div className="flex justify-between font-bold text-lg">
// //                       <span>Total:</span>
// //             <span>${finalTotal.toFixed(2)}</span>
// //           </div>

// //           <button
// //             onClick={handleProceed}
// //             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4"
// //           >
// //             Proceed to Payment
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout; 



// // src/pages/buyer/Checkout.jsx
// import React, { useState } from "react";
// import { useCart } from "../../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Checkout = () => {
//   const { cart } = useCart();
//   const navigate = useNavigate();
//   const [address, setAddress] = useState("");

//   const handleDeliver = () => {
//     if (!address) {
//       alert("Please enter delivery address");
//       return;
//     }
//     navigate("/payment", { state: { address } });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       <div className="mb-4">
//         <label className="block font-semibold mb-1">Delivery Address:</label>
//         <textarea
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           className="w-full border p-2 rounded"
//           rows={3}
//           placeholder="Enter your address"
//         />
//       </div>

//       <h2 className="text-xl font-semibold mb-2">Products</h2>
//       {cart.map((item) => (
//         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
//           <span>{item.title} x {item.quantity}</span>
//           <span>${(item.price * item.quantity).toFixed(2)}</span>
//         </div>
//       ))}

//       <button
//         className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         onClick={handleDeliver}
//       >
//         Deliver Here
//       </button>
//     </div>
//   );
// };

// export default Checkout;



// src/pages/buyer/Checkout.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    console.log("SENDING ADDRESS:", address); // 🔥 DEBUG

    navigate("/payment", { state: { address } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <input name="street" placeholder="Street" onChange={handleChange} className="border p-2 mb-2 w-full" />
      <input name="city" placeholder="City" onChange={handleChange} className="border p-2 mb-2 w-full" />
      <input name="state" placeholder="State" onChange={handleChange} className="border p-2 mb-2 w-full" />
      <input name="zip" placeholder="ZIP Code" onChange={handleChange} className="border p-2 mb-2 w-full" />
      <input name="country" placeholder="Country" onChange={handleChange} className="border p-2 mb-4 w-full" />

      <button
        onClick={handleContinue}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default Checkout;