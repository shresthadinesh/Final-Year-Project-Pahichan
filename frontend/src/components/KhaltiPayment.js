// src/components/KhaltiPayment.js
import React, { useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import khaltiConfig from "../configs/KhaltiConfig";
import axios from "axios";
import { token } from "morgan";
import { useDispatch, useSelector } from "react-redux";
import { payOrder } from "../actions/orderActions";

const KhaltiPayment = ({data, onSuccess}) => {
  // const orderDetails = useSelector((state) => state.orderDetails);
  // const { order, loading, error } = orderDetails;
  // const dispatch = useDispatch();

  const handleBuy = async () => {
    console.log(data)
    const payload = {
      orderId:data._id,
      return_url: `http://localhost:3000/success`,
      website_url: "http://localhost:3000",
      amount:  1300,
      purchase_order_id: data._id,
      purchase_order_name: "test",
      customer_info: {
        name: "Customer1",
        email: "example@gmail.com",
        phone: "9811496763",
      },
    };

    const response = await axios.post(`http://localhost:5001/api/orders/khalti-api/`, payload);

    if (response) {
      console.log(response.data?.data?.pidx)
      // onSuccess({
      //   id: "id",
      //   status: "status",
      //   update_time: "update_time",
      //   email_address: "email_address",
      // })
      window.location.href = `${response?.data?.data?.payment_url}`;
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={handleBuy}
        className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-full"
      >
        Pay with Khalti
      </button>
    </div>
  );
};

export default KhaltiPayment;
