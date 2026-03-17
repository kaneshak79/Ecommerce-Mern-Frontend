import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div className="border p-4 rounded mb-4">
      <p className="font-semibold">Order ID: {order._id}</p>
      <p>Status: <span className="font-bold">{order.status}</span></p>
      <p>Total: ₹{order.totalAmount}</p>
      <div className="mt-2">
        <h4 className="font-semibold">Products:</h4>
        <ul className="list-disc list-inside">
          {order.products.map((item) => (
            <li key={item.product._id}>
              {item.product.title} x {item.quantity} - ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderCard;