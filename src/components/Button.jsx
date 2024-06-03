import React from "react";

function Button(props) {
  return (
    <>
      <button className={`nav__btn ${props.color}`}>{props.title}</button>
    </>
  );
}

export default Button;
