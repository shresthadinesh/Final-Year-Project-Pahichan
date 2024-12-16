import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'
import { json } from 'express';
import { initializeKhaltiPayment, verifyKhaltiPayment } from "../config/KhaltiConfig.js";
import axios from 'axios';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      // paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    // order.paymentResult = {
    //   id: req.body.id,
    //   status: req.body.status,
    //   update_time: req.body.update_time,
    //   email_address: req.body.payer.email_address,
    // }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    // Update countInStock
    for (const item of order.orderItems) {
      const product = await Product.findById(item.product)
      if (product) {
        product.countInStock -= item.qty
        await product.save()
      }
    }

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')
  res.json(orders)
})

const khaltiPayment = asyncHandler(async (req, res) => {
  // try {
  console.log("hihi")
  //try catch for error handling
  // const { itemId, totalPrice, website_url } = req.body;
  // const itemData = await Item.findOne({
  //   _id: itemId,
  //   price: Number(totalPrice),
  // });

  // if (!itemData) {
  //   return res.status(400).send({
  //     success: false,
  //     message: "item not found",
  //   });
  // }

  const paymentInitate = await initializeKhaltiPayment({
    amount: 10, // amount should be in paisa (Rs * 100)
    purchase_order_id: "0001", // purchase_order_id because we need to verify it later
    purchase_order_name: "Dhaka Topi",
    customer_info: {
      "name": "Khalti Bahadur",
      "email": "example@gmail.com",
      "phone": "9800000123"
    },
    product_details: [
      {
        "identity": "1234567890",
        "name": "Khalti logo",
        "total_price": 1300,
        "quantity": 1,
        "unit_price": 1300
      }
    ],
    // purchase_order_id: purchasedItemData._id, // purchase_order_id because we need to verify it later
    // purchase_order_name: itemData.name,
    return_url: `http://localhost:5001/complete-khalti-payment`, // it can be even managed from frontedn

  });
  console.log("below InitializeKhalti")

  res.json({
    success: true,
    // purchasedItemData,
    payment: paymentInitate,
  });
  // } catch (error) {
  //   res.json({
  //     success: false,
  //     error,
  //   });
  // }
});

const paymentGateway = async (req, res) => {
  const payload = req.body;
  const khaltResponse = await axios.post(
    "https://a.khalti.com/api/v2/epayment/initiate/",
    payload,
    {
      headers: {
        Authorization: 'Key 94faee1be89b4d629bdd015c8f569861'
      }
    }
  );
  if (khaltResponse?.data?.pidx) {
    res.json({
      success: true,
      data: khaltResponse?.data
    })
  } else {
    res.json({
      success: false,
      message: "Something went wrong"
    })
  }
}

const veriryPayment = async (req, res) => {
  const pidx = req.params.pidx; 
  console.log(pidx)
  if (pidx) {
    const headersList = {
      "Authorization": `Key 94faee1be89b4d629bdd015c8f569861`,
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({ pidx });

    const reqOptions = {
      url: `https://a.khalti.com/api/v2/epayment/lookup/`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    try {
      const response = await axios.request(reqOptions);
      res.send(response?.data); 
    } catch (error) {
      console.error("Error verifying Khalti payment:", error);
      res.send("Error while verifying")
      throw error;
    }
  } else {
    res.send('Invalid pidx code') 
  }
}

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
  khaltiPayment,
  paymentGateway,
  veriryPayment
}
