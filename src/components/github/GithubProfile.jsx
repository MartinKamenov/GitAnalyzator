import React from 'react';
import PropTypes from 'prop-types';

const GithubPage = ({profile}) => {
    return ( 
        <div>{profile.username}</div>
    );
}

GithubPage.propTypes = {
    profile: PropTypes.object.isRequired
};
 
export default GithubPage;