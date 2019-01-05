import React from 'react';
import PropTypes from 'prop-types';
import ProfileDetailsComponent from './ProfileDetailsComponent';

const ProfileComponent = ({ profile }) => {
    return (
        <div className="profile-container col-md-4">
            <div className="profile">
                <h2>{profile.username}</h2>
                <img
                className="profile-image"
                alt={profile.username}
                src={profile.data.pictureUrl}></img>
                <ProfileDetailsComponent data={profile.data}/>
            </div>
        </div>
    );
}

ProfileComponent.propTypes = {
    profile: PropTypes.shape({
        username: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired
    }).isRequired
};

export default ProfileComponent;