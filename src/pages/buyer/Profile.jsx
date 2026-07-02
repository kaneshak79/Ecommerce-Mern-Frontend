

//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const Profile = () => {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [message, setMessage] = useState("");

  const fetchProfile = async () => {
    try {
      const res = await axios.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(res.data);
      setForm({
        name: res.data.name || "",
        email: res.data.email || "",
        address: res.data.address || "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/auth/profile", form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMessage("Profile updated successfully!");
      fetchProfile();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* 🔹 SIDEBAR - ONLY PROFILE */}
        <div className="w-64 bg-white rounded-2xl p-6 shadow-md animate-slide-left">
          <ul className="space-y-4 text-gray-600 font-medium">
            <li className="text-pink-600 font-bold border-l-4 border-pink-600 pl-3">
              My Profile
            </li>
          </ul>
        </div>

        {/* 🔹 MAIN CONTENT */}
        <div className="flex-1 flex flex-col gap-6 animate-slide-up">

          {/* PROFILE CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-6 transition transform hover:scale-[1.02] hover:shadow-2xl duration-300">
            <div className="w-28 h-28 rounded-full bg-pink-100 flex items-center justify-center text-4xl animate-bounce">
              👤
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{user.name || "No Name"}</h2>
              <p className="text-gray-600 mt-1">Email: {user.email || "Not available"}</p>
              <p className="text-gray-600 mt-1">Address: {user.address || "Not added"}</p>
            </div>
          </div>

          {/* EDIT FORM */}
          <div className="bg-white rounded-2xl p-6 shadow-lg transition transform hover:scale-[1.01] hover:shadow-xl duration-300">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Edit Profile</h3>

            {message && (
              <p className="text-green-500 mb-3 animate-pulse">{message}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow shadow-sm"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow shadow-sm"
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-shadow shadow-sm"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Update Profile
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
