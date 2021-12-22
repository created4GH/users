import { useDispatch, useSelector } from "react-redux";
import { resetChosenUser } from "../../redux/actions";
import { chosenUserSelector } from "../../redux/selectors";
import AdditionalUserInfo from "../AdditionalUserInfo";
import Button from "../commons/Button/Button";
import UsersSelect from "../UsersSelect";

import "./style.scss";

const UserInfo = () => {
    const dispatch = useDispatch();
    const chosenUser = useSelector(chosenUserSelector);

    const resetSelectedUser = () => {
        dispatch(resetChosenUser());
    }

    return (
        chosenUser
            ? <>
                <AdditionalUserInfo chosenUser={chosenUser} />
                <UsersSelect />
                <Button innerText="Reset" className="reset-button" onClick={resetSelectedUser} />
            </>
            : <UsersSelect />
    )
}

export default UserInfo;

