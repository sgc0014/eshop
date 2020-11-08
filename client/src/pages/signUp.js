import React from "react";
import { Link } from "react-router-dom";

export function SignUp(props) {
  return (
    <>
      <section className="form-container">
        <header>
          <h2>Sign Up</h2>
        </header>

        <form className="main-form">
          <div className="error-message">Unauthorized user</div>
          <div className="main-form-input">
            <label for="email">Name:</label>
            <input id="email" name="email"></input>
            <label for="email">Email:</label>
            <input id="email" name="email"></input>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password"></input>
          </div>
          <button className="form-button">Sign Up</button>
        </form>
        <div className="form-bottom">
          Already registered ? <Link to="/login">Sign Up</Link>
        </div>
      </section>
    </>
  );
}
