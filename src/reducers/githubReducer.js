import types from '../actions/actionTypes';
import initialState from './initialState';

export default function authors(state = initialState.profile, action) {
  switch (action.type) {
    case types.LOAD_GITHUB_PROFILE_SUCCESS:
      return action.authors;

    default:
      return state;
  }
}