// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import OrderCard from "../../components/OrderCard";

// const SellerOrders = () => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("/seller/orders");
//       setOrders(res.data.orders);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Orders</h1>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <div className="space-y-4">
//           {orders.map((order) => (
//             <OrderCard key={order._id} order={order} sellerView={true} />
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
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <div key={o._id} className="border p-4 rounded shadow">
              <p><strong>Order ID:</strong> {o._id}</p>
              <p><strong>Product:</strong> {o.product.title}</p>
              <p><strong>Quantity:</strong> {o.quantity}</p>
              <p><strong>Price:</strong> ${o.product.price}</p>
              <p><strong>Status:</strong> {o.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerOrders;