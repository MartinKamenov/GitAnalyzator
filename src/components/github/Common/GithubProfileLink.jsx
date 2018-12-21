import React from 'react';
import PropTypes from 'prop-types';
import './css/githubProfileLink.css';

const GithubProfileLink = ({ username }) => ( 
    <div className="user-link">
        <h2>
            <a href={"https://github.com/" + username}>
                <span>{username}</span>
            </a>
        </h2>
    </div>
);

GithubProfileLink.propTypes = {
    username: PropTypes.string.isRequired
};
 
export default GithubProfileLink;