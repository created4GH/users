import { useDispatch, useSelector } from "react-redux";

import Routing from "../Routing";
import Languages from "../Languages";
import { fetchUsers, setIsFirstFetch } from "../../redux/actions";
import { isFirstFetchSelector } from "../../redux/selectors";

import "./style.scss";

const Pages: React.FC = () => {
  const dispatch = useDispatch();
  const isFirstFetch = useSelector(isFirstFetchSelector);

  if (isFirstFetch) {
    dispatch(fetchUsers());
    dispatch(setIsFirstFetch(false));
  }

  return (
    <div className="pages-container">
      <Languages />
      <Routing />
    </div>
  );
};

export default Pages;
