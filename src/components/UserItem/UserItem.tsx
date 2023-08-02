import React from 'react';
import {highlightMatches} from "../../libs/highlightMatches";
import './style.scss';
import {UserItemInterface} from "../../types";
import {useTypesSelector} from "../../hooks/useTypesSelector";

const UserItem = ({user, removeCustomer, openModalClick, key}: UserItemInterface) => {
    const {inputValue} = useTypesSelector((state) => state.users);
    return (
        <div key={key} className="user">
            <div className="user__data">
                <div className="user__item">
                    <span className="user__label">Имя:</span>
                    <span className="user__value">{highlightMatches(user.name, inputValue)}</span>
                </div>
                <div className="user__item">
                    <span className="user__label">Никнейм:</span>
                    <span className="user__value">{highlightMatches(user.username, inputValue)}</span>
                </div>
                <div className="user__item">
                    <span className="user__label">Почта:</span>
                    <span className="user__value">{highlightMatches(user.email, inputValue)}</span>
                </div>
            </div>
            <div className="user__buttons">
                <button onClick={() => openModalClick(user)}>Открыть юзера</button>
                <button onClick={() => removeCustomer(user)}>Удалить юзера</button>
            </div>
        </div>
    );
};

export default UserItem;
