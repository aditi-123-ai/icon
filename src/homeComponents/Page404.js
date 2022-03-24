import React from "react";
import "../homeCSS/Page404.css";
import Nav from "../utils/Nav";

function Page404() {
  return (
    <main className="page404">
      <Nav contact />
      <div className="page404__header">
        <div className="page404__headerTop">
          <svg
            className="svgdraw"
            width="100%"
            height="100%"
            viewBox="0 0 150 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="path"
              d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
              fill="transparent"
              strokeWidth="4"
              stroke="black"
            />
          </svg>
          <h1 className="page404__h1Left">4</h1>
          <img className="bandAid__icon" src="/icons/band-aid.svg" alt="0" />
          <h1 className="page404__h1Right">4</h1>
        </div>
      </div>
      <div className="page404__below">
        <div className="page404__belowHeading">
          <img src="/icons/band-aids.svg" alt="0" />
          <h2> The page you are looking for is not available!</h2>
          <img src="/icons/band-aids.svg" alt="0" />
        </div>
      </div>
    </main>
  );
}

export default Page404;
