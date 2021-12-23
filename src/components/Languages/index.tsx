import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "../commons/Select";
import { Language } from "../../interfaces";
import { LOCALES } from "../../intl/locales";
import { setLocalLanguage } from "../../redux/actions";
import { localLanguageSelector } from "../../redux/selectors";

import "./style.scss";

const Languages: React.FC = () => {
  const dispatch = useDispatch();
  const localLanguage = useSelector(localLanguageSelector);

  const callback = (item: string) => {
    return (
      <option key={item} className="check">
        {item}
      </option>
    );
  };
  const mappedItems = useMemo(
    () => Object.keys(LOCALES).map(callback),
    [LOCALES]
  );

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target.value;
    const local: Language = {
      value: LOCALES[target],
      name: target,
    };
    console.log(local)
    const setItem = JSON.stringify(local);
    localStorage.setItem("intl-language", setItem);
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
