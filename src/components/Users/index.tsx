import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Loader from "../Loader";
import User from "../User";
import { stateSelector } from "../../redux/selectors";
import { fetchUsers } from "../../redux/actions";
import { UserType } from "../../interfaces";

import "./style.scss";

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const { users, isFetching, isFirstFetch } = useSelector(stateSelector);

  const fetch = (event: Event): void => {
    const target = event.target as Document;
    const scrollHeight = target.documentElement.scrollHeight;
    const scrollTop = target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    if (scrollHeight - (scrollTop + innerHeight) < 200) {
      dispatch(fetchUsers());
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", fetch);
    return () => {
      document.removeEventListener("scroll", fetch);
    };
  }, []);

  const callback = (item: UserType) => <User key={uuidv4()} user={item} />;
  const mappedItems = useMemo(() => users?.map(callback), [users]);

  const element = isFetching && isFirstFetch ? (
    <Loader />
  ) : (
    <>
      <main className="main">
        <div className="users-container">{mappedItems}</div>
      </main>
    </>
  );

  return element;
};

export default Users;
