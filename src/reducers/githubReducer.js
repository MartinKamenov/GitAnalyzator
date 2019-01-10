import * as types from '../actions/actionTypes';

export default function githubReducer(state = {}, action) {
    switch (action.type) {

    case types.GET_GITHUB_PROFILE_SUCCESS:
        return action.profile;

    default:
        return state;
    }
}