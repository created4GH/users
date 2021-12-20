import NavMenu from "../NavMenu/NavMenu";

import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">HEADER</h1>
      <NavMenu />
    </header>
  );
};

export default Header;
