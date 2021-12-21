import { UserType } from "../../interfaces";

import "./style.scss";

interface Props {
    chosenUser: UserType | null;
}

const AdditionalUserInfo = ({ chosenUser }: Props) => {
    const { picture, name, gender, dob, email, phone, location, registered, className } = chosenUser!;
    const currentClassName = className + " additional-info";
    return (
        <div className={currentClassName}>
            <div className="image-wrapper">
                < img src={picture.large} alt="avatar" />
            </div>
            <div className="user-item section">{name.first} {name.last}</div>
            <div className="user-item section">{gender}, {dob.age} years old</div>
            <div className="user-item section">Date of birth: {dob.date}</div>
            <div className="user-item section">Email: {email}</div>
            <div className="user-item section">Phone: {phone}</div>
            <div className="user-item section">Address: {location.street.name + ", " + location.street.number}</div>
            <div className="user-item section">City: {location.city}, {location.state}, {location.country}</div>
            <div className="user-item section">With us: {registered.age} years (registered on {registered.date})</div>
        </div >
    )
}

export default AdditionalUserInfo;