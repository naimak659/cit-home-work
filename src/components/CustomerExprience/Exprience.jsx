import React from "react";
import Heading from "../utiles/Heading";
import { testimonials } from "../../constant/constant";
import "./exprience.css";

function Exprience() {
  return (
    <div className="container">
      <Heading
        title={"We Care About Our Customer Experience Too"}
        details={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        }
        css={"headingAlign-right"}
      />
      <div className="testimonialGrid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <picture>
              <img
                src={item.image}
                alt={item.name}
                className="testimonial-image"
              />
            </picture>
            <div className="testimonial-rating">
              <img src={`${item.star}`} alt="" />
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">{item.text}</p>
              <h3 className="testimonial-name">{item.name}</h3>
              <p className="testimonial-position">{item.position}</p>
              <picture>
                <img className="testimonial-comma" src={item.comma} alt="" />
              </picture>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exprience;
