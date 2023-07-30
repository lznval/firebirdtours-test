export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface UserState {
    users: User[],
    initUsers: User[],
    filteredList: User[],
    inputValue: string
}

export interface UserAction {
    type: string,
    payload?: any
}

export interface UserItemInterface {
    user: User,
    removeCustomer: (user: User) => void,
    openModalClick: (user: User) => void,
    key: number
}
