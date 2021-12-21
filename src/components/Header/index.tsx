import NavMenu from "../NavMenu";

import logo from "../../assets/img/svg/header.svg";
import "./style.scss";

const Header = () => {
  console.log(logo)
  return (
    <header className="header">
      <div className="header-logo-wrapper">
        <img src={logo} alt="header logo" />
        <h1 className="header-title">Connections</h1>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
