// // // // // // // // // // src/pages/buyer/Checkout.jsx
// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // // import { useCart } from "../../context/CartContext";

// // // // // // // // // const Checkout = () => {
// // // // // // // // //   const { cart } = useCart();
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const [address, setAddress] = useState("");

// // // // // // // // //   // Calculate totals
// // // // // // // // //   const shippingCharge = 50;
// // // // // // // // //   const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
// // // // // // // // //   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
// // // // // // // // //   const finalTotal = totalPrice - discount + shippingCharge;

// // // // // // // // //   const handleProceed = () => {
// // // // // // // // //     if (!address) return alert("Please enter your address");
// // // // // // // // //     navigate("/payment", { state: { address, total: finalTotal } });
// // // // // // // // //   };

// // // // // // // // //   if (cart.length === 0)
// // // // // // // // //     return <div className="p-10 text-center">Your cart is empty.</div>;

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // //       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

// // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // //         {/* Cart Items */}
// // // // // // // // //         <div className="md:col-span-2 space-y-4">
// // // // // // // // //           {cart.map((item) => (
// // // // // // // // //             <div key={item._id} className="flex border p-4 rounded items-center gap-4">
// // // // // // // // //               <img
// // // // // // // // //                 src={item.image?.startsWith("http") ? item.image : `http://localhost:5000/${item.image}`}
// // // // // // // // //                 alt={item.title}
// // // // // // // // //                 className="h-24 w-24 object-cover"
// // // // // // // // //               />
// // // // // // // // //               <div className="flex-1">
// // // // // // // // //                 <h3 className="font-bold">{item.title}</h3>
// // // // // // // // //                 <p>${item.price}</p>
// // // // // // // // //                 <p>Quantity: {item.quantity}</p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Address + Price Details */}
// // // // // // // // //         <div className="border p-4 rounded h-fit space-y-4">
// // // // // // // // //           <h2 className="text-xl font-bold mb-2">Shipping Address</h2>
// // // // // // // // //           <textarea
// // // // // // // // //             value={address}
// // // // // // // // //             onChange={(e) => setAddress(e.target.value)}
// // // // // // // // //             placeholder="Enter your address"
// // // // // // // // //             className="w-full border p-2"
// // // // // // // // //           />

// // // // // // // // //           <h2 className="text-xl font-bold mt-4 mb-2">Price Details</h2>
// // // // // // // // //           <div className="flex justify-between"><span>MRP:</span><span>${totalPrice.toFixed(2)}</span></div>
// // // // // // // // //           <div className="flex justify-between"><span>Discount:</span><span>-${discount.toFixed(2)}</span></div>
// // // // // // // // //           <div className="flex justify-between"><span>Shipping:</span><span>${shippingCharge.toFixed(2)}</span></div>
// // // // // // // // //           <hr className="my-2"/>
// // // // // // // // //           <div className="flex justify-between font-bold text-lg">
// // // // // // // // //                       <span>Total:</span>
// // // // // // // // //             <span>${finalTotal.toFixed(2)}</span>
// // // // // // // // //           </div>

// // // // // // // // //           <button
// // // // // // // // //             onClick={handleProceed}
// // // // // // // // //             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4"
// // // // // // // // //           >
// // // // // // // // //             Proceed to Payment
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Checkout; 



// // // // // // // // // src/pages/buyer/Checkout.jsx
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // const Checkout = () => {
// // // // // // // //   const { cart } = useCart();
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const [address, setAddress] = useState("");

// // // // // // // //   const handleDeliver = () => {
// // // // // // // //     if (!address) {
// // // // // // // //       alert("Please enter delivery address");
// // // // // // // //       return;
// // // // // // // //     }
// // // // // // // //     navigate("/payment", { state: { address } });
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // //       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

// // // // // // // //       <div className="mb-4">
// // // // // // // //         <label className="block font-semibold mb-1">Delivery Address:</label>
// // // // // // // //         <textarea
// // // // // // // //           value={address}
// // // // // // // //           onChange={(e) => setAddress(e.target.value)}
// // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // //           rows={3}
// // // // // // // //           placeholder="Enter your address"
// // // // // // // //         />
// // // // // // // //       </div>

// // // // // // // //       <h2 className="text-xl font-semibold mb-2">Products</h2>
// // // // // // // //       {cart.map((item) => (
// // // // // // // //         <div key={item._id} className="flex justify-between border p-2 mb-2 rounded">
// // // // // // // //           <span>{item.title} x {item.quantity}</span>
// // // // // // // //           <span>${(item.price * item.quantity).toFixed(2)}</span>
// // // // // // // //         </div>
// // // // // // // //       ))}

// // // // // // // //       <button
// // // // // // // //         className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
// // // // // // // //         onClick={handleDeliver}
// // // // // // // //       >
// // // // // // // //         Deliver Here
// // // // // // // //       </button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Checkout;



// // // // // // // // src/pages/buyer/Checkout.jsx
// // // // // // // import React, { useState } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const Checkout = () => {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const [address, setAddress] = useState({
// // // // // // //     street: "",
// // // // // // //     city: "",
// // // // // // //     state: "",
// // // // // // //     zip: "",
// // // // // // //     country: "",
// // // // // // //   });

// // // // // // //   const handleChange = (e) => {
// // // // // // //     setAddress({ ...address, [e.target.name]: e.target.value });
// // // // // // //   };

// // // // // // //   const handleContinue = () => {
// // // // // // //     console.log("SENDING ADDRESS:", address); // 🔥 DEBUG

// // // // // // //     navigate("/payment", { state: { address } });
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto p-4">
// // // // // // //       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

// // // // // // //       <input name="street" placeholder="Street" onChange={handleChange} className="border p-2 mb-2 w-full" />
// // // // // // //       <input name="city" placeholder="City" onChange={handleChange} className="border p-2 mb-2 w-full" />
// // // // // // //       <input name="state" placeholder="State" onChange={handleChange} className="border p-2 mb-2 w-full" />
// // // // // // //       <input name="zip" placeholder="ZIP Code" onChange={handleChange} className="border p-2 mb-2 w-full" />
// // // // // // //       <input name="country" placeholder="Country" onChange={handleChange} className="border p-2 mb-4 w-full" />

// // // // // // //       <button
// // // // // // //         onClick={handleContinue}
// // // // // // //         className="bg-blue-500 text-white p-2 rounded"
// // // // // // //       >
// // // // // // //         Continue to Payment
// // // // // // //       </button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Checkout;

// // // // // // //new UI

// // // // // // import React, { useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // const Checkout = () => {
// // // // // //   const navigate = useNavigate();

// // // // // //   const [address, setAddress] = useState({
// // // // // //     street: "",
// // // // // //     city: "",
// // // // // //     state: "",
// // // // // //     zip: "",
// // // // // //     country: "",
// // // // // //   });

// // // // // //   const [showForm, setShowForm] = useState(false);

// // // // // //   const handleChange = (e) => {
// // // // // //     setAddress({ ...address, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleContinue = () => {
// // // // // //     console.log("SENDING ADDRESS:", address);
// // // // // //     navigate("/payment", { state: { address } });
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-gray-100 min-h-screen p-6">

// // // // // //       {/* 🔹 STEP HEADER */}
// // // // // //       <div className="flex items-center justify-center gap-10 mb-8">
// // // // // //         <div className="flex items-center gap-2 text-pink-600 font-semibold">
// // // // // //           ✔ Sign Up
// // // // // //         </div>
// // // // // //         <div className="flex items-center gap-2 text-pink-600 font-semibold">
// // // // // //           ✏ Address
// // // // // //         </div>
// // // // // //         <div className="text-gray-400">3 Payment</div>
// // // // // //       </div>

// // // // // //       <h1 className="text-3xl font-semibold mb-2">Choose Address</h1>
// // // // // //       <p className="text-gray-500 mb-6">
// // // // // //         Detailed address will help our delivery partner reach your doorstep quickly
// // // // // //       </p>

// // // // // //       <div className="flex gap-6">

// // // // // //         {/* 🔸 LEFT SECTION */}
// // // // // //         <div className="flex-1 grid grid-cols-2 gap-4">

// // // // // //           {/* ➕ ADD NEW ADDRESS */}
// // // // // //           <div
// // // // // //             onClick={() => setShowForm(true)}
// // // // // //             className="border-2 border-dashed flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-gray-50"
// // // // // //           >
// // // // // //             <span className="text-3xl text-pink-600">+</span>
// // // // // //             <p className="text-pink-600 mt-2">Add New Address</p>
// // // // // //           </div>

// // // // // //           {/* 🏠 ADDRESS FORM */}
// // // // // //           {showForm && (
// // // // // //             <div className="bg-white p-4 rounded shadow col-span-2">
// // // // // //               <h3 className="font-semibold mb-3">Add Address</h3>

// // // // // //               <input name="street" placeholder="Street" onChange={handleChange} className="border p-2 mb-2 w-full" />
// // // // // //               <input name="city" placeholder="City" onChange={handleChange} className="border p-2 mb-2 w-full" />
// // // // // //               <input name="state" placeholder="State" onChange={handleChange} className="border p-2 mb-2 w-full" />
// // // // // //               <input name="zip" placeholder="ZIP Code" onChange={handleChange} className="border p-2 mb-2 w-full" />
// // // // // //               <input name="country" placeholder="Country" onChange={handleChange} className="border p-2 mb-3 w-full" />

// // // // // //               <button
// // // // // //                 onClick={handleContinue}
// // // // // //                 className="bg-pink-600 text-white px-4 py-2 rounded"
// // // // // //               >
// // // // // //                 Deliver Here
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* 🏠 SAMPLE SAVED ADDRESS (STATIC UI LIKE IMAGE) */}
// // // // // //           <div className="bg-white p-4 rounded shadow">
// // // // // //             <h4 className="font-semibold">Kanesha</h4>
// // // // // //             <p className="text-gray-600 text-sm">
// // // // // //               7th Cross Rd, Bangalore - 560068
// // // // // //             </p>

// // // // // //             <div className="flex gap-2 mt-3">
// // // // // //               <button className="border px-3 py-1 rounded">Edit</button>
// // // // // //               <button
// // // // // //                 onClick={handleContinue}
// // // // // //                 className="bg-pink-600 text-white px-3 py-1 rounded"
// // // // // //               >
// // // // // //                 Deliver here
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //         </div>

// // // // // //         {/* 🔸 RIGHT SIDE SUMMARY */}
// // // // // //         <div className="w-80 bg-white p-4 rounded shadow h-fit">
// // // // // //           <h3 className="font-semibold mb-2">Bag</h3>
// // // // // //           <p className="text-gray-500 mb-4">1 Item</p>

// // // // // //           <h3 className="font-semibold mb-2">Price Details</h3>
// // // // // //           <p className="text-gray-600">₹167</p>

// // // // // //           <p className="text-green-600 text-sm mt-2">
// // // // // //             You are saving ₹2
// // // // // //           </p>

// // // // // //           <div className="mt-4 text-sm text-gray-500">
// // // // // //             <p>✔ Authentic Products</p>
// // // // // //             <p>✔ Secure Payments</p>
// // // // // //             <p>✔ Easy Return & Exchange</p>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Checkout;

// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import axios from "../../utils/axios";

// // // // // const Checkout = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const [user, setUser] = useState({});
// // // // //   const [cart, setCart] = useState([]);
// // // // //   const [total, setTotal] = useState(0);

// // // // //   // ✅ FETCH PROFILE
// // // // //   const fetchProfile = async () => {
// // // // //     try {
// // // // //       const res = await axios.get("/auth/profile", {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //         },
// // // // //       });

// // // // //       setUser(res.data);
// // // // //     } catch (err) {
// // // // //       console.log(err);
// // // // //     }
// // // // //   };

// // // // //   // ✅ FETCH CART

// // // // // //   const fetchCart = async () => {
// // // // // //     try {
// // // // // //       const res = await axios.get("/cart", {
// // // // // //         headers: {
// // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //         },
// // // // // //       });

// // // // // //       setCart(res.data.items);

// // // // // //       // 🔥 calculate total
// // // // // //       const totalPrice = res.data.items.reduce(
// // // // // //         (acc, item) => acc + item.price * item.quantity,
// // // // // //         0
// // // // // //       );

// // // // // //       setTotal(totalPrice);
// // // // // //     } catch (err) {
// // // // // //       console.log(err);
// // // // // //     }
// // // // // //   };

// // // // // const fetchCart = async () => {
// // // // //   try {
// // // // //     const res = await axios.get("/cart", {
// // // // //       headers: {
// // // // //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //       },
// // // // //     });

// // // // //     console.log("CART DATA:", res.data); // 🔍 debug

// // // // //     const items = res.data.items || res.data.cart || []; // ✅ fallback

// // // // //     setCart(items);

// // // // //     const totalPrice = items.reduce(
// // // // //       (acc, item) => acc + item.price * item.quantity,
// // // // //       0
// // // // //     );

// // // // //     setTotal(totalPrice);
// // // // //   } catch (err) {
// // // // //     console.log(err);
// // // // //   }
// // // // // };

// // // // //   useEffect(() => {
// // // // //     fetchProfile();
// // // // //     fetchCart();
// // // // //   }, []);

// // // // //   // ✅ CONTINUE TO PAYMENT
// // // // //   const handleContinue = () => {
// // // // //     navigate("/payment", {
// // // // //       state: {
// // // // //         address: user.address,
// // // // //         cart,
// // // // //         total,
// // // // //       },
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-gray-100 min-h-screen p-6">

// // // // //       {/* 🔹 STEP HEADER */}
// // // // //       <div className="flex justify-center gap-10 mb-8">
// // // // //         <span className="text-pink-600">✔ Sign Up</span>
// // // // //         <span className="text-pink-600">✔ Address</span>
// // // // //         <span className="text-gray-400">Payment</span>
// // // // //       </div>

// // // // //       <h1 className="text-3xl font-semibold mb-2">Choose Address</h1>

// // // // //       <div className="flex gap-6">

// // // // //         {/* 🔸 LEFT SECTION */}
// // // // //         <div className="flex-1 space-y-4">

// // // // //           {/* 🏠 USER ADDRESS FROM PROFILE */}
// // // // //           <div className="bg-white p-4 rounded shadow">
// // // // //             <h3 className="font-semibold">
// // // // //               {user.name || "No Name"}
// // // // //             </h3>

// // // // //             <p className="text-gray-600 text-sm">
// // // // //               {user.address || "No address added"}
// // // // //             </p>

// // // // //             <p className="text-gray-500 text-sm">
// // // // //               {user.email}
// // // // //             </p>

// // // // //             <div className="flex gap-2 mt-3">
// // // // //               <button className="border px-3 py-1 rounded">
// // // // //                 Edit
// // // // //               </button>

// // // // //               <button
// // // // //                 onClick={handleContinue}
// // // // //                 className="bg-pink-600 text-white px-3 py-1 rounded"
// // // // //               >
// // // // //                 Deliver here
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //         </div>

// // // // //         {/* 🔸 RIGHT SIDE - CART SUMMARY */}
// // // // //         <div className="w-80 bg-white p-4 rounded shadow">

// // // // //           <h3 className="font-semibold mb-3">Bag</h3>

// // // // //           {/* 🛒 CART ITEMS */}
// // // // //           {cart.map((item, index) => (
// // // // //             <div key={index} className="flex justify-between mb-2 text-sm">
// // // // //               <span>
// // // // //                 {item.name} x {item.quantity}
// // // // //               </span>
// // // // //               <span>₹{item.price * item.quantity}</span>
// // // // //             </div>
// // // // //           ))}

// // // // //           <hr className="my-3" />

// // // // //           {/* 💰 TOTAL */}
// // // // //           <h3 className="font-semibold mb-2">Price Details</h3>

// // // // //           <div className="flex justify-between">
// // // // //             <span>Total</span>
// // // // //             <span>₹{total}</span>
// // // // //           </div>

// // // // //           <p className="text-green-600 text-sm mt-2">
// // // // //             You are saving ₹0
// // // // //           </p>

// // // // //           <button
// // // // //             onClick={handleContinue}
// // // // //             className="w-full mt-4 bg-pink-600 text-white py-2 rounded"
// // // // //           >
// // // // //             Continue to Payment
// // // // //           </button>

// // // // //         </div>

// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Checkout;


// // // // import React, { useEffect, useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import axios from "../../utils/axios";

// // // // const Checkout = () => {
// // // //   const navigate = useNavigate();

// // // //   const [user, setUser] = useState({});
// // // //   const [cart, setCart] = useState([]);
// // // //   const [total, setTotal] = useState(0);

// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [newAddress, setNewAddress] = useState("");

// // // //   // ✅ FETCH PROFILE
// // // //   const fetchProfile = async () => {
// // // //     try {
// // // //       const res = await axios.get("/auth/profile", {
// // // //         headers: {
// // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //         },
// // // //       });

// // // //       setUser(res.data);
// // // //     } catch (err) {
// // // //       console.log(err);
// // // //     }
// // // //   };

// // // //   // ✅ FETCH CART
// // // //   const fetchCart = async () => {
// // // //     try {
// // // //       const res = await axios.get("/cart", {
// // // //         headers: {
// // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //         },
// // // //       });

// // // //       const items = res.data.items || res.data.cart || [];
// // // //       setCart(items);

// // // //       const totalPrice = items.reduce(
// // // //         (acc, item) => acc + item.price * item.quantity,
// // // //         0
// // // //       );

// // // //       setTotal(totalPrice);
// // // //     } catch (err) {
// // // //       console.log(err);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchProfile();
// // // //     fetchCart();
// // // //   }, []);

// // // //   // ✅ CONTINUE
// // // //   const handleContinue = (selectedAddress) => {
// // // //     navigate("/payment", {
// // // //       state: {
// // // //         address: selectedAddress,
// // // //         cart,
// // // //         total,
// // // //       },
// // // //     });
// // // //   };

// // // //   return (
// // // //     <div className="bg-gray-100 min-h-screen p-6">

// // // //       {/* 🔹 STEP HEADER */}
// // // //       <div className="flex justify-center gap-10 mb-8">
// // // //         <span className="text-pink-600">✔ Sign Up</span>
// // // //         <span className="text-pink-600">✔ Address</span>
// // // //         <span className="text-gray-400">Payment</span>
// // // //       </div>

// // // //       <h1 className="text-3xl font-semibold mb-4">Choose Address</h1>

// // // //       <div className="flex gap-6">

// // // //         {/* 🔸 LEFT */}
// // // //         <div className="flex-1 grid grid-cols-2 gap-4">

// // // //           {/* ➕ ADD NEW ADDRESS */}
// // // //           <div
// // // //             onClick={() => setShowForm(true)}
// // // //             className="border-2 border-dashed flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-gray-50"
// // // //           >
// // // //             <span className="text-3xl text-pink-600">+</span>
// // // //             <p className="text-pink-600 mt-2">Add New Address</p>
// // // //           </div>

// // // //           {/* 📝 ADDRESS FORM */}
// // // //           {showForm && (
// // // //             <div className="bg-white p-4 rounded shadow col-span-2">
// // // //               <h3 className="font-semibold mb-2">New Address</h3>

// // // //               <input
// // // //                 placeholder="Enter full address"
// // // //                 value={newAddress}
// // // //                 onChange={(e) => setNewAddress(e.target.value)}
// // // //                 className="border p-2 w-full mb-3"
// // // //               />

// // // //               <button
// // // //                 onClick={() => handleContinue(newAddress)}
// // // //                 className="bg-pink-600 text-white px-4 py-2 rounded"
// // // //               >
// // // //                 Deliver Here
// // // //               </button>
// // // //             </div>
// // // //           )}

// // // //           {/* 🏠 PROFILE ADDRESS */}
// // // //           <div className="bg-white p-4 rounded shadow">
// // // //             <h3 className="font-semibold">{user.name}</h3>
// // // //             <p className="text-gray-600 text-sm">
// // // //               {user.address || "No address added"}
// // // //             </p>

// // // //             <button
// // // //               onClick={() => handleContinue(user.address)}
// // // //               className="bg-pink-600 text-white px-3 py-1 rounded mt-3"
// // // //             >
// // // //               Deliver here
// // // //             </button>
// // // //           </div>

// // // //         </div>

// // // //         {/* 🔸 RIGHT - CART */}
// // // //         <div className="w-80 bg-white p-4 rounded shadow">

// // // //           <h3 className="font-semibold mb-3">Bag</h3>

// // // //           {cart.length === 0 ? (
// // // //             <p className="text-gray-500">Cart is empty</p>
// // // //           ) : (
// // // //             cart.map((item, index) => (
// // // //               <div key={index} className="flex justify-between mb-2 text-sm">
// // // //                 <span>
// // // //                   {item.name} x {item.quantity}
// // // //                 </span>
// // // //                 <span>₹{item.price * item.quantity}</span>
// // // //               </div>
// // // //             ))
// // // //           )}

// // // //           <hr className="my-3" />

// // // //           <div className="flex justify-between font-semibold">
// // // //             <span>Total</span>
// // // //             <span>₹{total}</span>
// // // //           </div>

// // // //           <button
// // // //             onClick={() => handleContinue(user.address)}
// // // //             className="w-full mt-4 bg-pink-600 text-white py-2 rounded"
// // // //           >
// // // //             Continue to Payment
// // // //           </button>

// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Checkout;

// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "../../utils/axios";

// // const Checkout = () => {
// //   const navigate = useNavigate();

// //   const [user, setUser] = useState({});
// //   const [cart, setCart] = useState([]);
// //   const [total, setTotal] = useState(0);

// //   const [showForm, setShowForm] = useState(false);
// //   const [newAddress, setNewAddress] = useState("");

// //   // ✅ FETCH PROFILE
// //   const fetchProfile = async () => {
// //     try {
// //       const res = await axios.get("/auth/profile", {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });

// //       setUser(res.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   // ✅ FETCH CART
// //   const fetchCart = async () => {
// //     try {
// //       const res = await axios.get("/cart", {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });

// //       console.log("CART DATA:", res.data); // 🔍 DEBUG

// //       const items = res.data.items || res.data.cart || [];

// //       setCart(items);

// //       // ✅ FIXED TOTAL CALCULATION
// //       const totalPrice = items.reduce(
// //         (acc, item) =>
// //           acc + (item.product?.price || 0) * (item.quantity || 1),
// //         0
// //       );

// //       setTotal(totalPrice);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProfile();
// //     fetchCart();
// //   }, []);

// //   // ✅ CONTINUE TO PAYMENT
// //   const handleContinue = (selectedAddress) => {
// //     navigate("/payment", {
// //       state: {
// //         address: selectedAddress,
// //         cart,
// //         total,
// //       },
// //     });
// //   };

// //   return (
// //     <div className="bg-gray-100 min-h-screen p-6">

// //       {/* 🔹 STEP HEADER */}
// //       <div className="flex justify-center gap-10 mb-8 text-sm">
// //         <span className="text-pink-600 font-semibold">✔ Sign Up</span>
// //         <span className="text-pink-600 font-semibold">✔ Address</span>
// //         <span className="text-gray-400">Payment</span>
// //       </div>

// //       <h1 className="text-3xl font-semibold mb-4">Choose Address</h1>

// //       <div className="flex gap-6">

// //         {/* 🔸 LEFT SECTION */}
// //         <div className="flex-1 grid grid-cols-2 gap-4">

// //           {/* ➕ ADD NEW ADDRESS */}
// //           <div
// //             onClick={() => setShowForm(true)}
// //             className="border-2 border-dashed flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-gray-50"
// //           >
// //             <span className="text-3xl text-pink-600">+</span>
// //             <p className="text-pink-600 mt-2">Add New Address</p>
// //           </div>

// //           {/* 📝 ADDRESS FORM */}
// //           {showForm && (
// //             <div className="bg-white p-4 rounded shadow col-span-2">
// //               <h3 className="font-semibold mb-2">New Address</h3>

// //               <input
// //                 placeholder="Enter full address"
// //                 value={newAddress}
// //                 onChange={(e) => setNewAddress(e.target.value)}
// //                 className="border p-2 w-full mb-3"
// //               />

// //               <button
// //                 onClick={() => handleContinue(newAddress)}
// //                 className="bg-pink-600 text-white px-4 py-2 rounded"
// //               >
// //                 Deliver Here
// //               </button>
// //             </div>
// //           )}

// //           {/* 🏠 PROFILE ADDRESS */}
// //           <div className="bg-white p-4 rounded shadow">
// //             <h3 className="font-semibold">
// //               {user.name || "No Name"}
// //             </h3>

// //             <p className="text-gray-600 text-sm">
// //               {user.address || "No address added"}
// //             </p>

// //             <p className="text-gray-500 text-sm">
// //               {user.email}
// //             </p>

// //             <button
// //               onClick={() => handleContinue(user.address)}
// //               className="bg-pink-600 text-white px-3 py-1 rounded mt-3"
// //             >
// //               Deliver here
// //             </button>
// //           </div>

// //         </div>

// //         {/* 🔸 RIGHT SIDE - CART */}
// //         <div className="w-80 bg-white p-4 rounded shadow">

// //           <h3 className="font-semibold mb-3">Bag</h3>

// //           {cart.length === 0 ? (
// //             <p className="text-gray-500">Cart is empty</p>
// //           ) : (
// //             cart.map((item, index) => (
// //               <div key={index} className="flex justify-between mb-2 text-sm">
// //                 <span>
// //                   {item.product?.name} x {item.quantity}
// //                 </span>
// //                 <span>
// //                   ₹{(item.product?.price || 0) * item.quantity}
// //                 </span>
// //               </div>
// //             ))
// //           )}

// //           <hr className="my-3" />

// //           <div className="flex justify-between font-semibold">
// //             <span>Total</span>
// //             <span>₹{total}</span>
// //           </div>

// //           <button
// //             onClick={() => handleContinue(user.address)}
// //             className="w-full mt-4 bg-pink-600 text-white py-2 rounded"
// //           >
// //             Continue to Payment
// //           </button>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default Checkout;



// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../utils/axios";
// import { useCart } from "../../context/CartContext";

// const Checkout = () => {
//   const navigate = useNavigate();

//   // ✅ GET CART FROM CONTEXT (IMPORTANT)
//   const { cart } = useCart();

//   const [user, setUser] = useState({});
//   const [showForm, setShowForm] = useState(false);
//   const [newAddress, setNewAddress] = useState("");

//   // ✅ PRICE CALCULATION (SAME AS CART PAGE)
//   const shippingCharge = 50;

//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * (item.quantity || 1),
//     0
//   );

//   const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;

//   const finalTotal = totalPrice - discount + shippingCharge;

//   // ✅ FETCH PROFILE
//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get("/auth/profile", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       setUser(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   // ✅ CONTINUE
//   const handleContinue = (selectedAddress) => {
//     if (!selectedAddress) {
//       alert("Please select or add address");
//       return;
//     }

//     navigate("/payment", {
//       state: {
//         address: selectedAddress,
//         cart,
//         total: finalTotal,
//       },
//     });
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">

//       {/* 🔹 STEP HEADER */}
//       <div className="flex justify-center gap-10 mb-8 text-sm">
//         <span className="text-pink-600 font-semibold">✔ Sign Up</span>
//         <span className="text-pink-600 font-semibold">✔ Address</span>
//         <span className="text-gray-400">Payment</span>
//       </div>

//       <h1 className="text-3xl font-semibold mb-4">Choose Address</h1>

//       <div className="flex gap-6">

//         {/* 🔸 LEFT */}
//         <div className="flex-1 grid grid-cols-2 gap-4">

//           {/* ➕ ADD ADDRESS */}
//           <div
//             onClick={() => setShowForm(true)}
//             className="border-2 border-dashed flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-gray-50"
//           >
//             <span className="text-3xl text-pink-600">+</span>
//             <p className="text-pink-600 mt-2">Add New Address</p>
//           </div>

//           {/* 📝 FORM */}
//           {showForm && (
//             <div className="bg-white p-4 rounded shadow col-span-2">
//               <h3 className="font-semibold mb-2">New Address</h3>

//               <input
//                 placeholder="Enter full address"
//                 value={newAddress}
//                 onChange={(e) => setNewAddress(e.target.value)}
//                 className="border p-2 w-full mb-3"
//               />

//               <button
//                 onClick={() => handleContinue(newAddress)}
//                 className="bg-pink-600 text-white px-4 py-2 rounded"
//               >
//                 Deliver Here
//               </button>
//             </div>
//           )}

//           {/* 🏠 PROFILE ADDRESS */}
//           <div className="bg-white p-4 rounded shadow">
//             <h3 className="font-semibold">
//               {user.name || "No Name"}
//             </h3>

//             <p className="text-gray-600 text-sm">
//               {user.address || "No address added"}
//             </p>

//             <p className="text-gray-500 text-sm">
//               {user.email}
//             </p>

//             <button
//               onClick={() => handleContinue(user.address)}
//               className="bg-pink-600 text-white px-3 py-1 rounded mt-3"
//             >
//               Deliver here
//             </button>
//           </div>

//         </div>

//         {/* 🔸 RIGHT - BAG */}
//         <div className="w-80 bg-white p-4 rounded shadow">

//           <h3 className="font-semibold mb-3">
//             Bag ({cart.length} items)
//           </h3>

//           {cart.length === 0 ? (
//             <p className="text-gray-500">Cart is empty</p>
//           ) : (
//             cart.map((item, index) => (
//               <div key={index} className="flex justify-between mb-2 text-sm">
//                 <span>
//                   {item.title} x {item.quantity}
//                 </span>
//                 <span>
//                   ₹{(item.price * item.quantity).toFixed(2)}
//                 </span>
//               </div>
//             ))
//           )}

//           <hr className="my-3" />

//           <div className="flex justify-between text-sm">
//             <span>Subtotal</span>
//             <span>₹{totalPrice.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between text-sm text-green-600">
//             <span>Discount</span>
//             <span>-₹{discount.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between text-sm">
//             <span>Shipping</span>
//             <span>₹{shippingCharge.toFixed(2)}</span>
//           </div>

//           <hr className="my-3" />

//           <div className="flex justify-between font-semibold">
//             <span>Total</span>
//             <span>₹{finalTotal.toFixed(2)}</span>
//           </div>

//           <button
//             onClick={() => handleContinue(user.address)}
//             className="w-full mt-4 bg-pink-600 text-white py-2 rounded"
//           >
//             Continue to Payment
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Checkout;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [user, setUser] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [newAddress, setNewAddress] = useState("");

  const shippingCharge = 50;
  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const discount = totalPrice > 1000 ? totalPrice * 0.1 : 0;
  const finalTotal = totalPrice - discount + shippingCharge;

  // Fetch logged-in user profile
  const fetchProfile = async () => {
    try {
      const res = await axios.get("/auth/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // Handle continue to payment
  const handleContinue = (selectedAddress) => {
    if (!selectedAddress || selectedAddress === "No address added") {
      toast.warning("Please select or add address");
      return;
    }

    if (cart.length === 0) {
      toast.warning("Cart is empty");
      return;
    }

    navigate("/payment", {
      state: {
        address: selectedAddress,
        cart,
        total: finalTotal,
      },
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Step Indicator */}
      <div className="flex justify-center gap-10 mb-8 text-sm">
        <span className="text-pink-600 font-semibold">✔ Sign Up</span>
        <span className="text-pink-600 font-semibold">✔ Address</span>
        <span className="text-gray-400">Payment</span>
      </div>

      <h1 className="text-3xl font-semibold mb-4">Choose Address</h1>

      <div className="flex gap-6">
        {/* LEFT: Address Selection */}
        <div className="flex-1 grid grid-cols-2 gap-4">

          {/* Add New Address */}
          <div
            onClick={() => setShowForm(true)}
            className="border-2 border-dashed flex flex-col items-center justify-center p-10 cursor-pointer hover:bg-gray-50 transition transform hover:scale-105"
          >
            <span className="text-3xl text-pink-600">+</span>
            <p className="text-pink-600 mt-2">Add New Address</p>
          </div>

          {/* New Address Form */}
          {showForm && (
            <div className="bg-white p-4 rounded shadow col-span-2">
              <h3 className="font-semibold mb-2">New Address</h3>
              <input
                placeholder="Enter full address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="border p-2 w-full mb-3"
              />
              <button
                onClick={() => handleContinue(newAddress)}
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition transform hover:scale-105"
              >
                Deliver Here
              </button>
            </div>
          )}

          {/* Profile Address */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{user.name || "No Name"}</h3>
            <p className="text-gray-600 text-sm">{user.address || "No address added"}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <button
              onClick={() => handleContinue(user.address)}
              className="bg-pink-600 text-white px-3 py-1 rounded mt-3 hover:bg-pink-700 transition transform hover:scale-105"
            >
              Deliver here
            </button>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="w-80 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Bag ({cart.length} items)</h3>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex justify-between mb-2 text-sm">
                <span>{item.title} x {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))
          )}

          <hr className="my-3" />

          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm text-green-600">
            <span>Discount</span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Shipping</span>
            <span>₹{shippingCharge.toFixed(2)}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{finalTotal.toFixed(2)}</span>
          </div>

          <button
            onClick={() => handleContinue(user.address)}
            className="w-full mt-4 bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition transform hover:scale-105"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;