import React from "react";
import { Link } from "react-router-dom";
import "./logIn.css";

export function Login(props) {
  return (
    <>
      <section className="form-container">
        <header>
          <h2>Log In</h2>
        </header>

        <form className="main-form">
          <div className="error-message">Unauthorized user</div>
          <div className="main-form-input">
            <label for="email">Email:</label>
            <input id="email" name="email"></input>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password"></input>
          </div>
          <button className="form-button">Log In</button>
        </form>
        <div className="form-bottom">
          New Customer? <Link to="/signup">Log In</Link>
        </div>
      </section>
    </>
  );
}
