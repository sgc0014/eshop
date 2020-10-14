import React, { useState } from "react";
import Product from "./product";
export function Trending(props) {
  const [productList, setproductList] = useState([
    {
      name: "full sleeve tshirt",
      price: 500,
      img:"product1.jpg"
    },
    {
      name: "short sleeve tshirt",
      price: 600,
      img:"product2.jpg"
    },
    {
      name: "sleevless tshirt",
      price: 300,
      img:"product3.jpg"
    },
    {
      name: "full sleeve tshirt",
      price: 500,
      img:"product1.jpg"
    },
    {
      name: "short sleeve tshirt",
      price: 600,
      img:"product2.jpg"
    },
    {
      name: "sleevless tshirt",
      price: 300,
      img:"product3.jpg"
    },
    {
      name: "short sleeve tshirt",
      price: 600,
      img:"product2.jpg"
    },
    {
      name: "sleevless tshirt",
      price: 300,
      img:"product3.jpg"
    },
  ]);
  return (
    <section className="trending-container">
      <header className="section-header">
        <div className="header-line"></div>
        <h3>Trending</h3>
        <div className="header-line"></div>
      </header>

      <div className="trending-body">
        {productList.map(product=> (
          <Product img={product.img} name={product.name} price={product.price} />
        ))}
      </div>
      <div className="load-more-button-container">
        <button className="load-more-button">Load More</button>
      </div>
    </section>
  );
}
