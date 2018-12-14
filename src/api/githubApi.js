import axios from 'axios';
const url = 'https://github-analyzator-api.herokuapp.com/';
const profilePath = 'github/contributions/';
const sendObject = {
	headers: {
	  'Access-Control-Allow-Origin': '*'
    }
};

const githubApi = {
    getGithubProfile: (username, year) => {
        let quertyParam = '?';
        if(year) {
            quertyParam += `year=${year}`;
        }
        return axios.get(url + profilePath + username + quertyParam, sendObject);
    },
    getCompareGithubProfiles: (firstUsername, secondUsername) => {
        return axios.get(url + profilePath + firstUsername + '/' + secondUsername);
    }
};

export default githubApi;