import React from "react";
import "./paymentcart.css";
function Cart() {
  return (
    <div className="cart-div">
      <div className="strip">
        <img
          src="./images/stripe-logo 1.png"
          alt="stripe"
          style={{ float: "left" }}
        />

        <span
          style={{
            marginLeft: "10%",
            paddingTop: "2%",
          }}
        >
          Stripe gateway
        </span>

        <img
          src="./images/toggle button.png"
          alt="stripe"
          style={{ float: "right" }}
        />
      </div>

      <hr />
      <img
        src="./images/paypal-logo 1.png"
        alt="paypal"
        style={{ float: "left" }}
      />
      <span>Paypal payments</span>

      <img src="./images/toggle button.png" alt="stripe" />
      <hr />

      <img src="./images/cart-v.png" alt="stripe" />

      <span>Bank Transfers</span>

      <img src="./images/toggle button.png" alt="stripe" />
    </div>
  );
}

export default Cart;
