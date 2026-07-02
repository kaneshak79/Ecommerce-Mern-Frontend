



//new ui


import React, { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let payload = { name, email, password };
      let endpoint = "/auth/register";

      if (role === "seller") {
        payload = { ...payload, storeName, storeDescription };
        endpoint = "/auth/register/seller";
      } else {
        endpoint = "/auth/register/buyer";
      }

      await axios.post(endpoint, payload);

      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f5f5f5]">

      {/* LEFT */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-12">
        <div className="w-full max-w-md">

          <div className="mb-10">
            {/* <div className="text-2xl font-bold">A</div> */}
            <div className="text-3xl font-semibold text-pink-700">Luxora</div>
          </div>

          <h2 className="text-3xl font-semibold mb-6">Create Account</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <select
              className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="buyer">Register as Buyer</option>
              <option value="seller">Register as Seller</option>
            </select>

            {role === "seller" && (
              <>
                <input
                  type="text"
                  placeholder="Store Name"
                  className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Store Description"
                  className="w-full border rounded-lg px-3 py-2 mb-4 bg-white"
                  value={storeDescription}
                  onChange={(e) => setStoreDescription(e.target.value)}
                  required
                />
              </>
            )}

            <button className="w-full bg-gray-700 text-white py-3 rounded-lg">
              Register
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Already have an account?{" "}
              <span
                className="cursor-pointer underline"
                onClick={() => navigate("/login")}
              >
                Login here
              </span>
            </p>

          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex w-1/2 bg-pink-800 text-white p-12 flex-col justify-between rounded-l-[50px]">
        <div>
          {/* LOGO IMAGE */}
          <div className="mb-6 flex justify-center">
            <img
              src="/images/luxoraicon.png"  /* 👉 place your image in public folder */
              alt="Luxora Logo"
              className="w-48 h-48 object-contain rounded-xl"
            />
          </div>

          <div className="text-3xl text-white font-semibold mb-2 ">Luxora</div>
          <h2 className="text-3xl font-semibold mb-4 ">Join Luxora</h2>
          {/* <div className="flex"> */}
          <p className="text-gray-300 max-w-sm text-sm ">
            Create your account to shop smarter and faster.
            Luxora is your go-to destination for trendy, high-quality products at unbeatable prices.

         </p>
         {/* <p className="text-gray-300 max-w-sm text-sm flex justify-center">
          Luxora is your go-to destination for trendy, high-quality products at unbeatable prices.

</p> */}
</div>
        {/* </div> */}

        <div className="bg-gray-800 p-6 rounded-2xl max-w-sm ml-70">
          <h3 className="text-lg font-semibold mb-2">
            Start your journey today
          </h3>
          <p className="text-gray-400 text-sm">
            Join thousands of shoppers discovering amazing deals every day
          </p>
        </div>
      </div>

    </div>
  );
};

export default Register;
