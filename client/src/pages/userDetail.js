import React, { useEffect, useState } from "react";
import "./userDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { userdetail, postuserUpdate } from "../store/actions/userAction";
import { useHistory } from "react-router-dom";

export function Userdetail(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = props.match.params.id;
  const userDetail = useSelector((state) => state.userDetail);
  const userUpdate = useSelector((state) => state.userUpdate);
  const { success: updateSuccess } = userUpdate;
  const [userEmail, setuserEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [userAdmin, setuserAdmin] = useState("");
  const userDetails = userDetail.userDetails;
  const { loading, error, success } = userDetail;
  useEffect(() => {
    if (updateSuccess) {
      history.push("/userlist");
    }
    if (!userDetails) {
      dispatch(userdetail(userId));
      console.log(userDetails);
    } else {
      console.log(userDetails);
      setuserName(userDetails.name);
      setuserEmail(userDetails.email);

      setuserAdmin(userDetails.isAdmin);
    }
  }, [dispatch, userId, userDetails,updateSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postuserUpdate({
        id: userId,
        name: userName,
        email: userEmail,
        isAdmin: userAdmin,
      })
    );
  
  };
  return !loading ? (
    <>
      <section className="form-container">
        <header>
          <h2>Edit Info</h2>
        </header>

        <form className="main-form" onSubmit={handleSubmit}>
          {error ? <div className="error-message">{error}</div> : ""}
          <div className="main-form-input">
            <label htmlFor="name">Name:</label>
            <input
              onChange={(e) => {
                setuserName(e.target.value);
              }}
              id="name"
              name="name"
              value={userName}
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => {
                setuserEmail(e.target.value);
              }}
              id="email"
              name="email"
              value={userEmail}
            ></input>
            <label></label>
            <div>
              <label htmlFor="email">Admin:</label>
              <input
                type="checkbox"
                onClick={(e) => {
                  setuserAdmin(!userAdmin);
                }}
                id="true"
                name="admin"
                checked={userAdmin}
              />
            </div>
          </div>
          <button className="form-button">Update</button>
        </form>
      </section>
    </>
  ) : (
    "Loading"
  );
}
