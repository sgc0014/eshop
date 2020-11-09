const Router = require("express").Router();
const orderController = require("../controllers/orderController");
const { verifyToken } = require("../middleware/verifyToken");
const { addOrderItems } = orderController;


//@desc create order item => /api/order/
//@access Private
Router.post("/", verifyToken,  addOrderItems);



module.exports = Router;
