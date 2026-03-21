

// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useParams } from "react-router-dom";
// // // // // import axios from "../../utils/axios";
// // // // // import { useCart } from "../../context/CartContext";
// // // // // import { useWishlist } from "../../context/WishlistContext";

// // // // // const ProductDetails = () => {
// // // // //   const { id } = useParams();
// // // // //   const { addToCart } = useCart();
// // // // //   const { addToWishlist } = useWishlist();

// // // // //   const [product, setProduct] = useState(null);
// // // // //   const [reviews, setReviews] = useState([]);
// // // // //   const [activeTab, setActiveTab] = useState("details");

// // // // //   const [showForm, setShowForm] = useState(false);
// // // // //   const [rating, setRating] = useState(5);
// // // // //   const [comment, setComment] = useState("");
// // // // //   const [editingReviewId, setEditingReviewId] = useState(null);

// // // // //   // ✅ SAFE USER ID
// // // // //   const userId = String(localStorage.getItem("userId") || "");

// // // // //   // ================= FETCH PRODUCT =================
// // // // //   const fetchProduct = async () => {
// // // // //     try {
// // // // //       const res = await axios.get(`/products/${id}`);
// // // // //       setProduct(res.data);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   // ================= FETCH REVIEWS =================
// // // // //   const fetchReviews = async () => {
// // // // //     try {
// // // // //       const res = await axios.get(`/reviews?productId=${id}`);
// // // // //       setReviews(res.data);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchProduct();
// // // // //     fetchReviews();
// // // // //   }, [id]);

// // // // //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// // // // //   const imageUrl = product.image?.startsWith("http")
// // // // //     ? product.image
// // // // //     : `http://localhost:5000/${product.image}`;

// // // // //   // ================= ADD / UPDATE =================
// // // // //   const handleSubmitReview = async () => {
// // // // //     try {
// // // // //       const token = localStorage.getItem("token");

// // // // //       if (!token) {
// // // // //         alert("Please login first");
// // // // //         return;
// // // // //       }

// // // // //       if (!comment.trim()) {
// // // // //         alert("Please write review");
// // // // //         return;
// // // // //       }

// // // // //       if (editingReviewId) {
// // // // //         await axios.put(
// // // // //           `/reviews/${editingReviewId}`,
// // // // //           { rating: Number(rating), comment },
// // // // //           {
// // // // //             headers: {
// // // // //               Authorization: `Bearer ${token}`,
// // // // //             },
// // // // //           }
// // // // //         );
// // // // //       } else {
// // // // //         await axios.post(
// // // // //           "/reviews",
// // // // //           {
// // // // //             productId: id,
// // // // //             rating: Number(rating),
// // // // //             comment,
// // // // //           },
// // // // //           {
// // // // //             headers: {
// // // // //               Authorization: `Bearer ${token}`,
// // // // //             },
// // // // //           }
// // // // //         );
// // // // //       }

// // // // //       alert("Review submitted successfully!");

// // // // //       // RESET
// // // // //       setShowForm(false);
// // // // //       setComment("");
// // // // //       setRating(5);
// // // // //       setEditingReviewId(null);

// // // // //       fetchReviews();
// // // // //     } catch (err) {
// // // // //       console.error("REVIEW ERROR:", err.response?.data || err.message);
// // // // //       alert(err.response?.data?.message || "Review failed");
// // // // //     }
// // // // //   };

// // // // //   // ================= DELETE =================
// // // // //   const handleDelete = async (reviewId) => {
// // // // //     try {
// // // // //       await axios.delete(`/reviews/${reviewId}`, {
// // // // //         headers: {
// // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // //         },
// // // // //       });

// // // // //       fetchReviews();
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   // ================= EDIT =================
// // // // //   const handleEdit = (review) => {
// // // // //     setShowForm(true);
// // // // //     setRating(review.rating);
// // // // //     setComment(review.comment);
// // // // //     setEditingReviewId(review._id);
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-gray-50 min-h-screen">
// // // // //       <div className="max-w-6xl mx-auto p-4">

// // // // //         {/* TOP */}
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
// // // // //           <img src={imageUrl} className="h-[400px] object-contain" />

// // // // //           <div>
// // // // //             <h1 className="text-xl font-semibold">{product.title}</h1>
// // // // //             <p className="text-2xl font-bold mt-2">₹{product.price}</p>

// // // // //             <div className="flex gap-3 mt-4">
// // // // //               <button
// // // // //                 onClick={() => addToCart(product)}
// // // // //                 className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// // // // //               >
// // // // //                 Add to Bag
// // // // //               </button>

// // // // //               <button
// // // // //                 onClick={() => addToWishlist(product)}
// // // // //                 className="border px-4 py-3 rounded"
// // // // //               >
// // // // //                 ❤️
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* TABS */}
// // // // //         <div className="bg-white mt-6 rounded-lg shadow">
// // // // //           <div className="flex border-b">
// // // // //             <button
// // // // //               onClick={() => setActiveTab("details")}
// // // // //               className={`px-6 py-3 ${
// // // // //                 activeTab === "details" && "border-b-2 border-pink-500"
// // // // //               }`}
// // // // //             >
// // // // //               Product Details
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => setActiveTab("reviews")}
// // // // //               className={`px-6 py-3 ${
// // // // //                 activeTab === "reviews" && "border-b-2 border-pink-500"
// // // // //               }`}
// // // // //             >
// // // // //               Ratings & Reviews
// // // // //             </button>
// // // // //           </div>

// // // // //           <div className="p-6">

// // // // //             {/* DETAILS */}
// // // // //             {activeTab === "details" && (
// // // // //               <p className="text-gray-600">{product.description}</p>
// // // // //             )}

// // // // //             {/* REVIEWS */}
// // // // //             {activeTab === "reviews" && (
// // // // //               <div>

// // // // //                 {/* HEADER */}
// // // // //                 <div className="flex justify-between mb-4">
// // // // //                   <h2 className="font-semibold">Customer Reviews</h2>

// // // // //                   <button
// // // // //                     onClick={() => {
// // // // //                       setShowForm(true);
// // // // //                       setEditingReviewId(null);
// // // // //                       setComment("");
// // // // //                       setRating(5);
// // // // //                     }}
// // // // //                     className="border px-4 py-2 text-pink-500 rounded"
// // // // //                   >
// // // // //                     Write Review
// // // // //                   </button>
// // // // //                 </div>

// // // // //                 {/* FORM */}
// // // // //                 {showForm && (
// // // // //                   <div className="border p-4 mb-4 rounded">
// // // // //                     <select
// // // // //                       value={rating}
// // // // //                       onChange={(e) => setRating(Number(e.target.value))}
// // // // //                       className="border p-2 mb-2 w-full"
// // // // //                     >
// // // // //                       {[5, 4, 3, 2, 1].map((r) => (
// // // // //                         <option key={r} value={r}>
// // // // //                           {r} Stars
// // // // //                         </option>
// // // // //                       ))}
// // // // //                     </select>

// // // // //                     <textarea
// // // // //                       value={comment}
// // // // //                       onChange={(e) => setComment(e.target.value)}
// // // // //                       placeholder="Write your review..."
// // // // //                       className="border p-2 w-full mb-2"
// // // // //                     />

// // // // //                     <button
// // // // //                       onClick={handleSubmitReview}
// // // // //                       className="bg-pink-500 text-white px-4 py-2 rounded"
// // // // //                     >
// // // // //                       {editingReviewId ? "Update Review" : "Submit Review"}
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {/* LIST */}
// // // // //                 {reviews.length === 0 && <p>No reviews yet</p>}

// // // // //                 {reviews.map((review) => (
// // // // //                   <div
// // // // //                     key={review._id}
// // // // //                     className="border-b py-3 flex justify-between"
// // // // //                   >
// // // // //                     <div>
// // // // //                       <p className="font-semibold">⭐ {review.rating}</p>
// // // // //                       <p>{review.comment}</p>
// // // // //                       <p className="text-xs text-gray-500">
// // // // //                         by {review.user?.name}
// // // // //                       </p>
// // // // //                     </div>

// // // // //                     {/* ✅ FIXED USER MATCH */}
// // // // //                     {String(review.user?._id) === userId && (
// // // // //                       <div className="flex gap-2">
// // // // //                         <button
// // // // //                           onClick={() => handleEdit(review)}
// // // // //                           className="text-blue-500"
// // // // //                         >
// // // // //                           Edit
// // // // //                         </button>

// // // // //                         <button
// // // // //                           onClick={() => handleDelete(review._id)}
// // // // //                           className="text-red-500"
// // // // //                         >
// // // // //                           Delete
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 ))}

// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProductDetails;



// // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // // // // // // import { FiEdit } from "react-icons/fi";

// // // // // // // // // // // const ProductDetails = () => {
// // // // // // // // // // //   const { id } = useParams();
// // // // // // // // // // //   const { addToCart } = useCart();
// // // // // // // // // // //   const { addToWishlist } = useWishlist();

// // // // // // // // // // //   const [product, setProduct] = useState(null);
// // // // // // // // // // //   const [reviews, setReviews] = useState([]);
// // // // // // // // // // //   const [activeTab, setActiveTab] = useState("details");

// // // // // // // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // // // // // // //   const [rating, setRating] = useState(5);
// // // // // // // // // // //   const [comment, setComment] = useState("");
// // // // // // // // // // //   const [editingReviewId, setEditingReviewId] = useState(null);

// // // // // // // // // // //   // ✅ current logged user name (TEMP FIX)
// // // // // // // // // // //   const userName = localStorage.getItem("name");

// // // // // // // // // // //   // ================= FETCH PRODUCT =================
// // // // // // // // // // //   const fetchProduct = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axios.get(`/products/${id}`);
// // // // // // // // // // //       setProduct(res.data);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // ================= FETCH REVIEWS =================
// // // // // // // // // // //   const fetchReviews = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axios.get(`/reviews?productId=${id}`);
// // // // // // // // // // //       setReviews(res.data);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     fetchProduct();
// // // // // // // // // // //     fetchReviews();
// // // // // // // // // // //   }, [id]);

// // // // // // // // // // //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// // // // // // // // // // //   const imageUrl = product.image?.startsWith("http")
// // // // // // // // // // //     ? product.image
// // // // // // // // // // //     : `http://localhost:5000/${product.image}`;

// // // // // // // // // // //   // ================= ADD / UPDATE REVIEW =================
// // // // // // // // // // //   const handleSubmitReview = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const token = localStorage.getItem("token");

// // // // // // // // // // //       if (!token) {
// // // // // // // // // // //         alert("Login required");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       if (!comment.trim()) {
// // // // // // // // // // //         alert("Write something...");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       if (editingReviewId) {
// // // // // // // // // // //         // UPDATE
// // // // // // // // // // //         await axios.put(
// // // // // // // // // // //           `/reviews/${editingReviewId}`,
// // // // // // // // // // //           { rating: Number(rating), comment },
// // // // // // // // // // //           {
// // // // // // // // // // //             headers: { Authorization: `Bearer ${token}` },
// // // // // // // // // // //           }
// // // // // // // // // // //         );
// // // // // // // // // // //       } else {
// // // // // // // // // // //         // ADD
// // // // // // // // // // //         await axios.post(
// // // // // // // // // // //           "/reviews",
// // // // // // // // // // //           {
// // // // // // // // // // //             productId: id,
// // // // // // // // // // //             rating: Number(rating),
// // // // // // // // // // //             comment,
// // // // // // // // // // //           },
// // // // // // // // // // //           {
// // // // // // // // // // //             headers: { Authorization: `Bearer ${token}` },
// // // // // // // // // // //           }
// // // // // // // // // // //         );
// // // // // // // // // // //       }

// // // // // // // // // // //       // RESET
// // // // // // // // // // //       setShowForm(false);
// // // // // // // // // // //       setRating(5);
// // // // // // // // // // //       setComment("");
// // // // // // // // // // //       setEditingReviewId(null);

// // // // // // // // // // //       fetchReviews();
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err.response?.data || err.message);
// // // // // // // // // // //       alert(err.response?.data?.message || "Review failed");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // ================= DELETE =================
// // // // // // // // // // //   const handleDelete = async (reviewId) => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       await axios.delete(`/reviews/${reviewId}`, {
// // // // // // // // // // //         headers: {
// // // // // // // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // // // // // // //         },
// // // // // // // // // // //       });

// // // // // // // // // // //       fetchReviews();
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //       alert("Delete failed");
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // ================= EDIT =================
// // // // // // // // // // //   const handleEdit = (review) => {
// // // // // // // // // // //     setShowForm(true);
// // // // // // // // // // //     setRating(review.rating);
// // // // // // // // // // //     setComment(review.comment);
// // // // // // // // // // //     setEditingReviewId(review._id);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="bg-gray-50 min-h-screen">
// // // // // // // // // // //       <div className="max-w-6xl mx-auto p-4">

// // // // // // // // // // //         {/* TOP SECTION */}
// // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded shadow">
// // // // // // // // // // //           <img src={imageUrl} className="h-[400px] object-contain" />

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h1 className="text-xl font-semibold">{product.title}</h1>
// // // // // // // // // // //             <p className="text-2xl font-bold mt-2">₹{product.price}</p>

// // // // // // // // // // //             <div className="flex gap-3 mt-4">
// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={() => addToCart(product)}
// // // // // // // // // // //                 className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// // // // // // // // // // //               >
// // // // // // // // // // //                 Add to Bag
// // // // // // // // // // //               </button>

// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={() => addToWishlist(product)}
// // // // // // // // // // //                 className="border px-4 py-3 rounded"
// // // // // // // // // // //               >
// // // // // // // // // // //                 ❤️
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* TABS */}
// // // // // // // // // // //         <div className="bg-white mt-6 rounded shadow">
// // // // // // // // // // //           <div className="flex border-b">
// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => setActiveTab("details")}
// // // // // // // // // // //               className={`px-6 py-3 ${
// // // // // // // // // // //                 activeTab === "details" && "border-b-2 border-pink-500"
// // // // // // // // // // //               }`}
// // // // // // // // // // //             >
// // // // // // // // // // //               Product Details
// // // // // // // // // // //             </button>

// // // // // // // // // // //             <button
// // // // // // // // // // //               onClick={() => setActiveTab("reviews")}
// // // // // // // // // // //               className={`px-6 py-3 ${
// // // // // // // // // // //                 activeTab === "reviews" && "border-b-2 border-pink-500"
// // // // // // // // // // //               }`}
// // // // // // // // // // //             >
// // // // // // // // // // //               Ratings & Reviews
// // // // // // // // // // //             </button>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div className="p-6">

// // // // // // // // // // //             {/* DETAILS TAB */}
// // // // // // // // // // //             {activeTab === "details" && (
// // // // // // // // // // //               <p className="text-gray-600">{product.description}</p>
// // // // // // // // // // //             )}

// // // // // // // // // // //             {/* REVIEWS TAB */}
// // // // // // // // // // //             {activeTab === "reviews" && (
// // // // // // // // // // //               <div>

// // // // // // // // // // //                 {/* HEADER */}
// // // // // // // // // // //                 <div className="flex justify-between mb-4">
// // // // // // // // // // //                   <h2 className="font-semibold">Customer Reviews</h2>

// // // // // // // // // // //                   <button
// // // // // // // // // // //                     onClick={() => {
// // // // // // // // // // //                       setShowForm(true);
// // // // // // // // // // //                       setEditingReviewId(null);
// // // // // // // // // // //                       setComment("");
// // // // // // // // // // //                       setRating(5);
// // // // // // // // // // //                     }}
// // // // // // // // // // //                     className="border px-4 py-2 text-pink-500 rounded"
// // // // // // // // // // //                   >
// // // // // // // // // // //                     Write Review
// // // // // // // // // // //                   </button>
// // // // // // // // // // //                 </div>

// // // // // // // // // // //                 {/* FORM */}
// // // // // // // // // // //                 {showForm && (
// // // // // // // // // // //                   <div className="border p-4 mb-4 rounded">
// // // // // // // // // // //                     <select
// // // // // // // // // // //                       value={rating}
// // // // // // // // // // //                       onChange={(e) => setRating(Number(e.target.value))}
// // // // // // // // // // //                       className="border p-2 mb-2 w-full"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       {[5, 4, 3, 2, 1].map((r) => (
// // // // // // // // // // //                         <option key={r} value={r}>
// // // // // // // // // // //                           {r} Stars
// // // // // // // // // // //                         </option>
// // // // // // // // // // //                       ))}
// // // // // // // // // // //                     </select>

// // // // // // // // // // //                     <textarea
// // // // // // // // // // //                       value={comment}
// // // // // // // // // // //                       onChange={(e) => setComment(e.target.value)}
// // // // // // // // // // //                       placeholder="Write your review..."
// // // // // // // // // // //                       className="border p-2 w-full mb-2"
// // // // // // // // // // //                     />

// // // // // // // // // // //                     <button
// // // // // // // // // // //                       onClick={handleSubmitReview}
// // // // // // // // // // //                       className="bg-pink-500 text-white px-4 py-2 rounded"
// // // // // // // // // // //                     >
// // // // // // // // // // //                       {editingReviewId ? "Update Review" : "Submit Review"}
// // // // // // // // // // //                     </button>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 )}

// // // // // // // // // // //                 {/* LIST */}
// // // // // // // // // // //                 {reviews.length === 0 && <p>No reviews yet</p>}

// // // // // // // // // // // {reviews.map((review) => {
// // // // // // // // // // //   const isOwner =
// // // // // // // // // // //     review.user?.name === userName;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div
// // // // // // // // // // //       key={review._id}
// // // // // // // // // // //       className="border-b py-3 flex justify-between items-start"
// // // // // // // // // // //     >
// // // // // // // // // // //       {/* LEFT */}
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <p className="font-semibold">⭐ {review.rating}</p>
// // // // // // // // // // //         <p>{review.comment}</p>
// // // // // // // // // // //         <p className="text-xs text-gray-500">
// // // // // // // // // // //           by {review.user?.name}
// // // // // // // // // // //         </p>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* RIGHT */}
// // // // // // // // // // //       {isOwner && (
// // // // // // // // // // //         <div className="relative">
// // // // // // // // // // //           {/* ✏️ ICON */}
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={() =>
// // // // // // // // // // //               setOpenMenuId(
// // // // // // // // // // //                 openMenuId === review._id ? null : review._id
// // // // // // // // // // //               )
// // // // // // // // // // //             }
// // // // // // // // // // //             className="text-gray-500 hover:text-black text-lg"
// // // // // // // // // // //           >
// // // // // // // // // // //             <FiEdit />
// // // // // // // // // // //           </button>

// // // // // // // // // // //           {/* DROPDOWN */}
// // // // // // // // // // //           {openMenuId === review._id && (
// // // // // // // // // // //             <div className="absolute right-0 mt-2 bg-white border shadow rounded w-28">
// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={() => {
// // // // // // // // // // //                   handleEdit(review);
// // // // // // // // // // //                   setOpenMenuId(null);
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
// // // // // // // // // // //               >
// // // // // // // // // // //                 Edit
// // // // // // // // // // //               </button>

// // // // // // // // // // //               <button
// // // // // // // // // // //                 onClick={() => {
// // // // // // // // // // //                   handleDelete(review._id);
// // // // // // // // // // //                   setOpenMenuId(null);
// // // // // // // // // // //                 }}
// // // // // // // // // // //                 className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-500 text-sm"
// // // // // // // // // // //               >
// // // // // // // // // // //                 Delete
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       )}
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // })}
// // // // // // // // // // //               </div>
// // // // // // // // // // //             )}
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default ProductDetails;


// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // // import { useWishlist } from "../../context/WishlistContext";
// // // // // // // // // // import { FiEdit } from "react-icons/fi";

// // // // // // // // // // const ProductDetails = () => {
// // // // // // // // // //   const { id } = useParams();
// // // // // // // // // //   const { addToCart } = useCart();
// // // // // // // // // //   const { addToWishlist } = useWishlist();

// // // // // // // // // //   const [product, setProduct] = useState(null);
// // // // // // // // // //   const [reviews, setReviews] = useState([]);
// // // // // // // // // //   const [activeTab, setActiveTab] = useState("details");

// // // // // // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // // // // // //   const [rating, setRating] = useState(5);
// // // // // // // // // //   const [comment, setComment] = useState("");
// // // // // // // // // //   const [editingReviewId, setEditingReviewId] = useState(null);

// // // // // // // // // //   const [openMenuId, setOpenMenuId] = useState(null);

// // // // // // // // // //   // ✅ USER NAME (IMPORTANT)
// // // // // // // // // //   const userName = localStorage.getItem("name");

// // // // // // // // // //   // ================= FETCH =================
// // // // // // // // // //   const fetchProduct = async () => {
// // // // // // // // // //     const res = await axios.get(`/products/${id}`);
// // // // // // // // // //     setProduct(res.data);
// // // // // // // // // //   };

// // // // // // // // // //   const fetchReviews = async () => {
// // // // // // // // // //     const res = await axios.get(`/reviews?productId=${id}`);
// // // // // // // // // //     setReviews(res.data);
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchProduct();
// // // // // // // // // //     fetchReviews();
// // // // // // // // // //   }, [id]);

// // // // // // // // // //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// // // // // // // // // //   const imageUrl = product.image?.startsWith("http")
// // // // // // // // // //     ? product.image
// // // // // // // // // //     : `http://localhost:5000/${product.image}`;

// // // // // // // // // //   // ================= SUBMIT =================
// // // // // // // // // //   const handleSubmitReview = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const token = localStorage.getItem("token");

// // // // // // // // // //       if (!token) return alert("Login required");

// // // // // // // // // //       if (editingReviewId) {
// // // // // // // // // //         await axios.put(
// // // // // // // // // //           `/reviews/${editingReviewId}`,
// // // // // // // // // //           { rating, comment },
// // // // // // // // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // // // // // // // //         );
// // // // // // // // // //       } else {
// // // // // // // // // //         await axios.post(
// // // // // // // // // //           "/reviews",
// // // // // // // // // //           { productId: id, rating, comment },
// // // // // // // // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // // // // // // // //         );
// // // // // // // // // //       }

// // // // // // // // // //       setShowForm(false);
// // // // // // // // // //       setComment("");
// // // // // // // // // //       setRating(5);
// // // // // // // // // //       setEditingReviewId(null);

// // // // // // // // // //       fetchReviews();
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // ================= DELETE =================
// // // // // // // // // //   const handleDelete = async (rid) => {
// // // // // // // // // //     await axios.delete(`/reviews/${rid}`, {
// // // // // // // // // //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // // //     });
// // // // // // // // // //     fetchReviews();
// // // // // // // // // //   };

// // // // // // // // // //   // ================= EDIT =================
// // // // // // // // // //   const handleEdit = (review) => {
// // // // // // // // // //     setShowForm(true);
// // // // // // // // // //     setRating(review.rating);
// // // // // // // // // //     setComment(review.comment);
// // // // // // // // // //     setEditingReviewId(review._id);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="bg-gray-50 min-h-screen">
// // // // // // // // // //       <div className="max-w-6xl mx-auto p-4">

// // // // // // // // // //         {/* PRODUCT */}
// // // // // // // // // //         <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
// // // // // // // // // //           <img src={imageUrl} className="h-[400px] object-contain" />

// // // // // // // // // //           <div>
// // // // // // // // // //             <h1 className="text-xl font-semibold">{product.title}</h1>
// // // // // // // // // //             <p className="text-2xl font-bold mt-2">₹{product.price}</p>

// // // // // // // // // //             <div className="flex gap-3 mt-4">
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => addToCart(product)}
// // // // // // // // // //                 className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// // // // // // // // // //               >
// // // // // // // // // //                 Add to Bag
// // // // // // // // // //               </button>

// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => addToWishlist(product)}
// // // // // // // // // //                 className="border px-4 py-3 rounded"
// // // // // // // // // //               >
// // // // // // // // // //                 ❤️
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* TABS */}
// // // // // // // // // //         <div className="bg-white mt-6 rounded shadow">
// // // // // // // // // //           <div className="flex border-b">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setActiveTab("details")}
// // // // // // // // // //               className={`px-6 py-3 ${activeTab === "details" && "border-b-2 border-pink-500"}`}
// // // // // // // // // //             >
// // // // // // // // // //               Product Details
// // // // // // // // // //             </button>

// // // // // // // // // //             <button
// // // // // // // // // //               onClick={() => setActiveTab("reviews")}
// // // // // // // // // //               className={`px-6 py-3 ${activeTab === "reviews" && "border-b-2 border-pink-500"}`}
// // // // // // // // // //             >
// // // // // // // // // //               Ratings & Reviews
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="p-6">

// // // // // // // // // //             {/* DETAILS */}
// // // // // // // // // //             {activeTab === "details" && (
// // // // // // // // // //               <p>{product.description}</p>
// // // // // // // // // //             )}

// // // // // // // // // //             {/* REVIEWS */}
// // // // // // // // // //             {activeTab === "reviews" && (
// // // // // // // // // //               <div>

// // // // // // // // // //                 {/* HEADER */}
// // // // // // // // // //                 <div className="flex justify-between mb-4">
// // // // // // // // // //                   <h2>Customer Reviews</h2>

// // // // // // // // // //                   <button
// // // // // // // // // //                     onClick={() => {
// // // // // // // // // //                       setShowForm(true);
// // // // // // // // // //                       setEditingReviewId(null);
// // // // // // // // // //                     }}
// // // // // // // // // //                     className="border px-4 py-2 text-pink-500 rounded"
// // // // // // // // // //                   >
// // // // // // // // // //                     Write Review
// // // // // // // // // //                   </button>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* FORM */}
// // // // // // // // // //                 {showForm && (
// // // // // // // // // //                   <div className="border p-4 mb-4 rounded">
// // // // // // // // // //                     <select
// // // // // // // // // //                       value={rating}
// // // // // // // // // //                       onChange={(e) => setRating(Number(e.target.value))}
// // // // // // // // // //                       className="border p-2 w-full mb-2"
// // // // // // // // // //                     >
// // // // // // // // // //                       {[5,4,3,2,1].map(r => (
// // // // // // // // // //                         <option key={r}>{r}</option>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </select>

// // // // // // // // // //                     <textarea
// // // // // // // // // //                       value={comment}
// // // // // // // // // //                       onChange={(e) => setComment(e.target.value)}
// // // // // // // // // //                       className="border p-2 w-full mb-2"
// // // // // // // // // //                     />

// // // // // // // // // //                     <button
// // // // // // // // // //                       onClick={handleSubmitReview}
// // // // // // // // // //                       className="bg-pink-500 text-white px-4 py-2 rounded"
// // // // // // // // // //                     >
// // // // // // // // // //                       {editingReviewId ? "Update" : "Submit"}
// // // // // // // // // //                     </button>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {/* LIST */}
// // // // // // // // // //                 {reviews.map((review) => {
// // // // // // // // // //                   const isOwner =
// // // // // // // // // //                     review.user?.name === userName;

// // // // // // // // // //                   return (
// // // // // // // // // //                     <div key={review._id} className="border-b py-3 flex justify-between">

// // // // // // // // // //                       <div>
// // // // // // // // // //                         <p>⭐ {review.rating}</p>
// // // // // // // // // //                         <p>{review.comment}</p>
// // // // // // // // // //                         <p className="text-xs text-gray-500">
// // // // // // // // // //                           by {review.user?.name}
// // // // // // // // // //                         </p>
// // // // // // // // // //                       </div>

// // // // // // // // // //                       {/* ✅ ICON + MENU */}
// // // // // // // // // //                       {isOwner && (
// // // // // // // // // //                         <div className="relative">

// // // // // // // // // //                           <button
// // // // // // // // // //                             onClick={() =>
// // // // // // // // // //                               setOpenMenuId(
// // // // // // // // // //                                 openMenuId === review._id ? null : review._id
// // // // // // // // // //                               )
// // // // // // // // // //                             }
// // // // // // // // // //                             className="text-lg"
// // // // // // // // // //                           >
// // // // // // // // // //                             <FiEdit />
// // // // // // // // // //                           </button>

// // // // // // // // // //                           {openMenuId === review._id && (
// // // // // // // // // //                             <div className="absolute right-0 bg-white border shadow rounded w-28">
// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={() => handleEdit(review)}
// // // // // // // // // //                                 className="block w-full text-left px-3 py-2 hover:bg-gray-100"
// // // // // // // // // //                               >
// // // // // // // // // //                                 Edit
// // // // // // // // // //                               </button>

// // // // // // // // // //                               <button
// // // // // // // // // //                                 onClick={() => handleDelete(review._id)}
// // // // // // // // // //                                 className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
// // // // // // // // // //                               >
// // // // // // // // // //                                 Delete
// // // // // // // // // //                               </button>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           )}

// // // // // // // // // //                         </div>
// // // // // // // // // //                       )}

// // // // // // // // // //                     </div>
// // // // // // // // // //                   );
// // // // // // // // // //                 })}

// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ProductDetails;




// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // import { useWishlist } from "../../context/WishlistContext";

// // // // // // // // // const ProductDetails = () => {
// // // // // // // // //   const { id } = useParams();
// // // // // // // // //   const { addToCart } = useCart();
// // // // // // // // //   const { addToWishlist } = useWishlist();

// // // // // // // // //   const [product, setProduct] = useState(null);
// // // // // // // // //   const [reviews, setReviews] = useState([]);
// // // // // // // // //   const [activeTab, setActiveTab] = useState("details");

// // // // // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // // // // //   const [rating, setRating] = useState(5);
// // // // // // // // //   const [comment, setComment] = useState("");
// // // // // // // // //   const [editingReviewId, setEditingReviewId] = useState(null);

// // // // // // // // //   const [openMenuId, setOpenMenuId] = useState(null);

// // // // // // // // //   const userId = localStorage.getItem("userId");

// // // // // // // // //   // ================= FETCH =================
// // // // // // // // //   const fetchProduct = async () => {
// // // // // // // // //     const res = await axios.get(`/products/${id}`);
// // // // // // // // //     setProduct(res.data);
// // // // // // // // //   };

// // // // // // // // //   const fetchReviews = async () => {
// // // // // // // // //     const res = await axios.get(`/reviews?productId=${id}`);
// // // // // // // // //     setReviews(res.data);
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchProduct();
// // // // // // // // //     fetchReviews();
// // // // // // // // //   }, [id]);

// // // // // // // // //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// // // // // // // // //   const imageUrl = product.image?.startsWith("http")
// // // // // // // // //     ? product.image
// // // // // // // // //     : `http://localhost:5000/${product.image}`;

// // // // // // // // //   // ================= ADD / UPDATE =================
// // // // // // // // //   const handleSubmitReview = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const token = localStorage.getItem("token");

// // // // // // // // //       if (!token) return alert("Login required");

// // // // // // // // //       if (editingReviewId) {
// // // // // // // // //         await axios.put(
// // // // // // // // //           `/reviews/${editingReviewId}`,
// // // // // // // // //           { rating, comment },
// // // // // // // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // // // // // // //         );
// // // // // // // // //       } else {
// // // // // // // // //         await axios.post(
// // // // // // // // //           "/reviews",
// // // // // // // // //           { productId: id, rating, comment },
// // // // // // // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // // // // // // //         );
// // // // // // // // //       }

// // // // // // // // //       setShowForm(false);
// // // // // // // // //       setComment("");
// // // // // // // // //       setRating(5);
// // // // // // // // //       setEditingReviewId(null);

// // // // // // // // //       fetchReviews();
// // // // // // // // //     } catch (err) {
// // // // // // // // //       alert(err.response?.data?.message || "Error");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // ================= DELETE =================
// // // // // // // // //   const handleDelete = async (rid) => {
// // // // // // // // //     await axios.delete(`/reviews/${rid}`, {
// // // // // // // // //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // //     });
// // // // // // // // //     fetchReviews();
// // // // // // // // //   };

// // // // // // // // //   // ================= EDIT =================
// // // // // // // // //   const handleEdit = (review) => {
// // // // // // // // //     setShowForm(true);
// // // // // // // // //     setRating(review.rating);
// // // // // // // // //     setComment(review.comment);
// // // // // // // // //     setEditingReviewId(review._id);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="bg-gray-50 min-h-screen">
// // // // // // // // //       <div className="max-w-6xl mx-auto p-4">

// // // // // // // // //         {/* PRODUCT */}
// // // // // // // // //         <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
// // // // // // // // //           <img src={imageUrl} className="h-[400px] object-contain" />

// // // // // // // // //           <div>
// // // // // // // // //             <h1 className="text-xl font-semibold">{product.title}</h1>
// // // // // // // // //             <p className="text-2xl font-bold mt-2">₹{product.price}</p>

// // // // // // // // //             <div className="flex gap-3 mt-4">
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => addToCart(product)}
// // // // // // // // //                 className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// // // // // // // // //               >
// // // // // // // // //                 Add to Bag
// // // // // // // // //               </button>

// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => addToWishlist(product)}
// // // // // // // // //                 className="border px-4 py-3 rounded"
// // // // // // // // //               >
// // // // // // // // //                 ❤️
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* TABS */}
// // // // // // // // //         <div className="bg-white mt-6 rounded shadow">
// // // // // // // // //           <div className="flex border-b">
// // // // // // // // //             <button
// // // // // // // // //               onClick={() => setActiveTab("details")}
// // // // // // // // //               className={`px-6 py-3 ${activeTab === "details" && "border-b-2 border-pink-500"}`}
// // // // // // // // //             >
// // // // // // // // //               Product Details
// // // // // // // // //             </button>

// // // // // // // // //             <button
// // // // // // // // //               onClick={() => setActiveTab("reviews")}
// // // // // // // // //               className={`px-6 py-3 ${activeTab === "reviews" && "border-b-2 border-pink-500"}`}
// // // // // // // // //             >
// // // // // // // // //               Ratings & Reviews
// // // // // // // // //             </button>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="p-6">

// // // // // // // // //             {/* DETAILS */}
// // // // // // // // //             {activeTab === "details" && (
// // // // // // // // //               <p>{product.description}</p>
// // // // // // // // //             )}

// // // // // // // // //             {/* REVIEWS */}
// // // // // // // // //             {activeTab === "reviews" && (
// // // // // // // // //               <div>

// // // // // // // // //                 {/* HEADER */}
// // // // // // // // //                 <div className="flex justify-between mb-4">
// // // // // // // // //                   <h2>Customer Reviews</h2>

// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => {
// // // // // // // // //                       setShowForm(true);
// // // // // // // // //                       setEditingReviewId(null);
// // // // // // // // //                     }}
// // // // // // // // //                     className="border px-4 py-2 text-pink-500 rounded"
// // // // // // // // //                   >
// // // // // // // // //                     Write Review
// // // // // // // // //                   </button>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* FORM */}
// // // // // // // // //                 {showForm && (
// // // // // // // // //                   <div className="border p-4 mb-4 rounded">
// // // // // // // // //                     <select
// // // // // // // // //                       value={rating}
// // // // // // // // //                       onChange={(e) => setRating(Number(e.target.value))}
// // // // // // // // //                       className="border p-2 w-full mb-2"
// // // // // // // // //                     >
// // // // // // // // //                       {[5,4,3,2,1].map(r => (
// // // // // // // // //                         <option key={r}>{r}</option>
// // // // // // // // //                       ))}
// // // // // // // // //                     </select>

// // // // // // // // //                     <textarea
// // // // // // // // //                       value={comment}
// // // // // // // // //                       onChange={(e) => setComment(e.target.value)}
// // // // // // // // //                       className="border p-2 w-full mb-2"
// // // // // // // // //                     />

// // // // // // // // //                     <button
// // // // // // // // //                       onClick={handleSubmitReview}
// // // // // // // // //                       className="bg-pink-500 text-white px-4 py-2 rounded"
// // // // // // // // //                     >
// // // // // // // // //                       {editingReviewId ? "Update" : "Submit"}
// // // // // // // // //                     </button>
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {/* LIST */}
// // // // // // // // //                 {reviews.map((review) => {

// // // // // // // // //                   // ✅ FINAL OWNER CHECK (WORKING)
// // // // // // // // //                   const isOwner =
// // // // // // // // //                     String(review.user?._id || review.user) === String(userId);

// // // // // // // // //                   return (
// // // // // // // // //                     <div key={review._id} className="border-b py-3 flex justify-between">

// // // // // // // // //                       <div>
// // // // // // // // //                         <p>⭐ {review.rating}</p>
// // // // // // // // //                         <p>{review.comment}</p>
// // // // // // // // //                         <p className="text-xs text-gray-500">
// // // // // // // // //                           by {review.user?.name || "User"}
// // // // // // // // //                         </p>
// // // // // // // // //                       </div>

// // // // // // // // //                       {/* ✅ ALWAYS WORKING EDIT ICON */}
// // // // // // // // //                       {isOwner && (
// // // // // // // // //                         <div className="relative">

// // // // // // // // //                           <button
// // // // // // // // //                             onClick={() =>
// // // // // // // // //                               setOpenMenuId(
// // // // // // // // //                                 openMenuId === review._id ? null : review._id
// // // // // // // // //                               )
// // // // // // // // //                             }
// // // // // // // // //                             className="text-xl"
// // // // // // // // //                           >
// // // // // // // // //                             ✏️
// // // // // // // // //                           </button>

// // // // // // // // //                           {openMenuId === review._id && (
// // // // // // // // //                             <div className="absolute right-0 bg-white border shadow rounded w-28 z-10">
// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={() => handleEdit(review)}
// // // // // // // // //                                 className="block w-full text-left px-3 py-2 hover:bg-gray-100"
// // // // // // // // //                               >
// // // // // // // // //                                 Edit
// // // // // // // // //                               </button>

// // // // // // // // //                               <button
// // // // // // // // //                                 onClick={() => handleDelete(review._id)}
// // // // // // // // //                                 className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
// // // // // // // // //                               >
// // // // // // // // //                                 Delete
// // // // // // // // //                               </button>
// // // // // // // // //                             </div>
// // // // // // // // //                           )}

// // // // // // // // //                         </div>
// // // // // // // // //                       )}

// // // // // // // // //                     </div>
// // // // // // // // //                   );
// // // // // // // // //                 })}

// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ProductDetails;




// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useParams } from "react-router-dom";
// // // // // // import axios from "../../utils/axios";
// // // // // // import { useCart } from "../../context/CartContext";
// // // // // // import { useWishlist } from "../../context/WishlistContext";

// // // // // // const ProductDetails = () => {
// // // // // //   const { id } = useParams();
// // // // // //   const { addToCart } = useCart();
// // // // // //   const { addToWishlist } = useWishlist();

// // // // // //   const [product, setProduct] = useState(null);
// // // // // //   const [reviews, setReviews] = useState([]);
// // // // // //   const [activeTab, setActiveTab] = useState("details");

// // // // // //   const [showForm, setShowForm] = useState(false);
// // // // // //   const [rating, setRating] = useState(5);
// // // // // //   const [comment, setComment] = useState("");
// // // // // //   const [editingReviewId, setEditingReviewId] = useState(null);

// // // // // //   const [openMenuId, setOpenMenuId] = useState(null);

// // // // // //   const userId = localStorage.getItem("userId");

// // // // // //   // ================= FETCH =================
// // // // // //   const fetchProduct = async () => {
// // // // // //     const res = await axios.get(`/products/${id}`);
// // // // // //     setProduct(res.data);
// // // // // //   };

// // // // // //   const fetchReviews = async () => {
// // // // // //     const res = await axios.get(`/reviews?productId=${id}`);
// // // // // //     setReviews(res.data);
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchProduct();
// // // // // //     fetchReviews();
// // // // // //   }, [id]);

// // // // // //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// // // // // //   // ✅ FIX IMAGE: use images[0] from your schema
// // // // // // //   const backendURL =
// // // // // // //     import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// // // // // // //   const imageUrl =
// // // // // // //     product.images && product.images[0]
// // // // // // //       ? product.images[0].startsWith("http")
// // // // // // //         ? product.images[0]
// // // // // // //         : `${backendURL}/uploads/${product.images[0]}`
// // // // // // //       : "/placeholder.png";

// // // // // // const backendURL =
// // // // // //   import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// // // // // // const imageUrl =
// // // // // //   product.images && product.images[0]
// // // // // //     ? product.images[0].startsWith("http")
// // // // // //       ? product.images[0]
// // // // // //       : product.images[0].startsWith("/uploads/")
// // // // // //         ? `${backendURL}${product.images[0]}`
// // // // // //         : `${backendURL}/uploads/${product.images[0]}`
// // // // // //     : "/placeholder.png"; // fallback

// // // // // //   // ================= ADD / UPDATE =================
// // // // // //   const handleSubmitReview = async () => {
// // // // // //     try {
// // // // // //       const token = localStorage.getItem("token");

// // // // // //       if (!token) return alert("Login required");

// // // // // //       if (editingReviewId) {
// // // // // //         await axios.put(
// // // // // //           `/reviews/${editingReviewId}`,
// // // // // //           { rating, comment },
// // // // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // // // //         );
// // // // // //       } else {
// // // // // //         await axios.post(
// // // // // //           "/reviews",
// // // // // //           { productId: id, rating, comment },
// // // // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // // // //         );
// // // // // //       }

// // // // // //       setShowForm(false);
// // // // // //       setComment("");
// // // // // //       setRating(5);
// // // // // //       setEditingReviewId(null);

// // // // // //       fetchReviews();
// // // // // //     } catch (err) {
// // // // // //       alert(err.response?.data?.message || "Error");
// // // // // //     }
// // // // // //   };

// // // // // //   // ================= DELETE =================
// // // // // //   const handleDelete = async (rid) => {
// // // // // //     await axios.delete(`/reviews/${rid}`, {
// // // // // //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // //     });
// // // // // //     fetchReviews();
// // // // // //   };

// // // // // //   // ================= EDIT =================
// // // // // //   const handleEdit = (review) => {
// // // // // //     setShowForm(true);
// // // // // //     setRating(review.rating);
// // // // // //     setComment(review.comment);
// // // // // //     setEditingReviewId(review._id);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-gray-50 min-h-screen">
// // // // // //       <div className="max-w-6xl mx-auto p-4">

// // // // // //         {/* PRODUCT */}
// // // // // //         <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">

// // // // // //           {/* LEFT SIDE IMAGE */}
// // // // // //           <img
// // // // // //             src={imageUrl}
// // // // // //             alt={product.title}
// // // // // //             className="h-[400px] w-full object-contain"
// // // // // //           />

// // // // // //           {/* RIGHT SIDE CONTENT */}
// // // // // //           <div className="flex flex-col justify-start">
// // // // // //             <h1 className="text-xl font-semibold">{product.title}</h1>

// // // // // //             {/* ✅ ADD DESCRIPTION BELOW TITLE */}
// // // // // //             <p className="text-gray-700 mt-2">{product.description}</p>

// // // // // //             <p className="text-2xl font-bold mt-2">₹{product.price}</p>

// // // // // //             <div className="flex gap-3 mt-4">
// // // // // //               <button
// // // // // //                 onClick={() => addToCart(product)}
// // // // // //                 className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// // // // // //               >
// // // // // //                 Add to Bag
// // // // // //               </button>

// // // // // //               <button
// // // // // //                 onClick={() => addToWishlist(product)}
// // // // // //                 className="border px-4 py-3 rounded"
// // // // // //               >
// // // // // //                 ❤️
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* TABS (DETAILS & REVIEWS) */}
// // // // // //         <div className="bg-white mt-6 rounded shadow">
// // // // // //           <div className="flex border-b">
// // // // // //             <button
// // // // // //               onClick={() => setActiveTab("details")}
// // // // // //               className={`px-6 py-3 ${activeTab === "details" && "border-b-2 border-pink-500"}`}
// // // // // //             >
// // // // // //               Product Details
// // // // // //             </button>

// // // // // //             <button
// // // // // //               onClick={() => setActiveTab("reviews")}
// // // // // //               className={`px-6 py-3 ${activeTab === "reviews" && "border-b-2 border-pink-500"}`}
// // // // // //             >
// // // // // //               Ratings & Reviews
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           <div className="p-6">
// // // // // //             {/* DETAILS */}
// // // // // //             {activeTab === "details" && <p>{product.description}</p>}

// // // // // //             {/* REVIEWS */}
// // // // // //             {activeTab === "reviews" && (
// // // // // //               <div>
// // // // // //                 {/* HEADER */}
// // // // // //                 <div className="flex justify-between mb-4">
// // // // // //                   <h2>Customer Reviews</h2>
// // // // // //                   <button
// // // // // //                     onClick={() => {
// // // // // //                       setShowForm(true);
// // // // // //                       setEditingReviewId(null);
// // // // // //                     }}
// // // // // //                     className="border px-4 py-2 text-pink-500 rounded"
// // // // // //                   >
// // // // // //                     Write Review
// // // // // //                   </button>
// // // // // //                 </div>

// // // // // //                 {/* FORM */}
// // // // // //                 {showForm && (
// // // // // //                   <div className="border p-4 mb-4 rounded">
// // // // // //                     <select
// // // // // //                       value={rating}
// // // // // //                       onChange={(e) => setRating(Number(e.target.value))}
// // // // // //                       className="border p-2 w-full mb-2"
// // // // // //                     >
// // // // // //                       {[5,4,3,2,1].map(r => <option key={r}>{r}</option>)}
// // // // // //                     </select>

// // // // // //                     <textarea
// // // // // //                       value={comment}
// // // // // //                       onChange={(e) => setComment(e.target.value)}
// // // // // //                       className="border p-2 w-full mb-2"
// // // // // //                     />

// // // // // //                     <button
// // // // // //                       onClick={handleSubmitReview}
// // // // // //                       className="bg-pink-500 text-white px-4 py-2 rounded"
// // // // // //                     >
// // // // // //                       {editingReviewId ? "Update" : "Submit"}
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {/* LIST */}
// // // // // //                 {reviews.map((review) => {
// // // // // //                   const isOwner = String(review.user?._id || review.user) === String(userId);

// // // // // //                   return (
// // // // // //                     <div key={review._id} className="border-b py-3 flex justify-between">
// // // // // //                       <div>
// // // // // //                         <p>⭐ {review.rating}</p>
// // // // // //                         <p>{review.comment}</p>
// // // // // //                         <p className="text-xs text-gray-500">by {review.user?.name || "User"}</p>
// // // // // //                       </div>

// // // // // //                       {isOwner && (
// // // // // //                         <div className="relative">
// // // // // //                           <button
// // // // // //                             onClick={() => setOpenMenuId(openMenuId === review._id ? null : review._id)}
// // // // // //                             className="text-xl"
// // // // // //                           >
// // // // // //                             ✏️
// // // // // //                           </button>

// // // // // //                           {openMenuId === review._id && (
// // // // // //                             <div className="absolute right-0 bg-white border shadow rounded w-28 z-10">
// // // // // //                               <button
// // // // // //                                 onClick={() => handleEdit(review)}
// // // // // //                                 className="block w-full text-left px-3 py-2 hover:bg-gray-100"
// // // // // //                               >
// // // // // //                                 Edit
// // // // // //                               </button>

// // // // // //                               <button
// // // // // //                                 onClick={() => handleDelete(review._id)}
// // // // // //                                 className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
// // // // // //                               >
// // // // // //                                 Delete
// // // // // //                               </button>
// // // // // //                             </div>
// // // // // //                           )}
// // // // // //                         </div>
// // // // // //                       )}
// // // // // //                     </div>
// // // // // //                   );
// // // // // //                 })}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ProductDetails;

// // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // import { useParams } from "react-router-dom";
// // // // // // // // import axios from "../../utils/axios";
// // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // import { useWishlist } from "../../context/WishlistContext";

// // // // // // // // const ProductDetails = () => {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const { addToCart } = useCart();
// // // // // // // //   const { addToWishlist } = useWishlist();

// // // // // // // //   const [product, setProduct] = useState(null);

// // // // // // // //   const backendURL =
// // // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // // //     "https://ecommerce-mern-backend-1.onrender.com/api";

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchProduct = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get(`${backendURL}/products/${id}`);
// // // // // // // //         const data = res.data;

// // // // // // // //         // Fix images
// // // // // // // //         setProduct({
// // // // // // // //           ...data,
// // // // // // // //           image:
// // // // // // // //             data.images?.[0]?.startsWith("http")
// // // // // // // //               ? data.images[0]
// // // // // // // //               : `${backendURL}/uploads/${data.images[0]}`,
// // // // // // // //         });
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Fetch product error:", err);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchProduct();
// // // // // // // //   }, [id]);

// // // // // // // //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// // // // // // // //   return (
// // // // // // // //     <div className="bg-gray-50 min-h-screen p-4">
// // // // // // // //       <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
// // // // // // // //         <img
// // // // // // // //           src={product.image}
// // // // // // // //           alt={product.title}
// // // // // // // //           className="h-[400px] w-full object-contain"
// // // // // // // //         />
// // // // // // // //         <div className="flex flex-col justify-start">
// // // // // // // //           <h1 className="text-xl font-semibold">{product.title}</h1>
// // // // // // // //           <p className="text-gray-700 mt-2">{product.description}</p>
// // // // // // // //           <p className="text-2xl font-bold mt-2">₹{product.price}</p>
// // // // // // // //           <div className="flex gap-3 mt-4">
// // // // // // // //             <button
// // // // // // // //               onClick={() => addToCart(product)}
// // // // // // // //               className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// // // // // // // //             >
// // // // // // // //               Add to Bag
// // // // // // // //             </button>
// // // // // // // //             <button
// // // // // // // //               onClick={() => addToWishlist(product)}
// // // // // // // //               className="border px-4 py-3 rounded"
// // // // // // // //             >
// // // // // // // //               ❤️
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ProductDetails;


// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { useParams } from "react-router-dom";
// // // // // // // import axios from "../../utils/axios";
// // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // import { useWishlist } from "../../context/WishlistContext";

// // // // // // // const ProductDetails = () => {
// // // // // // //   const { id } = useParams();
// // // // // // //   const { addToCart } = useCart();
// // // // // // //   const { addToWishlist } = useWishlist();

// // // // // // //   const [product, setProduct] = useState(null);

// // // // // // //   // ✅ Correct backend URL (your new Render URL)
// // // // // // //   const BASE_URL =
// // // // // // //     import.meta.env.VITE_BACKEND_URL ||
// // // // // // //     "https://ecommerce-mern-backend-2-t4ku.onrender.com";

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchProduct = async () => {
// // // // // // //       try {
// // // // // // //         // full endpoint
// // // // // // //         const res = await axios.get(`${BASE_URL}/api/products/${id}`);
// // // // // // //         const data = res.data;

// // // // // // //         // Fix image URL
// // // // // // //         setProduct({
// // // // // // //           ...data,
// // // // // // //           image:
// // // // // // //             data.images?.[0]?.startsWith("http")
// // // // // // //               ? data.images[0]
// // // // // // //               : `${BASE_URL}/uploads/${data.images[0]}`,
// // // // // // //         });
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Fetch product error:", err);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchProduct();
// // // // // // //   }, [id, BASE_URL]);

// // // // // // //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// // // // // // //   return (
// // // // // // //     <div className="bg-gray-50 min-h-screen p-4">
// // // // // // //       <div className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded shadow">
// // // // // // //         <img
// // // // // // //           src={product.image}
// // // // // // //           alt={product.title}
// // // // // // //           className="h-[400px] w-full object-contain"
// // // // // // //         />
// // // // // // //         <div className="flex flex-col justify-start">
// // // // // // //           <h1 className="text-xl font-semibold">{product.title}</h1>
// // // // // // //           <p className="text-gray-700 mt-2">{product.description}</p>
// // // // // // //           <p className="text-2xl font-bold mt-2">₹{product.price}</p>
// // // // // // //           <div className="flex gap-3 mt-4">
// // // // // // //             <button
// // // // // // //               onClick={() => addToCart({ ...product, quantity: 1 })}
// // // // // // //               className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// // // // // // //             >
// // // // // // //               Add to Bag
// // // // // // //             </button>
// // // // // // //             <button
// // // // // // //               onClick={() => addToWishlist(product)}
// // // // // // //               className="border px-4 py-3 rounded"
// // // // // // //             >
// // // // // // //               ❤️
// // // // // // //             </button>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ProductDetails;


// // // // import React, { useEffect, useState } from "react";
// // // // import { useParams } from "react-router-dom";
// // // // import axios from "../../utils/axios";
// // // // import { useCart } from "../../context/CartContext";
// // // // import { useWishlist } from "../../context/WishlistContext";

// // // // const ProductDetails = () => {
// // // //   const { id } = useParams();
// // // //   const { addToCart } = useCart();
// // // //   const { addToWishlist } = useWishlist();

// // // //   const [product, setProduct] = useState(null);
// // // //   const [reviews, setReviews] = useState([]);
// // // //   const [activeTab, setActiveTab] = useState("details");
// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [rating, setRating] = useState(5);
// // // //   const [comment, setComment] = useState("");
// // // //   const [editingReviewId, setEditingReviewId] = useState(null);

// // // //   // ✅ Safe user id
// // // //   const userId = String(localStorage.getItem("userId") || "");

// // // //   // ✅ Correct backend URL
// // // //   const BASE_URL =
// // // //     import.meta.env.VITE_BACKEND_URL ||
// // // //     "https://ecommerce-mern-backend-1.onrender.com";

// // // //   // ================= FETCH PRODUCT =================
// // // //   const fetchProduct = async () => {
// // // //     try {
// // // //       const res = await axios.get(`${BASE_URL}/api/products/${id}`);
// // // //       const data = res.data;

// // // //       // Fix image URL
// // // //       setProduct({
// // // //         ...data,
// // // //         image:
// // // //           data.images && data.images[0]
// // // //             ? data.images[0].startsWith("http")
// // // //               ? data.images[0]
// // // //               : `${BASE_URL}/uploads/${data.images[0]}`
// // // //             : "/placeholder.png",
// // // //       });
// // // //     } catch (err) {
// // // //       console.error("Fetch product error:", err);
// // // //     }
// // // //   };

// // // //   // ================= FETCH REVIEWS =================
// // // //   const fetchReviews = async () => {
// // // //     try {
// // // //       const res = await axios.get(`${BASE_URL}/api/reviews?productId=${id}`);
// // // //       setReviews(res.data);
// // // //     } catch (err) {
// // // //       console.error("Fetch reviews error:", err);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchProduct();
// // // //     fetchReviews();
// // // //   }, [id]);

// // // //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// // // //   const imageUrl = product.image;

// // // //   // ================= ADD / UPDATE =================
// // // //   const handleSubmitReview = async () => {
// // // //     try {
// // // //       const token = localStorage.getItem("token");

// // // //       if (!token) {
// // // //         alert("Please login first");
// // // //         return;
// // // //       }

// // // //       if (!comment.trim()) {
// // // //         alert("Please write review");
// // // //         return;
// // // //       }

// // // //       if (editingReviewId) {
// // // //         await axios.put(
// // // //           `${BASE_URL}/api/reviews/${editingReviewId}`,
// // // //           { rating: Number(rating), comment },
// // // //           {
// // // //             headers: { Authorization: `Bearer ${token}` },
// // // //           }
// // // //         );
// // // //       } else {
// // // //         await axios.post(
// // // //           `${BASE_URL}/api/reviews`,
// // // //           { productId: id, rating: Number(rating), comment },
// // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // //         );
// // // //       }

// // // //       alert("Review submitted successfully!");
// // // //       setShowForm(false);
// // // //       setComment("");
// // // //       setRating(5);
// // // //       setEditingReviewId(null);

// // // //       fetchReviews();
// // // //     } catch (err) {
// // // //       console.error("REVIEW ERROR:", err.response?.data || err.message);
// // // //       alert(err.response?.data?.message || "Review failed");
// // // //     }
// // // //   };

// // // //   // ================= DELETE =================
// // // //   const handleDelete = async (reviewId) => {
// // // //     try {
// // // //       await axios.delete(`${BASE_URL}/api/reviews/${reviewId}`, {
// // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // //       });
// // // //       fetchReviews();
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   // ================= EDIT =================
// // // //   const handleEdit = (review) => {
// // // //     setShowForm(true);
// // // //     setRating(review.rating);
// // // //     setComment(review.comment);
// // // //     setEditingReviewId(review._id);
// // // //   };

// // // //   return (
// // // //     <div className="bg-gray-50 min-h-screen">
// // // //       <div className="max-w-6xl mx-auto p-4">

// // // //         {/* TOP */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
// // // //           <img src={imageUrl} alt={product.title} className="h-[400px] w-full object-contain" />

// // // //           <div>
// // // //             <h1 className="text-xl font-semibold">{product.title}</h1>
// // // //             <p className="text-gray-700 mt-2">{product.description}</p>
// // // //             <p className="text-2xl font-bold mt-2">₹{product.price}</p>

// // // //             <div className="flex gap-3 mt-4">
// // // //               <button
// // // //                 onClick={() => addToCart({ ...product, quantity: 1 })}
// // // //                 className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// // // //               >
// // // //                 Add to Bag
// // // //               </button>

// // // //               <button
// // // //                 onClick={() => addToWishlist(product)}
// // // //                 className="border px-4 py-3 rounded"
// // // //               >
// // // //                 ❤️
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* TABS */}
// // // //         <div className="bg-white mt-6 rounded-lg shadow">
// // // //           <div className="flex border-b">
// // // //             <button
// // // //               onClick={() => setActiveTab("details")}
// // // //               className={`px-6 py-3 ${activeTab === "details" && "border-b-2 border-pink-500"}`}
// // // //             >
// // // //               Product Details
// // // //             </button>

// // // //             <button
// // // //               onClick={() => setActiveTab("reviews")}
// // // //               className={`px-6 py-3 ${activeTab === "reviews" && "border-b-2 border-pink-500"}`}
// // // //             >
// // // //               Ratings & Reviews
// // // //             </button>
// // // //           </div>

// // // //           <div className="p-6">
// // // //             {/* DETAILS */}
// // // //             {activeTab === "details" && <p className="text-gray-600">{product.description}</p>}

// // // //             {/* REVIEWS */}
// // // //             {activeTab === "reviews" && (
// // // //               <div>
// // // //                 <div className="flex justify-between mb-4">
// // // //                   <h2 className="font-semibold">Customer Reviews</h2>

// // // //                   <button
// // // //                     onClick={() => { setShowForm(true); setEditingReviewId(null); setComment(""); setRating(5); }}
// // // //                     className="border px-4 py-2 text-pink-500 rounded"
// // // //                   >
// // // //                     Write Review
// // // //                   </button>
// // // //                 </div>

// // // //                 {/* FORM */}
// // // //                 {showForm && (
// // // //                   <div className="border p-4 mb-4 rounded">
// // // //                     <select
// // // //                       value={rating}
// // // //                       onChange={(e) => setRating(Number(e.target.value))}
// // // //                       className="border p-2 mb-2 w-full"
// // // //                     >
// // // //                       {[5, 4, 3, 2, 1].map((r) => (
// // // //                         <option key={r} value={r}>{r} Stars</option>
// // // //                       ))}
// // // //                     </select>

// // // //                     <textarea
// // // //                       value={comment}
// // // //                       onChange={(e) => setComment(e.target.value)}
// // // //                       placeholder="Write your review..."
// // // //                       className="border p-2 w-full mb-2"
// // // //                     />

// // // //                     <button
// // // //                       onClick={handleSubmitReview}
// // // //                       className="bg-pink-500 text-white px-4 py-2 rounded"
// // // //                     >
// // // //                       {editingReviewId ? "Update Review" : "Submit Review"}
// // // //                     </button>
// // // //                   </div>
// // // //                 )}

// // // //                 {/* LIST */}
// // // //                 {reviews.length === 0 && <p>No reviews yet</p>}

// // // //                 {reviews.map((review) => (
// // // //                   <div key={review._id} className="border-b py-3 flex justify-between">
// // // //                     <div>
// // // //                       <p className="font-semibold">⭐ {review.rating}</p>
// // // //                       <p>{review.comment}</p>
// // // //                       <p className="text-xs text-gray-500">by {review.user?.name || "Anonymous"}</p>
// // // //                     </div>

// // // //                     {String(review.user?._id) === userId && (
// // // //                       <div className="flex gap-2">
// // // //                         <button onClick={() => handleEdit(review)} className="text-blue-500">Edit</button>
// // // //                         <button onClick={() => handleDelete(review._id)} className="text-red-500">Delete</button>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductDetails;



// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "../../utils/axios";
// // import { useCart } from "../../context/CartContext";
// // import { useWishlist } from "../../context/WishlistContext";

// // const ProductDetails = () => {
// //   const { id } = useParams();
// //   const { addToCart } = useCart();
// //   const { addToWishlist } = useWishlist();

// //   const [product, setProduct] = useState(null);
// //   const [reviews, setReviews] = useState([]);
// //   const [activeTab, setActiveTab] = useState("details");

// //   const [showForm, setShowForm] = useState(false);
// //   const [rating, setRating] = useState(5);
// //   const [comment, setComment] = useState("");
// //   const [editingReviewId, setEditingReviewId] = useState(null);

// //   // ✅ Use the old backend URL style
// //   const backendURL =
// //     import.meta.env.VITE_BACKEND_URL ||
// //     "https://ecommerce-mern-backend-1.onrender.com";

// //   // ✅ Safe user ID
// //   const userId = String(localStorage.getItem("userId") || "");

// //   // ================= FETCH PRODUCT =================
// //   const fetchProduct = async () => {
// //     try {
// //       const res = await axios.get(`${backendURL}/api/products/${id}`);
// //       setProduct(res.data);
// //     } catch (err) {
// //       console.error("Fetch product error:", err);
// //     }
// //   };

// //   // ================= FETCH REVIEWS =================
// //   const fetchReviews = async () => {
// //     try {
// //       const res = await axios.get(`${backendURL}/api/reviews?productId=${id}`);
// //       setReviews(res.data);
// //     } catch (err) {
// //       console.error("Fetch reviews error:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProduct();
// //     fetchReviews();
// //   }, [id]);

// //   if (!product) return <div className="p-10 text-center">Loading...</div>;

// //   // ================= IMAGE URL =================
// //   const imageUrl =
// //     product.images && product.images[0]
// //       ? product.images[0].startsWith("http")
// //         ? product.images[0]
// //         : product.images[0].startsWith("/uploads/")
// //         ? `${backendURL}${product.images[0]}`
// //         : `${backendURL}/uploads/${product.images[0]}`
// //       : "/placeholder.png";

// //   // ================= ADD / UPDATE REVIEW =================
// //   const handleSubmitReview = async () => {
// //     try {
// //       const token = localStorage.getItem("token");

// //       if (!token) {
// //         alert("Please login first");
// //         return;
// //       }

// //       if (!comment.trim()) {
// //         alert("Please write a review");
// //         return;
// //       }

// //       if (editingReviewId) {
// //         await axios.put(
// //           `${backendURL}/api/reviews/${editingReviewId}`,
// //           { rating: Number(rating), comment },
// //           {
// //             headers: { Authorization: `Bearer ${token}` },
// //           }
// //         );
// //       } else {
// //         await axios.post(
// //           `${backendURL}/api/reviews`,
// //           { productId: id, rating: Number(rating), comment },
// //           {
// //             headers: { Authorization: `Bearer ${token}` },
// //           }
// //         );
// //       }

// //       alert("Review submitted successfully!");
// //       setShowForm(false);
// //       setComment("");
// //       setRating(5);
// //       setEditingReviewId(null);
// //       fetchReviews();
// //     } catch (err) {
// //       console.error("Review error:", err.response?.data || err.message);
// //       alert(err.response?.data?.message || "Review failed");
// //     }
// //   };

// //   // ================= DELETE REVIEW =================
// //   const handleDelete = async (reviewId) => {
// //     try {
// //       await axios.delete(`${backendURL}/api/reviews/${reviewId}`, {
// //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //       });
// //       fetchReviews();
// //     } catch (err) {
// //       console.error("Delete review error:", err);
// //     }
// //   };

// //   // ================= EDIT REVIEW =================
// //   const handleEdit = (review) => {
// //     setShowForm(true);
// //     setRating(review.rating);
// //     setComment(review.comment);
// //     setEditingReviewId(review._id);
// //   };

// //   return (
// //     <div className="bg-gray-50 min-h-screen">
// //       <div className="max-w-6xl mx-auto p-4">

// //         {/* TOP SECTION */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
// //           <img
// //             src={imageUrl}
// //             alt={product.title}
// //             className="h-[400px] w-full object-contain"
// //           />

// //           <div>
// //             <h1 className="text-xl font-semibold">{product.title}</h1>
// //             <p className="text-gray-600 mt-2">{product.description}</p>
// //             <p className="text-2xl font-bold mt-2">₹{product.price}</p>

// //             <div className="flex gap-3 mt-4">
// //               <button
// //                 onClick={() => addToCart({ ...product, quantity: 1 })}
// //                 className="bg-pink-500 text-white px-6 py-3 rounded w-full"
// //               >
// //                 Add to Bag
// //               </button>
// //               <button
// //                 onClick={() => addToWishlist(product)}
// //                 className="border px-4 py-3 rounded"
// //               >
// //                 ❤️
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* TABS SECTION */}
// //         <div className="bg-white mt-6 rounded-lg shadow">
// //           <div className="flex border-b">
// //             <button
// //               onClick={() => setActiveTab("details")}
// //               className={`px-6 py-3 ${
// //                 activeTab === "details" && "border-b-2 border-pink-500"
// //               }`}
// //             >
// //               Product Details
// //             </button>
// //             <button
// //               onClick={() => setActiveTab("reviews")}
// //               className={`px-6 py-3 ${
// //                 activeTab === "reviews" && "border-b-2 border-pink-500"
// //               }`}
// //             >
// //               Ratings & Reviews
// //             </button>
// //           </div>

// //           <div className="p-6">
// //             {/* DETAILS */}
// //             {activeTab === "details" && (
// //               <p className="text-gray-600">{product.description}</p>
// //             )}

// //             {/* REVIEWS */}
// //             {activeTab === "reviews" && (
// //               <div>
// //                 {/* HEADER */}
// //                 <div className="flex justify-between mb-4">
// //                   <h2 className="font-semibold">Customer Reviews</h2>
// //                   <button
// //                     onClick={() => {
// //                       setShowForm(true);
// //                       setEditingReviewId(null);
// //                       setComment("");
// //                       setRating(5);
// //                     }}
// //                     className="border px-4 py-2 text-pink-500 rounded"
// //                   >
// //                     Write Review
// //                   </button>
// //                 </div>

// //                 {/* REVIEW FORM */}
// //                 {showForm && (
// //                   <div className="border p-4 mb-4 rounded">
// //                     <select
// //                       value={rating}
// //                       onChange={(e) => setRating(Number(e.target.value))}
// //                       className="border p-2 mb-2 w-full"
// //                     >
// //                       {[5, 4, 3, 2, 1].map((r) => (
// //                         <option key={r} value={r}>
// //                           {r} Stars
// //                         </option>
// //                       ))}
// //                     </select>

// //                     <textarea
// //                       value={comment}
// //                       onChange={(e) => setComment(e.target.value)}
// //                       placeholder="Write your review..."
// //                       className="border p-2 w-full mb-2"
// //                     />

// //                     <button
// //                       onClick={handleSubmitReview}
// //                       className="bg-pink-500 text-white px-4 py-2 rounded"
// //                     >
// //                       {editingReviewId ? "Update Review" : "Submit Review"}
// //                     </button>
// //                   </div>
// //                 )}

// //                 {/* REVIEW LIST */}
// //                 {reviews.length === 0 && <p>No reviews yet</p>}

// //                 {reviews.map((review) => (
// //                   <div
// //                     key={review._id}
// //                     className="border-b py-3 flex justify-between"
// //                   >
// //                     <div>
// //                       <p className="font-semibold">⭐ {review.rating}</p>
// //                       <p>{review.comment}</p>
// //                       <p className="text-xs text-gray-500">
// //                         by {review.user?.name}
// //                       </p>
// //                     </div>

// //                     {/* EDIT / DELETE FOR OWNER */}
// //                     {String(review.user?._id) === userId && (
// //                       <div className="flex gap-2">
// //                         <button
// //                           onClick={() => handleEdit(review)}
// //                           className="text-blue-500"
// //                         >
// //                           Edit
// //                         </button>
// //                         <button
// //                           onClick={() => handleDelete(review._id)}
// //                           className="text-red-500"
// //                         >
// //                           Delete
// //                         </button>
// //                       </div>
// //                     )}
// //                   </div>
// //                 ))}

// //               </div>
// //             )}
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

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();

//   const [product, setProduct] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [activeTab, setActiveTab] = useState("details");

//   const [showForm, setShowForm] = useState(false);
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [editingReviewId, setEditingReviewId] = useState(null);

//   const backendURL =
//     import.meta.env.VITE_BACKEND_URL ||
//     "https://ecommerce-mern-backend-1.onrender.com";

//   // ✅ FIX: get userId from stored user
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
//   const userId = storedUser?._id;

//   // ================= FETCH PRODUCT =================
//   const fetchProduct = async () => {
//     try {
//       const res = await axios.get(`${backendURL}/api/products/${id}`);
//       setProduct(res.data);
//     } catch (err) {
//       console.error("Fetch product error:", err);
//     }
//   };

//   // ================= FETCH REVIEWS =================
//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get(`${backendURL}/api/reviews?productId=${id}`);
//       setReviews(res.data);
//     } catch (err) {
//       console.error("Fetch reviews error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//     fetchReviews();
//   }, [id]);

//   if (!product) return <div className="p-10 text-center">Loading...</div>;

//   // ================= IMAGE =================
//   const imageUrl =
//     product.images && product.images[0]
//       ? product.images[0].startsWith("http")
//         ? product.images[0]
//         : product.images[0].startsWith("/uploads/")
//         ? `${backendURL}${product.images[0]}`
//         : `${backendURL}/uploads/${product.images[0]}`
//       : "/placeholder.png";

//   // ================= ADD / UPDATE REVIEW =================
//   const handleSubmitReview = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("Please login first");
//         return;
//       }

//       if (!comment.trim()) {
//         alert("Please write a review");
//         return;
//       }

//       if (editingReviewId) {
//         await axios.put(
//           `${backendURL}/api/reviews/${editingReviewId}`,
//           { rating: Number(rating), comment },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } else {
//         await axios.post(
//           `${backendURL}/api/reviews`,
//           { productId: id, rating: Number(rating), comment },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       }

//       alert("Review submitted successfully!");
//       setShowForm(false);
//       setComment("");
//       setRating(5);
//       setEditingReviewId(null);
//       fetchReviews();
//     } catch (err) {
//       console.error("Review error:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "Review failed");
//     }
//   };

//   // ================= DELETE =================
//   const handleDelete = async (reviewId) => {
//     try {
//       const token = localStorage.getItem("token");

//       await axios.delete(`${backendURL}/api/reviews/${reviewId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       fetchReviews();
//     } catch (err) {
//       console.error("Delete review error:", err);
//     }
//   };

//   // ================= EDIT =================
//   const handleEdit = (review) => {
//     setShowForm(true);
//     setRating(review.rating);
//     setComment(review.comment);
//     setEditingReviewId(review._id);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto p-4">

//         {/* TOP */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
//           <img
//             src={imageUrl}
//             alt={product.title}
//             className="h-[400px] w-full object-contain"
//           />

//           <div>
//             <h1 className="text-xl font-semibold">{product.title}</h1>
//             <p className="text-gray-600 mt-2">{product.description}</p>
//             <p className="text-2xl font-bold mt-2">₹{product.price}</p>

//             <div className="flex gap-3 mt-4">
//               <button
//                 onClick={() => addToCart({ ...product, quantity: 1 })}
//                 className="bg-pink-500 text-white px-6 py-3 rounded w-full"
//               >
//                 Add to Bag
//               </button>
//               <button
//                 onClick={() => addToWishlist(product)}
//                 className="border px-4 py-3 rounded"
//               >
//                 ❤️
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* TABS */}
//         <div className="bg-white mt-6 rounded-lg shadow">
//           <div className="flex border-b">
//             <button
//               onClick={() => setActiveTab("details")}
//               className={`px-6 py-3 ${
//                 activeTab === "details" && "border-b-2 border-pink-500"
//               }`}
//             >
//               Product Details
//             </button>
//             <button
//               onClick={() => setActiveTab("reviews")}
//               className={`px-6 py-3 ${
//                 activeTab === "reviews" && "border-b-2 border-pink-500"
//               }`}
//             >
//               Ratings & Reviews
//             </button>
//           </div>

//           <div className="p-6">
//             {activeTab === "details" && (
//               <p className="text-gray-600">{product.description}</p>
//             )}

//             {activeTab === "reviews" && (
//               <div>
//                 {/* HEADER */}
//                 <div className="flex justify-between mb-4">
//                   <h2 className="font-semibold">Customer Reviews</h2>
//                   <button
//                     onClick={() => {
//                       setShowForm(true);
//                       setEditingReviewId(null);
//                       setComment("");
//                       setRating(5);
//                     }}
//                     className="border px-4 py-2 text-pink-500 rounded"
//                   >
//                     Write Review
//                   </button>
//                 </div>

//                 {/* FORM */}
//                 {showForm && (
//                   <div className="border p-4 mb-4 rounded">
//                     <select
//                       value={rating}
//                       onChange={(e) => setRating(Number(e.target.value))}
//                       className="border p-2 mb-2 w-full"
//                     >
//                       {[5, 4, 3, 2, 1].map((r) => (
//                         <option key={r} value={r}>
//                           {r} Stars
//                         </option>
//                       ))}
//                     </select>

//                     <textarea
//                       value={comment}
//                       onChange={(e) => setComment(e.target.value)}
//                       placeholder="Write your review..."
//                       className="border p-2 w-full mb-2"
//                     />

//                     <button
//                       onClick={handleSubmitReview}
//                       className="bg-pink-500 text-white px-4 py-2 rounded"
//                     >
//                       {editingReviewId ? "Update Review" : "Submit Review"}
//                     </button>
//                   </div>
//                 )}

//                 {/* LIST */}
//                 {reviews.length === 0 && <p>No reviews yet</p>}

//                 {reviews.map((review) => (
//                   <div
//                     key={review._id}
//                     className="border-b py-3 flex justify-between"
//                   >
//                     <div>
//                       <p className="font-semibold">⭐ {review.rating}</p>
//                       <p>{review.comment}</p>
//                       <p className="text-xs text-gray-500">
//                         by {review.user?.name}
//                       </p>
//                     </div>

//                     {/* ✅ FIXED CONDITION */}
//                     {String(review.user?._id) === String(userId) && (
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => handleEdit(review)}
//                           className="text-blue-500"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(review._id)}
//                           className="text-red-500"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState("details");

  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [editingReviewId, setEditingReviewId] = useState(null);

  const backendURL =
    import.meta.env.VITE_BACKEND_URL ||
    "https://ecommerce-mern-backend-1.onrender.com";

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = storedUser?._id;

  const fetchProduct = async () => {
    const res = await axios.get(`${backendURL}/api/products/${id}`);
    setProduct(res.data);
  };

  const fetchReviews = async () => {
    const res = await axios.get(`${backendURL}/api/reviews?productId=${id}`);
    setReviews(res.data);
  };

  useEffect(() => {
    fetchProduct();
    fetchReviews();
  }, [id]);

  if (!product)
    return <div className="p-10 text-center animate-pulse">Loading...</div>;

  const imageUrl =
  product.images && product.images[0]
      ? product.images[0].startsWith("http")
        ? product.images[0]
        : product.images[0].startsWith("/uploads/")
        ? `${backendURL}${product.images[0]}`
        : `${backendURL}/uploads/${product.images[0]}`
      : "/placeholder.png";
    // product.images && product.images[0]
    //   ? product.images[0].startsWith("http")
    //     ? product.images[0]
    //     : `${backendURL}/${product.images[0]}`
    //   : "/placeholder.png";

  const handleSubmitReview = async () => {
    const token = localStorage.getItem("token");

    if (!token) return alert("Login required");
    if (!comment.trim()) return alert("Write review");

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
    fetchReviews();
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto">

        {/* PRODUCT CARD */}
        <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={imageUrl}
              alt={product.title}
              className="h-[400px] w-full object-contain transform hover:scale-110 transition duration-500"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-3xl font-bold mt-4 text-pink-500">
                ₹{product.price}
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => addToCart({ ...product, quantity: 1 })}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg w-full transform hover:scale-105 active:scale-95 transition duration-200 shadow-md"
              >
                Add to Bag 🛍️
              </button>

              <button
                onClick={() => addToWishlist(product)}
                className="border px-4 py-3 rounded-lg hover:bg-pink-100 transform hover:scale-110 transition"
              >
                ❤️
              </button>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="bg-white mt-6 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            {["details", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center font-medium transition ${
                  activeTab === tab
                    ? "border-b-4 border-pink-500 text-pink-500"
                    : "hover:bg-gray-100"
                }`}
              >
                {tab === "details" ? "Product Details" : "Reviews"}
              </button>
            ))}
          </div>

          <div className="p-6 animate-fadeIn">
            {activeTab === "details" && (
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            )}

            {activeTab === "reviews" && (
              <div>

                <div className="flex justify-between mb-4">
                  <h2 className="font-semibold text-lg">
                    Customer Reviews
                  </h2>

                  <button
                    onClick={() => setShowForm(true)}
                    className="border px-4 py-2 rounded hover:bg-pink-100 transition"
                  >
                    Write Review
                  </button>
                </div>

                {/* FORM */}
                {showForm && (
                  <div className="border p-4 rounded mb-4 animate-slideUp">
                    <select
                      value={rating}
                      onChange={(e) => setRating(Number(e.target.value))}
                      className="border p-2 w-full mb-2"
                    >
                      {[5, 4, 3, 2, 1].map((r) => (
                        <option key={r}>{r} Stars</option>
                      ))}
                    </select>

                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="border p-2 w-full mb-2"
                    />

                    <button
                      onClick={handleSubmitReview}
                      className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
                    >
                      Submit
                    </button>
                  </div>
                )}

                {/* REVIEWS */}
                {reviews.map((r) => (
                  <div
                    key={r._id}
                    className="border-b py-3 flex justify-between animate-fadeIn"
                  >
                    <div>
                      <p className="font-semibold">⭐ {r.rating}</p>
                      <p>{r.comment}</p>
                      <p className="text-xs text-gray-500">
                        by {r.user?.name}
                      </p>
                    </div>

                    {String(r.user?._id) === String(userId) && (
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:underline">
                          Edit
                        </button>
                        <button className="text-red-500 hover:underline">
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-in;
          }
          .animate-slideUp {
            animation: slideUp 0.4s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default ProductDetails;