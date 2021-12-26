import { IntlShape, useIntl } from "react-intl";

import { UserType } from "../../interfaces";
import UserCard from "../UserCard";

import "./style.scss";

interface Props {
  selectedUser: UserType | null;
}

const AdditionalUserInfo: React.FC<Props> = ({ selectedUser }) => {
  const intl: IntlShape = useIntl();
  const format = (id: string): string => intl.formatMessage({ id: id });

  const { email, phone, location, registered } = selectedUser!;
  const optionalTexts: string[] = [
    format("Email") + ': ' + email,
    format("Phone") + ': ' + phone,
    format("Address") + ': ' + location.street.name + ", " + location.street.number,
    format("City") + ": " + location.city + ", " + location.country,
    format("Registration date") + " " + registered.date,
  ];

  return <UserCard user={selectedUser} optionalTexts={optionalTexts} />;
};

export default AdditionalUserInfo;
