import React from "react";
import { bannerImg } from "../constant/constant";
import Button from "./Button";

function Banner() {
  return (
    <>
      <div id="Banner">
        <div className="container">
          <div className="banner">
            <div className="banner__left">
              <h3 className="banner__title">
                We Are Digital Product Design Agency
              </h3>
              <p className="banner__detail">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <Button title="Get Started" color="nav__btn__white" />
            </div>
            <picture className="banner__right">
              <img src={bannerImg} alt={bannerImg} />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
