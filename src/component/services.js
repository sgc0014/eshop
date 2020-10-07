import React from "react";
import free from "../assets/services/free.svg";
import delivery from "../assets/services/delivery.svg";
import returnicon from "../assets/services/return.svg";
import secure from "../assets/services/secure.svg";

export default function Services(props) {
  return (
    <section className="services-info">
      <div data-aos="fade-right" data-aos-delay="50" className="service">
        <span className="service-icon">
          {" "}
          <svg width="100px" height="100px" fill="#fff">
            {" "}
            <image width="100" height="100" href={free} />
          </svg>
        </span>
        <span className="service-info">Free Delivery for first order</span>
      </div>
      <div data-aos="fade-right" data-aos-delay="100" className="service">
        <span className="service-icon">
          {" "}
          <svg width="100px" height="100px">
            {" "}
            <image width="100" height="100" href={delivery} />
          </svg>{" "}
        </span>
        <span className="service-info">Safe Delivery</span>
      </div>
      <div data-aos="fade-left" data-aos-delay="150" className="service">
        <span className="service-icon">
          <svg width="100px" height="100px">
            {" "}
            <image width="100" height="100" href={secure} />
          </svg>
        </span>
        <span className="service-info">Secure Payment</span>
      </div>
      <div data-aos="fade-left" data-aos-delay="200" className="service">
        <span className="service-icon">
          <svg width="100px" height="100px">
            {" "}
            <image width="100" height="100" href={returnicon} />
          </svg>{" "}
        </span>
        <span className="service-info">10 days return</span>
      </div>
    </section>
  );
}
