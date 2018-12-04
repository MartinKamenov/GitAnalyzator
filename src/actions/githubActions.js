import * as types from './actionTypes';
// import githubApi from '';

export function getGithubProfileSuccess(profile) {
    return { type: types.LOAD_GITHUB_PROFILE_SUCCESS, profile };
}

export function getGithubProfile(username) {
    return async function(dispatch) {
        const profile = await githubApi.getGithubProfile(username);
        return dispatch(getGithubProfileSuccess(profile));
    }
}