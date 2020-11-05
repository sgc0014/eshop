import React, { useState, useEffect } from "react";
import "./productDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../store/actions/productActions";

export function Productdetail(props) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const { error, loading, product } = productDetails;
  console.log(product);

  useEffect(() => {
    dispatch(productDetail(props.match.params.id));
  }, [dispatch]);

  const [cartState, setcartState] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error.message}</h2>
  ) : (
    <section className="product-detail-container">
      <div className="product-detail-image-container">
        <img src={`/products/${product.img}`} />
      </div>

      <div className="product-info">
        <header>{product.name} </header>

        <div className="product-detail-price">Rs.{product.price}</div>

        <div className="extra-info">
          <h4>Availability : </h4>
          <span className="info">
            {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="extra-info">
          <h4>Brand: </h4>
          <span className="info">{product.brand}</span>
        </div>

        <div className="product-description" style={{ textAlign: "justify" }}>
          {product.description}
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
