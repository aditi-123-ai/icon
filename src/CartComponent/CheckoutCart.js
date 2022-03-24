import React from "react";
import { Table } from "react-bootstrap";
import "../CartCSS/CheckoutCart.css";
//
import CheckoutItem from "./CheckoutItem";

const CheckoutCart = () => {

  return (
    <div className="checkoutCart">
      <Table responsive="xl">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quality</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <CheckoutItem />
          <CheckoutItem /> 
          <CheckoutItem /> 
        </tbody>
      </Table>
    </div>
  );
};

export default CheckoutCart;
