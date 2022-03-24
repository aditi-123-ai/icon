import React, { useState } from "react";
import "../homeCSS/Trending.css";
import Cards from "./Cards";

const Trending = () => {
  const [trending, setTrending] = useState([
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
    {
      title: "Kurofen Tab X 24",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://velikorodnov.com/html/lekarna24/images/264x264_product1.jpg",
      price: "1000",
      discount: "100",
    },
    {
      title: "Holly organic pouch Fennel Frog - Pear with Apple and vinegar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://velikorodnov.com/html/lekarna24/images/264x264_product2.jpg",
      price: "200",
      discount: "100",
    },
    {
      title: "Airpio Mucus Clearance & Lung Expansion Device",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, doloremque! Minus harum consequatur odit consequuntur reprehenderit. Officiis, odio tempore",
      img: "https://velikorodnov.com/html/lekarna24/images/264x264_product3.jpg",
      price: "500",
      discount: "100",
    },
  ]);

  return (
    <div className="trending">
      <div className="trending__heading">
        <h1>Best Sellers</h1>
      </div>
      <div className="row">
        {trending.map((trend) => (
          <div key={trend.title} className={`cardTrending__container ${window.innerWidth < 1000 ? "col-md-4" : "col-md-3"}`}>
            <Cards
              product={trend}
              title={trend.title}
              price={trend.price}
              desc={trend.desc}
              img={trend.img}
              discount={trend.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
