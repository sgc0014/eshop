import Axios from "axios";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Esewa } from "../component/esewa";
import { Paypal } from "../component/paypal";
import {
  getOrderDetail,
  updateToDelivered,
} from "../store/actions/orderAction";
import "./adminOrderDetail.css";
import "./orderDetail.css";

export function Adminorderdetail(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const orderDetails = useSelector((state) => state.orderDetail);
  const orderDelivered = useSelector((state) => state.orderDelivered);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = orderDelivered;
  const { loading, order, error } = orderDetails;
  let itemsPrice;
  const calculatePrice = (items) => {
    itemsPrice = items.reduce((a, b) => a + b.qty * b.price, 0);
    return itemsPrice;
  };

  let shippingPrice = itemsPrice < 500 ? 50 : 0;

  useEffect(() => {
    if (!userInfo && !userInfo.isAdmin) {
      history.push("/login");
    } else {
      if (!order || success) {
        dispatch(getOrderDetail(props.match.params.id));
      }
      if (order && props.match.params.id !== order._id) {
        dispatch(getOrderDetail(props.match.params.id));
      }
    }
  }, [dispatch, props.match.params.id, success, userInfo]);

  const markDelivered = (e) => {
    e.preventDefault();
    dispatch(updateToDelivered(props.match.params.id));
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <h2>Order {order && order._id}</h2>
      <div className="place-order-container">
        <div className="order-summary">
          <header>
            <h2 className="order-summary-header">Shipping</h2>
          </header>
          <div className="order-summary-info">
            Name: {order && order.user.name}
          </div>
          <div className="order-summary-info">
            email: {order && order.user.email}
          </div>
          <div className="order-summary-info">
            Address: {order && order.shippingAddress.address},
            {order && order.shippingAddress.city},
            {order && order.shippingAddress.postalCode},
            {order && order.shippingAddress.district}
          </div>
          <div className="order-summary-info">
            {order && order.isDelivered ? (
              <div className="delivered-status">Delivered</div>
            ) : (
              <div className="notDelivered-status">Not Delivered</div>
            )}
          </div>
          <div className="order-summary-border"></div>
          <header>
            <h2 className="order-summary-header">Payment Method</h2>
          </header>
          <div className="order-summary-info">
            Method: {order && order.paymentMethod}
          </div>
          <div className="order-summary-info">
            {order && order.isPaid ? (
              <div className="paid-status">Paid</div>
            ) : (
              <div className="notPaid-status">Not Paid</div>
            )}
          </div>
          <div className="order-summary-border"></div>
          <header>
            <h2 className="order-summary-header">Order Items</h2>
          </header>
          <div className="order-summary-info">
            <ul className="order-items-list">
              {order &&
                order.orderItems.map((item) => (
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
              <span>Rs.{order && calculatePrice(order.orderItems)}</span>
            </div>
            <div className="order-price-item">
              <span>Shipping</span>
              <span>Rs{shippingPrice}</span>
            </div>
            <div className="order-price-item">
              <span>taxPrice</span>
              <span>Rs{order && order.taxPrice}</span>
            </div>
            <div className="order-price-item">
              <span>Total</span>
              <span>
                Rs
                {order && Number(order.totalPrice)}
              </span>
            </div>
          </div>
          <div>
            <button className="delivered-button" onClick={markDelivered}>Mark as Delivered</button>
          </div>
        </div>
      </div>
    </>
  );
}
