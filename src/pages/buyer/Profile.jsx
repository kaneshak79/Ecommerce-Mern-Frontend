// // // import React, { useEffect, useState } from "react";
// // // import axios from "../../utils/axios";

// // // const Profile = () => {
// // //   const [user, setUser] = useState({});
// // //   const [form, setForm] = useState({ name: "", email: "", address: "" });
// // //   const [message, setMessage] = useState("");

// // //   const fetchProfile = async () => {
// // //     try {
// // //       const res = await axios.get("/auth/profile");
// // //       setUser(res.data.user);
// // //       setForm({ name: res.data.user.name, email: res.data.user.email, address: res.data.user.address });
// // //     } catch (err) {
// // //       console.log(err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchProfile();
// // //   }, []);

// // //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.put("/auth/profile", form);
// // //       setMessage("Profile updated successfully!");
// // //     } catch (err) {
// // //       console.log(err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-4 max-w-md">
// // //       <h1 className="text-3xl font-bold mb-4">My Profile</h1>
// // //       {message && <p className="text-green-500 mb-2">{message}</p>}
// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         <input
// // //           type="text"
// // //           name="name"
// // //           placeholder="Full Name"
// // //           value={form.name}
// // //           onChange={handleChange}
// // //           className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           required
// // //         />
// // //         <input
// // //           type="email"
// // //           name="email"
// // //           placeholder="Email"
// // //           value={form.email}
// // //           onChange={handleChange}
// // //           className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //           required
// // //         />
// // //         <input
// // //           type="text"
// // //           name="address"
// // //           placeholder="Address"
// // //           value={form.address}
// // //           onChange={handleChange}
// // //           className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         />
// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
// // //         >
// // //           Update Profile
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Profile;

// // //new ui

// // import React, { useEffect, useState } from "react";
// // import axios from "../../utils/axios";

// // const Profile = () => {
// //   const [user, setUser] = useState({});
// //   const [form, setForm] = useState({ name: "", email: "", address: "" });
// //   const [message, setMessage] = useState("");

// //   const fetchProfile = async () => {
// //     try {
// //       const res = await axios.get("/auth/profile");
// //       setUser(res.data.user);
// //       setForm({
// //         name: res.data.user.name,
// //         email: res.data.user.email,
// //         address: res.data.user.address,
// //       });
   
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProfile();
// //   }, []);

// //   const handleChange = (e) =>
// //     setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.put("/auth/profile", form);
// //       setMessage("Profile updated successfully!");
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#f3f3f3] p-6">
// //       <div className="max-w-7xl mx-auto flex gap-6">

// //         {/* LEFT SIDEBAR */}
// //         <div className="w-64 bg-white rounded-lg p-4 h-fit">
// //           <ul className="space-y-4 text-gray-600">
// //             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">My Profile</li>
// //             <li>My Coupons</li>
// //             <li>My Wallet</li>
// //             <li>My Orders</li>
// //             <li>My Wishlist</li>
// //             <li>My Saved Payment</li>
// //             <li>Log Out</li>
// //           </ul>
// //         </div>

// //         {/* RIGHT CONTENT */}
// //         <div className="flex-1">

// //           {/* PROFILE CARD */}
// //           <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
// //             <div className="flex items-center gap-6">

// //               {/* AVATAR */}
// //               <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl">
// //                 👤
// //               </div>

// //               {/* USER INFO */}
// //               <div>
// //                 <h2 className="text-xl font-semibold">{form.name}</h2>
// //                 <p className="text-gray-500">Email: {form.email}</p>
// //                 <p className="text-gray-500">Address: {form.address || "Not added"}</p>
// //                 {/* <p>Email: {user.email}</p>
// // <p>Address: {user.address || "Not added"}</p> */}
// //               </div>
// //             </div>
// //           </div>

// //           {/* EDIT FORM */}
// //           <div className="bg-white rounded-lg p-6 shadow-sm max-w-lg">
// //             <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>

// //             {message && (
// //               <p className="text-green-500 mb-3">{message}</p>
// //             )}

// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 value={form.name}
// //                 onChange={handleChange}
// //                 className="w-full border px-3 py-2 rounded"
// //                 required
// //               />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email"
// //                 value={form.email}
// //                 onChange={handleChange}
// //                 className="w-full border px-3 py-2 rounded"
// //                 required
// //               />

// //               <input
// //                 type="text"
// //                 name="address"
// //                 placeholder="Address"
// //                 value={form.address}
// //                 onChange={handleChange}
// //                 className="w-full border px-3 py-2 rounded"
// //               />

// //               <button
// //                 type="submit"
// //                 className="w-full bg-pink-600 text-white py-2 rounded"
// //               >
// //                 Update Profile
// //               </button>
// //             </form>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;



// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });
//   const [message, setMessage] = useState("");

  

// const fetchProfile = async () => {
//   try {
//     const res = await axios.get("/auth/profile", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });

//     console.log("PROFILE DATA:", res.data); // 🔍 debug

//     setUser(res.data);

//     setForm({
//       name: res.data.name || "",
//       email: res.data.email || "",
//       address: res.data.address || "",
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
// useEffect(()=>{
//     fetchProfile();
// },[]);


//   // ✅ Handle input change
//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   // ✅ Update profile
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put("/auth/profile", form, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       setMessage("Profile updated successfully!");
//       fetchProfile(); // 🔥 refresh data like real apps
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f3f3f3] p-6">
//       <div className="max-w-7xl mx-auto flex gap-6">

//         {/* 🔹 LEFT SIDEBAR */}
//         <div className="w-64 bg-white rounded-lg p-4 h-fit">
//           <ul className="space-y-4 text-gray-600">
//             <li className="text-pink-600 font-semibold border-l-4 border-pink-600 pl-2">
//               My Profile
//             </li>
//             <li>My Coupons</li>
//             <li>My Wallet</li>
//             <li>My Orders</li>
//             <li>My Wishlist</li>
//             <li>My Saved Payment</li>
//             <li>Log Out</li>
//           </ul>
//         </div>

//         {/* 🔹 RIGHT CONTENT */}
//         <div className="flex-1">

//           {/* 🔸 PROFILE CARD */}
//           <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
//             <div className="flex items-center gap-6">

//               {/* Avatar */}
//               <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-3xl">
//                 👤
//               </div>

//               {/* User Info */}
//               <div>
//                 {/* <h2 className="text-xl font-semibold">
//                   {user.name || "No Name"}
//                 </h2>
//                 <p className="text-gray-500">
//                   Email: {user.email || "Not available"}
//                 </p>
//                 <p className="text-gray-500">
//                   Address: {user.address || "Not added"}
//                 </p> */}
//                 <h2>{user.name || "No Name"}</h2>
// <p>Email: {user.email || "Not available"}</p>
// <p>Address: {user.address || "Not added"}</p>
//               </div>
//             </div>
//           </div>

//           {/* 🔸 EDIT FORM */}
//           <div className="bg-white rounded-lg p-6 shadow-sm max-w-lg">
//             <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>

//             {message && (
//               <p className="text-green-500 mb-3">{message}</p>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full border px-3 py-2 rounded"
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full border px-3 py-2 rounded"
//                 required
//               />

//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={form.address}
//                 onChange={handleChange}
//                 className="w-full border px-3 py-2 rounded"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-pink-600 text-white py-2 rounded"
//               >
//                 Update Profile
//               </button>

//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [message, setMessage] = useState("");

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(res.data);
      setForm({
        name: res.data.name || "",
        email: res.data.email || "",
        address: res.data.address || "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/auth/profile", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMessage("Profile updated successfully!");
      fetchProfile();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* 🔹 SIDEBAR - ONLY PROFILE */}
        <div className="w-64 bg-white rounded-2xl p-6 shadow-md animate-slide-left">
          <ul className="space-y-4 text-gray-600 font-medium">
            <li className="text-pink-600 font-bold border-l-4 border-pink-600 pl-3">
              My Profile
            </li>
          </ul>
        </div>

        {/* 🔹 MAIN CONTENT */}
        <div className="flex-1 flex flex-col gap-6 animate-slide-up">

          {/* PROFILE CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-6 transition transform hover:scale-[1.02] hover:shadow-2xl duration-300">
            <div className="w-28 h-28 rounded-full bg-pink-100 flex items-center justify-center text-4xl animate-bounce">
              👤
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.name || "No Name"}</h2>
              <p className="text-gray-600 mt-1">Email: {user.email || "Not available"}</p>
              <p className="text-gray-600 mt-1">Address: {user.address || "Not added"}</p>
            </div>
          </div>

          {/* EDIT FORM */}
          <div className="bg-white rounded-2xl p-6 shadow-lg transition transform hover:scale-[1.01] hover:shadow-xl duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Profile</h3>

            {message && (
              <p className="text-green-500 mb-3 animate-pulse">{message}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow shadow-sm"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow shadow-sm"
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow shadow-sm"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Update Profile
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;