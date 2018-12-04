import fetch from '../../node_modules/fetch/lib/fetch';
const url = 'https://github-analyzator-api.herokuapp.com/';
const profilePath = '/github/contributions/';

const githubApi = {
    getGithubProfile: (username) => {
        return fetch(url + profilePath + username, {
            method: "GET"
        });
    }
};

export default githubApi;