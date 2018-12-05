import { combineReducers } from 'redux';
// import initialState from './initialState';
import github from './githubReducer';

const rootReducer = combineReducers({
    github
});

export default rootReducer;