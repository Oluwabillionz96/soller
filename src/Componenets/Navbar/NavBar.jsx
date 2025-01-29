import logo from "../../assets/logo.svg";
import headPhone from "../../assets/headPhone.svg";
import "./navbar.css";

export const Quote = () => {
  return (
    <button className="quote flexs">
      Request a quote
      <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </button>
  );
};

const NavBar = () => {
  return (
    <header className="flexs main-header">
      <div className="logo">
        <img src={logo} alt="Soller's logo" />
      </div>
      <nav className="flexs">
        <ul className="flexs desktop">
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#Solutions">Solutions</a>
          </li>
          <li>
            <a href="#">Configure</a>
          </li>
        </ul>
        <div className="button-container flexs desktop">
          <button className="flexs">
            <img src={headPhone} alt="Head phone icon" />
            555 818 282
          </button>
          <Quote />
        </div>
        <button className="mobile">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
