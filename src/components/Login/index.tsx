import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../commons/Button/Button";
import { setIsAuthorized } from "../../redux/actions";

import "./style.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = () => {
    dispatch(setIsAuthorized(true));
    navigate("/users");
  };
  return (
    <div className="login__wrapper">
      <Button onClick={login} innerText="Login" className="login-button" />
    </div>
  );
};

export default Login;
