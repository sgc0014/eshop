import React, { useState } from "react";
import pic1 from "../assets/products/model-1-1.jpg";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

export default function Product(props) {
  const [cartstate, setcartstate] = useState(false);
  const [wishliststate, setwishliststate] = useState(false);
  return (
    <div className="product-container">
      <div className="image-container">
        <img src={pic1} alt="" />
        <div className="hover-card">
          <span className="icon">
            <FiHeart />
          </span>
          <span className="card-name">Wishlist</span>
        </div>
        <div className="hover-card">
          <span className="icon">
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
      <p className="product-name">Young design short sleeve tshirt</p>
      <p className="product-price">Rs.500</p>
    </div>
  );
}
