import { IntlShape, useIntl } from "react-intl";

import { UserType } from "../../interfaces";
import UserCard from "../UserCard";

import "./style.scss";

interface Props {
  selectedUser: UserType | null;
}

const AdditionalUserInfo: React.FC<Props> = ({ selectedUser }) => {
  const intl: IntlShape = useIntl();
  const formatMessage = (id: string): string => intl.formatMessage({ id: id });

  const { email, phone, location, registered } = selectedUser!;
  const optionalTexts: string[] = [
    `${formatMessage("Email")}: ${email}`,
    `${formatMessage("Phone")}: ${phone}`,
    `${formatMessage("Address")}: ${location.street.name}, ${location.street.number
    }`,
    `${formatMessage("City")}: ${location.city}, ${location.country}`,
    `${formatMessage("Registration date")} ${registered.date}`,
  ];

  return <UserCard user={selectedUser} optionalTexts={optionalTexts} />;
};

export default AdditionalUserInfo;
