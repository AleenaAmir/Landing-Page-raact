import React from "react";
import "./community.css";

function Community() {
  return (
    <div className="backpack-com">
      <div className="community-container">
        <div className="side-1">
          {/* imageone */}
          <div className="circle1">
            <img src="./images/circle1.png" alt="circle" />
          </div>

          {/* <img src="./images/circle-com1.png" alt="circle" /> */}
          <img
            className="girl-img"
            src="./images/girl.png"
            alt="girl with laptop"
          />
        </div>
        <div className="side-1a">
          {/* textone */}
          <h3 className="community-h">
            Develop <br />
            Without Limits
          </h3>
          <p className="community-p">
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </p>
          <button className="community-btn">Read the Documentation</button>
        </div>
      </div>
      <div>
        <div className="Container-comunity2">
          <div className="side-2a-h" style={{ marginTop: "-100%;" }}>
            {/* texttwo */}
            <h3 className="community-h">Know our Global Community</h3>
            <p className="community-p">
              WooCommerce is one of the fastest-growing eCommerce communities.
              We’re proud that the helpfulness of the community and a wealth of
              online resources are frequently cited as reasons our users love
              it. There are 80+ meetups worldwide!
            </p>

            <button className="community-btn">Read the Documentation</button>
          </div>
          <div className="side-2img">
            {/* imagetwo  */}
            <img
              className="boy-img"
              src="./images/boy.png"
              alt="boy in meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
