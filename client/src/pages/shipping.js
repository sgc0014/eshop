import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "../store/actions/cartAction";
import {  useHistory } from "react-router-dom";
import { Checkoutnav } from "./checkOutNav";

export function Shipping(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const savedAddress = useSelector((state) => state.cart.shippingAddress);
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [district, setdistrict] = useState("");

  useEffect(() => {
    
    if (saveAddress) {
      setaddress(savedAddress.address);
      setcity(savedAddress.city);
      setdistrict(savedAddress.district);
      setpostalCode(savedAddress.postalCode);
    }
  },[savedAddress]);
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(saveAddress({ address, city, postalCode:123456, district }));
    history.push('/payment')
  };
  return (
    <>
    <Checkoutnav step1 step2/>
      <section className="form-container">
        <header>
          <h2>Shipping</h2>
        </header>

        <form className="main-form" onSubmit={handlesubmit}>
          <div className="main-form-input">
            <label htmlFor="adrress">Address:</label>
            <input
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              id="address"
              name="address"
              value={address}
            ></input>
            <label htmlFor="city">City:</label>
            <input
              onChange={(e) => {
                setcity(e.target.value);
              }}
              id="city"
              name="city"
              value={city}
            ></input>
            <label htmlFor="postalCode">postalCode:</label>
            <input
              onChange={(e) => {
                setpostalCode(e.target.value);
              }}
              id="postalCode"
              name="postalCode"
              value={postalCode}
            ></input>
            <label htmlFor="district">District:</label>
            <input
              onChange={(e) => {
                setdistrict(e.target.value);
              }}
              id="district"
              name="district"
              value={district}
            ></input>
          </div>
          <button className="form-button">Continue</button>
        </form>
      </section>
    </>
  );
}
