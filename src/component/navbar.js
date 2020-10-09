import useOuterClick from "../utils/useOuterClick";
import "../App.css";
import React, { useState } from "react";
import logo from "../assets/logo2.png";
import {
  FiUser,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiPlus,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar(props) {
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

    setsearchTerm("");
  };

  return (
    <>
      <div className="navbar">
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
        <Link to='/'><img src={logo} alt="" /></Link>  
        </header>
        <ul className="first-part-nav nav-items">
          <Link to="/men">
            {" "}
            <li className=" nav-item"> Men </li>
          </Link>
          <Link to="/women">
            {" "}
            <li className=" nav-item">Women</li>
          </Link>
          <Link to="/accesories">
            {" "}
            <li className=" nav-item">Accesories</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li className=" nav-item">Contact</li>
          </Link>
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
            <FiSearch size={"1.5em"} strokeWidth={"1"} />
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
              <FiSearch
                size={"1.5em"}
                style={{ cursor: "pointer" }}
                strokeWidth={"1"}
              />
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
              <FiUser size={"1.5em"} strokeWidth={"1"} />
            </span>
          </li>
          <li className="nav-item hideWishList">
            <span className="responsive-icon">
              <FiHeart size={"1.5em"} strokeWidth={"1"} />
            </span>
            <span className="count">0</span>
          </li>
          <li className="nav-item">
            <span className="responsive-icon">
              <FiShoppingCart size={"1.5em"} strokeWidth={"1"} />
            </span>
            <span className="count">0</span>
          </li>
        </ul>
      </div>
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
    </>
  );
}
