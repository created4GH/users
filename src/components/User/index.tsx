import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import UserCard from "../UserCard";
import { UserType } from "../../interfaces";
import { setselectedUser } from "../../redux/actions";
import { USER_INFO_PATH } from "../../constants/pathes";

import "./style.scss";

interface Props {
  user: UserType;
}

const User: React.FC<Props> = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const switchPage = () => {
    dispatch(setselectedUser(user));
    navigate(USER_INFO_PATH);
  };

  return <UserCard onClick={switchPage} user={user} />;
};

export default User;
