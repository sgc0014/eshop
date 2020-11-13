import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateToPay } from "../store/actions/orderAction";

export function Paypal(props) {
    const dispatch = useDispatch();
  const paypalRef = useRef();

  useEffect(() => {
    window &&
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  amount: {
                    currency_code: "USD",
                    value: 10.0,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
           if(order){
               console.log(order)
               dispatch(updateToPay(props.id,order))
           }
          },
          onError: (err) => {
            console.err(err);
          },
        })
        .render(paypalRef.current);
  }, []);

  return (
    <>
      <div ref={paypalRef} style={{marginTop:"17px"}} className="pay-button"></div>
    </>
  );
}
