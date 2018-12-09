import React from 'react';
import PropTypes from 'prop-types';

const GithubProfileComparer = ({profiles}) => {
    return ( 
        <div>
            <h2>Profiles comparer</h2>
            <div>{profiles.length}</div>
        </div>
    );
}

GithubProfileComparer.propTypes = {
    profiles: PropTypes.array.isRequired
};
 
export default GithubProfileComparer;