import axios from 'axios';
const url = 'https://github-analyzator-api.herokuapp.com/';
const profilePath = 'github/contributions/';
const sendObject = {
	headers: {
	  'Access-Control-Allow-Origin': '*'
    }
};

const githubApi = {
    getGithubProfile: (username) => {
        return axios.get(url + profilePath + username, sendObject);
    }
};

export default githubApi;