import { useDispatch, useSelector } from "react-redux";

import Button from "../commons/Button/Button";
import UsersSelect from "../UsersSelect";
import { resetSelectedUser } from "../../redux/actions";
import { selectedUserSelector } from "../../redux/selectors";
import AdditionalUserInfo from "../AdditionalUserInfo";

import "./style.scss";

const UserInfo: React.FC = () => {
    const dispatch = useDispatch();
    const selectedUser = useSelector(selectedUserSelector);

    const resetUser = () => {
        dispatch(resetSelectedUser());
    };

    const element = selectedUser ? (
        <div className="additional-info-container">
            <AdditionalUserInfo selectedUser={selectedUser} />
            <div className="select-container">
                <UsersSelect />
                <Button
                    innerText="Reset"
                    className="reset-button"
                    onClick={resetUser}
                />
            </div>
        </div>
    ) : (
        <UsersSelect />
    );

    return element;
};

export default UserInfo;
