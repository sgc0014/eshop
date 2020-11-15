const app = require("express")();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const connectDb = require("./config/dbConnect");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: Axios } = require("axios");

app.use(cors());
dotenv.config();
connectDb();


app.get("/", (req, res) => {
  res.send("Eshop server running");
});
app.use(bodyParser.json())
app.use("/api/products", productRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/orders", orderRoute);
app.get("/api/test/esewa", async(req,res) => {
  const {data} = await Axios.post(" https://uat-merchant.esewa.com.np",
  {
    "amt":"90",
    "txAmt":"10",
    "psc":"0",
    "pdc":"0",
    "tamt":"100",
     "scd":"EPAYTEST",
     "pid":"ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
     "su":"http://merchantsite.com/success,html?q=su",
     "fu":"http://merchantsite.com/failure.html?q=fu"
  }
  )
  console.log(data)
  res.sendFile(path.join)
})

app.use(errorMiddleware.urlError);
app.use(errorMiddleware.errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `server running at ${process.env.PORT} on ${process.env.NODE_ENV} mode`
  );
});
