import { combineReducers } from 'redux';
// import initialState from './initialState';
import profile from './githubReducer';
import profiles from './githubCompareReducer';
import users from './githubUsersReducer';

const rootReducer = combineReducers({
    profile,
    profiles,
    users
});

export default rootReducer;