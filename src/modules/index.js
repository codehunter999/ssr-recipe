import { combineReducers } from 'redux'; // Root Reducer
import users from './users';

const rootReducer = combineReducers({
    users
});

export default rootReducer;