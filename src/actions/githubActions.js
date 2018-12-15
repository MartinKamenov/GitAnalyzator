import * as types from './actionTypes';
import githubApi from '../api/githubApi';

export function getGithubProfileSuccess(profile) {
    return { type: types.GET_GITHUB_PROFILE_SUCCESS, profile };
}


export function getGithubProfile(username, year) {
    return async function(dispatch) {
        const res = await githubApi.getGithubProfile(username, year);
        const profile = res.data;
        return dispatch(getGithubProfileSuccess(profile));
    }
}

export function getCompareGithubProfilesSuccess(profiles) {
    return { type: types.GET_COMPARE_GITHUB_PROFILES_SUCCESS, profiles };
}


export function getCompareGithubProfiles(firstUsername, secondUsername, year) {
    return async function(dispatch) {
        const res = await githubApi.getCompareGithubProfiles(firstUsername, secondUsername, year);
        const profiles = res.data;
        return dispatch(getCompareGithubProfilesSuccess(profiles));
    }
}