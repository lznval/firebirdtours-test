import React from 'react';
import {removeUserAction} from "../store/actions";
import {useDispatch} from "react-redux";
import UserItem from "./UserItem/UserItem";
import {User} from "../types";

interface UserListInterface {
    users: User[]
    openModal: (user: User) => void
}

const UserList = ({users, openModal}: UserListInterface) => {
    const dispatch = useDispatch();
    const openModalClick = (user:User) => {
        openModal(user)
    }
    const removeCustomer = (user: User) => {
        dispatch(removeUserAction(user.id))
    }
    return (
        <>
            {users.length > 0 ?
                <div>
                    {users.map((user, key) =>
                        <UserItem user={user} key={key} removeCustomer={removeCustomer} openModalClick={openModalClick} />
                    )}
                </div>
                :
                <div>Пользователей нет</div>
            }
        </>
    );
};

export default UserList;
