import React from "react";
import "./Heading.css";
function Heading({ title, details }) {
  return (
    <div className="heading-part">
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  );
}

export default Heading;
