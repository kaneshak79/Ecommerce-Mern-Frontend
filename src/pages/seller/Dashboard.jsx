// // import React, { useEffect, useState } from "react";
// // import axios from "../../utils/axios";

// // const Dashboard = () => {
// //   const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });

// //   const fetchStats = async () => {
// //     try {
// //       const res = await axios.get("/seller/dashboard");
// //       setStats(res.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchStats();
// //   }, []);

// //   return (
// //     <div className="container mx-auto p-4 space-y-6">
// //       <h1 className="text-3xl font-bold mb-4">Seller Dashboard</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <div className="p-6 bg-blue-500 text-white rounded shadow">
// //           <h2 className="text-xl font-semibold">Products</h2>
// //           <p className="text-3xl mt-2">{stats.products}</p>
// //         </div>
// //         <div className="p-6 bg-green-500 text-white rounded shadow">
// //           <h2 className="text-xl font-semibold">Orders</h2>
// //           <p className="text-3xl mt-2">{stats.orders}</p>
// //         </div>
// //         <div className="p-6 bg-yellow-500 text-white rounded shadow">
// //           <h2 className="text-xl font-semibold">Revenue</h2>
// //           <p className="text-3xl mt-2">${stats.revenue}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;




// // src/pages/seller/Dashboard.jsx
// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     products: 0,
//     orders: 0,
//     revenue: 0,
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await axios.get("/seller/dashboard", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         // backend should return { products: X, orders: Y, revenue: Z }
//         setStats(res.data);
//       } catch (err) {
//         console.error("Error fetching seller stats:", err);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Seller Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="border p-4 rounded shadow">
//           <h2 className="font-semibold text-xl">Products</h2>
//           <p className="text-2xl">{stats.products}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h2 className="font-semibold text-xl">Orders</h2>
//           <p className="text-2xl">{stats.orders}</p>
//         </div>
//         <div className="border p-4 rounded shadow">
//           <h2 className="font-semibold text-xl">Revenue</h2>
//           <p className="text-2xl">${stats.revenue.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// src/pages/seller/Dashboard.jsx

import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    revenue: 0,
  });

  const [loading, setLoading] = useState(true);

  // ✅ Fetch dashboard data
  const fetchStats = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/seller/dashboard");

      setStats({
        products: res.data.products || 0,
        orders: res.data.orders || 0,
        revenue: res.data.revenue || 0,
      });

    } catch (err) {
      console.error("Error fetching seller stats:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Run on page load
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="container mx-auto p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Seller Dashboard</h1>

        {/* 🔥 Manual Refresh Button */}
        <button
          onClick={fetchStats}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center p-10 text-lg">
          Loading dashboard...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Products */}
          <div className="border p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-xl mb-2">Products</h2>
            <p className="text-3xl font-bold text-blue-600">
              {stats.products}
            </p>
          </div>

          {/* Orders */}
          <div className="border p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-xl mb-2">Orders</h2>
            <p className="text-3xl font-bold text-green-600">
              {stats.orders}
            </p>
          </div>

          {/* Revenue */}
          <div className="border p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-xl mb-2">Revenue</h2>
            <p className="text-3xl font-bold text-purple-600">
              ${stats.revenue.toFixed(2)}
            </p>
          </div>

        </div>
      )}

    </div>
  );
};

export default Dashboard;