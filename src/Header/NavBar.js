import React from "react";
// import LogIn from "./LogIn";
import "./navbar.css";

function NavBar() {
  return (
    <div className="background-image">
      <div>
        <nav className="navbar ">
          <a href="/">
            <img
              src="./images/lending.png"
              width="250px"
              height="70"
              alt="logo"
            />
          </a>

          <div className="nav-btns">
            <ul>
              <li className="nav-nav">
                <a style={{ color: " #272d4e" }} href="/">
                  Sell
                </a>
              </li>
              <li className="nav-nav">
                <a style={{ color: " #272d4e" }} href="/">
                  Marketplace
                </a>
              </li>
              <li className="nav-nav">
                <a style={{ color: " #272d4e" }} href="/">
                  Community
                </a>
              </li>
              <li className="nav-nav">
                <a style={{ color: " #272d4e" }} href="/">
                  Develop
                </a>
              </li>
              <li className="nav-nav">
                <a style={{ color: " #272d4e" }} href="/">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          <div className="nav2">
            <button className="log-in-nav">login</button>
            <button className="btn">Get Started</button>
            <span className="search">
              <img src="./images/icon-search.png" alt="search" />
            </span>
          </div>
        </nav>
      </div>
      <artical className="mainbox">
        <div className="main1">
          <h1 className="first-h">
            <b>
              Building exactly the
              <br /> eCommerce website <br /> you want.
            </b>
          </h1>
          <p className="first-p">
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. <br />
            Get started quickly and make your way.
          </p>
          <button className="btn-head1">Start A New Store</button>
          <button className="btn-head2">or Customize & Extend › </button>
        </div>
        <div className="main2-nav">
          <img src="./images/Artboardpopo.png" alt="bitmap" className="shoes" />
          <img src="./images/image 15.png" alt="bitmap" className="girllaugh" />
          <img
            src="./images/paymentboard.png"
            alt="bitmap"
            className="paymentboard
            "
          />
          <img src="./images/sale.png" alt="bitmap" className="sale" />
          <img src="./images/cart.png" alt="bitmap" className="cart" />
          <img src="./images/frame.png" alt="bitmap" className="frame" />
        </div>
      </artical>
    </div>
  );
}

export default NavBar;
