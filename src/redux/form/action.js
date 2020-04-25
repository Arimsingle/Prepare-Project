export const formActions = {
    onChangeName: (name) => ({ type: 'CHANGE_NAME', name: name }),
    onChangeSurname: (surname) => ({ type: 'CHANGE_SURNAME', surname: surname }),
    onChangeEmail: (email) => ({ type: 'CHANGE_EMAIL', email: email }),
    onChangeUsername: (username) => ({ type: 'CHANGE_USERNAME', username: username }),
    onChangePassword: (password) => ({ type: 'CHANGE_PASSWORD', password: password }),
    onChangeRePassword: (repassword) => ({ type: 'CHANGE_REPASSWORD', repassword: repassword }),
    onChangeAge: (age) => ({ type: 'CHANGE_AGE', age: age }),
    onChangeMale: (male) => ({ type: 'CHANGE_MALE', male: male }),
    onChangeFemale: (female) => ({ type: 'CHANGE_FEMALE', female: female }),
}