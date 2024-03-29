import { useDispatch } from "react-redux";
import { IntlShape, useIntl } from "react-intl";

import Button from "../commons/Button/Button";
import ButtonLink from "./ButtonLink";
import { setIsAuthorized } from "../../redux/actions";
import { USERS_PATH, USER_INFO_PATH } from "../../constants/pathes";
import { DispatchType } from "../../interfaces";

import "./style.scss";

const NavMenu: React.FC = () => {
  const dispatch = useDispatch<DispatchType>();
  const {formatMessage} = useIntl();

  const logout = (): void => {
    dispatch(setIsAuthorized(false));
  };

  return (
    <nav className="nav-menu">
      <div className="nav-buttons-container">
        <ButtonLink text={formatMessage({id: "Users"})} to={USERS_PATH} />
        <ButtonLink text={formatMessage({id: "User Info"})} to={USER_INFO_PATH} />
        <Button innerText={formatMessage({id: "Log out"})} onClick={logout} />
      </div>
    </nav>
  );
};

export default NavMenu;
