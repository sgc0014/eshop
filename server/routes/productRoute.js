const Router = require("express").Router();
const productControllers = require("../controllers/productController");
const { getProducts, getProductDetails } = productControllers;


//@desc Get all product => /api/products/
//@access Public
Router.get("/", getProducts);

//@desc Get one product => /api/products/:id
//@access Public
Router.get("/:id", getProductDetails);

module.exports = Router;
