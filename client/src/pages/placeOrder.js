import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createOrder } from "../store/actions/orderAction";
import { Checkoutnav } from "./checkOutNav";
import "./placeOrder.css";

export function Placeorder(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartInfo = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { cartItems, shippingAddress, paymentMethod } = cartInfo;

  // calculate price
  cartInfo.itemsPrice = cartItems.reduce((a, b) => a + b.qty * b.price, 0);
  cartInfo.shippingPrice = cartInfo.itemsPrice > 500 ? 0 : 50;
  cartInfo.taxPrice = Number(0.2 * cartInfo.itemsPrice).toFixed(2);
  cartInfo.totalPrice = Number(cartInfo.itemsPrice) +
    Number(cartInfo.shippingPrice) +
    Number(cartInfo.taxPrice)

  const { loading, order, success, error } = orderCreate;
useEffect(() => {
  if(success){
   
    history.push(`/orders/${order._id}`)
  }
},[history,success])
  const handleOrder = (e) => {
    e.preventDefault();

    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress: cartInfo.shippingAddress,
        shippingPrice: cartInfo.shippingPrice,
        paymentMethod: cartInfo.paymentMethod,
        taxPrice: cartInfo.taxPrice,
        itemsPrice: cartInfo.itemsPrice,
        totalPrice: cartInfo.totalPrice
      })
    );
if(success){
  history.push(`/order/${orderCreate.order._id}`);
}
   
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
              <span>Rs.{cartInfo.itemsPrice}</span>
            </div>
            <div className="order-price-item">
              <span>Shipping</span>
              <span>Rs{cartInfo.shippingPrice}</span>
            </div>
            <div className="order-price-item">
              <span>taxPricees</span>
              <span>Rs{cartInfo.taxPrice}</span>
            </div>
            <div className="order-price-item">
              <span>Total</span>
              <span>
                Rs{cartInfo.totalPrice}
                
              </span>
            </div>
          </div>
          <div className="order-summary-button">
            <button onClick={handleOrder}>Place order</button>
          </div>
          {error? <div style={{color:"red",textAlign:"center"}} className="order-error">{error}</div>:''} 
        </div>
      </div>
    </>
  );
}
