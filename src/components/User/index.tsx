import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../interfaces";
import { setChosenUser } from "../../redux/actions";

import "./style.scss";

interface Props {
    user: UserType;
}

const User = ({ user }: Props) => {
    const { picture, name, gender, dob, className } = user;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const switchPage = () => {
        dispatch(setChosenUser(user));
        navigate("/userinfo");
    }

    return (
        <div className={className} onClick={switchPage}>
            <div className="image-wrapper">
                <img src={picture.large} alt="avatar" />
            </div>
            <div className="text-wrapper">
                <div className="user-item section">{name.first} {name.last}</div>
                <div className="user-item section">{gender}, {dob.age} years old</div>
                <div className="user-item section">Date of birth: {dob.date}</div>
            </div>
        </div>
    )
}

export default User;