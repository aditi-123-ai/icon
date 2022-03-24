import React, { useState } from "react";

import "../homeCSS/Cards.css";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CardsDetail from "../utils/CardsDetail";

const Cards = ({ title, img, discount, price, product }) => {
  const [modalShow, setModalShow] = useState(false);

  //for reducing characters of card titles
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="card">
      <CardsDetail product={product} show={modalShow} onHide={() => setModalShow(false)} />

      <div className="card__info--button card__info--eye">
        <VisibilityOutlinedIcon onClick={() => setModalShow(true)} />
      </div>
      <div className="card__image">
        <img src={img} alt={title} />
      </div>
      <div className="card__info">
        <h4>
          {window.innerWidth < 768 ? truncate(title, 50) : truncate(title, 70)}
        </h4>
        <div className="card__info--buy">
          <div className="card__info--price">
            <p className="price__current">${price}</p>
            <p>${discount}</p>
          </div>
          <div className="card__info--button">
            <LocalMallOutlinedIcon />
          </div>
        </div>
        <button
          onClick={() => setModalShow(true)}
          className="card__info--viewButton"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Cards;
