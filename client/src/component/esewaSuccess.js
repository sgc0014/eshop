import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateToPay } from "../store/actions/orderAction";

export function Esewasuccess(props) {
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.orderPay);
  const dispatch = useDispatch();
  const history = useHistory();

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
      dispatch(updateToPay(oId, paymentResult));
    }
    if (success) {
      history.push(`/orders/${oId}`);
    }
  }, [success]);
  return (
    <>
      <h1>Success</h1>
    </>
  );
}
