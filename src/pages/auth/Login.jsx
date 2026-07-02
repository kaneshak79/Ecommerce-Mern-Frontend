
//     </div>
//   );
// };

// export default Login;


// src/pages/auth/Login.jsx
import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ✅ correct path

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { email, password });

      // ✅ Update context and localStorage immediately
      login(res.data.user, res.data.token);

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
          <div className="mb-10 text-3xl font-semibold text-pink-700">Luxora</div>
          <h2 className="text-3xl font-semibold mb-6">Sign in</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition">
              Sign In
            </button>
          </form>

          <div className="mt-4 text-sm text-gray-500 flex justify-between">
            <span onClick={() => navigate("/register")} className="underline cursor-pointer">
              Sign up
            </span>
            <span onClick={() => navigate("/forgotpassword")} className="cursor-pointer">
              Forgot Password
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-1/2 bg-pink-800 text-white p-12 flex-col justify-between rounded-l-[50px] relative">
        <div className="text-center">
          <img src="/images/luxoraicon.png" className="w-48 h-48 mx-auto rounded-xl" />
          <h2 className="text-3xl font-semibold mt-4">Welcome to Luxora</h2>
          <p className="text-gray-300 mt-2 max-w-sm mx-auto">
            Seamless shopping with stylish and high-quality products. Join now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
