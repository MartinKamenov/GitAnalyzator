import React from 'react';
import PropTypes from 'prop-types';
import './css/githubProfileLink.css';

const GithubProfileLink = ({ username }) => (
    <div className="user-link">
        <h3>
            <a href={'/profile/' + username}>
                <span data-hover={username}>{username}</span>
            </a>
        </h3>
    </div>
);

GithubProfileLink.propTypes = {
    username: PropTypes.string.isRequired
};
 
export default GithubProfileLink;