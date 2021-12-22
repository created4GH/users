import { useMemo } from "react";
import { useIntl } from "react-intl";
import { v4 as uuidv4 } from "uuid";

import { UserType } from "../../interfaces";
import TextSection from "./TextSection";

interface Props {
  user: UserType | null;
  onClick?: () => void;
  optionalTexts?: string[];
}

const UserCard: React.FC<Props> = ({ user, onClick, optionalTexts }) => {
  const intl = useIntl();
  const formatMessage = (id: string) => intl.formatMessage({ id: id });

  const { picture, name, gender, dob, className } = user!;
  const currentClassName = className! + optionalTexts ? " additional-info" : "";
  const texts = [
    `${name.first} ${name.last}`,
    `${formatMessage(gender)}, ${dob.age} ${formatMessage("years old")}`,
    `${formatMessage("Date of birth")}: ${dob.date}`,
  ];

  const callback = (item: string) => <TextSection key={uuidv4()} text={item} />;
  const mappedDefaultItems = useMemo(() => texts.map(callback), [user]);
  const mappedOptionalItems = useMemo(
    () => optionalTexts?.map(callback),
    [user, optionalTexts]
  );

  return (
    <div className={currentClassName} onClick={onClick}>
      <div className="image-wrapper">
        <img src={picture.large} alt="avatar" />
      </div>
      <div className="text-wrapper">
        {mappedDefaultItems}
        {mappedOptionalItems}
      </div>
    </div>
  );
};

export default UserCard;
