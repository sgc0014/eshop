const app = require("express")();
const mongoose = require("mongoose")
const products = require("./product");





app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/product/:id", (req, res) => {
    const product = products.find(product => product.id == req.params.id)
    res.json(product);
  });
  
  const uri = "mongodb+srv://sgc0014:thor0014@api.r67gw.mongodb.net/api?retryWrites=true&w=majority";
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {

    console.log("mongoose connected")
    
    app.listen(5000, () => {
      console.log("Server running");
    });
    
  })
  .catch(err => console.log(err))
