import * as types from '../actions/actionTypes';

export default function githubUsersReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_GITHUB_USERS_PAGE_SUCCESS:
            return action;
        default:
            return state;
    }
}