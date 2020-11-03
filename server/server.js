const app = require("express")();
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
  

app.listen(5000, () => {
  console.log("Server running");
});
