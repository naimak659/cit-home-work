import { logo, navbarData } from "../constant/constant";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="container">
        <div id="Navbar">
          <picture>
            <img src={logo} alt="" />
          </picture>
          <div className="navbarLinks">
            <ul>
              {navbarData.map((item, i) => {
                return (
                  <li key={i}>
                    <a
                      className={`nav__links ${i == 0 ? "nav__active" : ""}`}
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button title="Contact Us" color="nav__btn__blue" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
