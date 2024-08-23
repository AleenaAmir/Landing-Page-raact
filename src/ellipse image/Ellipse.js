import React from "react";

function Ellipse(props) {
  const { cx, cy, rx, ry, fill } = props;

  return (
    <svg>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />
    </svg>
  );
}

export default Ellipse;
