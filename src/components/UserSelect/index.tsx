import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { useMemo } from "react";

import Select from "../commons/Select";
import { usersSelector } from "../../redux/selectors";
import { DispatchType, UserType } from "../../interfaces";
import { setSelectedUser } from "../../redux/actions";
import { findUserByName } from "../../helpers";
import { USER_INFO_PATH } from "../../constants/pathes";

const UserSelect: React.FC = () => {
  const users: UserType[] = useSelector(usersSelector);
  const dispatch = useDispatch<DispatchType>();
  const navigate: NavigateFunction = useNavigate();
  const {formatMessage} = useIntl();


  const selectUser = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const valueName = event.target.value;
    const user = findUserByName(users, valueName)!;
    dispatch(setSelectedUser(user));
    navigate(USER_INFO_PATH);
  };

  const callback = (item: UserType): JSX.Element => (
    <option key={uuidv4()}>
      {item.name.first} {item.name.last}
    </option>
  );
  const mappedItems: JSX.Element[] = useMemo(() => users.map(callback), [users]);

  return (
    <div className="select-wrapper">
      <p>{formatMessage({id:"Please select user"})}</p>
      <Select className="users-select" onChange={selectUser}>
        <option hidden>{formatMessage({id:"Select user"})}</option>
        {mappedItems}
      </Select>
    </div>
  );
};

export default UserSelect;
