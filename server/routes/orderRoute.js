const Router = require("express").Router();
const orderController = require("../controllers/orderController");
const { verifyToken } = require("../middleware/verifyToken");
const { addOrderItems, getOrder } = orderController;


//@desc create order item => /api/orders/
//@access Private
Router.post("/", verifyToken,  addOrderItems);

//@desc get order item => /api/orders/:id
//@access Private
Router.get("/:id", verifyToken, getOrder);



module.exports = Router;
