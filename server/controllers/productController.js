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
const updateProduct = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const product = await Product.findById(id)
  if(product){
    product.name = req.body.name || product.name;
    product.brand= req.body.brand || product.brand;
    product.price= req.body.price || product.price;
    product.category= req.body.category || product.category;
   
    await product.save()
    res.status(201).json(product)
  }
  else{
    res.status(404)
    throw new Error("No such product found")
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const {id} = req.body;

  const product = await Product.findById(id)
  if(product){
   await product.remove()
    res.status(201).json("product removed")
  }
  else{
    res.status(404)
    throw new Error("No such product found")
  }
})

module.exports.getProducts = getProducts;
module.exports.getProductDetails = getProductDetails;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
