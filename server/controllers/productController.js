const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

const getProductDetails = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  if (product) {
    res.json(product);
  } else {
    res.statusCode(404);
    throw new Error(`No such product found`);
  }
});

module.exports.getProducts = getProducts;
module.exports.getProductDetails = getProductDetails;
