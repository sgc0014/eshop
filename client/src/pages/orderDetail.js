import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paypal } from "../component/paypal";
import { getOrderDetail } from "../store/actions/orderAction";
import "./orderDetail.css";

export function Orderdetail(props) {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetail);
  const orderPay = useSelector((state) => state.orderPay);
  const {success} = orderPay
  const { loading, order, error } = orderDetails;
  let itemsPrice;
  const calculatePrice = (items) => {
    itemsPrice = items.reduce((a, b) => a + b.qty * b.price, 0);
    return itemsPrice;
  };

  let shippingPrice = itemsPrice > 500 ? 50 : 0;


  const { id } = props.match.params;
  useEffect(() => {
    
    if(!order || success){
      dispatch(getOrderDetail(id));
    }
    
  }, [dispatch,order,success]);

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
                {order && Number(itemsPrice + shippingPrice + order.taxPrice)}
              </span>
            </div>
          </div>
          {order && !order.isPaid?<Paypal amount={order.totalPrice} id={order._id} />:''}
        
        
        </div>
      </div>
    </>
  );
}
