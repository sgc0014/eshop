import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/productActions";
import Product from "./product";
export function Trending(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <section className="trending-container">
      <header className="section-header">
        <div className="header-line"></div>
        <h3>Trending</h3>
        <div className="header-line"></div>
      </header>

      <div className="trending-body">
        {loading ? (
          <h4 style={{ textAlign: "center" }}>Loading...</h4>
        ) : products && products.products.length > 0 ? (
          products.products.map((product, i = product._id) => (
            <Product
              name={product.name}
              price={product.price}
              img={product.img}
              id={product._id}
              key={i}
            />
          ))
        ) : (
          <h4 style={{ textAlign: "center" }}>No products found.</h4>
        )}
      </div>
      <div className="load-more-button-container">
        <button className="load-more-button">Load More</button>
      </div>
    </section>
  );
}
