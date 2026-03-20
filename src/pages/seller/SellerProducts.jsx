// // import React, { useEffect, useState } from "react";
// // import axios from "../../utils/axios";
// // import SellerProductCard from "../../components/SellerProductCard";

// // const SellerProducts = () => {
// //   const [products, setProducts] = useState([]);

// //   const fetchProducts = async () => {
// //     try {
// //       const res = await axios.get("/seller/products");
// //       setProducts(res.data.products);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-4">My Products</h1>
// //       {products.length === 0 ? (
// //         <p>No products added yet.</p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {products.map((product) => (
// //             <SellerProductCard key={product._id} product={product} refresh={fetchProducts} />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SellerProducts;





// // src/pages/seller/SellerProducts.jsx
// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import { useNavigate } from "react-router-dom";

// const SellerProducts = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("/seller/products", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setProducts(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const deleteProduct = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;
//     try {
//       await axios.delete(`/seller/products/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       fetchProducts(); // refresh list
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Your Products</h1>
//       <button
//         className="mb-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
//         onClick={() => navigate("/seller/add-product")}
//       >
//         Add New Product
//       </button>
//       {products.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {products.map((p) => (
//             <div key={p._id} className="border p-4 rounded shadow">
//               <img
//                 src={p.image?.startsWith("http") ? p.image : `https://ecommerce-mern-backend-1.onrender.com/uploads/${p.image}`}
//                 alt={p.title}
//                 className="h-40 w-full object-cover mb-2"
//               />
//               <h3 className="font-bold">{p.title}</h3>
//               <p>${p.price}</p>
//               <div className="flex space-x-2 mt-2">
//                 <button
//                   className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
//                   onClick={() => navigate(`/seller/edit-product/${p._id}`)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                   onClick={() => deleteProduct(p._id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SellerProducts;


// src/pages/seller/SellerProducts.jsx
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useNavigate, useLocation } from "react-router-dom";

const SellerProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const BASE_URL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/seller/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 FIX: refetch when page loads or comes back
  useEffect(() => {
    fetchProducts();
  }, [location.pathname]);

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      await axios.delete(`/seller/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Products</h1>

      <button
        className="mb-4 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate("/seller/add-product")}
      >
        Add New Product
      </button>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <div key={p._id} className="border p-4 rounded shadow">
              
              {/* ✅ FIXED IMAGE */}
              <img
                src={`${BASE_URL}/${p.images?.[0]?.replace(/^\/+/, "")}?t=${Date.now()}`}
                alt={p.title}
                className="h-40 w-full object-cover mb-2"
              />

              <h3 className="font-bold">{p.title}</h3>
              <p>₹{p.price}</p>

              <div className="flex space-x-2 mt-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  onClick={() =>
                    navigate(`/seller/edit-product/${p._id}`)
                  }
                >
                  Edit
                </button>

                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => deleteProduct(p._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerProducts;