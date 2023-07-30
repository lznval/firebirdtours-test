import {useDispatch} from "react-redux";
import './global.scss';
import {
    filterUsers,
    resetUsers,
    setFilterText
} from "./store/actions";
import {fetchUsers} from "./store/asyncAction/users";
import {ChangeEvent, useEffect, useState} from "react";
import Modal from "./components/Modal/Modal";
import UserList from "./components/UserList";
import {User} from "./types";
import {useTypesSelector} from "./hooks/useTypesSelector";

const App = () => {
    const dispatch: any = useDispatch();
    const {users, inputValue,} = useTypesSelector((state) => state.users);

    const [open, setOpen] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    let body:HTMLElement | null = document.querySelector('body');
    if (open && body) {
        body.classList.add('hidden');
    } else {
        body && body.classList.remove('hidden');
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchUsers())
        }, 500)
    }, []);

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        const filterText = event.target.value;
        dispatch(filterUsers(filterText));
        dispatch(setFilterText(filterText));
    };

    const reset = () => {
        dispatch(resetUsers())
    };

    const openModal = (user: User) => {
        setOpen(true);
        setSelectedUser(user);
    };

    const closeModal = () => {
        setOpen(false)
    };

    return (
        <div className="wrapper">
            <div className="reset">
                <button onClick={() => reset()}>Сбросить список пользователей</button>
            </div>
            <input placeholder='Поиск...' type="text" value={inputValue} onChange={handleFilterChange} />
            {open ? <Modal isOpen={open} selectedUser={selectedUser} closeModal={closeModal} /> : ''}
            <UserList users={users} openModal={openModal} />
        </div>
    );
}

export default App;
