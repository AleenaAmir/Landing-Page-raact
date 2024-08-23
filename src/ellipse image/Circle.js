import React from "react";
import Ellipse from "./Ellipse";

function EllipseTable() {
  const numRows = 5;
  const numCols = 5;
  const ellipseSize = 2; // size in percent
  const spacing = 1; // spacing in percent

  const ellipses = [];

  // loop through rows and columns to create ellipses
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const cx = `${col * (ellipseSize + spacing) + ellipseSize / 1}%`;
      const cy = `${row * (ellipseSize + spacing) + ellipseSize / 1}%`;
      ellipses.push(
        <Ellipse
          key={`${row}-${col}`}
          cx={cx}
          cy={cy}
          rx={`${ellipseSize / 1}%`}
          ry={`${ellipseSize / 1}%`}
          fill="blue"
        />
      );
    }
  }

  // render the ellipses as a table
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {Array(numRows)
          .fill()
          .map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array(numCols)
                .fill()
                .map((_, colIndex) => (
                  <td
                    key={colIndex}
                    style={{ padding: "-0%", marginLeft: "5" }}
                  >
                    {ellipses[rowIndex * numCols + colIndex]}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default EllipseTable;
