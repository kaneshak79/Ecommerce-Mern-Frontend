// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import axios from "../../utils/axios";
// // // // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // // // const Home = () => {
// // // // // // // //   const [products, setProducts] = useState([]);
// // // // // // // //   const [categories, setCategories] = useState(["Electronics", "Fashion", "Books"]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchProducts = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get("/products");
// // // // // // // //         setProducts(res.data.products);
// // // // // // // //       } catch (err) {
// // // // // // // //         console.log(err);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     fetchProducts();
// // // // // // // //   }, []);

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
// // // // // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // //         {products.map((product) => (
// // // // // // // //           <ProductCard key={product._id} product={product} />
// // // // // // // //         ))}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Home;


// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "../../utils/axios";
// // // // // // import ProductCard from "../../components/ProductCard";

// // // // // // const Home = () => {
// // // // // //   const [products, setProducts] = useState([]); // always initialize as array
// // // // // //   const [categories, setCategories] = useState(["Electronics", "Fashion", "Books"]);
// // // // // //   const [loading, setLoading] = useState(true); // loading state
// // // // // //   const [error, setError] = useState(null); // error state

// // // // // //   useEffect(() => {
// // // // // //     const fetchProducts = async () => {
// // // // // //            try {
// // // // // //         const res = await axios.get("/products");
// // // // // //         // Check if res.data is valid and has products array
// // // // // //         if (res.data && Array.isArray(res.data.products)) {
// // // // // //           setProducts(res.data.products);
// // // // // //         } else if (Array.isArray(res.data)) {
// // // // // //           // fallback if API returns array directly
// // // // // //           setProducts(res.data);
// // // // // //         } else {
// // // // // //           setProducts([]); // fallback empty
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

// // // // // //   if (loading) {
// // // // // //     return <div className="text-center p-10">Loading products...</div>;
// // // // // //   }

// // // // // //   if (error) {
// // // // // //     return <div className="text-center p-10 text-red-500">{error}</div>;
// // // // // //   }

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
// // // // // //             <ProductCard key={product._id || product.id} product={product} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;


// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "../../utils/axios";
// // // // import ProductCard from "../../components/ProductCard";

// // // // const Home = () => {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     const fetchProducts = async () => {
// // // //       try {
// // // //         const res = await axios.get("/products");
// // // //         if (res.data && Array.isArray(res.data.products)) {
// // // //           setProducts(res.data.products);
// // // //         } else if (Array.isArray(res.data)) {
// // // //           setProducts(res.data);
// // // //         } else {
// // // //           setProducts([]);
// // // //         }
// // // //       } catch (err) {
// // // //         console.error("Failed to fetch products:", err);
// // // //         setError("Failed to load products.");
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchProducts();
// // // //   }, []);

// // // //   if (loading) return <div className="text-center p-10">Loading products...</div>;
// // // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
// // // //       <div className="flex space-x-4 mb-6">
// // // //         {categories.map((cat) => (
// // // //           <button
// // // //             key={cat}
// // // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // // //           >
// // // //             {cat}
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>
// // // //       {products.length === 0 ? (
// // // //         <p>No products available.</p>
// // // //       ) : (
// // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // //           {products.map((product) => (
// // // //             <ProductCard key={product._id || product.id} product={product} />
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;





// // // // src/pages/buyer/Home.jsx
// // // import React, { useEffect, useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "../../utils/axios";
// // // import ProductCard from "../../components/ProductCard";

// // // const Home = () => {
// // //   const navigate = useNavigate();
// // //   const [products, setProducts] = useState([]);
// // //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     const fetchProducts = async () => {
// // //       try {
// // //         const res = await axios.get("/products");
// // //         if (res.data && Array.isArray(res.data.products)) {
// // //           setProducts(res.data.products);
// // //         } else if (Array.isArray(res.data)) {
// // //           setProducts(res.data);
// // //         } else {
// // //           setProducts([]);
// // //         }
// // //       } catch (err) {
// // //         console.error("Failed to fetch products:", err);
// // //         setError("Failed to load products.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchProducts();
// // //   }, []);

// // //   if (loading) return <div className="text-center p-10">Loading products...</div>;
// // //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
// // //       <div className="flex space-x-4 mb-6">
// // //         {categories.map((cat) => (
// // //           <button
// // //             key={cat}
// // //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// // //           >
// // //             {cat}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       <h2 className="text-2xl font-semibold mb-4">Products</h2>
// // //       {products.length === 0 ? (
// // //         <p>No products available.</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //           {products.map((product) => (
// // //             <div
// // //               key={product._id}
// // //               className="cursor-pointer"
// // //               onClick={() => navigate(`/product/${product._id}`)}
// // //             >
// // //               <ProductCard product={product} />
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Home;






// // // src/pages/buyer/Home.jsx
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "../../utils/axios";
// // import ProductCard from "../../components/ProductCard";

// // const Home = () => {
// //   const navigate = useNavigate();
// //   const [products, setProducts] = useState([]);
// //   const [categories] = useState(["Electronics", "Fashion", "Books"]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const res = await axios.get("/products");
// //         if (res.data && Array.isArray(res.data.products)) {
// //           setProducts(res.data.products);
// //         } else if (Array.isArray(res.data)) {
// //           setProducts(res.data);
// //         } else {
// //           setProducts([]);
// //         }
// //       } catch (err) {
// //         console.error("Failed to fetch products:", err);
// //         setError("Failed to load products.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   if (loading) return <div className="text-center p-10">Loading products...</div>;
// //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>

// //       <div className="flex space-x-4 mb-6">
// //         {categories.map((cat) => (
// //           <button
// //             key={cat}
// //             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       <h2 className="text-2xl font-semibold mb-4">Products</h2>

// //       {products.length === 0 ? (
// //         <p>No products available.</p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {products.map((product) => (
// //             <div
// //               key={product._id}
// //               className="cursor-pointer"
// //               onClick={() => navigate(`/product/${product._id}`)}
// //             >
// //               <ProductCard product={product} />
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Home;



// // src/pages/buyer/Home.jsx
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../../utils/axios";
// import ProductCard from "../../components/ProductCard";

// const Home = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [categories] = useState(["Electronics", "Fashion", "Books"]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("/products");

//         if (res.data && Array.isArray(res.data.products)) {
//           setProducts(res.data.products);
//         } else if (Array.isArray(res.data)) {
//           setProducts(res.data);
//         } else {
//           setProducts([]);
//         }
//       } catch (err) {
//         console.error("Failed to fetch products:", err);
//         setError("Failed to load products.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <div className="text-center p-10">Loading products...</div>;
//   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
//       <div className="flex space-x-4 mb-6">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Products</h2>
//       {products.length === 0 ? (
//         <p>No products available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               onClick={() => navigate(`/product/${product._id}`)}
//             >
//               <ProductCard product={product} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;



// src/pages/buyer/Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories] = useState(["Electronics", "Fashion", "Books"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ SELLER REDIRECT FIX
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.role === "seller") {
      navigate("/seller/dashboard");
    }
  }, [navigate]);

  // ✅ FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/products");

        if (res.data && Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        } else if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ LOADING
  if (loading) return <div className="text-center p-10">Loading products...</div>;

  // ✅ ERROR
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>

      {/* Categories */}
      <div className="flex space-x-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="cursor-pointer"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;