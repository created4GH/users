import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routing from "../Routing";
import Languages from "../Languages";
import { fetchUsers } from "../../redux/actions";
import { isAuthorizedSelector, didFetchingFailSelector } from "../../redux/selectors";
import { DispatchType } from "../../interfaces";

import "./style.scss";
import FetchError from "../FetchError";

const Pages: React.FC = () => {
  const dispatch = useDispatch<DispatchType>();
  const isAuthorized = useSelector(isAuthorizedSelector);
  const didFetchingFail = useSelector(didFetchingFailSelector);

  useEffect(() => {
    isAuthorized && dispatch(fetchUsers(20));
  }, [isAuthorized])

  const element: JSX.Element = didFetchingFail
    ? <FetchError />
    : <>
      <Routing />
    </>;

  return (
    <>
      <Languages />
      <div className="pages-container">
        {element}
      </div>
    </>
  )
};

export default Pages;
