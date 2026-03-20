// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import axios from "../../utils/axios";
// // // // // // import OrderCard from "../../components/OrderCard";

// // // // // // const SellerOrders = () => {
// // // // // //   const [orders, setOrders] = useState([]);

// // // // // //   const fetchOrders = async () => {
// // // // // //     try {
// // // // // //       const res = await axios.get("/seller/orders");
// // // // // //       setOrders(res.data.orders);
// // // // // //     } catch (err) {
// // // // // //       console.log(err);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchOrders();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-3xl font-bold mb-4">Orders</h1>
// // // // // //       {orders.length === 0 ? (
// // // // // //         <p>No orders yet.</p>
// // // // // //       ) : (
// // // // // //         <div className="space-y-4">
// // // // // //           {orders.map((order) => (
// // // // // //             <OrderCard key={order._id} order={order} sellerView={true} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SellerOrders;



// // // // // // src/pages/seller/SellerOrders.jsx
// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "../../utils/axios";

// // // // // const SellerOrders = () => {
// // // // //   const [orders, setOrders] = useState([]);

// // // // //   useEffect(() => {
// // // // //     const fetchOrders = async () => {
// // // // //       try {
// // // // //         const res = await axios.get("/seller/orders", {
// // // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // // //         });
// // // // //         setOrders(res.data);
// // // // //       } catch (err) {
// // // // //         console.error(err);
// // // // //       }
// // // // //     };

// // // // //     fetchOrders();
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="container mx-auto p-4">
// // // // //       <h1 className="text-3xl font-bold mb-4">Orders</h1>
// // // // //       {orders.length === 0 ? (
// // // // //         <p>No orders found.</p>
// // // // //       ) : (
// // // // //         <div className="space-y-4">
// // // // //           {orders.map((o) => (
// // // // //             <div key={o._id} className="border p-4 rounded shadow">
// // // // //               <p><strong>Order ID:</strong> {o._id}</p>
// // // // //               <p><strong>Product:</strong> {o.product.title}</p>
// // // // //               <p><strong>Quantity:</strong> {o.quantity}</p>
// // // // //               <p><strong>Price:</strong> ${o.product.price}</p>
// // // // //               <p><strong>Status:</strong> {o.status}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SellerOrders;

// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "../../utils/axios";

// // // // const SellerOrders = () => {
// // // //   const [orders, setOrders] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchOrders = async () => {
// // // //       try {
// // // //         const res = await axios.get("/seller/orders", {
// // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // //         });
// // // //         setOrders(res.data);
// // // //       } catch (err) {
// // // //         console.error(err);
// // // //       }
// // // //     };

// // // //     fetchOrders();
// // // //   }, []);

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-3xl font-bold mb-4">Orders</h1>
// // // //       {orders.length === 0 ? (
// // // //         <p>No orders found.</p>
// // // //       ) : (
// // // //         <div className="space-y-4">
// // // //           {orders.map((order) => (
// // // //             <div key={order._id} className="border p-4 rounded shadow">
// // // //               <p><strong>Order ID:</strong> {order._id}</p>
// // // //               <p><strong>Buyer:</strong> {order.buyer.name} ({order.buyer.email})</p>
// // // //               <p><strong>Status:</strong> {order.status}</p>
// // // //               <div className="ml-4 mt-2">
// // // //                 <h4 className="font-semibold">Products:</h4>
// // // //                 {order.products.map((item) => (
// // // //                   <div key={item.product._id} className="flex justify-between border-b py-1">
// // // //                     <span>{item.product.title}</span>
// // // //                     <span>Qty: {item.quantity}</span>
// // // //                     <span>Price: ${item.product.price}</span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SellerOrders;

// // // import React, { useEffect, useState } from "react";
// // // import axios from "../../utils/axios";

// // // const SellerOrders = () => {
// // //   const [orders, setOrders] = useState([]);

// // //   useEffect(() => {
// // //     const fetchOrders = async () => {
// // //       try {
// // //         const res = await axios.get("/seller/orders", {
// // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // //         });
// // //         setOrders(res.data);
// // //       } catch (err) {
// // //         console.error(err);
// // //       }
// // //     };

// // //     fetchOrders();
// // //   }, []);

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-3xl font-bold mb-4">Orders</h1>
// // //       {orders.length === 0 ? (
// // //         <p>No orders found.</p>
// // //       ) : (
// // //         <div className="space-y-4">
// // //           {orders.map((order) => (
// // //             <div key={order._id} className="border p-4 rounded shadow">
// // //               <p><strong>Order ID:</strong> {order._id}</p>
// // //               <p><strong>Buyer:</strong> {order.buyer.name} ({order.buyer.email})</p>
// // //               <p><strong>Status:</strong> {order.status}</p>
// // //               <div className="ml-4 mt-2">
// // //                 <h4 className="font-semibold">Products:</h4>
// // //                 {order.products.map((item) => (
// // //                   <div key={item.product._id} className="flex justify-between border-b py-1">
// // //                     <span>{item.product.title}</span>
// // //                     <span>Qty: {item.quantity}</span>
// // //                     <span>Price: ${item.price.toFixed(2)}</span>
// // //                     <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <p className="mt-2 font-semibold">
// // //                 Order Total: ${order.products.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SellerOrders;




// // // src/pages/seller/SellerOrders.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "../../utils/axios";

// // const SellerOrders = () => {
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     const fetchOrders = async () => {
// //       try {
// //         const res = await axios.get("/seller/orders", {
// //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //         });
// //         setOrders(res.data);
// //       } catch (err) {
// //         console.error(err);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-4">Seller Orders</h1>

// //       {orders.length === 0 ? (
// //         <p>No orders found.</p>
// //       ) : (
// //         <div className="space-y-4">
// //           {orders.map((order) => (
// //             <div key={order._id} className="border p-4 rounded shadow">
// //               <p><strong>Order ID:</strong> {order._id}</p>
// //               <p><strong>Buyer:</strong> {order.buyer.name} ({order.buyer.email})</p>
// //               <p><strong>Status:</strong> {order.status}</p>

// //               <div className="ml-4 mt-2">
// //                 <h4 className="font-semibold mb-1">Products:</h4>
// //                 {order.products.map((item) => (
// //                   <div key={item.product?._id} className="flex justify-between border-b py-1">
// //                     <span>{item.product?.title || "Unknown Product"}</span>
// //                     <span>Qty: {item.quantity}</span>
// //                     <span>Price: ${item.price.toFixed(2)}</span>
// //                     <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
// //                   </div>
// //                 ))}
// //               </div>

// //               <p className="mt-2 font-semibold">
// //                 Order Total: $
// //                 {order.products
// //                   .reduce((sum, i) => sum + i.price * i.quantity, 0)
// //                   .toFixed(2)}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SellerOrders;

// //new UI

// src/pages/seller/SellerOrders.jsx
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/seller/orders", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Seller Orders</h1>

        {loading ? (
          <div className="text-center text-lg py-10">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No orders found. Once users place orders, they will appear here.
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, idx) => (
              <div
                key={order._id}
                className="bg-white p-6 rounded shadow hover:shadow-lg transition"
              >
                {/* Order Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div className="mb-2 md:mb-0">
                    <p>
                      <span className="font-semibold">Order ID:</span> {order._id}
                    </p>
                    <p>
                      <span className="font-semibold">Buyer:</span>{" "}
                      {order.buyer.name} ({order.buyer.email})
                    </p>
                  </div>
                  {/* <div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div> */}
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto mb-4">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border px-4 py-2 text-left">Product</th>
                        <th className="border px-4 py-2 text-center">Qty</th>
                        <th className="border px-4 py-2 text-right">Price</th>
                        <th className="border px-4 py-2 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.products.map((item) => (
                        <tr
                          key={item.product?._id}
                          className="hover:bg-gray-50 transition"
                        >
                          <td className="border px-4 py-2">{item.product?.title || "Deleted Product"}</td>
                          <td className="border px-4 py-2 text-center">{item.quantity}</td>
                          <td className="border px-4 py-2 text-right">${item.price.toFixed(2)}</td>
                          <td className="border px-4 py-2 text-right">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Order Total */}
                <div className="text-right font-semibold text-lg">
                  Order Total: $
                  {order.products
                    .reduce((sum, i) => sum + i.price * i.quantity, 0)
                    .toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerOrders;


