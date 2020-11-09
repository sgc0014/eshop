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

app.use(errorMiddleware.urlError);
app.use(errorMiddleware.errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `server running at ${process.env.PORT} on ${process.env.NODE_ENV} mode`
  );
});
