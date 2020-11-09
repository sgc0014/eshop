import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { savePaymentMethod } from "../store/actions/cartAction";
import { Checkoutnav } from "./checkOutNav";

export function Payment(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  const [method, setmethod] = useState("");

  useEffect(() => {
    if (!cart.shippingAddress) {
      history.push("/shipping");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(method));
    history.push("/placeorder")
  };
  return (
    <>
      <Checkoutnav step1 step2 step3 />
      <div className="form-container">
        <header>
          <h2>Payment Method</h2>
        </header>
        <form className="main-form" onSubmit={handleSubmit}>
          <div className="main-form-radio">
            <div className="radio" style={{ marginBottom: "10px" }}>
              <input
                type="radio"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                onChange={(e) => {
                  setmethod(e.target.value);
                }}
              />
              <label htmlFor="Paypal" style={{ marginLeft: "10px" }}>
                Paypal
              </label>
            </div>
            <div className="radio">
              <input
                type="radio"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                onChange={(e) => {
                  setmethod(e.target.value);
                }}
              />
              <label htmlFor="Stripe" style={{ marginLeft: "10px" }}>
                Stripe
              </label>
            </div>
          </div>
          <button className="form-button">Continue</button>
        </form>
      </div>
    </>
  );
}
