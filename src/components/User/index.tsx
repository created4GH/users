import { UsersType } from "../../interfaces";

import "./style.scss";

interface Props {
    user: UsersType;
}

const User = ({ user }: Props) => {
    const { picture, name, gender, dob } = user;
    return (
        <div className="user-item">
            < img src={picture.large} alt="avatar" />
            <p>Name: {name.first}</p>
            <p>Surname: {name.last}</p>
            <p>Gender: {gender}</p>
            <p>Date of birth: {dob.date}</p>
            <p>Age: {dob.age}</p >
        </div>
    )
}

export default User;


{/* <div className="card-item" key={uuidv4()}>
< img src={item.picture.large} alt="avatar" />
<p>Name: {item.name.first} Surname: {item.name.last}</p>
<p>Gender: {item.gender}</p>
<p>Email: {item.email}</p>
<p>
    <p>Date of birth: {item.dob.date}</p>
    <p>Age: {item.dob.age}</p >
</p >
<p>Phone: {item.phone}</p>
<p>Address:
    <p>Street: {item.location.street.name + ", " + item.location.street.number}</p>
    <p>City: {item.location.city}</p>
    <p>State: {item.location.state}</p>
    <p>Country: {item.location.country}</p>
</p>
<p>Registration date:
    <p>Registrered on: {item.registered.date}</p>
    <p>With us: {item.registered.age}</p>
</p>
</div> */}