import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routing from "../Routing";
import { fetchUsers } from "../../redux/actions";
import { isAuthorizedSelector } from "../../redux/selectors";
import { DispatchType } from "../../interfaces";
import Languages from "../Languages";

import "./style.scss";

const Pages: React.FC = () => {
  const dispatch = useDispatch<DispatchType>();
  const isAuthorized = useSelector(isAuthorizedSelector);

  useEffect(() => {
    isAuthorized && dispatch(fetchUsers(20));
  }, [isAuthorized])


  return (
    <>
      <Languages />
      <div className="pages-container">
        <>
          <Routing />
        </>
      </div>
    </>
  )
};

export default Pages;
