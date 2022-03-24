import React from "react";
import "../checkoutCSS/Checkout.css";
import Subtotal from "../CartComponent/Subtotal";
import Nav from "../utils/Nav";
import Newsletter from "../homeComponents/Newsletter";

function Checkout() {

  const OverallContainer = ({label, placeholder, id, type}) => {
    return(
      <div className="checkoutDetails__OverallContainer">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
      </div>
    )
  }




  return (
    <div className="checkout">
      <Nav contact />
      <div className="checkout__main">
        <div className="checkout__main--left">
          <div className="checkout__detail">
            <h1>Billing Details</h1>
            <div className="checkoutDetails__container">
              <div className="checkoutDetails__leftcontainer">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="checkoutDetails__rightContainer">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="checkoutDetails__container">
              <OverallContainer label="Company Name (optional)" placeholder="Company Name" id="company" type="text" />
            </div>
            <div className="checkoutDetails__container">
              <OverallContainer label="Street Address" placeholder="Street Address" id="address" type="text" />
            </div>
            <div className="checkoutDetails__container">
              <OverallContainer label="Town/City" placeholder="Town/City" id="town" type="text" />
            </div>
            <div className="checkoutDetails__container">
              <OverallContainer label="Zip" placeholder="Zip Code" id="zip" type="number" />
            </div>
            <div className="checkoutDetails__container">
              <OverallContainer label="Phone" placeholder="Phone Number" id="phone" type="number" />
            </div>
            <div className="checkoutDetails__container">
              <OverallContainer label="Email Address" placeholder="Email Address" id="email" type="email" />
            </div>
            <div className="checkoutDetails__container">
            <OverallContainer label="Order Notes" placeholder="Order Notes" id="note" type="text" />
            </div>
          </div>
        </div>
        <div className="checkout__main--right">
          <div className="checkout__mainRightContainer">
            <Subtotal checkout />
            <div className="checkout__previousAddress">
              <h5>Test Name</h5>
              <p>Test address, near Test locality, test area, test business, 400051, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, laborum.</p>
              <button>Use this Address</button>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout__bottom">
      <Newsletter />
      </div>
    </div>
  );
}

// <h1>Billing Details</h1>

export default Checkout;
