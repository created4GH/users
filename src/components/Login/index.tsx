import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../commons/Button/Button";
import { setIsAuthorized } from "../../redux/actions";
import { USERS_PATH } from "../../constants/pathes";

const Login : React.FC = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const login = () => {
    dispatch(setIsAuthorized(true));
    sessionStorage.setItem('is_Authorized', "true");
  }

  return (
    <Link to={USERS_PATH}>
      <div className="login__wrapper">
        <Button
          onClick={login}
          innerText={intl.formatMessage({ id: "Log in" })}
          className="login-button" />
      </div>
    </Link>
  );
};

export default Login;
