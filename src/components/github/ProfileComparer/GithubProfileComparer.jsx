import React from 'react';
import PropTypes from 'prop-types';

const GithubProfileComparer = ({profiles}) => {
    return ( 
        <div>
            <h2>Profiles comparer</h2>
            <div>{
                (() => {
                    if(profiles) {
                        return <div>{profiles.length}</div>;
                    } else {
                        return <div>Fetching data...</div>;
                    }
                })()
            }</div>
        </div>
    );
}

GithubProfileComparer.propTypes = {
    profiles: PropTypes.array.isRequired
};
 
export default GithubProfileComparer;