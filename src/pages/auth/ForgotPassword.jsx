// // // // import React, { useState } from "react";
// // // // import axios from "../../utils/axios"; // axios instance

// // // // const ForgotPassword = () => {
// // // //   const [email, setEmail] = useState("");
// // // //   const [message, setMessage] = useState("");
// // // //   const [error, setError] = useState("");

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const res = await axios.post("/auth/forgot-password", { email });
// // // //       setMessage(res.data.message);
// // // //       setError("");
// // // //     } catch (err) {
// // // //       setError(err.response?.data?.message || "Something went wrong");
// // // //       setMessage("");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// // // //       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
// // // //         <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
// // // //         {message && <p className="text-green-500 mb-2">{message}</p>}
// // // //         {error && <p className="text-red-500 mb-2">{error}</p>}
// // // //         <form onSubmit={handleSubmit} className="space-y-4">
// // // //           <input
// // // //             type="email"
// // // //             placeholder="Enter your email"
// // // //             value={email}
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //             className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //             required
// // // //           />
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
// // // //           >
// // // //             Send Reset Link
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ForgotPassword;


// // // // src/pages/auth/ForgotPassword.jsx
// // // import React, { useState } from "react";
// // // import axios from "../../utils/axios";

// // // const ForgotPassword = () => {
// // //   const [email, setEmail] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const [error, setError] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setMessage("");
// // //     setError("");
// // //     try {
// // //       const res = await axios.post("/auth/forgot-password", { email });
// // //       setMessage(res.data.message || "Check your email for reset link!");
// // //     } catch (err) {
// // //       setError(err.response?.data?.message || "Error sending reset link");
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
// // //       <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
// // //       {message && <p className="text-green-500 mb-2">{message}</p>}
// // //       {error && <p className="text-red-500 mb-2">{error}</p>}
// // //       <form onSubmit={handleSubmit} className="space-y-4">
// // //         <input
// // //           type="email"
// // //           placeholder="Enter your registered email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           className="w-full p-2 border rounded"
// // //           required
// // //         />
// // //         <button
// // //           type="submit"
// // //           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
// // //         >
// // //           Send Reset Link
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default ForgotPassword;




// // import React, { useState } from "react";
// // import axios from "../../utils/axios";

// // const ForgotPassword = () => {
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage("");
// //     setError("");

// //     try {
// //       const res = await axios.post("/auth/forgotpassword", { email });
// //       setMessage(res.data.message || "Check your email for reset link!");
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Error sending reset link");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex bg-[#f5f5f5]">

// //       {/* LEFT SIDE (FORM) */}
// //       <div className="w-full md:w-1/2 flex items-center justify-center px-12">
// //         <div className="w-full max-w-md">

// //           {/* LOGO */}
// //           <div className="mb-10">
// //             <div className="text-3xl font-semibold text-pink-700">
// //               Luxora
// //             </div>
// //           </div>

// //           <h2 className="text-3xl font-semibold mb-4">
// //             Forgot Password
// //           </h2>

// //           <p className="text-gray-500 text-sm mb-6">
// //             Enter your registered email and we’ll send you a reset link.
// //           </p>

// //           {/* ALERTS */}
// //           {message && (
// //             <p className="text-green-500 mb-3">{message}</p>
// //           )}
// //           {error && (
// //             <p className="text-red-500 mb-3">{error}</p>
// //           )}

// //           {/* FORM */}
// //           <form onSubmit={handleSubmit}>

// //             <label className="text-sm text-gray-600">
// //               Email Address
// //             </label>

// //             <div className="border rounded-lg px-3 py-2 mb-4 bg-white">
// //               <input
// //                 type="email"
// //                 placeholder="johndoe@gmail.com"
// //                 className="w-full outline-none"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //             </div>

// //             <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:opacity-90">
// //               Send Reset Link
// //             </button>

// //           </form>
// //         </div>
// //       </div>

// //       {/* RIGHT SIDE (BRANDING) */}
// //       <div className="hidden md:flex w-1/2 bg-pink-800 text-white p-12 flex-col justify-between rounded-l-[50px]">

// //         <div>
// //           <div className="mb-6 flex justify-center">
// //             <img
// //               src="/images/luxoraicon.png"
// //               alt="Luxora logo"
// //               className="w-48 h-48 object-contain rounded-xl"
// //             />
// //           </div>

// //           <div className="text-3xl font-semibold mb-2">
// //             Luxora
// //           </div>

// //           <h2 className="text-3xl font-semibold mb-4">
// //             Reset Your Password
// //           </h2>

// //           <p className="text-gray-300 text-sm max-w-sm">
// //             Don’t worry! Enter your email and we’ll help you reset your password quickly and securely.
// //           </p>
// //         </div>

// //         <div className="bg-gray-800 p-6 rounded-2xl max-w-sm ml-40">
// //           <h3 className="text-lg font-semibold mb-2">
// //             Secure & Fast
// //           </h3>
// //           <p className="text-gray-400 text-sm">
// //             Your account safety is our priority. Reset your password in just a few steps.
// //           </p>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default ForgotPassword;

// import React, { useState } from "react";
// import axios from "../../utils/axios";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const res = await axios.post("/auth/forgotpassword", { email });
//       setMessage(res.data.message || "Check your email for reset link!");
//     } catch (err) {
//       setError(err.response?.data?.message || "Error sending reset link");
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-gray-100">

//       {/* 🔥 LEFT SIDE (BRANDING) */}
//       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-700 to-pink-900 text-white p-12 flex-col justify-between rounded-r-[50px]">

//         <div>
//           <div className="flex justify-center mb-6">
//             <img
//               src="/images/luxoraicon.png"
//               alt="Luxora logo"
//               className="w-40 h-40 object-contain"
//             />
//           </div>

//           <h1 className="text-4xl font-bold mb-2">Luxora</h1>

//           <h2 className="text-2xl font-semibold mb-4">
//             Forgot your password?
//           </h2>

//           <p className="text-gray-200 text-sm max-w-sm">
//             No worries — enter your email and we’ll send you a secure link to reset your password quickly.
//           </p>
//         </div>

//         <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl max-w-sm">
//           <h3 className="font-semibold mb-2">
//             Secure Recovery
//           </h3>
//           <p className="text-sm text-gray-200">
//             We ensure your account remains protected while helping you regain access.
//           </p>
//         </div>
//       </div>

//       {/* 🔥 RIGHT SIDE (FORM) */}
//       <div className="w-full md:w-1/2 flex items-center justify-center px-6">

//         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

//           <h2 className="text-2xl font-semibold mb-2 text-gray-800">
//             Reset Password
//           </h2>

//           <p className="text-gray-500 text-sm mb-6">
//             Enter your email to receive a reset link
//           </p>

//           {/* ALERTS */}
//           {message && (
//             <p className="text-green-600 mb-3">{message}</p>
//           )}
//           {error && (
//             <p className="text-red-500 mb-3">{error}</p>
//           )}

//           {/* FORM */}
//           <form onSubmit={handleSubmit}>

//             <label className="text-sm text-gray-600">
//               Email Address
//             </label>

//             <div className="border rounded-lg px-3 py-2 mb-4 mt-1">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full outline-none"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
//               Send Reset Link
//             </button>

//           </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;

import React, { useState } from "react";
import axios from "../../utils/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await axios.post("/auth/forgotpassword", { email });
      setMessage(res.data.message || "Check your email for reset link!");
    } catch (err) {
      setError(err.response?.data?.message || "Error sending reset link");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* ✅ LEFT SIDE (BRANDING) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-pink-700 to-pink-900 text-white p-12 flex-col justify-between rounded-r-[50px]">

        <div>
          <div className="flex justify-center mb-6">
            <img
              src="/images/luxoraicon.png"
              alt="Luxora logo"
              className="w-40 h-40 object-contain"
            />
          </div>

          <h1 className="text-4xl font-bold mb-2">Luxora</h1>

          <h2 className="text-2xl font-semibold mb-4">
           Forgot your password?
          </h2>

          <p className="text-gray-200 text-sm max-w-sm">
            No worries- enter your email and we'll send you a secure link to reset your password quickly
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl max-w-sm">
          <h3 className="font-semibold mb-2">Secure Recovery</h3>
          <p className="text-sm text-gray-200">
            we ensure your account remains protected while helping you regain access
          </p>
        </div>
      </div>

      {/* ✅ RIGHT SIDE (FORM) */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Forgot Password
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Enter your registered email to receive a reset link
          </p>

          {/* ALERTS */}
          {message && (
            <p className="text-green-600 mb-3">{message}</p>
          )}
          {error && (
            <p className="text-red-500 mb-3">{error}</p>
          )}

          {/* FORM */}
          <form onSubmit={handleSubmit}>

            <label className="text-sm text-gray-600">
              Email Address
            </label>

            <div className="border rounded-lg px-3 py-2 mt-1 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
              Send Reset Link
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;