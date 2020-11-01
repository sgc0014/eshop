import React, { useState } from "react";
import { } from "react-icons/io";
import { Dropdown } from "../component/dropDown";
import Product from "../component/product";
import "./men.css";


export function Men(props) {
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
      name: " tshirt",
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
      name: " tshirt",
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
      name: " tshirt",
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
      name: " tshirt",
      price: 300,
      img:"product3.jpg"
    },
  ]);
  const [filterList, setFilterlist] = useState([
    {
      header: "category",
      options: ["Tshirt", "Shirt", "Jeans"],
    },
    {
      header: "Size",
      options: ["XS", "S", "M", "L", "XL"],
    },
    {
      header: "Sort By",
      options: ["High to Low", "Low to high"],
    },
    {
      header: "Gender",
      options: ["Male", "Female"],
    },
  ]);

  const filterChange = (e) => {

  };
  return (
    <section className="men-section">
      <div className="header">
        <h2>Mens Clothing</h2>
        <div className="category-header-line"></div>
      </div>
      <main className="men-body">
        <div className="left">
          <div className="filter-container">
            <header className="filter-header">filter</header>
            <main>
              {filterList.map((filter) => (
                <Dropdown header={filter.header} options={filter.options} filterChange={filterChange} />
              ))}
            </main>
          </div>
        </div>
        <div className="right">
          <div className="products-container">
            {productList.map((product) => (
             
              <Product name={product.name} price={product.price} img={product.img} />
       
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
