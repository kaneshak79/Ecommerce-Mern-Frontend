// // // import React, { useEffect, useState } from "react";
// // // import axios from "../../utils/axios";
// // // import OrderCard from "../../components/OrderCard";

// // // const MyOrders = () => {
// // //   const [orders, setOrders] = useState([]);

// // //   const fetchOrders = async () => {
// // //     try {
// // //       const res = await axios.get("/orders/my-orders");
// // //       setOrders(res.data.orders);
// // //     } catch (err) {
// // //       console.log(err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchOrders();
// // //   }, []);

// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <h1 className="text-3xl font-bold mb-4">My Orders</h1>
// // //       {orders.length === 0 ? (
// // //         <p>You have not placed any orders yet.</p>
// // //       ) : (
// // //         <div className="space-y-4">
// // //           {orders.map((order) => (
// // //             <OrderCard key={order._id} order={order} />
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default MyOrders;



// // // src/pages/MyOrders.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "../../utils/axios";
// // import OrderCard from "../../components/OrderCard";

// // const MyOrders = () => {
// //   const [orders, setOrders] = useState([]);

// //   const fetchOrders = async () => {
// //     try {
// //       const res = await axios.get("/orders/myorders", {
// //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //       });
// //       setOrders(res.data); // assuming backend returns array
// //       console.log("Orders:", res.data); // debug
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="container mx-auto p-4 min-h-screen">
// //       <h1 className="text-3xl font-bold mb-6">My Orders</h1>

// //       {orders.length === 0 ? (
// //         <p className="text-gray-500">You have not placed any orders yet.</p>
// //       ) : (
// //         <div className="space-y-6">
// //           {orders.map((order) => (
// //             <OrderCard key={order._id} order={order} />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyOrders;



// import React, { useEffect, useState } from "react";
// import axios from "../../utils/axios";
// import OrderCard from "../../components/OrderCard";

// const backendURL =
//   import.meta.env.VITE_BACKEND_URL ||
//   "https://ecommerce-mern-backend-1.onrender.com";

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("/orders/my-orders", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setOrders(res.data); // data should be the array of orders
//     } catch (err) {
//       console.error("Fetch orders error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">My Orders</h1>

//       {orders.length === 0 ? (
//         <p className="text-gray-500 text-lg">You have not placed any orders yet.</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <OrderCard key={order._id} order={order} backendURL={backendURL} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyOrders;



import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import OrderCard from "../../components/OrderCard";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/orders/my-orders", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">You have not placed any orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;