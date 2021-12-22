import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Loader from "../loaders/CircleLoader";
import User from "../User";
import { stateSelector } from "../../redux/selectors";
import { fetchUsers, setPageNumber } from "../../redux/actions";
import { UserType } from "../../interfaces";

import "./style.scss";

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const {
    users,
    isFetching,
    pageNumbers: { current, previous },
  } = useSelector(stateSelector);

  const scroll = (event: Event): void => {
    const target = event.target as Document;
    const scrollHeight = target.documentElement.scrollHeight;
    const scrollTop = target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    if (scrollHeight - (scrollTop + innerHeight) < 200) {
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

  const callback = (item: UserType) => <User key={uuidv4()} user={item} />;
  const mappedItems = useMemo(() => users?.map(callback), [users]);

  return (
    <>
      {isFetching && current === 1 ? (
        <Loader />
      ) : (
        <>
          <main className="main">
            <div className="users-container">
              {mappedItems}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Users;
