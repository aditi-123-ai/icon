import React, {useState} from "react";
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import CardsDetail from "../utils/CardsDetail";
// 


const CheckoutItem = () => {

    const [itemCounter, setItemCounter] = useState(1);
    const [showCartModal, setShowCartModal] =  useState(false);

    const product = {
      title: "Minea For Men Extra Moisturising Shaving Gel 200ml",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://images-na.ssl-images-amazon.com/images/I/515D70SmbEL._SX425_.jpg",
      price: "17.99",
      discount: "20.00",
    }


  return (
    <tr>
    <CardsDetail Buyshow product={product} onHide={() => setShowCartModal(false)} show={showCartModal} />
      <td>
        <div className="checkoutCart__product">
          <div className="checkout__product">
            <CloseIcon />
            <img
              onClick={() => setShowCartModal(true)}
              src="https://images-na.ssl-images-amazon.com/images/I/515D70SmbEL._SX425_.jpg"
              alt="icon"
            />
            <div onClick={() => setShowCartModal(true)} className="checkout__product--description">
              <h5>Minea For Men Extra Moisturising Shaving Gel 200ml</h5>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="checkout__product2">
          <span className="checkoutCart__price">$17.99</span>
        </div>
      </td>
      <td>
        <div className="checkoutCart__quantity">
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
      </td>
      <td>
        <div className="checkoutCart__subtotal">
          <span className="checkoutCart__subtotal--price">
            <b>${(17.99*itemCounter).toFixed(2)}</b>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default CheckoutItem;
