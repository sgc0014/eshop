import React, { useState } from "react";
import "./productDetail.css";

export function Productdetail(props) {
  const [cartState, setcartState] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <section className="product-detail-container">
      <div className="product-detail-image-container">
        <img src="/products/mshirt1.jpg" />
      </div>

      <div className="product-info">
        <header>Black Collarless Shirt </header>

        <div className="product-detail-price">Rs.800</div>

        <div className="extra-info">
          <h4>Availability : </h4>
          <span className="info">In Stock</span>
        </div>

        <div className="extra-info">
          <h4>Brand: </h4>
          <span className="info">XYZ Company</span>
        </div>

        <div className="product-description" style={{textAlign:"justify"}}>
          loremQui deserunt sit commodo dolor reprehenderit aute eiusmod. Mollit
          irure officia in sit mollit aliqua in ad laborum minim magna aute ea
          quis. Ullamco dolore ullamco et enim culpa officia velit eu aliqua
          laborum.
        </div>

        <div className="product-action">
          <div className="product-quantity">
            <span className="info">Quantity: </span>
            <input
              type="number"
              value={quantity}
              defaultValue={1}
              min={1}
              className="product-quantity-input"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={() => setcartState(!cartState)}
              className={cartState ? `add-to-cart added` : `add-to-cart`}
            >
              {cartState ? "Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
