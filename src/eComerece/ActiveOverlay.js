import React from "react";
import "./activeoverlay.css";
function Activeoverlay() {
  return (
    <>
      <img
        src="./images/rectangle.png"
        alt="boy with laptop"
        className="active"
      />
      <img src="./images/rectangle1.png" alt="overlay" className="a" />
      <img src="./images/rectangle2.png" alt="overlay" className="b" />
      <img src="./images/rectangle3.png" alt="overlay" className="c" />
    </>
  );
}

export default Activeoverlay;
