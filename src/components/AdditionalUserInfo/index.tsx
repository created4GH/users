import { useIntl } from "react-intl";

import { UserType } from "../../interfaces";
import UserCard from "../UserCard";

import "./style.scss";

interface Props {
    chosenUser: UserType | null;
}

const AdditionalUserInfo = ({ chosenUser }: Props) => {
    const intl = useIntl();
    const formatMessage = (id: string) => intl.formatMessage({ id: id });

    const { email, phone, location, registered } = chosenUser!;
    const optionalTexts = [
        `${formatMessage("Email")}: ${email}`,
        `${formatMessage("Phone")}: ${phone}`,
        `${formatMessage("Address")}: ${location.street.name}, ${location.street.number}`,
        `${formatMessage("City")}: ${location.city}, ${location.country}`,
        `${formatMessage("With us")}: ${registered.age} ${formatMessage("years")}
        (${formatMessage("registered on")} ${registered.date})`,
    ]

    return (
        <UserCard user={chosenUser} optionalTexts={optionalTexts} />
    )
}

export default AdditionalUserInfo;