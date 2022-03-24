import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "../OrderCSS/OrderTable.css";
import OrderList from "./OrderList";

const OrderTable = () => {
  const [OrderListItem, setOrderListItem] = useState([
    {
      orderNo: 111,
      date: "12 March,2020",
      time: "12:30:14",
      money: "$533.77",
      Status: "Delivered",
    },
    {
      orderNo: 222,
      date: "2 October,2019",
      time: "09:13:24",
      money: "$12.20",
      Status: "Pending",
    },
    {
      orderNo: 333,
      date: "12 April,2018",
      time: "14:37:11",
      money: "$183.00",
      Status: "Dispatched",
    },
    {
      orderNo: 444,
      date: "12 April,2018",
      time: "04:07:51",
      money: "$8983.00",
      Status: "Cancelled",
    },
    {
      orderNo: 555,
      date: "12 April,2018",
      time: "04:07:51",
      money: "$8983.00",
      Status: "Cancelled",
    },
    {
      orderNo: 666,
      date: "12 April,2018",
      time: "04:07:51",
      money: "$8983.00",
      Status: "Cancelled",
    },
    {
      orderNo: 777,
      date: "12 April,2018",
      time: "04:07:51",
      money: "$8983.00",
      Status: "Cancelled",
    },
  ]);
  return (
    <div className="orderTable">
      <div className="orderTable__listcontainer">
        <Table responsive="xl">
          <thead>
            <tr>
              <th>#Order</th>
              <th>Date</th>
              <th>Time</th>
              <th>Total</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {OrderListItem.map((listItem) => (
              <OrderList
                key={listItem.orderNo}
                orderNo={listItem.orderNo}
                date={listItem.date}
                time={listItem.time}
                TotalPrice={listItem.money}
                status={listItem.Status}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default OrderTable;
