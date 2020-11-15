import React from "react";
import "./esewa.css";

export function Esewa(props) {
  const { amount, id: orderId } = props;

  const handleClick = () => {
    let path = "https://uat.esewa.com.np/epay/main";
    var params = {
      amt: String(amount),
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: String(amount),
      pid: String(orderId),
      scd: "EPAYTEST",
      su: "http://localhost:3000/esewa/success",
      fu: "http://localhost:3000/esewa/fail",
    };
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };
  return (
    <>
      <button className="esewa-button" onClick={handleClick} style={{marginTop:"13px"}}>
        <img src="/esewa.png" />
      </button>
    </>
  );
}
