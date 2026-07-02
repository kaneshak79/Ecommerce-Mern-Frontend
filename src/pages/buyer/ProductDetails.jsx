

// // // // //                       <button
// // // // //                         onClick={() => handleDelete(r._id)}
// // // // //                         className="text-red-500 hover:underline"
// // // // //                       >
// // // // //                         Delete
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductDetails;



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cart, addToFavorites } = useCart();
  const { addToWishlist, wishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState("description");

  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [editingReviewId, setEditingReviewId] = useState(null);

  const backendURL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = storedUser?._id;

  // ================= FETCH PRODUCT & REVIEWS =================
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/reviews?productId=${id}`);
        setReviews(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [id]);

  if (!product) return <div className="h-screen flex items-center justify-center text-xl animate-pulse">Loading product...</div>;

  const imageUrl =
    product.images?.[0]
      ? product.images[0].startsWith("http")
        ? product.images[0]
        : `${backendURL}${product.images[0]}`
      : "/placeholder.png";

  // ✅ Get current cart quantity for this product
  const cartItem = cart.find((p) => p._id === product._id);
  const cartQty = cartItem ? cartItem.quantity : 0;

  // ================= SUBMIT REVIEW =================
  const handleSubmitReview = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("Login required");
      if (!comment.trim()) return alert("Write something");

      if (editingReviewId) {
        await axios.put(
          `${backendURL}/api/reviews/${editingReviewId}`,
          { rating, comment },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        await axios.post(
          `${backendURL}/api/reviews`,
          { productId: id, rating, comment },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setShowForm(false);
      setComment("");
      setRating(5);
      setEditingReviewId(null);
      // Refresh reviews
      const res = await axios.get(`${backendURL}/api/reviews?productId=${id}`);
      setReviews(res.data);
    } catch (err) {
      console.error(err);
      alert("Submit failed");
    }
  };

  const handleDelete = async (rid) => {
    const token = localStorage.getItem("token");
    await axios.delete(`${backendURL}/api/reviews/${rid}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const res = await axios.get(`${backendURL}/api/reviews?productId=${id}`);
    setReviews(res.data);
  };

  const handleEdit = (r) => {
    setShowForm(true);
    setRating(r.rating);
    setComment(r.comment);
    setEditingReviewId(r._id);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-pink-50 min-h-screen p-6">
      {/* TOP CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 grid md:grid-cols-2 gap-8">
        {/* IMAGE */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt=""
            className="w-full h-[400px] object-contain transition duration-500 hover:scale-110"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600 mt-3">{product.description}</p>

            <p className="text-4xl font-bold text-pink-600 mt-4">₹{product.price}</p>
            {/* <p className="text-gray-500 mt-1 text-sm">
              {cartQty > 0 ? `Already in cart: Qty ${cartQty}` : "Not in cart yet"}
            </p> */}

            <div className="text-yellow-400 mt-2 text-lg">⭐⭐⭐⭐☆</div>
          </div>

          <div className="flex gap-4 mt-6">
            {/* ADD TO CART */}
            <button
              onClick={() => addToCart({ ...product })}
              className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition"
            >
              {/* {cartQty > 0 ? `Add More (+${cartQty})` : "Add to Cart"} */}
              Add to cart
            </button>

            {/* FAVORITE / WISHLIST */}
            {/* <button
              onClick={() => {
                addToFavorites(product);
                addToWishlist(product);
              }}
              className="px-5 border rounded-xl hover:bg-gray-100 transition"
            >
              ❤️
            </button> */}
            <button
  onClick={() => addToWishlist(product)}
  className="text-xl hover:scale-110 transition"
>
  ❤️
</button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-6xl mx-auto mt-6 bg-white rounded-2xl shadow">
        <div className="flex border-b">
          {["description", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 font-medium transition ${
                activeTab === tab ? "border-b-2 border-pink-500 text-pink-500" : "text-gray-500"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === "description" && (
            <div className="animate-fadeIn text-gray-600 leading-relaxed">{product.description}</div>
          )}

          {activeTab === "reviews" && (
            <div className="animate-fadeIn">
              <div className="flex justify-between mb-4">
                <h2 className="font-semibold text-lg">Customer Reviews</h2>
                <button
                  onClick={() => {
                    setShowForm(true);
                    setComment("");
                    setRating(5);
                    setEditingReviewId(null);
                  }}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                >
                  Write Review
                </button>
              </div>

              {showForm && (
                <div className="bg-white/70 backdrop-blur-lg p-5 rounded-2xl shadow-xl mb-5 animate-slideUp">
                  <div className="flex gap-2 text-2xl mb-3 cursor-pointer">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        onClick={() => setRating(s)}
                        className={`${s <= rating ? "text-yellow-400" : "text-gray-300"} hover:scale-125 transition`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your experience..."
                    className="w-full p-3 border rounded-xl mb-3 focus:ring-2 focus:ring-pink-400"
                  />

                  <div className="flex justify-between">
                    <button onClick={() => setShowForm(false)} className="text-gray-500">Cancel</button>
                    <button
                      onClick={handleSubmitReview}
                      className="bg-pink-500 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
                    >
                      {editingReviewId ? "Update" : "Submit"}
                    </button>
                  </div>
                </div>
              )}

              {reviews.length === 0 && <p className="text-gray-500">No reviews yet</p>}

              {reviews.map((r) => (
                <div key={r._id} className="bg-gray-50 p-4 rounded-xl mb-3 shadow-sm hover:shadow-md transition flex justify-between">
                  <div>
                    <p className="text-yellow-400">{"★".repeat(r.rating)}</p>
                    <p>{r.comment}</p>
                    <p className="text-xs text-gray-500">{r.user?.name}</p>
                  </div>

                  {String(r.user?._id) === String(userId) && (
                    <div className="flex gap-3 text-sm">
                      <button onClick={() => handleEdit(r)} className="text-blue-500 hover:underline">Edit</button>
                      <button onClick={() => handleDelete(r._id)} className="text-red-500 hover:underline">Delete</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../../utils/axios";
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../context/WishlistContext";
// import { toast } from "react-toastify";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { addToCart, cart, addToFavorites } = useCart();
//   const { addToWishlist } = useWishlist();

//   const [product, setProduct] = useState(null);
//   const [activeTab, setActiveTab] = useState("description");

//   const [cartQty, setCartQty] = useState(0);

//   const backendURL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-1.onrender.com";

//   // Update cartQty whenever cart or product changes
//   useEffect(() => {
//     const cartItem = cart.find((p) => p._id === product?._id);
//     setCartQty(cartItem ? cartItem.quantity : 0);
//   }, [cart, product]);

//   // Fetch product
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${backendURL}/api/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product) return <div className="h-screen flex items-center justify-center animate-pulse">Loading...</div>;

//   const imageUrl =
//     product.images?.[0]
//       ? product.images[0].startsWith("http")
//         ? product.images[0]
//         : `${backendURL}${product.images[0]}`
//       : "/placeholder.png";

//   return (
//     <div className="bg-gradient-to-br from-gray-100 to-pink-50 min-h-screen p-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 grid md:grid-cols-2 gap-8">
//         <div className="overflow-hidden rounded-2xl">
//           <img
//             src={imageUrl}
//             alt=""
//             className="w-full h-[400px] object-contain transition duration-500 hover:scale-110"
//           />
//         </div>

//         <div className="flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold">{product.title}</h1>
//             <p className="text-gray-600 mt-3">{product.description}</p>
//             <p className="text-4xl font-bold text-pink-600 mt-4">₹{product.price}</p>
//           </div>

//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={() => addToCart(product)}
//               className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition"
//             >
//               {cartQty > 0 ? `Add More (+${cartQty})` : "Add to Cart"}
//             </button>

//             <button
//               onClick={() => addToFavorites(product)}
//               className="px-5 border rounded-xl hover:bg-gray-100 transition"
//             >
//               ❤️
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs placeholder */}
//       <div className="max-w-6xl mx-auto mt-6 bg-white rounded-2xl shadow">
//         <div className="flex border-b">
//           {["description", "reviews"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`flex-1 py-3 font-medium transition ${
//                 activeTab === tab
//                   ? "border-b-2 border-pink-500 text-pink-500"
//                   : "text-gray-500"
//               }`}
//             >
//               {tab.toUpperCase()}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "../../utils/axios";
// // import { useCart } from "../../context/CartContext";
// // import { useWishlist } from "../../context/WishlistContext";
// // import { toast } from "react-toastify";

// // const ProductDetails = () => {
// //   const { id } = useParams();
// //   const { cart, addToCart, addToFavorites } = useCart();
// //   const { addToWishlist } = useWishlist();

// //   const [product, setProduct] = useState(null);

// //   const backendURL =
// //     import.meta.env.VITE_BACKEND_URL ||
// //     "https://ecommerce-mern-backend-1.onrender.com";

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const res = await axios.get(`${backendURL}/api/products/${id}`);
// //         setProduct(res.data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchProduct();
// //   }, [id]);

// //   if (!product) return <div className="h-screen flex items-center justify-center animate-pulse">Loading...</div>;

// //   const cartItem = cart.find((p) => p._id === product._id);
// //   const quantityInCart = cartItem ? cartItem.quantity : 0;

// //   const imageUrl =
// //     product.images?.[0]
// //       ? product.images[0].startsWith("http")
// //         ? product.images[0]
// //         : `${backendURL}${product.images[0]}`
// //       : "/placeholder.png";

// //   return (
// //     <div className="min-h-screen p-6 bg-gradient-to-br from-gray-100 to-pink-50">
// //       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 grid md:grid-cols-2 gap-8">
// //         <img src={imageUrl} alt="" className="w-full h-[400px] object-contain rounded-2xl" />
// //         <div className="flex flex-col justify-between">
// //           <h1 className="text-3xl font-bold">{product.title}</h1>
// //           <p className="text-gray-600 mt-3">{product.description}</p>
// //           <p className="text-4xl font-bold text-pink-600 mt-4">₹{product.price}</p>

// //           <div className="flex gap-4 mt-6">
// //             <button
// //               onClick={() => addToCart(product)}
// //               className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition"
// //             >
// //               {quantityInCart > 0 ? `Add More (+${quantityInCart})` : "Add to Cart"}
// //             </button>

// //             <button
// //               onClick={() => addToFavorites(product)}
// //               className="px-5 border rounded-xl hover:bg-gray-100 transition"
// //             >
// //               ❤️
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "../../utils/axios";
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../context/WishlistContext";
// import { toast } from "react-toastify";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { cart, addToCart, addToFavorites } = useCart();
//   const { wishlist, addToWishlist } = useWishlist(); // ✅ Use wishlist here

//   const [product, setProduct] = useState(null);

//   const backendURL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-1.onrender.com";

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${backendURL}/api/products/${id}`);
//         setProduct(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   if (!product)
//     return (
//       <div className="h-screen flex items-center justify-center animate-pulse">
//         Loading...
//       </div>
//     );

//   const cartItem = cart.find((p) => p._id === product._id);
//   const quantityInCart = cartItem ? cartItem.quantity : 0;

//   const isInWishlist = wishlist.find((p) => p._id === product._id);

//   const imageUrl =
//     product.images?.[0]
//       ? product.images[0].startsWith("http")
//         ? product.images[0]
//         : `${backendURL}${product.images[0]}`
//       : "/placeholder.png";

//   const handleWishlist = () => {
//     if (isInWishlist) {
//       toast.info("Already in wishlist 💖");
//     } else {
//       addToWishlist(product);
//       toast.success("Added to wishlist 💖");
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 bg-gradient-to-br from-gray-100 to-pink-50">
//       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 grid md:grid-cols-2 gap-8">
//         <img
//           src={imageUrl}
//           alt=""
//           className="w-full h-[400px] object-contain rounded-2xl"
//         />
//         <div className="flex flex-col justify-between">
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-gray-600 mt-3">{product.description}</p>
//           <p className="text-4xl font-bold text-pink-600 mt-4">₹{product.price}</p>

//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={() => addToCart(product)}
//               className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition"
//             >
//               {quantityInCart > 0
//                 ? `Add More (+${quantityInCart})`
//                 : "Add to Cart"}
//             </button>

//             <button
//               onClick={handleWishlist} // ✅ Connect to wishlist
//               className={`px-5 border rounded-xl transition ${
//                 isInWishlist
//                   ? "bg-pink-500 text-white hover:bg-pink-600"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               {isInWishlist ? "In Wishlist ❤️" : "Add to Wishlist 🤍"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
