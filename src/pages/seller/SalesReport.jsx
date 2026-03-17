// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const SalesReport = () => {
//   const [report, setReport] = useState([]);

//   const fetchReport = async () => {
//     try {
//       const res = await axios.get("/seller/sales-report");
//       setReport(res.data.report);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchReport();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Sales Report</h1>
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border">Date</th>
//             <th className="py-2 px-4 border">Product</th>
//             <th className="py-2 px-4 border">Quantity</th>
//             <th className="py-2 px-4 border">Revenue</th>
//           </tr>
//         </thead>
//         <tbody>
//           {report.length === 0 ? (
//             <tr>
//               <td colSpan="4" className="text-center py-4">No sales yet.</td>
//             </tr>
//           ) : (
//             report.map((r, i) => (
//               <tr key={i} className="text-center border-b">
//                 <td className="py-2 px-4 border">{new Date(r.date).toLocaleDateString()}</td>
//                 <td className="py-2 px-4 border">{r.product}</td>
//                 <td className="py-2 px-4 border">{r.quantity}</td>
//                 <td className="py-2 px-4 border">${r.revenue}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SalesReport;


// src/pages/seller/SalesReport.jsx
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const SalesReport = () => {
  const [orders, setOrders] = useState([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/seller/orders", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setOrders(res.data);
        const total = res.data.reduce(
          (sum, o) => sum + o.product.price * o.quantity,
          0
        );
        setRevenue(total);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sales Report</h1>
      <p className="mb-4">Total Revenue: ${revenue.toFixed(2)}</p>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Product</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o._id}>
                <td className="border p-2">{o._id}</td>
                <td className="border p-2">{o.product.title}</td>
                <td className="border p-2">{o.quantity}</td>
                <td className="border p-2">${(o.product.price * o.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalesReport;