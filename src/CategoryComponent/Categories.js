import React, { useState } from "react";
import "../CategoryCSS/categories.css";
import Cards from "../homeComponents/Cards";
import Input from "../utils/Input";
import Nav from "../utils/Nav";
import CategoryNavbar from "./CategoryNavbar";
import ReactLoading from 'react-loading';

const Categories = () => {
  const [searchValue, setSearchValue] = useState("");


  const [categoriesResult, setCategoriesResult] = useState([
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
    <div className="categories">
      <Nav contact />
      <div className="categories__empty"></div>
      <div className="categories__header">
        <CategoryNavbar />
      </div>
      <div className="categories__middle">
        <div className="categories__middleLeft">
          <Input
            search
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
            placeholder="Search"
            name="search"
          />
        </div>
        <div className="categories__middleRight">
          <p>Showing 20 Results</p>
        </div>
      </div>
      <div className="categories__items">
        <div className="row">
        {categoriesResult.map((result) => (
            <div key={result.title} className={`cardTrending__container ${window.innerWidth < 1000 ? "col-md-4" : "col-md-3"}`}>
              <Cards
                product={result}
                title={result.title}
                price={result.price}
                desc={result.desc}
                img={result.img}
                discount={result.discount}
              />
            </div>
          ))}
          {categoriesResult.map((result) => (
            <div key={result.title} className={`cardTrending__container ${window.innerWidth < 1000 ? "col-md-4" : "col-md-3"}`}>
              <Cards
                product={result}
                title={result.title}
                price={result.price}
                desc={result.desc}
                img={result.img}
                discount={result.discount}
              />
            </div>
          ))}
          {categoriesResult.map((result) => (
            <div key={result.title} className={`cardTrending__container ${window.innerWidth < 1000 ? "col-md-4" : "col-md-3"}`}>
              <Cards
                product={result}
                title={result.title}
                price={result.price}
                desc={result.desc}
                img={result.img}
                discount={result.discount}
              />
            </div>
          ))}
          <div className="categoriesLoading container">
          <ReactLoading type="bars" color="#ddcebd" height={50} width={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
