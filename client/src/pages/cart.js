import React, { useEffect, useState } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../store/actions/cartAction";

export function Cart(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [sum, setsum] = useState(0);
  const [cartstore, setcartstore] = useState();
  const [deliveryCharge, setdeliveryCharge] = useState(100);

  const setTotal = () => {
    setsum(cartItems.reduce((a, b) => a + b.price * b.qty, 0));
  };

  useEffect(() => {
    setcartstore(cartItems);
    setTotal();
  }, [setTotal, cartItems]);

  return cartstore && cartstore.length > 0 ? (
    <section className="cart-body-container">
      <main className="cart-body">
        <header className="cart-body-header">
          <div className="cart-header-container">
            <h3>Cart</h3>
          </div>
        </header>
        {cartstore &&
          cartstore.map((product, i = product._id) => (
            <div className="cart-product" key={i}>
              <div className="cart-product-display">
                <div className="cart-product-img-container">
                  <img
                    className="cart-product-img"
                    src={`/products/${product.img}`}
                  />
                </div>
                <div className="cart-product-quantity">
                  <div
                    className="increment quantity"
                    onClick={() => {
                      const index = cartstore.indexOf(product);
                      const array = [...cartstore];
                      if (product.qty < product.countInStock) {
                        array[index].qty++;
                      }
                      setcartstore(array);
                    }}
                  >
                    +
                  </div>
                  {product.qty}
                  <div
                    className="decrement quantity"
                    onClick={() => {
                      const index = cartstore.indexOf(product);
                      const array = [...cartstore];
                      if (product.qty !== 1) {
                        array[index].qty--;
                      }
                      setcartstore(array);
                   
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className="cart-product-info">
                <div className="cart-product-name">{product.name}</div>
                <div className="cart-product-price">Rs.{product.price}</div>
                <button
                  className="cart-product-button"
                  onClick={() => {
                    dispatch(removeCartItem(product));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        <div
          className={
            cartstore.length <= 1
              ? "cart-checkout cart-checkout-alt"
              : " cart-checkout "
          }
        >
          <button onClick={() => {props.history.push('/login?redirect=shipping')}}>Place order</button>
        </div>
      </main>
      <div className="price-summary">
        <header>Price Details</header>
        <div className="prices">
          <div>
            <span>Price ({cartstore.length} items):</span>
            <span> Rs.{sum}</span>
          </div>
          <div>
            {" "}
            <span>Delivery Charge:</span> <span>Rs.{deliveryCharge}</span>
          </div>
          <div
            className="dotted-line"
            style={{ borderBottom: "1px dotted #b7b7b7" }}
          ></div>
          <div style={{ fontWeight: "600" }}>
            <span>Total:</span>
            <span>Rs.{sum + deliveryCharge}</span>{" "}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="cart-product-empty">...No items in cart...</section>
  );
}
