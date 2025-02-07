import logo from "../../assets/logo.svg";
import headPhone from "../../assets/headPhone.svg";
import "./navbar.css";
import MobileNav from "./MobileNav";
import { useState } from "react";

export const Quote = ({ inside = " Request a quote" }) => {
  return (
    <button className="quote flexs">
      {inside}
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  );
};

export function Links({ className }) {
  return (
    <ul className={`flexs ${className}`}>
      <li>
        <a href="#products">Products</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#configure">Configure</a>
      </li>
      <li>
        <a href="#solution">Solutions</a>
      </li>
    </ul>
  );
}

const NavBar = () => {
  const [isMobileNav, setIsmobileNav] = useState(false);
  return (
    <>
      <header className="flexs main-header">
        <div className="logo">
          <img src={logo} alt="Soller's logo" />
        </div>
        <nav className="flexs">
          <Links className="desktop" />
          <div className="button-container flexs desktop">
            <button className="flexs">
              <img src={headPhone} alt="Head phone icon" />
              555 818 282
            </button>
            <Quote />
          </div>
          <button
            className="mobile mobile-btn"
            onClick={() => setIsmobileNav(!isMobileNav)}
          >
            {isMobileNav ? (
              <i className="fa fa-x" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-bars" aria-hidden="true"></i>
            )}
          </button>
          {isMobileNav && (
            <MobileNav
              handleClick={() => {
                setIsmobileNav(false);
              }}
            />
          )}
        </nav>
      </header>
    </>
  );
};

export default NavBar;
