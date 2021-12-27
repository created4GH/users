import { useDispatch, useSelector } from "react-redux";

import Button from "../commons/Button/Button";
import UsersSelect from "../UserSelect";
import { resetSelectedUser } from "../../redux/actions";
import { isFetchingFailSelector, selectedUserSelector } from "../../redux/selectors";
import AdditionalUserInfo from "../AdditionalUserInfo";
import { DispatchType, UserType } from "../../interfaces";

import "./style.scss";
import FetchError from "../FetchError";

const UserInfo: React.FC = () => {
    const dispatch = useDispatch<DispatchType>();
    const selectedUser: UserType | null = useSelector(selectedUserSelector);
    const isFetchingFail: boolean = useSelector(isFetchingFailSelector);

    const resetUser = (): void => {
        dispatch(resetSelectedUser());
    };

    if (selectedUser) {
        return (
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
        )
    }
    else if (isFetchingFail) {
        return <FetchError />
    }
    else {
        return <UsersSelect />
    }
};

export default UserInfo;
