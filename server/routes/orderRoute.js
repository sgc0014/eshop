const Router = require("express").Router();
const orderController = require("../controllers/orderController");
const { verifyToken } = require("../middleware/verifyToken");
const { addOrderItems, getOrder, updateTopaid, myOrder } = orderController;


//@desc create order item => /api/orders/
//@access Private
Router.post("/", verifyToken,  addOrderItems);

//@desc get user orders => /api/orders/myOrder
//@access Private
Router.get("/myOrder",verifyToken, myOrder)

//@desc get order item => /api/orders/:id
//@access Private
Router.get("/:id", verifyToken, getOrder);

//@desc update isPaid status => /api/orders/:id/pay
//@access Private
Router.get("/:id/pay", verifyToken, updateTopaid);





module.exports = Router;
