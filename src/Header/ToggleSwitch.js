import React from "react";
import "./toggle.css";

const ToggleSwitch = ({ label }) => {
  return (
    <div className="container-togl">
      {label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
