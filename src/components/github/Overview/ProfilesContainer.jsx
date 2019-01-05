import React from 'react';
import PropTypes from 'prop-types';
import ProfileComponent from './ProfileComponent';

const ProfilesContainer = ({ profiles }) => {
    return (
        <div className="row">{
            profiles.map((profile, i) => 
                (<ProfileComponent key={i} profile={profile}/>)
            )
        }</div>
    );
}

ProfilesContainer.propTypes = {
    profiles: PropTypes.array.isRequired
};

export default ProfilesContainer;