import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routing from "../Routing";
import Loader from "../Loader";
import Languages from "../Languages";
import FetchError from "../FetchError";
import { fetchUsers, setIsFirstFetch } from "../../redux/actions";
import { isAuthorizedSelector, isFirstFetchSelector } from "../../redux/selectors";
import { DispatchType } from "../../interfaces";

import "./style.scss";

const Pages: React.FC = () => {
  const dispatch = useDispatch<DispatchType>();
  const isFirstFetch: boolean = useSelector(isFirstFetchSelector);
  const isAuthorized: boolean = useSelector(isAuthorizedSelector);

  useEffect(() => {
    if (isAuthorized && isFirstFetch) {
      dispatch(fetchUsers(20));
      dispatch(setIsFirstFetch(false));
    }
  }, [isAuthorized])

  return <div className="pages-container">
    {(isAuthorized && isFirstFetch)
      ? <Loader />
      : <div className="pages-container">
        <Languages />
        <Routing />
      </div>}
  </div>
};

export default Pages;
