import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader";
import User from "../User";
import { UsersType } from "../../interfaces";
import { FETCH_USERS } from "../../redux/types";
import { IsAuthorizedSelector, usersSelector, stateSelector, isFetchingSelector } from "../../redux/selectors";

import "./style.scss"

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector);
    const isFetching = useSelector(isFetchingSelector);

    useEffect(() => {
        dispatch({ type: FETCH_USERS });
    }, [])


    console.log(users)
    return (
        isFetching
            ? <Loader />
            : <div className="users-container">
                {users.length && users.map(item => <User key={item.id.value} user={item} />)}
            </div>
    )
}

export default Users;