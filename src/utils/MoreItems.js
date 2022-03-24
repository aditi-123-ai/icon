import React, { useState } from "react";
import "./MoreItems.css";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CardsDetail from "./CardsDetail";

const MoreItemsCard = ({ product }) => {
  const [showDetailsBox, setShowDetailsBox] = useState(false);
  return (
    <div className="moreItems__card">
      <CardsDetail show={showDetailsBox} onHide={() => setShowDetailsBox(false)} product={product}  />

      <div className="card__info--button MoreItems__card__info--eye">
        <VisibilityOutlinedIcon onClick={() => setShowDetailsBox(true)} />
      </div>
      <div className="moreItems__card--img">
        <img src={product.img} alt="imgage" />
      </div>
      <div className="moreItems__card--details">
        <h3>{product.title}</h3>
      </div>
      <div className="card__info--buy">
        <div className="card__info--price">
          <p className="price__current">${product.price}</p>
          <p>${product.discount}</p>
        </div>
        <div className="card__info--button">
          <LocalMallOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

const MoreItems = () => {
  const products = [
    {
      title: "Medisou Antibacterial Hand Sanitizer 250ml",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://velikorodnov.com/html/lekarna24/images/232x232_product1.jpg",
      price: "200",
      discount: "100",
    },
    {
      title: "KLM96 Disposable Face Masks X 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://velikorodnov.com/html/lekarna24/images/232x232_product2.jpg",
      price: "500",
      discount: "100",
    },
    {
      title: "Redmores Vitamin C 1000 Echinacea + zinc Copper",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://velikorodnov.com/html/lekarna24/images/232x232_product3.jpg",
      price: "1000",
      discount: "100",
    },
    {
      title: "Nature's Road kids smart vita Gummies Immune Defence Syrup",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://velikorodnov.com/html/lekarna24/images/288x288_product1.jpg",
      price: "200",
      discount: "100",
    },
    {
      title: "Vitaly Protein Slim & Trim Vegan Slimming Blend Cocoa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://velikorodnov.com/html/lekarna24/images/264x264_product4.jpg",
      price: "500",
      discount: "100",
    },
  ];

  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

  const randomProducts = getRandom(products, window.innerWidth > 1350 ? 5 : window.innerWidth > 970 ? 4 : 3);

  return (
    <div className="moreItems">
      <div className="moreItems__container">
        {randomProducts.map((product) => (
          <MoreItemsCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MoreItems;
