import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../interfaces";
import { setChosenUser } from "../../redux/actions";
import UserCard from "../UserCard";

import "./style.scss";

interface Props {
    user: UserType;
}

const User = ({ user }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const switchPage = () => {
        dispatch(setChosenUser(user));
        navigate("/userinfo");
    }

    return (
        <UserCard onClick={switchPage} user={user} />
    )
}

export default User;