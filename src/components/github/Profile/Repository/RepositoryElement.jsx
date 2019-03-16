import React from 'react';
import PropTypes from 'prop-types';
import ProgrammingLanguageImages from '../../../contracts/ProgrammingLanguageImages';
import { FaStar } from 'react-icons/fa';
const repositoryUrl = '/repository/';

const RepositoryElement = ({ username, repo }) => {
    const description = repo.description ? repo.description : '';

    return (
        <a href={repositoryUrl + username + '/' + repo.name}
            className="col-md-6 repo-container">
            <div className='repo-wrapper'>
                <img
                    alt="username"
                    className='programming-language-img'
                    src={ProgrammingLanguageImages.getImageSrc(repo.programmingLanguage)}
                    href={username}>
                </img>
                {
                    (() => {
                        if(repo.starsCount) {
                            return <div className='stars-container'><FaStar/>{repo.starsCount}</div>;
                        }
                    })()
                }
                <h3 style={{marginTop: '5px'}}>{repo.name.substring(0, 25)}</h3>
                
                <div className='programming-language'>{repo.programmingLanguage}</div>
                <p1>{description}</p1>
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