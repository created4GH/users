import { useIntl } from "react-intl";

import { UserType } from "../../interfaces";

interface Props {
  user: UserType;
}

const User: React.FC<Props> = ({ user }) => {
  const { formatMessage } = useIntl();
  const { picture, name, gender, dob, className, email, phone, location, registered } = user;
  const currentClassName: string = className + " additional-info";

  const userData: JSX.Element =
    <>
      <p>{name.first + " " + name.last}</p>
      <p>{formatMessage({ id: gender }) + ", " + dob.age + " " + formatMessage({ id: "years old" })}</p>
      <p>{formatMessage({ id: "Date of birth" }) + ": " + dob.date}</p>
      <p>{formatMessage({ id: "Email" }) + ': ' + email}</p>
      <p>{formatMessage({ id: "Phone" }) + ': ' + phone}</p>
      <p>{formatMessage({ id: "Address" }) + ': ' + location.street.name + ", " + location.street.number}</p>
      <p>{formatMessage({ id: "City" }) + ": " + location.city + ", " + location.country}</p>
      <p>{formatMessage({ id: "Registration date" }) + " " + registered.date}</p>
    </>

  return (
    <div className={currentClassName}>
      <div className="image-wrapper">
        <img src={picture.large} alt="avatar" />
      </div>
      <div className="text-wrapper">
        {userData}
      </div>
    </div>);
};

export default User;
