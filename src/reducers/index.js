import { combineReducers } from 'redux';
import register from './registerReducer';
import global from './globalReducer';
import account from './accountPageReducer';

export default combineReducers({
    register,
    global,
    account
});
