import useOuterClick from "../utils/useOuterClick";
import "../App.css";
import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { FiUser, FiSearch, FiShoppingCart, FiHeart } from "react-icons/fi";
import { Link, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/actions/userAction";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {cartItems} = useSelector(state=> state.cart)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [mobileNav, setmobileNav] = useState(false);
  const [searchToggler, setsearchToggler] = useState(false);
  const [profileDropdown, setprofileDropdown] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");

  const innerRef = useOuterClick((ev) => {
    if (mobileNav) {
      setmobileNav(false);
    }
  });
  const profileRef = useOuterClick((ev) => {
    if (profileDropdown) {
      setprofileDropdown(false);
    }
  });
  const searchRef = useOuterClick((ev) => {
    if (searchToggler) {
      setsearchToggler(false);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm)
    if(searchTerm){
      history.push(`/search/${searchTerm}`)
      setsearchTerm("");
    }
    
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
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
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
            <form onSubmit={handleSubmit}>
            <input
              placeholder="search..."
              style={{ background: "#e8e8e8", border: "none", outline: "none" }}
              onChange={(e) =>{setsearchTerm(e.target.value)}}
            ></input>
            <FiSearch size={"1.5em"} strokeWidth={"1"} type="submit" />
            </form>
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
          <li
            className="nav-item profile"
            onClick={() => {
              setprofileDropdown(!profileDropdown);
            }}
            ref={profileRef}
          >
            {userInfo ? (
              <>
                <span className="responsive-icon ">
                  <FiUser size={"1.5em"} strokeWidth={"1"} />
                </span>
                <ul
                  className={
                    profileDropdown
                      ? "profile-dropdown-menu open"
                      : "profile-dropdown-menu"
                  }
                >
                  <li>
                    <Link to="/profile"> Profile </Link>
                  </li>
                  {userInfo.isAdmin ? (
                    <>
                    <li>
                      <Link to="/userlist">User List</Link>
                    </li>
                    <li>
                      <Link to="/admin/orderlist">Order List</Link>
                    </li>
                    <li>
                      <Link to="/admin/productlist">Product List</Link>
                    </li>
                    </>
                  ) : (
                    ""
                  )}
                  <li
                    onClick={() => {
                      dispatch(userLogout());
                    }}
                  >
                    Log Out
                  </li>
                </ul>
              </>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
          {/* <li className="nav-item hideWishList">
            <span className="responsive-icon">
              <FiHeart size={"1.5em"} strokeWidth={"1"} />
            </span>
            <span className="count">0</span>
          </li> */}
          <Link to="/cart">
            <li className="nav-item">
              <span className="responsive-icon">
                <FiShoppingCart size={"1.5em"} strokeWidth={"1"} />
              </span>
              <span className="count"><div>{cartItems.length}</div></span>
            </li>
          </Link>
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
          <li className="mobile-nav-first-item">
            <span style={{ fontWeight: "600" }}>
              <Link to="login">Login</Link>
            </span>{" "}
            or{" "}
            <span style={{ fontWeight: "600" }}>
              <Link to="signup">Sign Up</Link>
            </span>
          </li>
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
