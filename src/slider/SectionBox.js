import React from "react";
import CardBox from "./CardBox";

import "./sectionbox.css";

function SectionBox() {
  return (
    <div className="packet">
      <h3 className="card-h">
        Trusted by Agencies
        <br />& Store Owners
      </h3>
      <div className="image-box1">
        <div className="one-s">
          <img
            src="./images/one.png"
            alt="one"
            style={{ float: "right", width: "136px", height: "136px" }}
          />
        </div>
        <div className="two-s">
          <img
            src="./images/two.png"
            alt="two"
            style={{ width: "73px", height: "73px" }}
          />
        </div>
        <div className="three-s">
          <img
            src="./images/three.png"
            alt="three"
            style={{ width: "105px", height: "105px" }}
          />
        </div>
      </div>
      <div className="card-swiper">
        <div className="card">
          <img src="./images/section1.png" alt="card" />
        </div>
      </div>
      <div className="image-box2">
        <div className="four-s">
          <img
            src="./images/four.png"
            alt="four"
            style={{ width: "93px", height: "93px" }}
          />
        </div>
        <div className="five-s">
          <img
            src="./images/five.png"
            alt="five"
            style={{ width: "154px", height: "154px", float: "right" }}
          />
        </div>
        <div className="six-s">
          <img
            src="./images/six.png"
            alt="six"
            style={{ width: "89px", height: "89px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionBox;
