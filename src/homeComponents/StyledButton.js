import React from "react";
import "../homeCSS/StyledButton.css";

const StyledButton = ({ orange, title }) => {
  return (
    <div className="styledButton">
      <a
        className={`styledButton__a ${orange && "styledButton__a--orange"}`}
        href="google.com"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {title}
      </a>
    </div>
  );
};

export default StyledButton;
