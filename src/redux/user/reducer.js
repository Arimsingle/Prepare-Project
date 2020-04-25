const inituser = []
export const userReducer = (users = inituser, action) => {
    switch (action.type) {
        case 'GET_USER':
            return [...users, action.users]
        case 'ADD_USER':
            return [...users, action.users]
        case 'DELETE_USER':
            return users.filter((user, index) => +user.email !== +action.email)
        case 'UPDATE_USER':
            return users.map((user, index) => {
                if (+user.id === +action.id) {
                    return action.user;
                }
                else {
                    return user;
                }
            })
        default: return users
    }
}