import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { UserType } from "../../interfaces";
import { chosenUserSelector, stateSelector } from "../../redux/selectors";
import AdditionalUserInfo from "../AdditionalUserInfo";
import UsersSelect from "../UsersSelect";

const UserInfo = () => {
    const { chosenUser, isAuthorized } = useSelector(stateSelector);

    if (!isAuthorized) {
        return <Navigate to="/login" />
    }

    return (
        chosenUser
            ? <AdditionalUserInfo chosenUser={chosenUser} />
            : <UsersSelect />
    )
}

export default UserInfo;

