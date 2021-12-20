import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setIsAuthorized } from "../../redux/actions";

import "./style.scss";

const Login = () => {
    const dispatch = useDispatch();
    const login = () => dispatch(setIsAuthorized(true));
    return (
        <Link to="/users">
            <div className="login__wrapper">
                <button className="login" onClick={login}>
                    Login
                </button>
            </div>
        </Link>
    )
}

export default Login;