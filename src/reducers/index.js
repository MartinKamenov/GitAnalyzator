import { combineReducers } from 'redux';
// import initialState from './initialState';
import profile from './githubReducer';

const rootReducer = combineReducers({
    profile
});

export default rootReducer;