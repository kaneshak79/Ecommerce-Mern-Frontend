// // // import React, { useEffect, useState } from "react";
// // // import axios from "../../utils/axios";

// // // const SalesReport = () => {
// // //   const [report, setReport] = useState([]);

// // //   const fetchReport = async () => {
// // //     try {
// // //       const res = await axios.get("/seller/sales-report");
// // //       setReport(res.data.report);
// // //     } catch (err) {
// // //       console.log(err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchReport();
// // //   }, []);

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-3xl font-bold mb-4">Sales Report</h1>
// // //       <table className="min-w-full bg-white border">
// // //         <thead>
// // //           <tr className="bg-gray-100">
// // //             <th className="py-2 px-4 border">Date</th>
// // //             <th className="py-2 px-4 border">Product</th>
// // //             <th className="py-2 px-4 border">Quantity</th>
// // //             <th className="py-2 px-4 border">Revenue</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {report.length === 0 ? (
// // //             <tr>
// // //               <td colSpan="4" className="text-center py-4">No sales yet.</td>
// // //             </tr>
// // //           ) : (
// // //             report.map((r, i) => (
// // //               <tr key={i} className="text-center border-b">
// // //                 <td className="py-2 px-4 border">{new Date(r.date).toLocaleDateString()}</td>
// // //                 <td className="py-2 px-4 border">{r.product}</td>
// // //                 <td className="py-2 px-4 border">{r.quantity}</td>
// // //                 <td className="py-2 px-4 border">${r.revenue}</td>
// // //               </tr>
// // //             ))
// // //           )}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default SalesReport;


// // // src/pages/seller/SalesReport.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "../../utils/axios";

// // const SalesReport = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [revenue, setRevenue] = useState(0);

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("/seller/orders", {
// //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //         });
// //         setOrders(res.data);
// //         const total = res.data.reduce(
// //           (sum, o) => sum + o.product.price * o.quantity,
// //           0
// //         );
// //         setRevenue(total);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };
// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-4">Sales Report</h1>
// //       <p className="mb-4">Total Revenue: ${revenue.toFixed(2)}</p>
// //       {orders.length === 0 ? (
// //         <p>No orders found.</p>
// //       ) : (
// //         <table className="w-full border-collapse border">
// //           <thead>
// //             <tr>
// //               <th className="border p-2">Order ID</th>
// //               <th className="border p-2">Product</th>
// //               <th className="border p-2">Quantity</th>
// //               <th className="border p-2">Price</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {orders.map((o) => (
// //               <tr key={o._id}>
// //                 <td className="border p-2">{o._id}</td>
// //                 <td className="border p-2">{o.product.title}</td>
// //                 <td className="border p-2">{o.quantity}</td>
// //                 <td className="border p-2">${(o.product.price * o.quantity).toFixed(2)}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}
// //     </div>
// //   );
// // };

// // export default SalesReport;



// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const SalesReport = () => {
//   const [report, setReport] = useState(null);

//   useEffect(() => {
//     const fetchSalesReport = async () => {
//       try {
//         const res = await axios.get("/seller/sales-report", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         setReport(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchSalesReport();
//   }, []);

//   if (!report) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Sales Report</h1>
//       <p className="mb-4">Total Revenue: ${report.totalRevenue.toFixed(2)}</p>
//       <p className="mb-4">Total Orders: {report.totalOrders}</p>

//       {report.productsSold.length === 0 ? (
//         <p>No products sold yet.</p>
//       ) : (
//         <table className="w-full border-collapse border">
//           <thead>
//             <tr>
//               <th className="border p-2">Product ID</th>
//               <th className="border p-2">Quantity Sold</th>
//               <th className="border p-2">Revenue</th>
//             </tr>
//           </thead>
//           <tbody>
//             {report.productsSold.map((p) => (
//               <tr key={p.productId}>
//                 <td className="border p-2">{p.productId}</td>
//                 <td className="border p-2">{p.quantitySold}</td>
//                 <td className="border p-2">${p.revenue.toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default SalesReport;


import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const SalesReport = () => {
  const [report, setReport] = useState(null);
  const [productsMap, setProductsMap] = useState({}); // Map productId → title

  useEffect(() => {
    const fetchSalesReport = async () => {
      try {
        // 1️⃣ Fetch aggregated sales report
        const res = await axios.get("/seller/sales", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setReport(res.data);

        // 2️⃣ Fetch product details for each productId
        const productIds = res.data.productsSold.map(p => p.productId);
        if (productIds.length > 0) {
          const productsRes = await axios.get("/seller/products", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          });

          // Create map: productId → title
          const map = {};
          productsRes.data.forEach(p => {
            map[p._id] = p.title;
          });
          setProductsMap(map);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchSalesReport();
  }, []);

  if (!report) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sales Report</h1>
      <p className="mb-2">Total Revenue: ${report.totalRevenue.toFixed(2)}</p>
      <p className="mb-4">Total Orders: {report.totalOrders}</p>

      {report.productsSold.length === 0 ? (
        <p>No products sold yet.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Product</th>
              <th className="border p-2">Quantity Sold</th>
              <th className="border p-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {report.productsSold.map((p) => (
              <tr key={p.productId}>
                <td className="border p-2">{productsMap[p.productId] || p.productId}</td>
                <td className="border p-2">{p.quantitySold}</td>
                <td className="border p-2">${p.revenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalesReport;