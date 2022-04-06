import React from "react";

import "./ScrollableDiv.css";

const ScrollableDiv = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "500px",
        overflow: "auto",
      }}>
      {children}
    </div>
  );
};

export default ScrollableDiv;
