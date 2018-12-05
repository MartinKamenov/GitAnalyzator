import * as types from './actionTypes';
import githubApi from '../api/githubApi';

export function getGithubProfileSuccess(profile) {
    return { type: types.LOAD_GITHUB_PROFILE_SUCCESS, profile };
}

export function getGithubProfile(username) {
    return async function(dispatch) {
        const res = await githubApi.getGithubProfile(username);
        console.log(res);
        return dispatch(getGithubProfileSuccess(res.data.data));
    }
}