import { createStore } from 'redux'
import { reducers } from './reducers'
export const store = state => {
    return createStore(reducers,state)
}