import { useMemo } from "react";
import { IntlShape, useIntl } from "react-intl";
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
}

const UserCard: React.FC<Props> = ({ user, onClick, optionalTexts }) => {
  const intl: IntlShape = useIntl();
  const localLanguage = useSelector(localLanguageSelector);
  const format = (id: string): string => intl.formatMessage({ id: id });

  const { picture, name, gender, dob, className } = user!;
  const currentClassName: string = className! + (optionalTexts ? " additional-info" : "");
  const texts: string[] = [
    name.first + " " + name.last,
    format(gender) + ", " + dob.age + " " + format("years old"),
    format("Date of birth") + ": " + dob.date,
  ];

  const callback = (item: string): JSX.Element => <TextSection key={uuidv4()} text={item} />;
  const mappedDefaultItems: JSX.Element[] = useMemo(() => texts.map(callback), [localLanguage, user]);
  const mappedOptionalItems: JSX.Element[] | undefined = useMemo(
    () => optionalTexts?.map(callback),
    [localLanguage, user]
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
