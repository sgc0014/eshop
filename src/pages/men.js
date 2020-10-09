import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Dropdown } from "../component/dropDown";
import Product from "../component/product";
import "./men.css";

export function Men(props) {
  const [dropdownState, setdropdownState] = useState({
    size: false,
    category: false,
  });
  return (
    <section className="men-section">
      <div className="header">
        <h2>Mens Clothing</h2>
        {console.log(dropdownState.category)}
      </div>
      <main className="men-body">
        <div className="left">
          <div className="filter-container">
            <header className="filter-header">filter</header>
            <main>
             <Dropdown header='Category' options={["Tshirt","Shirt","Jeans"]} />
            <Dropdown header="Size" options={["XS","S","M","L","XL"]} />
            <Dropdown header="Sleeve" options={["Full Sleeve","Half Sleeve","Sleevless"]} />
        <Dropdown header='Sort By' options={["High to Low","Low to high"]}/>
            </main>
          </div>
        </div>
        <div className="right">
          <div className="products-container">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </main>
    </section>
  );
}
