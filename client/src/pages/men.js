import React, { useEffect, useState } from "react";
import {} from "react-icons/io";
import { Dropdown } from "../component/dropDown";
import { IoIosArrowDown } from "react-icons/io";
import Product from "../component/product";
import "./men.css";
import { listProducts } from "../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";


export function Men(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
 

  useEffect(() => {
    if (!products) {
      dispatch(listProducts());
    }
  }, [dispatch,]);

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

  const [dropdownState, setdropdownState] = useState(false);

  const selected = (option, header) => {
    if (header.toLowerCase() === "category") {
      if (filter.category === option) {
        filter.category = "";
      } else {
        filter.category = option;
      }
    }

    if (header.toLowerCase() === "gender") {
      if (filter.gender === option) {
        filter.gender = "";
      } else {
        filter.gender = option;
      }
    }
    filterChange();
  };
  const filterChange = () => {
    // let filterredProduct = productList.filter(
    //   (product) =>
    //     filter.category.toLowerCase() === product.category.toLowerCase()
    // );
    // setproductList(filterredProduct);
  };
  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
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
            {products &&
              products.products.map((product, i = product._id) => (
                <Product
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  id={product._id}
                  key={i}
                />
              ))}
          </div>
        </div>
      </main>
    </section>
  );
}
