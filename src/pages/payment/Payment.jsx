import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Payment Successful!
      </h1>
      <p className="mb-4">Thank you for your purchase.</p>
      <Link
        to="/buyer/myorders"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View My Orders
      </Link>
    </div>
  );
};

export default PaymentSuccess;