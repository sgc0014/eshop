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

  const orderSelcted = await Order.findById(id).populate("user", "name email");
  if (orderSelcted) {
    res.status(201).json(orderSelcted);
  } else {
    res.status(400);
    throw new Error("No such order found");
  }
});

const updateTopaid = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const orderSelcted = await Order.findById(id);
  if (orderSelcted) {
    orderSelcted.isPaid = true;
    orderSelcted.isPaidAt = Date.now();
    orderSelcted.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await orderSelcted.save();
    res.status(201).json(updatedOrder);
  } else {
    res.status(400);
    throw new Error("No such order found");
  }
});

module.exports.addOrderItems = addOrderItems;
module.exports.getOrder = getOrder;
module.exports.updateTopaid = updateTopaid;
