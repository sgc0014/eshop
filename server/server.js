const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoute')
const connectDb = require("./config/dbConnect");


dotenv.config()
connectDb();

app.get("/", (req, res) => {
  res.send("Eshop server running");
});

app.use('/api/products', productRoutes)


app.listen(process.env.PORT || 5000, () => {
  console.log(`server running at ${process.env.PORT} on ${process.env.NODE_ENV} mode`);
});
