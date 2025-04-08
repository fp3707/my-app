import React from "react";

const Tooltip = ({ x, y, value }) => {
  return (
    <div style={{ position: "absolute", left: x, top: y, backgroundColor: "#fff", border: "1px solid #ccc", padding: "10px" }}>
      <p>{value}</p>
    </div>
  );
};

export default Tooltip;
