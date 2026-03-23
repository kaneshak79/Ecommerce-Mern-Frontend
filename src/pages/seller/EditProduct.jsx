// // // // // // // // // // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // // // // // // // // // const EditProduct = () => {
// // // // // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // // // // //   const navigate = useNavigate();
// // // // // // // // // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // // // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // // // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // // // // // // // // //   const [image, setImage] = useState(null);

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     const fetchProduct = async () => {
// // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // //         const res = await axios.get(`/seller/products/${id}`, {
// // // // // // // // // // // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // // // // // // // //         });
// // // // // // // // // // // // // // //         setTitle(res.data.title);
// // // // // // // // // // // // // // //         setDescription(res.data.description);
// // // // // // // // // // // // // // //         setPrice(res.data.price);
// // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // //         console.error(err);
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // //     fetchProduct();
// // // // // // // // // // // // // // //   }, [id]);

// // // // // // // // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // // // // //     formData.append("title", title);
// // // // // // // // // // // // // // //     formData.append("description", description);
// // // // // // // // // // // // // // //     formData.append("price", price);
// // // // // // // // // // // // // // //     if (image) formData.append("image", image);

// // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // //       await axios.put(`/seller/products/${id}`, formData, {
// // // // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // //       alert("Product updated successfully");
// // // // // // // // // // // // // // //       navigate("/seller/products");
// // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // // // // //       alert("Failed to update product");
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
// // // // // // // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // // // //           placeholder="Title"
// // // // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // // // //           value={title}
// // // // // // // // // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // // // // // // // // //           required
// // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // //         <textarea
// // // // // // // // // // // // // // //           placeholder="Description"
// // // // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // // // //           value={description}
// // // // // // // // // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // // // // // // // // //           required
// // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // // // //           placeholder="Price"
// // // // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // // // //           value={price}
// // // // // // // // // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // // // // // // // // //           required
// // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // // //           type="file"
// // // // // // // // // // // // // // //           onChange={(e) => setImage(e.target.files[0])}
// // // // // // // // // // // // // // //         />
// // // // // // // // // // // // // // //         <button
// // // // // // // // // // // // // // //           type="submit"
// // // // // // // // // // // // // // //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // //           Update Product
// // // // // // // // // // // // // // //         </button>
// // // // // // // // // // // // // // //       </form>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default EditProduct;


// // // // // // // // // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // // // // // // // // const EditProduct = () => {
// // // // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // // // // // //   const [preview, setPreview] = useState("");

// // // // // // // // // // // // // //   // 🔥 Fetch product
// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const fetchProduct = async () => {
// // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // //         const res = await axios.get(`/seller/products/${id}`, {
// // // // // // // // // // // // // //           headers: {
// // // // // // // // // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //         });

// // // // // // // // // // // // // //         setTitle(res.data.title);
// // // // // // // // // // // // // //         setDescription(res.data.description);
// // // // // // // // // // // // // //         setPrice(res.data.price);

// // // // // // // // // // // // // //         // ✅ show existing image
// // // // // // // // // // // // // //         if (res.data.images?.[0]) {
// // // // // // // // // // // // // //           setPreview(
// // // // // // // // // // // // // //             `http://localhost:5000/${res.data.images[0].replace(/^\/+/, "")}`
// // // // // // // // // // // // // //           );
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // //         console.error(err);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     fetchProduct();
// // // // // // // // // // // // // //   }, [id]);

// // // // // // // // // // // // // //   // 🔥 Handle submit
// // // // // // // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // // // // // // //     e.preventDefault();

// // // // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // // // //     formData.append("title", title);
// // // // // // // // // // // // // //     formData.append("description", description);
// // // // // // // // // // // // // //     formData.append("price", Number(price));

// // // // // // // // // // // // // //     if (image) {
// // // // // // // // // // // // // //       formData.append("image", image);
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       await axios.put(`/seller/products/${id}`, formData, {
// // // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // // // // //         },
// // // // // // // // // // // // // //       });

// // // // // // // // // // // // // //       alert("Product updated successfully");

// // // // // // // // // // // // // //       // 🔥 force refresh
// // // // // // // // // // // // // //       navigate("/seller/products", { replace: true });
// // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // // // //       alert("Failed to update product");
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // // // // // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // // //           placeholder="Title"
// // // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // // //           value={title}
// // // // // // // // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // // // // // // // //           required
// // // // // // // // // // // // // //         />

// // // // // // // // // // // // // //         <textarea
// // // // // // // // // // // // // //           placeholder="Description"
// // // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // // //           value={description}
// // // // // // // // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // // // // // // // //           required
// // // // // // // // // // // // // //         />

// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // // //           placeholder="Price"
// // // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // // //           value={price}
// // // // // // // // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // // // // // // // //           required
// // // // // // // // // // // // // //         />

// // // // // // // // // // // // // //         {/* ✅ Image preview */}
// // // // // // // // // // // // // //         {preview && (
// // // // // // // // // // // // // //           <img
// // // // // // // // // // // // // //             src={preview}
// // // // // // // // // // // // // //             alt="preview"
// // // // // // // // // // // // // //             className="w-32 h-32 object-cover rounded"
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         )}

// // // // // // // // // // // // // //         <input
// // // // // // // // // // // // // //           type="file"
// // // // // // // // // // // // // //           onChange={(e) => {
// // // // // // // // // // // // // //             const file = e.target.files[0];
// // // // // // // // // // // // // //             setImage(file);

// // // // // // // // // // // // // //             // 🔥 preview new image
// // // // // // // // // // // // // //             if (file) {
// // // // // // // // // // // // // //               setPreview(URL.createObjectURL(file));
// // // // // // // // // // // // // //             }
// // // // // // // // // // // // // //           }}
// // // // // // // // // // // // // //         />

// // // // // // // // // // // // // //         <button
// // // // // // // // // // // // // //           type="submit"
// // // // // // // // // // // // // //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           Update Product
// // // // // // // // // // // // // //         </button>
// // // // // // // // // // // // // //       </form>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default EditProduct;

// // // // // // // // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // // // // // // // const EditProduct = () => {
// // // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // // // // //   const [preview, setPreview] = useState("");

// // // // // // // // // // // // //   const BASE_URL =
// // // // // // // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // // // // // // //   // ✅ Fetch product
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchProduct = async () => {
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const res = await axios.get(`/seller/products/${id}`, {
// // // // // // // // // // // // //           headers: {
// // // // // // // // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //         });

// // // // // // // // // // // // //         setTitle(res.data.title);
// // // // // // // // // // // // //         setDescription(res.data.description);
// // // // // // // // // // // // //         setPrice(res.data.price);

// // // // // // // // // // // // //         if (res.data.images?.[0]) {
// // // // // // // // // // // // //           setPreview(
// // // // // // // // // // // // //             `${BASE_URL}/${res.data.images[0].replace(/^\/+/, "")}`
// // // // // // // // // // // // //           );
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // //         console.error(err);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     fetchProduct();
// // // // // // // // // // // // //   }, [id, BASE_URL]);

// // // // // // // // // // // // //   // ✅ Submit update
// // // // // // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // // // // // //     e.preventDefault();

// // // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // // //     formData.append("title", title);
// // // // // // // // // // // // //     formData.append("description", description);
// // // // // // // // // // // // //     formData.append("price", Number(price));

// // // // // // // // // // // // //     if (image) {
// // // // // // // // // // // // //       formData.append("image", image);
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       await axios.put(`/products/${id}`, formData, {
// // // // // // // // // // // // //       // await axios.put(`/seller/products/${id}`, formData, {
// // // // // // // // // // // // //         headers: {
// // // // // // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // // // //         },
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       alert("Product updated successfully");

// // // // // // // // // // // // //       navigate("/seller/products");
// // // // // // // // // // // // //       // navigate("/seller/products", { replace: true });
// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       console.error(err);
// // // // // // // // // // // // //       alert("Failed to update product");
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // // // // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // //           value={title}
// // // // // // // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // // // // // // //           required
// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         <textarea
// // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // //           value={description}
// // // // // // // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // // // // // // //           required
// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           type="number"
// // // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // // //           value={price}
// // // // // // // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // // // // // // //           required
// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         {/* ✅ Image preview */}
// // // // // // // // // // // // //         {preview && (
// // // // // // // // // // // // //           <img
// // // // // // // // // // // // //             src={preview}
// // // // // // // // // // // // //             alt="preview"
// // // // // // // // // // // // //             className="w-32 h-32 object-cover rounded"
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         )}

// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           type="file"
// // // // // // // // // // // // //           onChange={(e) => {
// // // // // // // // // // // // //             const file = e.target.files[0];
// // // // // // // // // // // // //             setImage(file);

// // // // // // // // // // // // //             if (file) {
// // // // // // // // // // // // //               setPreview(URL.createObjectURL(file));
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //           }}
// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // // // // // // //           Update Product
// // // // // // // // // // // // //         </button>
// // // // // // // // // // // // //       </form>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default EditProduct;



// // // // // // // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // // // // // // const EditProduct = () => {
// // // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // // // //   const [preview, setPreview] = useState("");

// // // // // // // // // // // //   const BASE_URL =
// // // // // // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // // // // // //   // Fetch product details
// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const fetchProduct = async () => {
// // // // // // // // // // // //       try {
// // // // // // // // // // // //         const res = await axios.get(`${BASE_URL}/seller/products/${id}`, {
// // // // // // // // // // // //           headers: {
// // // // // // // // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // // //           },
// // // // // // // // // // // //         });

// // // // // // // // // // // //         setTitle(res.data.title);
// // // // // // // // // // // //         setDescription(res.data.description);
// // // // // // // // // // // //         setPrice(res.data.price);

// // // // // // // // // // // //         if (res.data.images?.[0]) {
// // // // // // // // // // // //           setPreview(`${BASE_URL}/${res.data.images[0].replace(/^\/+/, "")}`);
// // // // // // // // // // // //         }
// // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // //         console.error("Error fetching product:", err.response?.data || err);
// // // // // // // // // // // //         alert("Failed to load product details");
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     fetchProduct();
// // // // // // // // // // // //   }, [id, BASE_URL]);

// // // // // // // // // // // //   // Submit updated product
// // // // // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // // // // //     e.preventDefault();

// // // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // // //     formData.append("title", title);
// // // // // // // // // // // //     formData.append("description", description);
// // // // // // // // // // // //     formData.append("price", Number(price));

// // // // // // // // // // // //     if (image) {
// // // // // // // // // // // //       formData.append("image", image);
// // // // // // // // // // // //     }

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       await axios.put(`${BASE_URL}/seller/products/${id}`, formData, {
// // // // // // // // // // // //         headers: {
// // // // // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // // // // // // //         },
// // // // // // // // // // // //       });

// // // // // // // // // // // //       alert("Product updated successfully");
// // // // // // // // // // // //       navigate("/seller/products");
// // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // //       console.error("Error updating product:", err.response?.data || err);
// // // // // // // // // // // //       alert("Failed to update product");
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // // // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="text"
// // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // //           value={title}
// // // // // // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // // // // // //           required
// // // // // // // // // // // //         />

// // // // // // // // // // // //         <textarea
// // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // //           value={description}
// // // // // // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // // // // // //           required
// // // // // // // // // // // //         />

// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="number"
// // // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // // //           value={price}
// // // // // // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // // // // // //           required
// // // // // // // // // // // //         />

// // // // // // // // // // // //         {/* Image preview */}
// // // // // // // // // // // //         {preview && (
// // // // // // // // // // // //           <img
// // // // // // // // // // // //             src={preview}
// // // // // // // // // // // //             alt="preview"
// // // // // // // // // // // //             className="w-32 h-32 object-cover rounded"
// // // // // // // // // // // //           />
// // // // // // // // // // // //         )}

// // // // // // // // // // // //         <input
// // // // // // // // // // // //           type="file"
// // // // // // // // // // // //           onChange={(e) => {
// // // // // // // // // // // //             const file = e.target.files[0];
// // // // // // // // // // // //             setImage(file);
// // // // // // // // // // // //             if (file) setPreview(URL.createObjectURL(file));
// // // // // // // // // // // //           }}
// // // // // // // // // // // //         />

// // // // // // // // // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // // // // // //           Update Product
// // // // // // // // // // // //         </button>
// // // // // // // // // // // //       </form>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default EditProduct;



// // // // // // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // // // // // const EditProduct = () => {
// // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // // //   const [preview, setPreview] = useState("");

// // // // // // // // // // //   const BASE_URL =
// // // // // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // // // // //   // Fetch product details
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchProduct = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const res = await axios.get(`${BASE_URL}/seller/products/${id}`, {
// // // // // // // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // // // //         });

// // // // // // // // // // //         setTitle(res.data.title);
// // // // // // // // // // //         setDescription(res.data.description);
// // // // // // // // // // //         setPrice(res.data.price);

// // // // // // // // // // //         if (res.data.images?.[0]) {
// // // // // // // // // // //           setPreview(`${BASE_URL}/${res.data.images[0].replace(/^\/+/, "")}`);
// // // // // // // // // // //         }
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         console.error("Error fetching product:", err.response?.data || err);
// // // // // // // // // // //         alert("Failed to load product details");
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchProduct();
// // // // // // // // // // //   }, [id, BASE_URL]);

// // // // // // // // // // //   // Submit updated product
// // // // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // // // //     e.preventDefault();

// // // // // // // // // // //     const formData = new FormData();
// // // // // // // // // // //     formData.append("title", title);
// // // // // // // // // // //     formData.append("description", description);
// // // // // // // // // // //     formData.append("price", Number(price));
// // // // // // // // // // //     if (image) formData.append("image", image);

// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axios.put(`${BASE_URL}/seller/products/${id}`, formData, {
// // // // // // // // // // //         headers: {
// // // // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // // // // // //         },
// // // // // // // // // // //       });

// // // // // // // // // // //       alert("Product updated successfully");
// // // // // // // // // // //       // Pass updated product back to products page
// // // // // // // // // // //       navigate("/seller/products", { state: { updatedProduct: res.data } });
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error("Error updating product:", err.response?.data || err);
// // // // // // // // // // //       alert("Failed to update product");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // // // //         <input
// // // // // // // // // // //           type="text"
// // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // //           value={title}
// // // // // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // // // // //           required
// // // // // // // // // // //         />

// // // // // // // // // // //         <textarea
// // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // //           value={description}
// // // // // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // // // // //           required
// // // // // // // // // // //         />

// // // // // // // // // // //         <input
// // // // // // // // // // //           type="number"
// // // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // // //           value={price}
// // // // // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // // // // //           required
// // // // // // // // // // //         />

// // // // // // // // // // //         {/* Image preview */}
// // // // // // // // // // //         {preview && (
// // // // // // // // // // //           <img
// // // // // // // // // // //             src={preview}
// // // // // // // // // // //             alt="preview"
// // // // // // // // // // //             className="w-32 h-32 object-cover rounded"
// // // // // // // // // // //           />
// // // // // // // // // // //         )}

// // // // // // // // // // //         <input
// // // // // // // // // // //           type="file"
// // // // // // // // // // //           onChange={(e) => {
// // // // // // // // // // //             const file = e.target.files[0];
// // // // // // // // // // //             setImage(file);
// // // // // // // // // // //             if (file) setPreview(URL.createObjectURL(file));
// // // // // // // // // // //           }}
// // // // // // // // // // //         />

// // // // // // // // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // // // // //           Update Product
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </form>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default EditProduct;


// // // // // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // // // // const EditProduct = () => {
// // // // // // // // // //   const { id } = useParams();
// // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // // //   const [preview, setPreview] = useState("");

// // // // // // // // // //   const BASE_URL =
// // // // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // // // //   // Fetch single product
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchProduct = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         const res = await axios.get(`${BASE_URL}/seller/products/${id}`, {
// // // // // // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // // //         });

// // // // // // // // // //         setTitle(res.data.title);
// // // // // // // // // //         setDescription(res.data.description);
// // // // // // // // // //         setPrice(res.data.price);

// // // // // // // // // //         if (res.data.images?.[0]) {
// // // // // // // // // //           setPreview(`${BASE_URL}/${res.data.images[0].replace(/^\/+/, "")}`);
// // // // // // // // // //         }
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.error("Error fetching product:", err.response?.data || err);
// // // // // // // // // //         alert("Failed to load product details");
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //     fetchProduct();
// // // // // // // // // //   }, [id, BASE_URL]);

// // // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // // //     e.preventDefault();

// // // // // // // // // //     const formData = new FormData();
// // // // // // // // // //     formData.append("title", title);
// // // // // // // // // //     formData.append("description", description);
// // // // // // // // // //     formData.append("price", Number(price));
// // // // // // // // // //     if (image) formData.append("image", image);

// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.put(`${BASE_URL}/seller/products/${id}`, formData, {
// // // // // // // // // //         headers: {
// // // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // // // // //         },
// // // // // // // // // //       });

// // // // // // // // // //       alert("Product updated successfully");
// // // // // // // // // //       navigate("/seller/products", { state: { updatedProduct: res.data } });
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("Error updating product:", err.response?.data || err);
// // // // // // // // // //       alert("Failed to update product");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // // //         <input
// // // // // // // // // //           type="text"
// // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // //           value={title}
// // // // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // // // //           required
// // // // // // // // // //         />

// // // // // // // // // //         <textarea
// // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // //           value={description}
// // // // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // // // //           required
// // // // // // // // // //         />

// // // // // // // // // //         <input
// // // // // // // // // //           type="number"
// // // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // // //           value={price}
// // // // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // // // //           required
// // // // // // // // // //         />

// // // // // // // // // //         {preview && (
// // // // // // // // // //           <img
// // // // // // // // // //             src={preview}
// // // // // // // // // //             alt="preview"
// // // // // // // // // //             className="w-32 h-32 object-cover rounded"
// // // // // // // // // //           />
// // // // // // // // // //         )}

// // // // // // // // // //         <input
// // // // // // // // // //           type="file"
// // // // // // // // // //           onChange={(e) => {
// // // // // // // // // //             const file = e.target.files[0];
// // // // // // // // // //             setImage(file);
// // // // // // // // // //             if (file) setPreview(URL.createObjectURL(file));
// // // // // // // // // //           }}
// // // // // // // // // //         />

// // // // // // // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // // // //           Update Product
// // // // // // // // // //         </button>
// // // // // // // // // //       </form>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default EditProduct;

// // // // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // // // const EditProduct = () => {
// // // // // // // // //   const { id } = useParams(); // product ID
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // // //   const [image, setImage] = useState(null);
// // // // // // // // //   const [preview, setPreview] = useState("");

// // // // // // // // //   const BASE_URL =
// // // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // // //   // Fetch product details
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchProduct = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const res = await axios.get(`${BASE_URL}/seller/products/${id}`, {
// // // // // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // //         });

// // // // // // // // //         setTitle(res.data.title);
// // // // // // // // //         setDescription(res.data.description);
// // // // // // // // //         setPrice(res.data.price);

// // // // // // // // //         if (res.data.images?.[0]) {
// // // // // // // // //           setPreview(`${BASE_URL}/${res.data.images[0].replace(/^\/+/, "")}`);
// // // // // // // // //         }
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error("Error fetching product:", err.response?.data || err);
// // // // // // // // //         alert("Failed to load product details");
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //     fetchProduct();
// // // // // // // // //   }, [id, BASE_URL]);

// // // // // // // // //   // Submit updated product
// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();

// // // // // // // // //     const formData = new FormData();
// // // // // // // // //     formData.append("title", title);
// // // // // // // // //     formData.append("description", description);
// // // // // // // // //     formData.append("price", Number(price));

// // // // // // // // //     if (image) formData.append("image", image);

// // // // // // // // //     try {
// // // // // // // // //       await axios.put(`${BASE_URL}/seller/products/${id}`, formData, {
// // // // // // // // //         headers: {
// // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // // // //         },
// // // // // // // // //       });

// // // // // // // // //       alert("Product updated successfully");
// // // // // // // // //       navigate("/seller/products"); // go back to seller product list
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error("Error updating product:", err.response?.data || err);
// // // // // // // // //       alert("Failed to update product");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // // //         <input
// // // // // // // // //           type="text"
// // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // //           value={title}
// // // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // // //           placeholder="Product Title"
// // // // // // // // //           required
// // // // // // // // //         />

// // // // // // // // //         <textarea
// // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // //           value={description}
// // // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // // //           placeholder="Product Description"
// // // // // // // // //           required
// // // // // // // // //         />

// // // // // // // // //         <input
// // // // // // // // //           type="number"
// // // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // // //           value={price}
// // // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // // //           placeholder="Price"
// // // // // // // // //           required
// // // // // // // // //         />

// // // // // // // // //         {/* Image preview */}
// // // // // // // // //         {preview && (
// // // // // // // // //           <img
// // // // // // // // //             src={preview}
// // // // // // // // //             alt="preview"
// // // // // // // // //             className="w-32 h-32 object-cover rounded"
// // // // // // // // //           />
// // // // // // // // //         )}

// // // // // // // // //         <input
// // // // // // // // //           type="file"
// // // // // // // // //           onChange={(e) => {
// // // // // // // // //             const file = e.target.files[0];
// // // // // // // // //             setImage(file);
// // // // // // // // //             if (file) setPreview(URL.createObjectURL(file));
// // // // // // // // //           }}
// // // // // // // // //         />

// // // // // // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // // //           Update Product
// // // // // // // // //         </button>
// // // // // // // // //       </form>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default EditProduct;



// // // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // // import axios from "../../utils/axios";
// // // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // // const EditProduct = () => {
// // // // // // // //   const { id } = useParams(); // product ID
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const [title, setTitle] = useState("");
// // // // // // // //   const [description, setDescription] = useState("");
// // // // // // // //   const [price, setPrice] = useState("");
// // // // // // // //   const [image, setImage] = useState(null); // new image file
// // // // // // // //   const [preview, setPreview] = useState(""); // image preview

// // // // // // // //   const BASE_URL =
// // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // //   // 1️⃣ Fetch existing product details
// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchProduct = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get(`${BASE_URL}/seller/products/${id}`, {
// // // // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // //         });

// // // // // // // //         const product = res.data;

// // // // // // // //         setTitle(product.title || "");
// // // // // // // //         setDescription(product.description || "");
// // // // // // // //         setPrice(product.price || "");

// // // // // // // //         // Show existing image
// // // // // // // //         if (product.images?.[0]) {
// // // // // // // //           setPreview(`${BASE_URL}/${product.images[0].replace(/^\/+/, "")}`);
// // // // // // // //         }
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Error fetching product:", err.response?.data || err);
// // // // // // // //         alert("Failed to load product details");
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchProduct();
// // // // // // // //   }, [id, BASE_URL]);

// // // // // // // //   // 2️⃣ Submit updated product
// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();

// // // // // // // //     try {
// // // // // // // //       const formData = new FormData();
// // // // // // // //       formData.append("title", title);
// // // // // // // //       formData.append("description", description);
// // // // // // // //       formData.append("price", Number(price));

// // // // // // // //       // Only append new image if user selected one
// // // // // // // //       if (image) formData.append("image", image);

// // // // // // // //       const res = await axios.put(`${BASE_URL}/seller/products/${id}`, formData, {
// // // // // // // //         headers: {
// // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // // //         },
// // // // // // // //       });

// // // // // // // //       alert("Product updated successfully!");
// // // // // // // //       navigate("/seller/products");
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("Error updating product:", err.response?.data || err);
// // // // // // // //       alert(err.response?.data?.message || "Failed to update product");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // //           value={title}
// // // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // // //           placeholder="Product Title"
// // // // // // // //           required
// // // // // // // //         />

// // // // // // // //         <textarea
// // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // //           value={description}
// // // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // // //           placeholder="Product Description"
// // // // // // // //           required
// // // // // // // //         />

// // // // // // // //         <input
// // // // // // // //           type="number"
// // // // // // // //           className="w-full border p-2 rounded"
// // // // // // // //           value={price}
// // // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // // //           placeholder="Price"
// // // // // // // //           required
// // // // // // // //         />

// // // // // // // //         {/* Image preview */}
// // // // // // // //         {preview && (
// // // // // // // //           <img
// // // // // // // //             src={preview}
// // // // // // // //             alt="preview"
// // // // // // // //             className="w-32 h-32 object-cover rounded"
// // // // // // // //           />
// // // // // // // //         )}

// // // // // // // //         <input
// // // // // // // //           type="file"
// // // // // // // //           accept="image/*"
// // // // // // // //           onChange={(e) => {
// // // // // // // //             const file = e.target.files[0];
// // // // // // // //             setImage(file);
// // // // // // // //             if (file) setPreview(URL.createObjectURL(file));
// // // // // // // //           }}
// // // // // // // //         />

// // // // // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // //           Update Product
// // // // // // // //         </button>
// // // // // // // //       </form>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default EditProduct;


// // // // // // // // src/pages/seller/EditProduct.jsx
// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import axios from "../../utils/axios"; // your axios instance
// // // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // // const EditProduct = () => {
// // // // // // //   const { id } = useParams(); // product ID from URL
// // // // // // //   const navigate = useNavigate();

// // // // // // //   const [title, setTitle] = useState("");
// // // // // // //   const [description, setDescription] = useState("");
// // // // // // //   const [price, setPrice] = useState("");
// // // // // // //   const [image, setImage] = useState(null); // new file
// // // // // // //   const [preview, setPreview] = useState(""); // image preview

// // // // // // //   const BASE_URL = "http://localhost:5000"; // your backend URL

// // // // // // //   // Fetch product details on mount
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchProduct = async () => {
// // // // // // //       try {
// // // // // // //         const res = await axios.get(`${BASE_URL}/api/seller/products/${id}`, {
// // // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // //         });

// // // // // // //         const product = res.data;
// // // // // // //         setTitle(product.title || "");
// // // // // // //         setDescription(product.description || "");
// // // // // // //         setPrice(product.price || "");
// // // // // // //         if (product.images?.[0]) {
// // // // // // //           setPreview(`${BASE_URL}/${product.images[0].replace(/^\/+/, "")}`);
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Failed to load product:", err.response?.data || err);
// // // // // // //         alert("Failed to load product details");
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchProduct();
// // // // // // //   }, [id]);

// // // // // // //   // Handle form submit
// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     try {
// // // // // // //       const formData = new FormData();
// // // // // // //       formData.append("title", title);
// // // // // // //       formData.append("description", description);
// // // // // // //       formData.append("price", Number(price));

// // // // // // //       if (image) formData.append("image", image); // only if new image

// // // // // // //       await axios.put(`${BASE_URL}/api/seller/products/${id}`, formData, {
// // // // // // //         headers: {
// // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // //           "Content-Type": "multipart/form-data",
// // // // // // //         },
// // // // // // //       });

// // // // // // //       alert("Product updated successfully!");
// // // // // // //       navigate("/seller/products"); // back to product list
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Failed to update product:", err.response?.data || err);
// // // // // // //       alert(err.response?.data?.message || "Failed to update product");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto p-4">
// // // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // //         <input
// // // // // // //           type="text"
// // // // // // //           value={title}
// // // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // // //           placeholder="Product Title"
// // // // // // //           className="w-full border p-2 rounded"
// // // // // // //           required
// // // // // // //         />

// // // // // // //         <textarea
// // // // // // //           value={description}
// // // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // // //           placeholder="Product Description"
// // // // // // //           className="w-full border p-2 rounded"
// // // // // // //           required
// // // // // // //         />

// // // // // // //         <input
// // // // // // //           type="number"
// // // // // // //           value={price}
// // // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // // //           placeholder="Price"
// // // // // // //           className="w-full border p-2 rounded"
// // // // // // //           required
// // // // // // //         />

// // // // // // //         {preview && (
// // // // // // //           <img
// // // // // // //             src={preview}
// // // // // // //             alt="Preview"
// // // // // // //             className="w-32 h-32 object-cover rounded"
// // // // // // //           />
// // // // // // //         )}

// // // // // // //         <input
// // // // // // //           type="file"
// // // // // // //           accept="image/*"
// // // // // // //           onChange={(e) => {
// // // // // // //             const file = e.target.files[0];
// // // // // // //             setImage(file);
// // // // // // //             if (file) setPreview(URL.createObjectURL(file));
// // // // // // //           }}
// // // // // // //         />

// // // // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // //           Update Product
// // // // // // //         </button>
// // // // // // //       </form>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default EditProduct;


// // // // // // import React, { useState, useEffect } from "react";
// // // // // // import axios from "../../utils/axios"; // your axios instance
// // // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // // const EditProduct = () => {
// // // // // //   const { id } = useParams();
// // // // // //   const navigate = useNavigate();

// // // // // //   const [title, setTitle] = useState("");
// // // // // //   const [description, setDescription] = useState("");
// // // // // //   const [price, setPrice] = useState("");
// // // // // //   const [image, setImage] = useState(null);
// // // // // //   const [preview, setPreview] = useState("");

// // // // // //   const BASE_URL = "http://localhost:5000";

// // // // // //   // Fetch existing product
// // // // // //   useEffect(() => {
// // // // // //     const fetchProduct = async () => {
// // // // // //       try {
// // // // // //         const res = await axios.get(`${BASE_URL}/api/seller/products/${id}`, {
// // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // //         });
// // // // // //         const p = res.data;

// // // // // //         setTitle(p.title || "");
// // // // // //         setDescription(p.description || "");
// // // // // //         setPrice(p.price || "");
// // // // // //         if (p.images?.[0]) setPreview(`${BASE_URL}/${p.images[0].replace(/^\/+/, "")}`);
// // // // // //       } catch (err) {
// // // // // //         console.error(err);
// // // // // //         alert("Failed to fetch product");
// // // // // //       }
// // // // // //     };
// // // // // //     fetchProduct();
// // // // // //   }, [id]);

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();

// // // // // //     const formData = new FormData();
// // // // // //     if (title) formData.append("title", title);
// // // // // //     if (description) formData.append("description", description);
// // // // // //     if (price) formData.append("price", price);
// // // // // //     if (image) formData.append("image", image); // only append if new image

// // // // // //     try {
// // // // // //       const res = await axios.put(`${BASE_URL}/api/seller/products/${id}`, formData, {
// // // // // //         headers: {
// // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //           "Content-Type": "multipart/form-data",
// // // // // //         },
// // // // // //       });
// // // // // //       alert("Product updated successfully!");
// // // // // //       navigate("/seller/products");
// // // // // //     } catch (err) {
// // // // // //       console.error(err.response?.data || err);
// // // // // //       alert(err.response?.data?.message || "Failed to update product");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
// // // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Title"
// // // // // //           className="w-full border p-2 rounded"
// // // // // //           value={title}
// // // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // // //           required
// // // // // //         />
// // // // // //         <textarea
// // // // // //           placeholder="Description"
// // // // // //           className="w-full border p-2 rounded"
// // // // // //           value={description}
// // // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // // //           required
// // // // // //         />
// // // // // //         <input
// // // // // //           type="number"
// // // // // //           placeholder="Price"
// // // // // //           className="w-full border p-2 rounded"
// // // // // //           value={price}
// // // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // // //           required
// // // // // //         />

// // // // // //         {preview && <img src={preview} alt="preview" className="w-32 h-32 object-cover rounded" />}

// // // // // //         <input
// // // // // //           type="file"
// // // // // //           accept="image/*"
// // // // // //           onChange={(e) => {
// // // // // //             const file = e.target.files[0];
// // // // // //             setImage(file);
// // // // // //             if (file) setPreview(URL.createObjectURL(file));
// // // // // //           }}
// // // // // //         />

// // // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // //           Update Product
// // // // // //         </button>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default EditProduct;





// // // // // import React, { useState, useEffect } from "react";
// // // // // import axios from "../../utils/axios";
// // // // // import { useNavigate, useParams } from "react-router-dom";

// // // // // const EditProduct = () => {
// // // // //   const { id } = useParams();
// // // // //   const navigate = useNavigate();

// // // // //   const [title, setTitle] = useState("");
// // // // //   const [description, setDescription] = useState("");
// // // // //   const [price, setPrice] = useState("");
// // // // //   const [image, setImage] = useState(null);
// // // // //   const [preview, setPreview] = useState("");

// // // // //   const BASE_URL = "http://localhost:5000";

// // // // //   useEffect(() => {
// // // // //     const fetchProduct = async () => {
// // // // //       try {
// // // // //         const res = await axios.get(`${BASE_URL}/api/seller/products/${id}`, {
// // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // //         });
// // // // //         const p = res.data;

// // // // //         setTitle(p.title || "");
// // // // //         setDescription(p.description || "");
// // // // //         setPrice(p.price || "");
// // // // //         if (p.images?.[0]) setPreview(`${BASE_URL}/${p.images[0].replace(/^\/+/, "")}`);
// // // // //       } catch (err) {
// // // // //         console.error(err);
// // // // //         alert("Failed to fetch product");
// // // // //       }
// // // // //     };
// // // // //     fetchProduct();
// // // // //   }, [id]);

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     const formData = new FormData();
// // // // //     formData.append("title", title);
// // // // //     formData.append("description", description);
// // // // //     formData.append("price", Number(price)); // ensure number
// // // // //     if (image) formData.append("image", image); // append only if new image

// // // // //     try {
// // // // //       const res = await axios.put(`${BASE_URL}/api/products/${id}`, formData, {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //         },
// // // // //       });
// // // // //       alert("Product updated successfully!");
// // // // //       navigate("/seller/products");
// // // // //     } catch (err) {
// // // // //       console.error(err.response?.data || err);
// // // // //       alert(err.response?.data?.message || "Failed to update product");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mx-auto p-4">
// // // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
// // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Title"
// // // // //           className="w-full border p-2 rounded"
// // // // //           value={title}
// // // // //           onChange={(e) => setTitle(e.target.value)}
// // // // //           required
// // // // //         />
// // // // //         <textarea
// // // // //           placeholder="Description"
// // // // //           className="w-full border p-2 rounded"
// // // // //           value={description}
// // // // //           onChange={(e) => setDescription(e.target.value)}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="number"
// // // // //           placeholder="Price"
// // // // //           className="w-full border p-2 rounded"
// // // // //           value={price}
// // // // //           onChange={(e) => setPrice(e.target.value)}
// // // // //           required
// // // // //         />

// // // // //         {preview && (
// // // // //           <img
// // // // //             src={preview}
// // // // //             alt="preview"
// // // // //             className="w-32 h-32 object-cover rounded"
// // // // //           />
// // // // //         )}

// // // // //         <input
// // // // //           type="file"
// // // // //           accept="image/*"
// // // // //           onChange={(e) => {
// // // // //             const file = e.target.files[0];
// // // // //             setImage(file);
// // // // //             if (file) setPreview(URL.createObjectURL(file));
// // // // //           }}
// // // // //         />

// // // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // //           Update Product
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default EditProduct;


// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "../../utils/axios";
// // // // import { useNavigate, useParams } from "react-router-dom";

// // // // const EditProduct = () => {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();

// // // //   const [title, setTitle] = useState("");
// // // //   const [description, setDescription] = useState("");
// // // //   const [price, setPrice] = useState("");
// // // //   const [image, setImage] = useState(""); // will store new image path or URL
// // // //   const [preview, setPreview] = useState("");

// // // //   const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// // // //   // Fetch product
// // // //   useEffect(() => {
// // // //     const fetchProduct = async () => {
// // // //       try {
// // // //         const res = await axios.get(`${BASE_URL}/api/seller/products/${id}`, {
// // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // //         });
// // // //         const p = res.data;
// // // //         setTitle(p.title || "");
// // // //         setDescription(p.description || "");
// // // //         setPrice(p.price || "");
// // // //         if (p.images?.[0]) setPreview(`${BASE_URL}/${p.images[0].replace(/^\/+/, "")}`);
// // // //       } catch (err) {
// // // //         console.error("Fetch product error:", err.response || err);
// // // //         alert("Failed to fetch product");
// // // //       }
// // // //     };
// // // //     fetchProduct();
// // // //   }, [id]);

// // // //   // Handle submit
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     // Build payload
// // // //     const payload = {
// // // //       title,
// // // //       description,
// // // //       price: Number(price),
// // // //     };

// // // //     // Update image if user selected new
// // // //     if (image) {
// // // //       payload.images = [image]; // pass array of strings
// // // //     }

// // // //     try {
// // // //       const res = await axios.put(`${BASE_URL}/api/seller/products/${id}`, payload, {
// // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // //       });

// // // //       alert("Product updated successfully!");
// // // //       navigate("/seller/products", { state: { updatedProduct: res.data } });
// // // //     } catch (err) {
// // // //       console.error("Update product error:", err.response || err);
// // // //       alert(err.response?.data?.message || "Failed to update product");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>
// // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Title"
// // // //           className="w-full border p-2 rounded"
// // // //           value={title}
// // // //           onChange={(e) => setTitle(e.target.value)}
// // // //           required
// // // //         />
// // // //         <textarea
// // // //           placeholder="Description"
// // // //           className="w-full border p-2 rounded"
// // // //           value={description}
// // // //           onChange={(e) => setDescription(e.target.value)}
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="number"
// // // //           placeholder="Price"
// // // //           className="w-full border p-2 rounded"
// // // //           value={price}
// // // //           onChange={(e) => setPrice(e.target.value)}
// // // //           required
// // // //         />

// // // //         {preview && (
// // // //           <img
// // // //             src={preview}
// // // //             alt="preview"
// // // //             className="w-32 h-32 object-cover rounded"
// // // //           />
// // // //         )}

// // // //         {/* Instead of uploading, input new image URL */}
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Enter image URL"
// // // //           className="w-full border p-2 rounded"
// // // //           value={image}
// // // //           onChange={(e) => {
// // // //             setImage(e.target.value);
// // // //             setPreview(e.target.value); // live preview
// // // //           }}
// // // //         />

// // // //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // //           Update Product
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EditProduct;




// // // import React, { useState, useEffect } from "react";
// // // import axios from "../../utils/axios";
// // // import { useNavigate, useParams } from "react-router-dom";

// // // const EditProduct = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();

// // //   const [title, setTitle] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [price, setPrice] = useState("");
// // //   const [image, setImage] = useState(""); // base64 or path
// // //   const [preview, setPreview] = useState("");

// // //   const BASE_URL =
// // //     import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// // //   // Fetch product
// // //   useEffect(() => {
// // //     const fetchProduct = async () => {
// // //       try {
// // //         const res = await axios.get(`${BASE_URL}/api/seller/products/${id}`, {
// // //           headers: {
// // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //           },
// // //         });

// // //         const p = res.data;

// // //         setTitle(p.title || "");
// // //         setDescription(p.description || "");
// // //         setPrice(p.price || "");

// // //         const img = p.images?.[0];

// // //         if (img) {
// // //           if (img.startsWith("data:")) {
// // //             setPreview(img); // ✅ base64
// // //           } else {
// // //             setPreview(`${BASE_URL}/${img.replace(/^\/+/, "")}`); // ✅ backend
// // //           }
// // //         }
// // //       } catch (err) {
// // //         console.error("Fetch product error:", err.response || err);
// // //         alert("Failed to fetch product");
// // //       }
// // //     };

// // //     fetchProduct();
// // //   }, [id]);

// // //   // ✅ Handle file upload (base64)
// // //   const handleImageUpload = (e) => {
// // //     const file = e.target.files[0];

// // //     const reader = new FileReader();
// // //     reader.onloadend = () => {
// // //       setImage(reader.result); // base64
// // //       setPreview(reader.result);
// // //     };

// // //     if (file) reader.readAsDataURL(file);
// // //   };

// // //   // Submit
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const payload = {
// // //       title,
// // //       description,
// // //       price: Number(price),
// // //     };

// // //     if (image) {
// // //       payload.images = [image]; // ✅ base64 or path
// // //     }

// // //     try {
// // //       const res = await axios.put(
// // //         `${BASE_URL}/api/seller/products/${id}`,
// // //         payload,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //           },
// // //         }
// // //       );

// // //       alert("Product updated successfully!");

// // //       navigate("/seller/products", {
// // //         state: { updatedProduct: res.data },
// // //       });
// // //     } catch (err) {
// // //       console.error("Update product error:", err.response || err);
// // //       alert(err.response?.data?.message || "Failed to update product");
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         <input
// // //           type="text"
// // //           value={title}
// // //           onChange={(e) => setTitle(e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //           required
// // //         />

// // //         <textarea
// // //           value={description}
// // //           onChange={(e) => setDescription(e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //           required
// // //         />

// // //         <input
// // //           type="number"
// // //           value={price}
// // //           onChange={(e) => setPrice(e.target.value)}
// // //           className="w-full border p-2 rounded"
// // //           required
// // //         />

// // //         {/* Preview */}
// // //         {preview && (
// // //           <img
// // //             src={preview}
// // //             alt="preview"
// // //             className="w-32 h-32 object-cover rounded"
// // //           />
// // //         )}

// // //         {/* ✅ File upload */}
// // //         <input
// // //           type="file"
// // //           accept="image/*"
// // //           onChange={handleImageUpload}
// // //           className="w-full"
// // //         />

// // //         {/* Optional manual URL */}
// // //         <input
// // //           type="text"
// // //           placeholder="Or enter image URL (/uploads/...)"
// // //           className="w-full border p-2 rounded"
// // //           onChange={(e) => {
// // //             setImage(e.target.value);
// // //             setPreview(e.target.value.startsWith("data:")
// // //               ? e.target.value
// // //               : `${BASE_URL}/${e.target.value.replace(/^\/+/, "")}`);
// // //           }}
// // //         />

// // //         <button className="bg-blue-500 text-white px-4 py-2 rounded">
// // //           Update Product
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default EditProduct;

// // import React, { useState, useEffect } from "react";
// // import axios from "../../utils/axios";
// // import { useNavigate, useParams } from "react-router-dom";

// // const EditProduct = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [image, setImage] = useState(""); // base64
// //   const [preview, setPreview] = useState("");

// //   const BASE_URL =
// //     import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// //   // ✅ Fetch product
// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await axios.get(
// //           `${BASE_URL}/api/seller/products/${id}`,
// //           {
// //             headers: {
// //               Authorization: `Bearer ${localStorage.getItem("token")}`,
// //             },
// //           }
// //         );

// //         const p = res.data;

// //         setTitle(p.title || "");
// //         setDescription(p.description || "");
// //         setPrice(p.price || "");

// //         const img = p.images?.[0];

// //         if (img) {
// //           if (img.startsWith("data:")) {
// //             setPreview(img); // base64
// //           } else {
// //             setPreview(`${BASE_URL}/${img.replace(/^\/+/, "")}`);
// //           }
// //         }
// //       } catch (err) {
// //         console.error(err);
// //         alert("Failed to fetch product");
// //       }
// //     };

// //     fetchProduct();
// //   }, [id]);

// //   // ✅ File upload → base64
// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (!file) return;

// //     const reader = new FileReader();
// //     reader.onloadend = () => {
// //       setImage(reader.result);
// //       setPreview(reader.result);
// //     };

// //     reader.readAsDataURL(file);
// //   };

// //   // ✅ Submit update
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const payload = {
// //       title,
// //       description,
// //       price: Number(price),
// //     };

// //     if (image) {
// //       payload.images = [image]; // send base64
// //     }

// //     try {
// //       await axios.put(
// //         `${BASE_URL}/api/seller/products/${id}`,
// //         payload,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// //           },
// //         }
// //       );

// //       alert("Product updated successfully!");

// //       // ✅ IMPORTANT: send updated data manually
// //       navigate("/seller/products", {
// //         state: {
// //           updatedProduct: {
// //             _id: id,
// //             title,
// //             price,
// //             images: image ? [image] : undefined, // 🔥 key fix
// //           },
// //         },
// //       });
// //     } catch (err) {
// //       console.error(err);
// //       alert("Update failed");
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input
// //           type="text"
// //           value={title}
// //           onChange={(e) => setTitle(e.target.value)}
// //           className="w-full border p-2 rounded"
// //           required
// //         />

// //         <textarea
// //           value={description}
// //           onChange={(e) => setDescription(e.target.value)}
// //           className="w-full border p-2 rounded"
// //           required
// //         />

// //         <input
// //           type="number"
// //           value={price}
// //           onChange={(e) => setPrice(e.target.value)}
// //           className="w-full border p-2 rounded"
// //           required
// //         />

// //         {/* Preview */}
// //         {preview && (
// //           <img
// //             src={preview}
// //             alt="preview"
// //             className="w-32 h-32 object-cover rounded"
// //           />
// //         )}

// //         {/* File Upload */}
// //         <input
// //           type="file"
// //           accept="image/*"
// //           onChange={handleImageUpload}
// //           className="w-full"
// //         />

// //         <button className="bg-blue-500 text-white px-4 py-2 rounded">
// //           Update Product
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default EditProduct;


// import React, { useState, useEffect } from "react";
// import axios from "../../utils/axios";
// import { useNavigate, useParams } from "react-router-dom";

// const EditProduct = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     price: "",
//     image: "", // base64 for new image
//   });

//   const [preview, setPreview] = useState(""); // for showing old or new image

//   const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

//   // Fetch product data on mount
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/api/seller/products/${id}`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });

//         const p = res.data;
//         setForm({
//           title: p.title,
//           description: p.description,
//           price: p.price,
//           image: "", // start empty for new upload
//         });

//         const img = p.images?.[0];
//         if (img) {
//           setPreview(img.startsWith("data:") ? img : img); // base64 or URL
//         }
//       } catch (err) {
//         console.log(err.response?.data);
//         alert("Error fetching product");
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // Handle input change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Handle new image selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setForm((prev) => ({ ...prev, image: reader.result }));
//       setPreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   // Submit updated product
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       title: form.title,
//       description: form.description,
//       price: form.price,
//     };

//     if (form.image) {
//       payload.images = [form.image]; // only send new image if selected
//     }

//     try {
//       await axios.put(`${BASE_URL}/api/products/${id}`, payload, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });

//       alert("Product updated successfully");
//       navigate("/seller/products");
//     } catch (err) {
//       console.log(err.response?.data);
//       alert("Error updating product");
//     }
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           name="title"
//           value={form.title}
//           placeholder="Title"
//           onChange={handleChange}
//           className="w-full border p-2"
//           required
//         />

//         <textarea
//           name="description"
//           value={form.description}
//           placeholder="Description"
//           onChange={handleChange}
//           className="w-full border p-2"
//           required
//         />

//         <input
//           name="price"
//           type="number"
//           value={form.price}
//           placeholder="Price"
//           onChange={handleChange}
//           className="w-full border p-2"
//           required
//         />

//         {/* Image Preview */}
//         {preview && <img src={preview} className="h-32 object-cover" />}

//         {/* File Upload */}
//         <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />

//         <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
//           Update Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;

import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [preview, setPreview] = useState("");

  const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/seller/products/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        const p = res.data;
        setForm({
          title: p.title,
          description: p.description,
          price: p.price,
          image: "",
        });

        const img = p.images?.[0];
        if (img) setPreview(img.startsWith("data:") ? img : img);
      } catch (err) {
        console.log(err.response?.data);
        alert("Error fetching product");
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title: form.title, description: form.description, price: form.price };
    if (form.image) payload.images = [form.image];

    try {
      await axios.put(`${BASE_URL}/api/products/${id}`, payload, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Product updated successfully");
      navigate("/seller/products");
    } catch (err) {
      console.log(err.response?.data);
      alert("Error updating product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Edit Product</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1 font-medium">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="border border-gray-300 rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1 font-medium">Price</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Enter product price"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="w-48 h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1 font-medium">Upload New Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;