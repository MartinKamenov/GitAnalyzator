import * as types from '../actions/actionTypes';

export default function githubUsersReducer(state = {}, action) {
    switch (action.type) {
    case types.GET_FULL_GITHUB_USER_SUCCESS:
        return action.fullUser;
    default:
        return state;
    }
}