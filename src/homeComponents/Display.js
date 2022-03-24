import React from "react";
import "../homeCSS/Display.css";

const Display = () => {
  return (
    <div className="display">
      <div className="row">
        <div className="col-md-3 display__col display__one">
          <img
            src="/icons/computer.png"
            alt=""
          />
          <p>Computerized Inventory management</p>
        </div>
        <div className="col-md-3 display__col display__two">
          <img
            src="/icons/truck.png"
            alt=""
          />
          <p>Home Delivery Services</p>
        </div>
        <div className="col-md-3 display__col display__one">
          <img
            src="/icons/quality.png"
            alt=""
          />
          <p>Trained Pharmacists on Staff</p>
        </div>
        <div className="col-md-3 display__col display__two">
          <img
            src="/icons/health.png"
            alt=""
          />
          <p>Quality Controlled Medicine</p>
        </div>
      </div>
    </div>
  );
};

export default Display;
