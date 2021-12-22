import axios from "axios";
import { IntlShape } from "react-intl";

import { URL } from "../constants/url";
import { UserType } from "../interfaces";

export const convertDate = (date: string) => {
    return new Date(date).toLocaleDateString();
}

export const formatMessage = (intl: IntlShape, id: string) => intl.formatMessage({ id: id });

export const formatData = (data: UserType[]) => {
    return data.map(item => {
        const genderColor = item.gender === "male" ? "blue" : "pink";
        const className = "user-item " + genderColor;
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
}

export const fetchData = async (pageNumber: number) => {
    const response = axios.get(createCustomPageURL(pageNumber));
    const data = (await response).data;
    const results = data.results;
    return results;
};

export const createCustomPageURL = (pageNumber: number) => URL + `?page=${pageNumber}&results=10&seed=a`;