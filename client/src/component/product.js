import React, { useState } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Product(props) {
  const [cartstate, setcartstate] = useState(false);
  const [wishliststate, setwishliststate] = useState(false);
  const { price, name, img, id } = props;
  return (
    <div className="product-container">
      <div className="image-container">
        <img src={`/products/${img}`} alt="" />
        <div className="hover-card">
          <span
            onClick={() => {
              setwishliststate(!wishliststate);
            }}
            className={wishliststate ? "icon icon-clicked" : "icon"}
          >
            <FiHeart />
          </span>
          <span className="card-name">Wishlist</span>
        </div>
        <div className="hover-card">
          <span
            onClick={() => {
              setcartstate(!cartstate);
            }}
            className={cartstate ? "icon icon-clicked" : "icon"}
          >
            <FiShoppingCart />
          </span>{" "}
          <span className="card-name">Add To Cart </span>
        </div>

        <div className="hover-card-mob">
          <span
            className={
              wishliststate ? " icon-mob icon-mob-clicked " : "icon-mob"
            }
            onClick={() => {
              setwishliststate(!wishliststate);
            }}
          >
            <FiHeart />
          </span>
          <span
            className={cartstate ? " icon-mob icon-mob-clicked " : "icon-mob"}
            onClick={() => {
              setcartstate(!cartstate);
            }}
          >
            <FiShoppingCart />
          </span>
        </div>
      </div>
      <Link to={`/productDetail/${id}`}>
        <div className="product-name">{name}</div>
        <div className="product-price">Rs.{price}</div>
      </Link>
    </div>
  );
}
