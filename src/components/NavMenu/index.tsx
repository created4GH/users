import { useDispatch } from "react-redux";
import { useIntl } from "react-intl";

import Button from "../commons/Button/Button";
import ButtonLink from "./ButtonLink";
import { setIsAuthorized } from "../../redux/actions";
import { USERS_PATH, USER_INFO_PATH } from "../../constants/pathes";

import "./style.scss";

const NavMenu = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const formatMessage = (id: string) => intl.formatMessage({ id: id });

  const logout = () => {
    dispatch(setIsAuthorized(false));
  };

  return (
    <nav className="nav-menu">
      <div className="nav-buttons-container">
        <ButtonLink text={formatMessage("Users")} to={USERS_PATH} />
        <ButtonLink text={formatMessage("User Info")} to={USER_INFO_PATH} />
        <Button innerText={formatMessage("Log out")} onClick={logout} />
      </div>
    </nav>
  );
};

export default NavMenu;
