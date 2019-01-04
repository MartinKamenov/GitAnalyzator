import React from 'react';
import PropTypes from 'prop-types';

const ProfilesContainer = ({ profiles }) => {
    return (
        <div>Profiles count: {profiles.length}</div>
    );
}

ProfilesContainer.propTypes = {
    profiles: PropTypes.array.isRequired
};

export default ProfilesContainer;