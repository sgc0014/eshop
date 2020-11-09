import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/actions/userAction";
import { Redirect } from "react-router-dom";

export function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLoginState = useSelector((state) => state.userLogin);
  const redirect = window.location.search?window.location.search.split("=")[1]:'/'
  const {error,userInfo} = userLoginState
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 
useEffect(() => {
  if(userInfo){
   
  history.push(redirect)
  }
})
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };
  return (
    <>
      <section className="form-container">
        <header>
          <h2>Log In</h2>
        </header>

        <form className="main-form" onSubmit={handleLogin}>
          {error ? <div className="error-message">{error}</div> : ""}
          <div className="main-form-input">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>
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
