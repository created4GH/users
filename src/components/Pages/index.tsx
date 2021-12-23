import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routing from "../Routing";
import Loader from "../Loader";
import Languages from "../Languages";
import { fetchUsers, setIsFirstFetch } from "../../redux/actions";
import { isAuthorizedSelector, isFirstFetchSelector } from "../../redux/selectors";

import "./style.scss";

const Pages: React.FC = () => {
  const dispatch = useDispatch();
  const isFirstFetch = useSelector(isFirstFetchSelector);
  const isAuthorized = useSelector(isAuthorizedSelector);

  useEffect(() => {
    if (isAuthorized && isFirstFetch) {
      dispatch(fetchUsers());
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
