const Router = require("express").Router();
const orderController = require("../controllers/orderController");
const { verifyToken, verifyAdmin } = require("../middleware/verifyToken");
const {
  addOrderItems,
  getOrder,
  updateTopaid,
  myOrder,
  getAllOrder,
  updateToDelivered,
} = orderController;

//@desc create order item => /api/orders/
//@access Private
Router.post("/", verifyToken, addOrderItems);

//@desc get user orders => /api/orders/
//@access Private/Admin
Router.get("/", verifyToken, verifyAdmin, getAllOrder);

//@desc get user orders => /api/orders/myOrder
//@access Private
Router.get("/myOrder", verifyToken, myOrder);

//@desc get order item => /api/orders/:id
//@access Private
Router.get("/:id", verifyToken, getOrder);

//@desc update isPaid status => /api/orders/pay/:id
//@access Private
Router.post("/pay/:id", verifyToken, updateTopaid);

//@desc update isDelivered status => /api/orders/:id
//@access Private/Admin
Router.put("/delivered/:id", verifyToken, verifyAdmin, updateToDelivered);

module.exports = Router;
