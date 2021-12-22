import React from "react";

import Users from "../Users";
import UserInfo from "../UserInfo";

import { USERS_PATH, USER_INFO_PATH, LOGIN_PATH } from "../../constants/pathes"
import { useSelector } from "react-redux";
import { IsAuthorizedSelector } from "../../redux/selectors";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "../Login";


const Routing: React.FC = () => {
    const isAuthorized = useSelector(IsAuthorizedSelector);

    const routes = () => [
        {
            path: LOGIN_PATH,
            element: <Login />,
        },
        {
            path: "*",
            element: <Navigate to="/login" />,
        },
        {
            path: USERS_PATH,
            element: isAuthorized ? <Users /> : <Navigate to="/login" />,
        },
        {
            path: USER_INFO_PATH,
            element: isAuthorized ? <UserInfo /> : <Navigate to="/login" />,
        }
    ]
    const routing = useRoutes(routes());

    return (
        <>
            {routing}
        </>
    )
}

export default Routing;