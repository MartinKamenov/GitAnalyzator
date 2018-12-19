import axios from 'axios';
const url = 'https://github-analyzator-api.herokuapp.com/';
const profilePath = 'github/contributions/';
const profileRepoPath = "github/repositories/";
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

    getGithubProfileRepositories: (username) => {
        let quertyParam = '?';
        return axios.get(url + profileRepoPath + username, sendObject);
    },
    getCompareGithubProfiles: (firstUsername, secondUsername, year) => {
        let quertyParam = '?';
        if(year) {
            quertyParam += `year=${year}`;
        }
        const searchUrl = url + profilePath + firstUsername + '/' + secondUsername + quertyParam;
        console.log(searchUrl);
        return axios.get(searchUrl, sendObject);
    }
};

export default githubApi;