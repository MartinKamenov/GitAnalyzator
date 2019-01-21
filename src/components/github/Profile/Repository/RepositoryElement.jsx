import React from 'react';
import PropTypes from 'prop-types';

const RepositoryElement = ({ username, repo }) => {
    return (
        <a href={'https://github.com/' + username + '/' + repo.name}
            className="col-md-6">
            <h3>{repo.name}</h3>
            <div>{repo.programmingLanguage}</div>
        </a>
    );
};

RepositoryElement.propTypes = {
    username: PropTypes.string.isRequired,
    repo: PropTypes.shape({   
        name: PropTypes.string.isRequired,
        programmingLanguage: PropTypes.string
    }).isRequired
};
 
export default RepositoryElement;