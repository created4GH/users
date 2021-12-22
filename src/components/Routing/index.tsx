import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";

import Users from "../Users";
import UserInfo from "../UserInfo";
import Login from "../Login";
import { IsAuthorizedSelector } from "../../redux/selectors";
import { USERS_PATH, USER_INFO_PATH, LOGIN_PATH } from "../../constants/pathes";

const Routing: React.FC = () => {
  const isAuthorized = useSelector(IsAuthorizedSelector);
  const toLogin = <Navigate to={LOGIN_PATH} />;

  const routes = () => [
    {
      path: LOGIN_PATH,
      element: <Login />,
    },
    {
      path: "*",
      element: toLogin,
    },
    {
      path: USERS_PATH,
      element: isAuthorized ? <Users /> : toLogin,
    },
    {
      path: USER_INFO_PATH,
      element: isAuthorized ? <UserInfo /> : toLogin,
    },
  ];
  const routing = useRoutes(routes());

  return <>{routing}</>;
};

export default Routing;
