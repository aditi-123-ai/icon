import {
  Instagram,
  Facebook,
  YouTube,
  Email,
  Copyright,
} from "@material-ui/icons";
import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <div className="footer__info--header">
            <h2>MEDICAL</h2>
          </div>
          <div className="footer__info--main">
            <p>Versova, Andheri-w, Mumbai-400061</p>
            <p>+91 111 1111 111</p>
            <p>demo@demo.com</p>
          </div>
        </div>
        <div className="footer__social">
          <div className="footer__social--header">
            <h4>FOLLOW US</h4>
          </div>
          <div className="footer__social--logos">
            <Instagram
              className="social--icons social--iconsInstagram"
              fontSize="large"
              style={{ marginRight: "20px" }}
            />
            <Facebook
              className="social--icons"
              fontSize="large"
              style={{ marginRight: "20px" }}
            />
            <YouTube
              className="social--icons"
              fontSize="large"
              style={{ marginRight: "20px" }}
            />
            <Email className="social--icons" fontSize="large" />
          </div>
        </div>
        <div className="footer__newsletter">
          <div className="footer__newsletter--header">
            <h4>NEWSLETTER</h4>
          </div>
          <div className="footer__newsletter--input">
            <InputGroup className="mb-3">
              <FormControl
                className="input__footer"
                placeholder="Your Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <InputGroup.Text
                  className="input__footer--btn"
                  id="basic-addon2"
                >
                  SUBSCRIBE
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          <Copyright fontSize="small" /> {new Date().getFullYear()} - Designed &
          Developed By <span> Asad Aslam Memon </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
