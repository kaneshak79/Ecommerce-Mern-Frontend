// // // // // // // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // // // // // // import axios from "../../utils/axios";

// // // // // // // // // // // // // // // // // // const Dashboard = () => {
// // // // // // // // // // // // // // // // // //   const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });

// // // // // // // // // // // // // // // // // //   const fetchStats = async () => {
// // // // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // // // //       const res = await axios.get("/seller/dashboard");
// // // // // // // // // // // // // // // // // //       setStats(res.data);
// // // // // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // // // // //       console.log(err);
// // // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // //     fetchStats();
// // // // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <div className="container mx-auto p-4 space-y-6">
// // // // // // // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Seller Dashboard</h1>
// // // // // // // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // // // // // // // // // // // // //         <div className="p-6 bg-blue-500 text-white rounded shadow">
// // // // // // // // // // // // // // // // // //           <h2 className="text-xl font-semibold">Products</h2>
// // // // // // // // // // // // // // // // // //           <p className="text-3xl mt-2">{stats.products}</p>
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //         <div className="p-6 bg-green-500 text-white rounded shadow">
// // // // // // // // // // // // // // // // // //           <h2 className="text-xl font-semibold">Orders</h2>
// // // // // // // // // // // // // // // // // //           <p className="text-3xl mt-2">{stats.orders}</p>
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //         <div className="p-6 bg-yellow-500 text-white rounded shadow">
// // // // // // // // // // // // // // // // // //           <h2 className="text-xl font-semibold">Revenue</h2>
// // // // // // // // // // // // // // // // // //           <p className="text-3xl mt-2">${stats.revenue}</p>
// // // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default Dashboard;




// // // // // // // // // // // // // // // // // // src/pages/seller/Dashboard.jsx
// // // // // // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // // // // // import axios from "../../utils/axios";

// // // // // // // // // // // // // // // // // const Dashboard = () => {
// // // // // // // // // // // // // // // // //   const [stats, setStats] = useState({
// // // // // // // // // // // // // // // // //     products: 0,
// // // // // // // // // // // // // // // // //     orders: 0,
// // // // // // // // // // // // // // // // //     revenue: 0,
// // // // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // //     const fetchStats = async () => {
// // // // // // // // // // // // // // // // //       try {
// // // // // // // // // // // // // // // // //         const res = await axios.get("/seller/dashboard", {
// // // // // // // // // // // // // // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // // // // // // // // // // // // // //         });
// // // // // // // // // // // // // // // // //         // backend should return { products: X, orders: Y, revenue: Z }
// // // // // // // // // // // // // // // // //         setStats(res.data);
// // // // // // // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // // // // // // //         console.error("Error fetching seller stats:", err);
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     };

// // // // // // // // // // // // // // // // //     fetchStats();
// // // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <div className="container mx-auto p-4">
// // // // // // // // // // // // // // // // //       <h1 className="text-3xl font-bold mb-4">Seller Dashboard</h1>
// // // // // // // // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // // // // // // // // // // // // //         <div className="border p-4 rounded shadow">
// // // // // // // // // // // // // // // // //           <h2 className="font-semibold text-xl">Products</h2>
// // // // // // // // // // // // // // // // //           <p className="text-2xl">{stats.products}</p>
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //         <div className="border p-4 rounded shadow">
// // // // // // // // // // // // // // // // //           <h2 className="font-semibold text-xl">Orders</h2>
// // // // // // // // // // // // // // // // //           <p className="text-2xl">{stats.orders}</p>
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //         <div className="border p-4 rounded shadow">
// // // // // // // // // // // // // // // // //           <h2 className="font-semibold text-xl">Revenue</h2>
// // // // // // // // // // // // // // // // //           <p className="text-2xl">${stats.revenue.toFixed(2)}</p>
// // // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default Dashboard;



// // // // // // // // // // // // // // // // // src/pages/seller/Dashboard.jsx

// // // // // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // // // // import axios from "../../utils/axios";

// // // // // // // // // // // // // // // // const Dashboard = () => {
// // // // // // // // // // // // // // // //   const [stats, setStats] = useState({
// // // // // // // // // // // // // // // //     products: 0,
// // // // // // // // // // // // // // // //     orders: 0,
// // // // // // // // // // // // // // // //     revenue: 0,
// // // // // // // // // // // // // // // //   });

// // // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // // // // // //   // ✅ Fetch dashboard data
// // // // // // // // // // // // // // // //   const fetchStats = async () => {
// // // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // // //       setLoading(true);

// // // // // // // // // // // // // // // //       const res = await axios.get("/seller/dashboard");

// // // // // // // // // // // // // // // //       setStats({
// // // // // // // // // // // // // // // //         products: res.data.products || 0,
// // // // // // // // // // // // // // // //         orders: res.data.orders || 0,
// // // // // // // // // // // // // // // //         revenue: res.data.revenue || 0,
// // // // // // // // // // // // // // // //       });

// // // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // // //       console.error("Error fetching seller stats:", err);
// // // // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // //   // ✅ Run on page load
// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     fetchStats();
// // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <div className="container mx-auto p-4">

// // // // // // // // // // // // // // // //       {/* Header */}
// // // // // // // // // // // // // // // //       <div className="flex justify-between items-center mb-6">
// // // // // // // // // // // // // // // //         <h1 className="text-3xl font-bold">Seller Dashboard</h1>

// // // // // // // // // // // // // // // //         {/* 🔥 Manual Refresh Button */}
// // // // // // // // // // // // // // // //         <button
// // // // // // // // // // // // // // // //           onClick={fetchStats}
// // // // // // // // // // // // // // // //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // // //           Refresh
// // // // // // // // // // // // // // // //         </button>
// // // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // // //       {/* Loading */}
// // // // // // // // // // // // // // // //       {loading ? (
// // // // // // // // // // // // // // // //         <div className="text-center p-10 text-lg">
// // // // // // // // // // // // // // // //           Loading dashboard...
// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       ) : (
// // // // // // // // // // // // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

// // // // // // // // // // // // // // // //           {/* Products */}
// // // // // // // // // // // // // // // //           <div className="border p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // // // //             <h2 className="font-semibold text-xl mb-2">Products</h2>
// // // // // // // // // // // // // // // //             <p className="text-3xl font-bold text-blue-600">
// // // // // // // // // // // // // // // //               {stats.products}
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // // //           {/* Orders */}
// // // // // // // // // // // // // // // //           <div className="border p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // // // //             <h2 className="font-semibold text-xl mb-2">Orders</h2>
// // // // // // // // // // // // // // // //             <p className="text-3xl font-bold text-green-600">
// // // // // // // // // // // // // // // //               {stats.orders}
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // // //           {/* Revenue */}
// // // // // // // // // // // // // // // //           <div className="border p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // // // //             <h2 className="font-semibold text-xl mb-2">Revenue</h2>
// // // // // // // // // // // // // // // //             <p className="text-3xl font-bold text-purple-600">
// // // // // // // // // // // // // // // //               ${stats.revenue.toFixed(2)}
// // // // // // // // // // // // // // // //             </p>
// // // // // // // // // // // // // // // //           </div>

// // // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // // //       )}

// // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default Dashboard;

// // // // // // // // // // // // // // // //new ui
// // // // // // // // // // // // // // // // src/pages/seller/Dashboard.jsx
// // // // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // // // import axios from "../../utils/axios";

// // // // // // // // // // // // // // // const Dashboard = () => {
// // // // // // // // // // // // // // //   const [stats, setStats] = useState({
// // // // // // // // // // // // // // //     products: 0,
// // // // // // // // // // // // // // //     orders: 0,
// // // // // // // // // // // // // // //     revenue: 0,
// // // // // // // // // // // // // // //   });
// // // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // // // // //   // Fetch dashboard data
// // // // // // // // // // // // // // //   const fetchStats = async () => {
// // // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // // //       setLoading(true);
// // // // // // // // // // // // // // //       const res = await axios.get("/seller/dashboard");
// // // // // // // // // // // // // // //       setStats({
// // // // // // // // // // // // // // //         products: res.data.products || 0,
// // // // // // // // // // // // // // //         orders: res.data.orders || 0,
// // // // // // // // // // // // // // //         revenue: res.data.revenue || 0,
// // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // // //       console.error("Error fetching seller stats:", err);
// // // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     fetchStats();
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   // Dummy orders data for UI (replace with real data later if you have it)
// // // // // // // // // // // // // // //   const orders = [
// // // // // // // // // // // // // // //     { no: 1, product: "Product A", status: "Delivered", date: "2026-03-18", buyer: "John Doe" },
// // // // // // // // // // // // // // //     { no: 2, product: "Product B", status: "Pending", date: "2026-03-17", buyer: "Jane Smith" },
// // // // // // // // // // // // // // //     { no: 3, product: "Product C", status: "Cancelled", date: "2026-03-16", buyer: "Alice Brown" },
// // // // // // // // // // // // // // //   ];

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <div className="flex min-h-screen bg-gray-100">

// // // // // // // // // // // // // // //       {/* Left Sidebar */}
// // // // // // // // // // // // // // //       <aside className="w-64 bg-white shadow-lg">
// // // // // // // // // // // // // // //         <div className="p-6 border-b">
// // // // // // // // // // // // // // //           <h2 className="text-2xl font-bold">Seller Panel</h2>
// // // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // // //         <nav className="mt-4">
// // // // // // // // // // // // // // //           <ul>
// // // // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // // // // // // // // // // // //               Dashboard
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // // // // // // // // // // // //               Products
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // // // // // // // // // // // //               Orders
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // // // // // // // // // // // //               Settings
// // // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // // //           </ul>
// // // // // // // // // // // // // // //         </nav>
// // // // // // // // // // // // // // //       </aside>

// // // // // // // // // // // // // // //       {/* Right Main Content */}
// // // // // // // // // // // // // // //       <main className="flex-1 p-6">
// // // // // // // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // // // // // // //           <h1 className="text-3xl font-bold">Dashboard</h1>
// // // // // // // // // // // // // // //           <button
// // // // // // // // // // // // // // //             onClick={fetchStats}
// // // // // // // // // // // // // // //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             Refresh
// // // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // // //         {loading ? (
// // // // // // // // // // // // // // //           <div className="text-center p-10 text-lg">Loading dashboard...</div>
// // // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // // //           <>
// // // // // // // // // // // // // // //             {/* Stats Cards */}
// // // // // // // // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Products</h2>
// // // // // // // // // // // // // // //                 <p className="text-3xl font-bold text-blue-600">{stats.products}</p>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Orders</h2>
// // // // // // // // // // // // // // //                 <p className="text-3xl font-bold text-green-600">{stats.orders}</p>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Revenue</h2>
// // // // // // // // // // // // // // //                 <p className="text-3xl font-bold text-purple-600">${stats.revenue.toFixed(2)}</p>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // //             {/* Chart Placeholder */}
// // // // // // // // // // // // // // //             <div className="bg-white p-6 rounded shadow mb-6">
// // // // // // // // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Sales Chart</h2>
// // // // // // // // // // // // // // //               <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
// // // // // // // // // // // // // // //                 Chart goes here
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // // //             {/* Orders Table */}
// // // // // // // // // // // // // // //             <div className="bg-white p-6 rounded shadow">
// // // // // // // // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Recent Orders</h2>
// // // // // // // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // // // // // // //                 <table className="w-full table-auto border-collapse">
// // // // // // // // // // // // // // //                   <thead>
// // // // // // // // // // // // // // //                     <tr className="bg-gray-100">
// // // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">No</th>
// // // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">Product</th>
// // // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">Status</th>
// // // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">Date</th>
// // // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">Buyer</th>
// // // // // // // // // // // // // // //                     </tr>
// // // // // // // // // // // // // // //                   </thead>
// // // // // // // // // // // // // // //                   <tbody>
// // // // // // // // // // // // // // //                     {orders.map((order) => (
// // // // // // // // // // // // // // //                       <tr key={order.no} className="hover:bg-gray-50">
// // // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.no}</td>
// // // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.product}</td>
// // // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.status}</td>
// // // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.date}</td>
// // // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.buyer}</td>
// // // // // // // // // // // // // // //                       </tr>
// // // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // // //                   </tbody>
// // // // // // // // // // // // // // //                 </table>
// // // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // // //           </>
// // // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // // //       </main>
// // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Dashboard;


// // // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //   LineChart,
// // // // // // // // // // // // // //   Line,
// // // // // // // // // // // // // //   XAxis,
// // // // // // // // // // // // // //   YAxis,
// // // // // // // // // // // // // //   CartesianGrid,
// // // // // // // // // // // // // //   Tooltip,
// // // // // // // // // // // // // //   ResponsiveContainer,
// // // // // // // // // // // // // // } from "recharts";

// // // // // // // // // // // // // // const Dashboard = () => {
// // // // // // // // // // // // // //   const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });
// // // // // // // // // // // // // //   const [salesData, setSalesData] = useState([]);
// // // // // // // // // // // // // //   const [orders, setOrders] = useState([]);
// // // // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // // // //   const fetchStats = async () => {
// // // // // // // // // // // // // //     try {
// // // // // // // // // // // // // //       setLoading(true);
// // // // // // // // // // // // // //       const res = await axios.get("/seller/dashboard");

// // // // // // // // // // // // // //       setStats({
// // // // // // // // // // // // // //         products: res.data.products || 0,
// // // // // // // // // // // // // //         orders: res.data.orders || 0,
// // // // // // // // // // // // // //         revenue: res.data.revenue || 0,
// // // // // // // // // // // // // //       });

// // // // // // // // // // // // // //       // Chart data
// // // // // // // // // // // // // //       setSalesData(res.data.salesByDate || []);
// // // // // // // // // // // // // //       // Recent orders
// // // // // // // // // // // // // //       setOrders(res.data.recentOrders || []);
// // // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // // //       console.error("Error fetching seller stats:", err);
// // // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     fetchStats();
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className="flex min-h-screen bg-gray-100">
// // // // // // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // // // // // //       <aside className="w-64 bg-white shadow-lg">
// // // // // // // // // // // // // //         <div className="p-6 border-b">
// // // // // // // // // // // // // //           <h2 className="text-2xl font-bold">Seller Panel</h2>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //         <nav className="mt-4">
// // // // // // // // // // // // // //           <ul>
// // // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // // // // // // // // // // //               Dashboard
// // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // // // // // // // // // // //               Products
// // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // // // // // // // // // // //               Orders
// // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // //           </ul>
// // // // // // // // // // // // // //         </nav>
// // // // // // // // // // // // // //       </aside>

// // // // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // // // //       <main className="flex-1 p-6">
// // // // // // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // // // // // //           <h1 className="text-3xl font-bold">Dashboard</h1>
// // // // // // // // // // // // // //           <button
// // // // // // // // // // // // // //             onClick={fetchStats}
// // // // // // // // // // // // // //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             Refresh
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </div>

// // // // // // // // // // // // // //         {loading ? (
// // // // // // // // // // // // // //           <div className="text-center p-10 text-lg">Loading dashboard...</div>
// // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // //           <>
// // // // // // // // // // // // // //             {/* Stats Cards */}
// // // // // // // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Products</h2>
// // // // // // // // // // // // // //                 <p className="text-3xl font-bold text-blue-600">{stats.products}</p>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Orders</h2>
// // // // // // // // // // // // // //                 <p className="text-3xl font-bold text-green-600">{stats.orders}</p>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Revenue</h2>
// // // // // // // // // // // // // //                 <p className="text-3xl font-bold text-purple-600">${stats.revenue.toFixed(2)}</p>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Sales Chart */}
// // // // // // // // // // // // // //             <div className="bg-white p-6 rounded shadow mb-6">
// // // // // // // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Sales Chart</h2>
// // // // // // // // // // // // // //               {salesData.length > 0 ? (
// // // // // // // // // // // // // //                 <ResponsiveContainer width="100%" height={300}>
// // // // // // // // // // // // // //                   <LineChart data={salesData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
// // // // // // // // // // // // // //                     <CartesianGrid stroke="#f5f5f5" />
// // // // // // // // // // // // // //                     <XAxis dataKey="date" />
// // // // // // // // // // // // // //                     <YAxis />
// // // // // // // // // // // // // //                     <Tooltip />
// // // // // // // // // // // // // //                     <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
// // // // // // // // // // // // // //                     <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
// // // // // // // // // // // // // //                   </LineChart>
// // // // // // // // // // // // // //                 </ResponsiveContainer>
// // // // // // // // // // // // // //               ) : (
// // // // // // // // // // // // // //                 <div className="h-48 flex items-center justify-center text-gray-500">
// // // // // // // // // // // // // //                   No sales data
// // // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // // //               )}
// // // // // // // // // // // // // //             </div>

// // // // // // // // // // // // // //             {/* Orders Table */}
// // // // // // // // // // // // // //             <div className="bg-white p-6 rounded shadow">
// // // // // // // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Recent Orders</h2>
// // // // // // // // // // // // // //               <div className="overflow-x-auto">
// // // // // // // // // // // // // //                 <table className="w-full table-auto border-collapse">
// // // // // // // // // // // // // //                   <thead>
// // // // // // // // // // // // // //                     <tr className="bg-gray-100">
// // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">No</th>
// // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">Product</th>
// // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">Status</th>
// // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">Date</th>
// // // // // // // // // // // // // //                       <th className="border px-4 py-2 text-left">Buyer</th>
// // // // // // // // // // // // // //                     </tr>
// // // // // // // // // // // // // //                   </thead>
// // // // // // // // // // // // // //                   <tbody>
// // // // // // // // // // // // // //                     {orders.map((order, idx) => (
// // // // // // // // // // // // // //                       <tr key={order._id || idx} className="hover:bg-gray-50">
// // // // // // // // // // // // // //                         <td className="border px-4 py-2">{idx + 1}</td>
// // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.productName}</td>
// // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.status}</td>
// // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.date}</td>
// // // // // // // // // // // // // //                         <td className="border px-4 py-2">{order.buyerName}</td>
// // // // // // // // // // // // // //                       </tr>
// // // // // // // // // // // // // //                     ))}
// // // // // // // // // // // // // //                   </tbody>
// // // // // // // // // // // // // //                 </table>
// // // // // // // // // // // // // //               </div>
// // // // // // // // // // // // // //             </div>
// // // // // // // // // // // // // //           </>
// // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // //       </main>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Dashboard;


// // // // // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // // // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // // // // // // // // // // // // const Dashboard = () => {
// // // // // // // // // // // // //   const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });
// // // // // // // // // // // // //   const [salesData, setSalesData] = useState([]); // Will be empty
// // // // // // // // // // // // //   const [orders, setOrders] = useState([]); // Will be empty
// // // // // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // // // // //   const fetchStats = async () => {
// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       setLoading(true);
// // // // // // // // // // // // //       const res = await axios.get("/seller/dashboard");
// // // // // // // // // // // // //       setStats({
// // // // // // // // // // // // //         products: res.data.products || 0,
// // // // // // // // // // // // //         orders: res.data.orders || 0,
// // // // // // // // // // // // //         revenue: res.data.revenue || 0,
// // // // // // // // // // // // //       });

// // // // // // // // // // // // //       // Backend might not have these yet
// // // // // // // // // // // // //       setSalesData(res.data.salesByDate || []);
// // // // // // // // // // // // //       setOrders(res.data.recentOrders || []);
// // // // // // // // // // // // //     } catch (err) {
// // // // // // // // // // // // //       console.error("Error fetching seller stats:", err);
// // // // // // // // // // // // //     } finally {
// // // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     fetchStats();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   // Dummy chart data if backend has none
// // // // // // // // // // // // //   const placeholderChartData = [
// // // // // // // // // // // // //     { date: "Mon", orders: 0, revenue: 0 },
// // // // // // // // // // // // //     { date: "Tue", orders: 0, revenue: 0 },
// // // // // // // // // // // // //     { date: "Wed", orders: 0, revenue: 0 },
// // // // // // // // // // // // //     { date: "Thu", orders: 0, revenue: 0 },
// // // // // // // // // // // // //     { date: "Fri", orders: 0, revenue: 0 },
// // // // // // // // // // // // //     { date: "Sat", orders: 0, revenue: 0 },
// // // // // // // // // // // // //     { date: "Sun", orders: 0, revenue: 0 },
// // // // // // // // // // // // //   ];

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="flex min-h-screen bg-gray-100">
// // // // // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // // // // //       <aside className="w-64 bg-white shadow-lg">
// // // // // // // // // // // // //         <div className="p-6 border-b">
// // // // // // // // // // // // //           <h2 className="text-2xl font-bold">Seller Panel</h2>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //         <nav className="mt-4">
// // // // // // // // // // // // //           <ul>
// // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Dashboard</li>
// // // // // // // // // // // // //             {/* <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Products</li>
// // // // // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Orders</li> */}
// // // // // // // // // // // // //           </ul>
// // // // // // // // // // // // //         </nav>
// // // // // // // // // // // // //       </aside>

// // // // // // // // // // // // //       {/* Main Content */}
// // // // // // // // // // // // //       <main className="flex-1 p-6">
// // // // // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // // // // //           <h1 className="text-3xl font-bold">Dashboard</h1>
// // // // // // // // // // // // //           <button onClick={fetchStats} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // // // // // // //             Refresh
// // // // // // // // // // // // //           </button>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         {loading ? (
// // // // // // // // // // // // //           <div className="text-center p-10 text-lg">Loading dashboard...</div>
// // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // //           <>
// // // // // // // // // // // // //             {/* Stats Cards */}
// // // // // // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Products</h2>
// // // // // // // // // // // // //                 <p className="text-3xl font-bold text-blue-600">{stats.products}</p>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Orders</h2>
// // // // // // // // // // // // //                 <p className="text-3xl font-bold text-green-600">{stats.orders}</p>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Revenue</h2>
// // // // // // // // // // // // //                 <p className="text-3xl font-bold text-purple-600">${stats.revenue.toFixed(2)}</p>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Sales Chart */}
// // // // // // // // // // // // //             <div className="bg-white p-6 rounded shadow mb-6">
// // // // // // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Sales Chart</h2>
// // // // // // // // // // // // //               <ResponsiveContainer width="100%" height={300}>
// // // // // // // // // // // // //                 <LineChart
// // // // // // // // // // // // //                   data={salesData.length > 0 ? salesData : placeholderChartData}
// // // // // // // // // // // // //                   margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
// // // // // // // // // // // // //                 >
// // // // // // // // // // // // //                   <CartesianGrid stroke="#f5f5f5" />
// // // // // // // // // // // // //                   <XAxis dataKey="date" />
// // // // // // // // // // // // //                   <YAxis />
// // // // // // // // // // // // //                   <Tooltip />
// // // // // // // // // // // // //                   <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
// // // // // // // // // // // // //                   <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
// // // // // // // // // // // // //                 </LineChart>
// // // // // // // // // // // // //               </ResponsiveContainer>
// // // // // // // // // // // // //               {salesData.length === 0 && (
// // // // // // // // // // // // //                 <p className="text-center text-gray-500 mt-2">No sales data yet</p>
// // // // // // // // // // // // //               )}
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Orders Table */}
// // // // // // // // // // // // //             <div className="bg-white p-6 rounded shadow">
// // // // // // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Recent Orders</h2>
// // // // // // // // // // // // //               {orders.length === 0 ? (
// // // // // // // // // // // // //                 <div className="text-center py-10 text-gray-500">
// // // // // // // // // // // // //                   No orders yet. Once users place orders, they will appear here.
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               ) : (
// // // // // // // // // // // // //                 <div className="overflow-x-auto">
// // // // // // // // // // // // //                   <table className="w-full table-auto border-collapse">
// // // // // // // // // // // // //                     <thead>
// // // // // // // // // // // // //                       <tr className="bg-gray-100">
// // // // // // // // // // // // //                         <th className="border px-4 py-2 text-left">No</th>
// // // // // // // // // // // // //                         <th className="border px-4 py-2 text-left">Product</th>
// // // // // // // // // // // // //                         <th className="border px-4 py-2 text-left">Status</th>
// // // // // // // // // // // // //                         <th className="border px-4 py-2 text-left">Date</th>
// // // // // // // // // // // // //                         <th className="border px-4 py-2 text-left">Buyer</th>
// // // // // // // // // // // // //                       </tr>
// // // // // // // // // // // // //                     </thead>
// // // // // // // // // // // // //                     <tbody>
// // // // // // // // // // // // //                       {orders.map((order, idx) => (
// // // // // // // // // // // // //                         <tr key={order._id || idx} className="hover:bg-gray-50">
// // // // // // // // // // // // //                           <td className="border px-4 py-2">{idx + 1}</td>
// // // // // // // // // // // // //                           <td className="border px-4 py-2">{order.productName}</td>
// // // // // // // // // // // // //                           <td className="border px-4 py-2">{order.status}</td>
// // // // // // // // // // // // //                           <td className="border px-4 py-2">{order.date}</td>
// // // // // // // // // // // // //                           <td className="border px-4 py-2">{order.buyerName}</td>
// // // // // // // // // // // // //                         </tr>
// // // // // // // // // // // // //                       ))}
// // // // // // // // // // // // //                     </tbody>
// // // // // // // // // // // // //                   </table>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               )}
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </main>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Dashboard;


// // // // // // // // // // src/pages/seller/Dashboard.jsx
// // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // // // // // // // // const Dashboard = () => {
// // // // // // // // //   const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });
// // // // // // // // //   const [salesData, setSalesData] = useState([]);
// // // // // // // // //   const [orders, setOrders] = useState([]);
// // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // //   const fetchStats = async () => {
// // // // // // // // //     try {
// // // // // // // // //       setLoading(true);
// // // // // // // // //       const res = await axios.get("/seller/dashboard");
// // // // // // // // //       setStats({
// // // // // // // // //         products: res.data.products || 0,
// // // // // // // // //         orders: res.data.orders || 0,
// // // // // // // // //         revenue: res.data.revenue || 0,
// // // // // // // // //       });
// // // // // // // // //       setSalesData(res.data.salesByDate || []);
// // // // // // // // //       setOrders(res.data.recentOrders || []);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error("Error fetching seller stats:", err);
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchStats();
// // // // // // // // //   }, []);

// // // // // // // // //   // Dummy chart data if backend has none
// // // // // // // // //   const placeholderChartData = [
// // // // // // // // //     { date: "Mon", orders: 0, revenue: 0 },
// // // // // // // // //     { date: "Tue", orders: 0, revenue: 0 },
// // // // // // // // //     { date: "Wed", orders: 0, revenue: 0 },
// // // // // // // // //     { date: "Thu", orders: 0, revenue: 0 },
// // // // // // // // //     { date: "Fri", orders: 0, revenue: 0 },
// // // // // // // // //     { date: "Sat", orders: 0, revenue: 0 },
// // // // // // // // //     { date: "Sun", orders: 0, revenue: 0 },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex min-h-screen bg-gray-100">
// // // // // // // // //       {/* Sidebar */}
// // // // // // // // //       <aside className="w-64 bg-white shadow-lg">
// // // // // // // // //         <div className="p-6 border-b">
// // // // // // // // //           <h2 className="text-2xl font-bold">Seller Panel</h2>
// // // // // // // // //         </div>
// // // // // // // // //         <nav className="mt-4">
// // // // // // // // //           <ul>
// // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Dashboard</li>
// // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Products</li>
// // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Orders</li>
// // // // // // // // //           </ul>
// // // // // // // // //         </nav>
// // // // // // // // //       </aside>

// // // // // // // // //       {/* Main Content */}
// // // // // // // // //       <main className="flex-1 p-6">
// // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // //           <h1 className="text-3xl font-bold">Dashboard</h1>
// // // // // // // // //           <button onClick={fetchStats} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // // //             Refresh
// // // // // // // // //           </button>
// // // // // // // // //         </div>

// // // // // // // // //         {loading ? (
// // // // // // // // //           <div className="text-center p-10 text-lg">Loading dashboard...</div>
// // // // // // // // //         ) : (
// // // // // // // // //           <>
// // // // // // // // //             {/* Stats Cards */}
// // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Products</h2>
// // // // // // // // //                 <p className="text-3xl font-bold text-blue-600">{stats.products}</p>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Orders</h2>
// // // // // // // // //                 <p className="text-3xl font-bold text-green-600">{stats.orders}</p>
// // // // // // // // //               </div>
// // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Revenue</h2>
// // // // // // // // //                 <p className="text-3xl font-bold text-purple-600">${stats.revenue.toFixed(2)}</p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Sales Chart */}
// // // // // // // // //             <div className="bg-white p-6 rounded shadow mb-6">
// // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Sales Chart</h2>
// // // // // // // // //               <ResponsiveContainer width="100%" height={300}>
// // // // // // // // //                 <LineChart
// // // // // // // // //                   data={salesData.length > 0 ? salesData : placeholderChartData}
// // // // // // // // //                   margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
// // // // // // // // //                 >
// // // // // // // // //                   <CartesianGrid stroke="#f5f5f5" />
// // // // // // // // //                   <XAxis dataKey="date" />
// // // // // // // // //                   <YAxis />
// // // // // // // // //                   <Tooltip />
// // // // // // // // //                   <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
// // // // // // // // //                   <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
// // // // // // // // //                 </LineChart>
// // // // // // // // //               </ResponsiveContainer>
// // // // // // // // //               {salesData.length === 0 && (
// // // // // // // // //                 <p className="text-center text-gray-500 mt-2">No sales data yet</p>
// // // // // // // // //               )}
// // // // // // // // //             </div>

// // // // // // // // //             {/* Recent Orders */}
// // // // // // // // //             <div className="bg-white p-6 rounded shadow">
// // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Recent Orders</h2>
// // // // // // // // //               {orders.length === 0 ? (
// // // // // // // // //                 <div className="text-center py-10 text-gray-500">
// // // // // // // // //                   No orders yet. Once users place orders, they will appear here.
// // // // // // // // //                 </div>
// // // // // // // // //               ) : (
// // // // // // // // //                 <div className="overflow-x-auto">
// // // // // // // // //                   {orders.map((order, idx) => (
// // // // // // // // //                     <div key={order._id} className="mb-6 border-b pb-4">
// // // // // // // // //                       <div className="flex justify-between mb-2">
// // // // // // // // //                         <p><strong>Order #{idx + 1}:</strong> {order._id}</p>
// // // // // // // // //                         <span className={`px-2 py-1 rounded-full text-sm font-semibold ${
// // // // // // // // //                           order.status === "Delivered" ? "bg-green-100 text-green-800" :
// // // // // // // // //                           order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
// // // // // // // // //                           "bg-red-100 text-red-800"
// // // // // // // // //                         }`}>{order.status}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                       <p className="mb-2"><strong>Buyer:</strong> {order.buyerName}</p>

// // // // // // // // //                       <table className="w-full table-auto border-collapse text-sm">
// // // // // // // // //                         <thead>
// // // // // // // // //                           <tr className="bg-gray-100">
// // // // // // // // //                             <th className="border px-2 py-1 text-left">Product</th>
// // // // // // // // //                             <th className="border px-2 py-1 text-center">Qty</th>
// // // // // // // // //                             <th className="border px-2 py-1 text-right">Price</th>
// // // // // // // // //                             <th className="border px-2 py-1 text-right">Total</th>
// // // // // // // // //                           </tr>
// // // // // // // // //                         </thead>
// // // // // // // // //                         <tbody>
// // // // // // // // //                           {order.products.map((item, i) => (
// // // // // // // // //                             <tr key={i} className="hover:bg-gray-50">
// // // // // // // // //                               <td className="border px-2 py-1">{item.productName}</td>
// // // // // // // // //                               <td className="border px-2 py-1 text-center">{item.quantity}</td>
// // // // // // // // //                               <td className="border px-2 py-1 text-right">${item.price.toFixed(2)}</td>
// // // // // // // // //                               <td className="border px-2 py-1 text-right">${(item.price * item.quantity).toFixed(2)}</td>
// // // // // // // // //                             </tr>
// // // // // // // // //                           ))}
// // // // // // // // //                         </tbody>
// // // // // // // // //                       </table>

// // // // // // // // //                       <div className="text-right font-semibold mt-2">
// // // // // // // // //                         Order Total: ${order.products.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               )}
// // // // // // // // //             </div>
// // // // // // // // //           </>
// // // // // // // // //         )}
// // // // // // // // //       </main>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Dashboard;



// // // // // // // // // // // src/pages/seller/Dashboard.jsx
// // // // // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // // // // import axios from "../../utils/axios";
// // // // // // // // // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // // // // // // // // // const Dashboard = () => {
// // // // // // // // // //   const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });
// // // // // // // // // //   const [salesData, setSalesData] = useState([]);
// // // // // // // // // //   const [orders, setOrders] = useState([]);
// // // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // // //   // Fetch dashboard data
// // // // // // // // // //   const fetchStats = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       setLoading(true);
// // // // // // // // // //       const res = await axios.get("/seller/dashboard");
// // // // // // // // // //       setStats({
// // // // // // // // // //         products: res.data.products || 0,
// // // // // // // // // //         orders: res.data.orders || 0,
// // // // // // // // // //         revenue: res.data.revenue || 0,
// // // // // // // // // //       });
// // // // // // // // // //       setSalesData(res.data.salesByDate || []);
// // // // // // // // // //       setOrders(res.data.recentOrders || []);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("Error fetching seller stats:", err);
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchStats();
// // // // // // // // // //   }, []);

// // // // // // // // // //   // Update status of a product
// // // // // // // // // //   const handleStatusChange = async (orderId, productId, newStatus) => {
// // // // // // // // // //     try {
// // // // // // // // // //       await axios.patch(`/seller/orders/${orderId}/product/${productId}`, { status: newStatus });
// // // // // // // // // //       // Update frontend immediately
// // // // // // // // // //       setOrders(prev =>
// // // // // // // // // //         prev.map(order => ({
// // // // // // // // // //           ...order,
// // // // // // // // // //           products: order.products.map(p =>
// // // // // // // // // //             p._id === productId ? { ...p, status: newStatus } : p
// // // // // // // // // //           )
// // // // // // // // // //         }))
// // // // // // // // // //       );
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("Failed to update status:", err);
// // // // // // // // // //       alert("Failed to update status");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const placeholderChartData = [
// // // // // // // // // //     { date: "Mon", orders: 0, revenue: 0 },
// // // // // // // // // //     { date: "Tue", orders: 0, revenue: 0 },
// // // // // // // // // //     { date: "Wed", orders: 0, revenue: 0 },
// // // // // // // // // //     { date: "Thu", orders: 0, revenue: 0 },
// // // // // // // // // //     { date: "Fri", orders: 0, revenue: 0 },
// // // // // // // // // //     { date: "Sat", orders: 0, revenue: 0 },
// // // // // // // // // //     { date: "Sun", orders: 0, revenue: 0 },
// // // // // // // // // //   ];

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex min-h-screen bg-gray-100">
// // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // //       <aside className="w-64 bg-white shadow-lg">
// // // // // // // // // //         <div className="p-6 border-b">
// // // // // // // // // //           <h2 className="text-2xl font-bold">Seller Panel</h2>
// // // // // // // // // //         </div>
// // // // // // // // // //         <nav className="mt-4">
// // // // // // // // // //           <ul>
// // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Dashboard</li>
// // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Products</li>
// // // // // // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Orders</li>
// // // // // // // // // //           </ul>
// // // // // // // // // //         </nav>
// // // // // // // // // //       </aside>

// // // // // // // // // //       {/* Main Content */}
// // // // // // // // // //       <main className="flex-1 p-6">
// // // // // // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // // // // // //           <h1 className="text-3xl font-bold">Dashboard</h1>
// // // // // // // // // //           <button onClick={fetchStats} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // // // // // //             Refresh
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>

// // // // // // // // // //         {loading ? (
// // // // // // // // // //           <div className="text-center p-10 text-lg">Loading dashboard...</div>
// // // // // // // // // //         ) : (
// // // // // // // // // //           <>
// // // // // // // // // //             {/* Stats Cards */}
// // // // // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Products</h2>
// // // // // // // // // //                 <p className="text-3xl font-bold text-blue-600">{stats.products}</p>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Orders</h2>
// // // // // // // // // //                 <p className="text-3xl font-bold text-green-600">{stats.orders}</p>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // // // // // //                 <h2 className="font-semibold text-xl mb-2">Revenue</h2>
// // // // // // // // // //                 <p className="text-3xl font-bold text-purple-600">${stats.revenue.toFixed(2)}</p>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Sales Chart */}
// // // // // // // // // //             <div className="bg-white p-6 rounded shadow mb-6">
// // // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Sales Chart</h2>
// // // // // // // // // //               <ResponsiveContainer width="100%" height={300}>
// // // // // // // // // //                 <LineChart
// // // // // // // // // //                   data={salesData.length > 0 ? salesData : placeholderChartData}
// // // // // // // // // //                   margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <CartesianGrid stroke="#f5f5f5" />
// // // // // // // // // //                   <XAxis dataKey="date" />
// // // // // // // // // //                   <YAxis />
// // // // // // // // // //                   <Tooltip />
// // // // // // // // // //                   <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
// // // // // // // // // //                   <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
// // // // // // // // // //                 </LineChart>
// // // // // // // // // //               </ResponsiveContainer>
// // // // // // // // // //               {salesData.length === 0 && <p className="text-center text-gray-500 mt-2">No sales data yet</p>}
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Orders Table */}
// // // // // // // // // //             <div className="bg-white p-6 rounded shadow">
// // // // // // // // // //               <h2 className="font-semibold text-xl mb-4">Recent Orders</h2>
// // // // // // // // // //               {orders.length === 0 ? (
// // // // // // // // // //                 <div className="text-center py-10 text-gray-500">
// // // // // // // // // //                   No orders yet. Once users place orders, they will appear here.
// // // // // // // // // //                 </div>
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <div className="overflow-x-auto">
// // // // // // // // // //                   <table className="w-full table-auto border-collapse">
// // // // // // // // // //                     <thead>
// // // // // // // // // //                       <tr className="bg-gray-100">
// // // // // // // // // //                         <th className="border px-4 py-2 text-left">No</th>
// // // // // // // // // //                         <th className="border px-4 py-2 text-left">Product</th>
// // // // // // // // // //                         <th className="border px-4 py-2 text-left">Quantity</th>
// // // // // // // // // //                         <th className="border px-4 py-2 text-left">Price</th>
// // // // // // // // // //                         <th className="border px-4 py-2 text-left">Status</th>
// // // // // // // // // //                         <th className="border px-4 py-2 text-left">Update Status</th>
// // // // // // // // // //                       </tr>
// // // // // // // // // //                     </thead>
// // // // // // // // // //                     <tbody>
// // // // // // // // // //                       {orders.map((order, idx) =>
// // // // // // // // // //                         order.products.map((p, i) => (
// // // // // // // // // //                           <tr key={p._id} className="hover:bg-gray-50">
// // // // // // // // // //                             <td className="border px-4 py-2">{idx + 1}</td>
// // // // // // // // // //                             <td className="border px-4 py-2">{p.productName}</td>
// // // // // // // // // //                             <td className="border px-4 py-2">{p.quantity}</td>
// // // // // // // // // //                             <td className="border px-4 py-2">${p.price}</td>
// // // // // // // // // //                             <td className="border px-4 py-2">{p.status}</td>
// // // // // // // // // //                             <td className="border px-4 py-2">
// // // // // // // // // //                               <select
// // // // // // // // // //                                 value={p.status}
// // // // // // // // // //                                 onChange={(e) =>
// // // // // // // // // //                                   handleStatusChange(order._id, p._id, e.target.value)
// // // // // // // // // //                                 }
// // // // // // // // // //                                 className="border p-1 rounded"
// // // // // // // // // //                               >
// // // // // // // // // //                                 <option value="pending">Pending</option>
// // // // // // // // // //                                 <option value="shipped">Shipped</option>
// // // // // // // // // //                                 <option value="delivered">Delivered</option>
// // // // // // // // // //                               </select>
// // // // // // // // // //                             </td>
// // // // // // // // // //                           </tr>
// // // // // // // // // //                         ))
// // // // // // // // // //                       )}
// // // // // // // // // //                     </tbody>
// // // // // // // // // //                   </table>
// // // // // // // // // //                 </div>
// // // // // // // // // //               )}
// // // // // // // // // //             </div>
// // // // // // // // // //           </>
// // // // // // // // // //         )}
// // // // // // // // // //       </main>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Dashboard;


// // // // // // // src/pages/seller/Dashboard.jsx
// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "../../utils/axios";
// // // // // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// // // // // // const Dashboard = () => {
// // // // // //   const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });
// // // // // //   const [orders, setOrders] = useState([]);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   // Fetch dashboard data
// // // // // //   const fetchStats = async () => {
// // // // // //     try {
// // // // // //       setLoading(true);
// // // // // //       const res = await axios.get("/seller/dashboard");
// // // // // //       setStats({
// // // // // //         products: res.data.products || 0,
// // // // // //         orders: res.data.orders || 0,
// // // // // //         revenue: res.data.revenue || 0,
// // // // // //       });
// // // // // //       setOrders(res.data.recentOrders || []);
// // // // // //     } catch (err) {
// // // // // //       console.error("Error fetching seller stats:", err);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchStats();
// // // // // //   }, []);

// // // // // //   // Update status of a product
// // // // // //   const handleStatusChange = async (orderId, productId, newStatus) => {
// // // // // //     try {
// // // // // //       await axios.patch(`/seller/orders/${orderId}/product/${productId}`, { status: newStatus });
// // // // // //       setOrders(prev =>
// // // // // //         prev.map(order => ({
// // // // // //           ...order,
// // // // // //           products: order.products.map(p =>
// // // // // //             p._id === productId ? { ...p, status: newStatus } : p
// // // // // //           )
// // // // // //         }))
// // // // // //       );
// // // // // //     } catch (err) {
// // // // // //       console.error("Failed to update status:", err);
// // // // // //       alert("Failed to update status");
// // // // // //     }
// // // // // //   };

// // // // // //   // Generate chart data dynamically for logged-in seller
// // // // // //   const getSalesChartData = () => {
// // // // // //     if (!orders || orders.length === 0) {
// // // // // //       return [
// // // // // //         { date: "Mon", orders: 0, revenue: 0 },
// // // // // //         { date: "Tue", orders: 0, revenue: 0 },
// // // // // //         { date: "Wed", orders: 0, revenue: 0 },
// // // // // //         { date: "Thu", orders: 0, revenue: 0 },
// // // // // //         { date: "Fri", orders: 0, revenue: 0 },
// // // // // //         { date: "Sat", orders: 0, revenue: 0 },
// // // // // //         { date: "Sun", orders: 0, revenue: 0 },
// // // // // //       ];
// // // // // //     }

// // // // // //     const chartMap = {};

// // // // // //     orders.forEach(order => {
// // // // // //       const date = new Date(order.date).toISOString().split("T")[0];
// // // // // //       order.products.forEach(p => {
// // // // // //         if (!chartMap[date]) chartMap[date] = { orders: 0, revenue: 0 };
// // // // // //         chartMap[date].orders += 1;
// // // // // //         chartMap[date].revenue += p.price * p.quantity;
// // // // // //       });
// // // // // //     });

// // // // // //     return Object.entries(chartMap).map(([date, values]) => ({
// // // // // //       date,
// // // // // //       orders: values.orders,
// // // // // //       revenue: values.revenue,
// // // // // //     }));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex min-h-screen bg-gray-100">
// // // // // //       {/* Sidebar */}
// // // // // //       <aside className="w-64 bg-white shadow-lg">
// // // // // //         <div className="p-6 border-b">
// // // // // //           <h2 className="text-2xl font-bold">Seller Panel</h2>
// // // // // //         </div>
// // // // // //         <nav className="mt-4">
// // // // // //           <ul>
// // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Dashboard</li>
// // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Products</li>
// // // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">Orders</li>
// // // // // //           </ul>
// // // // // //         </nav>
// // // // // //       </aside>

// // // // // //       {/* Main Content */}
// // // // // //       <main className="flex-1 p-6">
// // // // // //         <div className="flex justify-between items-center mb-6">
// // // // // //           <h1 className="text-3xl font-bold">Dashboard</h1>
// // // // // //           <button onClick={fetchStats} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
// // // // // //             Refresh
// // // // // //           </button>
// // // // // //         </div>

// // // // // //         {loading ? (
// // // // // //           <div className="text-center p-10 text-lg">Loading dashboard...</div>
// // // // // //         ) : (
// // // // // //           <>
// // // // // //             {/* Stats Cards */}
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // //                 <h2 className="font-semibold text-xl mb-2">Products</h2>
// // // // // //                 <p className="text-3xl font-bold text-blue-600">{stats.products}</p>
// // // // // //               </div>
// // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // //                 <h2 className="font-semibold text-xl mb-2">Orders</h2>
// // // // // //                 <p className="text-3xl font-bold text-green-600">{stats.orders}</p>
// // // // // //               </div>
// // // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // // //                 <h2 className="font-semibold text-xl mb-2">Revenue</h2>
// // // // // //                 <p className="text-3xl font-bold text-purple-600">${stats.revenue.toFixed(2)}</p>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Sales Chart */}
// // // // // //             <div className="bg-white p-6 rounded shadow mb-6">
// // // // // //               <h2 className="font-semibold text-xl mb-4">Sales Chart</h2>
// // // // // //               <ResponsiveContainer width="100%" height={300}>
// // // // // //                 <LineChart
// // // // // //                   data={getSalesChartData()}
// // // // // //                   margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
// // // // // //                 >
// // // // // //                   <CartesianGrid stroke="#f5f5f5" />
// // // // // //                   <XAxis dataKey="date" />
// // // // // //                   <YAxis />
// // // // // //                   <Tooltip />
// // // // // //                   <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
// // // // // //                   <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
// // // // // //                 </LineChart>
// // // // // //               </ResponsiveContainer>
// // // // // //             </div>

// // // // // //             {/* Orders Table */}
// // // // // //             <div className="bg-white p-6 rounded shadow">
// // // // // //               <h2 className="font-semibold text-xl mb-4">Recent Orders</h2>
// // // // // //               {orders.length === 0 ? (
// // // // // //                 <div className="text-center py-10 text-gray-500">
// // // // // //                   No orders yet. Once users place orders, they will appear here.
// // // // // //                 </div>
// // // // // //               ) : (
// // // // // //                 <div className="overflow-x-auto">
// // // // // //                   <table className="w-full table-auto border-collapse">
// // // // // //                     <thead>
// // // // // //                       <tr className="bg-gray-100">
// // // // // //                         <th className="border px-4 py-2 text-left">No</th>
// // // // // //                         <th className="border px-4 py-2 text-left">Product</th>
// // // // // //                         <th className="border px-4 py-2 text-left">Quantity</th>
// // // // // //                         <th className="border px-4 py-2 text-left">Price</th>
// // // // // //                         <th className="border px-4 py-2 text-left">Status</th>
// // // // // //                         <th className="border px-4 py-2 text-left">Update Status</th>
// // // // // //                       </tr>
// // // // // //                     </thead>
// // // // // //                     <tbody>
// // // // // //                       {orders.map((order, idx) =>
// // // // // //                         order.products.map((p) => (
// // // // // //                           <tr key={p._id} className="hover:bg-gray-50">
// // // // // //                             <td className="border px-4 py-2">{idx + 1}</td>
// // // // // //                             <td className="border px-4 py-2">{p.productName}</td>
// // // // // //                             <td className="border px-4 py-2">{p.quantity}</td>
// // // // // //                             <td className="border px-4 py-2">${p.price}</td>
// // // // // //                             <td className="border px-4 py-2">{p.status}</td>
// // // // // //                             <td className="border px-4 py-2">
// // // // // //                               <select
// // // // // //                                 value={p.status}
// // // // // //                                 onChange={(e) =>
// // // // // //                                   handleStatusChange(order._id, p._id, e.target.value)
// // // // // //                                 }
// // // // // //                                 className="border p-1 rounded"
// // // // // //                               >
// // // // // //                                 <option value="pending">Pending</option>
// // // // // //                                 <option value="shipped">Shipped</option>
// // // // // //                                 <option value="delivered">Delivered</option>
// // // // // //                               </select>
// // // // // //                             </td>
// // // // // //                           </tr>
// // // // // //                         ))
// // // // // //                       )}
// // // // // //                     </tbody>
// // // // // //                   </table>
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </>
// // // // // //         )}
// // // // // //       </main>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Dashboard;





// // // // // // src/pages/seller/Dashboard.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "../../utils/axios";
// // // // // import {
// // // // //   LineChart,
// // // // //   Line,
// // // // //   XAxis,
// // // // //   YAxis,
// // // // //   CartesianGrid,
// // // // //   Tooltip,
// // // // //   ResponsiveContainer,
// // // // // } from "recharts";

// // // // // const Dashboard = () => {
// // // // //   const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });
// // // // //   const [orders, setOrders] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [updatingStatus, setUpdatingStatus] = useState({}); // track per product

// // // // //   // Fetch dashboard data
// // // // //   const fetchStats = async () => {
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const res = await axios.get("/seller/dashboard");
// // // // //       setStats({
// // // // //         products: res.data.products || 0,
// // // // //         orders: res.data.orders || 0,
// // // // //         revenue: res.data.revenue || 0,
// // // // //       });
// // // // //       setOrders(res.data.recentOrders || []);
// // // // //     } catch (err) {
// // // // //       console.error("Error fetching seller stats:", err);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchStats();
// // // // //   }, []);

// // // // //   // Update status of a product
// // // // //   const handleStatusChange = async (orderId, productId, newStatus) => {
// // // // //     try {
// // // // //       setUpdatingStatus((prev) => ({ ...prev, [productId]: true }));
// // // // //       await axios.patch(`/seller/orders/${orderId}/product/${productId}`, {
// // // // //         status: newStatus,
// // // // //       });

// // // // //       setOrders((prev) =>
// // // // //         prev.map((order) => ({
// // // // //           ...order,
// // // // //           products: order.products.map((p) =>
// // // // //             (p._id || p.productId) === productId ? { ...p, status: newStatus } : p
// // // // //           ),
// // // // //         }))
// // // // //       );
// // // // //     } catch (err) {
// // // // //       console.error("Failed to update status:", err);
// // // // //       alert("Failed to update status");
// // // // //     } finally {
// // // // //       setUpdatingStatus((prev) => ({ ...prev, [productId]: false }));
// // // // //     }
// // // // //   };

// // // // //   // Generate chart data dynamically
// // // // //   const getSalesChartData = () => {
// // // // //     if (!orders || orders.length === 0) {
// // // // //       return [
// // // // //         { date: "Mon", orders: 0, revenue: 0 },
// // // // //         { date: "Tue", orders: 0, revenue: 0 },
// // // // //         { date: "Wed", orders: 0, revenue: 0 },
// // // // //         { date: "Thu", orders: 0, revenue: 0 },
// // // // //         { date: "Fri", orders: 0, revenue: 0 },
// // // // //         { date: "Sat", orders: 0, revenue: 0 },
// // // // //         { date: "Sun", orders: 0, revenue: 0 },
// // // // //       ];
// // // // //     }

// // // // //     const chartMap = {};
// // // // //     orders.forEach((order) => {
// // // // //       const date = new Date(order.date).toISOString().split("T")[0];
// // // // //       order.products.forEach((p) => {
// // // // //         if (!chartMap[date]) chartMap[date] = { orders: 0, revenue: 0 };
// // // // //         chartMap[date].orders += 1;
// // // // //         chartMap[date].revenue += (p.price || 0) * (p.quantity || 1);
// // // // //       });
// // // // //     });

// // // // //     return Object.entries(chartMap).map(([date, values]) => ({
// // // // //       date,
// // // // //       orders: values.orders,
// // // // //       revenue: values.revenue,
// // // // //     }));
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex min-h-screen bg-gray-100">
// // // // //       {/* Sidebar */}
// // // // //       <aside className="w-64 bg-white shadow-lg">
// // // // //         <div className="p-6 border-b">
// // // // //           <h2 className="text-2xl font-bold">Seller Panel</h2>
// // // // //         </div>
// // // // //         <nav className="mt-4">
// // // // //           <ul>
// // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // //               Dashboard
// // // // //             </li>
// // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // //               Products
// // // // //             </li>
// // // // //             <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
// // // // //               Orders
// // // // //             </li>
// // // // //           </ul>
// // // // //         </nav>
// // // // //       </aside>

// // // // //       {/* Main Content */}
// // // // //       <main className="flex-1 p-6">
// // // // //         <div className="flex justify-between items-center mb-6">
// // // // //           <h1 className="text-3xl font-bold">Dashboard</h1>
// // // // //           <button
// // // // //             onClick={fetchStats}
// // // // //             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// // // // //           >
// // // // //             Refresh
// // // // //           </button>
// // // // //         </div>

// // // // //         {loading ? (
// // // // //           <div className="text-center p-10 text-lg">Loading dashboard...</div>
// // // // //         ) : (
// // // // //           <>
// // // // //             {/* Stats Cards */}
// // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // //                 <h2 className="font-semibold text-xl mb-2">Products</h2>
// // // // //                 <p className="text-3xl font-bold text-blue-600">{stats.products}</p>
// // // // //               </div>
// // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // //                 <h2 className="font-semibold text-xl mb-2">Orders</h2>
// // // // //                 <p className="text-3xl font-bold text-green-600">{stats.orders}</p>
// // // // //               </div>
// // // // //               <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
// // // // //                 <h2 className="font-semibold text-xl mb-2">Revenue</h2>
// // // // //                 <p className="text-3xl font-bold text-purple-600">
// // // // //                   ${stats.revenue.toFixed(2)}
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Sales Chart */}
// // // // //             <div className="bg-white p-6 rounded shadow mb-6">
// // // // //               <h2 className="font-semibold text-xl mb-4">Sales Chart</h2>
// // // // //               <ResponsiveContainer width="100%" height={300}>
// // // // //                 <LineChart data={getSalesChartData()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
// // // // //                   <CartesianGrid stroke="#f5f5f5" />
// // // // //                   <XAxis dataKey="date" />
// // // // //                   <YAxis />
// // // // //                   <Tooltip />
// // // // //                   <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
// // // // //                   <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
// // // // //                 </LineChart>
// // // // //               </ResponsiveContainer>
// // // // //             </div>

// // // // //             {/* Orders Table */}
// // // // //             <div className="bg-white p-6 rounded shadow">
// // // // //               <h2 className="font-semibold text-xl mb-4">Recent Orders</h2>
// // // // //               {orders.length === 0 ? (
// // // // //                 <div className="text-center py-10 text-gray-500">
// // // // //                   No orders yet. Once users place orders, they will appear here.
// // // // //                 </div>
// // // // //               ) : (
// // // // //                 <div className="overflow-x-auto">
// // // // //                   <table className="w-full table-auto border-collapse">
// // // // //                     <thead>
// // // // //                       <tr className="bg-gray-100">
// // // // //                         <th className="border px-4 py-2 text-left">No</th>
// // // // //                         <th className="border px-4 py-2 text-left">Product</th>
// // // // //                         <th className="border px-4 py-2 text-left">Quantity</th>
// // // // //                         <th className="border px-4 py-2 text-left">Price</th>
// // // // //                         <th className="border px-4 py-2 text-left">Status</th>
// // // // //                         <th className="border px-4 py-2 text-left">Update Status</th>
// // // // //                       </tr>
// // // // //                     </thead>
// // // // //                     <tbody>
// // // // //                       {orders.map((order, orderIdx) =>
// // // // //                         order.products.map((p, productIdx) => {
// // // // //                           const productId = p._id || p.productId || `${order._id}-${productIdx}`;
// // // // //                           const status = p.status || "pending";
// // // // //                           const productName = p.productName || p.name || "Unnamed Product";
// // // // //                           const price = p.price || 0;
// // // // //                           const quantity = p.quantity || 1;

// // // // //                           return (
// // // // //                             <tr key={productId} className="hover:bg-gray-50">
// // // // //                               <td className="border px-4 py-2">{orderIdx + 1}</td>
// // // // //                               <td className="border px-4 py-2">{productName}</td>
// // // // //                               <td className="border px-4 py-2">{quantity}</td>
// // // // //                               <td className="border px-4 py-2">${price}</td>
// // // // //                               <td className="border px-4 py-2">{status}</td>
// // // // //                               <td className="border px-4 py-2">
// // // // //                                 <select
// // // // //                                   value={status}
// // // // //                                   disabled={updatingStatus[productId]}
// // // // //                                   onChange={(e) =>
// // // // //                                     handleStatusChange(order._id, productId, e.target.value)
// // // // //                                   }
// // // // //                                   className="border p-1 rounded"
// // // // //                                 >
// // // // //                                   <option value="pending">Pending</option>
// // // // //                                   <option value="shipped">Shipped</option>
// // // // //                                   <option value="delivered">Delivered</option>
// // // // //                                 </select>
// // // // //                               </td>
// // // // //                             </tr>
// // // // //                           );
// // // // //                         })
// // // // //                       )}
// // // // //                     </tbody>
// // // // //                   </table>
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </>
// // // // //         )}
// // // // //       </main>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;




// src/pages/seller/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState({}); // track per product

  // Fetch dashboard data
  const fetchStats = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/seller/dashboard");
      setStats({
        products: res.data.products || 0,
        orders: res.data.orders || 0,
        revenue: res.data.revenue || 0,
      });
      setOrders(res.data.recentOrders || []);
    } catch (err) {
      console.error("Error fetching seller stats:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  // Update status of a product
  const handleStatusChange = async (orderId, product, newStatus) => {
    const productId = product._id || product.productId;
    if (!productId) {
      console.error("Product ID missing", product);
      return alert("Cannot update status: Product ID missing");
    }

    try {
      setUpdatingStatus((prev) => ({ ...prev, [productId]: true }));

      console.log("PATCH payload:", { orderId, productId, status: newStatus });

      const res = await axios.patch(
        `/seller/orders/${orderId}/product/${productId}`,
        { status: newStatus } // adjust if backend expects a different format
      );

      console.log("Update response:", res.data);

      // Update local state
      setOrders((prev) =>
        prev.map((order) => ({
          ...order,
          products: order.products.map((p) =>
            (p._id || p.productId) === productId ? { ...p, status: newStatus } : p
          ),
        }))
      );
    } catch (err) {
      console.error("Failed to update status:", err.response?.data || err.message);
      alert(`Failed to update status: ${err.response?.data?.message || err.message}`);
    } finally {
      setUpdatingStatus((prev) => ({ ...prev, [productId]: false }));
    }
  };

  // Generate chart data dynamically
  const getSalesChartData = () => {
    if (!orders || orders.length === 0) {
      return [
        { date: "Mon", orders: 0, revenue: 0 },
        { date: "Tue", orders: 0, revenue: 0 },
        { date: "Wed", orders: 0, revenue: 0 },
        { date: "Thu", orders: 0, revenue: 0 },
        { date: "Fri", orders: 0, revenue: 0 },
        { date: "Sat", orders: 0, revenue: 0 },
        { date: "Sun", orders: 0, revenue: 0 },
      ];
    }

    const chartMap = {};
    orders.forEach((order) => {
      const date = new Date(order.date).toISOString().split("T")[0];
      order.products.forEach((p) => {
        if (!chartMap[date]) chartMap[date] = { orders: 0, revenue: 0 };
        chartMap[date].orders += 1;
        chartMap[date].revenue += (p.price || 0) * (p.quantity || 1);
      });
    });

    return Object.entries(chartMap).map(([date, values]) => ({
      date,
      orders: values.orders,
      revenue: values.revenue,
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">Seller Panel</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
              Dashboard
            </li>
            {/* <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
              Products
            </li>
            <li className="px-6 py-3 hover:bg-gray-200 cursor-pointer font-semibold rounded">
              Orders
            </li> */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={fetchStats}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="text-center p-10 text-lg">Loading dashboard...</div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                <h2 className="font-semibold text-xl mb-2">Products</h2>
                <p className="text-3xl font-bold text-blue-600">{stats.products}</p>
              </div>
              <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                <h2 className="font-semibold text-xl mb-2">Orders</h2>
                <p className="text-3xl font-bold text-green-600">{stats.orders}</p>
              </div>
              <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                <h2 className="font-semibold text-xl mb-2">Revenue</h2>
                <p className="text-3xl font-bold text-purple-600">
                  ${stats.revenue.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Sales Chart */}
            <div className="bg-white p-6 rounded shadow mb-6">
              <h2 className="font-semibold text-xl mb-4">Sales Chart</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={getSalesChartData()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
                  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Orders Table */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="font-semibold text-xl mb-4">Recent Orders</h2>
              {orders.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  No orders yet. Once users place orders, they will appear here.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">No</th>
                        <th className="border px-4 py-2 text-left">Product</th>
                        <th className="border px-4 py-2 text-left">Quantity</th>
                        <th className="border px-4 py-2 text-left">Price</th>
                        <th className="border px-4 py-2 text-left">Status</th>
                        <th className="border px-4 py-2 text-left">Update Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, orderIdx) =>
                        order.products.map((p, productIdx) => {
                          const productId = p._id || p.productId;
                          const status = p.status || "pending";
                          const productName =  p.productName || "Deleted Product";
                        // const productName = p.productName ? p.productName : "Deleted Product";
                          const price = p.price || 0;
                          const quantity = p.quantity || 1;

                          return (
                            <tr key={productId} className="hover:bg-gray-50">
                              <td className="border px-4 py-2">{orderIdx + 1}</td>
                              <td className="border px-4 py-2">{productName}</td>
                              <td className="border px-4 py-2">{quantity}</td>
                              <td className="border px-4 py-2">${price}</td>
                              <td className="border px-4 py-2">{status}</td>
                              <td className="border px-4 py-2">
                                <select
                                  value={status}
                                  disabled={updatingStatus[productId]}
                                  onChange={(e) => handleStatusChange(order._id, p, e.target.value)}
                                  className="border p-1 rounded"
                                >
                                  <option value="pending">Pending</option>
                                  <option value="shipped">Shipped</option>
                                  <option value="delivered">Delivered</option>
                                </select>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;




