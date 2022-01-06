import { useDispatch, useSelector } from "react-redux";

import Button from "../commons/Button/Button";
import UsersSelect from "../UserSelect";
import { resetSelectedUser } from "../../redux/actions";
import { selectedUserSelector } from "../../redux/selectors";
import { DispatchType, UserType } from "../../interfaces";
import UserCard from "../UserCard";

import "./style.scss";

const UserInfo: React.FC = () => {
    const dispatch = useDispatch<DispatchType>();
    const selectedUser: UserType | null = useSelector(selectedUserSelector);

    const resetUser = (): void => {
        dispatch(resetSelectedUser());
    };

    if (selectedUser) {
        return (
            <div className="additional-info-container">
                <UserCard user={selectedUser} isFullInfo={true}/>
                <div className="select-container">
                    <UsersSelect />
                    <Button
                        innerText="Reset"
                        className="reset-button"
                        onClick={resetUser}
                    />
                </div>
            </div>
        )
    }
    else return <UsersSelect />
};

export default UserInfo;
