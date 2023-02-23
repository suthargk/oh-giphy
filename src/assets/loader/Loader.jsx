import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <svg
      height="30"
      width="30"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{ stroke: "#000", opacity: 0.2 }}
        ></circle>
      </g>
      <g className="circle__svg-circle">
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="4"
          style={{
            stroke: "#000",
            strokeDasharray: "80px",
            strokeDashoffset: "60px",
          }}
        ></circle>
      </g>
    </svg>
  );
};

export default Loader;
