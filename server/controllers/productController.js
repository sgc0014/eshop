const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel");

const createProduct = asyncHandler(async (req, res) => {
  const {
    user,
    name,
    price,
    img,
    brand,
    gender,
    category,
    description,
    countInStock,
  } = req.body;

  const newProduct = await Product.create({
    user,
    name,
    price,
    img,
    brand,
    gender,
    category,
    description,
    countInStock,
  });

  res.status(201).json(newProduct)
});

const getProducts = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const keyword = req.query.keyword?{
    name: new RegExp(req.query.keyword, 'i')
  }: {}
  
  //sorting

  //filtering

  // const excludeQry = ["page","limit"];
  // excludeQry.forEach(qry => delete query[qry])
  // const queryStr = JSON.stringify(query)

  const count = await Product.countDocuments();

  const products = await Product.find({...keyword})
    .sort({ price: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .exec();

  res.json({
    products,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
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

  const product = await Product.findById(id);
  if (product) {
    product.name = req.body.name || product.name;
    product.brand = req.body.brand || product.brand;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category;
    product.img = req.body.img || product.img;
    product.description = req.body.description || product.description;
    product.countInStock = req.body.countInStock || product.countInStock;
    product.gender = req.body.gender || product.gender;

    await product.save();
    res.status(201).json(product);
  } else {
    res.status(404);
    throw new Error("No such product found");
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const product = await Product.findById(id);
  if (product) {
    await product.remove();
    res.status(201).json("product removed");
  } else {
    res.status(404);
    throw new Error("No such product found");
  }
});

module.exports.getProducts = getProducts;
module.exports.getProductDetails = getProductDetails;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.createProduct = createProduct;
