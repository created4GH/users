import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { useMemo } from "react";

import Select from "../commons/Select";
import { usersSelector } from "../../redux/selectors";
import { UserType } from "../../interfaces";
import { setselectedUser } from "../../redux/actions";
import { findUserByName, formatMessage } from "../../helpers";
import { USER_INFO_PATH } from "../../constants/pathes";

const UsersSelect: React.FC = () => {
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intl = useIntl();

  const selectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const valueName = event.target.value;
    const user = findUserByName(users, valueName)!;
    dispatch(setselectedUser(user));
    navigate(USER_INFO_PATH);
  };

  const callback = (item: UserType) => (
    <option key={uuidv4()}>
      {item.name.first} {item.name.last}
    </option>
  );
  const mappedItems = useMemo(() => users.map(callback), [users]);

  const element = (
    <div className="select-wrapper">
      <p>{formatMessage(intl, "Please select user")}</p>
      <Select className="users-select" onChange={selectUser}>
        <option hidden>{formatMessage(intl, "Select user")}</option>
        {mappedItems}
      </Select>
    </div>
  );

  return element;
};

export default UsersSelect;
