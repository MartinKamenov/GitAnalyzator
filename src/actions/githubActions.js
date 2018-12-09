import * as types from './actionTypes';
import githubApi from '../api/githubApi';

export function getGithubProfileSuccess(profile) {
    return { type: types.GET_GITHUB_PROFILE_SUCCESS, profile };
}


export function getGithubProfile(username) {
    return async function(dispatch) {
        const res = await githubApi.getGithubProfile(username);
        const profile = res.data;
        return dispatch(getGithubProfileSuccess(profile));
    }
}

export function getCompareGithubProfilesSuccess(profiles) {
    return { type: types.GET_COMPARE_GITHUB_PROFILES_SUCCESS, profiles };
}


export function getCompareGithubProfiles(firstUsername, secondUsername) {
    return async function(dispatch) {
        const res = await githubApi.getGithubProfile(firstUsername, secondUsername);
        const profiles = res.data;
        return dispatch(getCompareGithubProfilesSuccess(profiles));
    }
}