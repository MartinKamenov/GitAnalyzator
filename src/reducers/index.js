import { combineReducers } from 'redux';
// import initialState from './initialState';
import profile from './githubReducer';
import profiles from './githubCompareReducer';
import users from './githubUsersReducer';
import fullUser from './githubFullUserReducer';
import repository from './githubRepositoryReducer';

const rootReducer = combineReducers({
    profile,
    profiles,
    users,
    fullUser,
    repository
});

export default rootReducer;