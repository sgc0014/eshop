const user = require('./model/userModel')
const product = require('./model/productModel')
const userData = require('./data/users')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const productData = require('./data/products')
const connectdb= require('./config/dbConnect')
dotenv.config()
connectdb()
const addData = async() => {
   try {
    // await  user.deleteMany();
     await  product.deleteMany();
    // const userAdded = await user.insertMany(userData)
    // console.log(productData)
    // console.log(userAdded[0].id)
    const productSample = productData.map(product => {return{...product,user:mongoose.Types.ObjectId('5fb7817acd74971780f2bb69')}})
    await product.insertMany(productSample)
   } catch (error) {
       console.error(error)
       process.exit(1)
   }
}

const removeData = async() => {
    console.log("Destroy")
  await  user.deleteMany();
  await  product.deleteMany();
}
if(process.argv[2] === '-d'){
    removeData()
}
else{
    addData()
}
