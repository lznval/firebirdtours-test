import './style.scss';
import React from "react";
import {User} from "../../types";

interface ModalInterface {
    selectedUser: User | null,
    closeModal: () => void,
    isOpen: boolean,
}
const Modal = ({selectedUser, closeModal, isOpen}: ModalInterface) => {
    if (!isOpen) {
        return null;
    }
    return (
        <>
            {selectedUser &&
                <div className="modal">
                    <div className="modal__wrapper">
                        <div className="modal__info">
                            <p>Адрес пользователя:</p>
                            <span>{selectedUser.address.street}</span>, <span>{selectedUser.address.street}</span>, {selectedUser.address.suite}
                        </div>
                        <div className="modal__info">
                            <p>Название компании:</p>
                            <span>{selectedUser.company.name}</span>
                        </div>
                        <div onClick={closeModal} className="modal__close">&times;</div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;
