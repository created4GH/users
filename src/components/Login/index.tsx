import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Button from "../commons/Button/Button";
import { setIsAuthorized } from "../../redux/actions";

import "./style.scss";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(setIsAuthorized(true));
  }

  useEffect(() => {
    dispatch(setIsAuthorized(false));
  }, [])

  return (
    <Link to="/users">
      <div className="login__wrapper">
        <Button onClick={login} innerText="Login" className="login-button" />
      </div>
    </Link>
  );
};

export default Login;
