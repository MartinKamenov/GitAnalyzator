import { combineReducers } from 'redux';
// import initialState from './initialState';
import profile from './githubReducer';
import profiles from './githubCompareReducer';

const rootReducer = combineReducers({
    profile,
    profiles
});

export default rootReducer;