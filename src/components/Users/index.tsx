import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ScrollToTop from "react-scroll-to-top";

import RoundLoader from "../loaders/RoundLoader";
import HorizontalLoader from "../loaders/HorizontalLoader";
import User from "../User";
import { stateSelector } from "../../redux/selectors";
import { fetchUsers } from "../../redux/actions";
import { DispatchType, UserType } from "../../interfaces";
import FetchError from "../FetchError";

import "./style.scss";

const Users: React.FC = () => {
  const dispatch = useDispatch<DispatchType>();
  const { users, isUsers, isFetching } = useSelector(stateSelector);

  const fetch = (event: Event): void => {
    const target = event.target as Document;
    const scrollHeight = target.documentElement.scrollHeight;
    const scrollTop = target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;
    if (scrollHeight - (scrollTop + innerHeight) < 100) {
      dispatch(fetchUsers(10));
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", fetch);
    return () => {
      document.removeEventListener("scroll", fetch);
    };
  });

  const callback = (item: UserType): JSX.Element => (
    <User key={uuidv4()} user={item} />
  );
  const mappedItems: JSX.Element[] = useMemo(
    () => users?.map(callback),
    [users]
  );

  if (isFetching && !isUsers) {
    return <RoundLoader />;
  }
  else if (isUsers) {
    return (
      <>
        <ScrollToTop className="scroll-to-top" />
        <main className="main">
          <div className="users-container">{mappedItems}</div>
        </main>
        {isFetching && <HorizontalLoader />}
      </>
    )
  }
  else return <div></div>
};

export default Users;
