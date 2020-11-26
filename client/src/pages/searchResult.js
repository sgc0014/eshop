import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/productActions";
import { Dropdown } from "../component/dropDown";
import Product from "../component/product";

export function SearchResult(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  const keyword = props.match.params.keyword;
  useEffect(() => {
    if(keyword){
      dispatch(listProducts(keyword));
    }
    
  }, [dispatch,keyword]);
  
  const [filterList, setFilterlist] = useState([
    {
      header: "category",
      options: ["Tshirt", "Shirt", "Jeans"],
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
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    sort: "",
  });


  return (
    <>
      <section className="men-section">
        <div className="header">
          <h3>Search result for "{keyword}"</h3>
          <div className="category-header-line"></div>
        </div>
        <main className="men-body">
          <div className="left">
            <div className="filter-container">
              <header className="filter-header">filter</header>
              <main>
                {filterList.map((filter, i) => (
                  <Dropdown
                    key={i}
                    header={filter.header}
                    options={filter.options}
                  />
                ))}
              </main>
            </div>
          </div>
          <div className="right">
            <div className="products-container">
              {loading ? (
                <h3 style={{ textAlign: "center" }}>Loading...</h3>
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
                <h3 style={{ textAlign: "center" }}>No products found</h3>
              )}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
