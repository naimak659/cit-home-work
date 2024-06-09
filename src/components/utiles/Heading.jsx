import React from "react";
import "./Heading.css";
function Heading({ title, details, css }) {
  return (
    <div className={`${css}`}>
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  );
}

export default Heading;
