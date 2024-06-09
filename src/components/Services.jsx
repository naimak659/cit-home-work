import React from "react";
import { services } from "../constant/constant";
import Heading from "./utiles/Heading";

function Services() {
  return (
    <>
      <div id="services">
        <div className="container">
          <div className="service">
            <Heading
              title={"Our Services"}
              details={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
              }
              css={"heading-part"}
            />
            <div className="service__bottom">
              {services.map((item, i) => {
                return (
                  <>
                    <div className="service__box" key={item.title + i}>
                      <div className="serviceBox__img">
                        <img src={item.img} alt={item.img} />
                      </div>
                      <h4 className="serviceBox__title">{item.title}</h4>
                      <p className="serviceBox__detail">{item.detail}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
