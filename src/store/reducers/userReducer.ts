import {User, UserAction, UserState} from "../../types";

const defaultState: UserState = {
    users: [],
    initUsers: [],
    filteredList: [],
    inputValue: ''
}

export const REMOVE_USER = 'REMOVE_USERS';
export const GET_USERS = 'GET_USERS';
export const RESET_USERS = 'RESET_USERS';
export const SEARCH_USER = 'SEARCH_USER';
export const GET_INPUT_VALUE = 'GET_INPUT_VALUE';

export const userReducer = (state = defaultState, action: UserAction): UserState => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload, initUsers: action.payload, filteredList: action.payload};
        case REMOVE_USER:
            const updatedUsers = state.users.filter((user: User) => user.id !== action.payload);
            const filterUsers = state.filteredList.filter((user: User) => user.id !== action.payload);
            return { ...state, users: updatedUsers, filteredList: filterUsers };
        case RESET_USERS:
            return { ...state, users: state.initUsers, filteredList: state.initUsers, inputValue: '' };
        case GET_INPUT_VALUE:
            return { ...state, inputValue: action.payload };
        case SEARCH_USER:
            const filterText = action.payload.toLowerCase();
            const filteredUsers = state.filteredList.filter(
                (user: User) =>
                    user.name.toLowerCase().includes(filterText) ||
                    user.username.toLowerCase().includes(filterText) ||
                    user.email.toLowerCase().includes(filterText)
            );
            return { ...state, users: filteredUsers};
        default:
            return state;
    }
};
