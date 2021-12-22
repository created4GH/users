import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { useMemo } from "react";

import Select from "../commons/Select";
import { usersSelector } from "../../redux/selectors";
import { UserType } from "../../interfaces";
import { setChosenUser } from "../../redux/actions";
import { formatMessage } from "../../helpers";

import "./style.scss";

const UsersSelect = () => {
    const users = useSelector(usersSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const intl = useIntl();

    const handleSelect = (user: UserType) => {
        dispatch(setChosenUser(user));
        navigate("/userinfo");
    }

    const callback = (item: UserType) => (
        <option
            key={uuidv4()}
            onClick={() => handleSelect(item)}
        >
            {item.name.first} {item.name.last}
        </option>
    );
    const mappedItems = useMemo(() => users.map(callback), [users]);


    return (
        <div className="select-container">
            <p>{formatMessage(intl, "Select user title")}</p>
            <div className="select-wrapper">
                <Select className="users-select">
                    <option hidden>{formatMessage(intl, "Select user")}</option>
                    {mappedItems}
                </Select>
            </div>
        </div>
    )
}

export default UsersSelect;
