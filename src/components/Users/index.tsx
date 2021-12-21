import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";

import Loader from "../Loader";
import User from "../User";
import { stateSelector } from "../../redux/selectors";
import { fetchUsers, setPageNumber } from "../../redux/actions";

import "./style.scss";

const Users = () => {
  const dispatch = useDispatch();
  const {
    users,
    isFetching,
    isAuthorized,
    pageNumbers: { current, previous },
  } = useSelector(stateSelector);

  const scroll = (e: any) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    if (scrollHeight - (scrollTop + innerHeight) < 100) {
      dispatch(setPageNumber());
    }
  };

  useEffect(() => {
    if (current > previous) {
      dispatch(fetchUsers(current));
      document.addEventListener("scroll", scroll);
      return () => {
        document.removeEventListener("scroll", scroll);
      };
    }
  }, [current]);

  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {isFetching && current === 1 ? (
        <Loader />
      ) : (
        <main className="main">
          <div className="users-container">
            {users.length &&
              users.map((item) => <User key={uuidv4()} user={item} />)}
          </div>
        </main>
      )}
    </>
  );
};

export default Users;
