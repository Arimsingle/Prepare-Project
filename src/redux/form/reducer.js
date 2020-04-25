const initForm = {
    name: '',
    surname: '',
    email: '',
    username: '',
    password: '',
    repassword: '',
    age: null,
    male: '',
    female: '',
}
export const formReducer = (form = initForm, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...form,
                name: action.name
            }
        case 'CHANGE_SURNAME':
            return {
                ...form,
                surname: action.surname
            }
        case 'CHANGE_EMAIL':
            return {
                ...form,
                email: action.email
            }
        case 'CHANGE_USERNAME':
            return {
                ...form,
                username: action.username
            }
        case 'CHANGE_PASSWORD':
            return {
                ...form,
                password: action.password
            }
        case 'CHANGE_REPASSWORD':
            return {
                ...form,
                repassword: action.repassword
            }
        case 'CHANGE_AGE':
            return {
                ...form,
                age: action.age
            }
        case 'CHANGE_MALE':
            return {
                ...form,
                male: action.male
            }
        case 'CHANGE_FEMALE':
            return {
                ...form,
                female: action.female
            }
        default: return form;
    }
}