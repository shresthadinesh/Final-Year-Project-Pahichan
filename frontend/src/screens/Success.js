import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { payOrder } from '../actions/orderActions';
import { FaTimesCircle, FaRedo, FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import axios from 'axios';


const Success = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Parse query string
  const orderId = queryParams.get('purchase_order_id');
  const pidx = queryParams.get('pidx');

  const dispatch = useDispatch();
  console.log(queryParams)
  console.log(orderId)

  const [status, setStatus] = useState("")


  const fetchData = async () => {
    const url = `http://localhost:5001/api/orders/payment-verification/${pidx}`; // Replace with your URL

    try {
      const response = await axios.get(url, {});

      console.log('Response:', response.data); // Log the response data
      if (response?.data?.status) {
        setStatus(response?.data?.status)
        dispatch(payOrder(orderId,
          {
            id: orderId,
            status: response?.data?.status,
            update_time: Date.now(),
            email_address: "email_address",
          }
        ));
      }
    } catch (error) {
      console.error('Error fetching data:', error); // Log any errors
    }
  };

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      {
        status == "Completed" ?
          <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 text-gray-800 p-6">
            <div className="bg-green-100 rounded-full p-6 mb-6">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Purchase Successful!</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Thank you for your purchase. Your payment has been verified, and your
              order is being processed.
            </p>
            <div className='flex gap-4'>
              <a href='/'>
                <button className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
                  <FaShoppingCart className="mr-2" />
                  Continue Shopping
                </button>
              </a>
              <a href={`/order/${orderId}`}>
                <button className="flex items-center bg-gray-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
                  <FaShoppingCart className="mr-2" />
                  Go To Order
                </button>
              </a>
            </div>
          </div>
          :
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
            <div className="bg-red-100 rounded-full p-6 mb-6">
              <FaTimesCircle className="text-red-500 text-6xl" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Purchase Failed</h1>
            <p className="text-lg text-gray-600 mb-6 text-center">
              We couldn't process your payment. Please try again or contact support if
              the issue persists.
            </p>
            <div className="flex space-x-4">
              <button className="flex items-center bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
                <FaRedo className="mr-2" />
                Retry Payment
              </button>
              <button className="flex items-center bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-400 transition">
                Contact Support
              </button>
            </div>
          </div>
      }
    </div >
  )
}

export default Success