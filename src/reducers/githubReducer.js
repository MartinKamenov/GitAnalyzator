import * as types from '../actions/actionTypes';
// import initialState from './initialState';

export default function github(state = {}, action) {
  switch (action.type) {
    case types.LOAD_GITHUB_PROFILE_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}