import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

import { DispatchType, UserType } from "../../interfaces";
import { setSelectedUser } from "../../redux/actions";
import { USER_INFO_PATH } from "../../constants/pathes";

interface Props {
  user: UserType;
}

const User: React.FC<Props> = ({ user }) => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch<DispatchType>();
  const { formatMessage } = useIntl();
  const { picture, name, gender, dob, className } = user;

  const switchPage = (): void => {
    dispatch(setSelectedUser(user));
    navigate(USER_INFO_PATH);
  };

  const userData: JSX.Element =
    <>
      <p>{name.first + " " + name.last}</p>
      <p>{formatMessage({ id: gender }) + ", " + dob.age + " " + formatMessage({ id: "years old" })}</p>
      <p>{formatMessage({ id: "Date of birth" }) + ": " + dob.date}</p>
    </>

  return (
    <div className={className} onClick={switchPage}>
      <div className="image-wrapper">
        <img src={picture.large} alt="avatar" />
      </div>
      <div className="text-wrapper">
        {userData}
      </div>
    </div>);
};

export default User;
