import { useMemo } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { UserType } from "../../interfaces";
import { localLanguageSelector } from "../../redux/selectors";
import TextSection from "./TextSection";

import "./style.scss";

interface Props {
  user: UserType | null;
  onClick?: () => void;
  optionalTexts?: string[];
  isFullInfo?: boolean;
}

const UserCard: React.FC<Props> = ({ user, onClick, isFullInfo }) => {
  const {formatMessage} = useIntl();
  const localLanguage = useSelector(localLanguageSelector);

  let userInfo : string[];
  const { picture, name, gender, dob, className } = user!;
  const currentClassName: string = className! + (isFullInfo ? " additional-info" : "");
  const defaultInfo: string[] = [
    name.first + " " + name.last,
    formatMessage({id: gender}) + ", " + dob.age + " " + formatMessage({id: "years old"}),
    formatMessage({id: "Date of birth"}) + ": " + dob.date,
  ];

  switch(isFullInfo){
    case(true):
    const { email, phone, location, registered } = user!; 
    userInfo = [...defaultInfo,
      formatMessage({id: "Email"}) + ': ' + email,
      formatMessage({id: "Phone"}) + ': ' + phone,
      formatMessage({id: "Address"}) + ': ' + location.street.name + ", " + location.street.number,
      formatMessage({id: "City"}) + ": " + location.city + ", " + location.country,
      formatMessage({id: "Registration date"}) + " " + registered.date,];
      break;
      default:
        userInfo = defaultInfo;
  }

  const callback = (item: string): JSX.Element => <TextSection key={uuidv4()} text={item} />;
  const mappedItems: JSX.Element[] = useMemo(() => userInfo.map(callback), [localLanguage, user]);

  return (
    <div className={currentClassName} onClick={onClick}>
      <div className="image-wrapper">
        <img src={picture.large} alt="avatar" />
      </div>
      <div className="text-wrapper">
        {mappedItems}
      </div>
    </div>
  );
};

export default UserCard;
