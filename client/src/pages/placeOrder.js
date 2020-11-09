import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../store/actions/orderAction";
import { Checkoutnav } from "./checkOutNav";
import "./placeOrder.css";

export function Placeorder(props) {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
  const { cartItems } = cartInfo;
  const { shippingAddress } = cartInfo;
  const { paymentMethod } = cartInfo;
  const shippingPrice = 10;
  const [itemsPrice, setitemsPrice] = useState();
  const taxPrice = 0.2 * itemsPrice;

  useEffect(() => {
    setitemsPrice(cartItems.reduce((a, b) => a + b.qty * b.price, 0));
  });
  const handleOrder = (e) => {
    e.preventDefault();
  
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        shippingPrice,
        paymentMethod,
        taxPrice,
        itemsPrice,
      })
    );
  };

  return (
    <>
      <Checkoutnav step1 step2 step3 step4 />
      <div className="place-order-container">
        <div className="order-summary">
          <header>
            <h2 className="order-summary-header">Shipping Address</h2>
          </header>
          <div className="order-summary-info">
            Address: {shippingAddress.address}, {shippingAddress.city},{" "}
            {shippingAddress.postal}, {shippingAddress.district}
          </div>
          <div className="order-summary-border"></div>
          <header>
            <h2 className="order-summary-header">Payment Method</h2>
          </header>
          <div className="order-summary-info">
            Method: {cartInfo.paymentMethod}
          </div>
          <div className="order-summary-border"></div>
          <header>
            <h2 className="order-summary-header">Order Items</h2>
          </header>
          <div className="order-summary-info">
            <ul className="order-items-list">
              {cartItems.map((item) => (
                <>
                  <li className="order-item">
                    <img
                      className="order-item-img"
                      src={`/products/${item.img}`}
                    />
                    <div className="order-item-name">{item.name}</div>
                    <div className="order-item-price">
                      {item.qty} * {item.price} = Rs.{item.qty * item.price}
                    </div>
                  </li>
                  <div className="order-item-border"></div>
                </>
              ))}
            </ul>
          </div>
        </div>
        <div className="order-price-summary">
          <header>
            <h2 className="order-summary-header">Order Summary</h2>
          </header>
          <div className="order-price-list">
            <div className="order-price-item">
              <span>Items</span>
              <span>Rs.{Number(itemsPrice)}</span>
            </div>
            <div className="order-price-item">
              <span>Shipping</span>
              <span>Rs{Number(shippingPrice)}</span>
            </div>
            <div className="order-price-item">
              <span>taxPricees</span>
              <span>Rs{Number(taxPrice)}</span>
            </div>
            <div className="order-price-item">
              <span>Total</span>
              <span>
                Rs
                {Number(itemsPrice) + Number(shippingPrice) + Number(taxPrice)}
              </span>
            </div>
          </div>
          <div className="order-summary-button">
            <button onClick={handleOrder}>Place order</button>
          </div>
        </div>
      </div>
    </>
  );
}
