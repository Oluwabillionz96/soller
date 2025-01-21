import logo from "../../assets/soller.svg";
import headPhone from "../../assets/head-phone.svg";
import mobileNav from "../../assets/mobile-nav-btn.svg";
import "./navbar.css";
import Quote from "../Quote/Quote";

const Navbar = () => {
  return (
    <nav className="flexs">
      <div className="left-nav flexs">
        <div>
          <img src={logo} alt="soller's logo" />
        </div>
        <ul className="flexs desktop">
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Solution</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Configure</a>
          </li>
        </ul>
      </div>
      <div className="right-nav flexs">
        <div className="flexs desktop">
          <img src={headPhone} alt="head phone icon" />
          <p>555 818 282</p>
        </div>
        <Quote />
        <img src={mobileNav} alt="mobile navigation icon" className="mobile" />
      </div>
    </nav>
  );
};

export default Navbar;
