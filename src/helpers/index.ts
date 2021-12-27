import axios from "axios";
import { IntlShape } from "react-intl";

import { URL } from "../constants/url";
import { UserType } from "../interfaces";

export const convertDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

export const formatMessage = (intl: IntlShape, id: string): string => {
  return intl.formatMessage({ id: id });
};

export const formatData = (data: UserType[]): UserType[] => {
  return data.map((item) => {
    const genderColor = item.gender === "male" ? "blue" : "pink";
    const className = "user-card " + genderColor;
    return {
      ...item,
      dob: {
        ...item.dob,
        date: convertDate(item.dob.date),
      },
      registered: {
        ...item.registered,
        date: convertDate(item.registered.date),
      },
      className,
    };
  });
};

export const fetchData = async (url: string): Promise<UserType[]> => {
  const response = axios.get(url);
  const data = (await response).data;
  const results = data.results;
  return results;
};

export const findUserByName = (users: UserType[], valueName: string): UserType | undefined => {
  return users.find(({ name }) => {
    const itemName = name.first + " " + name.last;
    return itemName === valueName;
  });
};

export const createURLQuery = (url: string, query: number): string => {
  return url + query;
}