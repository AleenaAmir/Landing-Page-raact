import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div>
        <div>
          <h4 className="f-h">Supported by real people</h4>
          <p className="f-p">
            Our team of Happiness Engineers works remotely from 58 countries
            providing <br />
            customer support across multiple time zones.
          </p>
        </div>

        <img
          className="group"
          src="./images/people-section12.png"
          alt="group"
        />
      </div>
      <div className="one">
        <p className="footer-heading">
          WooCommerce - the{" "}
          <b>
            most customizable eCommerce <br />
            platform
          </b>
          for building <b>your online business.</b>
        </p>

        <div className="a-btn">
          <button className="g-s-btn">Get Start</button>
        </div>
        <div className="circle-img">
          <img src="./images/circle.png" alt="circle" />
        </div>
      </div>
      <div className="two">
        <div className="two-inner">
          <span className="lines">
            <img
              src="./images/tick.png"
              alt="icon"
              style={{ height: "30px", weight: "30px", marginRight: "20px" }}
            />
            30 day money back guarantee
          </span>
          <span className="lines">
            <img
              src="./images/Union.png"
              alt="icon"
              style={{ height: "30px", weight: "30px", marginRight: "20px" }}
            />
            Support teams across the world
          </span>
          <span className="lines">
            <img
              src="./images/Union1.png"
              alt="icon"
              style={{ height: "30px", weight: "30px", marginRight: "20px" }}
            />
            Safe & Secure online payment
          </span>
          <div className="footer-logo">
            <img src="./images/foter-woo.png" alt="woo" />
          </div>
          <div>
            {/* 👇️ colored horizontal line */}
            <hr
              style={{
                marginLeft: "70px",
                marginRight: "70px",
                background: "white",
                color: "white",
                borderColor: "white",
              }}
            />
          </div>
          {/* {list of landing page} */}
          <div class="footer-data">
            <div class="box-f">
              <h4 class="f-h4">Who Are we</h4>
              <ul class="unorder-list">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Work With Us</a>
                </li>
              </ul>
            </div>
            <div class="box-f">
              <h4 class="f-h4">WooCommerce</h4>
              <ul>
                <li>
                  <a href="/">Featuer</a>
                </li>
                <li>
                  <a href="/">Payment</a>
                </li>
                <li>
                  <a href="/">Marketing</a>
                </li>
                <li>
                  <a href="/">Shipping</a>
                </li>
                <li>
                  <a href="/">Extension Store</a>
                </li>
                <li>
                  <a href="/">eCommerce Blog</a>
                </li>
                <li>
                  <a href="/">Devolpment blog</a>
                </li>
                <li>
                  <a href="/">Ideas Board</a>
                </li>
                <li>
                  <a href="/">Mobile App</a>
                </li>
                <li>
                  <a href="/">Community</a>
                </li>
                <li>
                  <a href="/">Style Guaid</a>
                </li>
                <li>
                  <a href="/">Email NewLetters</a>
                </li>
              </ul>
            </div>
            <div class="box-f">
              <h4 class="f-h4">Other Poduct</h4>
              <ul>
                <li>
                  <a href="/">StoreFront</a>
                </li>
                <li>
                  <a href="/">WooSlider</a>
                </li>
                <li>
                  <a href="/">SenSel</a>
                </li>
                <li>
                  <a href="/">Sensel Extensions</a>
                </li>
              </ul>
            </div>
            <div class="box-f">
              <h4 class="f-h4">supports</h4>
              <ul>
                <li>
                  <a href="/">Documentations</a>
                </li>
                <li>
                  <a href="/">Customization</a>
                </li>
                <li>
                  <a href="/">Support Police</a>
                </li>
                <li>
                  <a href="/">Contract</a>
                </li>
                <li>
                  <a href="/">Covid-9 Resources</a>
                </li>
                <li>
                  <a href="/">Privacy Notice for</a>
                </li>
                <li>
                  <a href="/">California Users</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
