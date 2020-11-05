const Router = require("express").Router();
const asyncHandler = require('express-async-handler')
const Product = require("../model/productModel");

//@desc Get all product => /api/products/
//@access Public
Router.get("/", asyncHandler( async (req, res, next) => {
  const products = await Product.find({});

  res.json(products);
}))

//@desc Get one product => /api/products/:id
//@access Public
Router.get("/:id", asyncHandler (async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);

  if (product) {
    res.json(product);
  } else {
    res.statusCode(404).json({ msg: "No product found" });
  }

  res.json(products);
}))


module.exports = Router