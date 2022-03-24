import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./CardDetails.css";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import LocalMallIcon from '@material-ui/icons/LocalMall';

const CardsDetail = ({ product,Buyshow, ...props }) => {
  const { title, desc, img, price, discount } = product;

  const [itemCounter, setItemCounter] = useState(1);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="cardModal">
          <div className="row">
            <div className="col-md-6">
              <div className="cardModal__image">
                <img src={img} alt={title} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cardModal__details">
                <h1>{title}</h1>
                <div className="cardModal__price">
                  <p className="cardModal__discount">${price}</p>
                  <p style={{ marginLeft: "10px" }}>${discount}</p>
                </div>
                <p className={`cardModal__desc ${Buyshow ? "cardModal__desc--big" : ""}`}>{desc}</p>
              </div>
              {!Buyshow && <div className="cardModal__purchase">
              <div className="cardModal__quantity">
                <RemoveIcon
                  onClick={() => setItemCounter((prev) => prev - 1)}
                  style={{ cursor: "pointer" }}
                />
                {itemCounter}
                <AddIcon
                  onClick={() => setItemCounter((prev) => prev + 1)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <button className="card__info--viewButton addCart__button"> <LocalMallIcon style={{marginRight: "10px"}} /> Add to cart</button>
            </div>}
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CardsDetail;
