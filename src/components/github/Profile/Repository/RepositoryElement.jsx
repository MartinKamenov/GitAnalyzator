import React from 'react';
import PropTypes from 'prop-types';

const RepositoryElement = ({ username, repo }) => {
    return (
        <a href={'https://github.com/' + username + '/' + repo.name}
            className="col-md-6">
            <div className='repo-wrapper'>
                <img
                    className='programming-language-img'
                    src='https://avatars1.githubusercontent.com/u/47313?s=460&v=4'
                    href={username}>
                </img>
                <h3>{repo.name}</h3>
                <div>{repo.programmingLanguage}</div>
            </div>
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