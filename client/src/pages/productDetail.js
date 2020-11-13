import React, { useState, useEffect } from "react";
import "./productDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { productDetail } from "../store/actions/productActions";
import { addCartItem, removeCartItem } from "../store/actions/cartAction";

export function Productdetail(props) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const cart = useSelector((state) => state.cart);
  const { error, loading, product } = productDetails;
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(productDetail(props.match.params.id));
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setcartState(true);
    }
  }, [dispatch, cartItems, props.match.params.id]);

  const [cartState, setcartState] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const cartStateAction = () => {
    if (!cartState) {
      setcartState(true);

      dispatch(addCartItem({ ...product, qty: quantity }));
    } else {
      setcartState(false);
      dispatch(removeCartItem(product));
    }
  };
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
              min={1}
              className="product-quantity-input"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={() => cartStateAction()}
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
