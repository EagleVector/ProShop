import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc        Create new Order
// @route       POST /api/orders
// @access      PRIVATE

const addOrderItems = asyncHandler(async (req, res) => {
  res.send('add order items');
});

// @desc        Get Logged In user orders
// @route       GET /api/orders/myorders
// @access      PRIVATE

const getMyOrders = asyncHandler(async (req, res) => {
  res.send('get my orders');
});

// @desc        Get Order by ID
// @route       GET /api/orders/:id
// @access      PRIVATE/admin

const getOrderById = asyncHandler(async (req, res) => {
  res.send('get order by ID');
});

// @desc        Update Order to Paid
// @route       PUT /api/orders/:id/pay
// @access      PRIVATE

const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('update order to paid');
});

// @desc        Update Order to Deliver
// @route       PUT /api/orders/:id/deliver
// @access      PRIVATE/Admin

const updateOrderToDeliver = asyncHandler(async (req, res) => {
  res.send('update order to delivered');
});

// @desc        Get all Orders
// @route       GET /api/orders/
// @access      PRIVATE/Admin

const getOrders = asyncHandler(async (req, res) => {
  res.send('get all orders');
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDeliver,
  getOrders
};