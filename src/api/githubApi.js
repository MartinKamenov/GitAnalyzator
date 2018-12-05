import axios from 'axios';
const url = 'https://github-analyzator-api.herokuapp.com/';
const profilePath = '/github/contributions/';

const githubApi = {
    getGithubProfile: (username) => {
        return axios.get(url + profilePath + username);
    }
};

export default githubApi;