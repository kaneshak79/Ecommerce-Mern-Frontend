
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
