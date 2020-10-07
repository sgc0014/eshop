import React from "react";
import Button from "./button";
import man from "../assets/man.jpg";
import woman from "../assets/woman.jpg";
import footwear from "../assets/footwear.jpg";
import accesories from "../assets/accesories.jpg";
export function Category(props) {
  return (
    <section className="category-section">
      <div className="col-1-3 ">
        <div className="category">
          <img src={man} alt="" />
          <Button title="Man" />
        </div>
      </div>
      <div className="col-2-3">
        <div
          className="category"
          style={{ marginTop: "-16px", marginBottom: "16px" }}
        >
          <img src={footwear} alt="" />
          <Button title="Footwear" />
        </div>
        <div className="category">
          <img src={accesories} alt="" />
          <Button title="Accesories" />
        </div>
      </div>
      <div className="col-3-3 ">
        <div className="category">
          <img src={woman} alt="" />
          <Button title="Woman" />
        </div>
      </div>
    </section>
  );
}
