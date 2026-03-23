// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import axios from "../../utils/axios";

// // // // // // // // // const AddProduct = () => {
// // // // // // // // //   const [form, setForm] = useState({ title: "", description: "", price: "", image: "" });
// // // // // // // // //   const [message, setMessage] = useState("");

// // // // // // // // //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     try {
// // // // // // // // //       await axios.post("/products", form);
// // // // // // // // //       setMessage("Product added successfully!");
// // // // // // // // //       setForm({ title: "", description: "", price: "", image: "" });
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.log(err);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto p-4 max-w-md">
// // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Add Product</h1>
// // // // // // // // //       {message && <p className="text-green-500 mb-2">{message}</p>}
// // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // //         <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
// // // // // // // // //         <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
// // // // // // // // //         <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
// // // // // // // // //         <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
// // // // // // // // //         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Product</button>
// // // // // // // // //       </form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default AddProduct;


// // // // // // // // // src/pages/seller/AddProduct.jsx
// // // // // // // // import React, { useState } from "react";
// // // // // // // // import axios from "../../utils/axios";
// // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // const AddProduct = () => {
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // //   const [image, setImage] = useState(null);

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     const formData = new FormData();
// // // // // // // //     formData.append("title", title);
// // // // // // // //     formData.append("description", description);
// // // // // // // //     formData.append("price", price);
// // // // // // // //     formData.append("image", image);

// // // // // // // //     try {
// // // // // // // //       await axios.post("/seller/products", formData, {
// // // // // // // //         headers: {
// // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // // //         },
// // // // // // // //       });
// // // // // // // //       alert("Product added successfully");
// // // // // // // //       navigate("/seller/products");
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err);
// // // // // // // //       alert("Failed to add product");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // //       <h1 className="text-3xl font-bold mb-4">Add Product</h1>
// // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           placeholder="Title"
// // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // //           value={title}
// // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // //           required
// // // // // // // //         />
// // // // // // // //         <textarea
// // // // // // // //           placeholder="Description"
// // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // //           value={description}
// // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // //           required
// // // // // // // //         />
// // // // // // // //         <input
// // // // // // // //           type="number"
// // // // // // // //           placeholder="Price"
// // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // //           value={price}
// // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // //           required
// // // // // // // //         />
// // // // // // // //         <input
// // // // // // // //           type="file"
// // // // // // // //           onChange={(e) => setImage(e.target.files[0])}
// // // // // // // //           required
// // // // // // // //         />
// // // // // // // //         <button
// // // // // // // //           type="submit"
// // // // // // // //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // //         >
// // // // // // // //           Add Product
// // // // // // // //         </button>
// // // // // // // //       </form>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AddProduct;




// // // // // // // import React, { useState } from "react";
// // // // // // // import axios from "../../utils/axios";
// // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // const AddProduct = () => {
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const [form, setForm] = useState({
// // // // // // //     title: "",
// // // // // // //     description: "",
// // // // // // //     price: "",
// // // // // // //     image: "", // URL only
// // // // // // //   });

// // // // // // //   const handleChange = (e) => {
// // // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     try {
// // // // // // //       await axios.post("/products", form);

// // // // // // //       alert("Product Added Successfully");

// // // // // // //       navigate("/seller/products"); // or dashboard

// // // // // // //     } catch (err) {
// // // // // // //       console.log(err.response?.data);
// // // // // // //       alert("Error adding product");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="p-6 max-w-md mx-auto">
// // // // // // //       <h2 className="text-xl font-bold mb-4">Add Product</h2>

// // // // // // //       <form onSubmit={handleSubmit} className="space-y-3">
// // // // // // //         <input
// // // // // // //           name="title"
// // // // // // //           placeholder="Title"
// // // // // // //           onChange={handleChange}
// // // // // // //           className="w-full border p-2"
// // // // // // //         />

// // // // // // //         <input
// // // // // // //           name="description"
// // // // // // //           placeholder="Description"
// // // // // // //           onChange={handleChange}
// // // // // // //           className="w-full border p-2"
// // // // // // //         />

// // // // // // //         <input
// // // // // // //           name="price"
// // // // // // //           type="number"
// // // // // // //           placeholder="Price"
// // // // // // //           onChange={handleChange}
// // // // // // //           className="w-full border p-2"
// // // // // // //         />

// // // // // // //         <input
// // // // // // //           name="image"
// // // // // // //           placeholder="Image URL"
// // // // // // //           onChange={handleChange}
// // // // // // //           className="w-full border p-2"
// // // // // // //         />

// // // // // // //         <button className="bg-green-500 text-white px-4 py-2 rounded">
// // // // // // //           Add Product
// // // // // // //         </button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AddProduct;


// // // // // // import React, { useState } from "react";
// // // // // // import axios from "../../utils/axios";
// // // // // // import { useNavigate } from "react-router-dom";

// // // // // // const AddProduct = () => {
// // // // // //   const navigate = useNavigate();

// // // // // //   const [form, setForm] = useState({
// // // // // //     title: "",
// // // // // //     description: "",
// // // // // //     price: "",
// // // // // //     image: "",
// // // // // //   });

// // // // // //   const handleChange = (e) => {
// // // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();

// // // // // //     try {
// // // // // //       await axios.post("/products", form);
// // // // // //       alert("Product Added Successfully");
// // // // // //       navigate("/seller/products");
// // // // // //     } catch (err) {
// // // // // //       console.log(err.response?.data);
// // // // // //       alert("Error adding product");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
// // // // // //       <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
// // // // // //         Add New Product
// // // // // //       </h2>

// // // // // //       <form onSubmit={handleSubmit} className="space-y-5">
// // // // // //         {/* Title */}
// // // // // //         <div>
// // // // // //           <label className="block text-gray-700 mb-1">Title</label>
// // // // // //           <input
// // // // // //             name="title"
// // // // // //             placeholder="Product Title"
// // // // // //             onChange={handleChange}
// // // // // //             className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-400 outline-none transition"
// // // // // //             required
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Description */}
// // // // // //         <div>
// // // // // //           <label className="block text-gray-700 mb-1">Description</label>
// // // // // //           <textarea
// // // // // //             name="description"
// // // // // //             placeholder="Product Description"
// // // // // //             onChange={handleChange}
// // // // // //             className="w-full border border-gray-300 rounded-md p-3 h-24 focus:ring-2 focus:ring-green-400 outline-none transition"
// // // // // //             required
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Price */}
// // // // // //         <div>
// // // // // //           <label className="block text-gray-700 mb-1">Price ($)</label>
// // // // // //           <input
// // // // // //             name="price"
// // // // // //             type="number"
// // // // // //             placeholder="Product Price"
// // // // // //             onChange={handleChange}
// // // // // //             className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-400 outline-none transition"
// // // // // //             required
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Image URL */}
// // // // // //         <div>
// // // // // //           <label className="block text-gray-700 mb-1">Image URL</label>
// // // // // //           <input
// // // // // //             name="image"
// // // // // //             placeholder="https://example.com/image.jpg"
// // // // // //             onChange={handleChange}
// // // // // //             className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-400 outline-none transition"
// // // // // //             required
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Submit Button */}
// // // // // //         <button
// // // // // //           type="submit"
// // // // // //           className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition"
// // // // // //         >
// // // // // //           Add Product
// // // // // //         </button>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AddProduct;


// // // // import React, { useState } from "react";
// // // // import axios from "../../utils/axios";
// // // // import { useNavigate } from "react-router-dom";

// // // // const AddProduct = () => {
// // // //   const navigate = useNavigate();

// // // //   const [form, setForm] = useState({
// // // //     title: "",
// // // //     description: "",
// // // //     price: "",
// // // //     image: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       await axios.post("/products/create", form);
// // // //       alert("Product Added Successfully");
// // // //       navigate("/seller/products");
// // // //     } catch (err) {
// // // //       console.log(err.response?.data);
// // // //       alert("Error adding product");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
// // // //       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
// // // //         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
// // // //           Add New Product
// // // //         </h2>

// // // //         <form onSubmit={handleSubmit} className="space-y-5">
// // // //           {/* Title */}
// // // //           <div className="relative">
// // // //             <input
// // // //               name="title"
// // // //               placeholder=" "
// // // //               onChange={handleChange}
// // // //               className="peer w-full border-b-2 border-gray-300 p-2 text-gray-900 focus:border-green-500 outline-none transition"
// // // //               required
// // // //             />
// // // //             <label className="absolute left-2 top-0 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
// // // //               Product Title
// // // //             </label>
// // // //           </div>

// // // //           {/* Description */}
// // // //           <div className="relative">
// // // //             <textarea
// // // //               name="description"
// // // //               placeholder=" "
// // // //               onChange={handleChange}
// // // //               className="peer w-full border-b-2 border-gray-300 p-2 text-gray-900 focus:border-green-500 outline-none transition h-24 resize-none"
// // // //               required
// // // //             />
// // // //             <label className="absolute left-2 top-0 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
// // // //               Product Description
// // // //             </label>
// // // //           </div>

// // // //           {/* Price */}
// // // //           <div className="relative">
// // // //             <input
// // // //               name="price"
// // // //               type="number"
// // // //               placeholder=" "
// // // //               onChange={handleChange}
// // // //               className="peer w-full border-b-2 border-gray-300 p-2 text-gray-900 focus:border-green-500 outline-none transition"
// // // //               required
// // // //             />
// // // //             <label className="absolute left-2 top-0 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
// // // //               Price ($)
// // // //             </label>
// // // //           </div>

// // // //           {/* Image URL */}
// // // //           <div className="relative">
// // // //             <input
// // // //               name="image"
// // // //               placeholder=" "
// // // //               onChange={handleChange}
// // // //               className="peer w-full border-b-2 border-gray-300 p-2 text-gray-900 focus:border-green-500 outline-none transition"
// // // //               required
// // // //             />
// // // //             <label className="absolute left-2 top-0 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
// // // //               Image URL
// // // //             </label>
// // // //           </div>

// // // //           {/* Submit Button */}
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105"
// // // //           >
// // // //             Add Product
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AddProduct;


// // // import React, { useState } from "react";
// // // import axios from "../../utils/axios";
// // // import { useNavigate } from "react-router-dom";

// // // const AddProduct = () => {
// // //   const navigate = useNavigate();

// // //   const [form, setForm] = useState({
// // //     title: "",
// // //     description: "",
// // //     price: "",
// // //     image: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       await axios.post("/products/create", {
// // //         title: form.title,
// // //         description: form.description,
// // //         price: form.price,
// // //         images: [form.image], // ✅ FIXED LINE
// // //       });

// // //       alert("Product Added Successfully");
// // //       navigate("/seller/products");
// // //     } catch (err) {
// // //       console.log(err.response?.data);
// // //       alert("Error adding product");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
// // //       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
// // //         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
// // //           Add New Product
// // //         </h2>

// // //         <form onSubmit={handleSubmit} className="space-y-5">
// // //           {/* Title */}
// // //           <div className="relative">
// // //             <input
// // //               name="title"
// // //               placeholder=" "
// // //               onChange={handleChange}
// // //               className="peer w-full border-b-2 border-gray-300 p-2 text-gray-900 focus:border-green-500 outline-none transition"
// // //               required
// // //             />
// // //             <label className="absolute left-2 top-0 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
// // //               Product Title
// // //             </label>
// // //           </div>

// // //           {/* Description */}
// // //           <div className="relative">
// // //             <textarea
// // //               name="description"
// // //               placeholder=" "
// // //               onChange={handleChange}
// // //               className="peer w-full border-b-2 border-gray-300 p-2 text-gray-900 focus:border-green-500 outline-none transition h-24 resize-none"
// // //               required
// // //             />
// // //             <label className="absolute left-2 top-0 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
// // //               Product Description
// // //             </label>
// // //           </div>

// // //           {/* Price */}
// // //           <div className="relative">
// // //             <input
// // //               name="price"
// // //               type="number"
// // //               placeholder=" "
// // //               onChange={handleChange}
// // //               className="peer w-full border-b-2 border-gray-300 p-2 text-gray-900 focus:border-green-500 outline-none transition"
// // //               required
// // //             />
// // //             <label className="absolute left-2 top-0 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
// // //               Price ($)
// // //             </label>
// // //           </div>

// // //           {/* Image URL */}
// // //           <div className="relative">
// // //             <input
// // //               name="image"
// // //               placeholder=" "
// // //               onChange={handleChange}
// // //               className="peer w-full border-b-2 border-gray-300 p-2 text-gray-900 focus:border-green-500 outline-none transition"
// // //               required
// // //             />
// // //             <label className="absolute left-2 top-0 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base transition-all">
// // //               Image URL (/uploads/1.avif)
// // //             </label>
// // //           </div>

// // //           {/* Submit Button */}
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105"
// // //           >
// // //             Add Product
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddProduct;

// // import React, { useState } from "react";
// // import axios from "../../utils/axios";
// // import { useNavigate } from "react-router-dom";

// // const AddProduct = () => {
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     title: "",
// //     description: "",
// //     price: "",
// //     image: "",
// //   });

// //   const [preview, setPreview] = useState(null);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];

// //     if (file) {
// //       // preview only
// //       setPreview(URL.createObjectURL(file));

// //       // ❗ simulate backend path
// //       setForm({
// //         ...form,
// //         image: `/uploads/${file.name}`, // 👈 IMPORTANT
// //       });
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await axios.post("/products/create", {
// //         title: form.title,
// //         description: form.description,
// //         price: form.price,
// //         images: [form.image], // same backend format
// //       });

// //       alert("Product Added Successfully");
// //       navigate("/seller/products");
// //     } catch (err) {
// //       console.log(err.response?.data);
// //       alert("Error adding product");
// //     }
// //   };

// //   return (
// //     <div className="p-4 max-w-md mx-auto">
// //       <h2 className="text-2xl font-bold mb-4">Add Product</h2>

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input name="title" placeholder="Title" onChange={handleChange} className="w-full border p-2" required />
// //         <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full border p-2" required />
// //         <input name="price" type="number" placeholder="Price" onChange={handleChange} className="w-full border p-2" required />

// //         {/* File input */}
// //         <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />

// //         {/* Preview */}
// //         {preview && (
// //           <img src={preview} alt="preview" className="h-40 object-cover rounded" />
// //         )}

// //         <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
// //           Add Product
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddProduct;


// import React, { useState } from "react";
// import axios from "../../utils/axios";
// import { useNavigate } from "react-router-dom";

// const AddProduct = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ Convert file → base64
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setForm((prev) => ({
//         ...prev,
//         image: reader.result, // 🔥 base64 string
//       }));
//     };

//     if (file) reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("/products/create", {
//         title: form.title,
//         description: form.description,
//         price: form.price,
//         images: [form.image], // ✅ store base64
//       });

//       alert("Product Added Successfully");
//       navigate("/seller/products");
//     } catch (err) {
//       console.log(err.response?.data);
//       alert("Error adding product");
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Add Product</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="title" placeholder="Title" onChange={handleChange} className="w-full border p-2" required />
//         <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full border p-2" required />
//         <input name="price" type="number" placeholder="Price" onChange={handleChange} className="w-full border p-2" required />

//         {/* File Upload */}
//         <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" required />

//         <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;




import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/products/create", {
        title: form.title,
        description: form.description,
        price: form.price,
        images: [form.image],
      });

      alert("Product Added Successfully");
      navigate("/seller/products");
    } catch (err) {
      console.log(err.response?.data);
      alert("Error adding product");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-white to-green-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700 animate-pulse">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition resize-none"
            rows={4}
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            className="w-full border border-green-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
            required
          />

          <label className="block w-full">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-green-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200 transition cursor-pointer"
              required
            />
          </label>

          <button
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition transform hover:scale-105"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;