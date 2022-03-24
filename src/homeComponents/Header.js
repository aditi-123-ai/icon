import React from "react";
import { Link } from "react-router-dom";
import "../homeCSS/Header.css";
import StyledButton from "./StyledButton";

const Header = () => {
  return (
    <div className="header">
      <div className="header__img">
        <img className="vert-move" src="/doctor-removed-bg.png" alt="" />
      </div>
      <div className="header__content">
        <h1>Your Health, Our Priority</h1>
        <h4>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          sequi amet, asperiores cupiditate repellat, obcaecati accusantium
          soluta quos consequuntur necessitatibus tenetur itaque tempora!
          Tempore rerum explicabo provident porro quis cum!
        </h4>
        <div className="header__button">
         <Link to="/categories"><StyledButton title="Order Now" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
