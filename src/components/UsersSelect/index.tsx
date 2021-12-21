import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../redux/selectors";
import { v4 as uuidv4 } from 'uuid';
import { UserType } from "../../interfaces";
import { setChosenUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

import "./style.scss";

const UsersSelect = () => {
    const users = useSelector(usersSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelect = (user: UserType) => {
        dispatch(setChosenUser(user));
        navigate("/userinfo");
    }

    return (
        <div className="select-container">
            <p>Please select a user to see his full information</p>
            <div className="select-wrapper">
                <select className="users-select">
                    <option hidden>Select User</option>
                    {users.map(item =>
                        <option
                            key={uuidv4()}
                            onClick={() => handleSelect(item)}
                        >
                            {item.name.first} {item.name.last}
                        </option>)}
                </select>
            </div>
        </div>
    )
}

export default UsersSelect;