import * as types from '../actions/actionTypes';

export default function githubRepositoryReducer(state = {}, action) {
    switch (action.type) {
    case types.GET_GITHUB_REPOSITORY_SUCCESS:
        return action.repository;
    default:
        return state;
    }
}