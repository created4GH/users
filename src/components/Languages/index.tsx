import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "../commons/Select";
import { DispatchType, Language } from "../../interfaces";
import { LOCALES } from "../../intl/locales";
import { setLocalLanguage } from "../../redux/actions";
import { localLanguageSelector } from "../../redux/selectors";

import "./style.scss";

const Languages: React.FC = () => {
  const dispatch = useDispatch<DispatchType>();
  const localLanguage: Language = useSelector(localLanguageSelector);

  const callback = (item: string): JSX.Element => {
    return (
      <option key={item} className="check">
        {item}
      </option>
    );
  };
  const mappedItems: JSX.Element[] = useMemo(
    () => Object.keys(LOCALES).map(callback),
    [LOCALES]
  );

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const target: string = event.target.value;
    const local: Language = {
      value: LOCALES[target],
      name: target,
    };
    dispatch(setLocalLanguage(local));
  };

  return (
    <Select
      defaultValue={localLanguage.name}
      className="language-select"
      onChange={changeLanguage}
    >
      {mappedItems}
    </Select>
  );
};

export default Languages;
