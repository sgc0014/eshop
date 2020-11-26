const Router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const productControllers = require("../controllers/productController");
const tokenMiddleware = require("../middleware/verifyToken");
const { verifyToken, verifyAdmin } = tokenMiddleware;
const {
  getProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
  createProduct,
} = productControllers;

//@desc Get all product => /api/products/
//@access Public
Router.post("/", getProducts);

//@desc Add product => /api/products/create
//@access Admin
Router.post("/create", verifyToken, verifyAdmin, createProduct);

//@desc update Product => /api/products/updateproduct/:id
//@access Private
Router.post("/updateproduct/:id", verifyToken, verifyAdmin, updateProduct);

//@desc delete product => /api/products/deleteuser
//@access Admin
Router.put("/deleteuser", verifyToken, verifyAdmin, deleteProduct);

//@desc Get one product => /api/products/:id
//@access Public
Router.get("/:id", getProductDetails);

module.exports = Router;
