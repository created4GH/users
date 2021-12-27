import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";

import UserCard from "../UserCard";
import { DispatchType, UserType } from "../../interfaces";
import { setSelectedUser } from "../../redux/actions";
import { USER_INFO_PATH } from "../../constants/pathes";

interface Props {
  user: UserType;
}

const User: React.FC<Props> = ({ user }) => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch<DispatchType>();

  const switchPage = (): void => {
    dispatch(setSelectedUser(user));
    navigate(USER_INFO_PATH);
  };

  return <UserCard onClick={switchPage} user={user} />;
};

export default User;
