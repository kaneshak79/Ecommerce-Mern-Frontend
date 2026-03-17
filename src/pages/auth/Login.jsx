

// // // import React, { useState } from "react";
// // // import axios from "../../utils/axios";
// // // import { useNavigate } from "react-router-dom";

// // // const Login = () => {
// // //   const navigate = useNavigate();

// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [role, setRole] = useState("buyer"); // Select role before login

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       // Login endpoint changes based on role
// // //       const endpoint =
// // //         role === "seller"
// // //           ? "/auth/login/seller"
// // //           : "/auth/login/buyer";

// // //       const res = await axios.post(endpoint, { email, password });

// // //       // Save token in localStorage (or Context)
// // //       localStorage.setItem("token", res.data.token);
// // //       localStorage.setItem("userRole", res.data.user.role);

// // //       alert("Login Successful!");

// // //       // Redirect based on role
// // //       if (res.data.user.role === "buyer") {
// // //         navigate("/home");
// // //       } else if (res.data.user.role === "seller") {
// // //         navigate("/seller/dashboard");
// // //       }

// // //     } catch (err) {
// // //       console.log(err.response?.data);
// // //       alert(err.response?.data?.message || "Invalid credentials");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex justify-center mt-20">
// // //       <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">
// // //         <h2 className="text-xl font-bold mb-4">Login</h2>

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           className="w-full border p-2 mb-3"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           required
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           className="w-full border p-2 mb-3"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           required
// // //         />

// // //         {/* Role selector */}
// // //         <select
// // //           className="w-full border p-2 mb-3"
// // //           value={role}
// // //           onChange={(e) => setRole(e.target.value)}
// // //         >
// // //           <option value="buyer">Login as Buyer</option>
// // //           <option value="seller">Login as Seller</option>
// // //         </select>

// // //         <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
// // //           Login
// // //         </button>

// // //         <p className="mt-3 text-sm">
// // //           Forgot password?{" "}
// // //           <span
// // //             className="text-blue-500 cursor-pointer"
// // //             onClick={() => navigate("/forgot-password")}
// // //           >
// // //             Reset here
// // //           </span>
// // //         </p>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default Login;


// // // src/pages/auth/Login.jsx

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
//       // Single backend endpoint for both buyer and seller
//       const res = await axios.post("/auth/login", { email, password });

//       // Save token and role
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("userRole", res.data.user.role);

//       alert("Login Successful!");

//       // Redirect based on role
//       if (res.data.user.role === "buyer") {
//         navigate("/");
//       } else if (res.data.user.role === "seller") {
//         navigate("/seller/dashboard");
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





// src/pages/auth/Login.jsx

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

      // ✅ STORE FULL USER (IMPORTANT FIX)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");

      // ✅ ROLE BASED REDIRECT
      if (res.data.user.role === "seller") {
        navigate("/seller/dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit} className="w-96 border p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>

        <p className="mt-3 text-sm">
          Forgot password?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/forgot-password")}
          >
            Reset here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;