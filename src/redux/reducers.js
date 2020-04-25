import { combineReducers } from 'redux'
import { formReducer } from './form/reducer'
import { userReducer } from './user/reducer'
export const reducers = combineReducers({
    form: userReducer,
    users: formReducer
})