import { IS_AUTHORIZED, SET_USERS } from "../types"

import { UsersType } from "../../interfaces"

export const setIsAuthorized = (payload: boolean) => {
    return {
        type: IS_AUTHORIZED,
        payload
    }
}

export const setUsers = (payload?: UsersType) => {
    return {
        type: SET_USERS
    }
}