import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routing from "../Routing";
import Languages from "../Languages";
import { fetchUsers } from "../../redux/actions";
import { isAuthorizedSelector, isFetchingFailSelector } from "../../redux/selectors";
import { DispatchType } from "../../interfaces";

import "./style.scss";
import FetchError from "../FetchError";

const Pages: React.FC = () => {
  const dispatch = useDispatch<DispatchType>();
  const isAuthorized = useSelector(isAuthorizedSelector);
  const isFetchingFail = useSelector(isFetchingFailSelector);

  useEffect(() => {
    isAuthorized && dispatch(fetchUsers(20));
  }, [isAuthorized])

  const element: JSX.Element = isFetchingFail
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
