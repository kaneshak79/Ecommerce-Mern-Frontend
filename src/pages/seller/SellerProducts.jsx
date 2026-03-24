// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // import SellerProductCard from "../../components/SellerProductCard";

// // // // // // // // // // const SellerProducts = () => {
// // // // // // // // // //   const [products, setProducts] = useState([]);

// // // // // // // // // //   const fetchProducts = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.get("/seller/products");
// // // // // // // // // //       setProducts(res.data.products);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.log(err);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchProducts();
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">My Products</h1>
// // // // // // // // // //       {products.length === 0 ? (
// // // // // // // // // //         <p>No products added yet.</p>
// // // // // // // // // //       ) : (
// // // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // // // // // // // //           {products.map((product) => (
// // // // // // // // // //             <SellerProductCard key={product._id} product={product} refresh={fetchProducts} />
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default SellerProducts;





// // // // // // // // // // // src/pages/seller/SellerProducts.jsx
// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // // const SellerProducts = () => {
// // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // //   const fetchProducts = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.get("/seller/products", {
// // // // // // // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // // //       });
// // // // // // // // // //       setProducts(res.data);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchProducts();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const deleteProduct = async (id) => {
// // // // // // // // // //     if (!window.confirm("Are you sure you want to delete this product?")) return;
// // // // // // // // // //     try {
// // // // // // // // // //       await axios.delete(`/seller/products/${id}`, {
// // // // // // // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // // //       });
// // // // // // // // // //       fetchProducts(); // refresh list
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Your Products</h1>
// // // // // // // // // //       <button
// // // // // // // // // //         className="mb-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
// // // // // // // // // //         onClick={() => navigate("/seller/add-product")}
// // // // // // // // // //       >
// // // // // // // // // //         Add New Product
// // // // // // // // // //       </button>
// // // // // // // // // //       {products.length === 0 ? (
// // // // // // // // // //         <p>No products found.</p>
// // // // // // // // // //       ) : (
// // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // // // // // //           {products.map((p) => (
// // // // // // // // // //             <div key={p._id} className="border p-4 rounded shadow">
// // // // // // // // // //               <img
// // // // // // // // // //                 src={p.image?.startsWith("http") ? p.image : `https://ecommerce-mern-backend-1.onrender.com/uploads/${p.image}`}
// // // // // // // // // //                 alt={p.title}
// // // // // // // // // //                 className="h-40 w-full object-cover mb-2"
// // // // // // // // // //               />
// // // // // // // // // //               <h3 className="font-bold">{p.title}</h3>
// // // // // // // // // //               <p>${p.price}</p>
// // // // // // // // // //               <div className="flex space-x-2 mt-2">
// // // // // // // // // //                 <button
// // // // // // // // // //                   className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
// // // // // // // // // //                   onClick={() => navigate(`/seller/edit-product/${p._id}`)}
// // // // // // // // // //                 >
// // // // // // // // // //                   Edit
// // // // // // // // // //                 </button>
// // // // // // // // // //                 <button
// // // // // // // // // //                   className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
// // // // // // // // // //                   onClick={() => deleteProduct(p._id)}
// // // // // // // // // //                 >
// // // // // // // // // //                   Delete
// // // // // // // // // //                 </button>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default SellerProducts;


// // // // // // // // // // src/pages/seller/SellerProducts.jsx
// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // // // const SellerProducts = () => {
// // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const location = useLocation();

// // // // // // // // //   const BASE_URL =
// // // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // // //   const fetchProducts = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const res = await axios.get("/seller/products", {
// // // // // // // // //         headers: {
// // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // //         },
// // // // // // // // //       });
// // // // // // // // //       setProducts(res.data);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error(err);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // 🔥 FIX: refetch when page loads or comes back
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchProducts();
// // // // // // // // //   }, [location.pathname]);

// // // // // // // // //   const deleteProduct = async (id) => {
// // // // // // // // //     if (!window.confirm("Are you sure you want to delete this product?"))
// // // // // // // // //       return;

// // // // // // // // //     try {
// // // // // // // // //       await axios.delete(`/seller/products/${id}`, {
// // // // // // // // //         headers: {
// // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // //         },
// // // // // // // // //       });
// // // // // // // // //       fetchProducts();
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error(err);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Your Products</h1>

// // // // // // // // //       <button
// // // // // // // // //         className="mb-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
// // // // // // // // //         onClick={() => navigate("/seller/add-product")}
// // // // // // // // //       >
// // // // // // // // //         Add New Product
// // // // // // // // //       </button>

// // // // // // // // //       {products.length === 0 ? (
// // // // // // // // //         <p>No products found.</p>
// // // // // // // // //       ) : (
// // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // // // // //           {products.map((p) => (
// // // // // // // // //             <div key={p._id} className="border p-4 rounded shadow">
              
// // // // // // // // //               {/* ✅ FIXED IMAGE */}
// // // // // // // // //               <img
// // // // // // // // //                 src={`${BASE_URL}/${p.images?.[0]?.replace(/^\/+/, "")}?t=${Date.now()}`}
// // // // // // // // //                 alt={p.title}
// // // // // // // // //                 className="h-40 w-full object-cover mb-2"
// // // // // // // // //               />

// // // // // // // // //               <h3 className="font-bold">{p.title}</h3>
// // // // // // // // //               <p>₹{p.price}</p>

// // // // // // // // //               <div className="flex space-x-2 mt-2">
// // // // // // // // //                 {/* <button
// // // // // // // // //                   className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
// // // // // // // // //                   onClick={() =>
// // // // // // // // //                     navigate(`/seller/edit-product/${p._id}`)
// // // // // // // // //                   }
// // // // // // // // //                 >
// // // // // // // // //                   Edit
// // // // // // // // //                 </button> */}

// // // // // // // // //                 <button
// // // // // // // // //                   className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
// // // // // // // // //                   onClick={() => deleteProduct(p._id)}
// // // // // // // // //                 >
// // // // // // // // //                   Delete
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default SellerProducts;





// // // // // // // // // src/pages/seller/SellerProducts.jsx
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import axios from "../../utils/axios";
// // // // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // // // const SellerProducts = () => {
// // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const location = useLocation();

// // // // // // // //   const BASE_URL =
// // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // // // //   // Fetch products for the seller
// // // // // // // //   const fetchProducts = async () => {
// // // // // // // //     try {
// // // // // // // //       const res = await axios.get("/seller/products", {
// // // // // // // //         headers: {
// // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // //         },
// // // // // // // //       });
// // // // // // // //       setProducts(res.data);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("Error fetching products:", err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Refetch when page loads or when URL changes
// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchProducts();
// // // // // // // //   }, [location.pathname]);

// // // // // // // //   // Delete product
// // // // // // // //   const deleteProduct = async (id) => {
// // // // // // // //     if (!window.confirm("Are you sure you want to delete this product?")) return;

// // // // // // // //     try {
// // // // // // // //       await axios.delete(`/seller/products/${id}`, {
// // // // // // // //         headers: {
// // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // //         },
// // // // // // // //       });
// // // // // // // //       fetchProducts(); // refresh products after deletion
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("Error deleting product:", err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // //       <h1 className="text-3xl font-bold mb-4">Your Products</h1>

// // // // // // // //       <button
// // // // // // // //         className="mb-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
// // // // // // // //         onClick={() => navigate("/seller/add-product")}
// // // // // // // //       >
// // // // // // // //         Add New Product
// // // // // // // //       </button>

// // // // // // // //       {products.length === 0 ? (
// // // // // // // //         <p>No products found.</p>
// // // // // // // //       ) : (
// // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // // // //           {products.map((p) => (
// // // // // // // //             <div key={p._id} className="border p-4 rounded shadow">
// // // // // // // //               {/* Image */}
// // // // // // // //               <img
// // // // // // // //                 src={`${BASE_URL}/${p.images?.[0]?.replace(/^\/+/, "")}?t=${Date.now()}`}
// // // // // // // //                 alt={p.title}
// // // // // // // //                 className="h-40 w-full object-cover mb-2"
// // // // // // // //               />

// // // // // // // //               <h3 className="font-bold">{p.title}</h3>
// // // // // // // //               <p>₹{p.price}</p>

// // // // // // // //               <div className="flex space-x-2 mt-2">
// // // // // // // //                 {/* Edit button */}
// // // // // // // //                 <button
// // // // // // // //                   className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
// // // // // // // //                   onClick={() => navigate(`/seller/edit-product/${p._id}`)}
// // // // // // // //                 >
// // // // // // // //                   Edit
// // // // // // // //                 </button>

// // // // // // // //                 {/* Delete button */}
// // // // // // // //                 <button
// // // // // // // //                   className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
// // // // // // // //                   onClick={() => deleteProduct(p._id)}
// // // // // // // //                 >
// // // // // // // //                   Delete
// // // // // // // //                 </button>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SellerProducts;




// // // // // // // src/pages/seller/SellerProducts.jsx
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "../../utils/axios";
// // // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // // const SellerProducts = () => {
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const navigate = useNavigate();
// // // // // //   const location = useLocation();

// // // // // //   const BASE_URL =
// // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // // // //   // Fetch products for the seller
// // // // // //   const fetchProducts = async () => {
// // // // // //     try {
// // // // // //       const res = await axios.get("/seller/products", {
// // // // // //         headers: {
// // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //         },
// // // // // //       });
// // // // // //       setProducts(res.data);
// // // // // //     } catch (err) {
// // // // // //       console.error("Error fetching products:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   // Fetch products on mount
// // // // // //   useEffect(() => {
// // // // // //     fetchProducts();
// // // // // //   }, []);

// // // // // //   // Update products state if coming back from edit
// // // // // //   useEffect(() => {
// // // // // //     if (location.state?.updatedProduct) {
// // // // // //       setProducts((prev) =>
// // // // // //         prev.map((p) =>
// // // // // //           p._id === location.state.updatedProduct._id
// // // // // //             ? location.state.updatedProduct
// // // // // //             : p
// // // // // //         )
// // // // // //       );
// // // // // //       // Clear location state to prevent re-applying
// // // // // //       window.history.replaceState({}, document.title);
// // // // // //     }
// // // // // //   }, [location.state]);

// // // // // //   // Delete product
// // // // // //   const deleteProduct = async (id) => {
// // // // // //     if (!window.confirm("Are you sure you want to delete this product?")) return;

// // // // // //     try {
// // // // // //       await axios.delete(`/seller/products/${id}`, {
// // // // // //         headers: {
// // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //         },
// // // // // //       });
// // // // // //       setProducts((prev) => prev.filter((p) => p._id !== id));
// // // // // //     } catch (err) {
// // // // // //       console.error("Error deleting product:", err);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-3xl font-bold mb-6">Your Products</h1>

// // // // // //       <button
// // // // // //         className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // //         onClick={() => navigate("/seller/add-product")}
// // // // // //       >
// // // // // //         Add New Product
// // // // // //       </button>

// // // // // //       {products.length === 0 ? (
// // // // // //         <p className="text-gray-500">No products found.</p>
// // // // // //       ) : (
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // //           {products.map((p) => (
// // // // // //             <div key={p._id} className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
// // // // // //               {/* Product Image */}
// // // // // //               <img
// // // // // //                 src={`${BASE_URL}/${p.images?.[0]?.replace(/^\/+/, "")}?t=${Date.now()}`}
// // // // // //                 alt={p.title}
// // // // // //                 className="h-48 w-full object-cover mb-4 rounded"
// // // // // //               />

// // // // // //               <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
// // // // // //               <p className="text-gray-700 mb-2">₹{p.price}</p>

// // // // // //               <div className="mt-auto flex space-x-2">
// // // // // //                 {/* Edit button */}
// // // // // //                 <button
// // // // // //                   className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex-1"
// // // // // //                   onClick={() =>
// // // // // //                     navigate(`/seller/edit-product/${p._id}`, {
// // // // // //                       state: { fromSellerProducts: true },
// // // // // //                     })
// // // // // //                   }
// // // // // //                 >
// // // // // //                   Edit
// // // // // //                 </button>

// // // // // //                 {/* Delete button */}
// // // // // //                 <button
// // // // // //                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex-1"
// // // // // //                   onClick={() => deleteProduct(p._id)}
// // // // // //                 >
// // // // // //                   Delete
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SellerProducts;



// // // // // // src/pages/seller/SellerProducts.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "../../utils/axios";
// // // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // // const SellerProducts = () => {
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const navigate = useNavigate();
// // // // //   const location = useLocation();

// // // // //   const BASE_URL =
// // // // //     import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// // // // //   // Fetch all products for the logged-in seller
// // // // //   const fetchProducts = async () => {
// // // // //     try {
// // // // //       const res = await axios.get(`${BASE_URL}/api/seller/products`, {
// // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // //       });
// // // // //       console.log("Fetched products:", res.data);
// // // // //       setProducts(res.data);
// // // // //     } catch (err) {
// // // // //       console.error("Error fetching products:", err.response || err);
// // // // //       alert("Failed to fetch products");
// // // // //     }
// // // // //   };

// // // // //   // Fetch products on mount
// // // // //   useEffect(() => {
// // // // //     fetchProducts();
// // // // //   }, []);

// // // // //   // Update products state if coming back from edit
// // // // //   useEffect(() => {
// // // // //     if (location.state?.updatedProduct) {
// // // // //       setProducts((prev) =>
// // // // //         prev.map((p) =>
// // // // //           p._id === location.state.updatedProduct._id
// // // // //             ? location.state.updatedProduct
// // // // //             : p
// // // // //         )
// // // // //       );
// // // // //       window.history.replaceState({}, document.title);
// // // // //     }
// // // // //   }, [location.state]);

// // // // //   // Delete product
// // // // //   const deleteProduct = async (id) => {
// // // // //     if (!window.confirm("Are you sure you want to delete this product?")) return;

// // // // //     try {
// // // // //       await axios.delete(`${BASE_URL}/api/seller/products/${id}`, {
// // // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // //       });
// // // // //       setProducts((prev) => prev.filter((p) => p._id !== id));
// // // // //       alert("Product deleted successfully!");
// // // // //     } catch (err) {
// // // // //       console.error("Error deleting product:", err.response || err);
// // // // //       alert(err.response?.data?.message || "Failed to delete product");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="container mx-auto p-4">
// // // // //       <h1 className="text-3xl font-bold mb-6">Your Products</h1>

// // // // //       <button
// // // // //         className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // //         onClick={() => navigate("/seller/add-product")}
// // // // //       >
// // // // //         Add New Product
// // // // //       </button>

// // // // //       {products.length === 0 ? (
// // // // //         <p className="text-gray-500">No products found.</p>
// // // // //       ) : (
// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //           {products.map((p) => (
// // // // //             <div
// // // // //               key={p._id}
// // // // //               className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
// // // // //             >
// // // // //               {/* Product Image */}
// // // // //               <img
// // // // //                 src={`${BASE_URL}/${p.images?.[0]?.replace(/^\/+/, "")}?t=${Date.now()}`}
// // // // //                 alt={p.title}
// // // // //                 className="h-48 w-full object-cover mb-4 rounded"
// // // // //               />

// // // // //               <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
// // // // //               <p className="text-gray-700 mb-2">₹{p.price}</p>

// // // // //               <div className="mt-auto flex space-x-2">
// // // // //                 {/* Edit button */}
// // // // //                 <button
// // // // //                   className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex-1"
// // // // //                   onClick={() =>
// // // // //                     navigate(`/seller/edit-product/${p._id}`, {
// // // // //                       state: { fromSellerProducts: true },
// // // // //                     })
// // // // //                   }
// // // // //                 >
// // // // //                   Edit
// // // // //                 </button>

// // // // //                 {/* Delete button */}
// // // // //                 <button
// // // // //                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex-1"
// // // // //                   onClick={() => deleteProduct(p._id)}
// // // // //                 >
// // // // //                   Delete
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SellerProducts;


// // // // // src/pages/seller/SellerProducts.jsx
// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "../../utils/axios";
// // // // import { useNavigate, useLocation } from "react-router-dom";

// // // // const SellerProducts = () => {
// // // //   const [products, setProducts] = useState([]);
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// // // //   // Fetch all products for the logged-in seller
// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const res = await axios.get(`${BASE_URL}/api/seller/products`, {
// // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // //       });
// // // //       setProducts(res.data);
// // // //     } catch (err) {
// // // //       console.error("Error fetching products:", err.response || err);
// // // //       alert("Failed to fetch products");
// // // //     }
// // // //   };

// // // //   // Fetch products on mount
// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   // Update product in the list after editing
// // // //   useEffect(() => {
// // // //     if (location.state?.updatedProduct) {
// // // //       setProducts((prev) =>
// // // //         prev.map((p) =>
// // // //           p._id === location.state.updatedProduct._id
// // // //             ? location.state.updatedProduct
// // // //             : p
// // // //         )
// // // //       );
// // // //       window.history.replaceState({}, document.title);
// // // //     }
// // // //   }, [location.state]);

// // // //   // Delete product
// // // //   const deleteProduct = async (id) => {
// // // //     if (!window.confirm("Are you sure you want to delete this product?")) return;

// // // //     try {
// // // //       await axios.delete(`${BASE_URL}/api/seller/products/${id}`, {
// // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // //       });
// // // //       setProducts((prev) => prev.filter((p) => p._id !== id));
// // // //       alert("Product deleted successfully!");
// // // //     } catch (err) {
// // // //       console.error("Error deleting product:", err.response || err);
// // // //       alert(err.response?.data?.message || "Failed to delete product");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-3xl font-bold mb-6">Your Products</h1>

// // // //       <button
// // // //         className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // //         onClick={() => navigate("/seller/add-product")}
// // // //       >
// // // //         Add New Product
// // // //       </button>

// // // //       {products.length === 0 ? (
// // // //         <p className="text-gray-500">No products found.</p>
// // // //       ) : (
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //           {products.map((p) => (
// // // //             <div
// // // //               key={p._id}
// // // //               className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
// // // //             >
// // // //               <img
// // // //                 src={`${BASE_URL}/${p.images?.[0]?.replace(/^\/+/, "")}?t=${Date.now()}`}
// // // //                 alt={p.title}
// // // //                 className="h-48 w-full object-cover mb-4 rounded"
// // // //               />

// // // //               <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
// // // //               <p className="text-gray-700 mb-2">₹{p.price}</p>

// // // //               <div className="mt-auto flex space-x-2">
// // // //                 <button
// // // //                   className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex-1"
// // // //                   onClick={() =>
// // // //                     navigate(`/seller/edit-product/${p._id}`, {
// // // //                       state: { fromSellerProducts: true },
// // // //                     })
// // // //                   }
// // // //                 >
// // // //                   Edit
// // // //                 </button>

// // // //                 <button
// // // //                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex-1"
// // // //                   onClick={() => deleteProduct(p._id)}
// // // //                 >
// // // //                   Delete
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SellerProducts;


// // // // src/pages/seller/SellerProducts.jsx
// // // import React, { useEffect, useState } from "react";
// // // import axios from "../../utils/axios";
// // // import { useNavigate, useLocation } from "react-router-dom";

// // // const SellerProducts = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const BASE_URL =
// // //     import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// // //   // Fetch products
// // //   const fetchProducts = async () => {
// // //     try {
// // //       const res = await axios.get(`${BASE_URL}/api/seller/products`, {
// // //         headers: {
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //       });
// // //       setProducts(res.data);
// // //     } catch (err) {
// // //       console.error("Error fetching products:", err.response || err);
// // //       alert("Failed to fetch products");
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   // Handle updated product
// // //   useEffect(() => {
// // //     if (location.state?.updatedProduct) {
// // //       setProducts((prev) =>
// // //         prev.map((p) =>
// // //           p._id === location.state.updatedProduct._id
// // //             ? location.state.updatedProduct
// // //             : p
// // //         )
// // //       );
// // //       window.history.replaceState({}, document.title);
// // //     }
// // //   }, [location.state]);

// // //   // Delete product
// // //   const deleteProduct = async (id) => {
// // //     if (!window.confirm("Are you sure you want to delete this product?"))
// // //       return;

// // //     try {
// // //       await axios.delete(`${BASE_URL}/api/seller/products/${id}`, {
// // //         headers: {
// // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //         },
// // //       });

// // //       setProducts((prev) => prev.filter((p) => p._id !== id));
// // //       alert("Product deleted successfully!");
// // //     } catch (err) {
// // //       console.error("Error deleting product:", err.response || err);
// // //       alert(err.response?.data?.message || "Failed to delete product");
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-3xl font-bold mb-6">Your Products</h1>

// // //       <button
// // //         className="mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // //         onClick={() => navigate("/seller/add-product")}
// // //       >
// // //         Add New Product
// // //       </button>

// // //       {products.length === 0 ? (
// // //         <p className="text-gray-500">No products found.</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //           {products.map((p) => {
// // //             const imgPath = p.images?.[0];

// // //             return (
// // //               <div
// // //                 key={p._id}
// // //                 className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
// // //               >
// // //                 {/* ✅ IMAGE HANDLING */}
// // //                 <img
// // //                   src={
// // //                     imgPath?.startsWith("data:")
// // //                       ? imgPath // ✅ base64 uploaded image
// // //                       : `${BASE_URL}/${imgPath?.replace(/^\/+/, "")}` // ✅ backend image
// // //                   }
// // //                   alt={p.title}
// // //                   className="h-48 w-full object-cover mb-4 rounded"
// // //                 />

// // //                 <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
// // //                 <p className="text-gray-700 mb-2">₹{p.price}</p>

// // //                 <div className="mt-auto flex space-x-2">
// // //                   <button
// // //                     className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 flex-1"
// // //                     onClick={() =>
// // //                       navigate(`/seller/edit-product/${p._id}`, {
// // //                         state: { fromSellerProducts: true },
// // //                       })
// // //                     }
// // //                   >
// // //                     Edit
// // //                   </button>

// // //                   <button
// // //                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex-1"
// // //                     onClick={() => deleteProduct(p._id)}
// // //                   >
// // //                     Delete
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SellerProducts;



// // // src/pages/seller/SellerProducts.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "../../utils/axios";
// // import { useNavigate, useLocation } from "react-router-dom";

// // const SellerProducts = () => {
// //   const [products, setProducts] = useState([]);
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const BASE_URL =
// //     import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// //   // ✅ Fetch products
// //   const fetchProducts = async () => {
// //     try {
// //       const res = await axios.get(`${BASE_URL}/api/seller/products`, {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });
// //       setProducts(res.data);
// //     } catch (err) {
// //       console.error(err);
// //       alert("Failed to fetch products");
// //     }
// //   };

// //   // ✅ Always fetch on page load + after navigation
// //   useEffect(() => {
// //     fetchProducts();
// //   }, [location.pathname]); // 🔥 KEY FIX

// //   // Delete product
// //   const deleteProduct = async (id) => {
// //     if (!window.confirm("Are you sure?")) return;

// //     try {
// //       await axios.delete(`${BASE_URL}/api/seller/products/${id}`, {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });

// //       fetchProducts(); // refresh
// //     } catch (err) {
// //       console.error(err);
// //       alert("Delete failed");
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-6">Your Products</h1>

// //       <button
// //         className="mb-6 bg-blue-500 text-white px-4 py-2 rounded"
// //         onClick={() => navigate("/seller/add-product")}
// //       >
// //         Add New Product
// //       </button>

// //       {products.length === 0 ? (
// //         <p>No products found.</p>
// //       ) : (
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {products.map((p) => {
// //             const imgPath = p.images?.[0];

// //             return (
// //               <div key={p._id} className="border p-4 rounded shadow">
// //                 <img
// //                   src={
// //                     imgPath?.startsWith("data:")
// //                       ? imgPath
// //                       : `${BASE_URL}/${imgPath?.replace(/^\/+/, "")}`
// //                   }
// //                   alt={p.title}
// //                   className="h-48 w-full object-cover mb-4"
// //                 />

// //                 <h3 className="font-bold">{p.title}</h3>
// //                 <p>₹{p.price}</p>

// //                 <div className="flex gap-2 mt-2">
// //                   <button
// //                     className="bg-yellow-500 text-white px-2 py-1"
// //                     onClick={() =>
// //                       navigate(`/seller/edit-product/${p._id}`)
// //                     }
// //                   >
// //                     Edit
// //                   </button>

// //                   <button
// //                     className="bg-red-500 text-white px-2 py-1"
// //                     onClick={() => deleteProduct(p._id)}
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SellerProducts;



// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import { useNavigate, useLocation } from "react-router-dom";

// const SellerProducts = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const BASE_URL =
//     import.meta.env.VITE_BACKEND_URL || "https://ecommerce-mern-backend-1.onrender.com";

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/seller/products`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       setProducts(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to fetch products");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [location.pathname]);

//   const deleteProduct = async (id) => {
//     if (!window.confirm("Are you sure?")) return;

//     try {
//       await axios.delete(`${BASE_URL}/api/seller/products/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       fetchProducts();
//     } catch (err) {
//       console.error(err);
//       alert("Delete failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
//           Your Products
//         </h1>

//         <div className="flex justify-center mb-8">
//           <button
//             className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transform transition"
//             onClick={() => navigate("/seller/add-product")}
//           >
//             Add New Product
//           </button>
//         </div>

//         {products.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {products.map((p, index) => {
//               const imgPath = p.images?.[0];

//               return (
//                 <div
//                   key={p._id}
//                   className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
//                   style={{ animation: `fadeIn 0.5s ease ${(index + 1) * 0.1}s forwards`, opacity: 0 }}
//                 >
//                   <img
//                     src={
//                       imgPath?.startsWith("data:")
//                         ? imgPath
//                         : `${BASE_URL}/${imgPath?.replace(/^\/+/, "")}`
//                     }
//                     alt={p.title}
//                     className="h-48 w-full object-cover"
//                   />

//                   <div className="p-4">
//                     <h3 className="font-bold text-lg text-gray-800">{p.title}</h3>
//                     <p className="text-green-600 font-semibold mt-1">₹{p.price}</p>

//                     <div className="flex gap-3 mt-4">
//                       <button
//                         className="flex-1 bg-yellow-500 text-white py-2 rounded-lg shadow hover:bg-yellow-600 transform hover:scale-105 transition"
//                         onClick={() =>
//                           navigate(`/seller/edit-product/${p._id}`)
//                         }
//                       >
//                         Edit
//                       </button>

//                       <button
//                         className="flex-1 bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 transform hover:scale-105 transition"
//                         onClick={() => deleteProduct(p._id)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       <style>
//         {`
//           @keyframes fadeIn {
//             to { opacity: 1; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default SellerProducts;


import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useNavigate, useLocation } from "react-router-dom";

const SellerProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL || "https://ecommerce-mern-backend-1.onrender.com";

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/seller/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [location.pathname]);

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/seller/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Your Products
        </h1>

        <div className="flex justify-center mb-8">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transform transition"
            onClick={() => navigate("/seller/add-product")}
          >
            Add New Product
          </button>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((p, index) => {
              const imgPath = p.images?.[0];

              return (
                <div
                  key={p._id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                  style={{
                    animation: `fadeIn 0.5s ease ${(index + 1) * 0.1}s forwards`,
                    opacity: 0,
                  }}
                  onClick={(e) => {
                    // Prevent card click when clicking Edit/Delete buttons
                    if (e.target.tagName !== "BUTTON") {
                      navigate(`/product/${p._id}`);
                    }
                  }}
                >
                  <img
                    src={
                      imgPath?.startsWith("data:")
                        ? imgPath
                        : `${BASE_URL}/${imgPath?.replace(/^\/+/, "")}`
                    }
                    alt={p.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800">{p.title}</h3>
                    <p className="text-green-600 font-semibold mt-1">₹{p.price}</p>

                    <div className="flex gap-3 mt-4">
                      <button
                        className="flex-1 bg-yellow-500 text-white py-2 rounded-lg shadow hover:bg-yellow-600 transform hover:scale-105 transition"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click
                          navigate(`/seller/edit-product/${p._id}`);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="flex-1 bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 transform hover:scale-105 transition"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click
                          deleteProduct(p._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default SellerProducts;