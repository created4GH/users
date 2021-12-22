import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../commons/Button/Button";
import { setIsAuthorized } from "../../redux/actions";

const Login = () => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const login = () => {
    dispatch(setIsAuthorized(true));
    sessionStorage.setItem('is_Authorized', "true");
  }

  useEffect(() => {
    dispatch(setIsAuthorized(false));
  }, [])

  return (
    <Link to="/users">
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
