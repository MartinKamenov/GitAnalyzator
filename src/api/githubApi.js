import axios from 'axios';
const url = 'https://github-analyzator-api.herokuapp.com/';
const profilePath = 'github/contributions/';
const usersPath = 'github/users/';
const userPath = 'github/user/';
const profileRepoPath = 'github/repositories/';
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
        return axios.get(url + profileRepoPath + username, sendObject);
    },
    getCompareGithubProfiles: (firstUsername, secondUsername, year) => {
        let quertyParam = '?';
        if(year) {
            quertyParam += `year=${year}`;
        }
        const searchUrl = url + profilePath + firstUsername + '/' + secondUsername + quertyParam;
        return axios.get(searchUrl, sendObject);
    },

    getGithubUsersByPage: (page, quertyParam) => {
        let sendQuertyParam = '?pagesize=6';
        if(page) {
            sendQuertyParam += `&page=${page}`;
        } else {
            sendQuertyParam += '&page=1';
        }

        if(quertyParam.username) {
            const username = quertyParam.username;
            if(username) {
                sendQuertyParam += `&username=${username}`;
            }
        }
        if(quertyParam.language) {
            sendQuertyParam += `&language=${quertyParam.language
                .replace('#', '%23')
                .replace('++', '%2B%2B')}`;
        }

        if(quertyParam.sortBy) {
            const sortBy = quertyParam.sortBy;
            sendQuertyParam += `&sortBy=${sortBy}`;
        }

        const searchUrl = url + usersPath + sendQuertyParam;
        return axios.get(searchUrl, sendObject);
    },

    getFullGithubUser: (username) => {
        const searchUrl = url + userPath + username;
        return axios.get(searchUrl, sendObject);
    }
};

export default githubApi;