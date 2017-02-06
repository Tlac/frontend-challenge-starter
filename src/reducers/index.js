import { combineReducers } from 'redux';
import UserReducer from './reducer_user';

const rootReducer = combineReducters({
    users: UserReducer
});

export default rootReducer;