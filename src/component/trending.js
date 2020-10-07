import React from "react";
import Product from "./product";
export function Trending(props) {
  return (
    <section className="trending-container">
      <header className="section-header">
        <div className="header-line"></div>
        <h3>Trending</h3>
        <div className="header-line"></div>
      </header>

      <div className="trending-body">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="load-more-button-container">
        <button className="load-more-button">Load More</button>
      </div>
    </section>
  );
}
