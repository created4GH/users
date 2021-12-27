import { Dispatch } from "react";

export interface UserType {
    name: { title: string, first: string, last: string };
    email: string;
    phone: string;
    gender: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    nat: string;
    className?: string;
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    location: {
        street: {
            number: number;
            name: string;
        },
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        }
        timezone: {
            description: string;
            offset: string;
        }
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
}

export interface Language {
    value: string;
    name: string;
};

export type DispatchType = Dispatch<{ [key: string]: UserType | string | number | boolean | Language }>
export type RootReducer = (state: InitialState | undefined,
    { type, users, isAuthorized, selectedUser, isUsers, localLanguage, isFetching }:
        Action) => InitialState;

export interface InitialState {
    users: UserType[];
    isAuthorized: boolean;
    isFetching: boolean;
    selectedUser: UserType | null;
    isUsers: boolean;
    localLanguage: {
        value: string;
        name: string;
    };
    isFetchingFail: boolean;
}

export interface Action extends InitialState {
    type: string;
    payload: string | number | boolean | UserType[] | Language;
}