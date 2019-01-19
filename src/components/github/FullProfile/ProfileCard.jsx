import React from 'react';
import ProfileComponent from '../Overview/ProfileComponent';
import PropTypes from 'prop-types';

const ProfileCard = ({ profile }) => (
    <div className='profile-card row'>
        <div className='col-md-4'></div>
        <ProfileComponent profile={profile}/>
        <div className='col-md-4'></div>
    </div>
);

ProfileCard.propTypes = {
    profile: PropTypes.object.isRequired
};
 
export default ProfileCard;