import React, { useState } from "react";
import Product from "./product";
export function Trending(props) {
  const [productList, setproductList] = useState([
    {
      name: "full sleeve tshirt",
      price: 500,
      img: "mtshirt.jpg",
      gender: "male",
      category: "tshirt",
     size:'xs'
    },
    {
      name: "short sleeve tshirt",
      price: 600,
      img: "mtshirt1.jpg",
      category: "tshirt",
     size:'s'
    },
    {
      name: " tshirt",
      price: 300,
      img: "mtshirt2.jpg",
      category: "tshirt",
     size:'m'
    },
    {
      name: "full sleeve tshirt",
      price: 500,
      img: "mjeans.jpg",
      category: "jeans",
     size:'l'
    },
    {
      name: "short sleeve tshirt",
      price: 600,
      img: "mjeans1.jpg",
      category: "jeans",
     size:'xl'
    },
    {
      name: " tshirt",
      price: 300,
      img: "mshirt.jpg",
      category: "shirt",
     size:'xs'
    },
    {
      name: "full sleeve tshirt",
      price: 500,
      img: "mshirt1.jpg",
      category: "shirt",
     size:'s'
    },
    {
      name: "short sleeve tshirt",
      price: 600,
      img: "mshirt2.jpg",
      category: "shirt",
     size:'m'
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
