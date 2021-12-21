import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../commons/Button/Button";
import ButtonLink from "./ButtonLink";
import { setIsAuthorized } from "../../redux/actions";
import { USERS_PATH, USER_INFO_PATH } from "../../constants/pathes";

import "./style.scss";
import { useState } from "react";

const NavMenu = () => {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState<string>("");

  const logout = () => {
    dispatch(setIsAuthorized(false));
  };

  return (
    <nav className="nav-menu">
      <div className="nav-buttons-container">
        <ButtonLink
          text="Users"
          to={USERS_PATH}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <ButtonLink
          text="User Info"
          to={USER_INFO_PATH}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />
        <Button innerText="Log out" onClick={logout} />
      </div>
    </nav>
  );
};

export default NavMenu;
