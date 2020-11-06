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
    dispatch(listProducts());
  }, [dispatch]);

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
  const [filter, setFilter] = useState({
    category: "",
    size: "",
    gender: "",
  });

  const [dropdownState, setdropdownState] = useState(false);

  const selected = (option, header) => {
    if (header.toLowerCase() === "category") {
      if (filter.category === option) {
        filter.category = "";

        console.log(filter);
      } else {
        filter.category = option;
        console.log(filter);
      }
    }
    if (header.toLowerCase() === "size") {
      if (filter.size === option) {
        filter.size = "";
        console.log(filter);
      } else {
        filter.size = option;
        console.log(filter);
      }
    }
    if (header.toLowerCase() === "gender") {
      if (filter.gender === option) {
        filter.gender = "";
        console.log(filter);
      } else {
        filter.gender = option;
        console.log(filter);
      }
    }
    filterChange();
  };
  const filterChange = () => {
    console.log("h");
    // let filterredProduct = productList.filter(
    //   (product) =>
    //     filter.category.toLowerCase() === product.category.toLowerCase()
    // );
    // setproductList(filterredProduct);
  };
  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error.message}</h2>
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
              {filterList.map((filter,i) => (
                <section className="filter-dropdown"key={i}>
                  <header
                    className="filter-option-header"
                    onClick={() => {
                      setdropdownState(!dropdownState);
                    }}
                  >
                    <span>{filter.header}</span>
                    {dropdownState ? (
                      <span>
                        <IoIosArrowDown className="open" />
                      </span>
                    ) : (
                      <span>
                        <IoIosArrowDown className="hide" />
                      </span>
                    )}
                  </header>
                  <ul
                    className={
                      dropdownState
                        ? "dropdown-options"
                        : "dropdown-options dropdown-options-hide"
                    }
                  >
                    {filter.options.map((option,i) => (
                      <li
                        className="option"
                        key={i}
                        value={option}
                        onClick={() => selected(option, filter.header)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </main>
          </div>
        </div>
        <div className="right">
          <div className="products-container">
            {products.map((product,i=product._id) => (
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
