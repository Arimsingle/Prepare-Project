export const usersActions = {
    getUser: users => ({ type: 'GET_BEARS_SUCCESS', users: users }),
    addUser: (users, form) => ({type: 'ADD_USER', users: users}),
    deleteUser: (id) => ({ type: 'DELETE_USER', id: id }),
    updateUser: (id, form) => ({ type: 'UPDATE_USER', id: id, user: { ...form, id: id } })
}