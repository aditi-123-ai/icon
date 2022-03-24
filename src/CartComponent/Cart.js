import React from "react";
import "../CartCSS/Cart.css";
import CheckoutCart from "./CheckoutCart";
import Subtotal from "./Subtotal";
import Nav from "../utils/Nav.js";
import Newsletter from "../homeComponents/Newsletter";
import MoreItems from "../utils/MoreItems";
// 

export default function Cart() {
  return (
    <div className="cart">
    <Nav contact />
    <div className="card__space">
      <h1>Shopping Cart</h1>
    </div>
      <div className="cart__main">
        <div className="cartLeft">
          <CheckoutCart />
        </div>
        <div className="cartRight">
          <Subtotal />
        </div>
      </div>
      <div className="cart__more">
      <h2>You may be interested in..</h2>
      <MoreItems />
      </div>
      <Newsletter />
    </div>
  );
}
