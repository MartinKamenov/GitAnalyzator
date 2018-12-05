import * as types from '../actions/actionTypes';

export default function github(state = {}, action) {
  switch (action.type) {
    case types.LOAD_GITHUB_PROFILE_SUCCESS:
      return action.profile;

    default:
      return state;
  }
}