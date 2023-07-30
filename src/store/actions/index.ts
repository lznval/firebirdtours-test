import {User} from "../../types";
import {GET_INPUT_VALUE, GET_USERS, REMOVE_USER, RESET_USERS, SEARCH_USER} from "../reducers/userReducer";

export const removeUserAction = (payload: number) => ({
    type: REMOVE_USER,
    payload
})

export const addUsersAction = (payload: User) => ({
    type: GET_USERS,
    payload
})

export const filterUsers = (payload: string) => ({
    type: SEARCH_USER,
    payload
})

export const resetUsers = () => ({
    type: RESET_USERS
})

export const setFilterText = (payload:string) => ({
    type: GET_INPUT_VALUE,
    payload
});
