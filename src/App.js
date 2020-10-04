import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import man from "./assets/man.jpg";
import woman from "./assets/woman.jpg";
import footwear from "./assets/footwear.jpg";
import accesories from "./assets/accesories.jpg";
import {
  FiUser,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiPlus,
} from "react-icons/fi";
import useOuterClick from "./utils/useOuterClick";
import Button from "./component/button";
import { Product } from "./component/product";

function App() {
  const [mobileNav, setmobileNav] = useState(false);
  const [searchToggler, setsearchToggler] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");

  const innerRef = useOuterClick((ev) => {
    if (mobileNav) {
      setmobileNav(false);
    }
  });
  const searchRef = useOuterClick((ev) => {
    if (searchToggler) {
      setsearchToggler(false);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setsearchTerm("");
  };

  return (
    <div className="App">
      <section className="navbar">
        <div
          className="hamburger"
          onClick={() => {
            setmobileNav(true);
          }}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <header className="brand-name">
          <img src={logo} alt="" />
        </header>
        <ul className="first-part-nav nav-items">
          <li className=" nav-item">Men</li>
          <li className=" nav-item">Women</li>
          <li className=" nav-item">Accesories</li>
          <li className=" nav-item">Contact</li>
        </ul>
        <ul className="second-part-nav nav-items">
          <li
            className="nav-item bigSearch"
            style={{
              background: "#e8e8e8",
              borderRadius: "6px",
              padding: "3px 11px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              placeholder="search..."
              style={{ background: "#e8e8e8", border: "none", outline: "none" }}
            ></input>
            <FiSearch size={"1.5em"} strokeWidth={'1'} />
          </li>
          {/* phone search */}
          <li
            className="hide-sm-search"
            onClick={() => {
              setsearchToggler(!searchToggler);
            }}
          >
            <span className="responsive-icon">
              {" "}
              <FiSearch size={"1.5em"} style={{ cursor: "pointer" }}   strokeWidth={'1'}/>
            </span>
          </li>
          <form
            className={
              searchToggler
                ? "search-input-container hide-sm-search show-sm-search"
                : "search-input-container hide-sm-search"
            }
            ref={searchRef}
            onSubmit={handleSubmit}
          >
            <input
              placeholder="search..."
              style={{
                background: "#e8e8e8",
                border: "none",
                outline: "none",
              }}
              value={searchTerm}
              onChange={(e) => {
                setsearchTerm(e.target.value);
              }}
            ></input>
          </form>
          <li className="nav-item">
            <span className="responsive-icon">
              <FiUser size={"1.5em"}  strokeWidth={'1'} />
            </span>
          </li>
          <li className="nav-item hideWishList">
            <span className="responsive-icon">
              <FiHeart size={"1.5em"}  strokeWidth={'1'} />
            </span>
            <span className="count">0</span>
          </li>
          <li className="nav-item">
            <span className="responsive-icon">
              <FiShoppingCart size={"1.5em"}  strokeWidth={'1'} />
            </span>
            <span className="count">0</span>
          </li>
        </ul>
      </section>
      {/* burger navbar */}
      <div
        className={
          mobileNav
            ? "mobile-nav-container"
            : "mobile-nav-container hidemobileNav"
        }
      >
        <ul
          className={mobileNav ? "mobile-nav" : "mobile-nav hidemobile"}
          ref={innerRef}
        >
          <header className="mobile-nav-item">
            Welcome Guest{" "}
            <span className="close" style={{ paddingRight: "16px" }}>
              <FiPlus size={"1.5em"} />
            </span>
          </header>
          <li className="mobile-nav-item">Men</li>
          <li className="mobile-nav-item">Women</li>
          <li className="mobile-nav-item">Accesories</li>
          <li className="mobile-nav-item">Contact</li>
          <li className="mobile-nav-item">About Us</li>
        </ul>
      </div>
      <section className="category-section">
        <div className="col-1-3 ">
          <div className="category">
            <img src={man} />
            <Button title="Man" />
          </div>
        </div>
        <div className="col-2-3">
          <div className="category" style={{marginTop:'-16px', marginBottom: "16px" }}>
            <img src={footwear} />
            <Button title="Footwear" />
          </div>
          <div className="category">
            <img src={accesories} />
            <Button title="Accesories" />
          </div>
        </div>
        <div className="col-3-3 ">
          <div className="category">
            <img src={woman} />
            <Button title="Woman" />
          </div>
        </div>
      </section>

      <section className="trending-container">
        <header className='section-header'>
          <div className="header-line"></div>
          <h3>Trending</h3>
          <div className="header-line"></div>
        </header>

        <div className='trending-body'>
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
    </div>
  );
}

export default App;
