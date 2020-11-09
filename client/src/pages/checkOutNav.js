import React from "react";
import "./checkOutNav.css";
export function Checkoutnav({ step1, step2, step3, step4 }) {
  return (
    <div className="check-out-nav">
      {step1 ? (
        <div className="check-out-nav-item">Sign In</div>
      ) : (
        <div className="check-out-nav-item">Sign In</div>
      )}

      {step2 ? (
        <div className="check-out-nav-item">Shipping</div>
      ) : (
        <div className="check-out-nav-item" disabled>
          Shipping
        </div>
      )}

      {step3 ? (
        <div className="check-out-nav-item">Shipping</div>
      ) : (
        <div className="check-out-nav-item" disabled>
          Payment
        </div>
      )}
      
      {step4 ? (
        <div className="check-out-nav-item">Shipping</div>
      ) : (
        <div className="check-out-nav-item" disabled>
          Place Order
        </div>
      )}
    </div>
  );
}
