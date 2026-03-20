// // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // // // // // // // const Home = () => {
// // // // // // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // // // // // //   const [categories, setCategories] = useState(["Electronics", "Fashion", "Books"]);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // // // // // //       try {
// // // // // // // // // // // // //         const res = await axios.get("/products");
// // // // // // // // // // // // //         setProducts(res.data.products);
// // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // //         console.log(err);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };
// // // // // // // // // // // // //     fetchProducts();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
// // // // // // // // // // // // //       <div className="flex space-x-4 mb-6">
// // // // // // // // // // // // //         {categories.map((cat) => (
// // // // // // // // // // // // //           <button
// // // // // // // // // // // // //             key={cat}
// // // // // // // // // // // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {cat}
// // // // // // // // // // // // //           </button>
// // // // // // // // // // // // //         ))}
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>
// // // // // // // // // // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // // // // // // //         {products.map((product) => (
// // // // // // // // // // // // //           <ProductCard key={product._id} product={product} />
// // // // // // // // // // // // //         ))}
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Home;


// // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // // // // // const Home = () => {
// // // // // // // // // // //   const [products, setProducts] = useState([]); // always initialize as array
// // // // // // // // // // //   const [categories, setCategories] = useState(["Electronics", "Fashion", "Books"]);
// // // // // // // // // // //   const [loading, setLoading] = useState(true); // loading state
// // // // // // // // // // //   const [error, setError] = useState(null); // error state

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // // // //            try {
// // // // // // // // // // //         const res = await axios.get("/products");
// // // // // // // // // // //         // Check if res.data is valid and has products array
// // // // // // // // // // //         if (res.data && Array.isArray(res.data.products)) {
// // // // // // // // // // //           setProducts(res.data.products);
// // // // // // // // // // //         } else if (Array.isArray(res.data)) {
// // // // // // // // // // //           // fallback if API returns array directly
// // // // // // // // // // //           setProducts(res.data);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           setProducts([]); // fallback empty
// // // // // // // // // // //         }
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         console.error("Failed to fetch products:", err);
// // // // // // // // // // //         setError("Failed to load products.");
// // // // // // // // // // //       } finally {
// // // // // // // // // // //         setLoading(false);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchProducts();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   if (loading) {
// // // // // // // // // // //     return <div className="text-center p-10">Loading products...</div>;
// // // // // // // // // // //   }

// // // // // // // // // // //   if (error) {
// // // // // // // // // // //     return <div className="text-center p-10 text-red-500">{error}</div>;
// // // // // // // // // // //   }

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
// // // // // // // // // // //       <div className="flex space-x-4 mb-6">
// // // // // // // // // // //         {categories.map((cat) => (
// // // // // // // // // // //           <button
// // // // // // // // // // //             key={cat}
// // // // // // // // // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // // // // // // //           >
// // // // // // // // // // //             {cat}
// // // // // // // // // // //           </button>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>
// // // // // // // // // // //       {products.length === 0 ? (
// // // // // // // // // // //         <p>No products available.</p>
// // // // // // // // // // //       ) : (
// // // // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // // // // //           {products.map((product) => (
// // // // // // // // // // //             <ProductCard key={product._id || product.id} product={product} />
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Home;


// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // // // const Home = () => {
// // // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // // //   const [error, setError] = useState(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchProducts = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const res = await axios.get("/products");
// // // // // // // // //         if (res.data && Array.isArray(res.data.products)) {
// // // // // // // // //           setProducts(res.data.products);
// // // // // // // // //         } else if (Array.isArray(res.data)) {
// // // // // // // // //           setProducts(res.data);
// // // // // // // // //         } else {
// // // // // // // // //           setProducts([]);
// // // // // // // // //         }
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error("Failed to fetch products:", err);
// // // // // // // // //         setError("Failed to load products.");
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchProducts();
// // // // // // // // //   }, []);

// // // // // // // // //   if (loading) return <div className="text-center p-10">Loading products...</div>;
// // // // // // // // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // // // // // // // //   return (
// // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
// // // // // // // // //       <div className="flex space-x-4 mb-6">
// // // // // // // // //         {categories.map((cat) => (
// // // // // // // // //           <button
// // // // // // // // //             key={cat}
// // // // // // // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // // // // //           >
// // // // // // // // //             {cat}
// // // // // // // // //           </button>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>
// // // // // // // // //       {products.length === 0 ? (
// // // // // // // // //         <p>No products available.</p>
// // // // // // // // //       ) : (
// // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // // //           {products.map((product) => (
// // // // // // // // //             <ProductCard key={product._id || product.id} product={product} />
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Home;





// // // // // // // // // src/pages/buyer/Home.jsx
// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // import axios from "../../utils/axios";
// // // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // // const Home = () => {
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [error, setError] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchProducts = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get("/products");
// // // // // // // //         if (res.data && Array.isArray(res.data.products)) {
// // // // // // // //           setProducts(res.data.products);
// // // // // // // //         } else if (Array.isArray(res.data)) {
// // // // // // // //           setProducts(res.data);
// // // // // // // //         } else {
// // // // // // // //           setProducts([]);
// // // // // // // //         }
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Failed to fetch products:", err);
// // // // // // // //         setError("Failed to load products.");
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchProducts();
// // // // // // // //   }, []);

// // // // // // // //   if (loading) return <div className="text-center p-10">Loading products...</div>;
// // // // // // // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // // // // // // //   return (
// // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
// // // // // // // //       <div className="flex space-x-4 mb-6">
// // // // // // // //         {categories.map((cat) => (
// // // // // // // //           <button
// // // // // // // //             key={cat}
// // // // // // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // // // //           >
// // // // // // // //             {cat}
// // // // // // // //           </button>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>
// // // // // // // //       {products.length === 0 ? (
// // // // // // // //         <p>No products available.</p>
// // // // // // // //       ) : (
// // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // //           {products.map((product) => (
// // // // // // // //             <div
// // // // // // // //               key={product._id}
// // // // // // // //               className="cursor-pointer"
// // // // // // // //               onClick={() => navigate(`/product/${product._id}`)}
// // // // // // // //             >
// // // // // // // //               <ProductCard product={product} />
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Home;






// // // // // // // // src/pages/buyer/Home.jsx
// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import axios from "../../utils/axios";
// // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // const Home = () => {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const [products, setProducts] = useState([]);
// // // // // // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [error, setError] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchProducts = async () => {
// // // // // // //       try {
// // // // // // //         const res = await axios.get("/products");
// // // // // // //         if (res.data && Array.isArray(res.data.products)) {
// // // // // // //           setProducts(res.data.products);
// // // // // // //         } else if (Array.isArray(res.data)) {
// // // // // // //           setProducts(res.data);
// // // // // // //         } else {
// // // // // // //           setProducts([]);
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Failed to fetch products:", err);
// // // // // // //         setError("Failed to load products.");
// // // // // // //       } finally {
// // // // // // //         setLoading(false);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchProducts();
// // // // // // //   }, []);

// // // // // // //   if (loading) return <div className="text-center p-10">Loading products...</div>;
// // // // // // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto p-4">
// // // // // // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>

// // // // // // //       <div className="flex space-x-4 mb-6">
// // // // // // //         {categories.map((cat) => (
// // // // // // //           <button
// // // // // // //             key={cat}
// // // // // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // // //           >
// // // // // // //             {cat}
// // // // // // //           </button>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>

// // // // // // //       {products.length === 0 ? (
// // // // // // //         <p>No products available.</p>
// // // // // // //       ) : (
// // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // //           {products.map((product) => (
// // // // // // //             <div
// // // // // // //               key={product._id}
// // // // // // //               className="cursor-pointer"
// // // // // // //               onClick={() => navigate(`/product/${product._id}`)}
// // // // // // //             >
// // // // // // //               <ProductCard product={product} />
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Home;



// // // // // // // src/pages/buyer/Home.jsx
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import axios from "../../utils/axios";
// // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // const Home = () => {
// // // // // //   const navigate = useNavigate();
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // // // // //   const [loading, setLoading] = useState(true);
// // // // // //   const [error, setError] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     const fetchProducts = async () => {
// // // // // //       try {
// // // // // //         const res = await axios.get("/products");

// // // // // //         if (res.data && Array.isArray(res.data.products)) {
// // // // // //           setProducts(res.data.products);
// // // // // //         } else if (Array.isArray(res.data)) {
// // // // // //           setProducts(res.data);
// // // // // //         } else {
// // // // // //           setProducts([]);
// // // // // //         }
// // // // // //       } catch (err) {
// // // // // //         console.error("Failed to fetch products:", err);
// // // // // //         setError("Failed to load products.");
// // // // // //       } finally {
// // // // // //         setLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchProducts();
// // // // // //   }, []);

// // // // // //   if (loading) return <div className="text-center p-10">Loading products...</div>;
// // // // // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
// // // // // //       <div className="flex space-x-4 mb-6">
// // // // // //         {categories.map((cat) => (
// // // // // //           <button
// // // // // //             key={cat}
// // // // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // // //           >
// // // // // //             {cat}
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>
// // // // // //       {products.length === 0 ? (
// // // // // //         <p>No products available.</p>
// // // // // //       ) : (
// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // //           {products.map((product) => (
// // // // // //             <div
// // // // // //               key={product._id}
// // // // // //               onClick={() => navigate(`/product/${product._id}`)}
// // // // // //             >
// // // // // //               <ProductCard product={product} />
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;



// // // // // // src/pages/buyer/Home.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import axios from "../../utils/axios";
// // // // // import ProductCard from "../../components/ProductCard";

// // // // // const Home = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   // ✅ SELLER REDIRECT FIX
// // // // //   useEffect(() => {
// // // // //     const user = JSON.parse(localStorage.getItem("user"));

// // // // //     if (user?.role === "seller") {
// // // // //       navigate("/seller/dashboard");
// // // // //     }
// // // // //   }, [navigate]);

// // // // //   // ✅ FETCH PRODUCTS
// // // // //   useEffect(() => {
// // // // //     const fetchProducts = async () => {
// // // // //       try {
// // // // //         const res = await axios.get("/products");

// // // // //         if (res.data && Array.isArray(res.data.products)) {
// // // // //           setProducts(res.data.products);
// // // // //         } else if (Array.isArray(res.data)) {
// // // // //           setProducts(res.data);
// // // // //         } else {
// // // // //           setProducts([]);
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error("Failed to fetch products:", err);
// // // // //         setError("Failed to load products.");
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchProducts();
// // // // //   }, []);

// // // // //   // ✅ LOADING
// // // // //   if (loading) return <div className="text-center p-10">Loading products...</div>;

// // // // //   // ✅ ERROR
// // // // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // // // //   return (
// // // // //     <div className="container mx-auto p-4">
// // // // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>

// // // // //       {/* Categories */}
// // // // //       <div className="flex space-x-4 mb-6">
// // // // //         {categories.map((cat) => (
// // // // //           <button
// // // // //             key={cat}
// // // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // // //           >
// // // // //             {cat}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Products */}
// // // // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>

// // // // //       {products.length === 0 ? (
// // // // //         <p>No products available.</p>
// // // // //       ) : (
// // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // //           {products.map((product) => (
// // // // //             <div
// // // // //               key={product._id}
// // // // //               className="cursor-pointer"
// // // // //               onClick={() => navigate(`/product/${product._id}`)}
// // // // //             >
// // // // //               <ProductCard product={product} />
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;


// // // // //after clone 2nd code

// // // // import React, { useEffect, useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import axios from "../../utils/axios";
// // // // import ProductCard from "../../components/ProductCard";
// // // // import BannerSlider from "../../components/BannerSlider";

// // // // const Home = () => {
// // // //   const navigate = useNavigate();
// // // //   const [products, setProducts] = useState([]);
// // // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const user = JSON.parse(localStorage.getItem("user"));
// // // //     if (user?.role === "seller") navigate("/seller/dashboard");
// // // //   }, [navigate]);

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         const res = await axios.get("/products");

// // // //         if (res.data?.products) setProducts(res.data.products);
// // // //         else if (Array.isArray(res.data)) setProducts(res.data);
// // // //         else setProducts([]);
// // // //       } catch {
// // // //         setError("Failed to load products.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchProducts();
// // // //   }, []);

// // // //   if (loading) return <div className="text-center p-10">Loading...</div>;
// // // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // // //   return (
// // // //     <div className="bg-gray-50 min-h-screen">

// // // //       {/* 🔥 BANNER */}
// // // //       <BannerSlider />

// // // //       {/* 🧩 CATEGORY */}
// // // //       <div className="container mx-auto px-4 py-6">
// // // //         <h2 className="text-xl font-bold mb-4">Shop by Category</h2>

// // // //         <div className="flex gap-4 flex-wrap">
// // // //           {categories.map((cat) => (
// // // //             <button
// // // //               key={cat}
// // // //               className="px-5 py-2 bg-white border rounded-full shadow hover:bg-pink-500 hover:text-white transition"
// // // //             >
// // // //               {cat}
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* 🛍 PRODUCTS */}
// // // //       <div className="container mx-auto px-4 pb-10">
// // // //         <h2 className="text-xl font-bold mb-6">Trending Products</h2>

// // // //         {products.length === 0 ? (
// // // //           <p>No products available.</p>
// // // //         ) : (
// // // //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // //             {products.map((product) => (
// // // //               <div
// // // //                 key={product._id}
// // // //                 className="cursor-pointer hover:scale-105 transition"
// // // //                 onClick={() => navigate(`/product/${product._id}`)}
// // // //               >
// // // //                 <ProductCard product={product} />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* 📦 FEATURE STRIP */}
// // // //       <div className="bg-white py-6 border-t grid grid-cols-2 md:grid-cols-4 text-center">
// // // //         <div>
// // // //           <p className="font-semibold">🚚 FREE SHIPPING</p>
// // // //           <small>Above ₹299</small>
// // // //         </div>
// // // //         <div>
// // // //           <p className="font-semibold">🔄 EASY RETURNS</p>
// // // //           <small>15 Days Policy</small>
// // // //         </div>
// // // //         <div>
// // // //           <p className="font-semibold">✔ AUTHENTIC</p>
// // // //           <small>100% Genuine</small>
// // // //         </div>
// // // //         <div>
// // // //           <p className="font-semibold">🏷 BRANDS</p>
// // // //           <small>1000+ Brands</small>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;



// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import axios from "../../utils/axios";
// // // import ProductCard from "../../components/ProductCard";
// // // import BannerSlider from "../../components/BannerSlider";

// // // const Home = () => {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const [products, setProducts] = useState([]);
// // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // 🔐 Redirect seller
// // //   useEffect(() => {
// // //     const user = JSON.parse(localStorage.getItem("user"));
// // //     if (user?.role === "seller") navigate("/seller/dashboard");
// // //   }, [navigate]);

// // //   // 🔍 FETCH PRODUCTS (WITH SEARCH SUPPORT)
// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         setLoading(true);

// // //         const query = new URLSearchParams(location.search).get("search");

// // //         const url = query
// // //           ? `/products?search=${query}`
// // //           : "/products";

// // //         const res = await axios.get(url);

// // //         let data = [];
// // //         if (res.data?.products) data = res.data.products;
// // //         else if (Array.isArray(res.data)) data = res.data;

// // //         // 🖼 FIX IMAGE URL HERE (NO UI CHANGE)
// // //         const BASE_URL = "https://ecommerce-mern-backend-1.onrender.com"; // change to render URL if deployed

// // //         const updatedProducts = data.map((p) => ({
// // //           ...p,
// // //           image: p.image?.startsWith("http")
// // //             ? p.image
// // //             : `${BASE_URL}/${p.image}`,
// // //         }));

// // //         setProducts(updatedProducts);

// // //       } catch {
// // //         setError("Failed to load products.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProducts();
// // //   }, [location.search]);

// // //   if (loading) return <div className="text-center p-10">Loading...</div>;
// // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // //   return (
// // //     <div className="bg-gray-50 min-h-screen">

// // //       {/* 🔥 BANNER */}
// // //       <BannerSlider />

// // //       {/* 🧩 CATEGORY */}
// // //       <div className="container mx-auto px-4 py-6">
// // //         <h2 className="text-xl font-bold mb-4">Shop by Category</h2>

// // //         <div className="flex gap-4 flex-wrap">
// // //           {categories.map((cat) => (
// // //             <button
// // //               key={cat}
// // //               className="px-5 py-2 bg-white border rounded-full shadow hover:bg-pink-500 hover:text-white transition"
// // //             >
// // //               {cat}
// // //             </button>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* 🛍 PRODUCTS */}
// // //       <div className="container mx-auto px-4 pb-10">
// // //         <h2 className="text-xl font-bold mb-6">Trending Products</h2>

// // //         {products.length === 0 ? (
// // //           <p>No products available.</p>
// // //         ) : (
// // //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //             {products.map((product) => (
// // //               <div
// // //                 key={product._id}
// // //                 className="cursor-pointer hover:scale-105 transition"
// // //                 onClick={() => navigate(`/product/${product._id}`)}
// // //               >
// // //                 <ProductCard product={product} />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* 📦 FEATURE STRIP */}
// // //       <div className="bg-white py-6 border-t grid grid-cols-2 md:grid-cols-4 text-center">
// // //         <div>
// // //           <p className="font-semibold">🚚 FREE SHIPPING</p>
// // //           <small>Above ₹299</small>
// // //         </div>
// // //         <div>
// // //           <p className="font-semibold">🔄 EASY RETURNS</p>
// // //           <small>15 Days Policy</small>
// // //         </div>
// // //         <div>
// // //           <p className="font-semibold">✔ AUTHENTIC</p>
// // //           <small>100% Genuine</small>
// // //         </div>
// // //         <div>
// // //           <p className="font-semibold">🏷 BRANDS</p>
// // //           <small>1000+ Brands</small>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Home;


// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import axios from "../../utils/axios";
// // import ProductCard from "../../components/ProductCard";
// // import BannerSlider from "../../components/BannerSlider";

// // const Home = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [products, setProducts] = useState([]);
// //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // 🔐 Redirect seller
// //   useEffect(() => {
// //     const user = JSON.parse(localStorage.getItem("user"));
// //     if (user?.role === "seller") navigate("/seller/dashboard");
// //   }, [navigate]);

// //   // 🔍 FETCH PRODUCTS (WITH SEARCH SUPPORT)
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         setLoading(true);

// //         const query = new URLSearchParams(location.search).get("search");
// //         const url = query ? `/products?search=${query}` : "/products";

// //         const res = await axios.get(url);

// //         let data = [];
// //         if (res.data?.products) data = res.data.products;
// //         else if (Array.isArray(res.data)) data = res.data;

// //         // 🖼 FIX IMAGE URL (using images array)
// //         const BASE_URL =
// //           import.meta.env.VITE_BACKEND_URL ||
// //           "https://ecommerce-mern-backend-1.onrender.com";

// //         const updatedProducts = data.map((p) => ({
// //           ...p,
// //           image:
// //             p.images?.[0]?.startsWith("http")
// //               ? p.images[0]
// //               : `${BASE_URL}/uploads/${p.images?.[0]}`,
// //         }));

// //         setProducts(updatedProducts);
// //         setError(null); // clear any previous error
// //       } catch (err) {
// //         console.error("Fetch products error:", err);
// //         setError(
// //           "Failed to load products. Check your backend URL or server status."
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, [location.search]);

// //   if (loading) return <div className="text-center p-10">Loading...</div>;
// //   if (error)
// //     return <div className="text-center p-10 text-red-500">{error}</div>;

// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       {/* 🔥 BANNER */}
// //       <BannerSlider />

// //       {/* 🧩 CATEGORY */}
// //       <div className="container mx-auto px-4 py-6">
// //         <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
// //         <div className="flex gap-4 flex-wrap">
// //           {categories.map((cat) => (
// //             <button
// //               key={cat}
// //               className="px-5 py-2 bg-white border rounded-full shadow hover:bg-pink-500 hover:text-white transition"
// //             >
// //               {cat}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* 🛍 PRODUCTS */}
// //       <div className="container mx-auto px-4 pb-10">
// //         <h2 className="text-xl font-bold mb-6">Trending Products</h2>
// //         {products.length === 0 ? (
// //           <p>No products available.</p>
// //         ) : (
// //           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //             {products.map((product) => (
// //               <div
// //                 key={product._id}
// //                 className="cursor-pointer hover:scale-105 transition"
// //                 onClick={() => navigate(`/product/${product._id}`)}
// //               >
// //                 <ProductCard product={product} />
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* 📦 FEATURE STRIP */}
// //       <div className="bg-white py-6 border-t grid grid-cols-2 md:grid-cols-4 text-center">
// //         <div>
// //           <p className="font-semibold">🚚 FREE SHIPPING</p>
// //           <small>Above ₹299</small>
// //         </div>
// //         <div>
// //           <p className="font-semibold">🔄 EASY RETURNS</p>
// //           <small>15 Days Policy</small>
// //         </div>
// //         <div>
// //           <p className="font-semibold">✔ AUTHENTIC</p>
// //           <small>100% Genuine</small>
// //         </div>
// //         <div>
// //           <p className="font-semibold">🏷 BRANDS</p>
// //           <small>1000+ Brands</small>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "../../utils/axios";
// import ProductCard from "../../components/ProductCard";
// import BannerSlider from "../../components/BannerSlider";

// const Home = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [products, setProducts] = useState([]);
//   const [categories] = useState(["Electronics", "Fashion", "Books"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Redirect seller
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user?.role === "seller") navigate("/seller/dashboard");
//   }, [navigate]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);

//         const query = new URLSearchParams(location.search).get("search");

//         const BASE_URL =
//           import.meta.env.VITE_BACKEND_URL ||
//           "https://ecommerce-mern-backend-1.onrender.com/api";

//         const url = query
//           ? `${BASE_URL}/products?search=${query}`
//           : `${BASE_URL}/products`;

//         const res = await axios.get(url);

//         let data = [];
//         if (res.data?.products) data = res.data.products;
//         else if (Array.isArray(res.data)) data = res.data;

//         const updatedProducts = data.map((p) => ({
//           ...p,
//           image:
//             p.images?.[0]?.startsWith("http")
//               ? p.images[0]
//               : `${BASE_URL}/uploads/${p.images[0]}`,
//         }));

//         setProducts(updatedProducts);
//         setError(null);
//       } catch (err) {
//         console.error("Fetch products error:", err);
//         setError(
//           "Failed to load products. Check your backend URL or server status."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [location.search]);

//   if (loading) return <div className="text-center p-10">Loading...</div>;
//   if (error)
//     return <div className="text-center p-10 text-red-500">{error}</div>;

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <BannerSlider />

//       {/* CATEGORY */}
//       <div className="container mx-auto px-4 py-6">
//         <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
//         <div className="flex gap-4 flex-wrap">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               className="px-5 py-2 bg-white border rounded-full shadow hover:bg-pink-500 hover:text-white transition"
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* PRODUCTS */}
//       <div className="container mx-auto px-4 pb-10">
//         <h2 className="text-xl font-bold mb-6">Trending Products</h2>
//         {products.length === 0 ? (
//           <p>No products available.</p>
//         ) : (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 className="cursor-pointer hover:scale-105 transition"
//                 onClick={() => navigate(`/product/${product._id}`)}
//               >
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* FEATURE STRIP */}
//       <div className="bg-white py-6 border-t grid grid-cols-2 md:grid-cols-4 text-center">
//         <div>
//           <p className="font-semibold">🚚 FREE SHIPPING</p>
//           <small>Above ₹299</small>
//         </div>
//         <div>
//           <p className="font-semibold">🔄 EASY RETURNS</p>
//           <small>15 Days Policy</small>
//         </div>
//         <div>
//           <p className="font-semibold">✔ AUTHENTIC</p>
//           <small>100% Genuine</small>
//         </div>
//         <div>
//           <p className="font-semibold">🏷 BRANDS</p>
//           <small>1000+ Brands</small>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../utils/axios";
import ProductCard from "../../components/ProductCard";
import BannerSlider from "../../components/BannerSlider";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [categories] = useState(["Electronics", "Fashion", "Books"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  // 🔐 Redirect seller
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.role === "seller") navigate("/seller/dashboard");
  }, [navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const query = new URLSearchParams(location.search).get("search");
        const url = query
          ? `${BASE_URL}/api/products?search=${query}`
          : `${BASE_URL}/api/products`;

        const res = await axios.get(url);

        let data = [];
        if (res.data?.products) data = res.data.products;
        else if (Array.isArray(res.data)) data = res.data;

        const updatedProducts = data.map((p) => ({
          ...p,
          image: p.images?.[0]?.startsWith("http")
            ? p.images[0]
            : `${BASE_URL}/uploads/${p.images?.[0]}`,
        }));

        setProducts(updatedProducts);
        setError(null);
      } catch (err) {
        console.error("Fetch products error:", err);
        setError(
          "Failed to load products. Check your backend URL or server status."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search, BASE_URL]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error)
    return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <BannerSlider />

      {/* CATEGORY */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
        <div className="flex gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 bg-white border rounded-full shadow hover:bg-pink-500 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="container mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-6">Trending Products</h2>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="cursor-pointer hover:scale-105 transition"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

{/* VIDEO BANNER */}
<div className="container mx-auto px-4 pb-12">
  <h2 className="text-xl font-bold mb-4 text-center">
    Experience Luxora
  </h2>

  <div className="w-full rounded-3xl overflow-hidden shadow-xl">
    <video
      className="w-full h-[350px] md:h-[450px] object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/dress.mp4" type="video/mp4" />
    </video>
  </div>
</div>



      {/* FEATURE STRIP */}
      <div className="bg-white py-6 border-t grid grid-cols-2 md:grid-cols-4 text-center">
        <div>
          <p className="font-semibold">🚚 FREE SHIPPING</p>
          <small>Above ₹299</small>
        </div>
        <div>
          <p className="font-semibold">🔄 EASY RETURNS</p>
          <small>15 Days Policy</small>
        </div>
        <div>
          <p className="font-semibold">✔ AUTHENTIC</p>
          <small>100% Genuine</small>
        </div>
        <div>
          <p className="font-semibold">🏷 BRANDS</p>
          <small>1000+ Brands</small>
        </div>
      </div>
    </div>
  );
};

export default Home;