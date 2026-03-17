// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const SellerProfile = () => {
//   const [profile, setProfile] = useState({ name: "", email: "" });
//   const [message, setMessage] = useState("");

//   const fetchProfile = async () => {
//     try {
//       const res = await axios.get("/auth/profile");
//       setProfile({ name: res.data.user.name, email: res.data.user.email });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   const handleChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put("/auth/profile", profile);
//       setMessage("Profile updated successfully!");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-md">
//       <h1 className="text-3xl font-bold mb-4">Profile</h1>
//       {message && <p className="text-green-500 mb-2">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
//         <input type="email" name="email" value={profile.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Update Profile</button>
//       </form>
//     </div>
//   );
// };

// export default SellerProfile;



// src/pages/seller/SellerProfile.jsx
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

const SellerProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/auth/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setName(res.data.name);
        setEmail(res.data.email);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(
        "/auth/profile",
        { name, email },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Update Profile</h1>
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2 rounded mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Update Profile
      </button>
    </div>
  );
};

export default SellerProfile;