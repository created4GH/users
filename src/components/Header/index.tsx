import NavMenu from "../NavMenu";
import Languages from "../Languages";

import logo from "../../assets/img/svg/header-logo.svg";
import "./style.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
      <Languages />
        <div className="header-wrapper">
          <img src={logo} alt="avatar" className="header-logo" />
        </div>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
