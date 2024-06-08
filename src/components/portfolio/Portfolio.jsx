// src/Portfolio.js
import React from "react";
import "./portfolio.css";
import { portfolioItems } from "../../constant/constant.js";
import { FiArrowRight } from "react-icons/fi";
import Heading from "../utiles/Heading.jsx";

const Portfolio = () => {
  return (
    <div className="container">
      <div>
        <Heading
          title={"Our Work Portfolio"}
          details={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          }
        />

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.image} alt={item.alt} />
              {item.title && (
                <div className="portfolio-item-overlay">
                  <div className="portfolio-item-text">
                    <h3>{item.title}</h3>
                    <a href={item.link}>
                      See Details <FiArrowRight />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
