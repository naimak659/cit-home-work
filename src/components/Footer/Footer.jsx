// src/SocialCard.js
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FooterContent, logo } from "../../constant/constant";
import FooterItem from "../utiles/FooterItem";

const Footer = () => {
  return (
    <div className="social-card">
      <div className="container">
        <div className="FooterContents">
          <div>
            <div className="icon-container">
              <img src={logo} alt={logo} />
            </div>

            <p className="social-description">
              There are many variations of passages of Lorem Ipsum, but the
              majority have suffered alteration in some form.
            </p>
            <div className="social-icons">
              <a href="" className="social-link">
                <FaFacebookF />
              </a>
              <a href="" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <FooterItem title={"Company"} content={FooterContent} />
          </div>
          <div>
            <FooterItem title={"Company"} content={FooterContent} />
          </div>
          <div>
            <FooterItem title={"Company"} content={FooterContent} />
          </div>
          <div>
            <FooterItem title={"Company"} content={FooterContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
