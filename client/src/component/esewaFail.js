import React from "react";
import { useHistory } from "react-router-dom";

export function Esewafail(props) {
  const history = useHistory();
  const sendBack = (e) => {
    e.preventDefault();
    history.push("/profile");
  };
  return (
    <>
      <p>Esewa payment failed</p>
      <button className="form-button" onClick={sendBack}>
        Go Back to orders
      </button>
    </>
  );
}
