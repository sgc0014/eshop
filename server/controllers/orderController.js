const asyncHandler = require("express-async-handler");
const Order = require("../model/orderSchema");

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
  } = req.body;

  if (orderItems.length > 0) {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
    });
    const orderCreated = await order.save();
    res.status(201).json(orderCreated);
  } else {
    res.status(400);
    throw new Error("No items");
  }
});

const getOrder = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const orderSelcted = await Order.findById(id);
  if (orderSelcted) {
   
    res.status(201).json(orderSelcted);
  } else {
    res.status(400);
    throw new Error("No such order found");
  }
});

module.exports.addOrderItems = addOrderItems;
module.exports.getOrder = getOrder;
