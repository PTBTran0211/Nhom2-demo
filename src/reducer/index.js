import { combineReducers } from 'redux';
import user from './user'
import data from './data'
const myReducer = combineReducers({
    user,
    data
})
export default myReducer