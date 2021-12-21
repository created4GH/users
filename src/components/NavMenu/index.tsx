import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setIsAuthorized } from "../../redux/actions";
import Button from "../commons/Button/Button";

import "./style.scss";

const NavMenu = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setIsAuthorized(false));
  }


  return (
    <nav className="nav-menu">
      <div className="nav-buttons-container">
        <Link to="/users">
          <Button innerText="Users" />
        </Link>
        <Link to="/userinfo">
          <Button innerText="User Info" />
        </Link>
        <Button innerText="Log out" onClick={logout} />
      </div>
    </nav>
  );
};

export default NavMenu;
