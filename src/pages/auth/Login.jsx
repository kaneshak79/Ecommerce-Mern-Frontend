

// // // // import React, { useState } from "react";
// // // // import axios from "../../utils/axios";
// // // // import { useNavigate } from "react-router-dom";

// // // // const Login = () => {
// // // //   const navigate = useNavigate();

// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [role, setRole] = useState("buyer"); // Select role before login

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       // Login endpoint changes based on role
// // // //       const endpoint =
// // // //         role === "seller"
// // // //           ? "/auth/login/seller"
// // // //           : "/auth/login/buyer";

// // // //       const res = await axios.post(endpoint, { email, password });

// // // //       // Save token in localStorage (or Context)
// // // //       localStorage.setItem("token", res.data.token);
// // // //       localStorage.setItem("userRole", res.data.user.role);

// // // //       alert("Login Successful!");

// // // //       // Redirect based on role
// // // //       if (res.data.user.role === "buyer") {
// // // //         navigate("/home");
// // // //       } else if (res.data.user.role === "seller") {
// // // //         navigate("/seller/dashboard");
// // // //       }

// // // //     } catch (err) {
// // // //       console.log(err.response?.data);
// // // //       alert(err.response?.data?.message || "Invalid credentials");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex justify-center mt-20">
// // // //       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">
// // // //         <h2 className="text-xl font-bold mb-4">Login</h2>

// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           className="w-full border p-2 mb-3"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           required
// // // //         />

// // // //         <input
// // // //           type="password"
// // // //           placeholder="Password"
// // // //           className="w-full border p-2 mb-3"
// // // //           value={password}
// // // //           onChange={(e) => setPassword(e.target.value)}
// // // //           required
// // // //         />

// // // //         {/* Role selector */}
// // // //         <select
// // // //           className="w-full border p-2 mb-3"
// // // //           value={role}
// // // //           onChange={(e) => setRole(e.target.value)}
// // // //         >
// // // //           <option value="buyer">Login as Buyer</option>
// // // //           <option value="seller">Login as Seller</option>
// // // //         </select>

// // // //         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// // // //           Login
// // // //         </button>

// // // //         <p className="mt-3 text-sm">
// // // //           Forgot password?{" "}
// // // //           <span
// // // //             className="text-blue-500 cursor-pointer"
// // // //             onClick={() => navigate("/forgot-password")}
// // // //           >
// // // //             Reset here
// // // //           </span>
// // // //         </p>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Login;


// // // // src/pages/auth/Login.jsx

// // import React, { useState } from "react";
// // import axios from "../../utils/axios";
// // import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Single backend endpoint for both buyer and seller
// //       const res = await axios.post("/auth/login", { email, password });

// //       // Save token and role
// //       localStorage.setItem("token", res.data.token);
// //       localStorage.setItem("userRole", res.data.user.role);

// //       alert("Login Successful!");

// //       // Redirect based on role
// //       if (res.data.user.role === "buyer") {
// //         navigate("/");
// //       } else if (res.data.user.role === "seller") {
// //         navigate("/seller/dashboard");
// //       }
// //     } catch (err) {
// //       console.log(err.response?.data);
// //       alert(err.response?.data?.message || "Invalid credentials");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center mt-20">
// //       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">
// //         <h2 className="text-xl font-bold mb-4">Login</h2>

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className="w-full border p-2 mb-3"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="w-full border p-2 mb-3"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />

// //         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// //           Login
// //         </button>

// //         <p className="mt-3 text-sm">
// //           Forgot password?{" "}
// //           <span
// //             className="text-blue-500 cursor-pointer"
// //             onClick={() => navigate("/forgot-password")}
// //           >
// //             Reset here
// //           </span>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;





// // src/pages/auth/Login.jsx

// import React, { useState } from "react";
// import axios from "../../utils/axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("/auth/login", { email, password });

//       // ✅ STORE FULL USER (IMPORTANT FIX)
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       alert("Login Successful!");

//       // ✅ ROLE BASED REDIRECT
//       if (res.data.user.role === "seller") {
//         navigate("/seller/dashboard");
//       } else {
//         navigate("/");
//       }

//     } catch (err) {
//       console.log(err.response?.data);
//       alert(err.response?.data?.message || "Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex justify-center mt-20">
//       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">
//         <h2 className="text-xl font-bold mb-4">Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border p-2 mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
//           Login
//         </button>

//         <p className="mt-3 text-sm">
//           Forgot password?{" "}
//           <span
//             className="text-blue-500 cursor-pointer"
//             onClick={() => navigate("/forgot-password")}
//           >
//             Reset here
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;



//new ui

import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");

      if (res.data.user.role === "seller") {
        navigate("/seller/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f5f5f5]">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-12">
        <div className="w-full max-w-md">

          {/* LOGO */}
          <div className="mb-10">
            
            <div className="text-3xl font-semibold text-pink-700">Luxora</div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Sign in</h2>

          <form onSubmit={handleSubmit}>

            <label className="text-sm text-gray-600">Email Address</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-white">
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label className="text-sm text-gray-600">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-white">
              <input
                type="password"
                placeholder="••••••"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center gap-2 mb-4 text-sm">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>

            <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:opacity-90">
              Sign in
            </button>

            <div className="mt-4 text-sm text-gray-500">
              Don’t have an account? 
              {/* <span className="cursor-pointer">Sign up</span> */}
              <span
  className="cursor-pointer underline"
  onClick={() => navigate("/register")}
>
  Sign up
</span>
            </div>

            <div
              className="text-sm text-gray-500 cursor-pointer mt-1"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot Password
            </div>

            {/* SOCIAL */}
            {/* <div className="flex gap-4 mt-6">
              <div className="w-10 h-10 bg-white border rounded-full flex items-center justify-center">G</div>
              <div className="w-10 h-10 bg-white border rounded-full flex items-center justify-center">GH</div>
              <div className="w-10 h-10 bg-white border rounded-full flex items-center justify-center">F</div>
            </div> */}

          </form>
          
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-1/2 bg-pink-800 text-white p-12 flex-col justify-between rounded-l-[50px] relative overflow-hidden">

        <div>
          <div className="mb-6 flex justify-center">
            <img
            src="/images/luxoraicon.png"
            alt="Luxora logo"
            className="w-48 h-48 object-contain rounded-xl"
            />
            </div>

          <div className="text-3xl font-semibold text-white mb-2">Luxora</div>
          <h2 className="text-3xl font-semibold mb-4">Welcome to Luxora</h2>
          <p className="text-gray-400 max-w-sm text-sm">
            Luxora brings you a seamless shopping experience with stylish and high-quality products. Join now and explore more
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl max-w-sm ml-70">
          <h3 className="text-lg font-semibold mb-2">
            Find it. Love it. Buy it.
          </h3>
          <p className="text-gray-400 text-sm">
            Be among the first to experience effortless and enjoyable shopping with Luxora.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;