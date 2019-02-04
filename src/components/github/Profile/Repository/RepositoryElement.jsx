import React from 'react';
import PropTypes from 'prop-types';
import ProgrammingLanguageImages from '../../../contracts/ProgrammingLanguageImages';

const RepositoryElement = ({ username, repo }) => {
    if(!repo.description) {
        repo.description = '';
    }

    return (
        <a href={'https://github.com/' + username + '/' + repo.name}
            className="col-md-6 repo-container">
            <div className='repo-wrapper'>
                <img
                    className='programming-language-img'
                    src={ProgrammingLanguageImages.getImageSrc(repo.programmingLanguage)}
                    href={username}>
                </img>
                <h3>{repo.name.substring(0, 25)}</h3>
                
                <div className='programming-language'>{repo.programmingLanguage}</div>
                <p1>{repo.description}</p1>
            </div>
        </a>
    );
};

RepositoryElement.propTypes = {
    username: PropTypes.string.isRequired,
    repo: PropTypes.shape({   
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        programmingLanguage: PropTypes.string
    }).isRequired
};

 
export default RepositoryElement;