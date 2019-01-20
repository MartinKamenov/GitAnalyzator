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

    getGithubUsersByPage: (page, searchParams, sortParams) => {
        let quertyParam = '?pagesize=6';
        if(page) {
            quertyParam += `&page=${page}`;
        } else {
            quertyParam += '&page=1';
        }

        if(searchParams) {
            const username = searchParams.username;
            quertyParam += `&username=${username}`;
        }

        if(sortParams) {
            const sortBy = sortParams.sortBy;
            quertyParam += `&sortBy=${sortBy}`;
        }

        const searchUrl = url + usersPath + quertyParam;
        return axios.get(searchUrl, sendObject);
    },

    getFullGithubUser: (username) => {
        const searchUrl = url + userPath + username;
        return axios.get(searchUrl, sendObject);
    }
};

export default githubApi;