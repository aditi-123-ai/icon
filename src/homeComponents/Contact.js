import React, { useRef, useState } from "react";
import "../homeCSS/Contact.css";
import Nav from "../utils/Nav";
import Input from "../utils/Input";
import Newsletter from "./Newsletter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";


const IconsContainer = ({ Icons, title, desc }) => {
  return (
    <div className="contact__iconContainer">
      <div
        className={`contact__icon ${
          Icons === "/icons/email.svg" ? "contact__icon--email" : ""
        }`}
      >
        <img src={Icons} alt={title} />
      </div>
      <div className="contact__IconDetails">
        <span>{title}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default function Contact() {
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [phnState, setPhnState] = useState("");
  const msgRef = useRef();

  const sendContact = () => {
    console.log(nameState, emailState, phnState, msgRef.current.value);
  };

  return (
    <div className="contact__main">
      <Nav contact />
      <div className="contact__main--container">
        <div className="contact__page row">
          <div className="contact__left col-md-6">
            <h1>Contact Information</h1>
            <div className="contact__left--description">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                quo eius, fugit perspiciatis dolore non ex itaque molestiae nisi
              </p>
            </div>
            <div className="contact__left--iconsContainer">
              <IconsContainer
                Icons="/icons/location.svg"
                title="Our Address :"
                desc="9863 - 9867 Mill Road, Cambridge, MG09 99HT"
              />
              <IconsContainer
                Icons="/icons/clock.svg"
                title="Opening Hours :"
                desc="Mon - Fri: 8am - 11pm, Sat-Sun: 8am-12pm"
              />
              <IconsContainer
                Icons="/icons/call-center.svg"
                title="Call us :"
                desc="+1 800 559 6580, +1 800 559 6588"
              />
              <IconsContainer
                Icons="/icons/email.svg"
                title="Email us :"
                desc="info@companyname.com"
              />
            </div>
          </div>
          <div className="contact__right col-md-6">
            <h1>Have a Question ?</h1>

            <div className="contact__left--description">
              <p>
                Before you reach out to us, check out our FAOs page. If you
                still have question or enquiries, please use the form below.
              </p>
            </div>
            <div className="contact__right--inputContainer">
              <Input
                contact
                placeholder="Name"
                type="text"
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
              />
              <Input
                contact
                placeholder="Email Address"
                type="email"
                value={emailState}
                onChange={(e) => setEmailState(e.target.value)}
              />
              <Input
                contact
                placeholder="Phone"
                type="number"
                value={phnState}
                onChange={(e) => setPhnState(e.target.value)}
              />
              <textarea
                ref={msgRef}
                className="contact__right--textArea"
                placeholder="Your messege"
                type="text"
              />
              <div className="contact__right--button">
                <button onClick={sendContact}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <div className="contact__socials">
        <div className="contact__social--icons">
          <div className="contact__social--animation">
          <InstagramIcon />
          <p>Instagram</p>
          </div>
          <div className="contact__social--animation">
          <LinkedInIcon />
          <p>Linkedin</p>
          </div>
          <div className="contact__social--animation">
          <TwitterIcon />
          <p>Twitter</p>
          </div>
          <div className="contact__social--animation">
          <FacebookIcon />
          <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}
