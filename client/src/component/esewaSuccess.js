import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getOrderDetail, updateToPay } from "../store/actions/orderAction";

export function Esewasuccess(props) {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.orderPay);
  const { order, loading } = useSelector((state) => state.orderDetail);
  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setstate] = useState("verifying...");
  useEffect(() => {
    const oId = window.location.search.split("=")[1].split("&")[0];
    const refId = window.location.search.split("=")[3];

    if (userInfo && oId) {
      const paymentResult = {
        id: refId,
        update_time: Date.now(),
        payer: {
          email_address: userInfo.email,
        },
        status: "completed",
      };
      console.log(paymentResult);
      if (!order) {
        dispatch(getOrderDetail(oId));
      } else {
        const res = Axios.post(
          `https://cors-anywhere.herokuapp.com/https://uat.esewa.com.np/epay/transrec?amt=${order.totalPrice}.00&rid=${refId}&pid=${oId}&scd=EPAYTEST`
        )
          .then((res) => {
            return res.data;
          })
          .then((str) => {
            const check = str[27];
            if (check.toLowerCase() === "s") {
              dispatch(updateToPay(oId, paymentResult));
              setstate("Verified payment. Redirecting...");
              if (success) {
                history.push(`/orders/${oId}`);
              }
            } else {
              setstate("Payment not verified. Redirecting...");
              history.push(`/orders/${oId}`);
            }
          });
      }
    }
  }, [dispatch, success, order]);
  return (
    <>
      <h1>Please wait do not close.</h1>
      <p>{state}</p>
    </>
  );
}
