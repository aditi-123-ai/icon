import React, { useEffect, useState } from "react";
import "./Nav.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Nav = ({contact}) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [navMenuActive, setNavMenuActive] = useState(false);

  const [show, setShow] = useState(false);

  const mobileMenu = () => {
    setHamburgerActive(!hamburgerActive);
    setNavMenuActive(!navMenuActive);
  };

  const closeMenu = () => {
    setHamburgerActive(false);
    setNavMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      
    });

    return window.removeEventListener("scroll", () => {
        console.log("REMOVED");
      });
  }, []);

  return (
    <nav className={`navbar ${show ? "nav-show" : ""} ${contact ? "nav__contact" : ""}`}>
      <Link to="/" className="nav-logo">
        Icon Optical
      </Link>
      <ul className={`nav-menu ${navMenuActive ? "active" : ""}`}>
        <li onClick={closeMenu} className="nav-item">
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
        </li>
        <li onClick={closeMenu} className="nav-item">
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </li>

        <li onClick={closeMenu} className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item nav__forDesktop">
        <Link className="nav-link" to="/cart">
          <ShoppingCartIcon />
          </Link>
        </li>
      </ul>

      <div
        className={`hamburger ${hamburgerActive ? "active" : ""}`}
      >
        <div onClick={mobileMenu} className="hamburger__logo">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <Link style={{marginLeft: "20px", color: "inherit"}} to="/cart">
          <ShoppingCartIcon />
          </Link>
      </div>
    </nav>
  );
};

export default Nav;
