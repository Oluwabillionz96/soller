import { Links } from "./NavBar";

const MobileNav = ({ handleClick }) => {
  return (
    <nav className="mobile-nav" onClick={handleClick}>
      <Links />
    </nav>
  );
};

export default MobileNav;
