import NavMenu from "../NavMenu";

import logo from "../../assets/img/svg/header.svg";
import "./style.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-wrapper">
          <img src={logo} alt="header-logo" />
          <h1 className="header-title">Connections</h1>
        </div>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
