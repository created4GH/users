import Button from "../commons/Button/Button";

import "./style.scss";

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <div className="nav-buttons-container">
        <Button innerText="Users" />
        <Button innerText="User Info" />
        <Button innerText="Log out" />
      </div>
    </nav>
  );
};

export default NavMenu;
