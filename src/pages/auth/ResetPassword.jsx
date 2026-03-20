// // // // // // import React, { useState } from "react";
// // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // import axios from "../../utils/axios";

// // // // // // const ResetPassword = () => {
// // // // // //   const { token } = useParams();
// // // // // //   const navigate = useNavigate();
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [confirmPassword, setConfirmPassword] = useState("");
// // // // // //   const [message, setMessage] = useState("");
// // // // // //   const [error, setError] = useState("");

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     if (password !== confirmPassword) {
// // // // // //       setError("Passwords do not match");
// // // // // //       return;
// // // // // //     }
// // // // // //     try {
// // // // // //       const res = await axios.post(`/auth/reset-password/${token}`, { password });
// // // // // //       setMessage(res.data.message);
// // // // // //       setError("");
// // // // // //       setTimeout(() => navigate("/login"), 2000);
// // // // // //     } catch (err) {
// // // // // //       setError(err.response?.data?.message || "Something went wrong");
// // // // // //       setMessage("");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // // // //       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
// // // // // //         <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
// // // // // //         {message && <p className="text-green-500 mb-2">{message}</p>}
// // // // // //         {error && <p className="text-red-500 mb-2">{error}</p>}
// // // // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             placeholder="New Password"
// // // // // //             value={password}
// // // // // //             onChange={(e) => setPassword(e.target.value)}
// // // // // //             className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //             required
// // // // // //           />
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             placeholder="Confirm Password"
// // // // // //             value={confirmPassword}
// // // // // //             onChange={(e) => setConfirmPassword(e.target.value)}
// // // // // //             className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // //             required
// // // // // //           />
// // // // // //           <button
// // // // // //             type="submit"
// // // // // //             className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
// // // // // //           >
// // // // // //             Reset Password
// // // // // //           </button>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ResetPassword;



// // // // // // src/pages/auth/ResetPassword.jsx
// // // // // import React, { useState } from "react";
// // // // // import { useNavigate, useParams } from "react-router-dom";
// // // // // import axios from "../../utils/axios";

// // // // // const ResetPassword = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const { token } = useParams();
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [message, setMessage] = useState("");
// // // // //   const [error, setError] = useState("");

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setMessage("");
// // // // //     setError("");
// // // // //     try {
// // // // //       const res = await axios.post(`/auth/reset-password/${token}`, { password });
// // // // //       setMessage(res.data.message || "Password updated successfully!");
// // // // //       setTimeout(() => navigate("/login"), 2000);
// // // // //     } catch (err) {
// // // // //       setError(err.response?.data?.message || "Invalid or expired token");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
// // // // //       <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
// // // // //       {message && <p className="text-green-500 mb-2">{message}</p>}
// // // // //       {error && <p className="text-red-500 mb-2">{error}</p>}
// // // // //       <form onSubmit={handleSubmit} className="space-y-4">
// // // // //         <input
// // // // //           type="password"
// // // // //           placeholder="New Password"
// // // // //           value={password}
// // // // //           onChange={(e) => setPassword(e.target.value)}
// // // // //           className="w-full p-2 border rounded"
// // // // //           required
// // // // //         />
// // // // //         <button
// // // // //           type="submit"
// // // // //           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
// // // // //         >
// // // // //           Reset Password
// // // // //         </button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ResetPassword;

// // // // import React, { useState } from "react";
// // // // import { useNavigate, useParams } from "react-router-dom";
// // // // import axios from "../../utils/axios";

// // // // const ResetPassword = () => {
// // // //   const navigate = useNavigate();
// // // //   const { token } = useParams();

// // // //   const [password, setPassword] = useState("");
// // // //   const [message, setMessage] = useState("");
// // // //   const [error, setError] = useState("");

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setMessage("");
// // // //     setError("");

// // // //     try {
// // // //       const res = await axios.post(
// // // //         `/auth/resetpassword/${token}`,
// // // //         { password }
// // // //       );

// // // //       setMessage(res.data.message || "Password updated successfully!");

// // // //       setTimeout(() => navigate("/login"), 2000);
// // // //     } catch (err) {
// // // //       setError(err.response?.data?.message || "Invalid or expired token");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex bg-gray-100">

// // // //       {/* ✅ LEFT SIDE (BRANDING) */}
// // // //       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-700 to-pink-900 text-white p-12 flex-col justify-between rounded-r-[50px]">

// // // //         <div>
// // // //           <div className="flex justify-center mb-6">
// // // //             <img
// // // //               src="/images/luxoraicon.png"
// // // //               alt="Luxora logo"
// // // //               className="w-40 h-40 object-contain"
// // // //             />
// // // //           </div>

// // // //           <h1 className="text-4xl font-bold mb-2">Luxora</h1>

// // // //           <h2 className="text-2xl font-semibold mb-4">
// // // //             Create New Password
// // // //           </h2>

// // // //           <p className="text-gray-200 text-sm max-w-sm">
// // // //             Set a strong password to keep your account safe and secure.
// // // //           </p>
// // // //         </div>

// // // //         <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl max-w-sm">
// // // //           <h3 className="font-semibold mb-2">Stay Secure</h3>
// // // //           <p className="text-sm text-gray-200">
// // // //             Use a strong password you haven’t used before.
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       {/* ✅ RIGHT SIDE (FORM) */}
// // // //       <div className="w-full md:w-1/2 flex items-center justify-center px-6">

// // // //         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

// // // //           <h2 className="text-2xl font-semibold mb-2 text-gray-800">
// // // //             Reset Password
// // // //           </h2>

// // // //           <p className="text-gray-500 text-sm mb-6">
// // // //             Enter your new password below
// // // //           </p>

// // // //           {/* ALERTS */}
// // // //           {message && (
// // // //             <p className="text-green-600 mb-3">{message}</p>
// // // //           )}
// // // //           {error && (
// // // //             <p className="text-red-500 mb-3">{error}</p>
// // // //           )}

// // // //           {/* FORM */}
// // // //           <form onSubmit={handleSubmit}>

// // // //             <label className="text-sm text-gray-600">
// // // //               New Password
// // // //             </label>

// // // //             <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
// // // //               <input
// // // //                 type="password"
// // // //                 placeholder="Enter new password"
// // // //                 className="w-full outline-none"
// // // //                 value={password}
// // // //                 onChange={(e) => setPassword(e.target.value)}
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
// // // //               Reset Password
// // // //             </button>

// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ResetPassword;




// // // import React, { useState } from "react";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import axios from "../../utils/axios";

// // // const ResetPassword = () => {
// // //   const navigate = useNavigate();
// // //   const { token } = useParams();

// // //   const [password, setPassword] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const [error, setError] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setMessage("");
// // //     setError("");

// // //     if (!token) {
// // //       setError("Invalid or expired token");
// // //       return;
// // //     }

// // //     try {
// // //       const res = await axios.post(`/auth/resetpassword/${token}`, { password });
// // //       setMessage(res.data.message || "Password updated successfully!");
// // //       setTimeout(() => navigate("/login"), 2000);
// // //     } catch (err) {
// // //       setError(err.response?.data?.message || "Invalid or expired token");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex bg-gray-100">
// // //       {/* LEFT SIDE */}
// // //       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-700 to-pink-900 text-white p-12 flex-col justify-between rounded-r-[50px]">
// // //         <div>
// // //           <div className="flex justify-center mb-6">
// // //             <img src="/images/luxoraicon.png" alt="Luxora logo" className="w-40 h-40 object-contain"/>
// // //           </div>
// // //           <h1 className="text-4xl font-bold mb-2">Luxora</h1>
// // //           <h2 className="text-2xl font-semibold mb-4">Create New Password</h2>
// // //           <p className="text-gray-200 text-sm max-w-sm">
// // //             Set a strong password to keep your account safe and secure.
// // //           </p>
// // //         </div>
// // //         <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl max-w-sm">
// // //           <h3 className="font-semibold mb-2">Stay Secure</h3>
// // //           <p className="text-sm text-gray-200">Use a strong password you haven’t used before.</p>
// // //         </div>
// // //       </div>

// // //       {/* RIGHT SIDE */}
// // //       <div className="w-full md:w-1/2 flex items-center justify-center px-6">
// // //         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
// // //           <h2 className="text-2xl font-semibold mb-2 text-gray-800">Reset Password</h2>
// // //           <p className="text-gray-500 text-sm mb-6">Enter your new password below</p>

// // //           {message && <p className="text-green-600 mb-3">{message}</p>}
// // //           {error && <p className="text-red-500 mb-3">{error}</p>}

// // //           <form onSubmit={handleSubmit}>
// // //             <label className="text-sm text-gray-600">New Password</label>
// // //             <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
// // //               <input
// // //                 type="password"
// // //                 placeholder="Enter new password"
// // //                 className="w-full outline-none"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 required
// // //               />
// // //             </div>
// // //             <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
// // //               Reset Password
// // //             </button>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ResetPassword;


// // import React, { useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import axios from "../../utils/axios";

// // const ResetPassword = () => {
// //   const navigate = useNavigate();
// //   const { token } = useParams(); // Get token from URL

// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage("");
// //     setError("");

// //     if (!token) {
// //       setError("Invalid or expired token");
// //       return;
// //     }

// //     if (password !== confirmPassword) {
// //       setError("Passwords do not match");
// //       return;
// //     }

// //     setLoading(true);

// //     try {
// //       const res = await axios.post(`/auth/resetpassword/${token}`, { password });
// //       setMessage(res.data.message || "Password reset successfully!");
// //       setTimeout(() => navigate("/login"), 2000);
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Invalid or expired token");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex bg-gray-100">

// //       {/* LEFT SIDE */}
// //       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-700 to-pink-900 text-white p-12 flex-col justify-between rounded-r-[50px]">
// //         <div>
// //           <div className="flex justify-center mb-6">
// //             <img src="/images/luxoraicon.png" alt="Luxora logo" className="w-40 h-40 object-contain" />
// //           </div>
// //           <h1 className="text-4xl font-bold mb-2">Luxora</h1>
// //           <h2 className="text-2xl font-semibold mb-4">Create New Password</h2>
// //           <p className="text-gray-200 text-sm max-w-sm">
// //             Set a strong password to keep your account safe and secure.
// //           </p>
// //         </div>
// //         <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl max-w-sm">
// //           <h3 className="font-semibold mb-2">Stay Secure</h3>
// //           <p className="text-sm text-gray-200">Use a strong password you haven’t used before.</p>
// //         </div>
// //       </div>

// //       {/* RIGHT SIDE (FORM) */}
// //       <div className="w-full md:w-1/2 flex items-center justify-center px-6">
// //         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
// //           <h2 className="text-2xl font-semibold mb-2 text-gray-800">Reset Password</h2>
// //           <p className="text-gray-500 text-sm mb-6">Enter your new password below</p>

// //           {/* ALERTS */}
// //           {message && <p className="text-green-600 mb-3">{message}</p>}
// //           {error && <p className="text-red-500 mb-3">{error}</p>}

// //           <form onSubmit={handleSubmit}>
// //             <label className="text-sm text-gray-600">New Password</label>
// //             <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
// //               <input
// //                 type="password"
// //                 placeholder="Enter new password"
// //                 className="w-full outline-none"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <label className="text-sm text-gray-600">Confirm Password</label>
// //             <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
// //               <input
// //                 type="password"
// //                 placeholder="Confirm new password"
// //                 className="w-full outline-none"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className={`w-full py-3 rounded-lg text-white transition ${
// //                 loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
// //               }`}
// //             >
// //               {loading ? "Resetting..." : "Reset Password"}
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResetPassword;


// // import React, { useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import axios from "../../utils/axios";

// // const ResetPassword = () => {
// //   const navigate = useNavigate();
// //   const { token } = useParams(); // get token from URL

// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setMessage("");
// // //     setError("");

// // //     if (!token) {
// // //       setError("Invalid or expired token");
// // //       return;
// // //     }
// // // Before sending token, trim it to remove any accidental spaces/newlines
// // const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   setMessage("");
// //   setError("");

// //   if (!token) {
// //     setError("Invalid or expired token");
// //     return;
// //   }

// //   const trimmedToken = token.trim(); // <-- ADD THIS

// //   try {
// //     const res = await axios.post(`/auth/resetpassword/${trimmedToken}`, { password });
// //     setMessage(res.data.message || "Password updated successfully!");
// //     setTimeout(() => navigate("/login"), 2000);
// //   } catch (err) {
// //     setError(err.response?.data?.message || "Invalid or expired token");
// //   }
// // };

// // //     if (password !== confirmPassword) {
// // //       setError("Passwords do not match");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       // Send raw token from URL (backend will hash it)
// // //       const res = await axios.post(`/auth/resetpassword/${token}`, { password });
// // //       setMessage(res.data.message || "Password reset successful!");
// // //       setTimeout(() => navigate("/login"), 2000);
// // //     } catch (err) {
// // //       setError(err.response?.data?.message || "Invalid or expired token");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// //   return (
// //     <div className="min-h-screen flex bg-gray-100">
// //       {/* LEFT SIDE */}
// //       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-700 to-pink-900 text-white p-12 flex-col justify-between rounded-r-[50px]">
// //         <div>
// //           <div className="flex justify-center mb-6">
// //             <img src="/images/luxoraicon.png" alt="Luxora logo" className="w-40 h-40 object-contain" />
// //           </div>
// //           <h1 className="text-4xl font-bold mb-2">Luxora</h1>
// //           <h2 className="text-2xl font-semibold mb-4">Create New Password</h2>
// //           <p className="text-gray-200 text-sm max-w-sm">
// //             Set a strong password to keep your account safe and secure.
// //           </p>
// //         </div>
// //         <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl max-w-sm">
// //           <h3 className="font-semibold mb-2">Stay Secure</h3>
// //           <p className="text-sm text-gray-200">Use a strong password you haven’t used before.</p>
// //         </div>
// //       </div>

// //       {/* RIGHT SIDE */}
// //       <div className="w-full md:w-1/2 flex items-center justify-center px-6">
// //         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
// //           <h2 className="text-2xl font-semibold mb-2 text-gray-800">Reset Password</h2>
// //           <p className="text-gray-500 text-sm mb-6">Enter your new password below</p>

// //           {message && <p className="text-green-600 mb-3">{message}</p>}
// //           {error && <p className="text-red-500 mb-3">{error}</p>}

// //           <form onSubmit={handleSubmit}>
// //             <label className="text-sm text-gray-600">New Password</label>
// //             <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
// //               <input
// //                 type="password"
// //                 placeholder="Enter new password"
// //                 className="w-full outline-none"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <label className="text-sm text-gray-600">Confirm Password</label>
// //             <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
// //               <input
// //                 type="password"
// //                 placeholder="Confirm new password"
// //                 className="w-full outline-none"
// //                 value={confirmPassword}
// //                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className={`w-full py-3 rounded-lg text-white transition ${
// //                 loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
// //               }`}
// //             >
// //               {loading ? "Resetting..." : "Reset Password"}
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResetPassword;



// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "../../utils/axios";

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const { token } = useParams();

//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     if (!token) {
//       setError("Invalid or expired token");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       // Send raw token (trimmed) to backend
//       const res = await axios.post(`/auth/resetpassword/${token.trim()}`, { password });
//       setMessage(res.data.message || "Password reset successful!");
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || "Invalid or expired token");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* LEFT SIDE */}
//       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-700 to-pink-900 text-white p-12 flex-col justify-between rounded-r-[50px]">
//         <div>
//           <div className="flex justify-center mb-6">
//             <img src="/images/luxoraicon.png" alt="Luxora logo" className="w-40 h-40 object-contain" />
//           </div>
//           <h1 className="text-4xl font-bold mb-2">Luxora</h1>
//           <h2 className="text-2xl font-semibold mb-4">Create New Password</h2>
//           <p className="text-gray-200 text-sm max-w-sm">
//             Set a strong password to keep your account safe and secure.
//           </p>
//         </div>
//         <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl max-w-sm">
//           <h3 className="font-semibold mb-2">Stay Secure</h3>
//           <p className="text-sm text-gray-200">Use a strong password you haven’t used before.</p>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="w-full md:w-1/2 flex items-center justify-center px-6">
//         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
//           <h2 className="text-2xl font-semibold mb-2 text-gray-800">Reset Password</h2>
//           <p className="text-gray-500 text-sm mb-6">Enter your new password below</p>

//           {message && <p className="text-green-600 mb-3">{message}</p>}
//           {error && <p className="text-red-500 mb-3">{error}</p>}

//           <form onSubmit={handleSubmit}>
//             <label className="text-sm text-gray-600">New Password</label>
//             <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
//               <input
//                 type="password"
//                 placeholder="Enter new password"
//                 className="w-full outline-none"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <label className="text-sm text-gray-600">Confirm Password</label>
//             <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
//               <input
//                 type="password"
//                 placeholder="Confirm new password"
//                 className="w-full outline-none"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded-lg text-white transition ${
//                 loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
//               }`}
//             >
//               {loading ? "Resetting..." : "Reset Password"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // token from URL

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     if (!token) {
//       setError("Invalid or expired token");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       // SEND TOKEN EXACTLY AS RECEIVED FROM URL
//       const res = await axios.post(`/auth/resetpassword/${token}`, { password });
//       setMessage(res.data.message || "Password reset successful!");
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//         console.log(err.response || err);
// setError(err.response?.data?.message || err.message);
//     //   setError(err.response?.data?.message || "Invalid or expired token");
//     } finally {
//       setLoading(false);
//     }
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  setError("");

  console.log("TOKEN:", token);

  if (!token) {
    setError("Token missing in URL");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    return;
  }

  setLoading(true);

  try {
    const res = await axios.put(`/auth/resetpassword/${token}`, {
      password,
    });

    console.log("SUCCESS:", res.data);

    setMessage(res.data.message || "Password reset successful!");
    setTimeout(() => navigate("/login"), 2000);

  } catch (err) {
    console.log("ERROR:", err.response || err);

    setError(
      err.response?.data?.message ||
      err.message ||
      "Something went wrong"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-700 to-pink-900 text-white p-12 flex-col justify-between rounded-r-[50px]">
        <div>
          <div className="flex justify-center mb-6">
            <img src="/images/luxoraicon.png" alt="Luxora logo" className="w-40 h-40 object-contain" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Luxora</h1>
          <h2 className="text-2xl font-semibold mb-4">Create New Password</h2>
          <p className="text-gray-200 text-sm max-w-sm">
            Set a strong password to keep your account safe and secure.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Reset Password</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your new password below</p>

          {message && <p className="text-green-600 mb-3">{message}</p>}
          {error && <p className="text-red-500 mb-3">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label className="text-sm text-gray-600">New Password</label>
            <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <label className="text-sm text-gray-600">Confirm Password</label>
            <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white transition ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
              }`}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;