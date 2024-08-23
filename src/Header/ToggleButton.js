import React, { Component } from "react";
import ToggleSwitch from "./ToggleSwitch";

class ToggleButton extends Component {
  render() {
    return (
      <React.Fragment>
        <ToggleSwitch label="Notifications" />
        <ToggleSwitch label="Subscribe" />
      </React.Fragment>
    );
  }
}
export default ToggleButton;
