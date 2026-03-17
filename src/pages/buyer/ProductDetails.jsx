// // // import React, { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom";
// // // import axios from "../../utils/axios";

// // // const ProductDetails = () => {
// // //   const { id } = useParams();
// // //   const [product, setProduct] = useState(null);

// // //   useEffect(() => {
// // //     const fetchProduct = async () => {
// // //       try {
// // //         const res = await axios.get(`/products/${id}`);
// // //         setProduct(res.data.product);
// // //       } catch (err) {
// // //         console.log(err);
// // //       }
// // //     };
// // //     fetchProduct();
// // //   }, [id]);

// // //   if (!product) return <div className="p-4">Loading...</div>;

// // //   return (
// // //     <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
// // //       <img src={product.image} alt={product.title} className="w-full md:w-1/2 rounded" />
// // //       <div className="md:w-1/2 space-y-4">
// // //         <h1 className="text-3xl font-bold">{product.title}</h1>
// // //         <p className="text-gray-700">{product.description}</p>
// // //         <p className="text-xl font-semibold">${product.price}</p>
// // //         <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
// // //           Add to Cart
// // //         </button>
// // //         <button className="ml-4 bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300">
// // //           Add to Wishlist
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductDetails;




// // // src/pages/buyer/ProductDetails.jsx
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "../../utils/axios";

// // const ProductDetails = () => {
// //   const { id } = useParams();
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await axios.get(`/products/${id}`);
// //         setProduct(res.data.product || res.data);
// //       } catch (err) {
// //         console.error("Failed to fetch product:", err);
// //         setError("Failed to load product.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProduct();
// //   }, [id]);

// //   const handleAddToCart = () => {
// //     let cart = JSON.parse(localStorage.getItem("cart")) || [];
// //     cart.push(product);
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //     alert("Product added to cart!");
// //   };

// //   const handleAddToWishlist = () => {
// //     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// //     wishlist.push(product);
// //     localStorage.setItem("wishlist", JSON.stringify(wishlist));
// //     alert("Product added to wishlist!");
// //   };

// //   if (loading) return <div className="text-center p-10">Loading product...</div>;
// //   if (error) return <div className="text-center p-10 text-red-500">{error}</div>;
// //   if (!product) return <div className="text-center p-10">Product not found.</div>;

// //   return (
// //     <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
// //       <div className="md:w-1/2">
// //         <img
// //           src={product.image?.startsWith("http") ? product.image : `http://localhost:5000/${product.image}`}
// //           alt={product.title}
// //           className="w-full object-cover rounded"
// //         />
// //       </div>
// //       <div className="md:w-1/2">
// //         <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
// //         <p className="mb-4">{product.description}</p>
// //         <p className="text-xl font-semibold mb-4">${product.price}</p>

// //         <div className="flex space-x-4">
// //           <button
// //             onClick={handleAddToCart}
// //             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// //           >
// //             Add to Cart
// //           </button>
// //           <button
// //             onClick={handleAddToWishlist}
// //             className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
// //           >
// //             Add to Wishlist
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;





// src/pages/buyer/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading product...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;
  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image?.startsWith("http") ? product.image : `http://localhost:5000/${product.image}`}
          alt={product.title}
          className="w-full md:w-1/2 object-cover rounded"
        />
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="mb-2">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>

          <div className="flex space-x-2">
            <button
              onClick={() => addToCart(product)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="bg-pink-500 text-white px-4 py-2 rounded"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

