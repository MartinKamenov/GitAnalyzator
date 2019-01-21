import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepositoryElement from './RepositoryElement';

const RepositoryList = ({ username, repositories }) => ( 
    <div className='row'>
        {repositories.map((repo, i) => {
            return <RepositoryElement key={i} username={username} repo={repo}/>;
        })}
    </div>
);

RepositoryList.propTypes = {
    username: PropTypes.string.isRequired,
    repositories: PropTypes.array
};
 
export default RepositoryList;