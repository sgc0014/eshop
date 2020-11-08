import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignUp } from "../store/actions/userAction";

export function SignUp(props) {
  const dispatch = useDispatch();
  const userSignUpState = useSelector((state) => state.userSignUp);
  const {error} = userSignUpState
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(userSignUp({email,name,password}))
  }
  return (
    <>
      <section className="form-container">
        <header>
          <h2>Sign Up</h2>
        </header>

        <form className="main-form" onSubmit={handleSignUp}>
         {error? <div className="error-message">{error}</div>:''}
          <div className="main-form-input">
            <label htmlFor="name">Name:</label>
            <input onChange={(e) => {setname(e.target.value)}}  id="name" name="name"></input>
            <label htmlFor="email">Email:</label>
            <input onChange={(e) => {setemail(e.target.value)}} id="email" name="email"></input>
            <label htmlFor="password">Password:</label>
            <input onChange={(e) => {setpassword(e.target.value)}} id="password" name="password" type="password"></input>
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
