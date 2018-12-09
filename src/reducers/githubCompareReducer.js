import * as types from '../actions/actionTypes';

export default function githubCompareReducer(state = {}, action) {
  switch (action.type) {

    case types.GET_COMPARE_GITHUB_PROFILES_SUCCESS:
      return action.profiles;

    default:
      return state;
  }
}