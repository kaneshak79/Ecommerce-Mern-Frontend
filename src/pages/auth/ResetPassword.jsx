
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
