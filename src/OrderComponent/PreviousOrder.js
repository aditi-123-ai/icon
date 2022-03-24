import React from "react";
import Newsletter from "../homeComponents/Newsletter";
import "../OrderCSS/PreviousOrder.css";
import Nav from "../utils/Nav";
import OrderTable from "./OrderTable";

const PreviousOrder = () => {
  return (
    <div className="orders">
      <Nav contact />
      <div className="orders__space"></div>
      <div className="order__main">
        <h2> My Previous Order</h2>
        <OrderTable />
      </div>
      <div className="orders__bottom">
        <Newsletter />
      </div>
    </div>
  );
};

export default PreviousOrder;
