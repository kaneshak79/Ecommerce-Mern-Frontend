// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useLocation } from "react-router-dom";
// // // // // // import axios from "../utils/axios"; // your axios setup

// // // // // // const SearchResults = () => {
// // // // // //   const location = useLocation();
// // // // // //   const [products, setProducts] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   // Read `query` param from URL
// // // // // //   const searchQuery = new URLSearchParams(location.search).get("query");

// // // // // //   useEffect(() => {
// // // // // //     if (searchQuery) {
// // // // // //       setLoading(true);
// // // // // //       axios
// // // // // //         .get(`/api/products/search?query=${encodeURIComponent(searchQuery)}`)
// // // // // //         .then((res) => setProducts(res.data))
// // // // // //         .catch((err) => console.error(err))
// // // // // //         .finally(() => setLoading(false));
// // // // // //     } else {
// // // // // //       setProducts([]);
// // // // // //     }
// // // // // //   }, [searchQuery]);

// // // // // //   return (
// // // // // //     <div className="p-6">
// // // // // //       <h2 className="text-xl font-semibold mb-4">
// // // // // //         Search results for "{searchQuery}"
// // // // // //       </h2>

// // // // // //       {loading && <p>Loading...</p>}

// // // // // //       {!loading && products.length === 0 && <p>No products found.</p>}

// // // // // //       {!loading && products.length > 0 && (
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // //           {products.map((product) => (
// // // // // //             <div key={product._id} className="border p-4 rounded">
// // // // // //               <img
// // // // // //                 src={product.image}
// // // // // //                 alt={product.title}
// // // // // //                 className="w-full h-40 object-cover"
// // // // // //               />
// // // // // //               <h3 className="mt-2 font-medium">{product.title}</h3>
// // // // // //               <p className="text-pink-500 mt-1">${product.price}</p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SearchResults;




// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useLocation } from "react-router-dom";
// // // // // import axios from "../../utils/axios"; // adjust path if needed

// // // // // const SearchResults = () => {
// // // // //   const location = useLocation();
// // // // //   const [products, setProducts] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   // Get `query` from URL
// // // // //   const searchQuery = new URLSearchParams(location.search).get("query");

// // // // //   useEffect(() => {
// // // // //     if (searchQuery) {
// // // // //       setLoading(true);
// // // // //       axios
// // // // //         .get(`/api/products/search?query=${encodeURIComponent(searchQuery)}`)
// // // // //         .then((res) => {
// // // // //           setProducts(res.data); // set products from backend
// // // // //         })
// // // // //         .catch((err) => {
// // // // //           console.error("Search error:", err);
// // // // //           setProducts([]);
// // // // //         })
// // // // //         .finally(() => setLoading(false));
// // // // //     } else {
// // // // //       setProducts([]);
// // // // //     }
// // // // //   }, [searchQuery]);

// // // // //   return (
// // // // //     <div className="p-6">
// // // // //       <h2 className="text-xl font-semibold mb-4">
// // // // //         Search results for "{searchQuery}"
// // // // //       </h2>

// // // // //       {loading && <p>Loading...</p>}

// // // // //       {!loading && products.length === 0 && <p>No products found.</p>}

// // // // //       {!loading && products.length > 0 && (
// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // //           {products.map((product) => (
// // // // //             <div key={product._id} className="border p-4 rounded">
// // // // //               {/* Use `title` and `image` from your backend */}
// // // // //               <img
// // // // //                 src={product.image} 
// // // // //                 alt={product.title} 
// // // // //                 className="w-full h-40 object-cover"
// // // // //               />
// // // // //               <h3 className="mt-2 font-medium">{product.title}</h3>
// // // // //               <p className="text-pink-500 mt-1">${product.price}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SearchResults;


// // // // import React, { useEffect, useState } from "react";
// // // // import { useLocation } from "react-router-dom";
// // // // import axios from "../../utils/axios"; // your axios setup

// // // // const SearchResults = () => {
// // // //   const location = useLocation();
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(false);

// // // //   // Get query from URL
// // // //   const searchQuery = new URLSearchParams(location.search).get("query");

// // // //   useEffect(() => {
// // // //     if (searchQuery) {
// // // //       setLoading(true);
// // // //       axios
// // // //         .get(`/api/products/search?query=${encodeURIComponent(searchQuery)}`)
// // // //         .then((res) => setProducts(res.data))
// // // //         .catch((err) => {
// // // //           console.error("Search error:", err);
// // // //           setProducts([]);
// // // //         })
// // // //         .finally(() => setLoading(false));
// // // //     } else {
// // // //       setProducts([]);
// // // //     }
// // // //   }, [searchQuery]);

// // // //   return (
// // // //     <div className="p-6">
// // // //       <h2 className="text-xl font-semibold mb-4">
// // // //         Search results for "{searchQuery}"
// // // //       </h2>

// // // //       {loading && <p>Loading...</p>}

// // // //       {!loading && products.length === 0 && <p>No products found.</p>}

// // // //       {!loading && products.length > 0 && (
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // //           {products.map((product) => (
// // // //             <div key={product._id} className="border p-4 rounded">
// // // //               <img
// // // //                 src={product.image}
// // // //                 alt={product.title}
// // // //                 className="w-full h-40 object-cover"
// // // //               />
// // // //               <h3 className="mt-2 font-medium">{product.title}</h3>
// // // //               <p className="text-pink-500 mt-1">${product.price}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SearchResults;

// // import React, { useEffect, useState } from "react";
// // import { useLocation } from "react-router-dom";
// // import axios from "../../utils/axios";

// // const SearchResults = () => {
// //   const location = useLocation();
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const searchQuery = new URLSearchParams(location.search).get("query");

// //   useEffect(() => {
// //     if (!searchQuery) return setProducts([]);

// //     setLoading(true);
// //     axios
// //       .get(`/api/products/search?query=${encodeURIComponent(searchQuery)}`)
// //       .then((res) => setProducts(res.data))
// //       .catch((err) => {
// //         console.error(err);
// //         setProducts([]);
// //       })
// //       .finally(() => setLoading(false));
// //   }, [searchQuery]);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-xl font-semibold mb-4">
// //         Search results for "{searchQuery}"
// //       </h2>
// //       {loading && <p>Loading...</p>}
// //       {!loading && products.length === 0 && <p>No products found.</p>}
// //       {!loading && products.length > 0 && (
// //         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {products.map((product) => (
// //             <div key={product._id} className="border p-4 rounded">
// //               <img
// //                 src={product.image}
// //                 alt={product.title}
// //                 className="w-full h-40 object-cover"
// //               />
// //               <h3 className="mt-2 font-medium">{product.title}</h3>
// //               <p className="text-pink-500 mt-1">${product.price}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SearchResults;



// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "../../utils/axios";

// const SearchResults = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const searchQuery = new URLSearchParams(location.search).get("query");

//   // ✅ Backend base URL
//   const BASE_URL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-1.onrender.com";

//   useEffect(() => {
//     if (!searchQuery) return setProducts([]);

//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(
//           `${BASE_URL}/api/products/search?query=${encodeURIComponent(
//             searchQuery
//           )}`
//         );

//         // Backend may return products array directly or inside res.data.products
//         const data = Array.isArray(res.data.products) ? res.data.products : res.data;

//         // Fix image URLs
//         const updatedProducts = data.map((p) => ({
//           ...p,
//           image:
//             p.images && p.images[0]
//               ? p.images[0].startsWith("http")
//                 ? p.images[0]
//                 : `${BASE_URL}/uploads/${p.images[0]}`
//               : "/placeholder.png",
//         }));

//         setProducts(updatedProducts);
//       } catch (err) {
//         console.error("Search fetch error:", err);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [searchQuery, BASE_URL]);

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold mb-4">
//         Search results for "{searchQuery}"
//       </h2>

//       {loading && <p>Loading...</p>}
//       {!loading && products.length === 0 && <p>No products found.</p>}

//       {!loading && products.length > 0 && (
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="border rounded p-4 cursor-pointer hover:shadow-lg transition"
//               onClick={() => navigate(`/product/${product._id}`)}
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-40 object-contain mb-2"
//               />
//               <h3 className="font-medium">{product.title}</h3>
//               <p className="text-pink-500 font-semibold mt-1">₹{product.price}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchResults;


import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchQuery = new URLSearchParams(location.search).get("query");

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  useEffect(() => {
    if (!searchQuery) return setProducts([]);

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${BASE_URL}/api/products/search?query=${encodeURIComponent(searchQuery)}`
        );

        const data = Array.isArray(res.data.products)
          ? res.data.products
          : res.data;

        const updatedProducts = data.map((p) => {
          let img = "/placeholder.png";

          if (p.images && p.images[0]) {
            const imgPath = p.images[0];

            // FIXED IMAGE LOGIC
            if (imgPath.startsWith("http")) {
              img = imgPath;
            } else {
              img = `${BASE_URL}${imgPath}`;
            }
          }

          return {
            ...p,
            image: img,
          };
        });

        setProducts(updatedProducts);
      } catch (err) {
        console.error("Search fetch error:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Search results for "{searchQuery}"
      </h2>

      {loading && <p>Loading...</p>}
      {!loading && products.length === 0 && <p>No products found.</p>}

      {!loading && products.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
              />

              <h3 className="font-medium">{product.title}</h3>
              <p className="text-pink-500 font-semibold mt-1">
                ₹{product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;