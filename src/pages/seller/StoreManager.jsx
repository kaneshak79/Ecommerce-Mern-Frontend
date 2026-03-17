// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const StoreManager = () => {
//   const [store, setStore] = useState({ name: "", description: "" });
//   const [message, setMessage] = useState("");

//   const fetchStore = async () => {
//     try {
//       const res = await axios.get("/seller/store");
//       setStore(res.data.store);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchStore();
//   }, []);

//   const handleChange = (e) => setStore({ ...store, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put("/seller/store", store);
//       setMessage("Store updated successfully!");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 max-w-md">
//       <h1 className="text-3xl font-bold mb-4">Manage Store</h1>
//       {message && <p className="text-green-500 mb-2">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Store Name"
//           value={store.name}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Store Description"
//           value={store.description}
//           onChange={handleChange}
//           className="w-full border px-3 py-2 rounded"
//           required
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//           Update Store
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StoreManager;




// src/pages/seller/StoreManager.jsx
import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

const StoreManager = () => {
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const res = await axios.get("/seller/store", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setStoreName(res.data.storeName);
        setStoreDescription(res.data.storeDescription);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStore();
  }, []);

  const handleUpdate = async () => {
    try {
      await axios.put(
        "/seller/store",
        { storeName, storeDescription },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      alert("Store updated successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to update store");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Store Manager</h1>
      <input
        type="text"
        placeholder="Store Name"
        className="w-full border p-2 rounded mb-2"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
      />
      <textarea
        placeholder="Store Description"
        className="w-full border p-2 rounded mb-2"
        value={storeDescription}
        onChange={(e) => setStoreDescription(e.target.value)}
      />
      <button
        onClick={handleUpdate}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Update Store
      </button>
    </div>
  );
};

export default StoreManager;