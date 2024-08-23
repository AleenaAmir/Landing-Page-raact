import React from "react";
import Activeoverlay from "./ActiveOverlay";
import ImageOverlay from "./ImageOverlay";
import Overlay from "./OverLayOne";
import "./ecomActivity.css";
function EcomActvity() {
  return (
    <div className="ecom-align">
      <h2 className="ecom-mh">
        Your eCommerce <br />
        made simple
      </h2>
      <section className="containerbox">
        <div class="leftbox">
          <Overlay />
          <h3 className="ecom-h">All You Need to Start</h3>
          <p className="ecom-p">
            Add WooCommerce plugin to any WordPress site and set up a new store
            in minutes.
          </p>

          <button className="ecom-btn">Ecommerce for Wordpress ›</button>
        </div>
        <div class="middlebox">
          <ImageOverlay />
          <h3 className="ecom-h"> Customize and Extend </h3>
          <p className="ecom-p">
            From subscriptions to gym classes to luxury cars, WooCommerce is
            fully customizable.
          </p>

          <button className="ecom-btn">Browser Extensions ›</button>
        </div>
        <div class="rightbox">
          <Activeoverlay />

          <h3 className="ecom-h">All You Need to Start</h3>
          <p className="ecom-p">
            Add WooCommerce plugin to any WordPress site and set up a new store
            in minutes.
          </p>

          <button className="ecom-btn">Ecommerce for Wordpress ›</button>
        </div>
      </section>
    </div>
  );
}

export default EcomActvity;
