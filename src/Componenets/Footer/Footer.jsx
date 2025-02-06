import footerIcon from "../../assets/footerIcon.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="flexs foot">
      <div className="flexs">
        <img src={footerIcon} alt="Footer icon" />
        <p className="copy-right">@ 2023 Soller, Inc. All rights reserved.</p>
      </div>
      <div className="flexs">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Support</p>
      </div>
    </footer>
  );
};

export default Footer;
