import React from 'react';
import PropTypes from 'prop-types';
import RepositoryElement from './RepositoryElement';
import NotFoundComponent from '../../Common/NotFoundComponent';
import './css/repositories.css';

const RepositoryList = ({ username, repositories }) => {
    if(repositories.length === 0) {
        return <NotFoundComponent field='repositories'/>;
    }
    return (
        <div className='row'>
            {repositories.map((repo, i) => {
                return <RepositoryElement key={i} username={username} repo={repo}/>;
            })}
        </div>
    );
};

RepositoryList.propTypes = {
    username: PropTypes.string.isRequired,
    repositories: PropTypes.array
};
 
export default RepositoryList;