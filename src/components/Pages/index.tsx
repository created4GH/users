import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routing from "../Routing";
import Loader from "../loaders/RoundLoader";
import FetchError from "../FetchError";
import { fetchUsers } from "../../redux/actions";
import { stateSelector } from "../../redux/selectors";
import { DispatchType } from "../../interfaces";

import "./style.scss";

const Pages: React.FC = () => {
  const dispatch = useDispatch<DispatchType>();
  const { isAuthorized, isFetchingFail, isFirstFetch } = useSelector(stateSelector);
  let element: JSX.Element;

  useEffect(() => {
    if (isAuthorized && isFirstFetch) {
      dispatch(fetchUsers(20));
    }
  }, [isAuthorized])

  if (isAuthorized && isFirstFetch) {
    element = <Loader />;
  }
  else if (isFetchingFail) {
    element = <FetchError />
  }
  else {
    element = <>
      <Routing />
    </>
  }

  return (
    <div className="pages-container">
      {element}
    </div>
  )
};

export default Pages;
