import {Dispatch} from "redux";
import {addUsersAction} from "../actions";
import {UserAction} from "../../types";

export const fetchUsers = () => {
    return function (dispatch: Dispatch<UserAction>)  {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch(addUsersAction(json))
            })
    }
}
