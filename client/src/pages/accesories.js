import React, { useEffect, useState } from "react";
import {} from "react-icons/io";
import { Dropdown } from "../component/dropDown";
import { IoIosArrowDown } from "react-icons/io";
import Product from "../component/product";
import "./men.css";
import { listProducts } from "../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";


export function Accesories(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const [filterList, setFilterlist] = useState([
    {
      header: "category",
      options: ["Bags", "Mobile Cover"],
    },

    {
      header: "gender",
      options: ["Male", "Female"],
    },
  ]);
  const [filter, setFilter] = useState({});

  const [dropdownState, setdropdownState] = useState(false);
  const filterChange = (obj) => {
    let finalFilter = { ...filter };

    if (obj.header === "category") {
      finalFilter.category = obj;
    }
    if (obj.header === "gender") {
      finalFilter.gender = obj;
    }

    setFilter(finalFilter);
    dispatch(listProducts(finalFilter));
  };
  useEffect(() => {
    dispatch(
      listProducts({
        category: { header: "category", filterArr: ["bags", "mobile cover"] },
      })
    );
  }, []);

  return error ? (
    <h2>{error}</h2>
  ) : (
    <section className="men-section">
      <div className="header">
        <h2>Accesories</h2>
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
                  filterChange={filterChange}
                />
              ))}
            </main>
          </div>
        </div>
        <div className="right">
          <select
            onChange={(e) =>
              filterChange({ header: "sort", item: e.target.value })
            }
          >
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
          <div className="products-container">
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
        </div>
      </main>
    </section>
  );
}
