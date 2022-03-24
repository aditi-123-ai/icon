import React from "react";
import "../homeCSS/Specialities.css";
import DoneAllOutlinedIcon from "@material-ui/icons/DoneAllOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import LocalAtmOutlinedIcon from "@material-ui/icons/LocalAtmOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import HttpsOutlinedIcon from "@material-ui/icons/HttpsOutlined";

const Specialities = () => {
  return (
    <div className="specialities">
      <div className="specialities__header mt-4">
        <h1>
          ৳60 Delivery Charge,{" "}
          <span className="specialities__highlight">Free Delivery</span> for
          First Orders!
        </h1>
      </div>
      <div className="specialities__row">
        <div className="row">
          <div className="col-md-4 specialities__holder">
            <DoneAllOutlinedIcon fontSize="large" style={{ fill: "#d89011" }} />
            <p>
              Only <span className="specialities__highlight">certified</span>{" "}
              medicine available.
            </p>
          </div>
          <div className="col-md-4 specialities__holder">
            <QueryBuilderOutlinedIcon
              fontSize="large"
              style={{ fill: "#d89011" }}
            />
            <p>
              Order by <span className="specialities__highlight">2pm</span> for{" "}
              <span className="specialities__highlight">Same day</span>{" "}
              delivery.
            </p>
          </div>
          <div className="col-md-4 specialities__holder">
            <LocalAtmOutlinedIcon
              fontSize="large"
              style={{ fill: "#d89011" }}
            />
            <p>
              Payment: <span className="specialities__highlight">Cash</span> on
              Delivery.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 specialities__holder">
            <img className="seller__img" src="/icons/seller.svg" alt="seller" />
            <p>
              {" "}
              <span className="specialities__highlight">Pharmacist</span>{" "}
              available for consultation.
            </p>
          </div>
          <div className="col-md-4 specialities__holder">
            <LocationOnOutlinedIcon
              fontSize="large"
              style={{ fill: "#d89011" }}
            />
            <p>
              Delivery anywhere in{" "}
              <span className="specialities__highlight">Dhaka</span> City.
            </p>
          </div>
          <div className="col-md-4 specialities__holder">
            <HttpsOutlinedIcon fontSize="large" style={{ fill: "#d89011" }} />
            <p>
              {" "}
              <span className="specialities__highlight">Confidential</span>{" "}
              delivery to ensure{" "}
              <span className="specialities__highlight">privacy.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
