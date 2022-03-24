import React from "react";
import "../OrderCSS/OrderList.css";

const OrderList = ({ orderNo, date, time, TotalPrice, status }) => {
  return (
    <tr>
      <td>{orderNo}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{TotalPrice}</td>
      <td
        style={
          status === "Delivered"
            ? { color: "green", fontWeight: "bold" }
            : status === "Pending"
            ? { color: "orange", fontWeight: "bold" }
            : status === "Dispatched"
            ? { color: "#ffbb00", fontWeight: "bold" }
            : { color: "red", fontWeight: "bold" }
        }
      >
        {status}
      </td>
      <td>
        <button className="order__details--btn">Check Details</button>
      </td>
    </tr>
  );
};

export default OrderList;
