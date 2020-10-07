import React from "react";
import logo2 from "../assets/logo2.png";
import { FiMail, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaLocationArrow, FaPhone } from "react-icons/fa";

export default function Footer(props) {
  return (
    <footer>
      <div className="col col-1-4">
        <header className="footer-header">
          <img style={{ width: "100px" }} src={logo2} alt="" />{" "}
        </header>
        <div className="col-body">
          <div className="location">
            <span className="footer-icon">
              <FaLocationArrow />
            </span>
            <span>Butwal,Kathmandu</span>
          </div>
          <div className="gmail">
            <span className="footer-icon">
              <FiMail />
            </span>
            <span>contact@gmail.com</span>
          </div>
          <div className="phone">
            <span className="footer-icon">
              <FaPhone />
            </span>
            <span>+00-123456789</span>
          </div>
          <div className="social-media">
            <span className="footer-icon">
              <FiFacebook />
            </span>
            <span className="footer-icon">
              <FiTwitter />
            </span>
            <span className="footer-icon">
              <FiLinkedin />
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="col col-2-4">
        <header className="footer-header">Information</header>
        <div className="col-body">
          <div className="footer-list">About Us</div>
          <div className="footer-list">Terms Condition</div>
          <div className="footer-list">Location</div>
          <div className="footer-list">FAQ</div>
        </div>
      </div>
      <div className="col col-3-4">
        <header className="footer-header">Categories</header>
        <div className="col-body">
          <div className="footer-list">Men</div>
          <div className="footer-list">Women</div>
          <div className="footer-list">Accesories</div>
          <div className="footer-list">Information</div>
        </div>
      </div>

      <div className="col col-4-4">
        <header className="footer-header">Newsletter</header>
        <div className="col-body">
          <div className="newsletter-info">
            Subscribeto our newsletter for latest info and get early discount
          </div>
          <div className="newsletter-input">
            <input placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
