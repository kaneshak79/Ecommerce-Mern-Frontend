// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "../../utils/axios";
// // // // import OrderCard from "../../components/OrderCard";

// // // // const SellerOrders = () => {
// // // //   const [orders, setOrders] = useState([]);

// // // //   const fetchOrders = async () => {
// // // //     try {
// // // //       const res = await axios.get("/seller/orders");
// // // //       setOrders(res.data.orders);
// // // //     } catch (err) {
// // // //       console.log(err);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchOrders();
// // // //   }, []);

// // // //   return (
// // // //     <div className="container mx-auto p-4">
// // // //       <h1 className="text-3xl font-bold mb-4">Orders</h1>
// // // //       {orders.length === 0 ? (
// // // //         <p>No orders yet.</p>
// // // //       ) : (
// // // //         <div className="space-y-4">
// // // //           {orders.map((order) => (
// // // //             <OrderCard key={order._id} order={order} sellerView={true} />
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SellerOrders;



// // // // src/pages/seller/SellerOrders.jsx
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
// // //           {orders.map((o) => (
// // //             <div key={o._id} className="border p-4 rounded shadow">
// // //               <p><strong>Order ID:</strong> {o._id}</p>
// // //               <p><strong>Product:</strong> {o.product.title}</p>
// // //               <p><strong>Quantity:</strong> {o.quantity}</p>
// // //               <p><strong>Price:</strong> ${o.product.price}</p>
// // //               <p><strong>Status:</strong> {o.status}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SellerOrders;

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
// //       <h1 className="text-3xl font-bold mb-4">Orders</h1>
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
// //                 <h4 className="font-semibold">Products:</h4>
// //                 {order.products.map((item) => (
// //                   <div key={item.product._id} className="flex justify-between border-b py-1">
// //                     <span>{item.product.title}</span>
// //                     <span>Qty: {item.quantity}</span>
// //                     <span>Price: ${item.product.price}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SellerOrders;

// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";

// const SellerOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await axios.get("/seller/orders", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         setOrders(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Orders</h1>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((order) => (
//             <div key={order._id} className="border p-4 rounded shadow">
//               <p><strong>Order ID:</strong> {order._id}</p>
//               <p><strong>Buyer:</strong> {order.buyer.name} ({order.buyer.email})</p>
//               <p><strong>Status:</strong> {order.status}</p>
//               <div className="ml-4 mt-2">
//                 <h4 className="font-semibold">Products:</h4>
//                 {order.products.map((item) => (
//                   <div key={item.product._id} className="flex justify-between border-b py-1">
//                     <span>{item.product.title}</span>
//                     <span>Qty: {item.quantity}</span>
//                     <span>Price: ${item.price.toFixed(2)}</span>
//                     <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
//                   </div>
//                 ))}
//               </div>
//               <p className="mt-2 font-semibold">
//                 Order Total: ${order.products.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2)}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SellerOrders;




// src/pages/seller/SellerOrders.jsx
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/seller/orders", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Seller Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 rounded shadow">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Buyer:</strong> {order.buyer.name} ({order.buyer.email})</p>
              <p><strong>Status:</strong> {order.status}</p>

              <div className="ml-4 mt-2">
                <h4 className="font-semibold mb-1">Products:</h4>
                {order.products.map((item) => (
                  <div key={item.product?._id} className="flex justify-between border-b py-1">
                    <span>{item.product?.title || "Unknown Product"}</span>
                    <span>Qty: {item.quantity}</span>
                    <span>Price: ${item.price.toFixed(2)}</span>
                    <span>Total: ${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <p className="mt-2 font-semibold">
                Order Total: $
                {order.products
                  .reduce((sum, i) => sum + i.price * i.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerOrders;